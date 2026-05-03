"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiUrl } from "@/lib/api";

type Customer = {
    name: string;
    phone: string;
    paidMonths: number;
    durationMonths: number;
    totalAmount: number;
    dueDate?: string | null;
    maturityDate?: string | null;
};

type RowProps = {
    label: string;
    value: string | number;
};

export default function CustomerDetail() {
    const params = useParams();
    const phone = params?.phone;

    const [user, setUser] = useState<Customer | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!phone) return;

        fetch(apiUrl(`/api/customers/${phone}`), { cache: "no-store" })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch customer");
                return res.json();
            })
            .then((data) => setUser(data))
            .catch(() => setError("Failed to fetch customer"))
            .finally(() => setLoading(false));
    }, [phone]);

    if (loading) {
        return <p className="p-6 text-gray-500">Loading customer...</p>;
    }

    if (error) {
        return <p className="p-6 text-red-500">{error}</p>;
    }

    if (!user) {
        return <p className="p-6 text-gray-500">No data found</p>;
    }

    const dueDate = user.dueDate ? new Date(user.dueDate).toDateString() : "Not available";
    const maturityDate = user.maturityDate ? new Date(user.maturityDate).toDateString() : "Not available";
    const remainingMonths = Math.max(user.durationMonths - user.paidMonths, 0);

    return (
        <div className="p-4 md:p-6">
            <h1 className="text-xl md:text-2xl font-semibold mb-4">
                Customer Profile
            </h1>

            <div className="bg-white border rounded-2xl p-4 md:p-6 space-y-4">
                <Row label="Name" value={user.name} />
                <Row label="Account" value={user.phone} />
                <Row label="Paid Months" value={user.paidMonths} />
                <Row label="Months Left" value={remainingMonths} />
                <Row label="Next Due Date" value={dueDate} />
                <Row label="Maturity Date" value={maturityDate} />
                <Row label="Total Amount" value={`₹${user.totalAmount}`} />
            </div>
        </div>
    );
}

function Row({ label, value }: RowProps) {
    return (
        <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium">{value}</span>
        </div>
    );
}
