// The /rwf-corporates/impact-partners URL now lives at /impact-partners.
// This page keeps the legacy URL working (and previously indexed) by
// redirecting to the canonical location.

import { redirect } from "next/navigation";

export const dynamic = "force-static";

export default function LegacyImpactPartnersPage() {
  redirect("/impact-partners");
}
