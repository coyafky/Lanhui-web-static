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

const SLUG = "highlander" as const;
const MODEL_NAME = "丰田汉兰达" as const;
const FITMENT_MODEL = "汉兰达" as const;
const PAGE_URL = "https://lanhui.com/product/toyota/highlander";

export const metadata: Metadata = {
  title: `${MODEL_NAME}适配件明细｜佛山顺德大良蓝辉轻改`,
  description:
    "蓝辉轻改丰田汉兰达专车适配件：脚垫、全包尾箱、尾箱垫、底盘护板、电动踏板。按年款对照材质与结构说明，具体型号留档门店对表。适装信息供参考，实际安装以门店现场检查为准。",
  alternates: { canonical: "/product/toyota/highlander" },
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
  heading: "丰田汉兰达 适配速查：你的配置能装哪些项目？",
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
    question: "我的丰田汉兰达能装哪些项目？",
    answer:
      "适配库收录 360全包尾箱（皮革，08款--14款、15款--21款、22款--，5门7座/7片、5门7座/5片、4门5座/6片，尾箱不带侧包，22款--区分左边带音响/不带音响）、360软包脚垫（皮革/丝圈，07款--14款、15款--21款、22款--，4门5座/5门7座，区分二排座中间有检修口/没有检修口）、底盘护板（材质含碳纤5.0mm、塑钢5.0mm、锰钢1.2mm、碳钢1.5mm、铝镁合金2.0mm，覆盖 2009-2017、2018-2021、2022-2023，排量 2.0T/3.5L/2.7L/2.5L，定制套件有专用支架）、电动踏板（2007-2014、2015-2017、2018-2021、2022+，取信号对插/线夹，2007-2014=对插）、平面尾箱垫（皮革，09款--14款、15款--19款、15款--21款、22款--，4门5座/5门7座，三排靠背五五分/连体，区分左边带音响/不带音响）。未收录的配置具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装丰田汉兰达脚垫、电动踏板？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按年款、座位数（5座/7座）、三排靠背形式、尾箱左侧是否带音响逐项对表，确认结构后再施工。",
  },
  {
    question: "汉兰达这些适配件需要备案吗？",
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
  brand: { "@type": "Brand", name: "丰田" },
  model: FITMENT_MODEL,
  category: "汽车轻改适配件服务",
  description:
    "蓝辉轻改提供丰田汉兰达专车适配件参考：360全包尾箱、360软包脚垫、底盘护板、电动踏板、平面尾箱垫，年款与材质以供应商适配库原文为准，实际安装以门店现场检查为准。",
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

export default function ToyotaHighlanderPage() {
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
