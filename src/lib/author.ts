/**
 * 作者档案（E-E-A-T / GEO 用）。
 *
 * 为什么需要：博客 Article schema 的 author 原先是 Organization，
 * 对应 GEO 诊断里最弱的一维 authority_trust（50/100）。
 * 把作者落成「真实可追责的个人主体」是把这一维拉起来的关键动作。
 *
 * 蓝小辉 = 蓝辉轻改品牌 IP 形象代言人，担任官网内容的署名作者。
 * 注意：schema 里同时给 Person（人物主体）与 worksFor（所属机构），
 * 让搜索引擎既能识别「作者是谁」，也能确认「他代表哪个品牌」。
 */

export type AuthorProfile = {
  /** schema.org Person 用的稳定 id（站内锚点） */
  id: string;
  name: string;
  /** 一句话身份说明，用于角色自述与 schema description */
  title: string;
  /** 头像路径（相对 public，用于 schema.image 与页面展示） */
  avatar: string;
  /** 作者主页（目前指向品牌介绍页；将来可独立成 /author/lanxiaohui） */
  url: string;
  description: string;
  /** 知识/经验声明，写进 schema 的 knowsAbout，供 AI 抽取专业领域 */
  knowsAbout: readonly string[];
};

export const LANXIAOHUI: AuthorProfile = {
  id: "lanxiaohui",
  name: "蓝小辉",
  title: "蓝辉轻改 · 首席内容官",
  avatar: "/images/authors/lanxiaohui.png",
  url: "/brand",
  description:
    "蓝小辉是蓝辉轻改的品牌 IP 形象代言人，也是官网内容的署名作者。" +
    "长期跟进顺德大良门店的实车施工，负责把改装选型、材料工艺与验收标准整理成可查证的指南。",
  knowsAbout: [
    "汽车改色膜",
    "隐形车衣（PPF）",
    "汽车窗膜",
    "轮毂升级",
    "电动踏板",
    "底盘护板",
    "新能源汽车轻改装",
  ],
};

/** 目前由蓝小辉统一署名；将来多作者时可在此扩展映射。 */
export const DEFAULT_AUTHOR = LANXIAOHUI;

export function getAuthor(authorId?: string): AuthorProfile {
  // 预留：目前只有一个署名主体，其余入参一律回落到蓝小辉
  void authorId;
  return DEFAULT_AUTHOR;
}
