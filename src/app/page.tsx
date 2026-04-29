import Cards from "@/components/cards";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const skills = [
  { image: "/html.png", alttext: "HTML", label: "HTML" },
  { image: "/css.png", alttext: "CSS", label: "CSS" },
  { image: "/javascript.png", alttext: "JavaScript", label: "JavaScript" },
  { image: "/react.png", alttext: "React", label: "React" },
  { image: "/nextjs.png", alttext: "Next.js", label: "Next.js" },
  { image: "/postgresql.png", alttext: "PostgreSQL", label: "PostgreSQL" },
  { image: "/vite.png", alttext: "Vite", label: "Vite" },
  { image: "/tailwindcss.png", alttext: "Tailwind CSS", label: "Tailwind CSS" },
  { image: "/react-native.png", alttext: "React Native", label: "React Native" },
  { image: "/datocms.png", alttext: "DatoCMS", label: "DatoCMS" },
  { image: "/nodejs.png", alttext: "Node.js", label: "Node.js" },
  { image: "/golang.png", alttext: "Golang", label: "Golang" },
];

const experiences = [
  {
    role: "Software Engineer",
    org: "Freelance",
    period: "2024-present",
    href: "https://kodro.cloud/",
  },
  {
    role: "Project Manager",
    org: "Inkubator IT HMIF ITB",
    period: "2024-2026",
    href: "https://www.inkubatorit.id/",
  },
  {
    role: "Head of IT Division",
    org: "The Sandbox 2.0",
    period: "2024-2025",
    href: "https://sandbox.ieeeitb.com/",
  },
  {
    role: "Head of IT Division",
    org: "PEMIRA KM ITB",
    period: "2024-2025",
    href: "https://pemirakmitb.com/",
  },
  {
    role: "IT Staff",
    org: "IEEE ITB Student Branch",
    period: "2024-2025",
    href: "https://www.ieeeitb.com/",
  },
  {
    role: "IT Staff",
    org: "BPA STEI-K 2023",
    period: "2023",
    href: "https://steik23.netlify.app/",
  },
  {
    role: "Web Development Coordinator",
    org: "EXCELSIOR SMAK PENABUR Harapan Indah",
    period: "2021-2022",
    href: "https://excelsiorahi.com/index.php",
  },
];

