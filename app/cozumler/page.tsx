import type { Metadata } from "next";
import { SeoDirectory } from "@/components/seo-directory";
import { problemPages, servicePages } from "@/lib/seo-content";
export const metadata:Metadata={title:"Araç Arızaları ve Acil Çekici Rehberi",description:"Şanzıman, aks, triger, akü, lastik ve motor arızalarında ne yapılmalı? 7/24 çekici rehberi."};
export default function Page(){return <SeoDirectory eyebrow="ACİL DURUM REHBERİ" title="ARACINIZDA NE OLDU?" intro="Belirtiye göre aracınızı hareket ettirmenin güvenli olup olmadığını ve hangi kurtarma yönteminin gerektiğini inceleyin." groups={[{title:"Arıza ve kaza senaryoları",links:problemPages.map(x=>({name:x.name,href:`/cozumler/${x.slug}`,detail:x.short}))},{title:"Uygun hizmetler",links:servicePages.map(x=>({name:x.name,href:`/hizmetler/${x.slug}`}))}]}/>}
