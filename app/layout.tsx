import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavContainer from "@/components/Home/Navbar/NavContainer";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Corporate Landing Page",
	description: "A Corporate Landing Page built with Next.js by Amit Paul",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<NavContainer />
				{children}
				<Footer />
				<ScrollToTop />
			</body>
		</html>
	);
}
