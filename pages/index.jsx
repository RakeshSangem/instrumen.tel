import Head from "next/head";
import Script from "next/script";
import React from "react";
import Navbar from "../components/Navbar/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instrumen.tel</title>
        <meta
          name="description"
          content="A project to learn about Instrument."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="w-full min-h-[90vh] bg-backgroundColor"></main>
    </div>
  );
}
