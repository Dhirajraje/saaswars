"use client";
import { Boxes } from "@/components/ui/background-boxes";
import LitupButton from "@/components/ui/lit-up-button";
import { Meteors } from "@/components/ui/meteors";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/data/testimonies"
import { items } from "@/components/ui/bento-sub-components";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundBeams } from "@/components/ui/lines-background";
import Link from "next/link";

export default function Home() {
  const words = [
    {
      text: "Know",
      className: "text-white dark:text-slate-700",
    },
    {
      text: "it",
      className: "text-white dark:text-slate-700",
    },
    {
      text: "all!",
      className: "text-white dark:text-slate-700",
    },
    {
      text: "SaasWars.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <main className="bg-slate-900">
      <div className="h-[30rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-2xl text-white relative z-20")}>
          <TypewriterEffect className={cn("md:text-4xl text-2xl text-white relative z-20")} words={words} />
        </h1>
        <p className="text-center my-4 text-neutral-300 relative z-20">
          Helping you choose whats best for you...
        </p>
        <div className="mt-4">
          <LitupButton>Join US!</LitupButton>
        </div>
      </div>
      <div className="p-4 flex sticky top-0 z-50 justify-center">
        <div className="max-w-lg overflow-clip relative bg-slate-900 flex items-center gap-4 px-6 w-full mx-auto rounded-full border-slate-100/20 p-4 border-2">
          <Meteors number={20} />
          <Link href="#">
            <span className="text-indigo-600 hover:underline">
              About
            </span>
          </Link>
          <Link href="#">
            <span className="text-indigo-600 hover:underline">
              Wars
            </span>
          </Link>
          <Link href="#">
            <span className="text-indigo-600 hover:underline">
              Blogs
            </span>
          </Link>
          <div className="flex-grow"></div>
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Explore</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
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

      <div className=" max-w-4xl mx-auto w-full justify-evenly flex-wrap flex p-2">
        <div className=" h-3/4 md:h-1/2 p-2 w-full md:w-1/2 lg:w-1/3 relative max-w-sm">
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
              Meteors because they're cool
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don't know what to write so I'll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won't ChatGPT the shit out of this.
            </p>

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className=" h-3/4 md:h-1/2 p-2 w-full md:w-1/2 lg:w-1/3 relative max-w-sm">
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
              Meteors because they're cool
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don't know what to write so I'll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won't ChatGPT the shit out of this.
            </p>

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className=" h-3/4 md:h-1/2 p-2 w-full md:w-1/2 lg:w-1/3 relative max-w-sm">
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
              Meteors because they're cool
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don't know what to write so I'll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won't ChatGPT the shit out of this.
            </p>

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
      <div className="py-6 p-3">
        <h2 className="max-w-4xl p-2 text-3xl font-semibold w-full mx-auto text-slate-200">
          We cover these and more...
        </h2>
      </div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] py-6 px-2">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
      <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="h-screen bg-slate-900 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border bg-transparent focus:ring-2 focus:ring-teal-500 p-3 w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
      </div>
      <footer className="text-gray-600 border-t-2 border-slate-200/20 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                <br className="lg:block hidden" />waistcoat green juice
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
