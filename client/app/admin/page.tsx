"use client";

import { useEffect, useState } from "react";
import { apiUrl } from "@/lib/api";

type Summary = {
    totalUsers: number;
    running: number;
    completed: number;
};

type StatProps = {
    title: string;
    value: number;
    icon: string;
    border: string;
    bg: string;
};

export default function Dashboard() {
    const [summary, setSummary] = useState<Summary>({
        totalUsers: 0,
        running: 0,
        completed: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(apiUrl("/api/customers/summary"), { cache: "no-store" })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch customer summary");
                return res.json();
            })
            .then((data: Summary) => {
                setSummary({
                    totalUsers: Number(data.totalUsers || 0),
                    running: Number(data.running || 0),
                    completed: Number(data.completed || 0),
                });
            })
            .catch(() => {
                setError("Unable to load customer data. Please start the backend server.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Dashboard Overview
            </h1>

            {error && (
                <p className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">
                    {error}
                </p>
            )}

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Stat
                    title="Total Users"
                    value={loading ? 0 : summary.totalUsers}
                    icon="👥"
                    border="border-blue-500"
                    bg="bg-blue-50"
                />

                <Stat
                    title="Running Schemes"
                    value={loading ? 0 : summary.running}
                    icon="📈"
                    border="border-green-500"
                    bg="bg-green-50"
                />

                <Stat
                    title="Completed"
                    value={loading ? 0 : summary.completed}
                    icon="✅"
                    border="border-purple-500"
                    bg="bg-purple-50"
                />
            </div>
        </div>
    );
}

function Stat({ title, value, icon, border, bg }: StatProps) {
    return (
        <div className={`p-5 rounded-2xl border-2 ${border} ${bg} shadow-sm hover:shadow-md transition`}>
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">{title}</p>
                <span className="text-xl">{icon}</span>
            </div>

            <p className="text-2xl font-bold text-gray-800 mt-2">
                {value}
            </p>
        </div>
    );
}
