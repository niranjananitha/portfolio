import Image from "next/image";
import { patentImages, profile, projects, skills, timeline } from "@/data/profile";
import {
  ContactActions,
  FigureOne,
  FigureThree,
  PenNote,
  PenUnderline,
  Reveal,
  ScrollProgress,
  Stamp,
  WorkList,
} from "@/components/patent";

const claims = [
  <>An engineer comprising a FastAPI backend, a MySQL database, a React and Next.js frontend, and an XGBoost model whose predictions are explained with SHAP.</>,
  <>The engineer of claim 1, selected as a <strong>finalist at the Cognizant Hackathon</strong> for a system that predicts medical equipment failure in real time from 12+ telemetry parameters across 20,000+ records.</>,
  <>The engineer of claim 2, wherein the engineer built the XGBoost risk-scoring model from scratch, covering preprocessing, feature engineering, training and evaluation, and the FastAPI service and MySQL database that serve it.</>,
  <>The engineer of claim 1, having built a <strong>real-time credit risk system in 24 hours</strong> at the INDUSTRI AI Hackathon, IIT Madras.</>,
  <>The engineer of claim 1, wherein authentication uses JWT refresh-token rotation, Argon2 password hashing and role-based access control.</>,
  <>The engineer of claim 1, holding a <strong>design patent</strong> for a baby chair with an airbag for child safety (August 2024), shown in FIG. 3.</>,
  <>The engineer of claim 1, certified in Microsoft Azure Fundamentals (June 2025) and AWS Cloud Practitioner Essentials (February 2025), and having completed Deloitte Australia&apos;s Data Analytics Job Simulation (January 2026).</>,
];

const chairParts = [
  { n: 102, name: "Backrest" },
  { n: 104, name: "Seat" },
  { n: 106, name: "Legs" },
  { n: 108, name: "Airbag, shown deployed in front of the child" },
  { n: 110, name: "Harness" },
  { n: 112, name: "Inflator module" },
  { n: 114, name: "Tray" },
  { n: 116, name: "Footrest bar" },
];

const RESUME_NAME = "Niranjan_P_N_Resume.pdf";

