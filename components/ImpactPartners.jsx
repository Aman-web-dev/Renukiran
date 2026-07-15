import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Handshake,
  Leaf,
  MapPin,
  Quote,
  Sparkles,
  Sprout,
  Tag,
  Users,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import {
  getImpactPartnerSummaries,
  getPublishedImpactPartners,
} from "@/data/impactPartners";

/**
 * Hero / overview section for the impact-partners landing page.
 */
export function ImpactPartnersHero({ totalPartners, totalFamilies }) {
  return (
    <header className="ip-hero">
      <div className="ip-shell ip-hero__inner">
        <div>
          <span className="ip-hero__eyebrow">
            <Sparkles size={14} /> Our Impact Partners
          </span>
          <h1>Where Corporate Purpose Meets Community Action</h1>
          <p>
            Renukiran Welfare Foundation partners with leading organisations to
            design meaningful employee engagement, CSR and ESG experiences.
            Every page here tells the story of one partner, the activity we
            co-created, and the change we made possible together.
          </p>
          <div className="ip-hero__actions">
            <Link
              href="/contact"
              className="ip-button ip-button--primary"
              aria-label="Start an impact partnership with Renukiran"
            >
              Become a partner <ArrowRight size={16} />
            </Link>
            <a
              href="#partner-stories"
              className="ip-button ip-button--ghost"
              aria-label="Browse our impact partner stories"
            >
              Browse stories
            </a>
          </div>
        </div>
        <div
          className="ip-hero__stats"
          aria-label="At a glance impact partner numbers"
        >
          <div>
            <strong>{totalPartners}</strong>
            <span>Impact partners</span>
          </div>
          <div>
            <strong>{totalFamilies || "—"}</strong>
            <span>Total families reached</span>
          </div>
          <div>
            <strong>5+</strong>
            <span>Activity themes</span>
          </div>
          <div>
            <strong>QR ready</strong>
            <span>Dynamic partner pages</span>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Reusable card representing a single impact partner.
 */
export function ImpactPartnerCard({ partner }) {
  return (
    <Link
      href={`/impact-partners/${partner.slug}`}
      className="ip-card"
      aria-label={`Read the impact story of ${partner.clientName}`}
    >
      <div className="ip-card__cover">
        {partner.coverImage?.src ? (
          <Image
            src={partner.coverImage.src}
            alt={partner.coverImage.alt || partner.clientName}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 600px) 50vw, 100vw"
            style={{ objectFit: "cover", objectPosition: partner.coverImage.position || "center" }}
            unoptimized
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
        <span className="ip-card__chip">{partner.activityType}</span>
      </div>
      <div className="ip-card__body">
        <div className="ip-card__logo-row">
          <div className="ip-card__logo" aria-hidden="true">
            {partner.clientLogo ? (
              <Image
                src={partner.clientLogo}
                alt={`${partner.clientName} logo`}
                width={36}
                height={36}
                unoptimized
              />
            ) : (
              <span className="ip-card__logo-fallback">
                {partner.clientName.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <div className="ip-card__client">{partner.clientName}</div>
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
        <h3 className="ip-card__title">{partner.activityTitle}</h3>
        <div className="ip-card__meta">
          <span>
            <CalendarDays size={14} /> {partner.date}
          </span>
          <span>
            <MapPin size={14} /> {partner.location}
          </span>
        </div>
        <p className="ip-card__summary">{partner.summary}</p>
        {partner.stats?.length ? (
          <div className="ip-card__stats">
            {partner.stats.map((stat) => (
              <span key={stat.label} className="ip-card__stat">
                {stat.value} · {stat.label}
              </span>
            ))}
          </div>
        ) : null}
        <span className="ip-card__cta">
          Read the story <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

/**
 * Grid wrapper used on the listing page.
 */
export function ImpactPartnerGrid({ partners }) {
  if (!partners.length) {
    return (
      <div className="ip-empty">
        <h3 style={{ marginBottom: "0.5rem" }}>Stories coming soon</h3>
        <p>
          We are currently preparing impact stories for our newest partners.
          Please check back shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="ip-card-grid">
      {partners.map((partner) => (
        <ImpactPartnerCard key={partner.slug} partner={partner} />
      ))}
    </div>
  );
}

/**
 * "Why partner with us" feature grid.
 */
export function WhyPartnerSection() {
  const features = [
    {
      icon: <Handshake />,
      title: "End-to-end programme design",
      description:
        "From concept and planning to on-ground delivery, we partner with your team to shape engaging, values-aligned programmes.",
    },
    {
      icon: <Users />,
      title: "Employee engagement that matters",
      description:
        "We craft experiences that give your teams a meaningful way to contribute, learn and connect with the communities you serve.",
    },
    {
      icon: <Leaf />,
      title: "Measurable impact",
      description:
        "Beneficiary data, geo-tagged evidence, photographs and impact reports — all consolidated for your CSR and ESG reporting needs.",
    },
    {
      icon: <Sprout />,
      title: "Scalable across India",
      description:
        "Multi-state execution capability, strong community networks and reliable field teams across geographies and themes.",
    },
  ];
  return (
    <div className="ip-feature-grid">
      {features.map((feature) => (
        <div key={feature.title} className="ip-feature">
          {feature.icon}
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * Closing call-to-action for the listing page.
 */
export function ImpactPartnersCta() {
  return (
    <div className="ip-cta">
      <h2 className="ip-section__title">Ready to build your impact story?</h2>
      <p className="ip-section__lede" style={{ textAlign: "center" }}>
        Share your vision with us and we will design a tailored, on-ground
        experience your employees and communities will remember — with a
        dedicated, dynamic story page delivered for your QR campaigns and
        stakeholder reports.
      </p>
      <div className="ip-flex-wrap" style={{ justifyContent: "center" }}>
        <Link href="/contact" className="ip-button ip-button--primary">
          Start a partnership <ArrowRight size={16} />
        </Link>
        <Link
          href="/rwf-corporates/employee-enagagement"
          className="ip-button ip-button--solid"
        >
          Explore employee engagement <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}

/**
 * Top-of-page client identity block shown on every profile page.
 */
export function ImpactPartnerHeader({ partner }) {
  return (
    <section className="ip-profile-hero">
      <div className="ip-shell ip-profile-hero__inner">
        <div>
          <nav className="ip-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp;
            <Link href="/impact-partners">Impact Partners</Link> &nbsp;/&nbsp;
            <span>{partner.client.name}</span>
          </nav>
          <Link href="/impact-partners" className="ip-back">
            ← All impact partners
          </Link>
          <div className="ip-flex-wrap" style={{ marginBottom: "1rem" }}>
            <div
              className="ip-card__logo"
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
              aria-hidden="true"
            >
              {partner.client.logo ? (
                <Image
                  src={partner.client.logo}
                  alt={`${partner.client.name} logo`}
                  width={48}
                  height={48}
                  unoptimized
                />
              ) : (
                <span
                  className="ip-card__logo-fallback"
                  style={{ color: "#fff", fontSize: "1.4rem" }}
                >
                  {partner.client.name.charAt(0)}
                </span>
              )}
            </div>
            <span className="ip-profile-hero__eyebrow">
              <Tag size={14} /> Impact partner
            </span>
          </div>
          <h1>{partner.activity.title}</h1>
          <h2>With {partner.client.name}</h2>
          <div className="ip-profile-hero__meta">
            <span>
              <Tag size={14} /> {partner.activity.type}
            </span>
            <span>
              <CalendarDays size={14} /> {partner.activity.date}
            </span>
            <span>
              <MapPin size={14} /> {partner.activity.location}
            </span>
            {partner.activity.theme ? (
              <span>
                <Leaf size={14} /> {partner.activity.theme}
              </span>
            ) : null}
          </div>
          <div className="ip-hero__actions">
            {partner.client.website ? (
              <a
                href={partner.client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="ip-button ip-button--primary"
              >
                Visit {partner.client.shortName || partner.client.name}{" "}
                <ArrowUpRight size={16} />
              </a>
            ) : null}
            <Link
              href="/contact"
              className="ip-button ip-button--ghost"
            >
              Co-create with us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        {partner.coverImage?.src ? (
          <figure className="ip-profile-hero__cover">
            <Image
              src={partner.coverImage.src}
              alt={partner.coverImage.alt || partner.activity.title}
              fill
              sizes="(min-width: 900px) 480px, 100vw"
              style={{
                objectFit: "cover",
                objectPosition: partner.coverImage.position || "center",
              }}
              priority
              unoptimized
            />
          </figure>
        ) : null}
      </div>
    </section>
  );
}

export { default as ImpactPartnerGallery } from "./ImpactPartnerGallery";

/**
 * Sidebar with map, impact stats, SDGs and QR.
 */
export function ImpactPartnerSidebar({ partner }) {
  return (
    <aside className="ip-profile-sidebar" aria-label="Activity highlights">
      {partner.map?.embedUrl ? (
        <div className="ip-sidebar-card ip-sidebar-card--map">
          <iframe
            title={`Map showing ${partner.activity.location}`}
            src={partner.map.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="ip-map__footer">
            <strong style={{ color: "var(--ip-primary-dark)" }}>
              {partner.map.label}
            </strong>
            <div className="ip-flex-wrap" style={{ gap: "0.75rem" }}>
              {partner.map.earthUrl ? (
                <a
                  href={partner.map.earthUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={14} /> Open in Google Earth
                </a>
              ) : null}
              {partner.map.mapsUrl ? (
                <a
                  href={partner.map.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight size={14} /> View on Google Maps
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {partner.impact?.stats?.length ? (
        <div className="ip-sidebar-card">
          <h3>Impact in numbers</h3>
          <div className="ip-stat-grid">
            {partner.impact.stats.map((stat) => (
              <div key={stat.label} className="ip-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {partner.impact?.sdgs?.length ? (
        <div className="ip-sidebar-card">
          <h3>Aligned SDGs</h3>
          <div className="ip-sdg-list">
            {partner.impact.sdgs.map((sdg) => (
              <span key={sdg.number} className="ip-sdg-pill">
                SDG {sdg.number} · {sdg.label}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="ip-qr">
        <Sparkles size={20} color="#2e5893" />
        <strong>QR-ready story page</strong>
        <span>
          Use this URL on thank-you cards, certificates and QR codes — it
          always reflects the latest impact and imagery.
        </span>
        <code
          style={{
            background: "rgba(46, 88, 147, 0.08)",
            padding: "0.4rem 0.75rem",
            borderRadius: 8,
            color: "var(--ip-primary-dark)",
            fontSize: "0.78rem",
            wordBreak: "break-all",
          }}
        >
          /impact-partners/{partner.slug}
        </code>
      </div>
    </aside>
  );
}

/**
 * Special mentions / thank-you block.
 */
export function ImpactPartnerMentions({ mentions }) {
  if (!mentions?.length) return null;
  return (
    <div className="ip-mentions">
      {mentions.map((mention) => (
        <article key={mention.name} className="ip-mention">
          <div>
            <div className="ip-mention__name">{mention.name}</div>
            {mention.role ? (
              <div className="ip-mention__role">{mention.role}</div>
            ) : null}
          </div>
          {mention.note ? <p className="ip-mention__note">{mention.note}</p> : null}
          {mention.url ? (
            <a
              className="ip-mention__link"
              href={mention.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {mention.linkLabel || mention.url.replace(/^https?:\/\//, "")}{" "}
              <ArrowUpRight size={14} />
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}

/**
 * Hook helper to compute the small numbers used in hero stats.
 */
export function computeImpactTotals(partners = getPublishedImpactPartners()) {
  let families = 0;
  for (const partner of partners) {
    for (const stat of partner.impact?.stats || []) {
      const match = `${stat.value}`.match(/\d[\d,]*/);
      if (match) {
        const value = parseInt(match[0].replace(/,/g, ""), 10);
        if (!Number.isNaN(value) && /famil|people|individual|reach/i.test(stat.label)) {
          families += value;
        }
      }
    }
  }
  return { totalPartners: partners.length, totalFamilies: families };
}

export function getImpactPartnerCardData() {
  return getImpactPartnerSummaries();
}
