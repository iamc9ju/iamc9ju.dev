"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { 
  HomeIcon, 
  BriefcaseIcon, 
  CommandLineIcon, 
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/solid";

const navItems = [
  { id: "home", label: "หน้าแรก", href: "#top", icon: HomeIcon },
  { id: "projects", label: "ผลงาน", href: "#projects", icon: BriefcaseIcon },
  { id: "services", label: "บริการ", href: "#services", icon: CommandLineIcon },
  { id: "contact", label: "ติดต่อฉัน", href: "#contact", icon: EnvelopeIcon },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const animRef = useRef(0);

  const handleNavClick = useCallback((href: string, id: string) => {
    setActiveItem(id);
    setIsMenuOpen(false);

    // Cancel previous scroll
    if (animRef.current) cancelAnimationFrame(animRef.current);

    // Calculate target
    let targetY = 0;
    if (href !== "#top") {
      const el = document.getElementById(href.replace("#", ""));
      if (el) targetY = el.offsetTop - 100;
    }

    // Smooth scroll
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    if (Math.abs(diff) < 1) return;
    
    const duration = 500;
    let startTime = 0;
    
    function step(ts: number) {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      window.scrollTo(0, startY + diff * ease);
      if (p < 1) animRef.current = requestAnimationFrame(step);
      else animRef.current = 0;
    }
    
    animRef.current = requestAnimationFrame(step);
  }, []);

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 flex justify-center">
        <nav 
          className="w-full max-w-7xl rounded-[24px] px-4 md:px-6 py-2.5 flex items-center justify-between"
          style={{ 
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.97) 0%, rgba(11, 18, 32, 0.98) 100%)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-3 min-w-fit">
            <button 
              type="button"
              onClick={() => handleNavClick("#top", "home")} 
              className="flex items-center gap-3 cursor-pointer"
            >
              {/* Text for mobile, Image for desktop */}
              <div className="sm:hidden font-black text-lg tracking-tighter text-brand-orange">
                iamc9ju.dev
              </div>
              
              <Image
                src="/images/iamc9ju_logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="hidden sm:block rounded-xl shadow-lg shadow-brand-orange/10 w-10 h-10"
              />
              <div className="hidden sm:block leading-tight text-left">
                <div className="font-bold text-base tracking-tight text-foreground">
                  อิทธิพล บทมูล
                </div>
                <div className="text-[10px] text-brand-orange font-medium uppercase tracking-wider">
                  FULL-STACK DEVELOPER
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-2xl border border-white/5">
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              const Icon = item.icon;
              
              return (
                <button 
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`
                    px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer
                    ${isActive 
                      ? "bg-brand-orange text-background font-bold shadow-lg shadow-brand-orange/20 scale-105" 
                      : "text-foreground/60 font-medium hover:text-brand-orange hover:bg-brand-orange/10"
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "opacity-100" : "opacity-60"}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile Menu Toggle */}
            <button 
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground/60 hover:text-brand-orange"
            >
              {isMenuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
            </button>

            {/* Contact Button - Hidden on mobile, shown in menu */}
            <button 
              type="button"
              onClick={() => handleNavClick("#contact", "contact")}
              className="hidden md:flex bg-brand-orange hover:bg-brand-orange/90 text-background px-5 py-2.5 rounded-xl text-sm font-bold items-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/20 cursor-pointer"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4 text-background/80" />
              ติดต่อเรา
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[40] bg-background/95 backdrop-blur-xl md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              const Icon = item.icon;
              
              return (
                <button 
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`
                    w-full max-w-xs py-4 rounded-2xl flex items-center justify-center gap-4 text-xl font-bold transition-all
                    ${isActive 
                      ? "bg-brand-orange text-background shadow-xl shadow-brand-orange/20" 
                      : "text-foreground/60 border border-white/5 bg-white/5"
                    }
                  `}
                >
                  <Icon className="w-7 h-7" />
                  {item.label}
                </button>
              );
            })}
            
            <button 
              type="button"
              onClick={() => handleNavClick("#contact", "contact")}
              className="w-full max-w-xs py-4 rounded-2xl bg-brand-orange text-background font-bold text-xl flex items-center justify-center gap-4 shadow-xl shadow-brand-orange/20 mt-4"
            >
              <ChatBubbleLeftRightIcon className="w-7 h-7" />
              ติดต่อเรา
            </button>
          </div>
        </div>
      )}
    </>
  );
}
