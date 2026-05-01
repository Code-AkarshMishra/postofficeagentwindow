"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* 🔹 COLUMN 1: BRAND IDENTITY */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/india-post.png"
                            width={45}
                            height={45}
                            alt="India Post logo"
                            className="brightness-125"
                        />
                        <h2 className="font-black text-2xl text-white tracking-tighter">
                            Manoj Mishra
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Dedicated to providing transparent, government-backed investment advisory services.
                        Ensuring every family in Pratapgarh has a secure financial path.
                    </p>
                </div>

                {/* 🔹 COLUMN 2: QUICK NAVIGATION */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
                    <ul className="space-y-4 text-sm font-medium">
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Recurring Deposit (RD)</li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Monthly Income Scheme</li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Public Provident Fund</li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Sukanya Samriddhi</li>
                    </ul>
                </div>

                {/* 🔹 COLUMN 3: CONTACT DETAILS */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg">Visit Our Office</h3>
                    <div className="space-y-4 text-sm">
                        <p className="flex items-start gap-2">
                            <span>📍</span>
                            <span>Head Post Office, Pratapgarh<br />Uttar Pradesh, 230001</span>
                        </p>
                        <p className="flex items-center gap-2 font-bold text-blue-400">
                            <span>📞</span> +91 9451143203
                        </p>
                        <p className="flex items-center gap-2">
                            <span>⏰</span> Mon - Sat: 10:00 AM – 4:00 PM
                        </p>
                    </div>
                </div>

                {/* 🔹 COLUMN 4: TRUST BADGE */}
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
                    <h4 className="text-white font-bold mb-3 text-sm italic">"Dak Sewa, Jan Sewa"</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Authorized Agent under the Ministry of Communications, Government of India.
                        Your investments are 100% secure.
                    </p>
                    <button className="mt-4 w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all">
                        GET DIRECTIONS →
                    </button>
                </div>
            </div>

            {/* 🔻 BOTTOM BAR */}
            <div className="max-w-7xl mx-auto border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                <p>© {new Date().getFullYear()} Manoj Kumar Mishra • Certified Financial Agent</p>
                <div className="flex gap-8">
                    <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
                </div>
            </div>
        </footer>
    );
}