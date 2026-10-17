type BookingType = {
  readonly id: string;
  readonly referenceNumber: string;
  readonly route: string;
  readonly status: "Planned" | "Pending" | "Completed";
};

export type { BookingType };