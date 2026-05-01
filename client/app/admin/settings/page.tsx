"use client";

import { useState } from "react";
import { apiUrl } from "@/lib/api";

export default function Settings() {
    const [userId, setUserId] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const updateUserPassword = async () => {
        const res = await fetch(apiUrl("/api/admin/update-user-password"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
            body: JSON.stringify({ userId, newPassword }),
        });

        const data = await res.json();
        alert(data.message || (res.ok ? "User password updated" : "Update failed"));
    };

    const updateAdminPassword = async () => {
        const res = await fetch(apiUrl("/api/admin/change-password"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
            body: JSON.stringify({ newPassword }),
        });

        const data = await res.json();
        alert(data.message || (res.ok ? "Admin password updated" : "Update failed"));
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="font-bold mb-3">Change Admin Password</h2>

                <input
                    placeholder="New Password"
                    className="border p-2 w-full mb-3"
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <button
                    onClick={updateAdminPassword}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Update Admin Password
                </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="font-bold mb-3">Change User Password</h2>

                <input
                    placeholder="User ID"
                    className="border p-2 w-full mb-2"
                    onChange={(e) => setUserId(e.target.value)}
                />

                <input
                    placeholder="New Password"
                    className="border p-2 w-full mb-3"
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <button
                    onClick={updateUserPassword}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Update User Password
                </button>
            </div>
        </div>
    );
}
