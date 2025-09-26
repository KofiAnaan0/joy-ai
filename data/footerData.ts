import { FooterProps, SocialLink } from "@/types/footerType";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks: SocialLink[] = [
	{
		id: 1,
		icon: FaLinkedin,
		href: "#",
		label: "Linkedin",
	},
	{
		id: 2,
		icon: FaYoutube,
		href: "#",
		label: "Youtube",
	},
	{
		id: 3,
		icon: FaXTwitter,
		href: "#",
		label: "x(twitter)",
	},
];

export const companyData: FooterProps[] = [
	{
		id: 1,
		label: "Contact",
		links: "#",
	},
	{
		id: 2,
		label: "About Us",
		links: "#",
	},
];

export const productData: FooterProps[] = [
	{
		id: 1,
		label: "Customer Support",
		links: "#",
	},
	{
		id: 2,
		label: "Sales Assistant",
		links: "#",
	},
	{
		id: 3,
		label: "Custom LLM Deployment",
		links: "#",
	},
];
