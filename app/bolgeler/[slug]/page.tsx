import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Clock3, MapPin, Navigation, Phone, ShieldCheck, Truck } from "lucide-react";
import { findArea, serviceAreas } from "@/lib/service-areas";
import { servicePages } from "@/lib/seo-content";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";

const phone = siteConfig.phone;

export function generateStaticParams() { return serviceAreas.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const area = findArea(slug);
  if (!area) return {};
  const place = area.type === "mahalle" ? `${area.name}, ${area.district}` : `${area.name}, ${area.province ?? "İstanbul"}`;
  return {
    title: `${area.name} Oto Çekici | 7/24 Oto Kurtarma`,
    description: `${place} bölgesinde 7/24 oto çekici, oto kurtarma ve yol yardım. Burak Oto Kurtarma: ${siteConfig.phoneDisplay}.`,
    alternates: { canonical: `/bolgeler/${area.slug}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const area = findArea(slug);
  if (!area) notFound();
  const place = area.type === "mahalle" ? `${area.name} Mahallesi, ${area.district}` : `${area.name}, ${area.province ?? "İstanbul"}`;
  const nearby = serviceAreas
    .filter(a => a.slug !== area.slug && (area.type === "mahalle" ? a.type === "mahalle" && a.district === area.district : a.type === "ilce"))
    .slice(0, 8);
  const districtArea = area.type === "ilce" ? area : serviceAreas.find(a => a.type === "ilce" && a.name === area.district);
  const districtKey = districtArea?.slug.replace("-oto-cekici", "");
  const districtNeighborhoods = area.type === "ilce" ? serviceAreas.filter(a => a.type === "mahalle" && a.district === area.name) : [];
  const localQueries = [
    `${area.name} çekici`, `${area.name} oto çekici`, `${area.name} oto kurtarma`,
    `${area.name} en yakın çekici`, `${area.name} 7/24 çekici`, `${area.name} yol yardım`,
    `${area.name} ahtapot çekici`, `${area.name} akü takviyesi`, `${area.name} kazalı araç çekici`,
    `${area.name} araç taşıma`, `${area.name} 7/24 oto kurtarma`, `${area.name} yol yardım numarası`,
  ];
  const localFaqs = [
    { q: `${area.name} çekici ne kadar sürede gelir?`, a: `Varış süresi ${place} içindeki konumunuza, trafiğe ve uygun ekibin mesafesine göre değişir. Canlı konumunuzu gönderdiğinizde tahmini süreyi paylaşırız.` },
    { q: `${area.name} bölgesinde gece çekici var mı?`, a: `Evet. ${area.name} ve çevresinde gece, hafta sonu ve resmî tatiller dahil 7 gün 24 saat oto çekici ve yol yardım hizmeti veriyoruz.` },
    { q: `${area.name} oto çekici fiyatı nasıl belirlenir?`, a: "Ücret; aracın bulunduğu nokta, teslim adresi, araç tipi, aracın yürür durumu ve gereken ekipmana göre belirlenir. İşlem başlamadan önce fiyatı netleştiririz." },
    { q: `Tekerlekleri kilitli araç ${area.name} bölgesinden alınabilir mi?`, a: "Evet. Otomatik vites, aks veya tekerlek kilitlenmesi durumunda ahtapot vinç ve uygun yükleme aparatlarıyla aracı sürüklemeden kasaya alabiliriz." },
  ];
  return <main className="area-page">
    <header className="site-header area-header"><Link className="brand" href="/" aria-label="Ana sayfa"><BrandLogo /></Link><nav><Link href="/#hizmetler">Hizmetler</Link><Link href="/#bolgeler">Bölgeler</Link><Link href="/#iletisim">Konum</Link></nav><a className="header-call" href={`tel:${phone}`}><Phone size={18}/>{siteConfig.phoneDisplay}</a><MobileMenu links={[{href:"/hizmetler",label:"Hizmetler"},{href:"/hizmet-bolgeleri",label:"Hizmet bölgeleri"},{href:"/cozumler",label:"Arıza rehberi"},{href:"/guzergahlar",label:"Güzergâhlar"}]} /></header>
    <section className="area-hero">
      <div className="area-grid" aria-hidden="true"/><div className="area-crumb"><Link href="/"><ArrowLeft size={16}/> Ana sayfa</Link><span>/</span><span>Hizmet bölgeleri</span></div>
      <div className="area-hero-copy"><div className="eyebrow"><span/> 7/24 AKTİF ÇEKİCİ</div><h1>{area.name}<br/><em>OTO ÇEKİCİ</em></h1><p>{place} bölgesinde aracınız arızalandıysa konumunuzu gönderin. Aracın durumuna uygun ekipmanla güvenli taşıma için yola çıkalım.</p><div className="hero-actions"><a className="primary-cta" href={`tel:${phone}`}><Phone/> HEMEN ARA <ArrowUpRight/></a><a className="secondary-cta" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">KONUM GÖNDER</a></div></div>
      <aside className="area-status"><span className="live-dot"/> ŞU AN AÇIK<div><Clock3/><b>7/24</b><small>Kesintisiz hizmet</small></div><div><Navigation/><b>Üsküdar</b><small>Üsküdar ve çevresi</small></div></aside>
    </section>
    <section className="area-content section-pad"><article><small>{area.name.toLocaleUpperCase("tr-TR")} YOL YARDIM</small><h2>ARACINIZA UYGUN YÖNTEM,<br/>GÜVENLİ TRANSFER.</h2><p>{place} ve yakınında binek araç, SUV, motosiklet, minibüs ve hafif ticari araçlar için oto kurtarma hizmeti veriyoruz. Tekerlek kilitlenmesi, aks kırılması veya otomatik vites arızası gibi aracın yürüyemediği durumlarda uygun aparatları kullanıyoruz.</p><p><strong>{area.name} oto çekici</strong>, <strong>{area.name} 7/24 yol yardım</strong>, akü takviyesi, kazalı araç çekici ve şehirler arası araç taşıma aramalarında; aracın durumu ile konuma göre doğru hizmeti planlıyoruz. {area.name} bölgesinde yolda kaldığınızda konumu, araç tipini ve varış noktasını paylaşmanız hızlı yönlendirme için yeterlidir.</p><p>Aracın durumu, alınacağı nokta ve teslim adresini telefonda netleştirerek doğru ekipmanla yola çıkıyoruz. Ücreti işlemden önce paylaşıyor, aracınızı tercih ettiğiniz servis ya da adrese taşıyoruz.</p></article><aside><h3>HİZMETLER</h3><ul><li><Truck/>Hidrolik kayar kasa çekici</li><li><ShieldCheck/>Ahtapot vinç ile hasarsız yükleme</li><li><MapPin/>Şehir içi ve şehirler arası nakil</li><li><Check/>Akü takviyesi ve yol yardım</li></ul></aside></section>
    <section className="local-seo-links section-pad"><div><small>{area.name.toLocaleUpperCase("tr-TR")} HİZMETLERİ</small><h2>NEYE İHTİYACINIZ VAR?</h2>{districtKey&&<div className="seo-link-grid">{servicePages.slice(0,6).map(service=><Link key={service.slug} href={`/yerel-hizmet/${districtKey}/${service.slug}`}>{area.type==="mahalle"?area.district:area.name} {service.name}<ArrowUpRight/></Link>)}</div>}</div>{districtNeighborhoods.length>0&&<div className="district-neighborhood-list"><h3>{area.name} mahalleleri</h3><div>{districtNeighborhoods.map(n=><Link key={n.slug} href={`/bolgeler/${n.slug}`}>{n.name}</Link>)}</div></div>}</section>
    <section className="local-intent-section section-pad"><div className="local-intent-heading"><div><small>{area.name.toLocaleUpperCase("tr-TR")} YEREL ARAMALARI</small><h2>YOLDA KALANLAR<br/>NE ARIYOR?</h2></div><p>Arıza türü bilinmese bile en yakın yardıma ulaşmak için bu ifadeler kullanılır. Her talepte araç tipi ve konuma göre doğru ekipmanı belirliyoruz.</p></div><div className="local-query-grid">{localQueries.map((query,i)=><span key={query}><b>{String(i+1).padStart(2,"0")}</b>{query}</span>)}</div><div className="local-faq-list">{localFaqs.map((faq,i)=><details key={faq.q}><summary><span>{String(i+1).padStart(2,"0")}</span>{faq.q}<b>+</b></summary><p>{faq.a}</p></details>)}</div></section>
    <section className="area-callout"><div><small>BURAK OTO KURTARMA</small><h2>{area.name} bölgesinde yolda mı kaldınız?</h2><p>Konumunuzu paylaşın, uygun aracı yönlendirelim.</p></div><a href={`tel:${phone}`}><Phone/>{siteConfig.phoneDisplay}</a></section>
    <section className="nearby section-pad"><small>DİĞER HİZMET NOKTALARI</small><h2>YAKIN BÖLGELER</h2><div>{nearby.map(a=><Link key={a.slug} href={`/bolgeler/${a.slug}`}>{a.name} Oto Çekici <ArrowUpRight/></Link>)}</div></section>
    <footer className="footer"><div className="brand"><BrandLogo footer /></div><div className="footer-name"><b>{siteConfig.shortName}</b><span>7/24 oto çekici ve yol yardım</span></div><address><a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Küplüce, Üsküdar / İstanbul<br/>Google Haritalar’da yol tarifi</a></address><div><a href={`tel:${phone}`}>{siteConfig.phoneDisplay}</a><small>7 gün 24 saat açık</small></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Service",name:`${area.name} Oto Çekici`,serviceType:"Oto Kurtarma ve Yol Yardım",provider:{"@type":"AutomotiveBusiness",name:siteConfig.name,telephone:siteConfig.phone},areaServed:{"@type":area.type==="mahalle"?"Place":"City",name:place}})}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:localFaqs.map(faq=>({"@type":"Question",name:faq.q,acceptedAnswer:{"@type":"Answer",text:faq.a}}))})}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Ana Sayfa",item:"https://burakotokurtarma.com"},{"@type":"ListItem",position:2,name:"Hizmet Bölgeleri",item:"https://burakotokurtarma.com/hizmet-bolgeleri"},{"@type":"ListItem",position:3,name:`${area.name} Oto Çekici`,item:`https://burakotokurtarma.com/bolgeler/${area.slug}`}]})}}/>
  </main>;
}
