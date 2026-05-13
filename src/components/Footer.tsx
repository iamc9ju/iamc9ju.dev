import Image from "next/image";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon, PaperAirplaneIcon, IdentificationIcon, LinkIcon, ShareIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-transparent pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="contact" className="bg-brand-dark-blue/40 border border-card-border rounded-[32px] md:rounded-[40px] p-6 md:p-12 flex flex-col lg:flex-row items-center gap-8 mb-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center flex-shrink-0">
                <PaperAirplaneIcon className="w-6 h-6 text-background -rotate-45" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">พร้อมเริ่มโปรเจกต์ของคุณหรือยัง?</h2>
            </div>
            <p className="text-foreground/40 text-sm md:text-base">มาคุยกันเลย! ผมพร้อมที่จะช่วยทำให้ไอเดียของคุณเป็นจริง</p>
            <button className="mt-8 bg-brand-orange text-background px-8 py-3 rounded-full font-bold flex items-center gap-3 mx-auto lg:mx-0 hover:scale-105 transition-transform active:scale-95">
              ติดต่อฉัน
              <div className="w-5 h-5 bg-background rounded-full flex items-center justify-center">
                <span className="text-brand-orange text-xs">→</span>
              </div>
            </button>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-4 bg-brand-deep-blue/50 p-4 rounded-2xl border border-card-border">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange flex-shrink-0">
                <EnvelopeIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-foreground/40 uppercase font-bold tracking-wider">อีเมล</div>
                <div className="text-sm font-bold truncate">ittipol.b@ku.th</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-brand-deep-blue/50 p-4 rounded-2xl border border-card-border">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange flex-shrink-0">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-foreground/40 uppercase font-bold tracking-wider">โทรศัพท์</div>
                <div className="text-sm font-bold">+66 62 174 4034</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-brand-deep-blue/50 p-4 rounded-2xl border border-card-border">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange flex-shrink-0">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-foreground/40 uppercase font-bold tracking-wider">ที่อยู่</div>
                <div className="text-sm font-bold">กรุงเทพฯ, ประเทศไทย</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 pt-10 border-t border-card-border">
          <div className="flex items-center gap-3">
            <Image
              src="/images/iamc9ju_logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <div className="font-bold text-lg leading-none">อิทธิพล บทมูล</div>
              <div className="text-xs text-brand-orange font-medium uppercase tracking-widest mt-1">Full-stack Developer</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-foreground/60 font-medium">
            <a href="#top" className="hover:text-brand-orange transition-colors">หน้าแรก</a>
            <a href="#projects" className="hover:text-brand-orange transition-colors">ผลงาน</a>
            <a href="#services" className="hover:text-brand-orange transition-colors">บริการ</a>
            <a href="#workflow" className="hover:text-brand-orange transition-colors">กระบวนการ</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">ติดต่อฉัน</a>
          </div>

          <div className="flex gap-4">
            {[IdentificationIcon, LinkIcon, ShareIcon, GlobeAltIcon].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-foreground/60 hover:bg-brand-orange hover:text-background hover:border-brand-orange transition-all active:scale-95">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center text-foreground/20 text-[10px] uppercase tracking-[0.2em] mt-16">
          © 2026, ittipol botmoon. all rights reserved.
        </div>
      </div>
    </footer>
  );
}
