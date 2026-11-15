import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="tray" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="Plumbing Hawaii"
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
            text: "24/7 Emergency Service",
            href: "#contact-dark-form-card"
          }}
          introDelay={1.2}
        />
      </header>
      <main className="flex-grow" data-button="chip" data-card="tray" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterTrayWordmark
          brand="Plumbing Hawaii"
          wordmark="Plumbing Hawaii"
          columns={[
            {
              title: "Services",
              links: [
                {
                  text: "Emergency Repairs",
                  href: "#services"
                },
                {
                  text: "Drain Cleaning",
                  href: "#services"
                },
                {
                  text: "Halo 5 Water Systems",
                  href: "#services"
                },
                {
                  text: "Pipe Replacement",
                  href: "#services"
                }
              ]
            },
            {
              title: "Company",
              links: [
                {
                  text: "About Stephen",
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
                  text: "(5\t\n4\t\n3\t\n2\t\n1\t\n5.0\n\n43",
                  href: "tel:5\t\n4\t\n3\t\n2\t\n1\t\n5.0\n\n43"
                },
                {
                  text: "info@plumbinghawaii.com",
                  href: "mailto:info@plumbinghawaii.com"
                },
                {
                  text: "Honolulu, HI 96815",
                  href: "#contact-dark-form-card"
                }
              ]
            },
            {
              title: "Availability",
              links: [
                {
                  text: "24/7 Emergency Line",
                  href: "tel:5\t\n4\t\n3\t\n2\t\n1\t\n5.0\n\n43"
                },
                {
                  text: "Privacy Policy",
                  href: "#"
                },
                {
                  text: "Terms of Service",
                  href: "#"
                }
              ]
            }
          ]}
          copyright="© 2026 Plumbing Hawaii. All rights reserved."
          topText="Back to top"
        />
      </footer>
    </div>
  );
}
