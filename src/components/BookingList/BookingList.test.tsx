
import { render, screen } from "@testing-library/react";
import BookingList from "./BookingList";

describe("BookingList", () => {
  it("renders the booking references, routes, and statuses", () => {
    render(
      <BookingList
        bookings={[
          {
            id: "1",
            referenceNumber: "BK-1001",
            route: "Mangalore → Bengaluru",
            status: "Planned",
          },
        ]}
      />
    );

    expect(screen.getByText("BK-1001")).toBeInTheDocument();
    expect(
      screen.getByText(/Mangalore.*Bengaluru/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Planned/)).toBeInTheDocument();
  });

  it("shows an empty state when there are no bookings", () => {
    render(<BookingList bookings={[]} />);
    expect(screen.getByText("No bookings found.")).toBeInTheDocument();
  });
});
