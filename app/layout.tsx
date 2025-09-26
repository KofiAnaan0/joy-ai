import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/HomePage/Footer";
import ClientWrapper from "@/components/ClientWrapper";

const geistMono = Geist_Mono({
	weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s - Joy AI",
		absolute: "Joy AI",
	},
	description: "Joy AI, a Platform for building Enterprise AI Agents.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistMono.className} antialiased bg-gradient-to-r from-[#E0EAFC] to-[#CFDEF3]`}
			>
				<ClientWrapper>{children}</ClientWrapper>

				<Footer />
			</body>
		</html>
	);
}
