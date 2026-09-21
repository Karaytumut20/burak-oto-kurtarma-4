import { istanbulNeighborhoods } from "./istanbul-neighborhoods";

export type ServiceArea = { name: string; slug: string; type: "mahalle" | "ilce"; district?: string; province?: string };

const slugify = (value: string) => value.toLocaleLowerCase("tr-TR")
  .replaceAll("ı", "i").replaceAll("ğ", "g").replaceAll("ü", "u").replaceAll("ş", "s").replaceAll("ö", "o").replaceAll("ç", "c")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const uskudarNeighborhoods = istanbulNeighborhoods
  .filter((area) => area.district === "Üsküdar")
  .map((area) => area.name.replace(/\s+Mah\.$/, ""));

// Üsküdar merkezli çağrılarda sık istenen Anadolu Yakası ilçeleri ile Kocaeli geçiş noktaları.
const nearbyDistricts = ["Üsküdar", "Kadıköy", "Ümraniye", "Ataşehir", "Beykoz", "Çekmeköy", "Sancaktepe", "Maltepe", "Kartal", "Pendik", "Sultanbeyli", "Tuzla"];

const nearbyKocaeliDistricts = ["Gebze", "Darıca", "Çayırova"];

export const serviceAreas: ServiceArea[] = [
  ...uskudarNeighborhoods.map((name) => ({ name, slug: `${slugify(name)}-oto-cekici`, type: "mahalle" as const, district: "Üsküdar" })),
  ...istanbulNeighborhoods
    .filter((area) => ["Kadıköy", "Ümraniye", "Ataşehir", "Beykoz", "Çekmeköy", "Sancaktepe", "Maltepe", "Kartal", "Pendik", "Sultanbeyli", "Tuzla"].includes(area.district))
    .map((area) => ({
      name: area.name.replace(/\s+Mah\.$/, ""),
      slug: `${area.districtSlug}-${area.slug}-oto-cekici`,
      type: "mahalle" as const,
      district: area.district,
    })),
  ...nearbyDistricts.map((name) => ({ name, slug: `${slugify(name)}-oto-cekici`, type: "ilce" as const, province: "İstanbul" })),
  ...nearbyKocaeliDistricts.map((name) => ({ name, slug: `${slugify(name)}-oto-cekici`, type: "ilce" as const, province: "Kocaeli" }))
];

export const priorityAreas = serviceAreas.filter((area) => nearbyDistricts.includes(area.name) && area.type === "ilce");

export const findArea = (slug: string) => serviceAreas.find((area) => area.slug === slug);
