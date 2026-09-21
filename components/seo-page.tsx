import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Clock3, MapPin, Phone, ShieldCheck } from "lucide-react";
import type { SeoEntry } from "@/lib/seo-content";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";

export function SeoPage({ entry, eyebrow, title, location, related }: { entry: SeoEntry; eyebrow: string; title?: string; location?: string; related: {name:string;href:string}[] }) {
  const heading = title ?? entry.name;
  return <main className="area-page seo-page">
    <header className="site-header area-header"><Link className="brand" href="/"><BrandLogo /></Link><nav><Link href="/hizmetler">Hizmetler</Link><Link href="/hizmet-bolgeleri">Bölgeler</Link><Link href="/cozumler">Arıza Rehberi</Link></nav><a className="header-call" href={`tel:${siteConfig.phone}`}><Phone size={18}/>{siteConfig.phoneDisplay}</a><MobileMenu links={[{href:"/hizmetler",label:"Hizmetler"},{href:"/hizmet-bolgeleri",label:"Hizmet bölgeleri"},{href:"/cozumler",label:"Arıza rehberi"},{href:"/guzergahlar",label:"Güzergâhlar"}]} /></header>
    <section className="area-hero seo-hero"><div className="area-grid"/><div className="area-crumb"><Link href="/"><ArrowLeft size={16}/> Ana sayfa</Link><span>/</span><span>{eyebrow}</span></div><div className="area-hero-copy"><div className="eyebrow"><span/>{eyebrow}</div><h1>{location && <>{location}<br/></>}<em>{heading}</em></h1><p>{entry.short} {entry.intro}</p><div className="hero-actions"><a className="primary-cta" href={`tel:${siteConfig.phone}`}><Phone/> HEMEN ARA <ArrowUpRight/></a><a className="secondary-cta" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">KONUM GÖNDER</a></div></div><aside className="area-status"><span className="live-dot"/> ŞU AN AÇIK<div><Clock3/><b>7/24</b><small>Kesintisiz hizmet</small></div><div><MapPin/><b>Üsküdar</b><small>Üsküdar ve çevresi</small></div></aside></section>
    <section className="area-content section-pad"><article><small>BURAK OTO KURTARMA</small><h2>{heading.toLocaleUpperCase("tr-TR")}</h2><p>{entry.intro}</p><p>Konumunuzu, aracın marka-modelini ve hareket edip edemediğini paylaştığınızda doğru ekipmanı belirliyoruz. Fiyatı işlemden önce netleştiriyor, aracınızı istediğiniz servis veya adrese kontrollü biçimde ulaştırıyoruz.</p></article><aside><h3>BU HİZMETTE</h3><ul>{entry.bullets.map(item=><li key={item}><Check/>{item}</li>)}<li><ShieldCheck/>Dikkatli ve kontrollü taşıma</li></ul></aside></section>
    <section className="area-callout"><div><small>7 GÜN 24 SAAT</small><h2>YOLDA KALDIYSANIZ ARAYIN</h2><p>Konumunuzu iletin, aracınıza uygun ekibi yönlendirelim.</p></div><a href={`tel:${siteConfig.phone}`}><Phone/>{siteConfig.phoneDisplay}</a></section>
    <section className="nearby section-pad"><small>FAYDALI BAĞLANTILAR</small><h2>İLGİLİ SAYFALAR</h2><div>{related.slice(0,8).map(item=><Link href={item.href} key={item.href}>{item.name}<ArrowUpRight/></Link>)}</div></section>
    <footer className="footer"><div className="brand"><BrandLogo footer /></div><div className="footer-name"><b>{siteConfig.shortName}</b><span>7/24 oto çekici ve yol yardım</span></div><address><a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Küplüce, Üsküdar / İstanbul<br/>Google Haritalar’da yol tarifi</a></address><div><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a><small>7 gün 24 saat açık</small></div></footer>
  </main>;
}
