import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Handshake,
  Leaf,
  MapPin,
  ScanLine,
  Sparkles,
  Sprout,
  Tag,
  TreePine,
  Trees,
  Users,
} from "lucide-react";
import PlantationPartnerGallery from "./PlantationPartnerGallery";
import {
  getPublishedPlantationPartners,
  getPlantationPartnerSummaries,
} from "@/data/plantationPartners";

function formatNumber(value) {
  return new Intl.NumberFormat("en-IN").format(value || 0);
}

export function computePlantationPartnerTotals(
  partners = getPublishedPlantationPartners(),
) {
  const locations = new Set();
  let totalTrees = 0;
  let totalArea = 0;
  let totalYears = 0;

  for (const partner of partners) {
    const trees = Number(partner.impact?.metrics?.treesPlanted || 0);
    if (Number.isFinite(trees)) totalTrees += trees;

    const area = Number(partner.impact?.metrics?.areaAcres || 0);
    if (Number.isFinite(area)) totalArea += area;

    totalYears += partner.timeline?.length || 0;

    const projectLocations = partner.drive?.locations?.length
      ? partner.drive.locations
      : [partner.drive?.location];
    projectLocations.filter(Boolean).forEach((location) => locations.add(location));
  }

  return {
    totalCompanies: partners.length,
    totalTrees,
    totalLocations: locations.size,
    totalAreaAcres: totalArea,
    totalYears,
  };
}

export function getPlantationPartnerCardData() {
  return getPlantationPartnerSummaries();
}

export function PlantationPartnersHero({
  totalCompanies,
  totalTrees,
  totalAreaAcres,
  totalYears,
}) {
  return (
    <header className="pp-hero">
      <div className="pp-shell pp-hero__inner">
        <div className="pp-hero__content">
          <span className="pp-eyebrow pp-eyebrow--light">
            <Sprout size={15} /> Corporate green legacies
          </span>
          <h1>Companies Growing a Greener Tomorrow With Us</h1>
          <p>
            Discover CSR plantation drives created by Renukiran Welfare Foundation
            with organisations committed to climate action. Every story documents
            the company, the area planted, the species chosen, the photographs
            from each year and the long-term stewardship behind the project.
          </p>
          <div className="pp-actions">
            <Link href="/contact" className="pp-button pp-button--primary">
              Plan a plantation drive <ArrowRight size={17} />
            </Link>
            <a href="#plantation-stories" className="pp-button pp-button--ghost">
              Explore green stories
            </a>
          </div>
        </div>

        <div className="pp-hero__panel" aria-label="Plantation partnerships at a glance">
          <div className="pp-hero__panel-icon" aria-hidden="true">
            <Trees size={42} />
          </div>
          <div className="pp-hero__stats">
            <div>
              <strong>{formatNumber(totalCompanies)}</strong>
              <span>Corporate partners</span>
            </div>
            <div>
              <strong>{formatNumber(totalTrees)}</strong>
              <span>Trees documented</span>
            </div>
            <div>
              <strong>{formatNumber(totalAreaAcres)}</strong>
              <span>Acres restored</span>
            </div>
            <div>
              <strong>{formatNumber(totalYears)}</strong>
              <span>Year-records tracked</span>
            </div>
          </div>
          <p>
            Year-by-year profiles with site area, species inventories, growth
            photos and audit-ready metrics — built for CSR, ESG and QR
            reporting.
          </p>
        </div>
      </div>
    </header>
  );
}

