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
      <ScrollToneBackdrop

      />

      <LoaderChipFill
        label="Plumbing Hawaii"
      />

      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-transparent"
          tag="24/7 Hawaii Plumbing Service"
          title="Fast 24/7 emergency repairs across Hawaii."
          description="Available around the clock, our team arrives quickly for emergency repairs, drain cleaning, and pipe replacements with reliable 5-star service."
          primaryButton={{
            text: "Call 24/7 Plumber",
            href: "tel:8085550199"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/modern-autonomous-heating-system-boiler-room_169016-51491.jpg"
          imageAlt="modern autonomous heating system"
          introDelay={1.2}
          kpis={[
            {
              label: "Average response",
              value: "25 min",
              delta: "Fast",
              trend: [
                15,
                20,
                18,
                25,
                22,
                25
              ]
            },
            {
              label: "Google rating",
              value: "5.0 ★",
              delta: "43 revs"
            },
            {
              label: "Emergency support",
              value: "24/7",
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
          title="When a drain backs up or a pipe bursts, our team arrives quickly with honest advice, clear communication, and reliable service."
          items={[
            {
              icon: "phone-call",
              title: "24/7 Rapid Response",
              description: "Our response team is dispatched immediately around the clock for emergency drain cleaning, pipe bursts, and weekend repairs."
            },
            {
              icon: "shield-check",
              title: "5.0-Star Rated Service",
              description: "Trusted across Oahu with verified 5-star customer reviews for speed, transparency, and dependable workmanship."
            },
            {
              icon: "wrench",
              title: "Expert Diagnostics",
              description: "Clear explanations, upfront pricing, and professional whole-house Halo 5 filtration system installs."
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesBentoWidgets" data-webild-section-id="FeaturesBentoWidgets-1" data-section="services" data-tone="deep" data-gallery>
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Our Capabilities"
          title="From Halo 5 filtration to rapid emergency snaking"
          description="Professional local plumbing solutions with fast team dispatch and dependable service across Hawaii."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/plumbing-repair-service_181624-27146.jpg"
          items={[
            {
              tag: "Local plumbing",
              title: "Comprehensive Pipe Services",
              description: "Clean, mess-free work for residential and commercial plumbing systems.",
              tags: [
                "Drain Cleaning",
                "Pipe Repairs",
                "Water Heaters",
                "Halo 5",
                "Emergency"
              ]
            },
            {
              title: "Emergency Availability",
              description: "Our team is ready to answer calls and dispatch qualified plumbers anytime day or night.",
              value: "24/7",
              valueLabel: "round-the-clock dispatch"
            },
            {
              title: "Halo 5 Water Treatment",
              description: "Whole-house water filtration systems that eliminate chlorine taste and heavy minerals.",
              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-still-life-assortment-pvc_23-2149062941.jpg",
              imageAlt: "High angle of still life assortment of pvc"
            },
            {
              title: "Service Response Status",
              description: "Typical response and resolution timelines for local Oahu emergency calls.",
              rows: [
                {
                  label: "Sunday morning calls",
                  value: "Answered"
                },
                {
                  label: "Emergency dispatch",
                  value: "Immediate"
                },
                {
                  label: "Video drain camera",
                  value: "Ready"
                }
              ]
            },
            {
              title: "Kitchen Drain Snaking",
              description: "Clearing stubborn kitchen and bathroom backups quickly with modern video inspection.",
              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-still-life-arrangement-pvc_23-2149062977.jpg",
              imageAlt: "assorted grey plumbing pipe fittings"
            },
            {
              title: "Verified Customer Reviews",
              description: "Top-rated island service trusted by local homeowners and families.",
              value: "5.0",
              valueLabel: "based on 43 reviews"
            }
          ]}
        />
      </div>

      <div id="customers" data-webild-section="TestimonialSpotlightCarousel" data-webild-section-id="TestimonialSpotlightCarousel-1" data-section="customers">
        <TestimonialSpotlightCarousel
          tag="Customer reviews"
          title="Rated 5.0 stars by 43 local homeowners"
          items={[
            {
              company: "Kailua Residence",
              quote: "Our drains backed up on Sunday morning and their team answered immediately. A technician arrived quickly, explained everything clearly, and cleared the blockage fast.",
              name: "Verified Oahu Homeowner",
              role: "Kailua Resident",
              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-still-life-assortment-pvc_23-2149062949.jpg",
              imageAlt: "blue pvc pipe fittings",
              stats: [
                {
                  label: "Response time",
                  value: "7:15 AM Sunday"
                },
                {
                  label: "Service result",
                  value: "Drain cleared"
                }
              ]
            },
            {
              company: "Honolulu Home",
              quote: "We had a plumbing emergency late Friday night. Their response team provided fast, friendly, professional repair when others were unavailable.",
              name: "Oahu Resident",
              role: "Honolulu Homeowner",
              imageSrc: "https://img.b2bpic.net/free-photo/smiley-senior-woman-beach-enjoying-her-day_23-2149014628.jpg",
              imageAlt: "Smiley senior woman at the beach enjoying her day",
              stats: [
                {
                  label: "Turnaround",
                  value: "Same morning"
                },
                {
                  label: "Overall rating",
                  value: "5.0 Stars"
                }
              ]
            },
            {
              company: "Kaneohe Household",
              quote: "Kitchen sink clogged late at night and nothing we tried worked. Morning call to Plumbing Hawaii saved us. Quick team arrival and excellent communication.",
              name: "Island Resident",
              role: "Kaneohe Homeowner",
              imageSrc: "https://img.b2bpic.net/free-photo/happy-handsome-dark-haired-latin-man-posing-with-arms-folded-kitchen_74855-8094.jpg",
              imageAlt: "Happy handsome dark haired Latin man posing with arms folded in kitchen",
              stats: [
                {
                  label: "Water system",
                  value: "Halo 5 filter"
                },
                {
                  label: "Water taste",
                  value: "Zero chlorine"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="faq-tray-accordion-1" data-webild-section="FaqTrayAccordion" data-webild-section-id="FaqTrayAccordion-1" data-section="faq-tray-accordion-1">
        <FaqTrayAccordion
          tag="Questions"
          title="Before you"
          highlight="call"
          items={[
            {
              title: "Are you available on weekends and early mornings?",
              description: "Yes. We answer emergency calls 24/7 across Oahu, including early Sunday mornings and late weekend nights with no delay."
            },
            {
              title: "Do you install whole-house water filtration systems?",
              description: "Yes. We specialize in Halo 5 water systems to remove chlorine odor and improve drinking water taste throughout your home."
            },
            {
              title: "What should I do while waiting for the plumber?",
              description: "Shut off your main water valve immediately if you have an active leak or burst pipe to prevent structural water damage."
            },
            {
              title: "How quickly can a technician arrive for emergency repairs?",
              description: "For urgent drain back-ups or pipe leaks in Honolulu, our response team dispatches immediately and arrives as quickly as possible."
            },
            {
              title: "Do you clear clogged kitchen sinks and main line drains?",
              description: "We perform professional drain cleaning and rapid snaking to clear kitchen sink clogs and main line blockages fast."
            }
          ]}
          help={{
            label: "Emergency Support",
            title: "Need urgent plumbing help?",
            description: "Contact our emergency response team for 24/7 service in Honolulu.",
            cta: {
              text: "Call now",
              href: "#contact-dark-form-card"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/cheerful-adult-plumber-sitting-bathroom_23-2147772218.jpg",
            imageAlt: "Cheerful adult plumber sitting in bathroom"
          }}
        />
      </div>

      <div id="contact-dark-form-card" data-webild-section="ContactDarkFormCard" data-webild-section-id="ContactDarkFormCard-1" data-section="contact-dark-form-card">
        <ContactDarkFormCard
          title="Need Emergency Plumbing Relief Right Now?"
          formTitle="Request Immediate Service"
          fields={{
            name: "Full name",
            email: "Email address",
            company: "Property location",
            message: "Plumbing issue details"
          }}
          placeholders={{
            name: "Your full name",
            email: "info@plumbinghawaii.com",
            company: "Honolulu or Oahu neighborhood",
            message: "Describe your leak, backed up drain, or service request."
          }}
          submitText="Send Request"
          successText="Mahalo! Our team will review your message and contact you shortly."
          imageSrc="https://img.b2bpic.net/free-photo/arched-faucet-modern-sink-blue-fronts_169016-69255.jpg"
          imageAlt="Arched faucet modern sink blue fronts"
        />
      </div>
    </>
  );
}
