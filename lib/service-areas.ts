import { istanbulNeighborhoods } from "./istanbul-neighborhoods";

export type ServiceArea = { name: string; slug: string; type: "mahalle" | "ilce"; district?: string; province?: string };

const slugify = (value: string) => value.toLocaleLowerCase("tr-TR")
  .replaceAll("ı", "i").replaceAll("ğ", "g").replaceAll("ü", "u").replaceAll("ş", "s").replaceAll("ö", "o").replaceAll("ç", "c")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Küplüce çıkış noktasına yakın, yerel arama niyeti belirgin mahalleler.
// Liste arama hacmi iddiası değildir; gerçek hizmet kapsamı değişirse güncellenebilir.
const neighborhoodSelection: Record<string, string[]> = {
  "Üsküdar": ["Küplüce", "Beylerbeyi", "Çengelköy", "Altunizade", "Kuzguncuk", "İcadiye", "Kısıklı", "Bulgurlu", "Burhaniye", "Acıbadem", "Ünalan", "Selimiye", "Salacak", "Kandilli", "Küçük Çamlıca"],
  "Kadıköy": ["Koşuyolu", "Acıbadem", "Hasanpaşa", "Fikirtepe", "Göztepe", "Kozyatağı", "Bostancı", "Osmanağa"],
  "Ataşehir": ["Barbaros", "Atatürk", "Küçükbakkalköy", "İçerenköy", "Yenisahra", "Kayışdağı", "Esatpaşa", "Ferhatpaşa"],
  "Ümraniye": ["Çakmak", "Yamanevler", "İnkılap", "Armağanevler", "Atakent", "Dudullu Osb", "Aşağı Dudullu", "Şerifali"],
};

export const focusDistricts = ["Üsküdar", "Kadıköy", "Ataşehir", "Ümraniye"] as const;

export const serviceAreas: ServiceArea[] = [
  ...focusDistricts.map((name) => ({ name, slug: `${slugify(name)}-oto-cekici`, type: "ilce" as const, province: "İstanbul" })),
  ...focusDistricts.flatMap((district) => neighborhoodSelection[district].map((name) => {
    const neighborhood = istanbulNeighborhoods.find((item) => item.district === district && item.name.replace(/\s+Mah\.$/, "").trim() === name);
    if (!neighborhood) throw new Error(`Mahalle veri setinde bulunamadı: ${district} / ${name}`);
    return {
      name,
      slug: district === "Üsküdar" ? `${slugify(name)}-oto-cekici` : `${neighborhood.districtSlug}-${neighborhood.slug}-oto-cekici`,
      type: "mahalle" as const,
      district,
    };
  })),
];

export const priorityAreas = serviceAreas.filter((area) => area.type === "ilce");

export const findArea = (slug: string) => serviceAreas.find((area) => area.slug === slug);
