import Link from "next/link";
import "../plantationPartners.css";

export const metadata = {
  title: "Plantation partner not found",
  robots: { index: false, follow: false },
};

export default function PlantationPartnerNotFound() {
  return (
    <main className="plantation-partners-page">
      <section className="pp-section" style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>
        <div className="pp-shell" style={{ textAlign: "center", maxWidth: 640, marginInline: "auto" }}>
          <span className="pp-eyebrow">404</span>
          <h2 style={{ marginTop: "0.6rem", color: "var(--pp-forest)" }}>We could not find that green story</h2>
          <p style={{ margin: "0.6rem auto 2rem", color: "var(--pp-muted)", maxWidth: "55ch" }}>
            The plantation profile you are looking for may still be in review or
            the link may be incorrect. Head back to explore all our corporate
            plantation partnerships.
          </p>
          <div className="pp-actions pp-actions--center">
            <Link href="/plantation-partners" className="pp-button pp-button--solid">
              Back to all plantation partners
            </Link>
            <Link href="/contact" className="pp-button pp-button--ghost" style={{ color: "var(--pp-forest)", borderColor: "rgba(36,122,77,0.3)", background: "transparent" }}>
              Submit a partnership enquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
