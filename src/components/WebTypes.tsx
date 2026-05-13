"use client";

import { 
  ShoppingBagIcon, 
  BuildingOffice2Icon, 
  HomeModernIcon, 
  CalendarDaysIcon, 
  UserGroupIcon, 
  CpuChipIcon, 
  SparklesIcon 
} from "@heroicons/react/24/outline";

const types = [
  {
    title: "ขายของออนไลน์",
    description: "ระบบร้านค้าออนไลน์ที่สมบูรณ์แบบ รองรับการชำระเงินและจัดการสต็อกสินค้าอย่างมืออาชีพ",
    icon: ShoppingBagIcon,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "บริษัท / องค์กร",
    description: "เว็บไซต์แสดงตัวตนของธุรกิจที่ดูพรีเมียม เพิ่มความน่าเชื่อถือและภาพลักษณ์ที่ดีให้กับองค์กร",
    icon: BuildingOffice2Icon,
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    title: "อสังหาริมทรัพย์",
    description: "ระบบจัดการรายการทรัพย์ที่ใช้งานง่าย พร้อมฟีเจอร์การค้นหาและตัวกรองขั้นสูงเพื่อลูกค้า",
    icon: HomeModernIcon,
    color: "bg-orange-500/10 text-orange-400",
  },
  {
    title: "จองคิว / นัดหมาย",
    description: "ระบบนัดหมายออนไลน์ที่แม่นยำ ช่วยลดความยุ่งยากในการจัดการคิวและเวลาของลูกค้า",
    icon: CalendarDaysIcon,
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    title: "บริการ / พอร์ตโฟลิโอ",
    description: "แพลตฟอร์มนำเสนอบริการส่วนบุคคลหรือวิชาชีพ พร้อมช่องทางติดต่อที่สะดวกและรวดเร็ว",
    icon: UserGroupIcon,
    color: "bg-pink-500/10 text-pink-400",
  },
  {
    title: "เว็บแอปพลิเคชัน",
    description: "ระบบงานเฉพาะทางที่พัฒนาขึ้นเพื่อตอบโจทย์ทางธุรกิจที่ซับซ้อนและช่วยเพิ่มประสิทธิภาพ",
    icon: CpuChipIcon,
    color: "bg-cyan-500/10 text-cyan-400",
  },
  {
    title: "ไอเดียอื่น ๆ",
    description: "หากคุณมีไอเดียที่แตกต่างหรือโปรเจกต์พิเศษ เราพร้อมร่วมออกแบบและพัฒนาให้เป็นจริง",
    icon: SparklesIcon,
    color: "bg-yellow-500/10 text-yellow-400",
  },
];

export default function WebTypes() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-brand-orange font-bold text-xs tracking-[0.2em] uppercase mb-4">Choose Your Solution</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">คุณต้องการเว็บแบบไหน?</h3>
          <p className="text-foreground/40 max-w-2xl mx-auto text-base md:text-lg px-4 md:px-0">
            ไม่ว่าเป้าหมายของคุณคืออะไร เรามีโซลูชันที่ออกแบบมาเพื่อตอบโจทย์ธุรกิจของคุณโดยเฉพาะ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {types.map((type, index) => {
            const Icon = type.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-brand-deep-blue/40 border border-card-border p-6 md:p-8 rounded-[24px] md:rounded-[32px] transition-all duration-500 hover:border-brand-orange/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${type.color} flex items-center justify-center mb-5 md:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">{type.title}</h4>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {type.description}
                </p>
                <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                  <span className="text-brand-orange text-xs font-bold flex items-center gap-2">
                    เริ่มโปรเจกต์เลย →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
