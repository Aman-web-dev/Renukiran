import "../plantationPartners.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  MapPin,
  Quote,
  TreePine,
  Trees,
} from "lucide-react";
import {
  PlantationPartnerGallery,
  PlantationPartnerHeader,
  PlantationPartnerMentions,
  PlantationPartnerSite,
  PlantationPartnerSidebar,
  PlantationPartnerTimeline,
  PlantationPartnersCta,
  computePlantationPartnerTotals,
} from "@/components/PlantationPartners";
import {
  getPlantationPartnerBySlug,
  getPublishedPlantationPartners,
} from "@/data/plantationPartners";

const SITE_URL = "https://www.renukiran.org";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPlantationPartners().map((partner) => ({
    slug: partner.slug,
  }));
}

export function generateMetadata({ params }) {
  const partner = getPlantationPartnerBySlug(params.slug);
  if (!partner) {
    return {
      title: "Plantation partner not found",
      robots: { index: false, follow: false },
    };
  }

  const path = `/plantation-partners/${partner.slug}`;
  const url = `${SITE_URL}${path}`;
  const years = partner.timeline?.length
    ? `${partner.timeline.length}-year documented legacy`
    : partner.status;
  const title = `${partner.company.name} × ${partner.drive.title} · ${years || "Multi-year CSR plantation"}`;

  return {
    title: `${partner.company.name} × ${partner.drive.title}`,
    description: partner.drive.summary,
    keywords: [
      partner.company.name,
      `${partner.company.name} CSR plantation`,
      `${partner.company.name} ESG partnership`,
      "Renukiran plantation partner",
      partner.drive.theme,
      partner.drive.model,
      partner.site?.name,
      ...(partner.drive.locations || [partner.drive.location]),
    ].filter(Boolean),
    alternates: { canonical: path },
    openGraph: {
      title: `${partner.drive.title} · ${partner.company.name} × Renukiran`,
      description: partner.drive.summary,
      url,
      type: "article",
      images: partner.coverImage?.src
        ? [
            {
              url: partner.coverImage.src,
              alt:
                partner.coverImage.alt ||
                `${partner.company.name} plantation drive`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${partner.drive.title} · ${partner.company.name}`,
      description: partner.drive.summary,
      images: partner.coverImage?.src ? [partner.coverImage.src] : undefined,
    },
  };
}

export default function PlantationPartnerProfilePage({ params }) {
  const partner = getPlantationPartnerBySlug(params.slug);
  if (!partner) {
    notFound();
  }

  const allPartners = getPublishedPlantationPartners();
  const otherPartners = allPartners
    .filter((p) => p.slug !== partner.slug)
    .slice(0, 3);
  const totals = computePlantationPartnerTotals();

  const years = partner.timeline?.length || 0;
  const latestYear = partner.timeline?.length
    ? [...partner.timeline].sort((a, b) => (a.year || 0) - (b.year || 0))[years - 1]?.year
    : null;
  const latestSurvival =
    partner.timeline?.length &&
    [...partner.timeline]
      .sort((a, b) => (a.year || 0) - (b.year || 0))
      [years - 1]?.metrics?.survivalRate;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${partner.drive.title} · ${partner.company.name}`,
    description: partner.drive.summary,
    image: partner.coverImage?.src ? [partner.coverImage.src] : undefined,
    author: { "@type": "Organization", name: "Renukiran Welfare Foundation" },
    publisher: {
      "@type": "Organization",
      name: "Renukiran Welfare Foundation",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/renukiran-logo-png.png`,
      },
    },
    about: { "@type": "Organization", name: partner.company.name },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/plantation-partners/${partner.slug}`,
    },
    keywords: [
      partner.company.name,
      partner.drive.type,
      partner.drive.model,
      partner.drive.theme,
      `${partner.site?.areaAcres || ""} acres`,
      `${years}-year plantation legacy`,
    ]
      .filter(Boolean)
      .join(", "),
  };

  return (
    <main className="plantation-partners-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <PlantationPartnerHeader partner={partner} />

      <div className="pp-shell pp-profile-layout">
        <div className="pp-profile-main">
          <section className="pp-profile-section">
            <h2>About {partner.company.name}</h2>
            {partner.company.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          <section className="pp-profile-section">
            <h2>The plantation drive</h2>
            <p>{partner.drive.summary}</p>
            <h3>What we set out to do</h3>
            <p>{partner.drive.objective}</p>

            {partner.drive.details?.length ? (
              <>
                <h3>How it unfolded</h3>
                <div className="pp-activity-list">
                  {partner.drive.details.map((block) => (
                    <article className="pp-activity" key={block.title}>
                      <h3>{block.title}</h3>
                      <p>{block.description}</p>
                      <ul>
                        {block.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </>
            ) : null}
          </section>

          {partner.site ? (
            <section className="pp-profile-section">
              <h2>Where we planted</h2>
              <p>
                Every {partner.company.name} × Renukiran plantation is anchored
                to a specific, geo-tagged site. Here is the area under
                restoration and the local conditions that shaped our species
                and preparation choices.
              </p>
              <PlantationPartnerSite site={partner.site} />
            </section>
          ) : null}

          {partner.timeline?.length ? (
            <section className="pp-profile-section">
              <h2>Year-by-year growth</h2>
              <p>
                This page is updated every year with the latest photographs,
                species additions, survival audits and growth metrics — so the
                story always reflects the legacy as it is today.
              </p>
              <PlantationPartnerTimeline timeline={partner.timeline} />
            </section>
          ) : null}

          {partner.plantation ? (
            <section className="pp-profile-section">
              <h2>Designing the plantation</h2>
              <p>{partner.plantation.methodology}</p>
              <div className="pp-stewardship-grid">
                <article className="pp-stewardship-card">
                  <Leaf size={22} />
                  <h3>Species & ecology</h3>
                  <p>
                    {partner.plantation.species?.length
                      ? `Native species in the design include ${partner.plantation.species
                          .map((s) => s.name)
                          .join(", ")}.`
                      : "Native, climate-resilient species selected for the site to support biodiversity, soil health and long-term survival."}
                  </p>
                </article>
                <article className="pp-stewardship-card">
                  <h3>Stewardship</h3>
                  <p>
                    {partner.plantation.stewardship ||
                      "Watering, mulching, protection and replacement rounds are scheduled across multiple seasons to give every sapling the best chance of survival."}
                  </p>
                </article>
                <article className="pp-stewardship-card">
                  <h3>Monitoring</h3>
                  <p>
                    {partner.plantation.monitoring ||
                      "Geo-tagged records, survival audits and growth updates are documented to keep the project accountable and reportable."}
                  </p>
                </article>
              </div>
            </section>
          ) : null}

          <section className="pp-profile-section pp-impact-callout">
            <h2>The impact, in numbers</h2>
            <p className="pp-impact-heading">{partner.impact.heading}</p>
            {partner.impact.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {partner.impact.metrics?.treesPlanted ? (
              <p>
                <strong>
                  {partner.impact.metrics.treesPlanted.toLocaleString("en-IN")} saplings
                </strong>
                {partner.impact.metrics.areaAcres
                  ? ` across approximately ${partner.impact.metrics.areaAcres} acres`
                  : partner.impact.metrics.areaSqM
                  ? ` across approximately ${partner.impact.metrics.areaSqM.toLocaleString("en-IN")} m²`
                  : ""}
                {years ? `, nurtured over ${years} year${years === 1 ? "" : "s"} of stewardship` : ""}
                {latestSurvival ? ` — most recent survival ${latestSurvival}.` : "."}
              </p>
            ) : null}
            {latestYear ? (
              <p>
                <strong>Latest update: {latestYear}.</strong> The next
                anniversary update will be added here once the
                {latestYear + 1} audit is complete.
              </p>
            ) : null}
          </section>

          <section className="pp-profile-section pp-conclusion">
            <h2>
              <Quote
                size={20}
                style={{ verticalAlign: "-3px", marginRight: 6, color: "var(--pp-green)" }}
              />
              Conclusion
            </h2>
            <p>{partner.conclusion}</p>
          </section>

          {partner.thankingNote ? (
            <section className="pp-profile-section pp-thanks">
              <h2>A note of gratitude</h2>
              <p>{partner.thankingNote}</p>
            </section>
          ) : null}

          {partner.specialMentions?.length ? (
            <section className="pp-profile-section">
              <h2>Special mentions</h2>
              <p>
                We are grateful to the teams, field crews and community members
                whose care brought this plantation drive to life.
              </p>
              <PlantationPartnerMentions mentions={partner.specialMentions} />
            </section>
          ) : null}
        </div>

        <PlantationPartnerSidebar partner={partner} />
      </div>

      {otherPartners.length ? (
        <section className="pp-section pp-section--mist">
          <div className="pp-shell">
            <div className="pp-section-head pp-section-head--split">
              <div>
                <span className="pp-eyebrow">More plantation partners</span>
                <h2>Continue exploring green corporate legacies</h2>
              </div>
              <Link href="/plantation-partners" className="pp-button pp-button--solid">
                See all projects <ArrowRight size={16} />
              </Link>
            </div>
            <div className="pp-card-grid">
              {otherPartners.map((p) => (
                <Link
                  key={p.slug}
                  href={`/plantation-partners/${p.slug}`}
                  className="pp-card"
                >
                  <div className="pp-card__cover">
                    {p.coverImage?.src ? (
                      <img
                        src={p.coverImage.src}
                        alt={p.coverImage.alt || p.company.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: p.coverImage.position || "center",
                        }}
                      />
                    ) : (
                      <div className="pp-card__placeholder" aria-hidden="true">
                        <TreePine size={58} />
                      </div>
                    )}
                    <span className="pp-card__status">
                      <CheckCircle2 size={13} /> {p.status || "Plantation project"}
                    </span>
                  </div>
                  <div className="pp-card__body">
                    <div className="pp-card__identity">
                      <div className="pp-logo" aria-hidden="true">
                        {p.company.logo ? (
                          <img
                            src={p.company.logo}
                            alt={`${p.company.name} logo`}
                            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                          />
                        ) : (
                          <span>{p.company.name.charAt(0)}</span>
                        )}
                      </div>
                      <div>
                        <strong>{p.company.name}</strong>
                        <small>Plantation partner</small>
                      </div>
                    </div>
                    <div>
                      {p.drive.model ? <span className="pp-card__model">{p.drive.model}</span> : null}
                      <h3>{p.drive.title}</h3>
                    </div>
                    <div className="pp-card__meta">
                      <span><MapPin size={14} /> {p.drive.location}</span>
                      <span>{p.drive.date}</span>
                      {p.site ? <span><Trees size={14} /> {p.site.areaAcres} acres</span> : null}
                    </div>
                    <p>{p.drive.summary}</p>
                    <span className="pp-card__link">
                      Read the story <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="pp-section pp-section--mist">
          <div className="pp-shell">
            <div className="pp-section-head pp-section-head--split">
              <div>
                <span className="pp-eyebrow">Plantation network</span>
                <h2>Help us grow this gallery of green stories</h2>
              </div>
              <Link href="/plantation-partners" className="pp-button pp-button--solid">
                Back to all projects <ArrowRight size={16} />
              </Link>
            </div>
            <div className="pp-stat-grid" style={{ maxWidth: 520, marginTop: "1rem" }}>
              <div className="pp-stat">
                <strong>{totals.totalCompanies}</strong>
                <span>Corporate partners featured</span>
              </div>
              <div className="pp-stat">
                <strong>{totals.totalTrees.toLocaleString("en-IN")}</strong>
                <span>Documented trees planted</span>
              </div>
            </div>
            <p style={{ marginTop: "1.5rem", color: "var(--pp-muted)", maxWidth: "60ch" }}>
              We are building this collection with companies whose plantation
              data, photographs and geo-tagged records have been verified. The
              first verified project will appear here.
            </p>
          </div>
        </section>
      )}

      <section className="pp-section pp-section--forest">
        <div className="pp-shell">
          <PlantationPartnersCta />
        </div>
      </section>
    </main>
  );
}
