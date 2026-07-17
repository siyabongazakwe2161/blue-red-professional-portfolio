import { createFileRoute } from "@tanstack/react-router";
import cvAsset from "@/assets/cv.asset.json";
import heroPortrait from "@/assets/hero-portrait.jpg";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Award,
  Wrench,
  Users,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const TECH_SKILLS = [
  { name: "Microsoft Office Suite", level: 90 },
  { name: "Administrative Systems", level: 88 },
  { name: "Project Management", level: 80 },
  { name: "Events Design & Planning", level: 85 },
  { name: "Marketing Strategy", level: 75 },
  { name: "Customer Service Systems", level: 92 },
];

const SOFT_SKILLS = [
  "Diligent Worker",
  "Attentive Listener",
  "Creative Thinker",
  "Well Organized",
  "Self-Motivated",
  "Team Player",
  "Time Management",
  "Multi-lingual Communicator",
];

const PROJECTS = [
  {
    title: "Corporate Events Coordination",
    description:
      "Planned and executed multiple client events end-to-end — from concept and vendor management to on-site coordination and post-event reporting.",
    tech: ["Project Management", "Vendor Ops", "Budgeting"],
    tag: "Events Management",
  },
  {
    title: "Autoglass Admin Digitisation",
    description:
      "Streamlined the admin workflow at Pay Later Autoglass — job cards, customer records and invoicing — cutting average paperwork turnaround dramatically.",
    tech: ["Excel", "Admin Systems", "Customer Records"],
    tag: "Operations",
  },
  {
    title: "Community Fitness Program",
    description:
      "Designed structured fitness programs at Gym Company, coaching members through progressive strength, mobility and cardio blocks over 2 years.",
    tech: ["Coaching", "Program Design", "Client Success"],
    tag: "Fitness",
  },
];

