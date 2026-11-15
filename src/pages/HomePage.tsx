import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import TestimonialSpotlightCarousel from "@/components/sections/testimonial/TestimonialSpotlightCarousel";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop />

      <LoaderChipFill
        label="De Silva's Plumbing"
      />

      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Kailua-Kona, HI • Plumber Services"
          title="Dependable Plumbing & Main Line Services in Kailua-Kona"
          description="Serving Kailua-Kona and the Big Island with fast, neat, and accurate plumbing repairs, main line installations, and emergency leak services. Call (808) 325-7069 today."
          primaryButton={{
            text: "Call (808) 325-7069",
            href: "tel:8083257069"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/modern-autonomous-heating-system-boiler-room_169016-51491.jpg"
          imageAlt="modern autonomous heating system"
          introDelay={1.2}
          kpis={[
            {
              label: "Location",
              value: "Kailua-Kona",
              delta: "73-1260 Lihau St"
            },
            {
              label: "Google Rating",
              value: "4.0 ★",
              delta: "7 reviews"
            },
            {
              label: "Phone Line",
              value: "(808) 325-7069",
              delta: "Direct Call",
              trend: [
                100,
                100,
                100,
                100,
                100,
                100
              ]
            }
          ]}
        />
      </div>

      <div id="about" data-webild-section="AboutStatementIconRow" data-webild-section-id="AboutStatementIconRow-1" data-section="about" data-tone="card">
        <AboutStatementIconRow
          className="bg-transparent"
          title="Located at 73-1260 Lihau St in Kailua-Kona, De Silva's Plumbing delivers fast, neat, and precise plumbing services for main line installations, leak repairs, and property maintenance."
          items={[
            {
              icon: "map-pin",
              title: "Kailua-Kona Local Base",
              description: "Conveniently located at 73-1260 Lihau St, offering reliable local plumbing services across Kailua-Kona and the Big Island."
            },
            {
              icon: "wrench",
              title: "Main Line Specialists",
              description: "Expert main line installation, excavation, trenching, and thorough job site cleanup by an experienced local crew."
            },
            {
              icon: "shield-check",
              title: "Fast, Neat & Accurate",
              description: "Known for rapid response when emergency leaks occur, along with neat workmanship and accurate troubleshooting."
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesBentoWidgets" data-webild-section-id="FeaturesBentoWidgets-1" data-section="services" data-tone="deep" data-gallery>
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Big Island Plumbing Services"
          title="Overview of Plumbing Services in Kailua-Kona"
          description="Professional plumbing solutions tailored for Big Island residential and commercial properties."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/plumbing-repair-service_181624-27146.jpg"
          items={[
            {
              tag: "Core Services",
              title: "Main Line & Emergency Plumbing Overview",
              description: "Dependable, mess-free work for residential and commercial plumbing systems across Kailua-Kona.",
              tags: [
                "Main Line Installation",
                "Emergency Leak Repair",
                "Pipe Trenching & Digging",
                "Drain Cleaning",
                "Clean Site Restoration"
              ]
            },
            {
              title: "Direct Phone Contact",
              description: "Call De Silva's Plumbing directly for service scheduling, estimates, and immediate inquiries.",
              value: "(808) 325-7069",
              valueLabel: "Call or text for service"
            },
            {
              title: "Main Line Installation",
              description: "Complete main line replacement and trenching carried out with speed and meticulous site cleanup.",
              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-still-life-assortment-pvc_23-2149062941.jpg",
              imageAlt: "High angle of still life assortment of pvc"
            },
            {
              title: "Local Business Details",
              description: "Essential location and contact details for De Silva's Plumbing on the Big Island.",
              rows: [
                {
                  label: "Address",
                  value: "73-1260 Lihau St"
                },
                {
                  label: "City / Zip",
                  value: "Kailua-Kona, HI 96740"
                },
                {
                  label: "Phone",
                  value: "(808) 325-7069"
                }
              ]
            },
            {
              title: "Emergency Leak Repair",
              description: "Fast troubleshooting and emergency repair when unexpected leaks occur on the Big Island.",
              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-still-life-arrangement-pvc_23-2149062977.jpg",
              imageAlt: "assorted grey plumbing pipe fittings"
            },
            {
              title: "Customer Rating",
              description: "Verified 4.0-star customer rating on Google for fast, neat, and reliable plumbing work.",
              value: "4.0 ★",
              valueLabel: "7 customer reviews"
            }
          ]}
        />
      </div>

      <div id="customers" data-webild-section="TestimonialSpotlightCarousel" data-webild-section-id="TestimonialSpotlightCarousel-1" data-section="customers">
        <TestimonialSpotlightCarousel
          tag="Customer Reviews"
          title="What Local Customers Say About De Silva's Plumbing"
          items={[
            {
              company: "Big Island Emergency Leak",
              quote: "They saved my life! As everyone knows, it is very hard to get repaired right away on Big Island. I had an emergency leak and called about 10 plumbing companies until they came through for me.",
              name: "Gwen K.",
              role: "Big Island Resident",
              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-still-life-assortment-pvc_23-2149062949.jpg",
              imageAlt: "blue pvc pipe fittings",
              stats: [
                {
                  label: "Issue",
                  value: "Emergency Leak"
                },
                {
                  label: "Rating",
                  value: "5.0 Stars"
                }
              ]
            },
            {
              company: "Kailua-Kona Main Line",
              quote: "I needed a new main line put in. Sid arrived with two workers, and they got to work with digging right away. Sid is a whirlwind—he knows exactly where, when and what. Done in a flash, and nice clean up!",
              name: "Kathy M.",
              role: "Kailua-Kona Homeowner",
              imageSrc: "https://img.b2bpic.net/free-photo/smiley-senior-woman-beach-enjoying-her-day_23-2149014628.jpg",
              imageAlt: "Smiley senior woman at the beach enjoying her day",
              stats: [
                {
                  label: "Service",
                  value: "Main Line Install"
                },
                {
                  label: "Cleanup",
                  value: "Neat & Clean"
                }
              ]
            },
            {
              company: "Kailua-Kona Plumbing",
              quote: "The plumber is a wonderful worker and is fast, neat and accurate from everything I can tell.",
              name: "Tiro L.",
              role: "Kailua-Kona Resident",
              imageSrc: "https://img.b2bpic.net/free-photo/happy-handsome-dark-haired-latin-man-posing-with-arms-folded-kitchen_74855-8094.jpg",
              imageAlt: "Happy handsome dark haired Latin man posing with arms folded in kitchen",
              stats: [
                {
                  label: "Quality",
                  value: "Fast & Accurate"
                },
                {
                  label: "Workmanship",
                  value: "Neat Work"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="faq-tray-accordion-1" data-webild-section="FaqTrayAccordion" data-webild-section-id="FaqTrayAccordion-1" data-section="faq-tray-accordion-1">
        <FaqTrayAccordion
          tag="Kailua-Kona Service Info"
          title="Frequently Asked"
          highlight="Questions"
          items={[
            {
              title: "Where is De Silva's Plumbing located?",
              description: "De Silva's Plumbing is located at 73-1260 Lihau St, Kailua-Kona, HI 96740, serving Kailua-Kona and surrounding areas on the Big Island."
            },
            {
              title: "What is the phone number for De Silva's Plumbing?",
              description: "You can reach us directly at (808) 325-7069 to discuss your plumbing needs, schedule service, or request emergency help."
            },
            {
              title: "What services do you provide?",
              description: "We offer comprehensive plumbing services, including main line installations, trenching, emergency leak repair, drain snaking, and pipe maintenance."
            },
            {
              title: "Do you handle main line replacement projects?",
              description: "Yes, we specialize in installing and replacing main lines, including fast excavation, line placement, testing, and clean site restoration."
            },
            {
              title: "Are you available for emergency leak repairs on the Big Island?",
              description: "Yes! We respond quickly to emergency leaks and urgent plumbing issues across Kailua-Kona to protect your home from water damage."
            }
          ]}
          help={{
            label: "Kailua-Kona Plumber",
            title: "Need plumbing help in Kailua-Kona?",
            description: "Call De Silva's Plumbing directly at (808) 325-7069 for fast, neat, and reliable service.",
            cta: {
              text: "Call (808) 325-7069",
              href: "tel:8083257069"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/cheerful-adult-plumber-sitting-bathroom_23-2147772218.jpg",
            imageAlt: "Cheerful adult plumber sitting in bathroom"
          }}
        />
      </div>

      <div id="contact-dark-form-card" data-webild-section="ContactDarkFormCard" data-webild-section-id="ContactDarkFormCard-1" data-section="contact-dark-form-card">
        <ContactDarkFormCard
          title="Contact De Silva's Plumbing in Kailua-Kona"
          formTitle="Request Service or Information"
          fields={{
            name: "Full name",
            email: "Email address",
            company: "Property address / Location",
            message: "Plumbing issue details"
          }}
          placeholders={{
            name: "Your full name",
            email: "info@desilvasplumbing.com",
            company: "73-1260 Lihau St, Kailua-Kona, HI",
            message: "Describe your plumbing issue, main line project, or leak repair request."
          }}
          submitText="Send Request"
          successText="Mahalo! De Silva's Plumbing has received your message and will contact you shortly."
          imageSrc="https://img.b2bpic.net/free-photo/arched-faucet-modern-sink-blue-fronts_169016-69255.jpg"
          imageAlt="Arched faucet modern sink blue fronts"
        />
      </div>
    </>
  );
}
