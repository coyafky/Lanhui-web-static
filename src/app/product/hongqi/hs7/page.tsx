import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HongqiModelDetailView } from "@/components/hongqi/model/HongqiModelDetailView";
import { hongqiModelDetails } from "@/lib/hongqi-model-detail";
import { getModelRoute } from "@/lib/product-routes";
import { hongqiFitment } from "@/lib/fitment/hongqi";
import { FitmentQuickCheck } from "@/components/vehicle-page/FitmentQuickCheck";
import { FaqSection } from "@/components/vehicle-page/FaqSection";
import type { FaqItem, FitmentConfig } from "@/components/vehicle-page";
import { safeJsonLd } from "@/lib/json-ld";

const SLUG = "hs7" as const;
const MODEL_NAME = "红旗HS7" as const;
const FITMENT_MODEL = "HS7" as const;
const PAGE_URL = "https://lanhui.com/product/hongqi/hs7";

export const metadata: Metadata = {
  title: `${MODEL_NAME}适配件明细｜佛山顺德大良蓝辉轻改`,
  description:
    "蓝辉轻改红旗HS7专车适配件：脚垫、平面尾箱垫、360全包尾箱、底盘护板、电动踏板。按年款对照材质与差异说明，具体型号留档门店对表。适装信息供参考，实际安装以门店现场检查为准。",
  alternates: { canonical: "/product/hongqi/hs7" },
};

// 适配库原文规格（剔除供应商编号 code；as const 只读，map 展开为可变结构）
type RawFitmentSpec = {
  label?: string;
  material?: string;
  year?: string;
  note?: string;
  date?: string;
  dynamics?: string;
};

const fitmentModels: FitmentConfig["models"] = hongqiFitment.models
  .filter((m) => m.model === FITMENT_MODEL)
  .map((m) => ({
    model: m.model,
    projects: m.projects.map((p) => ({
      name: p.name,
      specs: p.specs.map((s) => {
        const raw = s as RawFitmentSpec;
        return {
          label: raw.label,
          material: raw.material,
          year: raw.year,
          note: raw.note,
          date: raw.date,
          dynamics: raw.dynamics,
        };
      }),
    })),
  }))
  .filter((m) => m.projects.length > 0);

const fitmentConfig: FitmentConfig = {
  heading: "红旗HS7 适配速查：你的配置能装哪些项目？",
  models: fitmentModels,
};

// 与 FitmentQuickCheck 默认合并口径一致：同名项目合并后作为 ItemList / Offer 清单
const mergedProjects = [
  ...new Map(
    fitmentModels.flatMap((m) => m.projects).map((p) => [p.name, p]),
  ).values(),
];

const faqs: FaqItem[] = [
  {
    question: "我的红旗HS7能装哪些项目？",
    answer:
      "适配库收录 底盘护板（材质含碳纤5.0mm、塑钢5.0mm、锰钢1.2mm、碳钢1.5mm、铝镁合金2.0mm，2019/2022，保护发动机、变速箱，3.0T、2.0T，两件套）、电动踏板（2.0T/3.0T，2019-2022，取信号线夹）、360软包脚垫（19款--21款、19款--22款为二排外侧有倒背把手、悬挂油门；22款--23款为二排外侧没有倒背把手、悬挂油门；23款--为落地油门，PHEV一样）、平面尾箱垫（19款--21款分5座/分体7座，22款--悬挂油门，23款--落地油门）、360全包尾箱（19款--5片/7片，22款--4门5座、悬挂油门，23款--落地油门）。未收录的配置具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装红旗HS7脚垫、电动踏板？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按年款、排量（2.0T/3.0T）、悬挂油门/落地油门、二排外侧是否有倒背把手、座位数逐项对表，确认结构后再施工。",
  },
  {
    question: "红旗HS7这些适配件需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板、电动踏板属车内防护与加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界；页面不做备案承诺。",
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${MODEL_NAME} 适配件`,
  url: PAGE_URL,
  numberOfItems: mergedProjects.length,
  itemListElement: mergedProjects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      category: "汽车轻改适配件",
    },
  })),
};

const vehicleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Vehicle",
  name: `${MODEL_NAME} 适配件明细`,
  brand: { "@type": "Brand", name: "红旗" },
  model: FITMENT_MODEL,
  category: "汽车轻改适配件服务",
  description:
    "蓝辉轻改提供红旗HS7专车适配件参考：底盘护板、电动踏板、360软包脚垫、平面尾箱垫、360全包尾箱，年款与材质以供应商适配库原文为准，实际安装以门店现场检查为准。",
  url: PAGE_URL,
  provider: {
    "@type": "AutoRepair",
    name: "蓝辉轻改",
    address: {
      "@type": "PostalAddress",
      addressRegion: "广东省",
      addressLocality: "佛山市顺德区",
    },
    areaServed: "全国",
  },
  makesOffer: mergedProjects.map((p) => ({
    "@type": "Offer",
    name: `${MODEL_NAME} ${p.name} 适配件方案`,
    category: "汽车轻改适配件",
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HongqiHS7Page() {
  const route = getModelRoute("hongqi", SLUG);
  if (!route || route.status !== "live") notFound();
  const detail = hongqiModelDetails[SLUG];
  if (!detail) notFound();
  return (
    <main id="main-content" tabIndex={-1} className="flex-grow">
      <HongqiModelDetailView slug={SLUG} detail={detail} />

      <FitmentQuickCheck config={fitmentConfig} theme="red" />

      <FaqSection items={faqs} theme="red" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(vehicleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
    </main>
  );
}
