import type { Metadata } from "next";
import { SeoDirectory } from "@/components/seo-directory";
import { routePages, servicePages } from "@/lib/seo-content";
export const metadata:Metadata={title:"Üsküdar Oto Kurtarma Hizmetleri | 7/24 Çekici",description:"Üsküdar ve çevresinde oto çekici, oto kurtarma, yol yardım, akü takviyesi ve araç taşıma hizmetleri."};
export default function Page(){return <SeoDirectory eyebrow="HİZMET REHBERİ" title="OTO KURTARMA HİZMETLERİ" intro="Aracınıza ve bulunduğunuz duruma uygun hizmeti inceleyin. Emin değilseniz arayın; doğru ekipmanı birlikte belirleyelim." groups={[{title:"Hizmetler",links:servicePages.map(x=>({name:x.name,href:`/hizmetler/${x.slug}`,detail:x.short}))},{title:"Yoğun hizmet güzergâhları",links:routePages.map(x=>({name:x.name,href:`/guzergahlar/${x.slug}`}))}]}/>}
