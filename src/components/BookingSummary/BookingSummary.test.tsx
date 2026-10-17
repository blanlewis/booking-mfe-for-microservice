
import { render, screen } from "@testing-library/react";
import BookingSummary from "./BookingSummary";
import type { BookingType} from "../../utils/types";

const bookings: BookingType[] = [
  {
    id: "1",
    referenceNumber: "BK-1001",
    route: "Mangalore → Bengaluru",
    status: "Planned",
  },
  {
    id: "2",
    referenceNumber: "BK-1002",
    route: "Udupi → Mysuru",
    status: "Pending",
  },
  {
    id: "3",
    referenceNumber: "BK-1003",
    route: "Mangalore → Chennai",
    status: "Completed",
  },
  {
    id: "4",
    referenceNumber: "BK-1004",
    route: "Udupi → Bengaluru",
    status: "Planned",
  },
];

describe("BookingSummary", () => {
  it("displays the correct booking counts", () => {
    render(<BookingSummary bookings={bookings} />);

    expect(screen.getByText("Total Bookings")).toBeInTheDocument();
    expect(screen.getByText("Planned")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();

    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getAllByText("1")).toHaveLength(2);
  });

  it("displays zero counts when there are no bookings", () => {
    render(<BookingSummary bookings={[]} />);
    expect(screen.getAllByText("0")).toHaveLength(4);
  });
});