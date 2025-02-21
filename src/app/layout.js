"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import SideBar from "../components/SideBar";
import { routers_menu } from "../utils/routers";
import Footer from "../components/footer";
import { usePathname } from "next/navigation";
import { Providers } from "./api/Providers";

const HTML_TITLE = "RIOUC - UCACUE";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="es">
      <title>{HTML_TITLE}</title>
      <link rel="icon" href="/img/UC_ICONO.png" />
      <Providers>
      <body className={inter.className}>
        <SideBar navLinks={routers_menu} />
        <main className="bg-white mt-16">{children}</main>
        {!pathname.includes("proyectos/")?<Footer />:<></>}
      </body>
      </Providers>
    </html>
  );
}
