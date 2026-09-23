import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BatteryCharging, CarFront, ChevronRight, Gauge, MapPin, Phone, Send, Truck, Wrench } from "lucide-react";
import { serviceAreas } from "@/lib/service-areas";
import { problemPages, servicePages } from "@/lib/seo-content";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";

const services = [
  { icon: Truck, number: "01", title: "Oto çekici", text: "Kayar kasa ile arızalı ve kazalı araç taşıma." },
  { icon: CarFront, number: "02", title: "Oto kurtarma", text: "Hareket edemeyen araçlara yerinde güvenli müdahale." },
  { icon: BatteryCharging, number: "03", title: "Akü & yol yardım", text: "Marş, akü, lastik ve küçük arıza desteği." },
  { icon: Wrench, number: "04", title: "Hassas taşıma", text: "Düşük şasi, motosiklet ve kilitli tekerlek desteği." },
];

const faqs = [
  ["Üsküdar’da çekici ne kadar sürede gelir?", "Süre konumunuza, trafik yoğunluğuna ve ekibin mevcut yerine göre değişir. Canlı konumunuz geldiğinde tahmini varış süresini paylaşırız."],
  ["Aracımın tekerlekleri dönmüyor, çekilebilir mi?", "Evet. Fren, şanzıman veya aks kaynaklı kilitlenmelerde aracı sürüklemeden, uygun yükleme aparatıyla kasaya alırız."],
  ["Gece çekici hizmeti var mı?", "Üsküdar ve çevresinde gece, hafta sonu ve tatiller dahil ulaşabileceğiniz 7/24 yol yardım desteği sunulur."],
];

