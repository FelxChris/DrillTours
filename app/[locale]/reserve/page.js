import { Suspense } from "react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reservation from "@/components/Reservation";

export const metadata = {
  title: "Reserve | Drill Tours Ltd",
  description:
    "Make a reservation with Drill Tours Ltd — tell us where, we'll handle how. Confirmation within one business day.",
};

export default function ReservePage() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["Reserve", null]]} />
      <Suspense fallback={null}>
        <Reservation />
      </Suspense>
    </PageShell>
  );
}
