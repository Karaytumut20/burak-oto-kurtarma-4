import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <Image
      className={footer ? "brand-logo brand-logo-footer" : "brand-logo"}
      src={siteConfig.logo}
      alt="Burak Oto Kurtarma logosu"
      width={1254}
      height={1254}
      priority={!footer}
    />
  );
}
