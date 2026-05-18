import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
			<body className={`${inter.className} antialiased bg-[#1f242c]`}>
				{children}
			</body>
		</html>
	);
}
