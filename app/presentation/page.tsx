import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const CANVA_DECK_URL = "https://canva.link/svfv778tr2jnost";
const PDF_BUTTON_URL = "/temp/%5BCCS%20402%5D%20OBTL%20Portfolio.pdf";

export default function PresentationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-900 text-slate-200">
        <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 md:mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">Temporary Showcase</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-100 md:text-5xl">OJT E-Portfolio</h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PDF_BUTTON_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
              >
                Open OBTL
              </a>
              <Link
                href="/"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-teal-500/40 hover:text-teal-300"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 md:p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Platforms Highlight</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
                <div className="mb-3 h-10 w-10">
                  <Image src="/logo/netsuite.svg" alt="NetSuite" width={40} height={40} className="h-10 w-10" />
                </div>
                <p className="font-semibold text-slate-100">NetSuite</p>
                <p className="mt-1 text-sm text-slate-400">Requirement analysis, XML form updates, and layout fixes.</p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
                <div className="mb-3 h-10 w-10">
                  <Image src="/logo/sap.svg" alt="SAP Business One" width={40} height={40} className="h-10 w-10" />
                </div>
                <p className="font-semibold text-slate-100">SAP Business One</p>
                <p className="mt-1 text-sm text-slate-400">Client coordination, troubleshooting, and ticket closure support.</p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
                <div className="mb-3 h-10 w-10">
                  <Image src="/logo/businesscentral.svg" alt="Business Central" width={40} height={40} className="h-10 w-10" />
                </div>
                <p className="font-semibold text-slate-100">Business Central</p>
                <p className="mt-1 text-sm text-slate-400">RDLC interface-related work and protocol-aligned delivery.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <article className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">1. Student Profile</p>
              <div className="mt-2 grid gap-5 md:grid-cols-[1.2fr_260px] md:items-start">
                <div>
                  <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">Andrei Miguel David</h2>
                  <div className="mt-4 space-y-1 text-slate-300">
                    <p><span className="font-semibold text-slate-100">Course:</span> Bachelor of Science in Computer Science focusing on Software Engineering</p>
                    <p><span className="font-semibold text-slate-100">Year:</span> 4th Year Graduating Student</p>
                    <p><span className="font-semibold text-slate-100">School:</span> Technological Institute of the Philippines – Manila</p>
                    <p>
                      <span className="font-semibold text-slate-100">Email:</span>{" "}
                      <a href="mailto:AMigsDavid@gmail" className="text-teal-300 hover:text-teal-200 hover:underline">AMigsDavid@gmail</a>{" "}
                      |{" "}
                      <a href="mailto:mamdavid@tip.edu.ph" className="text-teal-300 hover:text-teal-200 hover:underline">mamdavid@tip.edu.ph</a>
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/70">
                  <Image
                    src="/avatar.jpg"
                    alt="Andrei Miguel David profile photo"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-slate-400">
                I am a graduating Computer Science student from the Technological Institute of the Philippines – Manila,
                with a strong interest in software development and enterprise systems. Throughout my academic journey, I
                have developed a solid foundation in programming, system analysis, and problem-solving, which I continuously
                aim to apply in real-world scenarios.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                During my internship as a Technical Consultant, I gained hands-on experience working with ERP systems such as
                NetSuite, Microsoft Dynamics 365 Business Central, and SAP Business One. This experience allowed me to understand
                how technology supports business operations and how solutions are designed to meet organizational needs.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                I aspire to build a career that combines software engineering and consulting, with the long-term goal of establishing
                my own startup. I am driven by continuous learning, innovation, and the desire to create impactful solutions that
                improve how organizations operate.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">2. Company Profile</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-100 md:text-3xl">Mustard Seed Systems Corporation</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-[1.1fr_1fr]">
                <div>
                  <p className="leading-relaxed text-slate-400">
                    Mustard Seed Systems Corporation is an IT solutions provider specializing in enterprise resource planning (ERP)
                    systems and business management solutions. The company delivers services such as implementation, customization,
                    and consulting for platforms like NetSuite, Microsoft Dynamics 365 Business Central, and SAP Business One.
                    It supports organizations in improving efficiency and streamlining their operations through technology.
                  </p>
                  <p className="mt-4 text-slate-300"><span className="font-semibold text-slate-100">Company:</span> Mustard Seed Systems Corporation</p>
                  <p className="mt-1 text-slate-300"><span className="font-semibold text-slate-100">Role:</span> Technical Consultant Intern</p>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/70">
                  <Image
                    src="/MSSC-banner.png"
                    alt="Company profile visual"
                    width={794}
                    height={190}
                    className="h-auto w-full bg-white p-4 object-contain"
                  />
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">3. Background of the Training Project Involvement</p>
              <p className="mt-4 leading-relaxed text-slate-400">
                During my internship, I was involved in various projects related to ERP system implementation, customization, and support
                across different business units, including NetSuite, Business Central, and SAP Business One.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                The main objective of these projects was to improve business processes by delivering tailored system solutions based on client
                requirements. These initiatives aligned with the company’s goal of providing efficient and scalable ERP systems to its clients.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                My responsibilities included assisting in system customization, supporting development-related tasks, troubleshooting issues, and
                collaborating with both technical and functional consultants. I also participated in testing processes to ensure that system
                functionalities met the required standards.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">4. Project Involvement Deliverables (OBTL-Based)</p>
              <p className="mt-4 leading-relaxed text-slate-400">
                Using the Outcomes-Based Teaching and Learning (OBTL) framework, I can describe my deliverables in terms of learning outcomes and applied contributions:
              </p>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
                  <h3 className="font-semibold text-slate-100">Intended Learning Outcomes (ILOs)</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    <li>Apply technical knowledge in real-world ERP systems</li>
                    <li>Analyze business requirements and translate them into system solutions</li>
                    <li>Demonstrate problem-solving and collaboration in a professional environment</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
                  <h3 className="font-semibold text-slate-100">Teaching and Learning Activities (TLAs)</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    <li>Participated in ERP customization and support tasks</li>
                    <li>Assisted in debugging and system testing</li>
                    <li>Collaborated with consultants across different business units</li>
                    <li>Engaged in internal discussions and knowledge-sharing sessions</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
                  <h3 className="font-semibold text-slate-100">Assessment Tasks (ATs) / Deliverables</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    <li>Technical documentation for configurations and system processes</li>
                    <li>Support outputs in ERP customization and development tasks</li>
                    <li>Testing and validation reports for system functionalities</li>
                    <li>Contributions to internal presentations and discussions</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-slate-400">
                Through these deliverables, I contributed to improving workflow efficiency, ensuring system accuracy, and supporting successful
                project implementations within the organization.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">5. Professional Learning and Development Achieved</p>
              <p className="mt-4 leading-relaxed text-slate-400">
                During my internship, I developed both technical and professional competencies. I strengthened my ability to analyze requirements
                and translate them into functional system solutions. I also improved my debugging and problem-solving skills by working on real-world scenarios.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                In addition, I enhanced my communication and collaboration skills by working with cross-functional teams, including technical and
                functional consultants. I learned how to adapt to a professional work environment, manage responsibilities, and deliver outputs within given timelines.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                This experience helped me grow from an academic learner into a more industry-ready professional.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">6. Modern Techniques, Skills, and Tools Used/Learned</p>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
                  <h3 className="font-semibold text-slate-100">Techniques & Methodologies</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    <li>ERP system implementation and customization</li>
                    <li>Business process analysis</li>
                    <li>Software testing and debugging</li>
                    <li>Collaborative project workflows (Agile-like environment)</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
                  <h3 className="font-semibold text-slate-100">Tools & Technologies</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    <li>NetSuite ERP</li>
                    <li>Microsoft Dynamics 365 Business Central</li>
                    <li>SAP Business One</li>
                    <li>Microsoft Excel</li>
                    <li>Documentation tools</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
                  <h3 className="font-semibold text-slate-100">Skills Applied</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    <li>Analytical thinking and problem-solving</li>
                    <li>Communication and teamwork</li>
                    <li>Time management and prioritization</li>
                    <li>Adaptability in dynamic project environments</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-slate-400">
                I applied these techniques and tools throughout my internship by supporting ongoing implementations, resolving system issues, and collaborating with my team.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">7. Discipline-Related Solutions Integrated into the Company</p>
              <div className="mt-5 grid gap-5 md:grid-cols-[1.1fr_1fr]">
                <div>
                  <p className="leading-relaxed text-slate-400">
                    As a Computer Science student, I applied my knowledge in programming, system design, and analytical thinking to support ERP-related tasks.
                    My academic background helped me understand system structures and allowed me to contribute to identifying and resolving technical issues.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-400">
                    I supported the team by assisting in system improvements, troubleshooting problems, and ensuring that configurations aligned with business requirements.
                    My ability to approach problems logically and systematically contributed to more efficient solutions.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-400">
                    These contributions were integrated into ongoing projects, helping improve workflows and supporting the company’s delivery of effective ERP solutions.
                  </p>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/70">
                  <Image
                    src="/presentation-assets/project-work.jpg"
                    alt="Project involvement visual"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-500">Image source: Pexels</div>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">8. Summary of Internship Reflection</p>
              <p className="mt-4 leading-relaxed text-slate-400">
                My internship experience was both challenging and rewarding. One of the main challenges I faced was adapting to complex business systems and
                understanding real-world requirements, but this pushed me to learn quickly and improve continuously.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                I gained confidence in my technical and communication skills, and I developed a deeper understanding of how technology is applied in business environments.
                I also learned the importance of collaboration, accountability, and continuous improvement in a professional setting.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                The key takeaway from my internship is the importance of bridging technical knowledge with business understanding. Moving forward, I plan to build on this
                experience as I pursue a career in software engineering and consulting, with the long-term goal of creating impactful solutions through my own future venture.
              </p>
            </article>
          </div>

          <div className="mt-8 text-sm text-slate-400">
            Presentation link:{" "}
            <a
              href={CANVA_DECK_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-teal-300 underline decoration-teal-500/50 underline-offset-4"
            >
              Open Canva Slide Deck
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
