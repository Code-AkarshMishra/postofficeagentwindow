// @ts-ignore: side-effect import of global CSS
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// 🌐 SEO METADATA CONFIGURATION
export const metadata: Metadata = {
  // 1. Primary Tags
  title: "Manoj Mishra | Authorized India Post Agent Pratapgarh | Manoj Kumar Mishra",
  description: "Manoj Kumar Mishra is a trusted Authorized India Post Agent at Head Post Office Pratapgarh. Expert guidance for RD, FD, MIS, and KVP schemes with 20+ years of experience.",

  // 2. Keywords (Har tarah ke search combination yahan cover hain)
  keywords: [
    "Manoj Mishra", "Manoj Kumar Mishra", "Manoj Mishra Pratapgarh",
    "Post Office Agent Pratapgarh", "India Post Agent Manoj Mishra",
    "Best Post Office Agent in Pratapgarh", "Manoj Mishra Head Post Office",
    "Pratapgarh Post Office Investment Agent", "Manoj Mishra RD FD Agent",
    "Authorized Post Office Agent Pratapgarh", "Manoj Kumar Mishra Post Office",
    "Investment Advisor Pratapgarh", "Manoj Mishra Savings Schemes",
    "Head Post Office Pratapgarh Agents", "manoj mishra postoffice", "Manoj Mishra Contact Number",
    "Manoj Mishra", "Manoj Kumar Mishra", "M K Mishra", "Manoj Mishra Pratapgarh",
    "Manoj Mishra Post Office Agent", "Post Office RD Agent", "Post Office FD Scheme Agent",
    "Monthly Income Scheme Agent", "MIS Post Office Agent", "NSC KVP Agent",
    "Postal Life Insurance Agent", "PLI Agent Pratapgarh", "Post Office Agent in Pratapgarh",
    "Head Post Office Pratapgarh Agent", "Bela Pratapgarh Post Office Agent",
    "Best Investment Agent Pratapgarh", "India Post Agent near me", "Authorized India Post Agent",
    "Sarkari Post Office Agent", "Government Savings Scheme Advisor", "Certified Postal Agent",
    "How to open RD in Pratapgarh", "Post Office scheme investment advisor",
    "Contact Post Office Agent Pratapgarh"
  ],

  // 3. Favicon & Icons
  icons: {
    icon: "/favicon.ico", // Ye public folder ya app folder se utha lega
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // 4. Open Graph (WhatsApp/FB/LinkedIn sharing ke liye)
  openGraph: {
    title: "Manoj Mishra - Trusted India Post Agent, Pratapgarh",
    description: "Authorized India Post Agent at Head Post Office Pratapgarh. Expert guidance for RD, FD, MIS, and KVP schemes with 20+ years of experience.",
    url: "https://manojmishrahpopbh.vercel.app/",
    siteName: "Manoj Mishra Head Post Office Pratapgarh",
    images: [
      {
        url: "/father.jpg", // Preveiw mein image dikhane ke liye
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // 5. Search Engine Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="6Xnbq-3OC8tH2EZ7_acIb9Bf49spiVVl_Y57eZ3Z5Gw" />
      <body className="bg-slate-50 text-slate-900 antialiased">
        {/* 🔝 FIXED NAVBAR */}
        <Navbar />

        {/* 📦 MAIN CONTENT AREA */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* 🔻 DECORATED FOOTER */}
        <Footer />
      </body>
    </html>
  );
}

// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-slate-50 text-slate-900 antialiased">
//         <Navbar />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }