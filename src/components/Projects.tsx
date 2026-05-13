import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "ListingThai",
    description: "แพลตฟอร์มค้นหาบ้านและอสังหาริมทรัพย์ที่ใช้งานง่าย ครบทุกความต้องการ",
    image: "/images/project-1.png",
    category: "เว็บไซต์",
    tag: "อสังหาริมทรัพย์"
  },
  {
    title: "Kin Bai Kale",
    description: "เว็บไซต์จำหน่ายผักออร์แกนิกเกรดพรีเมียม เพื่อคนรักสุขภาพ",
    image: "/images/project-2.png",
    category: "เว็บไซต์",
    tag: "เกษตรกรรม"
  },
  {
    title: "Powernics Energy",
    description: "เว็บไซต์บริษัทพลังงานสะอาดและโซลาร์เซลล์ ให้ข้อมูลครบถ้วนและน่าเชื่อถือ",
    image: "/images/project-3.png",
    category: "เว็บไซต์",
    tag: "พลังงาน"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="text-brand-orange font-bold text-sm mb-4">ผลงานเด่น</div>
            <h2 className="text-3xl md:text-4xl font-bold">โปรเจกต์ที่ฉันภูมิใจ</h2>
            <p className="text-foreground/40 mt-4 max-w-xl">
              ตัวอย่างผลงานบางส่วนที่ฉันมีส่วนร่วมสร้างสรรค์<br />
              และช่วยให้ลูกค้าประสบความสำเร็จ
            </p>
          </div>
          <button className="border border-card-border hover:bg-brand-dark-blue px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all">
            ดูผลงานทั้งหมด
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-card-border">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-brand-deep-blue/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-brand-orange text-background px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground/40 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <button className="flex items-center gap-2 text-brand-orange text-sm font-bold group-hover:gap-3 transition-all">
                ดูรายละเอียด
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

