"use client";

import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile, type projects } from "@/data/profile";

const ease = [0.22, 0.7, 0.2, 1] as const;

/* Red-pen scribble under a phrase, drawn once on load. */
export function PenUnderline({ delay = 0.9 }: { delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <svg className="pen-underline" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true">
      <motion.path
        d="M4 14 C 70 6, 140 19, 210 10 S 282 8, 296 12"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
      />
      <motion.path
        d="M30 20 C 110 13, 190 22, 284 16"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.55, ease: "easeOut" }}
      />
    </svg>
  );
}

/* Handwritten margin note that writes itself on, left to right. */
export function PenNote({
  children,
  className,
  delay = 0.3,
  arrow,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  arrow?: "left" | "up" | "down";
}) {
  const reduce = useReducedMotion();
  const arrows = {
    left: "M46 8 C 34 4, 18 6, 6 16 M6 16 L 16 15 M6 16 L 9 6",
    up: "M8 40 C 6 28, 10 16, 20 6 M20 6 L 10 10 M20 6 L 21 17",
    down: "M8 4 C 6 16, 10 28, 20 38 M20 38 L 10 34 M20 38 L 22 27",
  };
  return (
    <motion.span
      className={`pen-note ${className ?? ""}`}
      aria-hidden="true"
      initial={reduce ? false : { clipPath: "inset(-20% 100% -20% 0)" }}
      whileInView={{ clipPath: "inset(-20% -5% -20% 0)" }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: "easeInOut" }}
    >
      {arrow && (
        <svg className={`pen-arrow ${arrow}`} viewBox="0 0 50 44" fill="none">
          <path d={arrows[arrow]} />
        </svg>
      )}
      <span>{children}</span>
    </motion.span>
  );
}

