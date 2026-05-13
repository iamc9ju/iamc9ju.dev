"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ArrowRightIcon, 
  ArrowDownTrayIcon,
  PhotoIcon,
  Squares2X2Icon,
  PauseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HandRaisedIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

const galleryImages = [
  { src: "/images/faq.png", alt: "FAQ" },
  { src: "/images/preparation.jpg", alt: "Preparation Guide" },
  { src: "/images/duration.jpg", alt: "Project Duration" },
  { src: "/images/responsive.jpg", alt: "Responsive Design" },
  { src: "/images/uiux.jpg", alt: "UI/UX Design" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isPlaying || isLightboxOpen) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, isLightboxOpen]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="pt-40 pb-20 overflow-hidden">
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
            onClick={() => setIsLightboxOpen(false)}
          />
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <XMarkIcon className="w-7 h-7" />
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] animate-in zoom-in-95 duration-300">
            <Image 
              src={galleryImages[currentSlide].src} 
              alt={galleryImages[currentSlide].alt} 
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-[1.1] text-center lg:text-left">
            <div className="text-brand-orange font-bold tracking-[0.2em] text-xs mb-8">
              FULL-STACK DEVELOPER
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 md:mb-8">
              ถ้าคุณต้องการ<br />
              <span className="text-brand-orange">Software Product</span>
            </h1>
 
            <p className="text-foreground/40 text-base md:text-xl mb-10 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 md:px-0">
              และคุณกำลังมองหาทีมงานที่มีประสบการณ์ เราคือคำตอบที่ใช่สำหรับคุณ<br />
              เรามีประสบการณ์และความชำนาญในการพัฒนาเว็บไซต์ หลากหลายประเภท
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-16">
              <a 
                href="https://fastwork.co/user/iamc9ju?source=web_marketplace_profile-menu_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-brand-orange/90 text-[#0B1220] px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/20"
              >
                ติดต่อบน Fastwork
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/IttipolBotmoon_Resume.pdf';
                  link.download = 'IttipolBotmoon_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border border-brand-orange/30 hover:border-brand-orange hover:bg-brand-orange/5 text-brand-orange px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all cursor-pointer"
              >
                ดาวน์โหลดเรซูเม่
                <ArrowDownTrayIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-8">
              <div>
                <div className="text-xl font-bold mb-2 text-brand-orange">1. StockUp (Start Up)</div>
                <div className="text-sm text-foreground/60 font-medium leading-relaxed">
                  ตำแหน่ง FullStack Developer
                </div>
              </div>
              <div>
                <div className="text-xl font-bold mb-2 text-brand-orange">2. Appworks co ltd</div>
                <div className="text-sm text-foreground/60 font-medium leading-relaxed">
                  Backend Developer Java (Intern)
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[0.9] relative mt-12 lg:mt-0 w-full group">
            {/* Backdrop blur on separate layer for Safari GPU perf */}
            <div 
              className="absolute inset-0 bg-[#0B1220]/60 border border-white/10 rounded-[40px]"
              style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', transform: 'translateZ(0)' }}
            />
            <div className="relative z-10 w-full p-6 md:p-8 flex flex-col items-center">
              {/* Top Bar Controls */}
              <div className="w-full flex justify-between items-center mb-6">
                <div className="bg-white/10 border border-white/10 rounded-full px-4 py-1 flex items-center gap-2 text-[10px] font-medium text-white/80">
                  <PhotoIcon className="w-3.5 h-3.5" />
                  <span>{currentSlide + 1} / {galleryImages.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer">
                    <Squares2X2Icon className="w-3.5 h-3.5" />
                  </div>
                  <div 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`w-7 h-7 rounded-full border border-white/10 flex items-center justify-center transition-colors cursor-pointer ${isPlaying ? "text-blue-400" : "text-white/40"}`}
                  >
                    <PauseIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative w-full aspect-[1.3/1] bg-white rounded-[32px] overflow-hidden flex items-center justify-center shadow-2xl" style={{ transform: 'translateZ(0)' }}>
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setIsLightboxOpen(true)}
                    className={`absolute inset-0 cursor-zoom-in ${
                      index === currentSlide 
                        ? "opacity-100 z-10" 
                        : "opacity-0 z-0"
                    }`}
                    style={{ transition: 'opacity 0.5s ease', willChange: 'opacity', transform: 'translateZ(0)' }}
                  >
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-contain p-8"
                      priority={index === 0}
                    />
                  </div>
                ))}
                
                {/* Side Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0B1220]/80 border border-white/10 flex items-center justify-center text-white hover:bg-[#0B1220] transition-all z-10"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0B1220]/80 border border-white/10 flex items-center justify-center text-white hover:bg-[#0B1220] transition-all z-10"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2 mt-6 mb-6">
                {galleryImages.map((_, i) => (
                  <div 
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === currentSlide ? "w-2 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" : "w-2 bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>

              {/* Bottom Instructions */}
              <div className="w-full flex justify-between items-center px-2">
                <div className="text-blue-400/40 font-bold tracking-[0.3em] text-[10px]">
                  {"<<<"}
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-full px-5 py-2 flex items-center gap-2.5 text-[10px] font-medium text-white/60">
                  <HandRaisedIcon className="w-3.5 h-3.5 -rotate-90 text-white/40" />
                  <span>ปัด<span className="text-blue-400 mx-1">ซ้าย</span>หรือ<span className="text-yellow-400 mx-1">ขวา</span>เพื่อเปลี่ยนรูปภาพ</span>
                </div>

                <div className="text-yellow-400/40 font-bold tracking-[0.3em] text-[10px]">
                  {">>>"}
                </div>
              </div>
            </div>
            
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-500/5 blur-[120px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
