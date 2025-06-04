import Cards from "@/components/cards";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-100 flex-col items-center">
      <div className="w-full h-full">
        <div
          id="home"
          className="w-auto mx-8 sm:mx-20 h-[95%] pt-[100px] flex flex-row gap-12 justify-between items-center"
        >
          <div className="hidden lg:flex w-[100%] items-center justify-center object-cover overflow-hidden animate-fade-in-left rounded-full">
            {/* <Image src="/alvin2.png" width={400} height={400} alt="foto diri" className="z-10"/> */}
            <div className="flex justify-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.08)] h-[480px] w-[480px] object-cover rounded-full overflow-hidden hover:scale-105 transition-all duration-500 ease-out group">
              <Image
                src="/alvin2.png"
                width={400}
                height={400}
                alt="foto diri"
                className="z-10 left-5 object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
          <div className="lg:mx-12 text-black text-left w-[160%] animate-fade-in-right">
            <h1 className="font-bold text-[60px] sm:text-[80px] animate-text-slide-up opacity-0 animation-delay-200">
              Hello, I&apos;m{" "}
              <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Alvin
              </span>
            </h1>
            <h2 className="font-bold sm:-mt-4 text-[32px] sm:text-[50px] animate-text-slide-up opacity-0 animation-delay-400">
              Full Stack Web Developer
            </h2>
            <p className="mt-4 animate-text-slide-up opacity-0 animation-delay-600">
              Currently studying Informatics Engineering major in Bandung
              Institute of Technology. Highly interested in technolgy and
              computer field.
            </p>
            <div className="my-6 flex gap-4 animate-text-slide-up opacity-0 animation-delay-800">
              <a target="_blank" href="https://github.com/Incheon21">
                <button className="flex items-center justify-center bg-purple-400 text-white w-[50px] h-[50px] rounded-[36px] hover:scale-110 hover:bg-purple-300 hover:rotate-12 transition-all duration-300 ease-out hover:shadow-lg transform-gpu">
                  <Image
                    src="/github.png"
                    width={23}
                    height={23}
                    alt="github"
                  />
                </button>
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/alvin-christopher-santausa/"
              >
                <button className="flex items-center justify-center bg-purple-400 text-white w-[50px] h-[50px] rounded-[36px] hover:scale-110 hover:bg-purple-300 hover:rotate-12 transition-all duration-300 ease-out hover:shadow-lg transform-gpu">
                  <Image
                    src="/linkedin.png"
                    width={30}
                    height={30}
                    alt="linkedin"
                  />
                </button>
              </a>
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=alvinchrisantausa@gmail.com"
              >
                <button className="flex items-center justify-center bg-purple-400 text-white w-[50px] h-[50px] rounded-[36px] hover:scale-110 hover:bg-purple-300 hover:rotate-12 transition-all duration-300 ease-out hover:shadow-lg transform-gpu">
                  <Image src="/mail.png" width={20} height={20} alt="mail" />
                </button>
              </a>
            </div>
            <Link href="https://drive.google.com/file/d/1RFmPbJtR3IdfkNz0ljojCIzmDtckNegl/view?usp=sharing" target="_blank">
            <button className="bg-purple-500 hover:bg-purple-600 hover:scale-[1.05] transition-all text-white w-[160px] h-[50px] rounded-[36px]">
              <span className="relative z-10">Resume/CV -&gt;</span>
            </button>
            </Link>
          </div>
        </div>
        <div
          id="About"
          className="flex w-auto mx-8 sm:mx-20 bg-gray-100 overflow-x-hidden mb-24"
        >
          <div className="mt-24 w-full items-center justify-center">
            <div className="flex flex-col xl:flex-row justify-between gap-16 my-6">
              <div className="flex flex-col gap-12 items-center animate-fade-in-up opacity-0 intersection-observer">
                <div>
                  <h1 className="text-black text-left text-[30px] font-semibold underline mb-6  transition-colors duration-300">
                    About
                  </h1>
                  <p className="text-black text-[16px] text-justify text-xl leading-relaxed">
                    Alvin Christopher Santausa, commonly known as Alvin, is a
                    student at the Bandung Institute of Technology (ITB) who was
                    born in Jakarta. Alvin has a strong interest in technology,
                    particularly in website development. For this reason, he
                    chose to pursue his studies in the Informatics Engineering{" "}
                    <a
                      target="_blank"
                      href="https://www.itb.ac.id/program-studi-sarjana-informatika"
                      className="font-semibold text-purple-400 hover:underline hover:text-purple-600 transition-colors duration-300"
                    >
                      Informatics Engineering (Teknik Informatika)
                    </a>{" "}
                    program at ITB to deepen his knowledge and hone his existing
                    skills. Alvin has various experiences in organizations and
                    committees related to website development.
                  </p>
                </div>
                <div id="Experiences" className="w-full text-left">
                  <h1 className="text-black text-left text-[30px] font-semibold underline mb-6 transition-colors duration-300">
                    Experiences/Projects
                  </h1>
                  <div className="text-black text-[16px] text-left text-xl space-y-2">
                    <p className="hover:translate-x-2 transition-transform duration-300 ease-out">
                      1. Project Manager at{" "}
                      <a
                        target="_blank"
                        href="https://www.inkubatorit.com/"
                        className="underline hover:text-purple-400 hover:underline transition-colors duration-300"
                      >
                        Inkubator IT HMIF ITB
                      </a>{" "}
                      (2024-present)
                    </p>
                    <p className="hover:translate-x-2 transition-transform duration-300 ease-out">
                      2. Head of IT division at{" "}
                      <a
                        target="_blank"
                        href="https://sandbox.ieeeitb.com/"
                        className="underline hover:text-purple-400 hover:underline transition-colors duration-300"
                      >
                        The Sandbox 2.0
                      </a>{" "}
                      by IEEE ITB Student Branch (2024-2025)
                    </p>
                    <p className="hover:translate-x-2 transition-transform duration-300 ease-out animation-delay-100">
                      3. Head of IT division at{" "}
                      <a
                        target="_blank"
                        href="https://pemirakmitb.com/"
                        className="underline hover:text-purple-400 hover:underline transition-colors duration-300"
                      >
                        PEMIRA KM ITB 2024-2025
                      </a>
                    </p>
                    <p className="hover:translate-x-2 transition-transform duration-300 ease-out animation-delay-200">
                      4. IT staff at{" "}
                      <a
                        target="_blank"
                        href="https://www.ieeeitb.com/"
                        className="underline hover:text-purple-400 hover:underline transition-colors duration-300"
                      >
                        IEEE ITB Student Branch
                      </a>{" "}
                      (2024-2025)
                    </p>
                    <p className="hover:translate-x-2 transition-transform duration-300 ease-out animation-delay-300">
                      5. IT staff at{" "}
                      <a
                        target="_blank"
                        href="https://steik23.netlify.app/"
                        className="underline hover:text-purple-400 hover:underline transition-colors duration-300"
                      >
                        BPA (Badan Pengurus Angkatan) STEI-K
                      </a>{" "}
                      2023
                    </p>
                    <p className="hover:translate-x-2 transition-transform duration-300 ease-out animation-delay-400">
                      6. IT staff at{" "}
                      <a
                        target="_blank"
                        href="https://sandbox.ieeeitb.com/"
                        className="underline hover:text-purple-400 hover:underline transition-colors duration-300"
                      >
                        The Sandbox
                      </a>{" "}
                      by IEEE ITB Student Branch (2023)
                    </p>
                    <p className="hover:translate-x-2 transition-transform duration-300 ease-out animation-delay-500">
                      7. Web development coordinator at{" "}
                      <a
                        target="_blank"
                        href="https://excelsiorahi.com/index.php"
                        className="underline hover:text-purple-400 hover:underline transition-colors duration-300"
                      >
                        EXCELSIOR
                      </a>{" "}
                      SMAK PENABUR Harapan Indah (2021-2022)
                    </p>
                  </div>
                </div>
              </div>
              {/* Education Timeline */}
              <div className="w-auto xl:w-[240%] flex flex-col xl:items-center justify-center animate-fade-in-up opacity-0 intersection-observer animation-delay-300">
                <h1 className="text-black text-left text-[30px] font-semibold underline mb-6 transition-colors duration-300">
                  Education Timeline
                </h1>
                <div className="relative flex flex-col items-start justify-center w-full mt-12">
                  <div className="absolute left-1/2 h-full border-l-2 border-gray-300 transform -translate-x-1/2 animate-grow-line"></div>

                  <div className="flex items-center mb-8 w-full animate-slide-in-right opacity-0 intersection-observer">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-semibold">
                        <a
                          href="https://www.itb.ac.id/"
                          className="underline text-black hover:text-purple-400 transition-colors duration-300"
                        >
                          Institut Teknologi Bandung
                        </a>
                      </h3>
                      <p className="mt-2 text-gray-600">
                        S1 Teknik Informatika
                      </p>
                      <p className="mt-2 text-gray-600">2023-Present</p>
                    </div>
                    <div className="w-1/2 pl-8 relative">
                      <div className="absolute left-0 top-1/2 w-6 h-6 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform duration-300 animate-pulse-slow"></div>
                    </div>
                  </div>

                  <div className="flex items-center mb-8 w-full animate-slide-in-left opacity-0 intersection-observer animation-delay-200">
                    <div className="w-1/2 pr-8 relative">
                      <div className="absolute right-0 top-1/2 w-6 h-6 bg-purple-400 rounded-full transform translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform duration-300 animate-pulse-slow"></div>
                    </div>
                    <div className="w-1/2 pl-8 text-left">
                      <h3 className="text-xl font-semibold">
                        <a
                          href="https://bpkpenabur.or.id/bekasi/smak-penabur-harapan-indah"
                          className="underline text-black hover:text-purple-400 transition-colors duration-300"
                        >
                          SMAK PENABUR Harapan Indah
                        </a>
                      </h3>
                      <p className="mt-2 text-gray-600">Science Major</p>
                      <p className="mt-2 text-gray-600">2020-2023</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-8 w-full animate-slide-in-right opacity-0 intersection-observer animation-delay-400">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-semibold">
                        <a
                          href="https://bpkpenabur.or.id/bekasi/smpk-penabur-harapan-indah"
                          className="underline text-black hover:text-purple-400 transition-colors duration-300"
                        >
                          SMPK PENABUR Harapan Indah
                        </a>
                      </h3>
                      <p className="mt-2 text-gray-600">2017-2020</p>
                    </div>
                    <div className="w-1/2 pl-8 relative">
                      <div className="absolute left-0 top-1/2 w-6 h-6 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform duration-300 animate-pulse-slow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="Skills"
          className="w-full flex flex-col items-center justify-center h-full mb-24"
        >
          <div className="flex flex-row w-full gap-2 animate-fade-in-up opacity-0 intersection-observer mx-8 sm:mx-20">
            <div className="w-full flex flex-col">
              <div className="w-full h-full border-b-2 border-gray-300 flex flex-col animate-expand-line"></div>
              <div className="w-full h-full flex flex-col"></div>
            </div>
            <h1 className="text-black text-left text-[30px] align-middle font-semibold transition-colors duration-300">
              Skills
            </h1>
            <div className="w-full flex flex-col">
              <div className="w-full h-full border-b-2 border-gray-300 flex flex-col animate-expand-line animation-delay-300"></div>
              <div className="w-full h-full flex flex-col"></div>
            </div>
          </div>

          {/* Auto-scrolling skills container */}
          <div className="w-full overflow-hidden mt-12 py-2">
            <div className="animate-infinite-scroll flex gap-6 whitespace-nowrap">
              {/* First set of skills */}
              <div className="flex gap-6 shrink-0">
                <Cards image="/html.png" alttext="html" label="HTML" />
                <Cards image="/css.png" alttext="css" label="CSS" />
                <Cards
                  image="/javascript.png"
                  alttext="javascript"
                  label="JavaScript"
                />
                <Cards image="/react.png" alttext="react" label="React" />
                <Cards image="/nextjs.png" alttext="nextjs" label="Next.js" />
                <Cards
                  image="/postgresql.png"
                  alttext="postgresql"
                  label="PostgreSQL"
                />
                <Cards image="/vite.png" alttext="vite" label="Vite" />
                <Cards
                  image="/tailwindcss.png"
                  alttext="tailwindcss"
                  label="Tailwind CSS"
                />
                 <Cards
                  image="/react-native.png"
                  alttext="react native"
                  label="React Native"
                />
                <Cards image="/datocms.png" alttext="datocms" label="DatoCMS" />
                <Cards image="/nodejs.png" alttext="nodejs" label="NodeJS" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 shrink-0">
                <Cards image="/html.png" alttext="html" label="HTML" />
                <Cards image="/css.png" alttext="css" label="CSS" />
                <Cards
                  image="/javascript.png"
                  alttext="javascript"
                  label="JavaScript"
                />
                <Cards image="/react.png" alttext="react" label="React" />
                <Cards image="/nextjs.png" alttext="nextjs" label="Next.js" />
                <Cards
                  image="/postgresql.png"
                  alttext="postgresql"
                  label="PostgreSQL"
                />
                <Cards image="/vite.png" alttext="vite" label="Vite" />
                <Cards
                  image="/tailwindcss.png"
                  alttext="tailwindcss"
                  label="Tailwind CSS"
                />
                <Cards
                  image="/react-native.png"
                  alttext="react native"
                  label="React Native"
                />
                <Cards image="/datocms.png" alttext="datocms" label="DatoCMS" />
                <Cards image="/nodejs.png" alttext="nodejs" label="NodeJS" />
              </div>
            </div>
          </div>

          {/* Second row scrolling in reverse direction */}
          <div className="w-full overflow-hidden mt-4 py-2">
            <div className="animate-infinite-scroll-reverse flex gap-6 whitespace-nowrap">
              {/* First set of skills (reverse order) */}
              <div className="flex gap-6 shrink-0">
                <Cards image="/nodejs.png" alttext="nodejs" label="NodeJS" />
                <Cards image="/datocms.png" alttext="datocms" label="DatoCMS" />
                <Cards
                  image="/tailwindcss.png"
                  alttext="tailwindcss"
                  label="Tailwind CSS"
                />
                <Cards image="/vite.png" alttext="vite" label="Vite" />
                <Cards
                  image="/postgresql.png"
                  alttext="postgresql"
                  label="PostgreSQL"
                />
                <Cards image="/nextjs.png" alttext="nextjs" label="Next.js" />
                <Cards image="/react.png" alttext="react" label="React" />
                <Cards
                  image="/javascript.png"
                  alttext="javascript"
                  label="JavaScript"
                />
                 <Cards
                  image="/react-native.png"
                  alttext="react native"
                  label="React Native"
                />
                <Cards image="/css.png" alttext="css" label="CSS" />
                <Cards image="/html.png" alttext="html" label="HTML" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 shrink-0">
                <Cards image="/nodejs.png" alttext="nodejs" label="NodeJS" />
                <Cards image="/datocms.png" alttext="datocms" label="DatoCMS" />
                <Cards
                  image="/tailwindcss.png"
                  alttext="tailwindcss"
                  label="Tailwind CSS"
                />
                <Cards image="/vite.png" alttext="vite" label="Vite" />
                <Cards
                  image="/postgresql.png"
                  alttext="postgresql"
                  label="PostgreSQL"
                />
                <Cards image="/nextjs.png" alttext="nextjs" label="Next.js" />
                <Cards image="/react.png" alttext="react" label="React" />
                <Cards
                  image="/javascript.png"
                  alttext="javascript"
                  label="JavaScript"
                />
                <Cards
                  image="/react-native.png"
                  alttext="react native"
                  label="React Native"
                />
                <Cards image="/css.png" alttext="css" label="CSS" />
                <Cards image="/html.png" alttext="html" label="HTML" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
