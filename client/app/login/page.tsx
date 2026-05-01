"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/lib/api";

export default function Login() {
    const router = useRouter();

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await fetch(apiUrl("/api/login"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({ phone, password }),
            });

            const data = await res.json();

            if (data.success) {
                localStorage.setItem("token", data.token);
                // localStorage.setItem("user", JSON.stringify(data.user));
                const u = data.user;

                localStorage.setItem("user", JSON.stringify({
                    name: u.name,
                    phone: u.accountNo,
                    paidMonths: u.monthPaid,
                    monthlyAmount: u.amount,
                    dueDate: u.dueDate,
                    totalAmount: u.totalAmount || (u.monthPaid * u.amount),
                    status: u.status || "Running",
                    durationMonths: 60
                }));
                router.push("/dashboard");
            } else {
                alert("Invalid details");
            }
        } catch {
            alert("Server error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-200 px-4">

            {/* 🔥 Animated background glow */}
            <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse" />
            <div className="absolute w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/80 backdrop-blur-lg w-full max-w-md p-6 rounded-2xl shadow-xl border"
            >
                {/* 🔥 Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Customer Login
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Access your savings account securely
                    </p>
                </div>

                {/* 📱 Input */}
                <div className="space-y-4">

                    <div>
                        <label className="text-sm text-gray-600">
                            Account Number
                        </label>
                        <input
                            type="text"
                            placeholder="Enter account number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Password (Last 4 digits)
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                    </div>

                </div>

                {/* 🔥 Button */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={handleLogin}
                    className="w-full mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
                >
                    Login
                </motion.button>

                {/* 🔒 Trust */}
                <p className="text-xs text-gray-500 text-center mt-4">
                    Secure • Trusted • Managed by Authorized India Post Agent
                </p>

                {/* 📞 Help */}
                <div className="mt-5 text-center">
                    <p className="text-sm text-gray-600">Need help?</p>

                    <div className="flex justify-center gap-4 mt-2">
                        <a href="tel:09451143203" className="text-blue-600 text-sm">
                            Call
                        </a>
                        <a href="https://wa.me/919451143203" className="text-green-600 text-sm">
                            WhatsApp
                        </a>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
