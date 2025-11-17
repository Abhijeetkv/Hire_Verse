import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";

const HeroSection = () => {
  return (
    <>
      <Navbar />
   <main className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              {/* TEXT */}
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-5xl font-medium md:text-6xl xl:text-7xl">
                  Ship 10x Faster with NS
                </h1>

                <p className="mt-8 max-w-2xl text-lg text-gray-600">
                  Highly customizable components for building modern websites
                  and applications that look and feel the way you mean it.
                </p>

                {/* BUTTONS */}
                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <a
                    href="#start"
                    className="px-6 py-3 bg-black text-white rounded-lg text-base hover:bg-gray-800 transition"
                  >
                    Start Building
                  </a>

                  <a
                    href="#demo"
                    className="px-6 py-3 border border-gray-400 rounded-lg text-base hover:bg-gray-100 transition"
                  >
                    Request a demo
                  </a>
                </div>
              </div>

              {/* IMAGE */}
              <img
                className=""
                src="https://imgs.search.brave.com/GE7lYQDmPELXyciRXIhqY4MegXATlu-aqRyOh8yrEbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/MzQyLzM0NS9zbWFs/bC9iZW5ldm9sZW50/LWV4ZWN1dGl2ZXMt/YXJlLWludGVydmll/d2luZy1jYW5kaWRh/dGVzLWZyaWVuZGx5/LWludGVydmlld3Mt/Zm9jdXMtb24tY2Fu/ZGlkYXRlLXNraWxs/cy1hbmQtd29yay1l/eHBlcmllbmNlLWNv/bnNpZGVyYXRpb25z/LWZvci1uZXctZW1w/bG95ZWVzLWZyZWUt/cGhvdG8uanBn"
                alt="Abstract Object"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HeroSection;