import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPage } from "@/components/seo-page";
import { findSeoEntry, problemPages, servicePages } from "@/lib/seo-content";

export function generateStaticParams(){ return problemPages.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const e=findSeoEntry(problemPages,slug);if(!e)return{};return{title:`${e.name}, Ne Yapmalıyım? | Üsküdar 7/24 Çekici`,description:`${e.short} Üsküdar'da 7/24 yol yardım ve çekici: Burak Oto Kurtarma.`,alternates:{canonical:`/cozumler/${slug}`}};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const entry=findSeoEntry(problemPages,slug);if(!entry)notFound();return <SeoPage entry={entry} eyebrow="ARIZA VE ACİL DURUM" title={`${entry.name}: Ne Yapmalı?`} related={servicePages.map(x=>({name:x.name,href:`/hizmetler/${x.slug}`}))}/>}