export function PlantationPartnerCard({ partner }) {
  return (
    <Link
      href={`/plantation-partners/${partner.slug}`}
      className="pp-card"
      aria-label={`Read ${partner.companyName}'s plantation story`}
    >
      <div className="pp-card__cover">
        {partner.coverImage?.src ? (
          <Image
            src={partner.coverImage.src}
            alt={partner.coverImage.alt || `${partner.companyName} plantation drive`}
            fill
            sizes="(min-width: 1100px) 370px, (min-width: 680px) 50vw, 100vw"
            style={{
              objectFit: "cover",
              objectPosition: partner.coverImage.position || "center",
            }}
            unoptimized
          />
        ) : (
          <div className="pp-card__placeholder" aria-hidden="true">
            <Trees size={58} />
          </div>
        )}
        <span className="pp-card__status">
          <CheckCircle2 size={13} /> {partner.status || "Plantation project"}
        </span>
      </div>

      <div className="pp-card__body">
        <div className="pp-card__identity">
          <div className="pp-logo" aria-hidden="true">
            {partner.companyLogo ? (
              <Image
                src={partner.companyLogo}
                alt=""
                width={42}
                height={42}
                style={{ objectFit: "contain" }}
                unoptimized
              />
            ) : (
              <span>{partner.companyName.charAt(0)}</span>
            )}
          </div>
          <div>
            <strong>{partner.companyName}</strong>
            <small>Plantation partner</small>
          </div>
        </div>

        <div>
          {partner.model ? <span className="pp-card__model">{partner.model}</span> : null}
          <h3>{partner.driveTitle}</h3>
        </div>

        <div className="pp-card__meta">
          <span><CalendarDays size={15} /> {partner.date}</span>
          <span><MapPin size={15} /> {partner.location}</span>
          {partner.site ? <span><Trees size={15} /> {partner.site.areaAcres} acres</span> : null}
          {partner.yearsActive ? <span><Sparkles size={15} /> {partner.yearsActive}-year legacy</span> : null}
        </div>
        <p>{partner.summary}</p>

        {partner.stats?.length ? (
          <div className="pp-card__stats">
            {partner.stats.map((stat) => (
              <span key={stat.label}>
                <strong>{stat.value}</strong> {stat.label}
              </span>
            ))}
          </div>
        ) : null}

        <span className="pp-card__link">
          Visit the green story <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

export function PlantationPartnerGrid({ partners }) {
  if (!partners.length) {
    return (
      <div className="pp-empty">
        <span className="pp-empty__icon" aria-hidden="true"><Sprout size={34} /></span>
        <div>
          <h3>Our first corporate green stories are taking root</h3>
          <p>
            Verified company plantation profiles will appear here as project
            information, geo-tagged records and photographs are published.
          </p>
        </div>
        <Link href="/contact" className="pp-button pp-button--solid">
          Become a founding plantation partner <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="pp-card-grid">
      {partners.map((partner) => (
        <PlantationPartnerCard key={partner.slug} partner={partner} />
      ))}
    </div>
  );
}

export function WhyPlantationPartnerSection() {
  const features = [
    {
      icon: <TreePine />,
      title: "Ecology-led project design",
      description: "Sites, native species and plantation models are selected around local ecological conditions and the intended community outcome.",
    },
    {
      icon: <Users />,
      title: "Purposeful employee engagement",
      description: "Well-facilitated on-ground experiences help employee volunteers understand, participate in and champion environmental action.",
    },
    {
      icon: <ScanLine />,
      title: "Geo-tagged transparency",
      description: "Location records, photographs, plantation metrics and progress evidence make the initiative clear and reportable.",
    },
    {
      icon: <Droplets />,
      title: "Beyond plantation day",
      description: "Watering, mulching, protection, replacement and survival monitoring support a green asset built to keep growing.",
    },
    {
      icon: <BarChart3 />,
      title: "CSR & ESG documentation",
      description: "Structured project stories and impact indicators help teams communicate credible progress to employees and stakeholders.",
    },
    {
      icon: <Handshake />,
      title: "Scalable implementation",
      description: "From one employee drive to a multi-location green legacy programme, every partnership can be tailored to the organisation.",
    },
  ];

  return (
    <div className="pp-feature-grid">
      {features.map((feature) => (
        <article className="pp-feature" key={feature.title}>
          <span className="pp-feature__icon">{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  );
}

export function PlantationPartnersCta() {
  return (
    <div className="pp-cta">
      <span className="pp-eyebrow pp-eyebrow--light"><Sparkles size={15} /> Grow with purpose</span>
      <h2>Turn your sustainability commitment into a living legacy</h2>
      <p>
        Tell us your CSR, ESG or employee-engagement goal. We will help shape a
        responsible plantation programme with on-ground execution, care,
        monitoring and a dedicated digital project story.
      </p>
      <div className="pp-actions pp-actions--center">
        <Link href="/contact" className="pp-button pp-button--primary">
          Start a conversation <ArrowRight size={17} />
        </Link>
        <Link
          href="/plantation-initiatives/sustainability-partnerships"
          className="pp-button pp-button--ghost"
        >
          Explore ESG partnerships <ArrowUpRight size={17} />
        </Link>
      </div>
    </div>
  );
}

export function PlantationPartnerHeader({ partner }) {
  return (
    <header className="pp-profile-hero">
      <div className="pp-shell pp-profile-hero__inner">
        <div className="pp-profile-hero__content">
          <nav className="pp-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/plantation-partners">Plantation Partners</Link><span>/</span>
            <span aria-current="page">{partner.company.name}</span>
          </nav>
          <Link href="/plantation-partners" className="pp-back">← All plantation partners</Link>

          <div className="pp-profile-hero__identity">
            <div className="pp-logo pp-logo--hero" aria-hidden="true">
              {partner.company.logo ? (
                <Image
                  src={partner.company.logo}
                  alt=""
                  width={54}
                  height={54}
                  style={{ objectFit: "contain" }}
                  unoptimized
                />
              ) : (
                <span>{partner.company.name.charAt(0)}</span>
              )}
            </div>
            <span className="pp-eyebrow pp-eyebrow--light">
              <TreePine size={15} /> Corporate plantation partner
            </span>
          </div>

          <h1>{partner.drive.title}</h1>
          <p className="pp-profile-hero__with">In partnership with {partner.company.name}</p>
          <div className="pp-profile-hero__meta">
            <span><Tag size={14} /> {partner.drive.type}</span>
            <span><CalendarDays size={14} /> {partner.drive.date}</span>
            <span><MapPin size={14} /> {partner.drive.location}</span>
            {partner.drive.model ? <span><Leaf size={14} /> {partner.drive.model}</span> : null}
            {partner.status ? <span><CheckCircle2 size={14} /> {partner.status}</span> : null}
          </div>
          <div className="pp-actions">
            {partner.company.website ? (
              <a
                href={partner.company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="pp-button pp-button--primary"
              >
                Visit {partner.company.shortName || partner.company.name} <ArrowUpRight size={16} />
              </a>
            ) : null}
            <Link href="/contact" className="pp-button pp-button--ghost">
              Create a green legacy <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <figure className="pp-profile-hero__cover">
          {partner.coverImage?.src ? (
            <Image
              src={partner.coverImage.src}
              alt={partner.coverImage.alt || partner.drive.title}
              fill
              sizes="(min-width: 900px) 500px, 100vw"
              style={{
                objectFit: "cover",
                objectPosition: partner.coverImage.position || "center",
              }}
              priority
              unoptimized
            />
          ) : (
            <div className="pp-profile-hero__placeholder" aria-hidden="true"><Trees size={88} /></div>
          )}
          {partner.status ? <figcaption>{partner.status}</figcaption> : null}
        </figure>
      </div>
    </header>
  );
}

function SiteAtAGlance({ partner }) {
  if (!partner.site) return null;
  const startYear = partner.timeline?.length
    ? [...partner.timeline].sort((a, b) => (a.year || 0) - (b.year || 0))[0]?.year
    : null;

  return (
    <section className="pp-sidebar-card">
      <h2><MapPin size={18} /> Site at a glance</h2>
      <div className="pp-site-glance">
        <div className="pp-site-glance__row">
          <span>Site</span>
          <strong>{partner.site.name || partner.drive.location}</strong>
        </div>
        {partner.site.areaAcres ? (
          <div className="pp-site-glance__row">
            <span>Area</span>
            <strong>{partner.site.areaAcres} acres · {partner.site.areaSqM?.toLocaleString("en-IN") || "—"} m²</strong>
          </div>
        ) : null}
        {startYear ? (
          <div className="pp-site-glance__row">
            <span>Started</span>
            <strong>{startYear} · {partner.timeline.length} year{partner.timeline.length === 1 ? "" : "s"} tracked</strong>
          </div>
        ) : null}
        {partner.drive.model ? (
          <div className="pp-site-glance__row">
            <span>Model</span>
            <strong>{partner.drive.model}</strong>
          </div>
        ) : null}
        {partner.map?.mapsUrl ? (
          <a
            href={partner.map.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pp-site-glance__link"
          >
            <ArrowUpRight size={13} /> Open site on Google Maps
          </a>
        ) : null}
      </div>
    </section>
  );
}

function LatestSurvivalCard({ partner }) {
  if (!partner.timeline?.length) return null;
  const sorted = [...partner.timeline].sort((a, b) => (a.year || 0) - (b.year || 0));
  const latest = sorted[sorted.length - 1];
  if (!latest) return null;

  const items = [];
  if (latest.metrics?.survivalRate) items.push({ label: "Latest survival", value: latest.metrics.survivalRate });
  if (latest.metrics?.averageHeight) items.push({ label: "Average height", value: latest.metrics.averageHeight });
  if (latest.metrics?.treesAlive) items.push({ label: "Trees alive", value: latest.metrics.treesAlive.toLocaleString("en-IN") });
  if (latest.metrics?.canopyCover) items.push({ label: "Canopy cover", value: latest.metrics.canopyCover });

  if (!items.length) return null;

  return (
    <section className="pp-sidebar-card">
      <h2><Sparkles size={18} /> Latest on-ground numbers</h2>
      <p className="pp-sidebar-card__hint">From the {latest.year} audit</p>
      <div className="pp-stat-grid">
        {items.map((item) => (
          <div className="pp-stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PlantationPartnerSidebar({ partner }) {
  return (
    <aside className="pp-sidebar" aria-label="Plantation project highlights">
      {partner.map?.embedUrl ? (
        <section className="pp-sidebar-card pp-sidebar-card--map">
          <iframe
            title={`Map of ${partner.drive.location}`}
            src={partner.map.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pp-map-footer">
            <strong>{partner.map.label || partner.drive.location}</strong>
            <div>
              {partner.map.mapsUrl ? (
                <a href={partner.map.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin size={14} /> Google Maps
                </a>
              ) : null}
              {partner.map.earthUrl ? (
                <a href={partner.map.earthUrl} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight size={14} /> Google Earth
                </a>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <SiteAtAGlance partner={partner} />
      <LatestSurvivalCard partner={partner} />

      {partner.impact?.stats?.length ? (
        <section className="pp-sidebar-card">
          <h2><BarChart3 size={18} /> Impact at a glance</h2>
          <div className="pp-stat-grid">
            {partner.impact.stats.map((stat) => (
              <div className="pp-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {partner.plantation?.species?.length ? (
        <section className="pp-sidebar-card">
          <h2><Leaf size={18} /> Species planted</h2>
          <div className="pp-pill-list">
            {partner.plantation.species.map((species) => (
              <span key={species.name || species}>{species.name || species}</span>
            ))}
          </div>
        </section>
      ) : null}

      {partner.impact?.sdgs?.length ? (
        <section className="pp-sidebar-card">
          <h2><Sparkles size={18} /> Aligned SDGs</h2>
          <div className="pp-sdg-list">
            {partner.impact.sdgs.map((sdg) => (
              <span key={sdg.number}><strong>SDG {sdg.number}</strong>{sdg.label}</span>
            ))}
          </div>
        </section>
      ) : null}

      <section className="pp-sidebar-card pp-sidebar-card--reporting">
        <ClipboardCheck size={24} />
        <h2>Shareable project record</h2>
        <p>
          This living page can be linked in CSR reports, shared with employees
          and used in QR communications as progress is documented.
        </p>
        <code>/plantation-partners/{partner.slug}</code>
      </section>
    </aside>
  );
}

export function PlantationPartnerMentions({ mentions }) {
  if (!mentions?.length) return null;

  return (
    <div className="pp-mentions">
      {mentions.map((mention) => (
        <article className="pp-mention" key={`${mention.name}-${mention.role || "mention"}`}>
          <strong>{mention.name}</strong>
          {mention.role ? <span>{mention.role}</span> : null}
          {mention.note ? <p>{mention.note}</p> : null}
          {mention.url ? (
            <a href={mention.url} target="_blank" rel="noopener noreferrer">
              {mention.linkLabel || "Learn more"} <ArrowUpRight size={14} />
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}

/* ----- Site overview, timeline and site-at-a-glance cards ----- */

const METRIC_LABELS = {
  areaCovered: "Area covered",
  totalSpecies: "Native species",
  totalVolunteers: "Volunteers",
  geoTaggedPits: "Geo-tagged pits",
  zonesCreated: "Zones created",
  survivalRate: "Survival rate",
  treesAlive: "Trees alive",
  averageHeight: "Average height",
  heightGain: "Height gain",
  newPits: "New pits",
  carbonSequesteredEstimateKg: "Carbon / yr",
  canopyCover: "Canopy cover",
  biodiversityIndex: "Biodiversity",
  totalTreesPlantedThisYear: "Planted this year",
  totalVolunteersThisYear: "Volunteers",
};

function formatMetricLabel(key) {
  if (METRIC_LABELS[key]) return METRIC_LABELS[key];
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

function TimelineYearCard({ year }) {
  const species = year.species || [];
  const photos = year.photos || [];
  const metrics = year.metrics || {};
  const totalQuantity = species.reduce((sum, s) => sum + (Number(s.quantity) || 0), 0);

  return (
    <article className="pp-timeline__year" aria-label={`${year.year} ${year.phase || "milestone"}`}>
      <header className="pp-timeline__year-head">
        <span className="pp-timeline__year-number">{year.year}</span>
        {year.phase ? <span className="pp-timeline__year-phase">{year.phase}</span> : null}
        {year.status ? (
          <span className="pp-timeline__year-status">
            <CheckCircle2 size={11} /> {year.status}
          </span>
        ) : null}
        {year.date ? <span className="pp-timeline__year-date">{year.date}</span> : null}
      </header>

      <h3>{year.title}</h3>
      <p>{year.summary}</p>

      {species.length ? (
        <>
          <p className="pp-timeline__sub-label">
            <Leaf size={13} /> Species planted this year
            {totalQuantity ? <em> · {totalQuantity.toLocaleString("en-IN")} saplings</em> : null}
          </p>
          <div className="pp-species-grid">
            {species.map((species) => (
              <article className="pp-species-card" key={species.name}>
                <span className="pp-species-card__name">{species.name}</span>
                {species.quantity ? (
                  <span className="pp-species-card__qty">{species.quantity.toLocaleString("en-IN")} saplings</span>
                ) : null}
                {species.role ? <span className="pp-species-card__role">{species.role}</span> : null}
              </article>
            ))}
          </div>
        </>
      ) : null}

      {photos.length ? (
        <>
          <p className="pp-timeline__sub-label">
            <CalendarDays size={13} /> Photographs from {year.year}
          </p>
          <PlantationPartnerGallery gallery={photos} />
        </>
      ) : null}

      {Object.keys(metrics).length ? (
        <>
          <p className="pp-timeline__sub-label">
            <BarChart3 size={13} /> {year.year} audit numbers
          </p>
          <div className="pp-metrics-row">
            {Object.entries(metrics).map(([key, value]) => (
              <div className="pp-metric" key={key}>
                <strong>{String(value)}</strong>
                <span>{formatMetricLabel(key)}</span>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {year.note ? <p className="pp-timeline__year-note">{year.note}</p> : null}
    </article>
  );
}

export function PlantationPartnerTimeline({ timeline }) {
  if (!timeline?.length) return null;

  const sorted = [...timeline].sort((a, b) => (a.year || 0) - (b.year || 0));
  const yearsTracked = sorted.length;
  const latestYear = sorted[sorted.length - 1]?.year;

  return (
    <div className="pp-timeline-wrapper">
      <div className="pp-timeline-summary">
        <span><Sparkles size={14} /> {yearsTracked} year{yearsTracked === 1 ? "" : "s"} of documented growth</span>
        {latestYear ? <span>Last updated · {latestYear}</span> : null}
      </div>
      <div className="pp-timeline">
        {sorted.map((year) => (
          <TimelineYearCard key={`${year.year}-${year.phase || "year"}`} year={year} />
        ))}
      </div>
    </div>
  );
}

export function PlantationPartnerSite({ site }) {
  if (!site) return null;

  return (
    <div className="pp-site-overview">
      <header>
        <span className="pp-eyebrow"><MapPin size={13} /> Plantation site</span>
        <h3>{site.name || "Plantation site"}</h3>
        {site.address ? <p className="pp-site-overview__address">{site.address}</p> : null}
      </header>
      <div className="pp-site-overview__grid">
        <div className="pp-site-overview__metric">
          <strong>{site.areaAcres?.toLocaleString("en-IN") || "—"} <span>acres</span></strong>
          <span>Area under restoration</span>
        </div>
        {site.areaSqM ? (
          <div className="pp-site-overview__metric">
            <strong>{site.areaSqM.toLocaleString("en-IN")} <span>m²</span></strong>
            <span>Approx. footprint</span>
          </div>
        ) : null}
        {site.microclimate ? (
          <div className="pp-site-overview__full">
            <strong>Microclimate</strong>
            <p>{site.microclimate}</p>
          </div>
        ) : null}
        {site.soilHealth ? (
          <div className="pp-site-overview__full">
            <strong>Soil & preparation</strong>
            <p>{site.soilHealth}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export { PlantationPartnerGallery };