const education = [
  {
    school: "Institut Teknologi Bandung",
    detail: "S1 Teknik Informatika",
    period: "2023-present",
    href: "https://www.itb.ac.id/",
  },
  {
    school: "SMAK PENABUR Harapan Indah",
    detail: "Science Major",
    period: "2020-2023",
    href: "https://bpkpenabur.or.id/bekasi/smak-penabur-harapan-indah",
  },
  {
    school: "SMPK PENABUR Harapan Indah",
    detail: "Junior High School",
    period: "2017-2020",
    href: "https://bpkpenabur.or.id/bekasi/smpk-penabur-harapan-indah",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Incheon21",
    icon: "/github.png",
    size: 22,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alvin-christopher-santausa/",
    icon: "/linkedin.png",
    size: 25,
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=alvinchrisantausa@gmail.com",
    icon: "/mail.png",
    size: 19,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ee] text-[#161513]">
      <section
        id="home"
        className="relative isolate flex min-h-screen items-center px-6 pb-20 pt-28 sm:px-10 lg:px-20"
      >
        <div className="grain-layer" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-3xl animate-fade-in-up">
            <p className="mb-5 inline-flex rounded-full border border-[#161513]/10 bg-white/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c50] shadow-sm backdrop-blur">
              Full-stack developer
            </p>
            <h1 className="text-balance text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
              Alvin Christopher Santausa
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4c4943] sm:text-xl">
              I build fast, thoughtful web experiences with a strong interest in
              product engineering, frontend systems, and practical technology
              that people can actually use.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://drive.google.com/file/d/1RFmPbJtR3IdfkNz0ljojCIzmDtckNegl/view?usp=sharing"
                target="_blank"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#161513] px-6 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#315c50] focus:outline-none focus:ring-4 focus:ring-[#315c50]/25"
              >
                Resume/CV
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </Link>
              <a
                href="#Experiences"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#161513]/15 bg-white/70 px-6 text-sm font-bold text-[#161513] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#315c50] hover:text-[#315c50] focus:outline-none focus:ring-4 focus:ring-[#315c50]/20"
              >
                View work
                <CodeBracketIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#161513]/10 bg-white/70 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[#315c50] hover:bg-[#315c50]"
                >
                  <Image
                    src={link.icon}
                    width={link.size}
                    height={link.size}
                    alt=""
                    className="transition group-hover:brightness-0 group-hover:invert"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[520px] justify-center lg:justify-end">
            <div className="hero-orbit" aria-hidden="true" />
            <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/70 bg-[#d7e0d6] shadow-2xl shadow-[#315c50]/20 transition duration-500 hover:-translate-y-2 hover:rotate-1">
              <Image
                src="/alvin2.png"
                alt="Portrait of Alvin Christopher Santausa"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 85vw"
                className="object-contain object-bottom"
              />
            </div>
            <div className="absolute -bottom-6 left-2 max-w-[230px] rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-black/10 backdrop-blur sm:left-10">
              <p className="text-sm font-bold text-[#315c50]">Currently</p>
              <p className="mt-1 text-sm leading-6 text-[#4c4943]">
                Informatics Engineering student at Institut Teknologi Bandung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="About" className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="section-kicker">
            <span>About</span>
            <h2>Engineer in training, builder by habit.</h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-[#4c4943]">
            <p>
              Alvin is an Informatics Engineering student at the Bandung
              Institute of Technology with hands-on experience leading web and
              IT teams in student organizations, committees, and community
              projects.
            </p>
            <p>
              He focuses on website development across frontend and backend
              workflows, with a growing interest in product-minded engineering:
              clear interfaces, reliable systems, and software that feels good
              to ship.
            </p>
          </div>
        </div>
      </section>

      <section id="Experiences" className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <p>Experience / Projects</p>
            <h2>Recent roles and web work</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {experiences.map((item, index) => (
              <a
                key={item.org}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="experience-card group"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b85c38]">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-[#161513]">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#4c4943]">
                    {item.org}
                  </p>
                </div>
                <ArrowTopRightOnSquareIcon className="h-5 w-5 text-[#315c50] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-kicker">
            <span>Education</span>
            <h2>Academic path</h2>
          </div>
          <div className="relative space-y-5 border-l border-[#161513]/15 pl-6">
            {education.map((item) => (
              <a
                key={item.school}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="timeline-item group block"
              >
                <span className="timeline-dot" />
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b85c38]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-black text-[#161513] transition group-hover:text-[#315c50]">
                  {item.school}
                </h3>
                <p className="mt-1 text-[#4c4943]">{item.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="Skills" className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="section-heading">
            <p>Skills</p>
            <h2>Tools I use to build</h2>
          </div>
        </div>
        <div className="mt-10 space-y-5">
          <div className="skill-marquee">
            <div className="animate-infinite-scroll flex gap-5">
              {[...skills, ...skills].map((skill, index) => (
                <Cards key={`${skill.label}-${index}`} {...skill} />
              ))}
            </div>
          </div>
          <div className="skill-marquee">
            <div className="animate-infinite-scroll-reverse flex gap-5">
              {[...skills].reverse().concat([...skills].reverse()).map((skill, index) => (
                <Cards key={`${skill.label}-reverse-${index}`} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="Contact" className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-[#161513]/10 bg-[#161513] p-8 text-white shadow-2xl shadow-black/20 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6c6a8]">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">
              Have a project, collaboration, or web idea?
            </h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="mailto:alvinchrisantausa@gmail.com"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#161513] transition hover:-translate-y-0.5 hover:bg-[#d6c6a8] focus:outline-none focus:ring-4 focus:ring-white/25"
            >
              Email Alvin
              <EnvelopeIcon className="h-4 w-4" />
            </a>
            <a
              href="https://kodro.cloud"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-[#d6c6a8] hover:bg-[#d6c6a8] hover:text-[#161513] focus:outline-none focus:ring-4 focus:ring-white/25"
            >
              Kodro
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
