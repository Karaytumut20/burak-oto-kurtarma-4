import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/service-areas";
import { localServicePages, problemPages, routePages, servicePages } from "@/lib/seo-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://burakotokurtarma.com";
  const districts = serviceAreas.filter(area => area.type === "ilce");
  const localServices = localServicePages;
  const hubs = ["hizmetler", "cozumler", "guzergahlar", "hizmet-bolgeleri"].map(path => ({ url:`${base}/${path}`, lastModified:new Date(), changeFrequency:"weekly" as const, priority:.9 }));
  const services = servicePages.map(item => ({ url:`${base}/hizmetler/${item.slug}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:.85 }));
  const problems = problemPages.map(item => ({ url:`${base}/cozumler/${item.slug}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:.8 }));
  const routes = routePages.map(item => ({ url:`${base}/guzergahlar/${item.slug}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:.8 }));
  const local = districts.flatMap(area => localServices.map(service => ({ url:`${base}/yerel-hizmet/${area.slug.replace("-oto-cekici","")}/${service.slug}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:.75 })));
  return [{ url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }, ...hubs, ...services, ...problems, ...routes, ...serviceAreas.map(area => ({ url: `${base}/bolgeler/${area.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: area.type === "mahalle" ? .7 : .85 })), ...local];
}
