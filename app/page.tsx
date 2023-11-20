"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [textVal, setTextVal] = useState("");
  let router = useRouter();
  return (
    <main className="flex flex-col items-center justify-between mb-5">
      <section>
        <h1 className="mb-8 text-center">Home Page</h1>
        <Link
          className="bg-gray-100 p-5 text-black p-4.5 rounded-2xl"
          href="/test"
        >
          Move to Test (asyncronized) Page
        </Link>
      </section>
      <section className="flex justify-center items-center flex-col gap-6 mt-12 mb-12">
        <label className="w-full text-center" htmlFor="ifPage">
          Enter example dynamic routing page
        </label>
        <input
          name="idPage"
          type="text"
          className="text-black"
          placeholder="Type something"
          value={textVal}
          onChange={({ target }) => setTextVal(target.value)}
        />
        <button
          className="bg-white text-black"
          onClick={(e) => router.push(`/test/${textVal}`)}
          type="button"
        >
          Go to this page
        </button>
      </section>
      <section className="flex flex-col items-center justify-between mb-5">
        <h2 className="">Move to custom Error404 page</h2>
        <Link className="bg-white text-black" href="./something">
          Move!
        </Link>{" "}
      </section>
      <section className="flex flex-col items-center justify-between mb-5">
        <h2>Move to the example of parrarel page</h2>
        <Link className="bg-white text-black" href="./parrarel">
          Go to Parrarel page
        </Link>
      </section>
    </main>
  );
}
