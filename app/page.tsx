import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mb-5">
      <h1 className="mb-20">Home Page</h1>
      <Link className="bg-gray-100 p-5 text-black p-4.5 rounded-2xl" href="/test">
        Move to Test Page
      </Link>
    </main>
  );
}
