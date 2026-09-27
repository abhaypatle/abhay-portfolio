import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhay Patle | Cloud & AI Systems Engineer",
  description:
    "Portfolio of Abhay Rajesh Patle — Specializing in AWS Serverless Architectures, Amazon Bedrock, Agentic AI, PyTorch Vision Models, and Production Systems.",
  keywords: [
    "Abhay Patle",
    "Cloud Engineer",
    "AI Engineer",
    "AWS Serverless",
    "Nagpur Pulse",
    "IAM Guard",
    "Machine Learning",
    "FastAPI",
    "PyTorch",
  ],
  openGraph: {
    title: "Abhay Patle | Cloud & AI Systems Engineer",
    description:
      "Portfolio of Abhay Rajesh Patle — Specializing in AWS Serverless Architectures, Amazon Bedrock, Agentic AI, PyTorch Vision Models, and Production Systems.",
    url: "https://github.com/abhaypatle",
    siteName: "Abhay Patle Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Patle | Cloud & AI Systems Engineer",
    description:
      "Portfolio of Abhay Rajesh Patle — Specializing in AWS Serverless Architectures, Amazon Bedrock, Agentic AI, PyTorch Vision Models, and Production Systems.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0A0D14] text-slate-100">{children}</body>
    </html>
  );
}
