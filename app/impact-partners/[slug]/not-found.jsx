import Link from "next/link";
import "../impactPartners.css";

export const metadata = {
  title: "Impact partner not found",
  robots: { index: false, follow: false },
};

export default function ImpactPartnerNotFound() {
  return (
    <main className="impact-partners-page">
      <section className="ip-section" style={{ paddingTop: "6rem" }}>
        <div className="ip-shell" style={{ textAlign: "center" }}>
          <div className="ip-section__eyebrow">404</div>
          <h1 className="ip-section__title">We couldn’t find that partner</h1>
          <p className="ip-section__lede" style={{ margin: "0 auto 2rem" }}>
            The impact story you are looking for may have moved, or the link
            may be incorrect. Head back to browse all our corporate impact
            stories.
          </p>
          <Link
            href="/impact-partners"
            className="ip-button ip-button--solid"
          >
            Back to all impact partners
          </Link>
        </div>
      </section>
    </main>
  );
}
