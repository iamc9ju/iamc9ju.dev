"use client";

import Image from "next/image";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ contain: 'strict' }}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0E1A2E] to-[#0B1220]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 3D Cat Mascot - Wandering Path 1 */}
      <div 
        className="absolute top-[15%] right-[10%] w-[250px] h-[250px] opacity-[0.15] animate-wander-1 select-none pointer-events-none hidden lg:block"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <Image 
          src="/images/dev_mascot.png" 
          alt="Dev Cat Mascot" 
          width={250} 
          height={250}
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* 3D Dog Mascot - Wandering Path 2 */}
      <div 
        className="absolute bottom-[20%] left-[5%] w-[280px] h-[280px] opacity-[0.12] animate-wander-2 select-none pointer-events-none hidden md:block"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <Image 
          src="/images/dog_mascot.png" 
          alt="Dog Mascot" 
          width={280} 
          height={280}
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* 3D Mouse Mascot - Wandering Path 3 */}
      <div 
        className="absolute top-[40%] left-[10%] w-[180px] h-[180px] opacity-[0.1] animate-wander-3 select-none pointer-events-none hidden xl:block"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <Image 
          src="/images/mouse_mascot.png" 
          alt="Mouse Mascot" 
          width={180} 
          height={180}
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Floating gradient orbs — reduced blur for Safari GPU performance */}
      <div 
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-brand-orange/[0.03] blur-[80px] animate-float-slow" 
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      />
      <div 
        className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-500/[0.04] blur-[100px] animate-float-medium" 
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      />
      <div 
        className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-purple-500/[0.03] blur-[80px] animate-float-fast" 
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      />

      {/* Top radial gradient spotlight — reduced blur */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-radial from-brand-orange/[0.04] to-transparent rounded-full blur-[40px]" 
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
