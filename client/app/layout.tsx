// @ts-ignore: side-effect import of global CSS
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

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