import Image from "next/image";
import { FaLinkedinIn,FaFilePdf } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f0eb] text-[#0f0f0f] p-8 font-sans">
      <nav className="flex justify-center gap-12 font-bold text-sm uppercase mb-12">
        <a href="#">Bio</a>
        <a href="/portfolio">Portfolio</a>
        {/* <a href="#">Contact</a> */}
      </nav>

      <div className="max-w-5xl mx-auto bg-white p-8 border border-gray-300 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-1">นุชนาฏ สาริศรี</h1>
          <h2 className="text-2xl font-semibold mb-1">(Nutchanad Sarisri)</h2>
          <p className="mb-4">______________________________</p>
          <p className="text-base mb-1 indent-4">
          สวัสดีค่ะ ฉันคือเจ้าหน้าที่จัดซื้อจัดจ้างอาวุโส ผู้มีประสบการณ์จากหลากหลายสายงาน
          พร้อมมุมมองกว้างและทักษะที่หลากหลาย
          </p>
          <p className="text-sm">
          คลิกที่หน้า <strong className="c text-blue-900">"Portfolio"</strong> เพื่อดูข้อมูลเพิ่มเติม หรือ
          </p>
          <p className="text-sm mb-6">
          คลิกที่ <strong className="text-sm text-red-800">"PDF"</strong> เพื่อดาวน์โหลด Resume
          </p>
          
          <div className="flex gap-4 text-2xl">
            <a 
              href="https://www.linkedin.com/in/nutchanad-sarisri-231b89262" 
              aria-label="LinkedIn" 
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="w-full h-full relative">
          <Image
            src="/bio_v2.svg"
            alt="Nutchanad Sarisri Portrait"
            width={600}
            height={600}
            className="object-cover w-full h-auto rounded-lg"
          />
          <a
            href="/resume-nutchanad.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-red-600 text-white p-3 rounded-full text-3xl shadow-lg hover:bg-red-700 transition-transform hover:scale-105"
            aria-label="Download CV PDF"
          >
            <FaFilePdf />
          </a>
        </div>
      </div>
    </main>
  );
}
