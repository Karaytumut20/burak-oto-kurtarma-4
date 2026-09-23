export type SeoEntry = {
  name: string;
  slug: string;
  short: string;
  intro: string;
  bullets: string[];
};

export const servicePages: SeoEntry[] = [
  { name:"7/24 Oto Çekici", slug:"oto-cekici", short:"Arızalı veya yürümeyen araçlar için hızlı çekici desteği.", intro:"Binek, SUV, hafif ticari ve motosikletler için aracın durumuna uygun çekici yönlendiriyoruz. Konum ve araç bilgisini telefonda netleştirerek doğru ekipmanla yola çıkıyoruz.", bullets:["Hidrolik kayar kasa","7/24 konumdan alım","Servise veya adrese teslim"] },
  { name:"Oto Kurtarma", slug:"oto-kurtarma", short:"Kaza ve mekanik arıza sonrası güvenli araç kurtarma.", intro:"Aracın hareket edemediği, yol dışında kaldığı veya tekerleklerinin kilitlendiği durumlarda uygun kurtarma tekniğini belirliyoruz.", bullets:["Arızalı araç kurtarma","Kazalı araç yükleme","Dar alandan güvenli çıkarma"] },
  { name:"Ahtapot Vinç", slug:"ahtapot-vinc", short:"Tekerleği kilitli araçlar için dört noktadan hasarsız yükleme.", intro:"Aksı kırılan, otomatik vitesi kilitlenen veya tekerlekleri dönmeyen araçları lastiklerden kavrayan ahtapot aparatıyla yüklüyoruz.", bullets:["Kaportaya temas etmez","Dört lastikten dengeli kaldırma","Düşük şasiye uygun yöntem"] },
  { name:"Acil Yol Yardım", slug:"yol-yardim", short:"Yolda kaldığınız noktada pratik teknik destek.", intro:"Araç çalışmıyor, lastik arızası veya basit bir elektrik problemi yaşıyorsanız önce yerinde çözümü değerlendiriyoruz.", bullets:["Yerinde ilk kontrol","Güvenli noktaya alma","Gerekirse servise nakil"] },
  { name:"Akü Takviyesi", slug:"aku-takviyesi", short:"Aküsü biten araçlar için yerinde marş desteği.", intro:"Farı açık kalan, uzun süre bekleyen veya soğukta marş basmayan araçlara uygun ekipmanla akü takviyesi sağlıyoruz.", bullets:["Yerinde akü takviyesi","Voltaj kontrolü","Çalışmazsa çekici desteği"] },
  { name:"Şehirler Arası Araç Taşıma", slug:"sehirler-arasi-arac-tasima", short:"Aracınızı Üsküdar’dan çevre il ve ilçelere taşıyoruz.", intro:"Arızalı, klasik, lüks veya yeni satın alınmış araçlar için planlı şehirler arası transfer hizmeti sunuyoruz.", bullets:["Planlı teslimat","Sabitleme ekipmanı","Teslim noktasına kadar takip"] },
  { name:"Motosiklet Çekici", slug:"motosiklet-cekici", short:"Motosiklet ve scooter için dengeli, sabit ve güvenli nakil.", intro:"Motosikleti kasaya uygun rampa ve sabitleme kayışlarıyla alıyor, devrilme ve sürtünme riskine karşı kontrollü biçimde taşıyoruz.", bullets:["Motosiklete uygun rampa","Çok noktalı sabitleme","Servise veya adrese teslim"] },
  { name:"Kamyonet ve Minibüs Çekici", slug:"kamyonet-minibus-cekici", short:"Hafif ticari araçlar için uygun tonajlı kurtarma.", intro:"Kamyonet, panelvan ve minibüslerde aracın ağırlığı ile şasi uzunluğuna uygun kasa seçerek güvenli taşıma yapıyoruz.", bullets:["Uygun tonaj seçimi","Uzun şasi desteği","Ticari servis noktalarına nakil"] },
  { name:"Kazalı Araç Taşıma", slug:"kazali-arac-tasima", short:"Kaza sonrası yürümeyen araçları hasarı büyütmeden taşıma.", intro:"Kaza alanının ve aracın durumuna göre vinç, makara ve kayar kasa ekipmanını birlikte planlıyoruz.", bullets:["Tekerlek kilitlenmesine uygun","Kaporta temasını azaltan yükleme","Kaporta veya mekanik servise teslim"] },
  { name:"Lüks ve Düşük Şasi Araç Taşıma", slug:"luks-arac-tasima", short:"Spor ve premium araçlar için hassas yükleme.", intro:"Alçak tampon, uzun dingil mesafesi ve hassas jantlara sahip araçlarda yükleme açısını düşürerek koruyucu ekipman kullanıyoruz.", bullets:["Düşük yükleme açısı","Jant ve tampon koruması","Kapalı otopark koordinasyonu"] },
];

export const localServicePages = servicePages.filter((service) => ["oto-cekici", "oto-kurtarma", "yol-yardim", "aku-takviyesi"].includes(service.slug));

