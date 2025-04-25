'use client';
import { useState } from "react";

export default function PortfolioPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [imageIndexes, setImageIndexes] = useState([0, 0, 0, 0]);

    const workImages = [
        ["/kaibarn1.jpg"],
        [
            "/thai2.svg",
            "/thai1.svg", 
            "/thai3.svg", 
            "/thai4.svg", 
            "/thai5.svg", 
            "/thai6.svg", 
            "/thai7.svg", 
            "/thai8.svg", 
            "/thai9.svg", 
            "/thai10.svg",  
        ],
        [
            "/chula1.svg", 
            "/chula2.svg",
            "/chula3.svg",
            "/chula4.svg",
            "/chula5.svg",
            "/chula6.svg",
        ],
        [
            "scb1.svg", 
            "scb2.svg",
            "scb3.svg",
            "scb4.svg",
            "scb5.svg",
        ]
    ];

    const handleNext = (i: any) => {
        setImageIndexes((prev) => {
            const newIndexes = [...prev];
            newIndexes[i] = (newIndexes[i] + 1) % workImages[i].length;
            return newIndexes;
        });
    };

    const handlePrev = (i: any) => {
        setImageIndexes((prev) => {
            const newIndexes = [...prev];
            newIndexes[i] = (newIndexes[i] - 1 + workImages[i].length) % workImages[i].length;
            return newIndexes;
        });
    };
    return (
        <main className="min-h-screen bg-[#f7f0eb] text-[#0f0f0f] p-8 font-sans">
            <nav className="flex justify-center gap-12 font-bold text-sm uppercase mb-12">
                <a href="/">Bio</a>
                <a href="/portfolio">Portfolio</a>
                {/* <a href="#">Contact</a> */}
            </nav>
            <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 md:flex gap-6">
                <div className="md:w-1/2 border p-4 rounded-lg shadow-sm bg-white space-y-6">
                    {/* Personal */}
                    <section>
                        <h2 className="text-lg font-semibold mb-2">
                            ประวัติส่วนตัว | Profile
                        </h2>
                        <div className="text-sm text-gray-700 leading-relaxed">
                            <div className="flex">
                                <span className="w-24 font-medium">ชื่อเต็ม :</span>
                                <span>นุชนาฏ สาริศรี</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium">ชื่อเล่น :</span>
                                <span>ปีใหม่</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium">วันเกิด :</span>
                                <span>31 ธันวาคม 2534</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium">อายุ :</span>
                                <span>33</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium">สัญชาติ :</span>
                                <span>ไทย</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium">เชื้อชาติ :</span>
                                <span>ไทย</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium">ศาสนา :</span>
                                <span>พุทธ</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium">อีเมล์ :</span>
                                <span>nutchanadsarisri34@gmail.com</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium">เบอร์โทร :</span>
                                <span>087-945-4044</span>
                            </div>
                        </div>
                    </section>
                    {/* Skill */}
                    <section>
                        <h2 className="text-lg font-semibold mb-2">ทักษะ | Skill</h2>
                        <ul className="list-none text-gray-700 space-y-2">
                            <li className="flex items-center gap-8">
                                <div className="flex items-center gap-5">
                                    <img src="word.png" alt="Word" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Word | Docs</span>
                                </div>
                                <img
                                    src="90percen.svg"
                                    alt="Skill Level"
                                    className="w-20 h-5"
                                />
                            </li>
                            <li className="flex items-center gap-5">
                                <div className="flex items-center gap-5">
                                    <img src="excel.png" alt="Excel" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Excel | Sheets</span>
                                </div>
                                <img
                                    src="80percen.svg"
                                    alt="Skill Level"
                                    className="w-20 h-5"
                                />
                            </li>
                            <li className="flex items-center gap-8">
                                <div className="flex items-center gap-5">
                                    <img src="powerpoint.png" alt="PowerPoint" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Power Point</span>
                                </div>
                                <img
                                    src="80percen.svg"
                                    alt="Skill Level"
                                    className="w-20 h-5"
                                />
                            </li>

                            <li className="flex items-center gap-21">
                                <div className="flex items-center gap-5">
                                    <img src="sap.png" alt="SAP" className="w-5 h-5" />
                                    <span className="text-sm font-medium">SAP</span>
                                </div>
                                <img
                                    src="80percen.svg"
                                    alt="Skill Level"
                                    className="w-20 h-5"
                                >
                                </img>
                            </li>
                            <li className="flex items-center gap-17.5">
                                <div className="flex items-center gap-5">
                                    <img src="canva.png" alt="Canva" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Canva</span>
                                </div>
                                <img
                                    src="60percen.svg"
                                    alt="Skill Level"
                                    className="w-20 h-5"
                                >
                                </img>
                            </li>
                            <li className="flex items-center gap-13.5">
                                <div className="flex items-center gap-5">
                                    <img src="power-bi.png" alt="Power BI" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Power BI</span>
                                </div>
                                <img
                                    src="50percen.svg"
                                    alt="Skill Level"
                                    className="w-20 h-5"
                                >
                                </img>
                            </li>
                            <li className="flex items-center gap-7.5">
                                <div className="flex items-center gap-5">
                                    <img src="chat-gpt.png" alt="ChatGPT" className="w-5 h-5" />
                                    <span className="text-sm font-medium">ChatGPT (AI)</span>
                                </div>
                                <img
                                    src="50percen.svg"
                                    alt="Skill Level"
                                    className="w-20 h-5"
                                >
                                </img>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="md:w-1/2 border p-4 rounded-lg shadow-sm bg-white mt-10 md:mt-0">
                    <h2 className="text-lg font-semibold mb-4">ประวัติการศึกษา | Education</h2>
                    <div className="space-y-6 border-l-2 border-gray-300 pl-4">
                        <div>
                            <span className="block text-sm text-gray-500">
                                2556 - 2559
                            </span>
                            <p className="font-medium text-gray-800">
                                มหาลัยราชภัฏบ้านสมเด็จเจ้าพระยา
                            </p>
                            <p className="text-gray-600 text-sm">
                                ปริญญาตรี ครุศาสตร์บัณฑิต สาขาจิตวิทยา
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm">ใบแสดงผลการเรียน | Transcript</h3>
                            <p className="mb-1">(<strong className="text-xs text-blue-950">คลิกภาพเพื่อขยาย</strong>)</p>
                            <img
                                src="trans-pmai.jpg"
                                alt="transcript"
                                className="w-80 h-80 object-cover cursor-pointer transition-transform hover:scale-105 rounded shadow"
                                onClick={() => setIsOpen(true)}
                            />
                            {isOpen && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <img
                                        src="/trans-pmai.jpg"
                                        alt="Zoomed transcript"
                                        className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg border">
                <h2 className="text-lg font-bold mb-6 text-center">ประสบการณ์ทำงาน | Working Experience</h2>
                <div className="space-y-10 border-l-2 border-gray-300 pl-4">
                    {[{
                        year: "01/2568 - ปัจจุบัน",
                        position: "หัวหน้าฝ่ายจัดซื้อจัดจ้าง",
                        add: "บริษัท ใกล้บ้าน ใกล้ใจ จํากัด",
                        desc: "จัดทำงบเสื่อม, จัดซื้ออุปกรณ์สำนักงานทั่วไป - ทางการแพทย์, บริหารจัดการคลินิกในเครือ 20 สาขา, จัดการงานเอกสารภายในบริษัท, จัดจ้างผู้รับเหมาซ่อมแซมสิ่งปลูกสร้าง",
                    }, {
                        year: "08/2566 - 07/2567",
                        position: "เจ้าหน้าที่อาวุโสจัดซื้อจัดจ้าง",
                        add: "บริษัท ไทยเบฟเวอเรจ โลจิสติกส์ จำกัด",
                        desc: "งานศูนย์รวมบริการจัดซื้อจัดจ้าง, เปิดPR ในระบบ Coss bay ติดตามการทำรับ PO ในระบบ SAP, ประสานงานการส่งสินค้า, เจรจาทำสัญญางานเช่าต่างๆ, ดูแลสัญญาจ้างเจ้าหน้าพยาบาล-แรงงานต่างๆ, จัดทำ Data ในแต่ละเดือนเพื่อพรีเซนต์, ทำข้อมูลในระบบ PowerBI",
                    }, {
                        year: "12/2562 - 07/2566",
                        position: "เจ้าหน้าที่สำนักงานพัสดุ",
                        add: "จุฬาลงกรณ์มหาวิทยาลัย",
                        desc: "ทำการจัดซื้อจัดจ้างยาและเวชภัณฑ์, จัดซื้ออุปกรณ์สำนักงานวัสดุคงคลัง, เบิกเงินยืมรองจ่ายหมุนเวียน, ทำแผนงบประมาณประจำปี, รวบรวมจัดซื้อจัดจ้างที่เป็นมิตรต่อสิ่งแวดล้อมเสนอต่อกรมควบคุมมลพิษ",
                    }, {
                        year: "08/2560 - 11/2562",
                        position: "เลขานุการผู้ช่วยผู้จัดการใหญ่",
                        add: "สำนักงานใหญ่ธนาคารไทยพาณิชย์ จำกัด (มหาชน)",
                        desc: "ดูแลตารางผู้บริหาร, ประสานงานภายใน และภายนอกองค์กร, จัดตารางการประชุม, จัดหาห้องประชุมรองรับลูกค้า, ทำเรื่องเบิกจ่ายค่าใช้จ่ายงบประมาณผู้บริหารและทีม, คัดกรอง เอกสารเพื่อเสนอผู้บริหาร, จัดวางแผนการอบรมเทรนนิ่ง",
                    }].map((item, index) => (
                        <div key={index}>
                            <span className="block text-sm text-gray-500">{item.year}</span>
                            <p className="text-base font-medium text-gray-800">{item.position}</p>
                            <p className="text-sm text-gray-700">{item.add}</p>
                            <p className="text-gray-600 text-xs mb-2">{item.desc}</p>
                            <div className="relative w-full h-48 flex items-center justify-center">
                                <button
                                    onClick={() => handlePrev(index)}
                                    className="absolute left-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                                >←</button>
                                <img
                                    src={workImages[index][imageIndexes[index]]}
                                    alt=""
                                    className="h-full object-contain rounded-lg"
                                />
                                <button
                                    onClick={() => handleNext(index)}
                                    className="absolute right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                                >→</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
