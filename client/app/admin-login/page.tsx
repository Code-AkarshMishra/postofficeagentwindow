"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/lib/api";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const login = async () => {
        try {
            const res = await fetch(apiUrl("/api/admin/login"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Login failed");
                return;
            }

            localStorage.setItem("adminToken", data.token);

            router.push("/admin");

        } catch (err) {
            console.log(err);
            alert("Server error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-80">

                <h2 className="text-2xl font-bold text-white text-center mb-6">
                    Admin Login
                </h2>

                <input
                    className="w-full p-3 mb-3 rounded bg-white/20 text-white placeholder-white"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    className="w-full p-3 mb-4 rounded bg-white/20 text-white placeholder-white"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={login}
                    className="w-full py-3 bg-white text-purple-700 font-semibold rounded hover:scale-105 transition"
                >
                    Login
                </button>

            </div>
        </div>
    );
}
