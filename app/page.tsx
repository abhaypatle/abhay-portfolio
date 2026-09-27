"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Check,
  Cloud,
  CloudCog,
  Code2,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  GitBranch,
  BriefcaseBusiness,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const rotatingTitles = [
  "Cloud & AI Engineer",
  "AWS Serverless Architect",
  "Agentic AI & Vision Developer",
];

const metrics = [
  { label: "Repositories & Cloud Architectures", value: 25, suffix: "+" },
  { label: "AWS & Tech Badges", value: 13, suffix: "+" },
  { label: "AI Intensive Capstone Hours", value: 180, suffix: "+" },
  { label: "Hackathon Finalist", value: 1, suffix: "" },
];

const techGroups = [
  {
    title: "AWS Cloud & Serverless",
    icon: Cloud,
    items: ["AWS Lambda", "Amazon Bedrock", "IAM", "EC2", "S3", "API Gateway", "DynamoDB", "VPC", "CloudWatch", "Route 53", "ALB", "SNS"],
  },
  {
    title: "AI, ML & Computer Vision",
    icon: BrainCircuit,
    items: ["PyTorch", "ResNet18", "XGBoost", "SHAP", "Generative AI", "Agentic Workflows", "Scikit-Learn"],
  },
  {
    title: "Backend & DevOps",
    icon: Code2,
    items: ["Python", "FastAPI", "Flask", "Docker", "Linux Systems", "REST APIs", "Git/GitHub", "CI/CD"],
  },
  {
    title: "Data & Hardware",
    icon: Database,
    items: ["Power BI", "SQL", "AWS Glue & Athena ETL", "NVIDIA Jetson Orin Nano"],
  },
];

const resumeUrl = "/Abhay_Patle_Resume.pdf";
const credlyUrl = "https://www.credly.com/users/abhay-patle";
const linkedInUrl = "https://www.linkedin.com/in/abhay-patle-9622162aa/";

const projects = [
  {
    title: "NAGPUR PULSE",
    subtitle: "AI Traffic Risk & Dynamic Police Deployment Support",
    role: "Lead AI/ML Engineer | Viksit Nagpur Hackathon 2026",
    description:
      "End-to-end predictive pipeline converting historical accident data, speed variance, and telemetry into multivariate junction risk scores. Used TreeSHAP explainability for traffic police and asynchronous FastAPI endpoints for dynamic resource deployment.",
    tech: ["Python", "XGBoost", "SHAP", "Scikit-Learn", "FastAPI", "Geospatial Analytics"],
    github: "https://github.com/abhaypatle",
    demo: "https://nagpur-pulse.vercel.app/",
    accent: "from-[#00F2FE]/30 via-[#0A0D14]/30 to-[#FF9900]/20",
    architecture: {
      title: "NAGPUR PULSE Architecture",
      steps: [
        "Traffic Telemetry & Road Sensors",
        "Geospatial Preprocessing",
        "Multivariate XGBoost Model",
        "TreeSHAP Explainability Layer",
        "Low-Latency FastAPI REST Endpoints",
        "Police Deployment Dashboard",
      ],
    },
  },
  {
    title: "IAM Guard AI Auditor v2.0",
    subtitle: "Serverless Cloud Security Auditor",
    role: "Cloud Security & Serverless Developer",
    description:
      "Real-time event-driven auditor that parses IAM policy JSON documents, assigns security threat scores (0–100), flags dangerous wildcards, and generates least-privilege remediation templates with side-by-side policy comparisons.",
    tech: ["AWS Lambda", "Amazon Bedrock", "IAM", "Python", "Boto3", "Serverless Architecture"],
    github: "https://github.com/abhaypatle/IAM-Guard-AI-Auditor",
    demo: "https://github.com/abhaypatle/IAM-Guard-AI-Auditor",
    accent: "from-[#FF9900]/30 via-[#111625]/40 to-[#00F2FE]/20",
    architecture: {
      title: "IAM Guard AI Auditor v2.0 Architecture",
      steps: [
        "IAM Policy JSON Input",
        "AWS Lambda (Python / Boto3)",
        "Amazon Bedrock (Nova Micro LLM)",
        "Risk Assessment & Security Scoring (0-100)",
        "Automated Least-Privilege Remediation Output",
      ],
    },
  },
  {
    title: "SAHARA AI Platform",
    subtitle: "AI-Assisted Mental Healthcare & Wellness Platform",
    role: "AI/ML & Full-Stack Engineer | Final Year Capstone Project",
    description:
      "Full-stack wellness platform with mood tracking, PHQ-9/GAD-7 assessments, journaling, and AI chat. Built a FastAPI generative AI service with risk classification and emergency escalation protocols and secure JWT-based access controls.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "FastAPI", "Generative AI", "JWT", "Pytest"],
    github: "https://github.com/abhaypatle",
    demo: "https://sahara-six-swart.vercel.app/",
    accent: "from-[#00F2FE]/20 via-[#111625]/40 to-[#FF9900]/20",
  },
  {
    title: "AI Plant Identifier",
    subtitle: "Health Analytics & Computer Vision",
    role: "Machine Learning Engineer",
    description:
      "Deep learning computer vision pipeline custom-trained on real-world datasets. Provides Top-5 confidence analytics, botanical taxonomy parsing, and automated diagnostic PDF export with QR verification.",
    tech: ["Python", "PyTorch", "PlantNet ResNet18", "Computer Vision", "Streamlit Cloud"],
    github: "https://github.com/abhaypatle/ai-plant-identifier",
    demo: "https://ai-plant-identifier-glxpdxt7pqwbseww5sb4kq.streamlit.app/",
    accent: "from-[#00F2FE]/20 via-[#111625]/40 to-[#FF9900]/20",
  },
];

