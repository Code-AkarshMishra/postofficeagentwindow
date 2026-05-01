// components/Navbar.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

                {/* LEFT: Logo & Brand */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    <Image
                        src="/india-post.png"
                        alt="India Post Logo"
                        width={50}
                        height={50}
                        style={{ width: "auto", height: "auto" }}
                        priority
                    />
                    <div className="hidden sm:block">
                        <h1 className="font-black text-red-600 text-xl tracking-tight leading-none">India Post</h1>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Govt. of India</p>
                    </div>
                </motion.div>

                {/* CENTER: Authority Identity */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2"
                >
                    <h2 className="text-slate-800 font-extrabold text-lg">Head Post Office, Pratapgarh</h2>
                    <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider mt-1 border border-blue-100">
                        Authorized Agent Portal
                    </span>
                </motion.div>

                {/* RIGHT: Login Actions */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 sm:gap-4"
                >
                    <button
                        onClick={() => router.push("/admin-login")}
                        className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
                    >
                        Admin Login
                    </button>
                    <button
                        onClick={() => router.push("/login")}
                        className="px-6 py-2.5 text-sm font-bold bg-blue-600 text-white rounded-xl shadow-[0_8px_16px_-6px_rgba(37,99,235,0.4)] hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_12px_20px_-8px_rgba(37,99,235,0.6)] active:translate-y-0 transition-all duration-200"
                    >
                        Customer Login
                    </button>
                </motion.div>

            </div>
        </nav>
    );
}