/**
 * 蓝辉轻改 LANHUI 品牌信息
 *
 * 把品牌名称、成立时间、定位等集中到数据层，
 * 方便 Header / Footer / Hero / 品牌页 等统一引用。
 */

export const brand = {
  zh: "蓝辉轻改",
  en: "LANHUI",
  slogan: "让爱车更有型，也更好用",
  foundedYear: 2026,
  currentStore: "顺德大良店",
  city: "广东佛山 · 顺德大良",
  phone: "18825425068",
  phoneTel: "tel:18825425068",
  icp: "粤ICP备2026102356号-2",
  police: "公安备案号待备案",
  address: "广东省佛山市顺德区大良街道新桂社区云景路31号13栋103铺",
  businessHours: "09:00-18:00",
  email: "13377650377@163.com",
  shortDescription:
    "蓝辉轻改是面向汽车轻改装与汽车膜服务的品牌，从顺德大良出发，提供电动踏板、轮毂升级、底盘升级、汽车窗膜、改色膜、隐形车衣等一站式升级方案。",
} as const;

export type Brand = typeof brand;
