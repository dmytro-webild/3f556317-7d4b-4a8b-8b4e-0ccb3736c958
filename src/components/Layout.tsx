import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="tray" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="De Silva's Plumbing"
          navItems={[
            {
              name: "About",
              href: "#about"
            },
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Reviews",
              href: "#customers"
            },
            {
              name: "FAQ",
              href: "#faq-tray-accordion-1"
            },
            {
              name: "Contact",
              href: "#contact-dark-form-card"
            }
          ]}
          cta={{
            text: "(808) 325-7069",
            href: "tel:8083257069"
          }}
          introDelay={1.2}
        />
      </header>
      <main className="flex-grow" data-button="chip" data-card="tray" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterTrayWordmark
          brand="De Silva's Plumbing"
          wordmark="De Silva's Plumbing"
          columns={[
            {
              title: "Services",
              links: [
                {
                  text: "Main Line Installation",
                  href: "#services"
                },
                {
                  text: "Emergency Leak Repair",
                  href: "#services"
                },
                {
                  text: "Drain Cleaning & Snaking",
                  href: "#services"
                },
                {
                  text: "Pipe Replacement & Excavation",
                  href: "#services"
                }
              ]
            },
            {
              title: "Company",
              links: [
                {
                  text: "About De Silva's Plumbing",
                  href: "#about"
                },
                {
                  text: "Customer Reviews",
                  href: "#customers"
                },
                {
                  text: "Service FAQs",
                  href: "#faq-tray-accordion-1"
                }
              ]
            },
            {
              title: "Contact",
              links: [
                {
                  text: "(808) 325-7069",
                  href: "tel:8083257069"
                },
                {
                  text: "73-1260 Lihau St, Kailua-Kona, HI 96740",
                  href: "#contact-dark-form-card"
                },
                {
                  text: "info@desilvasplumbing.com",
                  href: "mailto:info@desilvasplumbing.com"
                }
              ]
            },
            {
              title: "Location & Hours",
              links: [
                {
                  text: "Kailua-Kona & Big Island",
                  href: "#contact-dark-form-card"
                },
                {
                  text: "Call (808) 325-7069",
                  href: "tel:8083257069"
                },
                {
                  text: "Privacy Policy",
                  href: "#"
                }
              ]
            }
          ]}
          copyright="© 2026 De Silva's Plumbing. All rights reserved."
          topText="Back to top"
        />
      </footer>
    </div>
  );
}
