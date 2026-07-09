import React from "react";
import {
  Heart,
  ShoppingBag,
  CreditCard,
  Trees,
  GraduationCap,
  Users,
  Lock,
  Receipt,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import "./donatePage.css";

export const metadata = {
  title: "Donate · Renukiran Welfare Foundation",
  description:
    "Support Renukiran Welfare Foundation's programs in education, environment, and community development. Every contribution makes a difference.",
};

const impactStats = [
  { num: "200,000+", label: "Lives Touched", Icon: Users },
  { num: "100,000+", label: "Trees Planted", Icon: Trees },
  { num: "28", label: "Active Programs", Icon: Heart },
  { num: "12+", label: "States Reached", Icon: GraduationCap },
];

const trustItems = [
  {
    Icon: Lock,
    title: "Secure Payments",
    desc: "All transactions are encrypted via Razorpay with PCI-DSS Level 1 compliance.",
  },
  {
    Icon: Receipt,
    title: "80G Tax Benefit",
    desc: "Every donation above ₹500 qualifies for a 50% tax deduction under Section 80G.",
  },
  {
    Icon: BadgeCheck,
    title: "Verified NGO",
    desc: "Registered under the Societies Registration Act with full FCRA transparency.",
  },
];

function DonatePage() {
  return (
    <main className="donate-page">
      {/* ===================== HERO ===================== */}
      <section className="donate-hero" aria-label="Donate to Renukiran">
        <div className="donate-hero__bg" aria-hidden="true" />
        <div className="donate-hero__content">
          <span className="donate-hero__eyebrow">Every Gift Counts</span>
          <h1 className="donate-hero__title">
            Help us build a <em>greener, kinder</em> tomorrow.
          </h1>
          <p className="donate-hero__sub">
            Your contribution powers Renukiran Welfare Foundation's programs in
            education, environment, and community development — turning small
            kindnesses into lasting change.
          </p>
        </div>
      </section>

      {/* ===================== IMPACT STRIP ===================== */}
      <section className="donate-impact" aria-label="Our impact">
        <div className="donate-impact__inner">
          {impactStats.map(({ num, label, Icon }) => (
            <div className="donate-impact__cell" key={label}>
              <div className="donate-impact__icon" aria-hidden="true">
                <Icon />
              </div>
              <div>
                <p className="donate-impact__num">{num}</p>
                <p className="donate-impact__label">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== MAIN GRID ===================== */}
      <section className="donate-main">
        {/* ----- Donate Online ----- */}
        <article className="donate-card">
          <header className="donate-card__header">
            <span className="donate-card__tag">Donate Online</span>
            <h2 className="donate-card__title">Give financially</h2>
            <p className="donate-card__sub">
              Choose what your donation will fund — meals, books, saplings, or
              our general mission fund.
            </p>
          </header>

          <div className="donate-card__body">
            <div className="money-options">
              <a href="/buyabledonation" className="money-option money-option--green">
                <div className="money-option__icon" aria-hidden="true">
                  <ShoppingBag />
                </div>
                <div className="money-option__body">
                  <h3 className="money-option__title">Donate for a Cause</h3>
                  <p className="money-option__desc">
                    Pick a specific impact — meals, school kits, plant saplings,
                    or sponsor a child.
                  </p>
                </div>
                <ArrowRight className="money-option__arrow" aria-hidden="true" />
              </a>

              <div className="money-divider">OR</div>

              <a
                href="https://rzp.io/l/renukiran"
                target="_blank"
                rel="noopener noreferrer"
                className="money-option"
              >
                <div className="money-option__icon" aria-hidden="true">
                  <CreditCard />
                </div>
                <div className="money-option__body">
                  <h3 className="money-option__title">Donate Directly</h3>
                  <p className="money-option__desc">
                    One-time or monthly support via Razorpay — UPI, cards, and
                    netbanking accepted.
                  </p>
                </div>
                <ArrowRight className="money-option__arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>

        {/* ----- Donate in Kind ----- */}
        <article className="donate-card">
          <header className="donate-card__header">
            <span className="donate-card__tag">Donate in Kind</span>
            <h2 className="donate-card__title">Give useful items</h2>
            <p className="donate-card__sub">
              Books, clothes, school supplies, dry rations — tell us what you
              have and we'll arrange pickup.
            </p>
          </header>

          <div className="donate-card__body">
            <form className="kind-form" noValidate>
              <div className="kind-form__field">
                <label htmlFor="donor-name" className="kind-form__label">
                  Your name
                </label>
                <input
                  id="donor-name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="kind-form__input"
                />
              </div>

              <div className="kind-form__field">
                <label htmlFor="donor-address" className="kind-form__label">
                  Pickup address
                </label>
                <textarea
                  id="donor-address"
                  name="address"
                  rows={3}
                  required
                  placeholder="House number, street, city, PIN code"
                  className="kind-form__textarea"
                />
              </div>

              <div className="kind-form__field">
                <label htmlFor="donor-items" className="kind-form__label">
                  Donation items
                </label>
                <textarea
                  id="donor-items"
                  name="items"
                  rows={3}
                  required
                  placeholder="e.g. 20 story books, 12 school bags, 5 kg dry rations…"
                  className="kind-form__textarea"
                />
              </div>

              <div className="kind-form__row">
                <div className="kind-form__field">
                  <label htmlFor="donor-email" className="kind-form__label">
                    Email
                  </label>
                  <input
                    id="donor-email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@mail.com"
                    className="kind-form__input"
                  />
                </div>
                <div className="kind-form__field">
                  <label htmlFor="donor-phone" className="kind-form__label">
                    Phone
                  </label>
                  <input
                    id="donor-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="98765 43210"
                    className="kind-form__input"
                  />
                </div>
              </div>

              <div className="kind-form__note">
                <p>
                  <strong>Note:</strong> If the donation's weight is below 20 kg,
                  please drop it off at Renukiran's head office between 11 AM
                  and 6 PM.
                </p>
                <p>
                  <strong>Address:</strong> 282, Basement, Sant Nagar, East of
                  Kailash, New Delhi — 110065
                </p>
              </div>

              <button type="submit" className="kind-form__submit">
                Confirm donation
                <ArrowRight aria-hidden="true" />
              </button>
            </form>
          </div>
        </article>
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <section className="donate-trust" aria-label="Trust and transparency">
        <div className="donate-trust__inner">
          {trustItems.map(({ Icon, title, desc }) => (
            <div className="donate-trust__cell" key={title}>
              <div className="donate-trust__icon" aria-hidden="true">
                <Icon />
              </div>
              <div>
                <h3 className="donate-trust__title">{title}</h3>
                <p className="donate-trust__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default DonatePage;