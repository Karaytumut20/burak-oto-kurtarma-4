import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPage } from "@/components/seo-page";
import { findSeoEntry, routePages, servicePages } from "@/lib/seo-content";

export function generateStaticParams(){return routePages.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const e=findSeoEntry(routePages,slug);if(!e)return{};return{title:`${e.name} | Üsküdar 7/24 Yol Yardım`,description:`${e.short} Hızlı konum desteği Burak Oto Kurtarma ile.`,alternates:{canonical:`/guzergahlar/${slug}`}};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const entry=findSeoEntry(routePages,slug);if(!entry)notFound();return <SeoPage entry={entry} eyebrow="YOL VE GÜZERGÂH" related={servicePages.map(x=>({name:x.name,href:`/hizmetler/${x.slug}`}))}/>}
