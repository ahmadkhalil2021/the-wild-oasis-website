import ReservationCard from "@/app/_components/ReservationCard";
import Link from "next/link";

export const metadata = {
  title: "Your Reservations",
};

export default function Page() {
  // CHANGE
  const bookings = [];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
      <Link
        href="/account"
        className="text-lg block mt-6 underline text-accent-500"
      >
        &larr; Back to your account
      </Link>
    </div>
  );
}
