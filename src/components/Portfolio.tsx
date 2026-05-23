import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon,
  DownloadIcon, ArrowRightIcon, ExternalIcon, SparkIcon,
} from "@/components/Icons";
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroPortraitBack from "@/assets/hero-portrait-back.jpg";
import { FlipImage } from "@/components/FlipImage";
import projectJarvis from "@/assets/project-jarvis.jpg";
import projectEpic24 from "@/assets/project-epic24.jpg";
import { Photography } from "@/components/Photography";

// ---------- shared motion ----------
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

// ---------- Background ambient glow ----------
function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full blur-3xl animate-pulse-glow"
      >
        <div className="h-full w-full rounded-full" style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 65%)"
        }} />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full blur-3xl animate-float-slow"
      >
        <div className="h-full w-full rounded-full" style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 25%, transparent), transparent 70%)"
        }} />
      </motion.div>
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      }} />
    </div>
  );
}

// ---------- Navbar ----------
function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#photography", label: "Photography" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-4 left-1/2 z-50 w-[min(96%,960px)] -translate-x-1/2"
    >
      <div className="glass-strong flex items-center justify-between rounded-full px-5 py-3">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">A</span>
          <span className="hidden sm:inline">Aadhithyan R</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_var(--primary)]">
          Hire me
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.header>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-32 pb-20 md:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-widest text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to work
          </motion.div>

          <motion.h1 variants={fadeUp}
            className="font-display text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight">
            <span className="block text-gradient-orange">Aadhithyan R</span>
            <span className="block"></span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            <span className="text-primary">Computer Science Engineering Student</span> · AI & Cybersecurity Enthusiast.
            Passionate about AI systems, cybersecurity, modern software development,
            and cinematic digital experiences.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_50px_-10px_var(--primary)]">
              <DownloadIcon className="h-4 w-4" /> Download CV
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a href="#projects"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover-glow">
              View projects <ArrowRightIcon className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
            {[
              { href: "https://github.com/aadhiiiiiiiii", Icon: GithubIcon, label: "GitHub" },
              { href: "https://www.linkedin.com/in/aadhithyan-rajesh-r-b58593334", Icon: LinkedinIcon, label: "LinkedIn" },
              { href: "mailto:aadhithyan935@gmail.com", Icon: MailIcon, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="glass grid h-11 w-11 place-items-center rounded-full transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_30px_-5px_var(--primary)]">
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
        >
          <div className="absolute -inset-10 rounded-full blur-3xl" style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 50%, transparent), transparent 60%)"
          }} />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] glow-ring">
            <FlipImage
              frontSrc={heroPortrait}
              backSrc={heroPortraitBack}
              frontAlt="Portrait of Aadhithyan R"
              backAlt="Aadhithyan R — alternate portrait"
              width={1024}
              height={1280}
              overlayClassName="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
            />
          </div>

          {/* floating chip */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong absolute -bottom-6 -left-6 rounded-2xl px-4 py-3 text-xs"
          >
            <div className="flex items-center gap-2 text-primary">
              <SparkIcon className="h-4 w-4" /> AI · Security · Cinema
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- Section wrapper ----------
function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}
      className="mb-14 max-w-3xl"
    >
      <motion.div variants={fadeUp} className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
        <span className="h-px w-8 bg-primary" /> {tag}
      </motion.div>
      <motion.h2 variants={fadeUp} className="text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </motion.h2>
      {sub && <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">{sub}</motion.p>}
    </motion.div>
  );
}

