import React from "react";
import BlogCard from "./blog-card";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <>
      <div className="pt-4 flex sticky -top-2 z-50 justify-center">
        <div className="max-w-lg overflow-clip relative bg-slate-900 flex items-center gap-4 px-6 w-full mx-auto rounded-full border-slate-100/20 p-2 border-2">
          <Meteors number={20} />
          <Link href="/#home">
            <span className="text-blue-500 font-bold">
              SaasWars
            </span>
          </Link>
          <Link href="/content/products">
            <span className="text-indigo-600 hover:underline">
              Wars
            </span>
          </Link>
          <Link href="/content/blog">
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
      <section className="py-5 bg-white sm:py-8 lg:py-12">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our latest blogs</h2>
            <div className="p-4">
              <Input type="text" className="w-full" placeholder="Search here . . . " />
            </div>
          </div>

          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            <div>
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg" alt="" />
              </a>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
              <p className="mt-6 text-xl font-semibold">
                <a href="#" title="" className="text-black"> How to mange your remote team? </a>
              </p>
              <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
            </div>

            <div>
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg" alt="" />
              </a>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Marketing </span>
              <p className="mt-6 text-xl font-semibold">
                <a href="#" title="" className="text-black"> 6 Product launching emails you want to use on next campaign. </a>
              </p>
              <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
            </div>

            <div>
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg" alt="" />
              </a>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Marketing </span>
              <p className="mt-6 text-xl font-semibold">
                <a href="#" title="" className="text-black"> Learn from the best: 7 email marketing ideas you can use </a>
              </p>
              <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Blog;


