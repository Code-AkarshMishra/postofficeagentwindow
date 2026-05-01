"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CircularProgress from "@/components/CircularProgress";
import { apiUrl } from "@/lib/api";

type Customer = {
    name: string;
    phone: string;
    status: string;
    monthlyAmount: number;
    paidMonths: number;
    durationMonths: number;
    totalAmount: number;
    maturityDate: string;
};

type CardProps = {
    title: string;
    value: string | number;
};

export default function Dashboard() {
    const router = useRouter();
    const [data, setData] = useState<Customer | null>(null);
    const [todayMs] = useState(() => Date.now());

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        if (!token || !user) {
            router.replace("/login");
            return;
        }

        window.setTimeout(() => {
            setData(JSON.parse(user));
        }, 0);
    }, [router]);

    if (!data) return <p className="p-6">Loading...</p>;

    const remaining = data.durationMonths - data.paidMonths;
    const totalExpected = data.durationMonths * data.monthlyAmount;
    const remainingAmount = totalExpected - data.totalAmount;
    const due = new Date(data.maturityDate);
    const daysLeft = Math.ceil((due.getTime() - todayMs) / (1000 * 60 * 60 * 24));

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="bg-white p-6 rounded-2xl shadow mb-6">
                <h1 className="text-xl md:text-2xl font-bold">
                    Welcome, {data.name}
                </h1>

                <p className="text-gray-600 text-sm mt-1">
                    This account is managed by Mr. Manoj Kumar Mishra<br /> (Authorized India Post Office Agent)
                </p>

                <div className="mt-4 flex gap-3 flex-wrap">
                    <a href="tel:09451143203" className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm">
                        Call
                    </a>

                    <a href="https://wa.me/919451143203" className="bg-green-400 text-white px-4 py-2 rounded-lg text-sm">
                        WhatsApp
                    </a>

                    <button
                        onClick={() => {
                            localStorage.removeItem("user");
                            localStorage.removeItem("token");
                            router.replace("/login");
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow mb-6">
                <h2 className="font-semibold mb-3">Your Savings</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                    <p>Saved till now: ₹{data.totalAmount}</p>
                    <p>Remaining to pay: ₹{remainingAmount}</p>
                    <p>Months left: {remaining}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card title="Monthly Deposit" value={`₹${data.monthlyAmount}`} />
                <Card title="Months Paid" value={data.paidMonths} />
                <Card title="Months Left" value={remaining} />
                <Card title="Total Savings" value={`₹${data.totalAmount}`} />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow mb-6 text-center">
                <h2 className="font-semibold mb-4">Progress</h2>

                <CircularProgress value={data.paidMonths} max={data.durationMonths} />

                <p className="mt-3 text-sm text-gray-600">
                    You have completed {Math.round((data.paidMonths / data.durationMonths) * 100)}%
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow mb-6">
                <h2 className="font-semibold mb-3">Account Details</h2>

                <div className="space-y-2 text-sm">
                    <p>Account Number: {data.phone}</p>
                    <p>Scheme: RD</p>
                    <p>Status: {data.status}</p>
                    <p>Maturity Date: {due.toDateString()}</p>
                    <p className="text-red-500 mt-2">Next installment due in {daysLeft} days</p>
                </div>
            </div>

            <div className="mb-6">
                <FeedbackForm />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center">
                <p className="font-semibold">Need help or want to know more?</p>
                <p className="text-sm text-gray-600 mt-1">Please contact Mr. Manoj Kumar Mishra</p>

                <div className="mt-4 flex justify-center gap-3 flex-wrap">
                    <a href="tel:09451143203" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Call
                    </a>

                    <a href="https://wa.me/919451143203" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}

function Card({ title, value }: CardProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="font-bold text-lg">{value}</p>
        </div>
    );
}

function FeedbackForm() {
    const [rating, setRating] = useState(5);
    const [message, setMessage] = useState("");

    const submit = async () => {
        await fetch(apiUrl("/api/feedback"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ rating, message }),
        });

        alert("Feedback submitted");
    };

    return (
        <div className="p-5 bg-white rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-3">Give Feedback</h2>

            <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="border p-2 mb-3 w-full rounded"
            >
                {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>{value} Stars</option>
                ))}
            </select>

            <textarea
                placeholder="Write your feedback..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border p-2 w-full mb-3 rounded"
            />

            <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">
                Submit
            </button>
        </div>
    );
}