// ---------- About ----------
function About() {
  const items = ["AI Systems", "Cybersecurity", "Ethical Hacking", "Photography", "Videography", "Editing", "Game Development"];
  return (
    <section id="about" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="About" title="Building intelligent, secure, cinematic software." />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="glass rounded-3xl p-8 md:p-10">
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-foreground">B.Tech CSE student</span> at{" "}
              <span className="text-foreground">APJ Abdul Kalam Technological University</span>, currently in my{" "}
              <span className="text-primary">5th semester</span>. I love crafting systems where{" "}
              <span className="text-foreground">artificial intelligence</span>,{" "}
              <span className="text-foreground">cybersecurity</span>, and{" "}
              <span className="text-foreground">cinematic design</span> collide — building tools that feel as good as they work.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
              {[
                { k: "5th", v: "Semester" },
                { k: "10+", v: "Projects" },
                { k: "3", v: "Languages" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl font-semibold text-primary">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="glass rounded-3xl p-8 md:p-10">
            <motion.h3 variants={fadeUp} className="mb-6 text-sm uppercase tracking-[0.3em] text-primary">Interests</motion.h3>
            <div className="flex flex-wrap gap-2">
              {items.map((i) => (
                <motion.span key={i} variants={fadeUp}
                  className="glass rounded-full px-4 py-2 text-sm transition-all hover:border-primary/40 hover:text-primary">
                  {i}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------- Skills ----------
const skillGroups: { title: string; items: { name: string; level: number }[] }[] = [
  {
    title: "Programming", items: [
      { name: "Python", level: 90 }, { name: "C", level: 75 }, { name: "Java", level: 70 },
    ]
  },
  {
    title: "Web", items: [
      { name: "HTML", level: 92 }, { name: "CSS", level: 88 }, { name: "React", level: 82 }, { name: "Node.js", level: 75 },
    ]
  },
  {
    title: "Cybersecurity", items: [
      { name: "Kali Linux", level: 80 }, { name: "Burp Suite", level: 72 }, { name: "Wireshark", level: 70 }, { name: "Nmap", level: 78 },
    ]
  },
  {
    title: "Creative", items: [
      { name: "Photoshop", level: 85 }, { name: "Premiere Pro", level: 82 }, { name: "Lightroom", level: 80 },
      { name: "CapCut", level: 88 }, { name: "After Effects", level: 72 }, { name: "DaVinci Resolve", level: 78 },
    ]
  },
  {
    title: "Tools", items: [
      { name: "Git", level: 86 }, { name: "GitHub", level: 88 }, { name: "Linux", level: 82 },
      { name: "VS Code", level: 92 }, { name: "Firebase", level: 75 }, { name: "MongoDB", level: 78 },
    ]
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <motion.div variants={fadeUp} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground/90">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--primary-glow), var(--primary))",
            boxShadow: "0 0 12px color-mix(in oklab, var(--primary) 60%, transparent)",
          }}
        />
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="Skills" title="Technical & creative arsenal."
          sub="A blend of code, security tooling, and cinematic post-production craft." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={stagger}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-3xl p-7 hover-glow"
            >
              <motion.h3 variants={fadeUp} className="mb-6 text-sm uppercase tracking-[0.3em] text-primary">{g.title}</motion.h3>
              <div className="space-y-5">
                {g.items.map((s) => <SkillBar key={s.name} {...s} />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Projects ----------
type Project = {
  index: string; title: string; status: string;
  description: string; features: string[]; tech: string[];
  image: string; github: string; live?: string;
};
const projects: Project[] = [
  {
    index: "01", title: "JARVIS AI Assistant", status: "Ongoing",
    description: "A modular AI assistant inspired by intelligent virtual assistants — persistent memory, context-aware conversations, and a customizable personality architecture.",
    features: ["Long-term memory system", "Context-aware responses", "Modular architecture", "Personality engine", "AI integration"],
    tech: ["Python", "AI APIs", "JSON", "Prompt Engineering"],
    image: projectJarvis,
    github: "https://github.com/aadhiiiiiiiii",
  },
  {
    index: "02", title: "Epic24: The Time Capsule", status: "Completed",
    description: "A digital time capsule platform where users can preserve memories, messages, and digital moments for future access.",
    features: ["Memory preservation", "Interactive web experience", "Responsive UI", "Cloud deployment"],
    tech: ["React", "Node.js", "Firebase", "MongoDB"],
    image: projectEpic24,
    github: "https://github.com/aadhiiiiiiiii/epic24OG.git",
    live: "https://epic24og.onrender.com",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass group relative overflow-hidden rounded-3xl p-2 hover-glow"
    >
      <div className="grid gap-2 md:grid-cols-[1.1fr_1.4fr]">
        <div className="relative overflow-hidden rounded-2xl">
          <img src={p.image} alt={p.title} loading="lazy" width={1024} height={640}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 glass rounded-full px-3 py-1 text-xs">
            <span className="text-primary">{p.index}</span>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />{p.status}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>

          <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />{f}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-foreground/80">{t}</span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <a href={p.github} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition-colors hover:border-primary/50 hover:text-primary">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_var(--primary)]">
                <ExternalIcon className="h-4 w-4" /> Live site
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="Projects" title="Selected work."
          sub="Two ongoing builds at the intersection of AI, identity, and memory." />
        <div className="space-y-8">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

// ---------- Certifications + Activities + Languages ----------
function CertActivities() {
  const activities = ["Photography", "Cinematic Videography", "Video Editing", "Motion Graphics", "Cybersecurity Learning", "Independent AI Projects"];
  const languages = ["English", "Malayalam", "Tamil"];
  return (
    <section id="certifications" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="Beyond Code" title="Certifications, activities & languages." />
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cert */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass relative overflow-hidden rounded-3xl p-7 hover-glow">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl" style={{
              background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)"
            }} />
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                <span className="h-px w-6 bg-primary" /> Certification
              </div>
              <h3 className="text-2xl font-semibold">Digital 101</h3>
              <p className="mt-1 text-sm text-primary">FutureSkills Prime</p>
              <p className="mt-4 text-sm text-muted-foreground">A 30-hour foundational program covering digital fundamentals.</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full glass-strong">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Silver</span>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                  <div className="text-sm font-medium">30 Hours · Score 65–69%</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass rounded-3xl p-7 hover-glow">
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-6 bg-primary" /> Activities
            </div>
            <ul className="space-y-3 text-sm">
              {activities.map((a) => (
                <li key={a} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-foreground/90">{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-7 hover-glow">
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-6 bg-primary" /> Languages
            </div>
            <div className="space-y-4">
              {languages.map((l) => (
                <div key={l} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0">
                  <span className="text-foreground/90">{l}</span>
                  <span className="text-xs text-muted-foreground">Fluent</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact() {
  const items = [
    { Icon: MailIcon, label: "Email", value: "aadhithyan935@gmail.com", href: "mailto:aadhithyan935@gmail.com" },
    { Icon: PhoneIcon, label: "Phone", value: "+91 6235394059", href: "tel:+916235394059" },
    { Icon: MapPinIcon, label: "Location", value: "Trivandrum, Kerala" },
    { Icon: LinkedinIcon, label: "LinkedIn", value: "aadhithyan-rajesh-r", href: "https://www.linkedin.com/in/aadhithyan-rajesh-r-b58593334" },
    { Icon: GithubIcon, label: "GitHub", value: "aadhiiiiiiiii", href: "https://github.com/aadhiiiiiiiii" },
  ];
  return (
    <section id="contact" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-strong relative overflow-hidden rounded-[2rem] p-10 md:p-16">
          <div className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full blur-3xl" style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 40%, transparent), transparent 70%)"
          }} />
          <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full blur-3xl" style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)"
          }} />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                <span className="h-px w-8 bg-primary" /> Contact
              </div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Let's build something <span className="text-gradient-orange">cinematic</span>.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Have a project, collaboration, or just want to talk AI and cybersecurity? My inbox is open.
              </p>
              <a href="mailto:aadhithyan935@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_50px_-10px_var(--primary)]">
                <MailIcon className="h-4 w-4" /> Start a conversation
              </a>
            </div>
            <div className="space-y-3">
              {items.map(({ Icon, label, value, href }) => {
                const Inner = (
                  <div className="glass flex items-center gap-4 rounded-2xl p-4 transition-all hover:border-primary/40 hover:bg-white/[0.04]">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
                      <div className="truncate text-sm text-foreground/90">{value}</div>
                    </div>
                    {href && <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />}
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{Inner}</a>
                ) : (
                  <div key={label}>{Inner}</div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Aadhithyan R. Crafted with care.</div>
          <div>Designed & developed in Kerala, India.</div>
        </footer>
      </div>
    </section>
  );
}

// ---------- Page ----------
export function Portfolio() {
  return (
    <main className="relative min-h-screen">
      <AmbientBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Photography />
        <CertActivities />
        <Contact />
      </div>
    </main>
  );
}