export const problemPages: SeoEntry[] = [
  { name:"Şanzıman Kilitlendi", slug:"sanziman-kilitlendi", short:"Vites geçmeyen ve tekerleği dönmeyen araç için doğru yükleme.", intro:"Otomatik şanzıman arızasında aracı zorlayarak hareket ettirmek ek hasara neden olabilir. Tekerlek durumuna göre kaydırıcı veya ahtapot vinç kullanıyoruz.", bullets:["Aracı zorlamadan yükleme","Ahtapot aparat seçeneği","Yetkili servise transfer"] },
  { name:"Triger Koptu", slug:"triger-koptu", short:"Motoru yeniden çalıştırmadan servise güvenli nakil.", intro:"Triger arızası şüphesinde marşa tekrar basmak motor hasarını artırabilir. Aracı çalıştırmadan kasaya alıyoruz.", bullets:["Motoru çalıştırmadan yükleme","Servis koordinasyonu","Binek ve hafif ticari destek"] },
  { name:"Aks Kırıldı", slug:"aks-kirildi", short:"Hareket kabiliyeti olmayan aracı ekipmanla kurtarma.", intro:"Kırık aksla aracı sürüklemek yürüyen aksam ve kaporta hasarını artırabilir. Aracı dört lastikten kontrollü kaldırıyoruz.", bullets:["Ahtapot vinç desteği","Sürtmeden yükleme","Mekanik servise teslim"] },
  { name:"Lastik Patladı", slug:"lastik-patladi", short:"Stepne yoksa veya bijon açılmıyorsa yol yardım.", intro:"Güvensiz noktada lastik değiştirmek yerine aracı emniyetli alana ya da lastikçiye taşıyoruz.", bullets:["Güvenli noktaya alma","Lastikçiye kısa mesafe nakil","Jant hasarında çekici"] },
  { name:"Motor Arızası", slug:"motor-arizasi", short:"Hararet, yağ lambası veya ses sonrası servise nakil.", intro:"Motor arızası belirtisi varken yola devam etmek maliyeti büyütebilir. Aracı bulunduğu noktadan alıp tercih ettiğiniz servise götürüyoruz.", bullets:["Hararet sonrası nakil","Yağ basıncı uyarısı","Servise doğrudan teslim"] },
  { name:"Araç Çalışmıyor", slug:"arac-calismiyor", short:"Marş basmayan araçta akü kontrolü ve çekici desteği.", intro:"Sorun akü kaynaklıysa yerinde takviye, mekanik veya elektronik arızaysa güvenli servis transferi sağlıyoruz.", bullets:["Akü takviyesi","Yerinde durum tespiti","Gerekirse oto çekici"] },
  { name:"Tekerlek Kilitlendi", slug:"tekerlek-kilitlendi", short:"Dönmeyen tekerlekleri zorlamadan ahtapot sistemle yükleme.", intro:"El freni, fren kaliperi, aks veya şanzıman kaynaklı kilitlenmelerde aracı kasaya sürüklemiyoruz.", bullets:["Dört lastik aparatı","Jant ve lastik koruması","Düz zeminde kontrollü indirme"] },
  { name:"Kaza Sonrası Çekici", slug:"kaza-sonrasi-cekici", short:"Kaza alanından kaportacıya, servise veya otoparka taşıma.", intro:"Aracın yürüyen aksamını ve yol konumunu telefonda değerlendirip uygun kurtarma aracını yönlendiriyoruz.", bullets:["Kaza alanı koordinasyonu","Kazalı araç yükleme","Otopark veya servis teslimi"] },
  { name:"Elektrikli Araç Yolda Kaldı", slug:"elektrikli-arac-yolda-kaldi", short:"Bataryası biten elektrikli araç için düz kasa taşıma.", intro:"Elektrikli araçlarda üretici taşıma talimatlarına uygun olarak tüm tekerlekleri yerden kesen yöntem kullanıyoruz.", bullets:["Düz kasa taşıma","Şarj istasyonuna nakil","Tekerlekleri yerden kesme"] },
  { name:"Otoparktan Araç Çıkarma", slug:"otoparktan-arac-cikarma", short:"Dar ve alçak otoparklarda kontrollü kurtarma planı.", intro:"Kapalı otopark yüksekliği ve manevra alanını kontrol ederek aracı uygun aparatlar yardımıyla çıkışa alıyoruz.", bullets:["Otopark yükseklik kontrolü","Dar alanda manevra","Düşük şasi koruması"] },
];

export const routePages: SeoEntry[] = [
  ["Üsküdar Sahil Yolu","uskudar-sahil-yolu"],["15 Temmuz Şehitler Köprüsü Bağlantısı","bogazici-koprusu-baglantisi"],["D-100 Altunizade Bağlantısı","d100-altunizade-baglantisi"],["TEM Çamlıca Bağlantısı","tem-camlica-baglantisi"],["Kısıklı Caddesi","kisikli-caddesi"],["Çengelköy Caddesi","cengelkoy-caddesi"],["Beylerbeyi Sahil","beylerbeyi-sahil"],["Küçük Çamlıca Yolu","kucuk-camlica-yolu"],["Ünalan Bağlantısı","unalan-baglantisi"],["Küplüce Yokuşu","kupluce-yokusu"],["Üsküdar Meydan","uskudar-meydan"],["Harem Bağlantı Yolu","harem-baglanti-yolu"]
].map(([name,slug]) => ({ name:`${name} Çekici`, slug, short:`${name} ve bağlantı yollarında 7/24 oto kurtarma.`, intro:`${name} üzerinde veya yakın bağlantılarda aracınız arızalandıysa konumunuza uygun güvenli yaklaşım noktasını belirliyor ve ekibimizi yönlendiriyoruz.`, bullets:["Yol üzeri konum koordinasyonu","Güvenli bekleme noktası","En yakın servise veya adrese nakil"] }));

export const findSeoEntry = (items: SeoEntry[], slug: string) => items.find(item => item.slug === slug);
