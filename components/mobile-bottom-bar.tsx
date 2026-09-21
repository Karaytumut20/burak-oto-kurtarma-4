import { MapPin, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const { phone, phoneDisplay, mapsUrl, whatsapp: wpUrl } = siteConfig;

export function MobileBottomBar() {
  return (
    <nav className="mobile-bottom-bar" aria-label="Mobil Hızlı İşlem Menüsü">
      <a
        className="mob-btn mob-btn-map"
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Google Haritalar ile Yol Tarifi Al"
      >
        <MapPin size={20} className="mob-btn-icon" />
        <span className="mob-btn-text">
          <strong>Yol Tarifi</strong>
          <small>Harita</small>
        </span>
      </a>

      <a
        className="mob-btn mob-btn-call"
        href={`tel:${phone}`}
        aria-label={`${phoneDisplay} numarasını hemen ara`}
      >
        <div className="mob-call-pulse-ring" aria-hidden="true" />
        <PhoneCall size={21} className="mob-call-icon" />
        <span className="mob-call-text">
          <strong className="mob-call-title">HEMEN ARA</strong>
          <span className="mob-call-number">{phoneDisplay}</span>
        </span>
      </a>

      <a
        className="mob-btn mob-btn-wp"
        href={wpUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile Canlı Konum Gönder"
      >
        <svg
          className="mob-btn-icon mob-wp-svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.075s-1.274-.469-2.427-1.498c-.897-.799-1.503-1.787-1.679-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526s-.677-1.633-.928-2.235c-.244-.587-.492-.507-.677-.516l-.577-.01c-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.079 2.91 1.229 3.11c.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.9-.12.581-.353 1.78-1.092 2.031-2.148.25-1.055.25-1.956.175-2.148-.075-.192-.275-.301-.576-.451z" />
          <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.551 4.183 1.6 6.002L.055 24l6.172-1.618a11.96 11.96 0 0 0 5.777 1.488h.005c6.625 0 12.004-5.378 12.004-12.005C24.013 5.378 18.632 0 12.004 0zm0 21.821h-.004a9.94 9.94 0 0 1-5.068-1.393l-.364-.216-3.766.988 1.006-3.673-.237-.377a9.92 9.92 0 0 1-1.523-5.216c0-5.503 4.478-9.98 9.986-9.98 2.666 0 5.172 1.039 7.058 2.925a9.92 9.92 0 0 1 2.922 7.061c0 5.504-4.478 9.981-9.98 9.981z" />
        </svg>
        <span className="mob-btn-text">
          <strong>WhatsApp</strong>
          <small>Konum At</small>
        </span>
      </a>
    </nav>
  );
}
