"use client";

import { useState } from "react";
import { apiUrl } from "@/lib/api";

export default function Upload() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const upload = async () => {
        if (!file) {
            alert("Please select a JSON or Excel file");
            return;
        }

        const form = new FormData();
        form.append("file", file);

        setUploading(true);

        try {
            const res = await fetch(apiUrl("/api/import"), {
                method: "POST",
                body: form,
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                alert(data.message || "Upload failed");
                return;
            }

            alert(`Import complete. Inserted: ${data.inserted}, Updated: ${data.updated}`);
        } catch {
            alert("Upload failed. Please check backend server.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Upload Data</h1>

            <input
                type="file"
                accept=".json,.xlsx,.xls"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />

            <button
                onClick={upload}
                disabled={uploading}
                className="bg-blue-600 text-white px-4 py-2 mt-3 rounded disabled:opacity-60"
            >
                {uploading ? "Uploading..." : "Upload"}
            </button>
        </div>
    );
}
