"use client";
import Navbar from "@/components/Navbar";
import { useSession } from "../../../providers/SessionProvider";

export default function Home() {
  const { user } = useSession();
  return (
    <>
      <div>
projects
        </div>
    </>
  );
}
