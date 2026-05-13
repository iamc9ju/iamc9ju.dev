"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const workflowSlides = [
  {
    id: 1,
    title: "การทำงานของเว็บไซต์",
    description: "ทำความเข้าใจภาพรวมของการพัฒนาเว็บไซต์ตั้งแต่ต้นจนจบ",
    src: "/images/workflow1.png",
    alt: "Website Workflow Infographic 1",
  },
  {
    id: 2,
    title: "การทำงานของเว็บไซต์ (ขั้นตอนเพิ่มเติม)",
    description: "รายละเอียดเชิงลึกเกี่ยวกับขั้นตอนการทำงาน",
    src: "/images/workflow2.png",
    alt: "Website Workflow Infographic 2",
  },
];

export default function Workflow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % workflowSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + workflowSlides.length) % workflowSlides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (workflowSlides.length <= 1) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="workflow" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-brand-orange font-bold text-sm mb-4 tracking-[0.2em] uppercase">
            How it works
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">กระบวนการทำงาน</h2>
          <p className="text-foreground/40 max-w-2xl mx-auto text-lg">
            ขั้นตอนการสร้างสรรค์ผลงานคุณภาพ จากแนวคิดสู่เว็บไซต์ที่ใช้งานได้จริง
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="relative">
          {/* Slide container — uses horizontal translation */}
          <div className="bg-brand-dark-blue/20 border border-card-border rounded-[40px] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {workflowSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="w-full flex-shrink-0 relative aspect-[16/10] md:aspect-[16/8]"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
                    className="object-contain p-6 md:p-12"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons — outside overflow container */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/80 border border-card-border text-white backdrop-blur-xl hover:bg-brand-orange hover:text-background transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/80 border border-card-border text-white backdrop-blur-xl hover:bg-brand-orange hover:text-background transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {workflowSlides.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentSlide
                  ? "bg-brand-orange w-12"
                  : "bg-brand-orange/20 w-3 hover:bg-brand-orange/40"
              }`}
            />
          ))}
        </div>

        {/* Background Glows */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-80 h-80 bg-brand-orange/5 blur-[100px] rounded-full -z-10" />
      </div>
    </section>
  );
}