const links = [
  { label: "GitHub", value: "github.com/niranjananitha", href: profile.github },
  { label: "LinkedIn", value: "linkedin.com/in/niranjan-p-n", href: profile.linkedin },
  { label: "LeetCode", value: "leetcode.com/u/Niranjananitha", href: profile.leetcode },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">Skip to work</a>

      <header className="masthead" id="top">
        <div className="wrap masthead-in">
          <a href="#top" className="name">
            Niranjan P N
            <span className="name-role">{profile.role}</span>
          </a>
          <nav aria-label="Sections">
            <a href="#fig1" className="opt">Why me</a>
            <a href="#work">Work</a>
            <a href="#patent" className="opt">Patent</a>
            <a href="#history" className="opt">Record</a>
            <a href="#contact">Contact</a>
            <a href={profile.resume} download={RESUME_NAME} className="nav-resume">Resume</a>
          </nav>
        </div>
        <ScrollProgress />
      </header>

      <main>
        <section className="front wrap" aria-labelledby="title">
          <div className="docline">
            <p><span className="code">(19)</span> Portfolio of Niranjan P N</p>
            <p><span className="code">(10)</span> No. NPN-2027-AIML</p>
            <p><span className="code">(45)</span> Available from May 2027</p>
          </div>

          <div className="title-wrap">
            <p className="kicker"><span className="code">(54)</span> Full Stack &amp; ML Engineer</p>
            <h1 id="title">
              I build full-stack apps whose machine learning can{" "}
              <span className="pen-target">
                explain itself
                <PenUnderline />
              </span>
              .
            </h1>
            <PenNote className="note-shap" delay={1.7} arrow="left">that&apos;s what SHAP is for</PenNote>
          </div>

          <div className="front-grid">
            <Reveal delay={0.2}>
              <dl className="inid">
                <div>
                  <dt><span className="code">(72)</span> Inventor</dt>
                  <dd>Niranjan P N, Coimbatore, Tamil Nadu</dd>
                </div>
                <div>
                  <dt><span className="code">(73)</span> Assignee</dt>
                  <dd>Your team, ideally. I&apos;m looking for Full Stack and ML Engineer roles.</dd>
                </div>
                <div>
                  <dt><span className="code">(60)</span> Background</dt>
                  <dd>B.E. in Artificial Intelligence and Machine Learning, Sri Krishna College of Technology, 2023 to 2027</dd>
                </div>
                <div>
                  <dt><span className="code">(74)</span> Correspondence</dt>
                  <dd><a href="#contact" className="arrow-link">Send me a message <span aria-hidden="true">↓</span></a></dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.3} className="abstract">
              <p className="inid-label"><span className="code">(57)</span> Abstract</p>
              <p>
                I&apos;m a final-year AI &amp; ML student who builds the whole thing: FastAPI and MySQL on the back end,
                React and Next.js on the front, and XGBoost models in the middle that show their reasoning with SHAP.
              </p>
              <p>
                My largest project, ClaimAssist, is an insurance claims platform with 39 REST APIs, a nine-stage claim
                workflow and 75 automated tests. I was also a finalist at the Cognizant Hackathon, and I hold a design
                patent.
              </p>
              <ul className="facts" aria-label="At a glance">
                <li><b>39</b> REST APIs in ClaimAssist</li>
                <li><b>75</b> pytest tests</li>
                <li><b>1</b> design patent</li>
              </ul>
            </Reveal>

            <Reveal delay={0.4} className="fig2">
              <figure>
                <Image
                  src="/me.jpg"
                  alt="Illustrated portrait of Niranjan standing in front of palm trees"
                  width={880}
                  height={1168}
                  sizes="(max-width: 900px) 60vw, 260px"
                  priority
                />
                <figcaption><span className="sc">Fig. 2</span></figcaption>
              </figure>
              <PenNote className="note-me" delay={2.2} arrow="up">me, but illustrated</PenNote>
            </Reveal>
          </div>
        </section>

        <section id="fig1" className="sheet wrap" aria-labelledby="fig1-h">
          <div className="sheet-head">
            <p className="sheet-no">Sheet 1 of 6</p>
            <h2 id="fig1-h">Fig. 1: Why I&apos;m a fit</h2>
            <p>
              If a hiring decision about me were made by a decision tree, the same kind of model inside my XGBoost
              projects, this is how it would go. Each box is a question a recruiter might ask. The red line is my path,
              and the list beside it shows the evidence for every yes.
            </p>
          </div>
          <FigureOne />
        </section>

        <section id="work" className="sheet wrap" aria-labelledby="work-h">
          <div className="sheet-head">
            <p className="sheet-no">Sheet 2 of 6</p>
            <h2 id="work-h">Description of the work</h2>
            <p>Three projects from 2025 and 2026. Open one to read what I built and how.</p>
          </div>
          <WorkList items={projects} />
        </section>

        <section id="patent" className="sheet wrap" aria-labelledby="patent-h">
          <div className="sheet-head">
            <p className="sheet-no">Sheet 3 of 6</p>
            <h2 id="patent-h">Fig. 3: The patent I hold</h2>
            <p>
              A design patent, granted in August 2024, for a baby chair with a built-in airbag. It&apos;s where the
              format of this page comes from.
            </p>
          </div>

          <div className="patent">
            <div className="patent-drawing">
              <FigureThree />
              <PenNote className="note-chair" delay={2.4} arrow="up">safety first, literally</PenNote>
            </div>

            <div className="patent-text">
              <dl className="patent-meta">
                <div><dt>Type</dt><dd>Design patent</dd></div>
                <div><dt>Granted</dt><dd>August 2024</dd></div>
                <div><dt>Field</dt><dd>Child safety</dd></div>
              </dl>
              <p className="desc-intro">Referring to FIG. 3, the chair comprises:</p>
              <ol className="desc parts">
                {chairParts.map((p) => (
                  <li key={p.n}>
                    <span className="desc-ref">{p.n}</span>
                    <span>{p.name}</span>
                  </li>
                ))}
              </ol>
              <p className="fig-note">Simplified drawing for illustration. The registered design is on the certificate.</p>
            </div>
          </div>

          {patentImages.length > 0 && (
            <div className="certs">
              {patentImages.map((img, i) => (
                <Reveal key={img.src} delay={i * 0.08}>
                  <figure className="cert">
                    <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 760px) 100vw, 50vw" />
                    <figcaption><span className="sc">Exhibit {String.fromCharCode(65 + i)}</span></figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
        </section>

        <section id="claims" className="sheet wrap" aria-labelledby="claims-h">
          <div className="sheet-head">
            <p className="sheet-no">Sheet 4 of 6</p>
            <h2 id="claims-h">Claims</h2>
            <p>The rest of my resume, written in the format of the one patent I hold.</p>
          </div>
          <p className="claims-intro">What is claimed is:</p>
          <ol className="claims">
            {claims.map((c, i) => (
              <Reveal as="li" key={i} delay={i * 0.04}>
                <span>{c}</span>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="sheet wrap" aria-labelledby="mat-h">
          <div className="sheet-head">
            <p className="sheet-no">Sheet 5 of 6</p>
            <h2 id="mat-h">Materials and methods</h2>
            <p>The tools I reach for, grouped by the job they do.</p>
          </div>
          <dl className="materials">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  <ul className="tags">
                    {s.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="history" className="sheet wrap" aria-labelledby="history-h">
          <div className="sheet-head">
            <p className="sheet-no">Sheet 6 of 6</p>
            <h2 id="history-h">Prosecution history</h2>
            <p>Hackathons, certificates and the patent, newest first. In patent language, the file record.</p>
          </div>
          <ol className="history">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 0.04}>
                <span className="h-date">{t.date}</span>
                <span className={`h-kind k-${t.kind.toLowerCase()}`}>{t.kind}</span>
                <span className="h-body">
                  <strong>{t.title}</strong>
                  <span>{t.note}</span>
                </span>
              </Reveal>
            ))}
          </ol>
        </section>

        <section id="contact" className="sheet wrap contact" aria-labelledby="contact-h">
          <div className="sheet-head">
            <p className="sheet-no">Correspondence</p>
            <h2 id="contact-h">Let&apos;s talk.</h2>
            <p>
              If you&apos;re hiring for a Full Stack or ML Engineer role, or want to talk about one of these projects,
              the button below opens a ready-to-send email.
            </p>
          </div>
          <div className="contact-grid">
            <div>
              <ContactActions />
              <dl className="links">
                {links.map((l) => (
                  <div key={l.label}>
                    <dt>{l.label}</dt>
                    <dd>
                      <a href={l.href} target="_blank" rel="noreferrer">
                        {l.value} <span aria-hidden="true">↗</span>
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
              <a className="resume-btn" href={profile.resume} download={RESUME_NAME}>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 3v10m0 0-4-4m4 4 4-4M4 16h12" />
                </svg>
                Download resume
                <span className="resume-meta">PDF, 125 KB</span>
              </a>
            </div>
            <div className="stamp-wrap">
              <Stamp>
                Strong fit
                <small>Reviewed, 2026</small>
              </Stamp>
            </div>
          </div>
        </section>
      </main>

      <footer className="colophon wrap">
        <p>Set in Source Serif 4, with margin notes in Caveat. Built with Next.js.</p>
        <p>© {new Date().getFullYear()} Niranjan P N</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
