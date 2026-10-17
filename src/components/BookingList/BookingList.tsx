
import type { BookingType } from "../../utils/types";

type BookingListProps = {
  readonly bookings: BookingType[];
};

export default function BookingList({
  bookings,
}: BookingListProps) {
  if (bookings.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <section aria-label="Booking list">
      <h2>Bookings</h2>

      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <strong>{booking.referenceNumber}</strong>
            <span> — {booking.route}</span>
            <span> — {booking.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
