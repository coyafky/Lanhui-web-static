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

const SLUG = "land-cruiser" as const;
const MODEL_NAME = "丰田兰德酷路泽" as const;
const PAGE_URL = "https://lanhui.com/product/toyota/land-cruiser";

// 兰德酷路泽家族：主节 + LC 各代 + 原车座位数/改制变体（精确匹配，不含独立「酷路泽」节及其它车型）
const FITMENT_ALLOWED = [
  "兰德酷路泽",
  "兰德酷路泽LC100",
  "兰德酷路泽LC120",
  "兰德酷路泽LC150",
  "兰德酷路泽LC200",
  "兰德酷路泽LC250",
  "兰德酷路泽LC300",
  "兰德酷路泽LC71",
  "兰德酷路泽LC76",
  "兰德酷路泽LC78",
  "兰德酷路泽LC79",
  "兰德酷路泽LC80",
  "兰德酷路泽LC95",
  "酷路泽 原车7座做5座",
  "酷路泽 原车7座做7座",
  "酷路泽 7位做5位",
  "陆地巡洋舰 原车7座做5座",
  "陆地巡洋舰 原车5座",
] as const;

export const metadata: Metadata = {
  title: `${MODEL_NAME}适配件明细｜佛山顺德大良蓝辉轻改`,
  description:
    "蓝辉轻改丰田兰德酷路泽专车适配件：脚垫、全包尾箱、尾箱垫、底盘护板。按年款对照材质与结构说明，具体型号留档门店对表。适装信息供参考，实际安装以门店现场检查为准。",
  alternates: { canonical: "/product/toyota/land-cruiser" },
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
  .filter((m) => (FITMENT_ALLOWED as readonly string[]).includes(m.model))
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
  heading: "丰田兰德酷路泽 适配速查：你的配置能装哪些项目？",
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
    question: "我的丰田兰德酷路泽能装哪些项目？",
    answer:
      "适配库按家族收录：360软包脚垫（主节覆盖 04款--06款、07款--18款、10款--21款、22款--，区分二排座椅下带出风口/不带出风口、中东版、副驾有灭火器/没有灭火器）、底盘护板（铝镁合金，主节覆盖 LC95、LC80、LC79、LC78、LC76、LC71、LC300、LC250、LC200、LC150、LC120、LC100，含油箱护板、主油箱护板、副油箱护板；LC 各代另按排量分档，如 LC100-4.7/4.5、LC120-2.7/4.0、LC150-4.0/kdss/2.7/2.8/3.0柴油/3.5、LC200-4.0/5.7、LC250-2.4T/2.8T柴油、LC300-3.5TT/GR运动版）、360全包尾箱（5门7座 22款--，尾箱不带侧包）、平面尾箱垫（主节 04款--06款、07款--18款、11款--18款、22款--；并按原车7座做5座/做7座、7位做5位、陆地巡洋舰原车7座做5座/原车5座等座位改制分列）。具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装兰德酷路泽脚垫、底盘护板？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按具体 LC 代号、年款、排量、是否中东版、原车座位数与改制方式逐项对表，确认结构后再施工。",
  },
  {
    question: "兰德酷路泽这些适配件需要备案吗？",
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
  model: "兰德酷路泽",
  category: "汽车轻改适配件服务",
  description:
    "蓝辉轻改提供丰田兰德酷路泽家族（LC100/120/150/200/250/300/71/76/78/79/80/95 及座位改制变体）专车适配件参考：360软包脚垫、底盘护板、360全包尾箱、平面尾箱垫，年款与材质以供应商适配库原文为准，实际安装以门店现场检查为准。",
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

export default function ToyotaLandCruiserPage() {
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
