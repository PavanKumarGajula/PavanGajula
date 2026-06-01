import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pavan Gajula — Java Full Stack Developer in Maryland. 5+ years shipping enterprise systems and websites.",
};

const proficientSkills = [
  "Python", "Kotlin", "Scala", "C / C++", "Hadoop", "Apache Storm",
  "Apache Solr", "JMS", "ActiveMQ", "IBM MQ", "Mockito", "Log4j",
  "Tomcat", "WebSphere", "Postman", "jQuery", "JSP/JSTL",
];

export default function AboutPage() {
  return (
    <div className="page">
      <div className="container">

        <header className="page-header">
          <div className="page-eyebrow">ABOUT</div>
          <h1 className="page-title">
            Engineer by <span className="serif">craft</span>.
          </h1>
          <p className="page-subtitle">
            Java by day. Small websites by night. Curious about everything in between.
          </p>
        </header>

        <section className="about-section">
          <div className="about-grid">

            {/* SIDEBAR */}
            <aside className="about-side">
              <div className="about-photo">
                <Image
                  src="/photo.jpg"
                  alt="Pavan Gajula"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
              <div className="about-meta">
                <div><strong>Pavan Kumar Gajula</strong></div>
                <div>Elkridge, MD &middot; US</div>
                <div style={{ marginTop: "14px" }}>Java Full Stack Developer</div>
                <div>Synack Solutions LLC</div>
                <div style={{ marginTop: "14px" }}>M.S. Software Engineering</div>
                <div>UMBC &middot; GPA 3.53</div>
                <div>
                  <a href="mailto:pavangajula1998@gmail.com">
                    pavangajula1998@gmail.com
                  </a>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="about-content">

              <h2>The short version</h2>
              <p>
                I&apos;m a Java Full Stack Developer with <strong>5+ years</strong>{" "}
                shipping enterprise applications &mdash; Spring Boot microservices,
                Angular and React frontends, Kafka pipelines, AWS deployments, and
                CI/CD on Jenkins. Currently at <strong>Synack Solutions</strong> in
                Maryland, after two years at <strong>TCS</strong> contributing to a
                platform serving 10,000+ users across 10+ international markets.
              </p>
              <p>
                On the side, I&apos;ve shipped <strong>three production websites</strong>{" "}
                &mdash; including a youth sports nonprofit serving 200+ athletes with
                Stripe payments, where I&apos;ve contributed 450+ volunteer hours. The
                day job and the side work feed each other. Enterprise systems teach me
                what stays the same; small client work teaches me what changes. Both
                teach me where developers, tools, and AI assistants quietly trip over
                each other &mdash; which is the thing I keep noticing, and the thing I
                want to study seriously.
              </p>

              <h2>What I&apos;m interested in</h2>
              <p>Three threads I keep pulling on, lately:</p>
              <ul>
                <li>
                  <strong>Human-AI interaction</strong> &mdash; how developers
                  calibrate trust in AI coding assistants, and what they pay (in
                  time and attention) to verify them
                </li>
                <li>
                  <strong>Developer tools</strong> &mdash; interfaces that make
                  AI-generated code easier to inspect, review, and reason about
                </li>
                <li>
                  <strong>Programmer experience</strong> &mdash; what changes about
                  thinking, skill, and understanding when the assistant writes more
                  of the code
                </li>
              </ul>

              <h2>Stack</h2>

              <div className="stack-block">
                <div className="stack-label">BACKEND &middot; PROFESSIONAL</div>
                <div className="skill-grid">
                  <div className="skill-tag"><i className="devicon-java-plain colored"></i><span className="tag-name">Java 8/11/17</span></div>
                  <div className="skill-tag"><i className="devicon-spring-plain colored"></i><span className="tag-name">Spring Boot</span></div>
                  <div className="skill-tag"><i className="devicon-spring-plain colored"></i><span className="tag-name">Spring Security</span></div>
                  <div className="skill-tag"><i className="devicon-spring-plain colored"></i><span className="tag-name">Spring Data JPA</span></div>
                  <div className="skill-tag"><i className="devicon-hibernate-plain colored"></i><span className="tag-name">Hibernate</span></div>
                  <div className="skill-tag"><i className="devicon-nodejs-plain colored"></i><span className="tag-name">Node.js</span></div>
                  <div className="skill-tag"><i className="devicon-apachekafka-original colored icon-white"></i><span className="tag-name">Kafka</span></div>
                  <div className="skill-tag"><i className="devicon-apachespark-plain colored"></i><span className="tag-name">Spark</span></div>
                </div>
              </div>

              <div className="stack-block">
                <div className="stack-label">FRONTEND</div>
                <div className="skill-grid">
                  <div className="skill-tag"><i className="devicon-react-original colored"></i><span className="tag-name">React</span></div>
                  <div className="skill-tag"><i className="devicon-angularjs-plain colored"></i><span className="tag-name">Angular 2–8</span></div>
                  <div className="skill-tag"><i className="devicon-javascript-plain colored"></i><span className="tag-name">JavaScript ES6+</span></div>
                  <div className="skill-tag"><i className="devicon-typescript-plain colored"></i><span className="tag-name">TypeScript</span></div>
                  <div className="skill-tag"><i className="devicon-tailwindcss-plain colored"></i><span className="tag-name">Tailwind</span></div>
                  <div className="skill-tag"><i className="devicon-html5-plain colored"></i><span className="tag-name">HTML5</span></div>
                  <div className="skill-tag"><i className="devicon-css3-plain colored"></i><span className="tag-name">CSS3</span></div>
                  <div className="skill-tag"><i className="devicon-sass-original colored"></i><span className="tag-name">LESS/SCSS</span></div>
                </div>
              </div>

              <div className="stack-block">
                <div className="stack-label">CLOUD &middot; DEVOPS</div>
                <div className="skill-grid">
                  <div className="skill-tag">
                    <i className="devicon-amazonwebservices-plain-wordmark colored" style={{ color: "#FF9900" }}></i>
                    <span className="tag-name">AWS</span>
                  </div>
                  <div className="skill-tag"><i className="devicon-azure-plain colored"></i><span className="tag-name">Azure</span></div>
                  <div className="skill-tag"><i className="devicon-docker-plain colored"></i><span className="tag-name">Docker</span></div>
                  <div className="skill-tag"><i className="devicon-kubernetes-plain colored"></i><span className="tag-name">Kubernetes</span></div>
                  <div className="skill-tag"><i className="devicon-jenkins-plain colored"></i><span className="tag-name">Jenkins</span></div>
                  <div className="skill-tag"><i className="devicon-ansible-plain colored"></i><span className="tag-name">Ansible</span></div>
                  <div className="skill-tag"><i className="devicon-redhat-plain colored"></i><span className="tag-name">OpenShift</span></div>
                  <div className="skill-tag"><i className="devicon-linux-plain colored"></i><span className="tag-name">Linux</span></div>
                </div>
              </div>

              <div className="stack-block">
                <div className="stack-label">DATABASES</div>
                <div className="skill-grid">
                  <div className="skill-tag"><i className="devicon-oracle-original colored"></i><span className="tag-name">Oracle PL/SQL</span></div>
                  <div className="skill-tag"><i className="devicon-postgresql-plain colored"></i><span className="tag-name">PostgreSQL</span></div>
                  <div className="skill-tag"><i className="devicon-mysql-plain colored"></i><span className="tag-name">MySQL</span></div>
                  <div className="skill-tag"><i className="devicon-microsoftsqlserver-plain colored"></i><span className="tag-name">SQL Server</span></div>
                  <div className="skill-tag"><i className="devicon-mongodb-plain colored"></i><span className="tag-name">MongoDB</span></div>
                </div>
              </div>

              <div className="stack-block">
                <div className="stack-label">TESTING &middot; TOOLS</div>
                <div className="skill-grid">
                  <div className="skill-tag"><i className="devicon-junit-plain colored"></i><span className="tag-name">JUnit 5</span></div>
                  <div className="skill-tag"><i className="devicon-selenium-original colored"></i><span className="tag-name">Selenium</span></div>
                  <div className="skill-tag"><i className="devicon-sonarqube-original colored"></i><span className="tag-name">SonarQube</span></div>
                  <div className="skill-tag">
                    <i className="devicon-maven-plain colored" style={{ color: "#C71A36" }}></i>
                    <span className="tag-name">Maven</span>
                  </div>
                  <div className="skill-tag"><i className="devicon-gradle-plain colored"></i><span className="tag-name">Gradle</span></div>
                  <div className="skill-tag"><i className="devicon-git-plain colored"></i><span className="tag-name">Git</span></div>
                  <div className="skill-tag"><i className="devicon-jira-plain colored"></i><span className="tag-name">Jira</span></div>
                  <div className="skill-tag"><i className="devicon-figma-plain colored"></i><span className="tag-name">Figma</span></div>
                </div>
              </div>

              <div className="stack-block">
                <div className="stack-label">AI TOOLING &middot; DAILY</div>
                <div className="skill-grid">
                  <div className="skill-tag">
                    <i className="devicon-github-original icon-white"></i>
                    <span className="tag-name">GitHub Copilot</span>
                  </div>
                  <div className="skill-tag">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ flexShrink: 0 }}
                    >
                      <path
                        d="M19.6 13.4c.3-.9.4-1.8.4-2.7 0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.4 0 2.7-.4 3.9-1l3.5 1-1-3.5c.4-.6.8-1.2 1.2-1.8z"
                        fill="#d97757"
                      />
                    </svg>
                    <span className="tag-name">Claude Code</span>
                  </div>
                </div>
              </div>

              <div className="stack-block">
                <div className="stack-label">ALSO PROFICIENT IN</div>
                <div className="skill-grid-text">
                  {proficientSkills.map((s) => (
                    <div key={s} className="skill-tag-text">{s}</div>
                  ))}
                </div>
              </div>

              <h2>Experience</h2>
              <div style={{ marginTop: "16px" }}>
                <div className="timeline-row">
                  <div className="timeline-date now">JUL 2024 — NOW</div>
                  <div>
                    <div className="timeline-role">Java Full Stack Developer</div>
                    <div className="timeline-where">Synack Solutions LLC &middot; Maryland, US</div>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-date">JAN 2023 — MAY 2024</div>
                  <div>
                    <div className="timeline-role">M.S. Software Engineering</div>
                    <div className="timeline-where">
                      University of Maryland, Baltimore County &middot; GPA 3.53
                    </div>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-date">JAN 2021 — JAN 2023</div>
                  <div>
                    <div className="timeline-role">Java Full Stack Developer</div>
                    <div className="timeline-where">Tata Consultancy Services &middot; Hyderabad, India</div>
                  </div>
                </div>
              </div>

              <h2>Get in touch</h2>
              <p>
                Reach me at{" "}
                <a
                  href="mailto:pavangajula1998@gmail.com"
                  style={{ color: "var(--accent)" }}
                >
                  pavangajula1998@gmail.com
                </a>
                . I read everything &mdash; especially if you&apos;re working on
                developer tools, you need a website built, or you study how humans
                and machines collaborate.
              </p>
              <p className="contact-meta">
                <a
                  href="https://linkedin.com/in/gajulapavankumar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin ↗
                </a>
                &nbsp; &middot; &nbsp;
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github ↗
                </a>
              </p>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
