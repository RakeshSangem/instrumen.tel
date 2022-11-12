import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import Navbar from "../components/Navbar/navbar";
import characterImg from "../public/character.svg";
import bgMusicTones from "../public/bgMusicTones.svg";
import playMusic from "../public/playMusic.svg";
import playInstrument from "../public/playInstrument.svg";
{
  /* import circleBg1 from "../public/ellipse-bg.png"; */
}
{
  /* import circleBg2 from "../public/ellipse-bg-2.png"; */
}

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
      <main className="font-raleway w-full min-h-[90vh] bg-backgroundColor">
        <section
          id="hero"
          className="max-w-[90vw] min-h-[90vh] m-auto flex justify-between items-center"
        >
          <article id="hero-text" className="flex flex-col gap-12 z-10">
            <h1 className="text-7xl font-bold text-primaryColor">
              Welcome to the <br /> Fun Side of Music
            </h1>
            <div className="flex items-center gap-12 relative">
              <div
                id="floating-tunes"
                className="absolute -bottom-8 -left-24 -z-10"
              >
                <Image src={bgMusicTones} alt="floating-tunes" />
              </div>
              <Link
                href={"/playlist"}
                className="px-6 h-[44px] rounded-md flex items-center gap-2 bg-gradient-to-l from-gradientPurple to-gradientPink hover:scale-105 duration-300 ease-in-out"
              >
                <Image
                  src={playMusic}
                  alt="Play Instrument Music Icon"
                  className="w-6"
                />
                <p className="text-[#fff] text-lg font-semibold">Listen Now</p>
              </Link>
              <Link
                href={`#`}
                className="px-6 h-[44px] rounded-md flex items-center gap-2 bg-gradient-to-l from-gradientPurple to-gradientPink hover:scale-105 duration-300 ease-in-out"
              >
                <Image
                  src={playInstrument}
                  alt="Listen Music Icon"
                  className="w-5"
                />
                <p className="text-[#fff] text-lg font-semibold">
                  Play Instruments
                </p>
              </Link>
            </div>
          </article>
          <Image
            src={characterImg}
            alt="character image"
            className="w-[400px]"
          />
        </section>
      </main>
    </div>
  );
}