const otherDeployments = [
  {
    title: "GenAI Smart Event Planner",
    href: "https://genai-smart-event-planner.onrender.com",
    tags: ["GenAI", "FastAPI", "React"],
  },
  {
    title: "CollegeBuddyAI",
    href: "https://abhaypatle.pythonanywhere.com/",
    tags: ["Python", "Chatbot", "ML"],
  },
  {
    title: "AI Health Prediction System",
    href: "https://ai-health-prediction-system-gyis9hfya7vayyxswdawru.streamlit.app/",
    tags: ["Streamlit", "Scikit-Learn", "Healthcare"],
  },
  {
    title: "AI Cybersecurity System",
    href: "https://ai-cybersecurity-system-1.onrender.com/",
    tags: ["Security", "Python", "AI Defense"],
  },
];

const internships = [
  {
    title: "AWS AI-Powered Cloud Engineer Virtual Internship",
    provider: "EduSkills & AWS Educate",
    focus: "Serverless Computing, Cloud Security & AWS Bedrock",
    projects: [
      {
        title: "CloudEventX",
        detail: "Event-driven serverless workflow using Amazon API Gateway, AWS Lambda, and Amazon SNS for automated event validation and email alerting.",
      },
      {
        title: "AWS S3 Static Web Hosting",
        detail: "Secure cloud storage setup with SSE-S3 encryption, bucket policies, and access controls.",
      },
    ],
  },
  {
    title: "AWS Data Engineering Virtual Internship",
    provider: "EduSkills & AWS Academy",
    focus: "ETL Pipelines, Data Catalogs & Cloud Data Analytics",
    projects: [
      {
        title: "Cricket Analytics Pipeline",
        detail: "Data modeling and ETL using AWS S3, AWS Glue, Amazon Athena SQL, and Power BI dashboards.",
      },
      {
        title: "Amazon SageMaker ML Workflow",
        detail: "Notebook automation, exploratory data analysis with Pandas, and scalable cloud-based ML pipelines.",
      },
    ],
  },
  {
    title: "Google AI-ML Virtual Internship",
    provider: "EduSkills & Google for Developers",
    focus: "Machine Learning Foundations, Computer Vision & Scikit-Learn Pipelines",
    projects: [
      {
        title: "End-to-End ML Pipeline",
        detail: "Data preparation, classification models, and evaluation matrices from experimentation through model validation.",
      },
    ],
  },
];

