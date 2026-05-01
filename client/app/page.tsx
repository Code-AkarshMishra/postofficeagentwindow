// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Recurring Deposit",
//     desc: "Safe monthly savings with disciplined growth.",
//     icon: "🔁",
//   },
//   {
//     title: "Fixed Deposit",
//     desc: "Stable returns with government-backed security.",
//     icon: "🔒",
//   },
//   {
//     title: "Monthly Income Scheme",
//     desc: "Reliable income planning for families and seniors.",
//     icon: "💰",
//   },
//   {
//     title: "Senior Citizen Scheme",
//     desc: "Special benefits designed for senior citizens.",
//     icon: "👴",
//   },
//   {
//     title: "NSC / KVP",
//     desc: "Long-term secure savings with simple planning.",
//     icon: "📜",
//   },
//   {
//     title: "Savings Plans",
//     desc: "Easy savings support with guidance at every step.",
//     icon: "🏦",
//   },
// ];

// const highlights = [
//   {
//     title: "Doorstep Support",
//     desc: "Simple documentation and personal assistance.",
//   },
//   {
//     title: "Trusted Guidance",
//     desc: "Clear explanation before any investment decision.",
//   },
//   {
//     title: "Local Experience",
//     desc: "Long-standing service in Pratapgarh and nearby areas.",
//   },
// ];

// const reviews = [
//   {
//     name: "Rajesh",
//     text: "Very reliable and calm guidance. Everything was handled properly.",
//   },
//   {
//     name: "Amit",
//     text: "Easy process, clear explanation, and trusted support throughout.",
//   },
//   {
//     name: "Sita",
//     text: "Professional service and quick response whenever needed.",
//   },
// ];

// function StatCard({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{ y: -4, scale: 1.01 }}
//       transition={{ duration: 0.2 }}
//       className="rounded-2xl border border-sky-200 bg-white/90 p-5 shadow-[0_8px_30px_rgba(56,189,248,0.10)] backdrop-blur-md"
//     >
//       <p className="text-sm text-slate-500">{label}</p>
//       <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
//     </motion.div>
//   );
// }

// function InfoCard({
//   title,
//   desc,
//   icon,
// }: {
//   title: string;
//   desc: string;
//   icon: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{ y: -4 }}
//       transition={{ duration: 0.2 }}
//       className="rounded-2xl border border-sky-200 bg-white/90 p-5 shadow-[0_8px_30px_rgba(14,165,233,0.08)]"
//     >
//       <div className="flex items-start gap-3">
//         <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-xl">
//           {icon}
//         </div>
//         <div>
//           <h3 className="text-base font-semibold text-slate-900">{title}</h3>
//           <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-800">
//       {/* HERO */}
//       <section className="relative overflow-hidden border-b border-sky-200">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.95))]" />
//         <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
//           <div className="grid items-center gap-10 lg:grid-cols-2">
//             <div className="space-y-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm text-sky-700 shadow-sm"
//               >
//                 Trusted India Post Investment Services
//               </motion.div>

//               <div className="space-y-4">
//                 <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
//                   Secure Your Future
//                   <span className="block bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
//                     with a calm, trusted process
//                   </span>
//                 </h1>

//                 <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
//                   Honest guidance for post office savings schemes, clear paperwork,
//                   and personal support for families who want steady long-term financial planning.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 <button
//                   onClick={() => window.open("tel:09451143203")}
//                   className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
//                 >
//                   Contact Now
//                 </button>
//                 <button
//                   onClick={() => {
//                     document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
//                   }}
//                   className="px-5 py-2 border border-blue-500 rounded-lg hover:bg-blue-50 transition"
//                 >
//                   View Services
//                 </button>
//               </div>

