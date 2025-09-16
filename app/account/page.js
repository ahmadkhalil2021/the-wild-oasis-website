import Link from "next/link";
import SideNavigation from "../_components/SideNavigation";

export const metadata = {
  title: "Guest area",
};

export default function Page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, Ahmad
      </h2>
      <SideNavigation />
    </div>
  );
}
