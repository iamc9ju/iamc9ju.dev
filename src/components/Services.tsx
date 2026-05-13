import { CodeBracketIcon, PaintBrushIcon, ShoppingCartIcon, DevicePhoneMobileIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const services = [
  {
    icon: <CodeBracketIcon className="w-6 h-6 text-brand-orange" />,
    title: "พัฒนาเว็บไซต์",
    description: "เว็บไซต์ที่ทันสมัย เร็ว ปลอดภัย และรองรับทุกอุปกรณ์ ด้วยเทคโนโลยีล่าสุด"
  },
  {
    icon: <PaintBrushIcon className="w-6 h-6 text-brand-orange" />,
    title: "ออกแบบ UI/UX",
    description: "ออกแบบประสบการณ์ใช้งานที่สวยงาม เข้าใจง่าย และตรงใจกลุ่มเป้าหมาย"
  },
  {
    icon: <ShoppingCartIcon className="w-6 h-6 text-brand-orange" />,
    title: "ร้านค้าออนไลน์",
    description: "ระบบร้านค้าออนไลน์ครบวงจร จัดการสินค้า ออเดอร์ และการชำระเงินที่มีประสิทธิภาพ"
  },
  {
    icon: <DevicePhoneMobileIcon className="w-6 h-6 text-brand-orange" />,
    title: "พัฒนาเว็บแอปพลิเคชัน",
    description: "เว็บแอปพลิเคชันที่ตอบโจทย์ การทำงานเฉพาะทาง ช่วยเพิ่มประสิทธิภาพธุรกิจ"
  },
  {
    icon: <LightBulbIcon className="w-6 h-6 text-brand-orange" />,
    title: "ที่ปรึกษาและวางแผน",
    description: "ให้คำปรึกษาด้านเทคโนโลยี ช่วยวางแผนและเลือกโซลูชัน ที่เหมาะสมกับธุรกิจของคุณ"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      {/* Divider Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-brand-orange font-bold text-sm mb-4">สิ่งที่ฉันทำ</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">บริการของฉัน</h2>
          <p className="text-foreground/40 max-w-xl mx-auto">
            ผมให้บริการออกแบบและพัฒนาโซลูชันดิจิทัลที่ตอบโจทย์ธุรกิจของคุณ<br />
            ทั้งสวยงาม ใช้งานง่าย และมีประสิทธิภาพ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-dark-blue/40 border border-card-border p-8 rounded-3xl hover:border-brand-orange/50 transition-all hover:-translate-y-2 group"
            >
              <div className="mb-6 p-3 bg-brand-deep-blue rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-foreground/40 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