//               <div className="flex flex-wrap gap-3 pt-2">
//                 <span className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
//                   20+ Years Experience
//                 </span>
//                 <span className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
//                   1000+ Customers
//                 </span>
//                 <span className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
//                   4.9 Rating
//                 </span>
//               </div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.55 }}
//               className="relative"
//             >
//               <div className="absolute -inset-4 rounded-[2rem] bg-sky-300/25 blur-2xl" />
//               <div className="relative rounded-[2rem] border border-sky-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(14,165,233,0.15)] backdrop-blur-md">
//                 <div className="flex flex-col items-center gap-5 text-center">
//                   {/* <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-lg ring-4 ring-sky-100 md:h-44 md:w-44">
//                     <Image
//                       src="/father.jpg"
//                       alt="Manoj Kumar Mishra"
//                       fill
//                       sizes="(max-width: 768px) 144px, 176px"
//                       className="object-cover"
//                       priority
//                     />
//                   </div> */}
//                   <div className="flex justify-center -mt-20">
//                     <img
//                       src="/father.jpg"
//                       className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-400 shadow-xl object-cover"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <h2 className="text-2xl font-semibold text-slate-950 md:text-3xl">
//                       Manoj Kumar Mishra
//                     </h2>
//                     <p className="text-sky-700 font-medium">
//                       Authorized India Post Agent
//                     </p>
//                     <p className="mx-auto max-w-xl text-sm leading-6 text-slate-600 md:text-base">
//                       20+ years of trusted service, helping families manage
//                       secure savings through India Post schemes with clarity and personal support.
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-slate-700">
//                     <span className="text-amber-500">★★★★★</span>
//                     <span>(4.9 rating)</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
//         <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//           <StatCard label="Customers" value="1000+" />
//           <StatCard label="Accounts" value="1500+" />
//           <StatCard label="RD Plans" value="500+" />
//           <StatCard label="FD Plans" value="300+" />
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section id="services" className="mx-auto max-w-7xl px-4 py-10 md:px-6">
//         <div className="mb-8 flex items-center justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-slate-950 md:text-3xl">
//               Services Offered
//             </h2>
//             <p className="mt-2 text-sm text-slate-600">
//               A clear overview of the schemes and support provided.
//             </p>
//           </div>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
//           {services.map((s) => (
//             <InfoCard key={s.title} title={s.title} desc={s.desc} icon={s.icon} />
//           ))}
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
//         <div className="rounded-[2rem] border border-sky-200 bg-white/90 p-6 shadow-[0_12px_40px_rgba(14,165,233,0.08)] md:p-8">
//           <h2 className="text-center text-2xl font-semibold text-slate-950 md:text-3xl">
//             Why Choose Us
//           </h2>

//           <div className="mt-8 grid gap-4 md:grid-cols-3">
//             {highlights.map((item) => (
//               <InfoCard
//                 key={item.title}
//                 title={item.title}
//                 desc={item.desc}
//                 icon="✨"
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* REVIEWS */}
//       <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
//         <h2 className="text-center text-2xl font-semibold text-slate-950 md:text-3xl">
//           Client Reviews
//         </h2>

//         <div className="mt-8 grid gap-4 md:grid-cols-3">
//           {reviews.map((r, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -4 }}
//               className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm"
//             >
//               <div className="text-amber-500">★★★★★</div>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 “{r.text}”
//               </p>
//               <p className="mt-4 font-medium text-slate-900">— {r.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
//         <div className="grid gap-6 lg:grid-cols-2">
//           <div className="rounded-[2rem] border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-[0_12px_40px_rgba(14,165,233,0.10)] md:p-8">
//             <h2 className="text-2xl font-semibold text-slate-950">
//               Visit Office
//             </h2>

//             <div className="mt-5 space-y-3 text-sm text-slate-600">
//               <p>Head Post Office, Pratapgarh</p>
//               <p>Monday - Saturday: 10:00 AM to 4:00 PM</p>
//               <p>For guidance, paperwork, and investment queries, meet in person.</p>
//             </div>

//             <div className="mt-6 flex flex-wrap gap-3">
//               <button
//                 onClick={() => window.open("tel:09451143203")}
//                 className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
//               >
//                 Contact Now
//               </button>
//               <a
//                 href="https://wa.me/919451143203"
//                 target="_blank"
//                 className="px-4 py-2 border border-green-500 text-green-600 rounded-lg"
//               >
//                 WhatsApp
//               </a>
//             </div>
//           </div>

//           <div className="overflow-hidden rounded-[2rem] border border-sky-200 bg-white shadow-[0_12px_40px_rgba(14,165,233,0.10)]">
//             <iframe
//               src="https://www.google.com/maps?q=Pratapgarh+HPO&output=embed"
//               className="h-[320px] w-full"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // ✅ ADDED THIS
import { apiUrl } from "@/lib/api";

type Review = {
  _id: string;
  rating?: number;
  message?: string;
  user?: {
    name?: string;
  };
};

const services = [
  {
    title: "Recurring Deposit",
    desc: "Safe monthly savings with disciplined growth.",
    icon: "🔁",
  },
  {
    title: "Fixed Deposit",
    desc: "Stable returns with government-backed security.",
    icon: "🔒",
  },
  {
    title: "Monthly Income Scheme",
    desc: "Reliable income planning for families and seniors.",
    icon: "💰",
  },
  {
    title: "Senior Citizen Scheme",
    desc: "Special benefits designed for senior citizens.",
    icon: "👴",
  },
  {
    title: "NSC / KVP",
    desc: "Long-term secure savings with simple planning.",
    icon: "📜",
  },
  {
    title: "Savings Plans",
    desc: "Easy savings support with guidance at every step.",
    icon: "🏦",
  },
];

