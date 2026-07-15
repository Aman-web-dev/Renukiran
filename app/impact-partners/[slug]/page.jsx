import "../impactPartners.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Quote, Sparkles } from "lucide-react";
import {
  ImpactPartnerGallery,
  ImpactPartnerHeader,
  ImpactPartnerMentions,
  ImpactPartnerSidebar,
  ImpactPartnersCta,
} from "@/components/ImpactPartners";
import {
  getImpactPartnerBySlug,
  getPublishedImpactPartners,
} from "@/data/impactPartners";

const SITE_URL = "https://www.renukiran.org";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedImpactPartners().map((partner) => ({
    slug: partner.slug,
  }));
}

export function generateMetadata({ params }) {
  const partner = getImpactPartnerBySlug(params.slug);
  if (!partner) {
    return {
      title: "Impact partner not found",
      robots: { index: false, follow: false },
    };
  }

  const path = `/impact-partners/${partner.slug}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: `${partner.client.name} × ${partner.activity.title}`,
    description: partner.activity.summary,
    keywords: [
      partner.client.name,
      `${partner.client.name} CSR`,
      `${partner.client.name} employee engagement`,
      "Renukiran impact partner",
      partner.activity.theme,
      ...partner.activity.locations,
    ].filter(Boolean),
    alternates: { canonical: path },
    openGraph: {
      title: `${partner.activity.title} · ${partner.client.name} × Renukiran`,
      description: partner.activity.summary,
      url,
      type: "article",
      images: partner.coverImage?.src
        ? [
            {
              url: partner.coverImage.src,
              alt: partner.coverImage.alt || partner.activity.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${partner.activity.title} · ${partner.client.name}`,
      description: partner.activity.summary,
      images: partner.coverImage?.src ? [partner.coverImage.src] : undefined,
    },
  };
}

export default function ImpactPartnerProfilePage({ params }) {
  const partner = getImpactPartnerBySlug(params.slug);
  if (!partner) {
    notFound();
  }

  const otherPartners = getPublishedImpactPartners()
    .filter((p) => p.slug !== partner.slug)
    .slice(0, 3);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${partner.activity.title} · ${partner.client.name}`,
    description: partner.activity.summary,
    image: partner.coverImage?.src
      ? [partner.coverImage.src]
      : undefined,
    author: { "@type": "Organization", name: "Renukiran Welfare Foundation" },
    publisher: {
      "@type": "Organization",
      name: "Renukiran Welfare Foundation",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/renukiran-logo-png.png`,
      },
    },
    about: { "@type": "Organization", name: partner.client.name },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/impact-partners/${partner.slug}`,
    },
    keywords: [
      partner.client.name,
      partner.activity.type,
      partner.activity.theme,
    ]
      .filter(Boolean)
      .join(", "),
  };

  return (
    <main className="impact-partners-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ImpactPartnerHeader partner={partner} />

      <div className="ip-shell ip-profile-body">
        <div className="ip-profile-main">
          <section className="ip-profile-section">
            <h2>About {partner.client.name}</h2>
            {partner.client.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          <section className="ip-profile-section">
            <h2>The activity</h2>
            <p>{partner.activity.summary}</p>
            <h3>What we set out to do</h3>
            <p>{partner.activity.objective}</p>

            {partner.activity.details?.length ? (
              <>
                <h3>How the day unfolded</h3>
                {partner.activity.details.map((block) => (
                  <article key={block.title} className="ip-activity-block">
                    <h3>{block.title}</h3>
                    <p>{block.description}</p>
                    <ul>
                      {block.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </>
            ) : null}
          </section>

          {partner.gallery?.length ? (
            <section className="ip-profile-section">
              <h2>Glimpses from the ground</h2>
              <p>
                A few moments captured during the activity — from the first kit
                preparation to the final handovers and conversations with the
                community.
              </p>
              <ImpactPartnerGallery gallery={partner.gallery} />
            </section>
          ) : null}

          <section className="ip-profile-section ip-profile-section--callout">
            <h2>The impact</h2>
            <p>{partner.impact.heading}</p>
            {partner.impact.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {partner.impact.stats?.length ? (
              <div className="ip-stat-grid" style={{ marginTop: "1rem" }}>
                {partner.impact.stats.map((stat) => (
                  <div key={stat.label} className="ip-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </section>

          <section className="ip-profile-section ip-profile-section--conclusion">
            <h2>
              <Quote
                size={20}
                style={{ verticalAlign: "-3px", marginRight: 6, color: "#2e5893" }}
              />
              Conclusion
            </h2>
            <p>{partner.conclusion}</p>
          </section>

          {partner.thankingNote ? (
            <section className="ip-profile-section ip-profile-section--thanks">
              <h2>A note of gratitude</h2>
              <p>{partner.thankingNote}</p>
            </section>
          ) : null}

          {partner.specialMentions?.length ? (
            <section className="ip-profile-section">
              <h2>Special mentions</h2>
              <p>
                We are grateful to every individual and team whose care made
                this collaboration possible.
              </p>
              <ImpactPartnerMentions mentions={partner.specialMentions} />
            </section>
          ) : null}
        </div>

        <ImpactPartnerSidebar partner={partner} />
      </div>

      {otherPartners.length ? (
        <section className="ip-section ip-section--muted">
          <div className="ip-shell">
            <div className="ip-section__head">
              <div>
                <div className="ip-section__eyebrow">More partners</div>
                <h2 className="ip-section__title">
                  Continue exploring our impact stories
                </h2>
              </div>
              <Link
                href="/impact-partners"
                className="ip-button ip-button--solid"
              >
                See all partners <ArrowRight size={16} />
              </Link>
            </div>
            <div className="ip-card-grid">
              {otherPartners.map((p) => (
                <Link
                  key={p.slug}
                  href={`/impact-partners/${p.slug}`}
                  className="ip-card"
                >
                  <div className="ip-card__cover">
                    {p.coverImage?.src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.coverImage.src}
                        alt={p.coverImage.alt || p.client.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: p.coverImage.position || "center",
                        }}
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        style={{
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(135deg, #2e5893 0%, #81c421 100%)",
                        }}
                      />
                    )}
                    <span className="ip-card__chip">{p.activityType}</span>
                  </div>
                  <div className="ip-card__body">
                    <div className="ip-card__logo-row">
                      <div className="ip-card__logo" aria-hidden="true">
                        {p.clientLogo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={p.clientLogo}
                            alt={`${p.client.name} logo`}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          <span className="ip-card__logo-fallback">
                            {p.client.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="ip-card__client">{p.client.name}</div>
                        <div
                          style={{
                            fontSize: "0.78rem",
                            color: "var(--ip-muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          Impact partner
                        </div>
                      </div>
                    </div>
                    <h3 className="ip-card__title">{p.activityTitle}</h3>
                    <div className="ip-card__meta">
                      <span>{p.date}</span>
                      <span>{p.location}</span>
                    </div>
                    <p className="ip-card__summary">{p.summary}</p>
                    <span className="ip-card__cta">
                      Read the story <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="ip-section ip-section--dark">
        <div className="ip-shell">
          <ImpactPartnersCta />
        </div>
      </section>
    </main>
  );
}
