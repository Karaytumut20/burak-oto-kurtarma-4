import type { Metadata } from "next";
import { SeoDirectory } from "@/components/seo-directory";
import { routePages } from "@/lib/seo-content";
export const metadata:Metadata={title:"Üsküdar Yol ve Güzergâh Çekici Noktaları",description:"Üsküdar sahil yolu, köprü, D-100 ve TEM bağlantılarında 7/24 çekici."};
export default function Page(){return <SeoDirectory eyebrow="YOL VE GÜZERGÂHLAR" title="YOLDA NEREDE KALDINIZ?" intro="Ana yollar, tüneller, sanayi siteleri ve kritik kavşaklara yönelik hizmet noktalarımızı inceleyin." groups={[{title:"Aktif güzergâhlar",links:routePages.map(x=>({name:x.name,href:`/guzergahlar/${x.slug}`,detail:x.short}))}]}/>}
