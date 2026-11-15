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
        label="Plumbing Hawaii"
      />

      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-transparent"
          tag="24/7 Hawaii Plumbing Team"
          title="Prompt Arrival & 24/7 Emergency Repairs Across Hawaii"
          description="Available around the clock, our response team arrives promptly for emergency leak repairs, backed-up drains, and whole-house Halo 5 filtration installs with reliable 5-star service."
          primaryButton={{
            text: "Call 24/7 Response Team",
            href: "tel:8085550199"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/modern-autonomous-heating-system-boiler-room_169016-51491.jpg"
          imageAlt="modern autonomous heating system"
          introDelay={1.2}
          kpis={[
            {
              label: "Average Arrival",
              value: "25 min",
              delta: "Prompt",
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
              label: "Google Rating",
              value: "5.0 ★",
              delta: "43 reviews"
            },
            {
              label: "Team Support",
              value: "24/7",
              delta: "Always ready",
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
          title="When a drain backs up or a pipe bursts, our team dispatches immediately with prompt arrival, honest communication, and reliable 24/7 island service."
          items={[
            {
              icon: "phone-call",
              title: "Prompt 24/7 Dispatch",
              description: "Our response team is dispatched immediately around the clock for emergency drain cleaning, pipe bursts, and weekend repairs."
            },
            {
              icon: "shield-check",
              title: "5.0-Star Island Team",
              description: "Trusted across Oahu with verified 5-star customer reviews for speed, transparency, and dependable team workmanship."
            },
            {
              icon: "wrench",
              title: "Expert Team Diagnostics",
              description: "Clear explanations, upfront pricing, and professional whole-house Halo 5 filtration system installs by our dedicated technicians."
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesBentoWidgets" data-webild-section-id="FeaturesBentoWidgets-1" data-section="services" data-tone="deep" data-gallery>
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Island-Wide Coverage"
          title="Prompt Arrival & 24/7 Comprehensive Plumbing Solutions"
          description="Professional local plumbing services with rapid team dispatch, clear communication, and dependable support across Hawaii."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/plumbing-repair-service_181624-27146.jpg"
          items={[
            {
              tag: "Local Plumbing Team",
              title: "Comprehensive Pipe & Filtration Services",
              description: "Clean, mess-free work for residential and commercial plumbing systems.",
              tags: [
                "Emergency Repairs",
                "Prompt Arrival",
                "24/7 Dispatch",
                "Halo 5 Filtration",
                "Drain Snaking"
              ]
            },
            {
              title: "24/7 Emergency Service",
              description: "Our team answers calls 24 hours a day to dispatch qualified technicians immediately.",
              value: "24/7",
              valueLabel: "round-the-clock team dispatch"
            },
            {
              title: "Halo 5 Water Treatment",
              description: "Whole-house water filtration systems installed by our team to remove chlorine odor and improve water clarity.",
              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-still-life-assortment-pvc_23-2149062941.jpg",
              imageAlt: "High angle of still life assortment of pvc"
            },
            {
              title: "Team Response Status",
              description: "Guaranteed response times and active communication from dispatch to prompt arrival.",
              rows: [
                {
                  label: "Sunday Morning Calls",
                  value: "Answered Live"
                },
                {
                  label: "Emergency Team Dispatch",
                  value: "Immediate"
                },
                {
                  label: "Technician Arrival",
                  value: "Prompt"
                }
              ]
            },
            {
              title: "Rapid Drain Snaking",
              description: "Clearing stubborn kitchen sink, bathroom, and main line backups quickly with modern video inspection.",
              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-still-life-arrangement-pvc_23-2149062977.jpg",
              imageAlt: "assorted grey plumbing pipe fittings"
            },
            {
              title: "5.0-Star Customer Reviews",
              description: "Top-rated island service backed by 43 verified reviews praising our team's fast arrival.",
              value: "5.0",
              valueLabel: "based on 43 reviews"
            }
          ]}
        />
      </div>

      <div id="customers" data-webild-section="TestimonialSpotlightCarousel" data-webild-section-id="TestimonialSpotlightCarousel-1" data-section="customers">
        <TestimonialSpotlightCarousel
          tag="Customer Reviews"
          title="Rated 5.0 Stars for Fast Team Arrival & 24/7 Support"
          items={[
            {
              company: "Kailua Residence",
              quote: "Our drains backed up on Sunday morning and their response team answered live at 7:15 AM. A technician arrived quickly, explained everything clearly, and cleared the blockage fast.",
              name: "Oahu Homeowner",
              role: "Kailua Resident",
              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-still-life-assortment-pvc_23-2149062949.jpg",
              imageAlt: "blue pvc pipe fittings",
              stats: [
                {
                  label: "Response time",
                  value: "7:15 AM Sunday"
                },
                {
                  label: "Arrival speed",
                  value: "Prompt"
                }
              ]
            },
            {
              company: "Honolulu Home",
              quote: "We had a plumbing emergency late Friday night. Their response team provided fast, friendly, professional repair when no one else was available.",
              name: "Honolulu Resident",
              role: "Honolulu Homeowner",
              imageSrc: "https://img.b2bpic.net/free-photo/smiley-senior-woman-beach-enjoying-her-day_23-2149014628.jpg",
              imageAlt: "Smiley senior woman at the beach enjoying her day",
              stats: [
                {
                  label: "Availability",
                  value: "24/7 Support"
                },
                {
                  label: "Overall rating",
                  value: "5.0 Stars"
                }
              ]
            },
            {
              company: "Kaneohe Household",
              quote: "Kitchen sink clogged late at night. A morning call to Plumbing Hawaii brought prompt team arrival, great communication, and clean work.",
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
                  value: "Smooth & Clean"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="faq-tray-accordion-1" data-webild-section="FaqTrayAccordion" data-webild-section-id="FaqTrayAccordion-1" data-section="faq-tray-accordion-1">
        <FaqTrayAccordion
          tag="24/7 Service Info"
          title="Frequently Asked"
          highlight="Questions"
          items={[
            {
              title: "How fast is your team's arrival for emergency calls?",
              description: "Our response team dispatches immediately for emergency leaks, burst pipes, and backed-up drains across Oahu to ensure prompt arrival."
            },
            {
              title: "Are team members available 24/7 on weekends and early mornings?",
              description: "Yes! Our 24/7 emergency dispatch line is answered live around the clock, including early Sunday mornings and weekend nights."
            },
            {
              title: "Do you install whole-house Halo 5 filtration systems?",
              description: "Yes. Our technicians expertly install Halo 5 water treatment systems to eliminate chlorine taste and heavy minerals throughout your home."
            },
            {
              title: "What should I do while waiting for the technician to arrive?",
              description: "Shut off your main water valve immediately if you have an active leak to prevent water damage while our team is en route."
            },
            {
              title: "Do you clear clogged kitchen sinks and main sewer lines?",
              description: "Yes, our team uses professional drain snaking and video inspection to clear kitchen sinks, bathrooms, and main lines rapidly."
            }
          ]}
          help={{
            label: "Emergency Support",
            title: "Need urgent plumbing help?",
            description: "Contact our 24/7 emergency response team for fast island dispatch.",
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
          title="Need Emergency Plumbing Support Right Now?"
          formTitle="Request Immediate Team Service"
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
            message: "Describe your leak, backed-up drain, or Halo 5 filtration request."
          }}
          submitText="Send Request"
          successText="Mahalo! Our response team will review your message and contact you immediately."
          imageSrc="https://img.b2bpic.net/free-photo/arched-faucet-modern-sink-blue-fronts_169016-69255.jpg"
          imageAlt="Arched faucet modern sink blue fronts"
        />
      </div>
    </>
  );
}
