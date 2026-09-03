import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Download,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  BadgeCheck,
  Briefcase,
  Code2,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khanyisile Gubuza — Aspiring AI Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Khanyisile Gubuza, aspiring AI specialist and CAPACITI ASA learner based in South Africa. Open to internships in AI and Data.",
      },
      { property: "og:title", content: "Khanyisile Gubuza — Aspiring AI Specialist" },
      {
        property: "og:description",
        content:
          "Education professional transitioning into AI and Data. Projects, skills, and experience of Khanyisile Gubuza.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = {
  email: "Khanyisigubuza@gmail.com",
  github: "https://github.com/Khanyisile20",
  linkedin: "https://www.linkedin.com/in/kay-becoming-26ba62283",
};

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className={`font-display text-base font-bold tracking-tight transition-colors ${
            scrolled || open ? "text-foreground" : "text-navy-foreground"
          }`}
        >
          Khanyisile <span className={scrolled || open ? "text-primary" : "text-blue-glow"}>Gubuza</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-card-hover sm:inline-flex"
          >
            <Download className="size-4" />
            Download CV
          </a>
          <button
            className={`inline-flex size-10 items-center justify-center rounded-lg hover:bg-accent lg:hidden ${
              scrolled || open ? "text-foreground" : "text-navy-foreground"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="animate-float absolute -right-24 top-24 size-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-32 bottom-0 size-80 rounded-full bg-blue-glow/15 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pb-24 pt-32 text-center sm:px-6">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-navy-border bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-muted backdrop-blur-sm">
          <Sparkles className="size-3.5 text-blue-glow" />
          Aspiring AI Specialist · Open to Internships
        </div>

        <h1
          className="font-display mt-6 text-4xl font-bold tracking-tight text-navy-foreground sm:text-6xl"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I'm <span className="text-gradient-blue">Khanyisile Gubuza</span>
        </h1>

        <h2
          className="animate-fade-up mt-4 text-lg font-semibold text-navy-muted sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Aspiring AI Specialist | Future Data Professional | Education Professional
        </h2>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-navy-muted sm:text-lg"
          style={{ animationDelay: "0.3s" }}
        >
          I am a CAPACITI ASA learner passionate about transforming my 4 years in education
          into AI and Data solutions. I build practical AI tools that save professionals
          time.
        </p>

        <div
          className="animate-fade-up mt-4 inline-flex items-center gap-1.5 text-sm text-navy-muted"
          style={{ animationDelay: "0.35s" }}
        >
          <MapPin className="size-4 text-blue-glow" />
          South Africa
        </div>

        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            View My Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-border bg-white/5 px-6 py-3 text-sm font-semibold text-navy-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-blue-glow/50 hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>

        <div
          className="animate-fade-up mt-10 flex items-center gap-3"
          style={{ animationDelay: "0.55s" }}
        >
          {[
            { icon: Mail, href: `mailto:${SOCIALS.email}`, label: "Email" },
            { icon: Github, href: SOCIALS.github, label: "GitHub" },
            { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="inline-flex size-11 items-center justify-center rounded-full border border-navy-border bg-white/5 text-navy-muted backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-glow/50 hover:text-blue-glow"
            >
              <Icon className="size-4.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="From education to AI & data"
        />
        <div className="reveal mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card sm:p-10">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am a Student Advisor and Education Professional with{" "}
              <span className="font-semibold text-foreground">
                BEd Honours in Curriculum Studies
              </span>{" "}
              from the University of Johannesburg and a{" "}
              <span className="font-semibold text-foreground">BEd</span> from the Central
              University of Technology. With experience supporting learners, parents and
              educators at Leondale Secondary School and Department of Education examination
              centres, I am now transitioning into AI and Data through the{" "}
              <span className="font-semibold text-primary">
                CAPACITI ASA IT Programme
              </span>
              .
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm passionate about using AI to solve workplace problems and supporting
              student success.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { value: "4+", label: "Years in education" },
                { value: "5", label: "AI tools built into WorkSmart AI" },
                { value: "3", label: "Degrees & certificates" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-accent px-4 py-5 text-center"
                >
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TECHNICAL_SKILLS = [
  "Customer Service Oriented",
  "Computer Literacy (MS Office)",
  "Python Basics",
  "Data Capturing & Management",
  "Attention to Detail",
  "Record Management",
];

const SOFT_SKILLS = [
  "Ability to work in a team",
  "Effective Communication",
  "Deadline Oriented",
  "Ability to work under pressure",
  "Ability to manage time effectively",
  "Ability to effectively cope with change",
];

function Skills() {
  return (
    <section id="skills" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to the table"
          description="A blend of technical foundations and people skills built over years in education."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="reveal rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-card-hover">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Code2 className="size-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-foreground">
                Technical Skills
              </h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {TECHNICAL_SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-card-hover" style={{ transitionDelay: "0.1s" }}>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="size-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-foreground">Soft Skills</h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {SOFT_SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const EDUCATION = [
  {
    period: "2026 — Current",
    title: "CAPACITI ASA Programme — IT / AI",
    institution: "Cape Innovation & Technology Initiative",
  },
  {
    period: "2025",
    title: "Bachelor of Education Honours in Curriculum Studies",
    institution: "University of Johannesburg",
  },
  {
    period: "2022",
    title: "Bachelor of Education — Senior & FET Phase (Economic & Management Sciences)",
    institution: "Central University of Technology · Majors: Accounting, Economics & EMS",
  },
  {
    period: "2017",
    title: "National Senior Certificate",
    institution: "Rondebult Secondary School",
  },
];

function Education() {
  return (
    <section id="education" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Education" title="My learning journey" />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute bottom-4 left-[19px] top-4 w-px bg-border sm:left-1/2" />
          <ol className="space-y-10">
            {EDUCATION.map((item, i) => (
              <li
                key={item.title}
                className={`reveal relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12"
                }`}
              >
                <span
                  className={`absolute left-2.5 top-1.5 inline-flex size-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:left-auto ${
                    i % 2 === 0 ? "sm:-right-2" : "sm:-left-2"
                  }`}
                />
                <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.period}
                  </span>
                  <h3 className="mt-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <GraduationCap className="size-4 shrink-0 text-primary/70" />
                    {item.institution}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const CERTIFICATIONS = [
  { year: "2022", title: "TEFL Certificate — 120 hours", issuer: "Teacher Record" },
  { year: "2025", title: "AI Tools & Prompt Engineering", issuer: "CAPACITI" },
  {
    year: "2025",
    title: "Professional Development & Workplace Readiness",
    issuer: "CAPACITI",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Certifications" title="Credentials & certificates" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.title}
              className="reveal rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card-hover"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BadgeCheck className="size-5" />
              </span>
              <span className="mt-5 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {cert.year}
              </span>
              <h3 className="mt-3 font-semibold text-foreground">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "WorkSmart AI",
    subtitle: "AI Workplace Productivity Assistant",
    description:
      "An all-in-one dashboard with 5 AI tools (Smart Email Generator, Meeting Summarizer, Task Planner Eisenhower Matrix, Research Assistant, Chatbot) that helps professionals save 2+ hours daily. Real problem solving.",
    tech: ["Lovable.ai", "ChatGPT-4o", "React", "Tailwind CSS"],
    live: "https://clever-work-suite.lovable.app",
    github: "https://github.com/Khanyisile20/AI-Productivity-Assistant--Work-Smart-AI",
    featured: true,
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "This Website",
    description:
      "Modern responsive portfolio to showcase my skills, education, projects and work experience for internship and job applications. Designed for recruiters.",
    tech: ["Lovable", "Vercel", "GitHub Pages", "Responsive Design"],
  },
  {
    title: "Education Support Data Analysis",
    subtitle: "Data & Reporting",
    description:
      "Analysed learner support data to identify patterns in academic performance and improve learner assistance strategies. Showcases data cleaning, attention to detail, and reporting.",
    tech: ["MS Excel", "Data Capturing", "Analysis", "Reporting"],
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Practical AI and data projects that solve real problems."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className={`reveal group flex flex-col rounded-2xl border bg-card p-7 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-card-hover ${
                project.featured
                  ? "border-primary/40 ring-1 ring-primary/20"
                  : "border-border hover:border-primary/30"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {project.featured && (
                <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Sparkles className="size-3" />
                  Featured Project
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{project.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {(project.live || project.github) && (
                <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-blue-glow"
                    >
                      <ExternalLink className="size-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="size-4" />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const EXPERIENCE = [
  {
    role: "Education Assistant",
    org: "Leondale Secondary School, Gauteng",
    period: "June 2023 — Present (Contract)",
    duties: [
      "Provide comprehensive administrative support including filing, documentation, preparation, printing and record management",
      "Captured and maintained accurate learner data and academic records in compliance with school systems",
      "Supported educators with classroom preparation and learner administration",
      "Managed professional communication with educators, learners and parents",
    ],
  },
  {
    role: "Examination Assistant (Seasonal Contracts)",
    org: "Department of Education, Free State",
    period: "Exam Seasons: Dec 2019, Jan 2020, Nov 2021 — Jan 2022",
    duties: [
      "Sorted and verified delivery of exam scripts by subject, paper and centre number while maintaining accurate records",
      "Distributed and collected script batches to markers while maintaining confidentiality and security",
      "Captured marks and attendance data and checked for totalling errors",
      "Supported senior markers with memos, guidelines, and irregularity reports",
      "Secured and packaged scripts for safe storage and dispatch, processed confidential information",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="mx-auto mt-14 max-w-3xl space-y-8">
          {EXPERIENCE.map((job, i) => (
            <article
              key={job.role}
              className="reveal rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-card-hover"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Briefcase className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-primary">{job.org}</p>
                  </div>
                </div>
                <span className="rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-foreground">
                  {job.period}
                </span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {job.duties.map((duty) => (
                  <li
                    key={duty}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {duty}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24">
      <div
        aria-hidden
        className="absolute -right-24 top-10 size-80 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-glow">
            Contact
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-navy-foreground sm:text-4xl">
            Let's Connect — Open to internships
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-muted">
            I'm actively looking for internship and entry-level opportunities in AI and
            Data. Reach out — I'd love to hear from you.
          </p>
        </div>

        <div className="reveal mt-10 grid gap-4 sm:grid-cols-2" style={{ transitionDelay: "0.1s" }}>
          {[
            { icon: Mail, label: "Email", value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
            { icon: Github, label: "GitHub", value: "github.com/Khanyisile20", href: SOCIALS.github },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "linkedin.com/in/kay-becoming-26ba62283",
              href: SOCIALS.linkedin,
            },
            { icon: MapPin, label: "Location", value: "South Africa", href: undefined },
          ].map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <Icon className="size-5 shrink-0 text-blue-glow" />
                <div className="min-w-0 text-left">
                  <div className="text-xs font-medium uppercase tracking-wider text-navy-muted">
                    {label}
                  </div>
                  <div className="truncate text-sm font-semibold text-navy-foreground">
                    {value}
                  </div>
                </div>
              </>
            );
            const cls =
              "flex items-center gap-3.5 rounded-xl border border-navy-border bg-white/5 p-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-glow/50 hover:bg-white/10";
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <div key={label} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>

        <a
          href={`mailto:${SOCIALS.email}?subject=CV%20Request`}
          className="reveal mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
          style={{ transitionDelay: "0.2s" }}
        >
          <Download className="size-4" />
          Download CV
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-navy-border bg-navy py-10">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm font-medium text-navy-foreground">
          Built by Khanyisile Gubuza · 2026 · CAPACITI ASA Online 17 · Deployed on Vercel /
          Lovable
        </p>
        <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-navy-muted">
          Responsible AI Disclaimer: Built with AI assistance (Lovable, ChatGPT) but all
          content is human-reviewed and verified.
        </p>
      </div>
    </footer>
  );
}

function Portfolio() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
