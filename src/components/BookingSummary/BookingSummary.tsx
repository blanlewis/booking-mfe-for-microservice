import type { BookingType } from "../../utils/types";

type BookingSummaryProps = {
  readonly bookings: BookingType[];
};

export default function BookingSummary({
  bookings,
}: BookingSummaryProps) {
  const planned = bookings.filter(
    (booking) => booking.status === "Planned"
  ).length;

  const pending = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const completed = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  const summaries = [
    { label: "Total Bookings", count: bookings.length },
    { label: "Planned", count: planned },
    { label: "Pending", count: pending },
    { label: "Completed", count: completed },
  ];

  return (
    <section aria-label="Booking summary">
      <h2>Booking Summary</h2>

      <div>
        {summaries.map((summary) => (
          <article key={summary.label}>
            <h3>{summary.label}</h3>
            <p>{summary.count}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
