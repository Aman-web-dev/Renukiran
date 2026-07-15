import React from "react";
import { ArrowRight } from "lucide-react";

function BuyingCard({ pictureLink, DonationTitle, DonationDetails, DonationLink, DonationAmount, Icon, accent = "blue" }) {
  return (
    <article className={`cause-card cause-card--${accent}`}>
      <div className="cause-card__media">
        <img src={pictureLink} alt={DonationTitle} loading="lazy" />
        {Icon && (
          <span className="cause-card__chip" aria-hidden="true">
            <Icon />
          </span>
        )}
      </div>

      <div className="cause-card__body">
        <h3 className="cause-card__title">{DonationTitle}</h3>
        <p className="cause-card__desc">{DonationDetails}</p>

        <div className="cause-card__footer">
          <a
            href={DonationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cause-card__cta"
          >
            <span>
              {DonationAmount === "Accordingly" ? "Donate In Kind" : `Donate ₹${DonationAmount}`}
            </span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default BuyingCard;