const internshipBadges = ["EduSkills Verified", "AWS Academy Graduate", "Google for Developers", "AICTE Approved"];

const credentials = [
  "AWS Academy: Cloud Foundations",
  "AWS Academy: Data Engineering",
  "AWS Educate: Serverless",
  "AWS Educate: Generative AI",
  "AWS Educate: Cloud Ops",
  "AWS Educate: Security",
  "AWS Educate: Machine Learning Foundations",
  "AWS Educate: Compute",
  "AWS Educate: Storage",
  "AWS Educate: Databases",
  "FutureSkills Prime: Braket",
  "FutureSkills Prime: Sensitive Data on Cloud",
  "FutureSkills Prime: Big Data Analytics",
  "Microsoft AI Intensive Training",
  "Nirmaan AI Intensive Training",
  "Redington AI Intensive Training",
];

const timeline = [
  {
    year: "2026",
    title: "Viksit Nagpur Hackathon 2026",
    detail: "Nagpur Pulse — AI traffic risk and dynamic police deployment support.",
  },
  {
    year: "2026",
    title: "AWS Student Community Day Nagpur",
    detail: "Explored zero-trust security and cloud operating models at IIM Nagpur.",
  },
  {
    year: "2026",
    title: "Google I/O Extended Nagpur",
    detail: "Attended production-focused agentic SRE and Gemini tracks at Infosys MIHAN.",
  },
  {
    year: "2025",
    title: "CodeAlpha Cloud Computing Internship",
    detail: "Built highly available EC2 setups with ALB and Route 53 architecture patterns.",
  },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let raf = 0;
    let start: number | null = null;
    const duration = 1500;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.round(value * progress));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, value]);

  return (
    <span ref={ref} className="font-mono text-3xl font-bold text-white sm:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [toast, setToast] = useState("");
  const [resumeToast, setResumeToast] = useState(false);
  const [activeArchitecture, setActiveArchitecture] = useState<{ title: string; steps: string[] } | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const currentTitle = rotatingTitles[titleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentTitle.slice(0, displayTitle.length + 1);
        setDisplayTitle(nextText);

        if (nextText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const nextText = currentTitle.slice(0, displayTitle.length - 1);
        setDisplayTitle(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % rotatingTitles.length);
        }
      }
    }, isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [displayTitle, isDeleting, titleIndex]);

  useEffect(() => {
    if (!toast) return;
    const timeout = setTimeout(() => setToast(""), 2000);
    return () => clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    if (!resumeToast) return;
    const timeout = setTimeout(() => setResumeToast(false), 3000);
    return () => clearTimeout(timeout);
  }, [resumeToast]);

  useEffect(() => {
    if (!activeArchitecture) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArchitecture(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeArchitecture]);

  const handleResumeDownload = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Abhay_Rajesh_Patle_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setResumeToast(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("abhaypatle99@gmail.com");
      setToast("Copied to Clipboard! ✓");
    } catch {
      setToast("Copy failed, use the email directly");
    }
  };

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const subject = formData.get("subject") || "Portfolio Inquiry";
    const message = formData.get("message") || "";

    const mailto = `mailto:abhaypatle99@gmail.com?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailto;

    setFormSubmitted(true);
    form.reset();
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,242,254,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,153,0,0.15),transparent_20%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0D14]/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#home" className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-[#00F2FE]/40 hover:text-[#00F2FE]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9900] via-[#00F2FE] to-[#7dd3fc] text-[10px] font-bold text-[#0A0D14] shadow-[0_0_24px_rgba(0,242,254,0.8)]">
              A
            </span>
            <span className="text-lg font-semibold tracking-tight text-gradient">Abhay.Cloud</span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 shadow-[0_0_30px_rgba(0,242,254,0.08)] md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              aria-label="Open Abhay's LinkedIn profile"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-[#00F2FE] transition hover:border-[#00F2FE]/50 hover:bg-[#00F2FE]/10 sm:inline-flex"
            >
              in
            </a>
            <a
              href="/Abhay_Patle_Resume.pdf"
              download="Abhay_Rajesh_Patle_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeDownload}
              className="hidden rounded-full border border-[#FF9900]/40 bg-[#FF9900] px-4 py-2 text-sm font-medium text-[#0A0D14] shadow-[0_0_30px_rgba(255,153,0,0.35)] transition hover:scale-[1.02] sm:inline-flex"
            >
              Resume
            </a>
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="status-dot" />
              Available for Opportunities
            </div>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/5 px-3 py-1.5 text-[11px] font-medium tracking-[0.22em] text-[#9aeaf8] uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              // CLOUD INFRASTRUCTURE & INTELLIGENT AI SYSTEMS
            </div>

            <h1 className="text-4xl font-black leading-none tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Abhay Rajesh Patle
            </h1>

            <div className="mt-5 flex min-h-[64px] items-center text-2xl font-semibold tracking-[-0.04em] text-slate-200 sm:text-3xl">
              <span className="text-[#00F2FE]">{displayTitle}</span>
              <span className="ml-1 inline-block h-8 w-[2px] animate-pulse bg-[#FF9900]" />
            </div>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Bridging the gap between raw data, deep learning vision models, and production-grade serverless cloud infrastructure on AWS.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF9900] px-6 py-3 text-sm font-semibold text-[#0A0D14] shadow-[0_0_40px_rgba(255,153,0,0.4)] transition hover:scale-[1.02]"
              >
                Explore Projects
                <ArrowDown className="h-4 w-4" />
              </Link>
              <a
                href="/Abhay_Patle_Resume.pdf"
                download="Abhay_Rajesh_Patle_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#00F2FE]/50 hover:text-[#00F2FE]"
              >
                Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/abhaypatle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#00F2FE]/50 hover:text-[#00F2FE]"
              >
                GitHub Profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#00F2FE]/50 hover:text-[#00F2FE]"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <MapPin className="h-4 w-4 text-[#00F2FE]" />
                Nagpur, Maharashtra, India
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <CloudCog className="h-4 w-4 text-[#FF9900]" />
                AWS & AI Systems
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="glass-panel relative overflow-hidden rounded-[30px] border border-white/10 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-[#FF9900]/20 to-[#00F2FE]/20 blur-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,242,254,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,153,0,0.2),transparent_35%)]" />
              <div className="relative">
                <div className="relative mx-auto w-64 sm:w-72">
                  <div className="relative aspect-[4/5] max-h-[380px] overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/50 sm:max-h-[420px]">
                    <Image
                      src="/profile.jpeg"
                      alt="Abhay Rajesh Patle"
                      width={380}
                      height={460}
                      priority
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111625] via-transparent to-transparent pointer-events-none" />
                    <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-[#111625]/70 px-3 py-1.5 text-[10px] font-medium text-slate-100 shadow-lg backdrop-blur-md">
                      ☁️ AWS Lambda &amp; Cloud
                    </span>
                    <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-[#111625]/70 px-3 py-1.5 text-[10px] font-medium text-slate-100 shadow-lg backdrop-blur-md">
                      🤖 Vision &amp; Bedrock
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span>System Overview</span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
                    online
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-2xl border border-[#00F2FE]/20 bg-[#111625] p-3"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#00F2FE]/10 text-[#00F2FE]">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-slate-400">Vision & Model Ops</p>
                    <p className="mt-2 text-2xl font-bold text-white">ResNet18</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-2xl border border-[#FF9900]/20 bg-[#111625] p-3"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF9900]/10 text-[#FF9900]">
                      <Cloud className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-slate-400">Platform Layer</p>
                    <p className="mt-2 text-2xl font-bold text-white">AWS</p>
                  </motion.div>
                </div>

                <div className="mt-4 rounded-[24px] border border-white/10 bg-[#0B101A]/70 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                    <span className="font-medium">AI Cloud Stack</span>
                    <span className="text-[#00F2FE]">99.9% uptime</span>
                  </div>
                  {["Lambda", "Bedrock", "IAM", "DynamoDB", "S3", "CloudWatch"].map((node, index) => (
                    <div key={node} className="mb-2 flex items-center gap-3 last:mb-0">
                      <div className="relative h-2.5 w-2.5 rounded-full bg-[#00F2FE] shadow-[0_0_18px_rgba(0,242,254,0.9)]">
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#00F2FE]/60" />
                      </div>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${70 + index * 6}%` }}
                          transition={{ duration: 0.8, delay: 0.2 + index * 0.12 }}
                          className={`h-full rounded-full ${index % 2 === 0 ? "bg-gradient-to-r from-[#00F2FE] to-cyan-300" : "bg-gradient-to-r from-[#FF9900] to-amber-300"}`}
                        />
                      </div>
                      <span className="w-22 text-right font-mono text-xs text-slate-400">{node}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-2xl border border-white/10 p-5"
              >
                <div className="mb-3 inline-flex rounded-full border border-[#00F2FE]/20 bg-[#00F2FE]/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#9aeaf8]">
                  Impact
                </div>
                <div className="mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-sm leading-6 text-slate-300">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[28px] border border-white/10 bg-[#111625]/80 p-7">
              <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[#00F2FE]">About</p>
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-white">Building AI-native systems with cloud-grade reliability.</h2>
            </div>

            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-8">
                I am a Cloud & AI Engineer focused on designing secure, resilient, and intelligent systems from edge to cloud. My work sits at the intersection of machine learning, computer vision, serverless architecture, and operational automation.
              </p>
              <p className="text-lg leading-8">
                From IAM policy auditing to explainable AI pipelines and edge deployment workflows, I build solutions that convert exploratory data science into production-ready infrastructure, measurable business impact, and trustworthy user outcomes.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#FF9900]">Stack</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white">Tools that power intelligent systems.</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {techGroups.map(({ title, icon: Icon, items }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="group rounded-[26px] border border-white/10 bg-[#111625]/80 p-5 transition hover:-translate-y-1 hover:border-[#00F2FE]/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00F2FE]/15 to-[#FF9900]/15 text-[#00F2FE]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="badge-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group rounded-[26px] border border-[#FF9900]/30 bg-gradient-to-br from-[#111625] via-[#111625] to-[#00F2FE]/10 p-5 md:col-span-2 xl:col-span-4"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#FF9900]">Lab Showcase</p>
                  <h3 className="text-2xl font-bold tracking-[-0.04em] text-white">Edge AI & Real-Time Computer Vision Lab</h3>
                  <p className="mt-3 text-base text-slate-300">
                    NVIDIA Jetson Orin Nano | Linux OS | CUDA Acceleration
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                    Hands-on experience deploying quantized deep learning vision models directly onto edge hardware, configuring embedded Linux environments, optimizing memory consumption, and achieving low-latency inference.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Edge AI",
                    "Jetson Orin Nano",
                    "CUDA",
                    "Linux",
                    "Computer Vision",
                  ].map((item) => (
                    <span key={item} className="badge-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.22em] text-[#00F2FE]">Projects</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white">Featured builds with real-world impact.</h2>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-panel relative overflow-hidden rounded-[28px] border border-white/10 p-5 sm:p-7"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.accent}`} />
                <div className="relative grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-[24px] border border-white/10 bg-[#0B101A]/80 p-5">
                    <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                      <Zap className="h-3.5 w-3.5 text-[#FF9900]" />
                      Case Study
                    </div>
                    <h3 className="text-2xl font-bold tracking-[-0.04em] text-white">{project.title}</h3>
                    <p className="mt-2 text-[#00F2FE]">{project.subtitle}</p>
                    <div className="mt-6 space-y-3 text-sm text-slate-300">
                      <div className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-[#FF9900]" />
                        <span>{project.role}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-[#00F2FE]" />
                        <span>{project.description}</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-[#111625]/80 p-5">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <span key={tag} className="badge-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-[#00F2FE]/40 hover:text-[#00F2FE]"
                      >
                        <GitBranch className="h-4 w-4" />
                        GitHub Repo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      {project.architecture ? (
                        <button
                          type="button"
                          onClick={() => setActiveArchitecture(project.architecture ?? null)}
                          className="inline-flex items-center gap-2 rounded-full border border-[#00F2FE]/40 bg-[#00F2FE]/10 px-4 py-2 text-sm font-medium text-[#9aeaf8] transition hover:bg-[#00F2FE]/15"
                        >
                          <Zap className="h-4 w-4" />
                          View Architecture
                        </button>
                      ) : null}
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#FF9900]/40 bg-[#FF9900]/10 px-4 py-2 text-sm font-medium text-[#FF9900] transition hover:bg-[#FF9900]/20"
                      >
                        Demo
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.22em] text-[#FF9900]">More in the wild</p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-white">Other Noteworthy Deployments</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherDeployments.map((deployment, index) => (
                <motion.a
                  key={deployment.title}
                  href={deployment.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group rounded-[24px] border border-white/10 bg-[#111625]/80 p-5 transition hover:-translate-y-1 hover:border-[#00F2FE]/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-lg font-semibold leading-7 text-white transition group-hover:text-[#00F2FE]">
                      {deployment.title}
                    </h4>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#FF9900] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {deployment.tags.map((tag) => (
                      <span key={tag} className="badge-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="credentials" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#FF9900]">Credentials</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white">Badges, certifications and verified learning.</h2>
            </div>
            <a
              href="https://www.credly.com/users/abhay-patle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#00F2FE] transition hover:text-cyan-300"
            >
              Credly profile
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="marquee-wrap overflow-hidden rounded-[28px] border border-white/10 bg-[#111625]/80">
            <div className="marquee-track flex min-w-max gap-3 py-4">
              {[...credentials, ...credentials].map((item, index) => (
                <a
                  key={`${item}-${index}`}
                  href={credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Verify on Credly ↗"
                  className="group relative badge-marquee transition hover:border-[#00F2FE]/50 hover:text-[#00F2FE]"
                >
                  <span>{item}</span>
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#FF9900]/40 bg-[#111625]/90 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[#FF9900] opacity-0 transition group-hover:opacity-100">
                    Verify on Credly ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="internships" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#00F2FE]">Experience & Projects</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white">EduSkills & AICTE Virtual Internships</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {internshipBadges.map((badge) => (
                <span key={badge} className="badge-pill">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {internships.map((internship, index) => (
              <motion.article
                key={internship.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[26px] border border-white/10 bg-[#111625]/80 p-6 transition hover:-translate-y-1 hover:border-[#00F2FE]/30"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#FF9900]">Virtual Internship</p>
                    <h3 className="mt-2 text-xl font-semibold leading-7 text-white">{internship.title}</h3>
                    <p className="mt-2 text-sm text-[#00F2FE]">{internship.provider}</p>
                  </div>
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#00F2FE]" />
                </div>
                <p className="border-y border-white/10 py-4 text-sm leading-6 text-slate-300">
                  <span className="font-medium text-white">Focus:</span> {internship.focus}
                </p>
                <div className="mt-5 space-y-4">
                  {internship.projects.map((project) => (
                    <div key={project.title}>
                      <h4 className="text-sm font-semibold text-white">{project.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{project.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.22em] text-[#00F2FE]">Timeline</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white">Community, projects and standout milestones.</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={`${item.year}-${item.title}`} className="relative rounded-[24px] border border-white/10 bg-[#111625]/80 p-5 pl-8 md:pl-10">
                <div className="absolute left-4 top-7 h-full w-px bg-gradient-to-b from-[#00F2FE] via-[#FF9900] to-transparent" />
                <div className="absolute left-2 top-6 h-4 w-4 rounded-full border-2 border-[#0A0D14] bg-[#00F2FE] shadow-[0_0_20px_rgba(0,242,254,0.8)]" />
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="text-sm uppercase tracking-[0.2em] text-[#FF9900]">{item.year}</span>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="max-w-2xl text-slate-300">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-white/10 bg-[#111625]/80 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-[#00F2FE]">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white">Let’s design the next resilient AI system.</h2>

              <div className="mt-8 space-y-4 text-slate-300">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <MapPin className="h-4 w-4 text-[#00F2FE]" />
                  Nagpur, Maharashtra, India
                </div>
                <a
                  href="mailto:abhaypatle99@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-[#FF9900]/40 hover:text-[#FF9900]"
                >
                  <Mail className="h-4 w-4 text-[#FF9900]" />
                  abhaypatle99@gmail.com
                </a>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-[#00F2FE]/40 hover:text-[#00F2FE]"
                >
                  <BriefcaseBusiness className="h-4 w-4 text-[#00F2FE]" />
                  /in/abhay-patle-9622162aa
                </a>
                <a
                  href="https://github.com/abhaypatle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-[#FF9900]/40 hover:text-[#FF9900]"
                >
                  <GitBranch className="h-4 w-4 text-[#FF9900]" />
                  /abhaypatle
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#00F2FE]/40 bg-[#00F2FE]/10 px-4 py-2 text-sm font-medium text-[#9aeaf8] transition hover:bg-[#00F2FE]/15"
              >
                {toast ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {toast || "Copy Email to Clipboard"}
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="rounded-[28px] border border-white/10 bg-[#111625]/80 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-2xl border border-white/10 bg-[#0B101A] px-4 py-3 text-white outline-none transition focus:border-[#00F2FE]/50"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-2xl border border-white/10 bg-[#0B101A] px-4 py-3 text-white outline-none transition focus:border-[#00F2FE]/50"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm text-slate-300">Subject</span>
                <input
                  type="text"
                  name="subject"
                  className="w-full rounded-2xl border border-white/10 bg-[#0B101A] px-4 py-3 text-white outline-none transition focus:border-[#00F2FE]/50"
                  placeholder="Project collaboration or opportunity"
                  required
                />
              </label>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm text-slate-300">Message</span>
                <textarea
                  name="message"
                  className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-[#0B101A] px-4 py-3 text-white outline-none transition focus:border-[#00F2FE]/50"
                  placeholder="Tell me about your idea, project, or opportunity..."
                  required
                />
              </label>

              <div className="mt-5 flex items-center justify-between gap-4">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={formSubmitted ? "submitted" : "idle"}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className={formSubmitted ? "text-sm text-emerald-300" : "text-sm text-slate-400"}
                  >
                    {formSubmitted ? "Email client triggered! Thank you." : "Response time: usually within 24 hours."}
                  </motion.span>
                </AnimatePresence>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF9900] px-5 py-3 text-sm font-semibold text-[#0A0D14] shadow-[0_0_32px_rgba(255,153,0,0.35)] transition hover:scale-[1.01]"
                >
                  Send Message
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {resumeToast ? (
          <motion.div
            initial={{ opacity: 0, x: 32, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 32, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-5 right-5 z-[70] rounded-full border border-white/10 bg-[#111625]/80 px-5 py-3 text-sm font-medium text-[#d7fefb] shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-md"
          >
            Downloading Resume... ✓
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeArchitecture ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0e131f]/90 p-4 backdrop-blur-md"
            onClick={() => setActiveArchitecture(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-[#111625]/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-white">{activeArchitecture.title}</h3>
                <button
                  type="button"
                  aria-label="Close architecture modal"
                  onClick={() => setActiveArchitecture(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-[#00F2FE]/40 hover:text-[#00F2FE]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 space-y-3">
                {activeArchitecture.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B101A]/80 p-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#00F2FE]/20 to-[#FF9900]/20 text-xs font-bold text-[#00F2FE]">
                      {index + 1}
                    </span>
                    <span className="text-sm text-slate-200">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <footer className="relative z-10 border-t border-white/10 bg-[#0A0D14]/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Abhay Rajesh Patle. Built for cloud-native AI experiences.</p>
          <div className="flex items-center gap-3">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              aria-label="Open Abhay's LinkedIn profile"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-[#00F2FE]/40 hover:text-[#00F2FE]"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="#home" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-[#FF9900]/40 hover:text-[#FF9900]">
              Back to Top
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
