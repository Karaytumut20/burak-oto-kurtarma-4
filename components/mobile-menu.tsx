"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type MenuLink = { href: string; label: string };

export function MobileMenu({ links }: { links: MenuLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const drawer = open && typeof document !== "undefined"
    ? createPortal(
      <>
        <button className="mobile-menu-backdrop" aria-label="Menüyü kapat" onClick={() => setOpen(false)} />
        <aside id="mobile-navigation" className="mobile-menu-panel is-open" aria-label="Mobil menü">
          <button className="mobile-menu-panel-close" type="button" aria-label="Menüyü kapat" onClick={() => setOpen(false)}><X /></button>
          <div className="mobile-menu-kicker">BURAK OTO KURTARMA</div>
          <nav aria-label="Mobil navigasyon">
            {links.map((link, index) => (
              <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{link.label}
              </Link>
            ))}
          </nav>
        </aside>
      </>,
      document.body,
    )
    : null;

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {drawer}
    </div>
  );
}