export default function Home() {
  const neighborhoods = serviceAreas.filter((item) => item.type === "mahalle" && item.district === "Üsküdar");
  const nearbyDistricts = serviceAreas.filter((item) => item.type === "ilce" && item.name !== "Üsküdar");
  return <main className="dispatch-site">
    <header className="dispatch-header"><Link className="dispatch-brand" href="/"><BrandLogo /><span><b>BURAK</b><i>OTO KURTARMA</i></span></Link><nav><a href="#hizmetler">Hizmetler</a><a href="#bolgeler">Bölgeler</a><a href="#iletisim">Konum</a></nav><a className="dispatch-phone" href={`tel:${siteConfig.phone}`}><Phone size={16} />{siteConfig.phoneDisplay}</a><MobileMenu links={[{ href: "#hizmetler", label: "Hizmetler" }, { href: "#bolgeler", label: "Hizmet bölgeleri" }, { href: "#iletisim", label: "İletişim ve konum" }, { href: "#sss", label: "Sık sorulanlar" }]} /></header>

    <section className="dispatch-intro"><div className="intro-copy"><p className="location-line"><MapPin size={15} /> KÜPLÜCE · ÜSKÜDAR / İSTANBUL</p><h1>Yolda kaldığınızda,<br />işi bilen biri gelsin.</h1><p className="intro-text">Çekici, kurtarma veya yerinde yol yardımı için aracın durumunu kısaca anlatın; konumunuza uygun ekipmanı planlayalım.</p><div className="intro-actions"><a href={`tel:${siteConfig.phone}`}><Phone size={18} /><span><small>DOĞRUDAN ULAŞIN</small>{siteConfig.phoneDisplay}</span></a><a href={siteConfig.whatsapp} target="_blank" rel="noreferrer"><Send size={18} /><span><small>WHATSAPP</small>Konum gönder</span></a></div></div><div className="intro-operation"><Image src={siteConfig.hero} alt="İstanbul'da araç taşıyan çekici" fill sizes="(max-width: 800px) 100vw, 45vw" /><div className="operation-overlay" /><div className="operation-top"><span><i /> OPERASYON HATTI</span><b>7 / 24</b></div><div className="operation-note"><Gauge /><p><strong>Doğru ekipman</strong>Aracın durumuna göre çekici, aparat ve yükleme yöntemi belirlenir.</p></div></div></section>

    <section className="need-strip" aria-label="Hızlı hizmet seçimleri"><p>Şu an neye ihtiyacınız var?</p><div>{services.map((service) => <Link href={`/hizmetler/${servicePages[Number(service.number) - 1].slug}`} key={service.number}><span>{service.number}</span>{service.title}<ChevronRight /></Link>)}</div></section>

    <section className="field-notes" id="hizmetler"><div className="field-notes-head"><p>HİZMET ÇİZELGESİ / 01</p><h2>Araç türüne değil,<br /><em>duruma göre hareket ediyoruz.</em></h2><span>Her çağrıda önce güvenli yükleme yöntemini belirliyoruz.</span></div><div className="field-notes-list">{services.map((service) => { const Icon = service.icon; return <article key={service.number}><div><span>{service.number}</span><Icon /></div><h3>{service.title}</h3><p>{service.text}</p><Link href={`/hizmetler/${servicePages[Number(service.number) - 1].slug}`} aria-label={`${service.title} ayrıntıları`}><ArrowUpRight /></Link></article>; })}</div></section>

    <section className="how-it-works"><div className="how-photo"><Image src={siteConfig.logo} alt="Burak Oto Kurtarma" width={1254} height={1254} /></div><div className="how-copy"><p>ÇAĞRI AKIŞI / 02</p><h2>Üç kısa bilgi,<br />daha düzgün bir müdahale.</h2><ol><li><b>01</b><span><strong>Aracın durumunu söyleyin</strong>Çalışıyor mu, tekerlek dönüyor mu, kaza var mı?</span></li><li><b>02</b><span><strong>Konumunuzu paylaşın</strong>WhatsApp canlı konumu ve varsa bir fotoğraf yeterli.</span></li><li><b>03</b><span><strong>Net bilgi alın</strong>Uygun yöntem ve tahmini ücret işlemden önce paylaşılır.</span></li></ol></div></section>

    <section className="coverage" id="bolgeler"><div className="coverage-title"><p>HİZMET SAHASI / 03</p><h2>Merkez<br />Üsküdar.</h2><p>Küplüce çıkışlı çağrılarda önceliğimiz Üsküdar. Kadıköy, Ataşehir ve Ümraniye için de konumunuza göre destek planlıyoruz.</p></div><div className="coverage-map"><div className="map-grid" /><div className="map-pin pin-main"><i />Küplüce</div><div className="map-pin pin-one">Beylerbeyi</div><div className="map-pin pin-two">Altunizade</div><div className="map-pin pin-three">Çengelköy</div><span className="map-caption">ÜSKÜDAR / İSTANBUL</span></div><div className="coverage-links"><p>ÜSKÜDAR / YAKIN NOKTALAR</p>{neighborhoods.slice(0, 4).map((area) => <Link href={`/bolgeler/${area.slug}`} key={area.slug}>{area.name}<ArrowUpRight /></Link>)}<p className="nearby-label">YAKIN İLÇELER</p>{nearbyDistricts.map((area) => <Link href={`/bolgeler/${area.slug}`} key={area.slug}>{area.name} <ArrowUpRight /></Link>)}<Link className="all-areas" href="/hizmet-bolgeleri">Tüm hizmet bölgeleri <ArrowUpRight /></Link></div></section>

    <section className="search-desk"><div><p>YOLDA KALINCA / 04</p><h2>Aradığınız şeye<br />doğrudan gidin.</h2><p>Arıza türüne veya ihtiyaç duyduğunuz hizmete göre hazırlanmış açıklayıcı sayfalar.</p></div><div className="desk-columns"><article><h3>Hizmetler</h3>{servicePages.slice(0, 5).map((item) => <Link href={`/hizmetler/${item.slug}`} key={item.slug}>{item.name}<ChevronRight /></Link>)}</article><article><h3>Arıza rehberi</h3>{problemPages.slice(0, 5).map((item) => <Link href={`/cozumler/${item.slug}`} key={item.slug}>{item.name}<ChevronRight /></Link>)}</article></div></section>

    <section className="contact-board" id="iletisim"><div><p>MERKEZ NOKTA / 05</p><h2>Yol tarifine<br />tek dokunuş.</h2><address>Küplüce, Çaybaşı Sokak No:15<br />34676 Üsküdar / İstanbul</address><a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Google Haritalar’da aç <ArrowUpRight /></a></div><div className="contact-map"><iframe src={siteConfig.mapsEmbed} width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Burak Oto Kurtarma konumu" /></div></section>

    <section className="plain-faq" id="sss"><div><p>SIK SORULANLAR / 06</p><h2>Önce bilmeniz gerekenler.</h2></div><div>{faqs.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></section>
    <footer className="dispatch-footer"><div><BrandLogo /><p><b>Burak Oto Kurtarma</b><br />Üsküdar’da 7/24 çekici ve yol yardım.</p></div><a href={`tel:${siteConfig.phone}`}><Phone /> {siteConfig.phoneDisplay}</a><a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer"><MapPin /> Yol tarifi</a></footer>
  </main>;
}
