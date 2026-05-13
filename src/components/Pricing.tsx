import { ArrowRightIcon } from "@heroicons/react/24/outline";

const plans = [
  {
    title: "เว็บไซต์พื้นฐาน",
    price: "15,000",
    description: "เหมาะสำหรับเว็บโปรไฟล์องค์กร หรือธุรกิจขนาดเล็ก",
    features: ["ดีไซน์มาตรฐาน", "รองรับมือถือ", "SEO เบื้องต้น"]
  },
  {
    title: "เว็บไซต์ธุรกิจ",
    price: "30,000",
    description: "เพิ่มฟีเจอร์เพื่อเพิ่มความน่าเชื่อถือ ให้ธุรกิจของคุณ",
    features: ["ดีไซน์พรีเมียม", "ระบบจัดการเนื้อหา", "ความปลอดภัยขั้นสูง"]
  },
  {
    title: "เว็บแอปพลิเคชัน",
    price: "50,000",
    description: "ระบบเฉพาะทาง ช่วยเพิ่มประสิทธิภาพ การทำงานของธุรกิจ",
    features: ["ระบบสมาชิก", "ฐานข้อมูลขั้นสูง", "แดชบอร์ดจัดการ"]
  }
];

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-brand-orange font-bold text-sm mb-4">บริการของฉัน</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">แพ็กเกจบริการ</h2>
          <p className="text-foreground/40">เลือกแพ็กเกจที่เหมาะสมกับความต้องการของคุณ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-brand-dark-blue/40 border border-card-border p-8 rounded-3xl flex flex-col hover:border-brand-orange/50 transition-all group">
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <p className="text-sm text-foreground/40 mb-8 flex-grow">{plan.description}</p>
              <div className="mb-8">
                <div className="text-xs text-foreground/40 mb-1">เริ่มต้นที่</div>
                <div className="text-3xl font-bold flex items-baseline gap-2">
                  {plan.price} <span className="text-sm font-normal text-foreground/40">บาท</span>
                </div>
              </div>
              <button className="flex items-center justify-between text-brand-orange font-bold text-sm group-hover:gap-2 transition-all">
                ดูรายละเอียด
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
          
          <div className="bg-brand-orange p-8 rounded-3xl flex flex-col justify-center items-center text-center text-background">
            <h3 className="text-xl font-bold mb-4">ออกแบบเฉพาะทาง</h3>
            <p className="text-background/80 text-sm mb-8">
              โซลูชันที่ออกแบบตามความต้องการ ของคุณโดยเฉพาะ
            </p>
            <div className="text-3xl font-bold mb-8">สอบถามราคา</div>
            <button className="bg-background text-brand-orange px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
              ดูรายละเอียด
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

