import "./impactPartners.css";
import {
  ImpactPartnerGrid,
  ImpactPartnersCta,
  ImpactPartnersHero,
  WhyPartnerSection,
  computeImpactTotals,
  getImpactPartnerCardData,
} from "@/components/ImpactPartners";

export const metadata = {
  title: "Impact Partners",
  description:
    "Discover the corporate impact partners Renukiran Welfare Foundation has collaborated with on employee engagement, CSR and ESG activities — with a dedicated dynamic story page for every client.",
  alternates: { canonical: "/impact-partners" },
  openGraph: {
    title: "Impact Partners · Renukiran Welfare Foundation",
    description:
      "Stories of corporate purpose, employee engagement and community impact — one dynamic page for every partner.",
    url: "https://www.renukiran.org/impact-partners",
    type: "website",
  },
};

export const dynamicParams = false;

export default function ImpactPartnersListingPage() {
  const partners = getImpactPartnerCardData();
  const { totalPartners, totalFamilies } = computeImpactTotals();

  return (
    <main className="impact-partners-page">
      <ImpactPartnersHero
        totalPartners={totalPartners}
        totalFamilies={totalFamilies}
      />

      <section className="ip-section" id="partner-stories">
        <div className="ip-shell">
          <div className="ip-section__head">
            <div>
              <div className="ip-section__eyebrow">Partner stories</div>
              <h2 className="ip-section__title">
                Every partner has a story — and a page
              </h2>
              <p className="ip-section__lede">
                Browse our growing collection of impact stories. Each card
                opens a dynamic, server-rendered profile with the client
                overview, activity details, geo-tagged map, photographs,
                impact and a public thank-you — perfect for QR-code sharing
                and ESG reports.
              </p>
            </div>
          </div>
          <ImpactPartnerGrid partners={partners} />
        </div>
      </section>

      <section className="ip-section ip-section--muted">
        <div className="ip-shell">
          <div className="ip-section__head">
            <div>
              <div className="ip-section__eyebrow">Why partner with us</div>
              <h2 className="ip-section__title">
                Designed for meaningful, measurable corporate impact
              </h2>
            </div>
          </div>
          <WhyPartnerSection />
        </div>
      </section>

      <section className="ip-section ip-section--dark">
        <div className="ip-shell">
          <ImpactPartnersCta />
        </div>
      </section>
    </main>
  );
}
