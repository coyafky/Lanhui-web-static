import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToyotaModelDetailView } from "@/components/toyota/model/ToyotaModelDetailView";
import { toyotaModelDetails } from "@/lib/toyota-model-detail";
import { getModelRoute } from "@/lib/product-routes";
import { toyotaFitment } from "@/lib/fitment/toyota";
import { FitmentQuickCheck } from "@/components/vehicle-page/FitmentQuickCheck";
import { FaqSection } from "@/components/vehicle-page/FaqSection";
import type { FaqItem, FitmentConfig } from "@/components/vehicle-page";
import { safeJsonLd } from "@/lib/json-ld";

const SLUG = "prado" as const;
const MODEL_NAME = "丰田普拉多" as const;
const FITMENT_MODEL = "普拉多" as const;
const PAGE_URL = "https://lanhui.com/product/toyota/prado";

export const metadata: Metadata = {
  title: `${MODEL_NAME}适配件明细｜佛山顺德大良蓝辉轻改`,
  description:
    "蓝辉轻改丰田普拉多专车适配件：脚垫、全包尾箱、尾箱垫、底盘护板。按年款对照材质与结构说明，具体型号留档门店对表。适装信息供参考，实际安装以门店现场检查为准。",
  alternates: { canonical: "/product/toyota/prado" },
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

const fitmentModels: FitmentConfig["models"] = toyotaFitment.models
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
  heading: "丰田普拉多 适配速查：你的配置能装哪些项目？",
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
    question: "我的丰田普拉多能装哪些项目？",
    answer:
      "适配库收录 360全包尾箱（皮革，10款--19款，4门5座/5门7座8片，尾箱不带侧包，含右边大耳朵方案）、360软包脚垫（皮革/丝圈，02款-03款、04款--09款、10款--19款、24款--，分2门5座、4门5座、5门7座、5门8座、5门6座，区分前排扶手箱中间带冰箱/不带冰箱、三排连尾箱）、底盘护板（保护水箱、发动机、变速箱、油箱四件套；2024 2.4T 为铝镁合金2.0mm/5.0mm 4件套）、平面尾箱垫（皮革，05款--09款、10款--18款、14款--18款、24款--，2门5座可塞入车体，分右侧小耳朵、4门5座、5门6座）。未收录的配置具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装丰田普拉多脚垫、底盘护板？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按年款、车门与座位数（2门/4门/5门、5座/6座/7座/8座）、扶手箱是否带冰箱逐项对表，确认结构后再施工。",
  },
  {
    question: "普拉多这些适配件需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板属车内防护与底盘加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界；页面不做备案承诺。",
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
  brand: { "@type": "Brand", name: "丰田" },
  model: FITMENT_MODEL,
  category: "汽车轻改适配件服务",
  description:
    "蓝辉轻改提供丰田普拉多专车适配件参考：360全包尾箱、360软包脚垫、底盘护板、平面尾箱垫，年款与材质以供应商适配库原文为准，实际安装以门店现场检查为准。",
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

export default function ToyotaPradoPage() {
  const route = getModelRoute("toyota", SLUG);
  if (!route || route.status !== "live") notFound();
  const detail = toyotaModelDetails[SLUG];
  if (!detail) notFound();
  return (
    <main id="main-content" tabIndex={-1} className="flex-grow">
      <ToyotaModelDetailView slug={SLUG} detail={detail} />

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
