"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { apiUrl } from "@/lib/api";

type Customer = {
    _id: string;
    name: string;
    phone: string;
    paidMonths: number;
    totalAmount: number;
};

export default function CustomersPage() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetch(apiUrl("/api/customers"), { cache: "no-store" })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch customers");
                return res.json();
            })
            .then((data) => {
                setCustomers(Array.isArray(data) ? data : []);
            })
            .catch(() => {
                setError("Unable to load customer data. Please start the backend server.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const filtered = useMemo(() => {
        const term = search.trim().toLowerCase();
        if (!term) return customers;

        return customers.filter((customer) =>
            customer.name?.toLowerCase().includes(term) ||
            customer.phone?.includes(term)
        );
    }, [customers, search]);

    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">
                Customers
            </h1>

            {error && (
                <p className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">
                    {error}
                </p>
            )}

            <input
                placeholder="Search..."
                value={search}
                className="w-full p-2 border rounded mb-4"
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="overflow-x-auto border rounded-xl">
                <table className="w-full text-sm min-w-[600px]">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 text-left">Name</th>
                            <th className="p-2 text-left">Account</th>
                            <th className="p-2 text-left">Paid</th>
                            <th className="p-2 text-left">Total</th>
                            <th className="p-2 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="p-4 text-center text-gray-500">
                                    Loading customers...
                                </td>
                            </tr>
                        ) : filtered.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-4 text-center text-gray-500">
                                    No customers found
                                </td>
                            </tr>
                        ) : (
                            filtered.map((customer) => (
                                <tr key={customer.phone} className="border-t">
                                    <td className="p-2">{customer.name}</td>
                                    <td className="p-2">{customer.phone}</td>
                                    <td className="p-2">{customer.paidMonths}</td>
                                    <td className="p-2">₹{customer.totalAmount}</td>

                                    <td className="p-2">
                                        <button
                                            onClick={() => router.push(`/admin/customers/${customer.phone}`)}
                                            className="px-3 py-1 border border-blue-500 text-blue-600 rounded"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
