import "./plantationPartners.css";
import {
  PlantationPartnerGrid,
  PlantationPartnersCta,
  PlantationPartnersHero,
  WhyPlantationPartnerSection,
  computePlantationPartnerTotals,
  getPlantationPartnerCardData,
} from "@/components/PlantationPartners";

export const metadata = {
  title: "Plantation Partners",
  description:
    "Discover the companies and institutions that have partnered with Renukiran Welfare Foundation on CSR plantation drives — each project documented through a dedicated, dynamic, geo-tagged story page.",
  alternates: { canonical: "/plantation-partners" },
  openGraph: {
    title: "Plantation Partners · Renukiran Welfare Foundation",
    description:
      "Stories of CSR plantation drives, native tree plantations and corporate green legacies — one dynamic page for every partner.",
    url: "https://www.renukiran.org/plantation-partners",
    type: "website",
  },
};

export const dynamicParams = false;

export default function PlantationPartnersListingPage() {
  const partners = getPlantationPartnerCardData();
  const totals = computePlantationPartnerTotals();

  return (
    <main className="plantation-partners-page">
      <PlantationPartnersHero
        totalCompanies={totals.totalCompanies}
        totalTrees={totals.totalTrees}
        totalAreaAcres={totals.totalAreaAcres}
        totalYears={totals.totalYears}
      />

      <section className="pp-section" id="plantation-stories">
        <div className="pp-shell">
          <div className="pp-section-head">
            <span className="pp-eyebrow">Plantation stories</span>
            <h2>Every company drives has a living story</h2>
            <p>
              Each card opens a dedicated, server-rendered project page that
              records the company, the plantation model, the trees planted,
              geo-tagged evidence, stewardship and a public thank-you — ready
              to be shared in CSR, ESG and employee-engagement reports.
            </p>
          </div>
          <PlantationPartnerGrid partners={partners} />
        </div>
      </section>

      <section className="pp-section pp-section--mist">
        <div className="pp-shell">
          <div className="pp-section-head pp-section-head--split">
            <div>
              <span className="pp-eyebrow">Why partner with us</span>
              <h2>Designed for credible, growing green partnerships</h2>
            </div>
            <p>
              We support companies, institutions and community groups to design
              plantation programmes that go beyond ceremonial drives and create
              green assets that survive and grow for years.
            </p>
          </div>
          <WhyPlantationPartnerSection />
        </div>
      </section>

      <section className="pp-section pp-section--forest">
        <div className="pp-shell">
          <PlantationPartnersCta />
        </div>
      </section>
    </main>
  );
}