const highlights = [
  {
    title: "Doorstep Support",
    desc: "Simple documentation and personal assistance.",
  },
  {
    title: "Trusted Guidance",
    desc: "Clear explanation before any investment decision.",
  },
  {
    title: "Local Experience",
    desc: "Long-standing service in Pratapgarh and nearby areas.",
  },
];

// ❌ REMOVED THE STATIC REVIEWS ARRAY FROM HERE

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-sky-200 bg-white/90 p-5 shadow-[0_8px_30px_rgba(56,189,248,0.10)] backdrop-blur-md"
    >
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
    </motion.div>
  );
}

function InfoCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-sky-200 bg-white/90 p-5 shadow-[0_8px_30px_rgba(14,165,233,0.08)]"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-xl">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  // ✅ ADDED STATE AND FETCH LOGIC HERE
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(apiUrl("/api/feedback"))
      .then((res) => res.json())
      .then((data) => {
        setReviews(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-sky-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.95))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm text-sky-700 shadow-sm"
              >
                Trusted India Post Investment Services
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                  Secure Your Future
                  <span className="block bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                    with a calm, trusted process
                  </span>
                </h1>

                <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                  Honest guidance for post office savings schemes, clear paperwork,
                  and personal support for families who want steady long-term financial planning.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => window.open("tel:09451143203")}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
                >
                  Contact Now
                </button>
                <button
                  onClick={() => {
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2 border border-blue-500 rounded-lg hover:bg-blue-50 transition"
                >
                  View Services
                </button>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  20+ Years Experience
                </span>
                <span className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  1000+ Customers
                </span>
                <span className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  4.9 Rating
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-sky-300/25 blur-2xl" />
              <div className="relative rounded-[2rem] border border-sky-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(14,165,233,0.15)] backdrop-blur-md">
                <div className="flex flex-col items-center gap-5 text-center">
                  <div className="flex justify-center -mt-20">
                    <img
                      src="/father.jpg"
                      alt="Manoj Kumar Mishra"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-400 shadow-xl object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-slate-950 md:text-3xl">
                      Manoj Kumar Mishra
                    </h2>
                    <p className="text-sky-700 font-medium">
                      Authorized India Post Agent
                    </p>
                    <p className="mx-auto max-w-xl text-sm leading-6 text-slate-600 md:text-base">
                      20+ years of trusted service, helping families manage
                      secure savings through India Post schemes with clarity and personal support.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-slate-700">
                    <span className="text-amber-500">★★★★★</span>
                    <span>(4.9 rating)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard label="Customers" value="1000+" />
          <StatCard label="Accounts" value="1500+" />
          <StatCard label="RD Plans" value="500+" />
          <StatCard label="FD Plans" value="300+" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950 md:text-3xl">
              Services Offered
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A clear overview of the schemes and support provided.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <InfoCard key={s.title} title={s.title} desc={s.desc} icon={s.icon} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="rounded-[2rem] border border-sky-200 bg-white/90 p-6 shadow-[0_12px_40px_rgba(14,165,233,0.08)] md:p-8">
          <h2 className="text-center text-2xl font-semibold text-slate-950 md:text-3xl">
            Why Choose Us
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                icon="✨"
              />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <h2 className="text-center text-2xl font-semibold text-slate-950 md:text-3xl">
          Client Reviews
        </h2>

        {/* ✅ REPLACED UI PART HERE */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.length === 0 ? (
            <p className="col-span-3 text-center text-gray-500">Loading reviews...</p>
          ) : (
            reviews.map((r) => (
              <motion.div
                key={r._id}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm"
              >
                <div className="text-amber-500 text-lg">
                  {/* Draws solid stars based on the rating. Adding empty stars for up to 5 looks great too! */}
                  {"★".repeat(r.rating || 5)}
                  <span className="text-gray-200">
                    {"★".repeat(5 - (r.rating || 5))}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  &quot;{r.message}&quot;
                </p>
                <p className="mt-4 font-medium text-slate-900">— {r.user?.name || "Customer"}</p>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-[0_12px_40px_rgba(14,165,233,0.10)] md:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">
              Visit Office
            </h2>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p>Head Post Office, Pratapgarh</p>
              <p>Monday - Saturday: 10:00 AM to 4:00 PM</p>
              <p>For guidance, paperwork, and investment queries, meet in person.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => window.open("tel:09451143203")}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
              >
                Contact Now
              </button>
              <a
                href="https://wa.me/919451143203"
                target="_blank"
                className="px-4 py-2 border border-green-500 text-green-600 rounded-lg"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-sky-200 bg-white shadow-[0_12px_40px_rgba(14,165,233,0.10)]">
            <iframe
              src="https://www.google.com/maps?q=Pratapgarh+HPO&output=embed"
              className="h-[320px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
