"use client";
import { Boxes } from "@/components/ui/background-boxes";
import LitupButton from "@/components/ui/lit-up-button";
import { Meteors } from "@/components/ui/meteors";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  const words = [
    {
      text: "Know",
      className: "text-white dark:text-slate-700",
    },
    {
      text: "it!",
      className: "text-white dark:text-slate-700",
    },
    {
      text: "SaasWars.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-2xl text-white relative z-20")}>
          <TypewriterEffect className={cn("md:text-4xl text-2xl text-white relative z-20")} words={words} />
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          So that you can choose what's best for you.
        </p>
        <div className="mt-4">
          <LitupButton>Join US!</LitupButton>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center bg-slate-900  overflow-hidden">
        <MaskContainer
          revealText={
            <p className=" max-w-screen-lg mx-auto text-slate-100 text-center  text-4xl font-bold">
              We will be your torch on your journey of research
            </p>
          }
          className="h-96 w-full"
        >
          Explore over <span className="text-blue-500">4,000</span> products, SAAS platforms and tools
          that fits your need. Choose the best which fits your need. Delivering best value <span className="text-blue-500">for you!</span>.
        </MaskContainer>
      </div>

      <div className=" bg-slate-900 w-full justify-evenly gap-2 flex p-4">
        <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Meteors because they&apos;re cool
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Meteors because they&apos;re cool
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Meteors because they&apos;re cool
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </>
  );
}
