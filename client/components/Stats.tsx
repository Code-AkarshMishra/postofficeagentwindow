"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

export default function Stats() {
    const data = [
        { label: "Customers", value: 1000 },
        { label: "RD", value: 600 },
        { label: "FD", value: 400 },
        { label: "Trust", value: 100 },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {data.map((item, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-2xl shadow-md text-center border border-gray-100"
                >
                    <h2 className="text-xl font-bold text-blue-900">
                        {item.label === "Trust" ? `${item.value}%` : <Counter target={item.value} />}
                    </h2>

                    <p className="text-xs text-gray-500 mt-1">
                        {item.label}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}