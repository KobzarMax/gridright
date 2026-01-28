"use client";

import Image from "next/image";
import { Swiper as SwiperRoot, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import { swiperSlide } from "@/static";
import { useState } from "react";

const slides = [
  {
    title: "Upload",
    text: "Nutzer laden Vollmachten und Grundstücksdaten in unterstützten Formaten (CSV, Excel, PDF, Shapefile) über eine Drag-and-Drop-Oberfläche hoch.",
  },
  {
    title: "Upload",
    text: "Nutzer laden Vollmachten und Grundstücksdaten in unterstützten Formaten (CSV, Excel, PDF, Shapefile) über eine Drag-and-Drop-Oberfläche hoch.",
  },
  {
    title: "Upload",
    text: "Nutzer laden Vollmachten und Grundstücksdaten in unterstützten Formaten (CSV, Excel, PDF, Shapefile) über eine Drag-and-Drop-Oberfläche hoch.",
  },
  {
    title: "Upload",
    text: "Nutzer laden Vollmachten und Grundstücksdaten in unterstützten Formaten (CSV, Excel, PDF, Shapefile) über eine Drag-and-Drop-Oberfläche hoch.",
  },
];

export default function Swiper() {
  // which slide are we on (1..total)
  const [active, setActive] = useState(1);

  return (
    <section id="unser-ansatz" className="ansatz-section px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 py-5 md:py-10 xl:py-17.5 2xl:py-30">
      <div className="space-y-7.5 max-w-3xl mx-auto mb-7.5 sm:mb-10 md:mb-12.5 xl:mb-15">
        <h2 className="text-white font-medium text-center text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.12]">
          Der GridRight Ansatz
        </h2>
        <p className="text-white/50 font-normal text-center text-sm sm:text-md md:text-base lg:text-lg xl:text-xl">
          Mit KI und Automatisierung
        </p>
      </div>

      <div className="mx-auto max-w-228">
        <div className="relative w-full pt-5 pb-22.5">
          <SwiperRoot
            modules={[EffectCreative, Autoplay, Pagination]}
            effect="creative"
            centeredSlides={true}
            speed={700}
            watchSlidesProgress
            loopAdditionalSlides={2}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index: number, className: string) =>
                `<span class="${className}">${String(index + 1).padStart(2, "0")}</span>`,
            }}
            className="fileDeckSwiper w-full!"
            slidesPerView={1.1}
            spaceBetween={12}
            creativeEffect={{
              limitProgress: 4,
              prev: { translate: ["-10%", 0, -250], scale: 0.92, opacity: 0.4 },
              next: { translate: ["8%", 0, -80], scale: 0.98, opacity: 0.9 },
            }}
            onSlideChange={(swiper: SwiperType) => {
              setActive(swiper.realIndex + 1);
            }}
          >
            {slides.map((s, index) => (
              <SwiperSlide key={index}>
                <div className="relative max-w-228 mx-auto rounded-2xl overflow-hidden">
                  <div className="relative h-105">
                    <div className="relative z-1 flex flex-col justify-between h-full p-7.5 sm:p-10 md:p-12.5 lg:p-15">
                      <h3 className="text-dark text-4xl font-semibold">
                        {s.title}
                      </h3>
                      <p className="text-xl text-dark/50 font-medium">
                        {s.text}
                      </p>
                    </div>
                    <Image
                      src={swiperSlide}
                      alt="swiper slide"
                      className="object-cover opacity-40 in-[.swiper-slide-fully-visible]:opacity-100 absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperRoot>

          {/* Controls */}
          <div className="deckControls">
            <div className="deckProgress">
              <div
                className="deckProgressFill transition-all duration-300"
                style={{ width: `${active * 25}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