const EXPERIENCE = [
  {
    role: "Windscreen Fitter & Admin Clerk",
    company: "Pay Later Autoglass",
    period: "2021 — Present",
    points: [
      "Fit and replace windscreens to spec with strict quality and safety standards.",
      "Handle daily admin: job cards, invoicing, customer records and stock tracking.",
      "Coordinate with technicians and customers to keep turnaround times short.",
    ],
  },
  {
    role: "Fitness Instructor",
    company: "Gym Company",
    period: "2019 — 2021",
    points: [
      "Delivered group and one-on-one fitness sessions across all experience levels.",
      "Designed personalised training programs and tracked measurable progress.",
      "Built long-term client relationships through consistent, motivating coaching.",
    ],
  },
  {
    role: "Customer Service, Sales & Marketing",
    company: "Rifle Range Weekend Market",
    period: "Dec 2018 (Weekend)",
    points: [
      "Served customers at a high-volume weekend market environment.",
      "Supported sales and light marketing activities on the trading floor.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Varsity College (IIE)",
    qualification: "Higher Certificate in Events Management",
    detail:
      "Project Management · Public Management · Business Communication · Business Principles · Marketing Strategies · Events Design · Academic Digital Literacy",
  },
  {
    school: "Mondeor High School",
    qualification: "National Senior Certificate (Matric) — 2018",
    detail:
      "English · IsiZulu · Mathematics Literacy · History · Business Studies · Geography · Life Orientation",
  },
];

const CERTIFICATIONS = [
  {
    title: "IIE Higher Certificate in Events Management",
    issuer: "Varsity College (Independent Institute of Education)",
  },
  {
    title: "National Senior Certificate",
    issuer: "Department of Basic Education, South Africa",
  },
  {
    title: "Fitness Instructor — On-the-job Certification",
    issuer: "Gym Company",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            SZ
          </span>
          <span className="hidden sm:inline">Siyabonga Zakwe</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={cvAsset.url}
          download="Siyabonga_Zakwe_CV.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download CV</span>
          <span className="sm:hidden">CV</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.3fr_1fr] md:py-32">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for opportunities
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            Siyabonga <span className="text-primary">Shaun</span> Zakwe.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Events Management professional, administrator and fitness instructor
            based in Johannesburg. Organised, proactive and obsessed with
            delivering high-quality work — on time, every time.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={cvAsset.url}
              download="Siyabonga_Zakwe_CV.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 text-white">
            <Stat value="5+" label="Years working" />
            <Stat value="3" label="Industries" />
            <Stat value="100%" label="Committed" />
          </dl>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-6 rounded-2xl bg-primary/30 blur-3xl" />
          <img
            src={heroPortrait}
            alt="Portrait illustration of Siyabonga Zakwe"
            width={1024}
            height={1280}
            className="relative w-full max-w-sm rounded-2xl border border-white/10 object-cover shadow-[var(--shadow-elevated)]"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl font-bold">{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-widest text-white/60">{label}</dd>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-24 ${className}`}>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title="Organised, proactive, and built to deliver."
      />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I have extensive experience in voluntary administrative work,
            hands-on trades and time-sensitive operations across both the
            private and public sectors. I'm highly organised, efficient and
            proactive under pressure.
          </p>
          <p>
            Combining customer service, computer knowledge and administrative
            skill, I deliver high-quality work consistently — meeting deadlines
            and maintaining strict confidentiality along the way.
          </p>
          <p>
            I'm now looking for a new opportunity to apply my technical
            expertise and interpersonal skills within a company with strong
            growth prospects.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ValueCard icon={<Sparkles className="h-5 w-5" />} title="Diligent" text="Detail-driven, deadline-first work ethic." />
          <ValueCard icon={<Users className="h-5 w-5" />} title="People-first" text="Strong customer service across sectors." />
          <ValueCard icon={<Wrench className="h-5 w-5" />} title="Hands-on" text="Practical, technical and adaptable." />
          <ValueCard icon={<Award className="h-5 w-5" />} title="Reliable" text="Confidentiality and quality, every time." />
        </div>
      </div>
    </Section>
  );
}

function ValueCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
      <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/15 text-primary">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function Skills() {
  return (
    <Section id="skills" className="border-t border-border/60">
      <SectionHeader
        eyebrow="Skills"
        title="Technical craft & the way I work."
        description="A blend of administrative know-how, events execution and people skills refined across five years in the field."
      />
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Technical
          </h3>
          <ul className="space-y-5">
            {TECH_SKILLS.map((s) => (
              <li key={s.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${s.level}%`, background: "var(--gradient-accent)" }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Personal Attributes
          </h3>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Languages</p>
            <p className="mt-2 font-display text-2xl font-semibold">Multi-lingual</p>
            <p className="mt-1 text-sm text-muted-foreground">English · IsiZulu</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" className="border-t border-border/60">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work & initiatives."
        description="Real-world engagements that shaped how I plan, execute and support teams."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
          >
            <div
              className="h-40 w-full"
              style={{ background: "var(--gradient-accent)" }}
            >
              <div className="flex h-full items-end p-5">
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                  {p.tag}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" className="border-t border-border/60">
      <SectionHeader eyebrow="Experience" title="Where I've worked." />
      <ol className="relative space-y-10 border-l border-border pl-8">
        {EXPERIENCE.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-primary">
              <Briefcase className="h-4 w-4" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">{e.role}</h3>
              <span className="text-sm text-muted-foreground">{e.period}</span>
            </div>
            <p className="mt-1 text-primary">{e.company}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" className="border-t border-border/60">
      <SectionHeader eyebrow="Education" title="Academic background." />
      <div className="grid gap-6 md:grid-cols-2">
        {EDUCATION.map((ed) => (
          <div
            key={ed.school}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-md bg-primary/15 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold">{ed.qualification}</h3>
            <p className="mt-1 text-primary">{ed.school}</p>
            <p className="mt-3 text-sm text-muted-foreground">{ed.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" className="border-t border-border/60">
      <SectionHeader eyebrow="Certifications" title="Credentials." />
      <div className="grid gap-4 md:grid-cols-3">
        {CERTIFICATIONS.map((c) => (
          <div
            key={c.title}
            className="flex gap-4 rounded-xl border border-border bg-card p-5"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" className="border-t border-border/60">
      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid gap-10 p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Let's build something.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Open to full-time roles, internships and freelance events or
              administrative work. I'll get back to you within 24 hours.
            </p>
            <div className="mt-8 space-y-3">
              <ContactRow icon={<Mail className="h-4 w-4" />} label="siyabongazakwe2162@gmail.com" href="mailto:siyabongazakwe2162@gmail.com" />
              <ContactRow icon={<Phone className="h-4 w-4" />} label="+27 65 987 6356" href="tel:+27659876356" />
              <ContactRow icon={<MapPin className="h-4 w-4" />} label="Naturena Ext 19, Johannesburg" />
            </div>
            <div className="mt-8 flex gap-3">
              <SocialLink icon={<Github className="h-4 w-4" />} href="https://github.com" label="GitHub" />
              <SocialLink icon={<Linkedin className="h-4 w-4" />} href="https://linkedin.com" label="LinkedIn" />
              <a
                href={cvAsset.url}
                download="Siyabonga_Zakwe_CV.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" /> CV
              </a>
            </div>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const body = encodeURIComponent(
                `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:siyabongazakwe2162@gmail.com?subject=Portfolio enquiry&body=${body}`;
            }}
          >
            <Field name="name" label="Your name" placeholder="Jane Doe" />
            <Field name="email" label="Email" type="email" placeholder="jane@company.com" />
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the opportunity…"
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              Send message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const inner = (
    <span className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-muted text-primary">
        {icon}
      </span>
      {label}
    </span>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function SocialLink({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
    >
      {icon} {label} <ExternalLink className="h-3 w-3 opacity-60" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Siyabonga Shaun Zakwe. Built with care in Johannesburg.
    </footer>
  );
}
