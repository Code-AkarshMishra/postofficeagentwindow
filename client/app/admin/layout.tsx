// "use client";

// import { useRouter, usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function AdminLayout({ children }: any) {
//     const router = useRouter();
//     const path = usePathname();
//     const [mounted, setMounted] = useState(false);

//     const menu = [
//         { name: "Dashboard", path: "/admin" },
//         { name: "Customers", path: "/admin/customers" },
//         { name: "Upload", path: "/admin/upload" },
//         { name: "Settings", path: "/admin/settings" },
//     ];

//     useEffect(() => {
//         setMounted(true);
//         const token = localStorage.getItem("adminToken");

//         if (!token) {
//             router.push("/admin-login");
//         }
//     }, []);

//     if (!mounted) return null;

//     return (
//         <div className="flex min-h-screen bg-gray-100">

//             {/* SIDEBAR */}
//             <div className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between">

//                 <div>
//                     <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

//                     <ul className="space-y-2">
//                         {menu.map((m) => (
//                             <li
//                                 key={m.path}
//                                 onClick={() => router.push(m.path)}
//                                 className={`cursor-pointer px-4 py-3 rounded-xl transition ${path === m.path
//                                     ? "bg-blue-100 text-blue-700 border border-blue-500"
//                                     : "text-gray-400 hover:bg-gray-800 hover:text-white"
//                                     }`}
//                             >
//                                 {m.name}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <button
//                     onClick={() => {
//                         localStorage.removeItem("adminToken");
//                         router.push("/admin-login");
//                     }}
//                     className="bg-red-500 hover:bg-red-600 py-3 rounded-xl mt-6"
//                 >
//                     Logout
//                 </button>
//             </div>

//             {/* MAIN */}
//             <div className="flex-1 p-8">
//                 {children}
//             </div>
//         </div>
//     );
// }


"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }: any) {
    const router = useRouter();
    const path = usePathname();

    const [ready, setReady] = useState(false);   // gate
    const [isAuth, setIsAuth] = useState(false); // auth state

    const menu = [
        { name: "Dashboard", path: "/admin" },
        { name: "Customers", path: "/admin/customers" },
        { name: "Upload", path: "/admin/upload" },
        { name: "Settings", path: "/admin/settings" },
    ];

    useEffect(() => {
        const token = localStorage.getItem("adminToken");

        // 🔒 strict check
        if (token) {
            setIsAuth(true);
        } else {
            router.replace("/admin-login"); // replace (no back)
        }

        setReady(true);
    }, [router]);

    // 🔥 IMPORTANT: render block
    if (!ready || !isAuth) return null;

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* SIDEBAR */}
            <div className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between">
                <div>
                    <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

                    <ul className="space-y-2">
                        {menu.map((m) => (
                            <li
                                key={m.path}
                                onClick={() => router.push(m.path)}
                                className={`cursor-pointer px-4 py-3 rounded-xl transition ${path === m.path
                                    ? "bg-blue-100 text-blue-700 border border-blue-500"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                    }`}
                            >
                                {m.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={() => {
                        localStorage.removeItem("adminToken");
                        router.replace("/admin-login");
                    }}
                    className="bg-red-500 hover:bg-red-600 py-3 rounded-xl mt-6"
                >
                    Logout
                </button>
            </div>

            {/* MAIN */}
            <div className="flex-1 p-8">{children}</div>
        </div>
    );
}
