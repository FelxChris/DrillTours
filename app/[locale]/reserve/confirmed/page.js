import { Suspense } from "react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConfirmationContent from "@/components/ConfirmationContent";

export const metadata = {
  title: "Reservation Received | Drill Tours Ltd",
};

export default function ReservationConfirmed() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["Reserve", "/reserve"], ["Confirmation", null]]} />
      {/* useSearchParams requires a Suspense boundary in the App Router */}
      <Suspense fallback={null}>
        <ConfirmationContent />
      </Suspense>
    </PageShell>
  );
}