/* Gentle reveal for blocks entering the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Comp>
  );
}

/* An inked "approved" stamp that lands when it scrolls into view. */
export function Stamp({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className="stamp" style={{ transform: "rotate(-9deg)" }}>{children}</div>;
  return (
    <motion.div
      className="stamp"
      initial={{ opacity: 0, scale: 1.9, rotate: -22 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -9 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 520, damping: 24, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 1 — a decision tree drawn like a patent figure.                */
/* ------------------------------------------------------------------ */
const H = 40;
type Box = { ref: number; x: number; y: number; w: number; label: string };
const NODES: Box[] = [
  { ref: 10, x: 300, y: 50, w: 212, label: "Ships full-stack apps?" },
  { ref: 20, x: 410, y: 158, w: 224, label: "Explains its predictions?" },
  { ref: 30, x: 292, y: 266, w: 190, label: "Tests the backend?" },
  { ref: 40, x: 404, y: 374, w: 222, label: "Delivers under pressure?" },
];
const OUT: Box = { ref: 50, x: 286, y: 474, w: 160, label: "Strong fit" };
const LEAVES: Array<Box & { from: number }> = [
  { ref: 12, from: 0, x: 144, y: 158, w: 136, label: "Keep learning" },
  { ref: 22, from: 1, x: 512, y: 266, w: 106, label: "Black box" },
  { ref: 32, from: 2, x: 152, y: 374, w: 94, label: "Fragile" },
  { ref: 42, from: 3, x: 512, y: 474, w: 98, label: "Not yet" },
];
const PATH = [...NODES.slice(1), OUT].map((to, i) => ({ a: NODES[i], b: to }));
const BRANCHES = LEAVES.map((l) => ({ a: NODES[l.from], b: l as Box }));

const DESCRIPTION = [
  { ref: 10, q: "Ships full-stack apps?", a: "Yes. ClaimAssist runs on 39 REST APIs behind three role-based portals." },
  { ref: 20, q: "Explains its predictions?", a: "Yes. Its XGBoost model scores fraud risk from 0 to 100, and SHAP shows agents why." },
  { ref: 30, q: "Tests the backend?", a: "Yes. 75 automated pytest tests." },
  { ref: 40, q: "Delivers under pressure?", a: "Yes. Cognizant Hackathon finalist, and a 24-hour build at IIT Madras." },
  { ref: 50, q: "Outcome", a: "Strong fit for Full Stack and ML Engineer roles." },
];

function curve(a: Box, b: Box) {
  const y1 = a.y + H / 2;
  const y2 = b.y - H / 2;
  const m = (y1 + y2) / 2;
  return `M${a.x} ${y1} C${a.x} ${m}, ${b.x} ${m}, ${b.x} ${y2}`;
}

function Numeral({ b }: { b: Box }) {
  const left = b.x - b.w / 2;
  const top = b.y - H / 2;
  const nx = left - 22;
  const ny = top - 6;
  return (
    <g>
      <path className="t-lead" d={`M${nx + 2} ${ny + 3} Q ${nx + 12} ${ny + 2}, ${left + 6} ${top + 7}`} />
      <text className="t-num" x={nx} y={ny + 4} textAnchor="end">{b.ref}</text>
    </g>
  );
}

export function FigureOne() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [k, setK] = useState(reduce ? 5 : -1);
  const [run, setRun] = useState(0);
  const [hl, setHl] = useState<number | null>(null);

  useEffect(() => {
    if (reduce || !inView) return;
    setK(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setK(i);
      if (i >= 5) clearInterval(id);
    }, 700);
    return () => clearInterval(id);
  }, [inView, run, reduce]);

  const reached = (i: number) => k > i;

  return (
    <div className="fig1" ref={ref}>
      <div className="fig1-drawing">
        <svg viewBox="0 0 590 520" className="tree" role="img" aria-labelledby="fig1-cap">
          <defs>
            <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" />
              <feDisplacementMap in="SourceGraphic" scale="3.2" />
            </filter>
          </defs>

          {[...PATH, ...BRANCHES].map((e, i) => (
            <motion.path
              key={`e${i}`}
              className="t-edge"
              d={curve(e.a, e.b)}
              initial={reduce ? false : { pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : undefined}
              transition={{ duration: 0.8, delay: i * 0.06, ease }}
            />
          ))}

          {/* red-pen trace */}
          {PATH.map((e, i) => (
            <motion.path
              key={`p${i}`}
              className="t-pen"
              filter="url(#rough)"
              d={curve(e.a, e.b)}
              initial={false}
              animate={{ pathLength: reached(i) ? 1 : 0, opacity: reached(i) ? 1 : 0 }}
              transition={{ duration: reached(i) ? 0.55 : 0.2, ease: "easeInOut" }}
            />
          ))}

          {[...PATH.map((e) => ({ ...e, yes: true })), ...BRANCHES.map((e) => ({ ...e, yes: false }))].map((e, i) => (
            <text key={`l${i}`} className="t-label" x={(e.a.x + e.b.x) / 2} y={(e.a.y + e.b.y) / 2} dy="0.35em" textAnchor="middle">
              {e.yes ? "yes" : "no"}
            </text>
          ))}

          {LEAVES.map((l) => (
            <g key={l.ref} className="t-box t-leaf">
              <rect x={l.x - l.w / 2} y={l.y - H / 2} width={l.w} height={H} />
              <text x={l.x} y={l.y} dy="0.35em" textAnchor="middle">{l.label}</text>
              <Numeral b={l} />
            </g>
          ))}

          {NODES.map((n, i) => (
            <g key={n.ref} className={`t-box${hl === n.ref ? " hl" : ""}`}>
              <rect x={n.x - n.w / 2} y={n.y - H / 2} width={n.w} height={H} />
              <text x={n.x} y={n.y} dy="0.35em" textAnchor="middle">{n.label}</text>
              <Numeral b={n} />
              <motion.path
                className="t-pen t-check"
                filter="url(#rough)"
                d={`M${n.x + n.w / 2 + 9} ${n.y} l6 7 l13 -16`}
                initial={false}
                animate={{ pathLength: reached(i) ? 1 : 0, opacity: reached(i) ? 1 : 0 }}
                transition={{ duration: 0.3, delay: reached(i) ? 0.05 : 0 }}
              />
            </g>
          ))}

          <g className={`t-box t-out${hl === 50 ? " hl" : ""}`}>
            <rect x={OUT.x - OUT.w / 2 - 4} y={OUT.y - H / 2 - 4} width={OUT.w + 8} height={H + 8} />
            <rect x={OUT.x - OUT.w / 2} y={OUT.y - H / 2} width={OUT.w} height={H} />
            <text x={OUT.x} y={OUT.y} dy="0.35em" textAnchor="middle">{OUT.label}</text>
            <Numeral b={{ ...OUT, x: OUT.x - 4, w: OUT.w }} />
            <motion.ellipse
              className="t-pen"
              filter="url(#rough)"
              cx={OUT.x}
              cy={OUT.y}
              rx={OUT.w / 2 + 26}
              ry={H / 2 + 16}
              transform={`rotate(-4 ${OUT.x} ${OUT.y})`}
              initial={false}
              animate={{ pathLength: k >= 5 ? 1 : 0, opacity: k >= 5 ? 1 : 0 }}
              transition={{ duration: k >= 5 ? 0.7 : 0.2, ease: "easeInOut" }}
            />
          </g>
        </svg>
        <p className="fig-cap" id="fig1-cap">
          <span className="sc">Fig. 1</span>
        </p>
        <PenNote className="note-biased" delay={0.6} arrow="left">yes, it&apos;s a little biased</PenNote>
      </div>

      <div className="fig1-text">
        <p className="desc-intro">Referring to FIG. 1, the candidate enters at decision node 10 and is routed as follows.</p>
        <ol className="desc">
          {DESCRIPTION.map((d, i) => (
            <li
              key={d.ref}
              className={reached(i) || (i === 4 && k >= 5) ? "reached" : undefined}
              onPointerEnter={() => setHl(d.ref)}
              onPointerLeave={() => setHl(null)}
            >
              <span className="desc-ref">{d.ref}</span>
              <span>
                <strong>{d.q}</strong> {d.a}
              </span>
            </li>
          ))}
        </ol>
        <button type="button" className="retrace" onClick={() => setRun((r) => r + 1)}>
          Trace it again
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Work, as an expandable index.                                        */
/* ------------------------------------------------------------------ */
type Project = (typeof projects)[number];

export function WorkList({ items }: { items: Project[] }) {
  const [open, setOpen] = useState<number | null>(0);
  let para = 0;
  return (
    <div className="work-list">
      {items.map((p, i) => {
        const isOpen = open === i;
        const startPara = para;
        para += p.points.length;
        return (
          <article key={p.name} className={`work-row${isOpen ? " open" : ""}`}>
            <h3>
              <button
                type="button"
                className="work-head"
                aria-expanded={isOpen}
                aria-controls={`work-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="w-year">{p.year}</span>
                <span className="w-name">{p.name}</span>
                <span className="w-kind">{p.kind}</span>
                <span className="w-toggle" aria-hidden="true">+</span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`work-${i}`}
                  className="w-body-wrap"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <div className="w-body">
                    <ol className="w-points">
                      {p.points.map((pt, j) => (
                        <li key={pt}>
                          <span className="para">[{String(startPara + j + 1).padStart(4, "0")}]</span>
                          {pt}
                        </li>
                      ))}
                    </ol>
                    <div className="w-side">
                      {p.figures.length > 0 && (
                        <dl className="w-figs">
                          {p.figures.map((f) => (
                            <div key={f.label}>
                              <dt>{f.label}</dt>
                              <dd>{f.n}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      <p className="w-stack">
                        <span>Built with</span> {p.stack.join(", ")}
                      </p>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="w-link">
                          Read the code on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Reading progress: a thin red rule under the masthead.               */
/* ------------------------------------------------------------------ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/* Contact: the address is only assembled in the browser, on click.    */
/* ------------------------------------------------------------------ */
const SUBJECT = "Hello from your portfolio";
const BODY = "Hi Niranjan,\n\nI came across your portfolio and would like to talk about ";

function address() {
  return `${profile.emailUser}@${profile.emailDomain}`;
}

export function ContactActions() {
  const [copied, setCopied] = useState(false);

  const openMail = (e: React.MouseEvent) => {
    e.preventDefault();
    const q = `subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
    window.location.href = `mailto:${address()}?${q}`;
  };

  const openGmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(address())}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address());
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked; the mail buttons still work */
    }
  };

  return (
    <div className="contact-actions">
      <a href="#contact" className="mail-btn" onClick={openMail}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
          <path d="m3.8 6.6 8.2 6.2 8.2-6.2" />
        </svg>
        <span>Write me an email</span>
        <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h13m-5-5 5 5-5 5" />
        </svg>
      </a>
      <p className="mail-alt">
        Opens a new draft in your mail app.{" "}
        <a href="#contact" onClick={openGmail}>Use Gmail instead</a>
        <span aria-hidden="true"> · </span>
        <button type="button" onClick={copy} className="linklike">
          {copied ? "Address copied" : "Copy address"}
        </button>
        <span className="sr-only" aria-live="polite">{copied ? "Email address copied to clipboard" : ""}</span>
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 3 — the baby chair with airbag, drawn as a patent sheet.        */
/* ------------------------------------------------------------------ */
const CHAIR_LINES = [
  // backrest
  "M176 246 L154 104 Q151 82 172 82 L180 82 Q199 82 201 104 L214 246",
  // seat
  "M168 246 H336 Q344 246 344 254 V262 Q344 270 336 270 H168 Q160 270 160 262 V254 Q160 246 168 246 Z",
  // legs
  "M186 270 L138 438", "M204 270 L170 438",
  "M318 270 L366 438", "M300 270 L334 438",
  // footrest bar
  "M160 362 H346",
  // tray support
  "M330 246 L338 214",
  // tray
  "M246 202 H412 Q420 202 420 208 V210 Q420 216 412 216 H246 Z",
  // inflator module
  "M352 216 h40 v20 h-40 Z",
];
const AIRBAG = "M232 198 C 214 170, 220 126, 250 112 C 280 98, 320 112, 330 140 C 340 168, 330 192, 312 200";
const HARNESS = "M200 168 C 232 186, 250 214, 262 246";
const FLOOR = "M100 440 H440";

const CALLOUTS: Array<{ n: number; x: number; y: number; tx: number; ty: number; end?: "start" | "end" }> = [
  { n: 102, x: 160, y: 120, tx: 96, ty: 104, end: "end" },
  { n: 104, x: 200, y: 258, tx: 96, ty: 292, end: "end" },
  { n: 106, x: 148, y: 400, tx: 96, ty: 404, end: "end" },
  { n: 108, x: 290, y: 107, tx: 340, ty: 70 },
  { n: 110, x: 236, y: 198, tx: 118, ty: 50, end: "end" },
  { n: 112, x: 392, y: 226, tx: 452, ty: 250 },
  { n: 114, x: 400, y: 209, tx: 452, ty: 182 },
  { n: 116, x: 262, y: 362, tx: 256, ty: 404 },
];

export function FigureThree() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const draw = (delay: number, dur = 0.9) => ({
    initial: reduce ? false : { pathLength: 0 },
    animate: inView || reduce ? { pathLength: 1 } : undefined,
    transition: { duration: dur, delay, ease },
  });

  return (
    <div className="fig3" ref={ref}>
      <svg viewBox="40 30 470 430" className="chair" role="img" aria-labelledby="fig3-cap fig3-desc">
        <desc id="fig3-desc">
          Side view of a baby high chair. An airbag, shown inflated as a dashed outline, sits above the tray in front of
          the child; an inflator module is mounted under the tray.
        </desc>
        <motion.path className="c-floor" d={FLOOR} {...draw(0, 0.6)} />
        {CHAIR_LINES.map((d, i) => (
          <motion.path key={i} className="c-line" d={d} {...draw(0.1 + i * 0.07)} />
        ))}
        <motion.path className="c-strap" d={HARNESS} {...draw(1)} />
        <motion.path className="c-bag" d={AIRBAG} {...draw(1.3, 1.1)} />
        <motion.g
          initial={reduce ? false : { opacity: 0 }}
          animate={inView || reduce ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6, delay: 1.9 }}
        >
          {/* hatch on the inflator */}
          {[0, 1, 2, 3].map((i) => (
            <path key={i} className="c-hatch" d={`M${356 + i * 9} 234 l8 -16`} />
          ))}
          {CALLOUTS.map((c) => (
            <g key={c.n}>
              <path className="t-lead" d={`M${c.x} ${c.y} Q ${(c.x + c.tx) / 2} ${c.ty + (c.y > c.ty ? 6 : -6)}, ${c.tx} ${c.ty}`} />
              <text className="t-num" x={c.tx + (c.end === "end" ? -4 : 4)} y={c.ty} dy="0.35em" textAnchor={c.end ?? "start"}>
                {c.n}
              </text>
            </g>
          ))}
        </motion.g>
      </svg>
      <p className="fig-cap" id="fig3-cap"><span className="sc">Fig. 3</span></p>
    </div>
  );
}
