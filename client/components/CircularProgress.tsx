"use client";

export default function CircularProgress({ value, max }: any) {
    const percentage = (value / max) * 100;
    const radius = 60;
    const stroke = 8;
    const normalized = radius - stroke;
    const circumference = normalized * 2 * Math.PI;
    const strokeDashoffset =
        circumference - (percentage / 100) * circumference;

    return (
        <div className="flex justify-center items-center">
            <svg height={150} width={150}>
                <circle
                    stroke="#e5e7eb"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalized}
                    cx="75"
                    cy="75"
                />

                <circle
                    stroke="#2563eb"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    r={normalized}
                    cx="75"
                    cy="75"
                />

                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="text-lg font-bold fill-blue-600"
                >
                    {Math.round(percentage)}%
                </text>
            </svg>
        </div>
    );
}