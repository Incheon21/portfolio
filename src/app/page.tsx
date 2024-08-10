import Cards from "@/components/cards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-100 flex-col items-center">
      <div className="w-full h-full">  
        <div id="home" className="w-auto mx-8 sm:mx-20 h-[95%] pt-[100px] flex flex-row gap-12 justify-between items-center">
          <div className="hidden lg:flex w-[100%] items-center justify-center object-cover overflow-hidden">
            {/* <Image src="/alvin2.png" width={400} height={400} alt="foto diri" className="z-10"/> */}
            <div className="flex justify-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.08)] h-[480px] w-[480px] object-cover rounded-full overflow-hidden">
              <Image src="/alvin2.png" width={400} height={400} alt="foto diri" className="z-10 left-5 object-contain"/>
            </div>
          </div>
          <div className="lg:mx-12 text-left w-[160%]">
            <h1 className="font-bold text-[60px] sm:text-[80px]">Hello, I&apos;m <a className="text-purple-400">Alvin</a></h1>
            <h2 className="font-bold sm:-mt-4 text-[40px] sm:text-[60px]">Frontend Web Developer</h2>
            <p className="mt-4">
              Currently studying Informatics Engineering major in Bandung Institute of Technology. Highly interested in technolgy and computer field.
            </p>
            <div className="my-6 flex gap-4">
              <a target="_blank" href="https://github.com/Incheon21">
              <button className="flex items-center justify-center bg-purple-400 text-white w-[50px] h-[50px] rounded-[36px] hover:scale-[1.05] hover:bg-purple-300 transition-all duration-100">
                <Image src="/github.png" width={23} height={23} alt="github"/>
              </button>
              </a>
              <a target="_blank" href="https://linkedin.com/in/alvin-christopher-santausa/">
              <button className="flex items-center justify-center bg-purple-400 text-white w-[50px] h-[50px] rounded-[36px] hover:scale-[1.05] hover:bg-purple-300 transition-all duration-100">
                <Image src="/linkedin.png" width={30} height={30} alt="linkedin"/>
              </button>
              </a>
              <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=alvinchrisantausa@gmail.com">
              <button className="flex items-center justify-center bg-purple-400 text-white w-[50px] h-[50px] rounded-[36px] hover:scale-[1.05] hover:bg-purple-300 transition-all duration-100">
                <Image src="/mail.png" width={20} height={20} alt="mail"/>
              </button>
              </a>
            </div>
            <button className="bg-purple-500 text-white w-[160px] h-[50px] rounded-[36px] hover:scale-[1.05] hover:bg-purple-400 transition-all duration-100">
                Resume/CV -&gt;
            </button>
          </div>
        </div>
        <div id="About" className="flex w-auto mx-8 sm:mx-20 bg-gray-100 overflow-x-hidden mb-24">
            <div className="mt-24 w-full items-center justify-center">
                <div className="flex flex-col xl:flex-row justify-between gap-16 my-6">
                  <div className="flex flex-col gap-12 items-center">
                    <div>
                      <h1 className="text-black text-left text-[30px] font-semibold underline mb-6">About</h1>
                      <p className="text-black text-[16px] text-justify text-xl">
                        <a className="pl-12 font-bold text-purple-400 ">Alvin</a> Christopher Santausa atau biasa dipanggil Alvin adalah seorang mahasiswa Institut Teknologi Bandung
                          yang lahir di Jakarta. Alvin memiliki ketertarikan yang besar di bidang teknologi, khususnya pengembangan website. Oleh karena itu, Alvin memilih melanjutkan studi di jurusan <a target="_blank" href="https://www.itb.ac.id/program-studi-sarjana-informatika" className="font-semibold text-purple-400 hover:underline">Teknik Informatika ITB</a> untuk 
                          menambah pengetahuan serta mengasah skill yang telah dimiliki. Alvin memiliki berbagai pengalaman organisasi dan kepanitiaan yang behubungan dengan pengembangan website.
                      </p>
                    </div>
                    <div id="Experiences" className="w-full text-left">
                      <h1 className="text-black text-left text-[30px] font-semibold underline mb-6">Experiences/Projects</h1>
                      <p className="text-black text-[16px] text-left text-xl">
                        1. Staff IT <a target="_blank" href="https://www.ieeeitb.com/" className="underline hover:text-purple-400 hover:underline">IEEE ITB Student Branch</a> (2024-2025) <br/>
                        2. Best Staff IT <a target="_blank" href="https://steik23.netlify.app/" className="underline hover:text-purple-400 hover:underline">BPA (Badan Pengurus Angkatan) STEI-K</a> 2023 <br/>
                        3. Staff IT <a target="_blank" href="https://sandbox.ieeeitb.com/" className="underline hover:text-purple-400 hover:underline">The Sandbox</a> by IEEE ITB Student Branch (2023) <br/>
                        4. Koordinator Divisi Web Development <a target="_blank" href="https://excelsiorahi.com/index.php" className="underline hover:text-purple-400 hover:underline">EXCELSIOR</a> SMAK PENABUR Harapan Indah (2021-2022) <br/>
                      </p>
                    </div>
                  </div>
                  {/* Education Timeline */}
                  <div className="w-auto xl:w-[240%] flex flex-col xl:items-center justify-center">
                    <h1 className="text-black text-left text-[30px] font-semibold underline mb-6">Education Timeline</h1>
                    <div className="relative flex flex-col items-start justify-center w-full mt-12">
                      <div className="absolute left-1/2 h-full border-l-2 border-gray-300 transform -translate-x-1/2"></div>
                      
                      <div className="flex items-center mb-8 w-full">
                        <div className="w-1/2 pr-8 text-right">
                          <h3 className="text-xl font-semibold"><a href="https://www.itb.ac.id/" className="underline hover:text-purple-400">Institut Teknologi Bandung</a></h3>
                          <p className="mt-2 text-gray-600">S1 Teknik Informatika</p>
                          <p className="mt-2 text-gray-600">2023-Present</p>
                        </div>
                        <div className="w-1/2 pl-8 relative">
                          <div className="absolute left-0 top-1/2 w-6 h-6 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>

                      <div className="flex items-center mb-8 w-full">
                        <div className="w-1/2 pr-8 relative">
                          <div className="absolute right-0 top-1/2 w-6 h-6 bg-purple-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="w-1/2 pl-8 text-left">
                          <h3 className="text-xl font-semibold"><a href="https://bpkpenabur.or.id/bekasi/smak-penabur-harapan-indah" className="underline hover:text-purple-400">SMAK PENABUR Harapan Indah</a></h3>
                          <p className="mt-2 text-gray-600">Science Major</p>
                          <p className="mt-2 text-gray-600">2020-2023</p>
                        </div>
                      </div>

                      <div className="flex items-center mb-8 w-full">
                        <div className="w-1/2 pr-8 text-right">
                          <h3 className="text-xl font-semibold"><a href="https://bpkpenabur.or.id/bekasi/smpk-penabur-harapan-indah" className="underline hover:text-purple-400">SMPK PENABUR Harapan Indah</a></h3>
                          <p className="mt-2 text-gray-600">2017-2020</p>
                        </div>
                        <div className="w-1/2 pl-8 relative">
                          <div className="absolute left-0 top-1/2 w-6 h-6 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
        <div id="Skills" className="w-auto mx-8 sm:mx-20 flex flex-col items-center justify-center">
          <div className="flex flex-row w-full gap-2">
            <div className="w-full flex flex-col">
              <div className="w-full h-full border-b-2 border-gray-300  flex flex-col"></div>
              <div className="w-full h-full flex flex-col"></div>
            </div>
            <h1 className="text-black text-left text-[30px] align-middle font-semibold">Skills</h1>
            <div className="w-full flex flex-col">
              <div className="w-full h-full border-b-2 border-gray-300  flex flex-col"></div>
              <div className="w-full h-full flex flex-col"></div>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 mt-12 mb-24 lg:flex-row items-center justify-between lg:flex h-auto gap-6">
            <Cards image="/html.png" alttext="html" label="HTML"/>
            <Cards image="/css.png" alttext="css" label="CSS"/>
            <Cards image="/javascript.png" alttext="javascript" label="Javascript"/>
            <Cards image="/react.png" alttext="react" label="React"/>
          </div>
        </div>
      </div>
    </main>
  );
}
