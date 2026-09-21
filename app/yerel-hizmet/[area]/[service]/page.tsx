import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPage } from "@/components/seo-page";
import { serviceAreas } from "@/lib/service-areas";
import { findSeoEntry, servicePages } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site-config";

const districts=serviceAreas.filter(x=>x.type==="ilce");
const localServices=servicePages.slice(0,6);
export function generateStaticParams(){return districts.flatMap(area=>localServices.map(service=>({area:area.slug.replace("-oto-cekici",""),service:service.slug})));}
export async function generateMetadata({params}:{params:Promise<{area:string;service:string}>}):Promise<Metadata>{const p=await params;const area=districts.find(x=>x.slug===`${p.area}-oto-cekici`);const service=findSeoEntry(localServices,p.service);if(!area||!service)return{};return{title:`${area.name} ${service.name} | 7/24`,description:`${area.name} bölgesinde ${service.name.toLocaleLowerCase("tr-TR")}. ${service.short} ${siteConfig.phoneDisplay}.`,alternates:{canonical:`/yerel-hizmet/${p.area}/${p.service}`}};}
export default async function Page({params}:{params:Promise<{area:string;service:string}>}){const p=await params;const area=districts.find(x=>x.slug===`${p.area}-oto-cekici`);const entry=findSeoEntry(localServices,p.service);if(!area||!entry)notFound();return <SeoPage entry={{...entry,intro:`${area.name} ilçesinde ${entry.intro.charAt(0).toLocaleLowerCase("tr-TR")}${entry.intro.slice(1)} Ana arter, mahalle ve sanayi bağlantılarındaki konumlara 7/24 ekip yönlendiriyoruz.`}} eyebrow="YEREL HİZMET" location={area.name} related={localServices.filter(x=>x.slug!==entry.slug).map(x=>({name:`${area.name} ${x.name}`,href:`/yerel-hizmet/${p.area}/${x.slug}`}))}/>}
