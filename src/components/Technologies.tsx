import Image from "next/image";

const techs = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
];

export default function Technologies() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-brand-orange font-bold text-[13px] tracking-[0.1em] mb-4">เทคโนโลยีที่ถนัด</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">เครื่องมือและเทคโนโลยี</h2>
          <p className="text-foreground/40 text-sm md:text-base font-medium">เทคโนโลยีที่ผมใช้เพื่อสร้างผลงานที่มีคุณภาพ</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {techs.map((tech, index) => (
            <div 
              key={index} 
              className="bg-brand-dark-blue/30 border border-white/5 p-5 rounded-xl flex items-center gap-4 hover:border-brand-orange/30 hover:bg-brand-dark-blue/50 transition-all cursor-default group"
            >
              <div className="relative w-8 h-8 filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all">
                <Image 
                  src={tech.logo} 
                  alt={tech.name} 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

