/**
 * 静态官网门店数据。
 *
 * 这里只收录经过业务确认、允许公开展示的真实门店；行政区目录由
 * `src/lib/regions/mainland-regions.ts` 统一提供，不能从门店反向推导。
 */

export type Store = {
  id: string;
  name: string;
  province: string;
  provinceLabel: string;
  city: string;
  cityLabel: string;
  district: string;
  address: string;
  phone: string;
  phoneTel: string;
  location: {
    longitude: number;
    latitude: number;
    coordinateSystem: "GCJ-02";
  };
  businessHours: string;
  description: string;
  image?: string;
  level?: "flagship" | "premium" | "specialty" | "member";
  isActive?: boolean;
};

export type Province = {
  slug: string;
  label: string;
  cityCount: number;
  storeCount: number;
};

export type City = {
  slug: string;
  province: string;
  label: string;
  storeCount: number;
};

export const stores: Store[] = [
  {
    id: "100001",
    name: "蓝辉轻改顺德大良店",
    province: "guangdong",
    provinceLabel: "广东省",
    city: "foshan",
    cityLabel: "佛山市",
    district: "顺德区大良",
    address: "广东省佛山市顺德区大良街道新桂社区云景路31号13栋103铺",
    phone: "18825425068",
    phoneTel: "tel:18825425068",
    location: {
      longitude: 113.264084,
      latitude: 22.849886,
      coordinateSystem: "GCJ-02",
    },
    businessHours: "09:00-18:00",
    image: "/images/stores/image.webp",
    description:
      "蓝辉轻改旗舰服务中心，位于顺德大良，提供轻改装备与汽车膜系施工服务。",
    level: "flagship",
    isActive: true,
  },
];

export function getStore(id: string): Store | undefined {
  return stores.find((store) => store.id === id);
}
