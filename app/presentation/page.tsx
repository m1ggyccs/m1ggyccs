import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const CANVA_DECK_URL = "https://canva.link/svfv778tr2jnost";
const PDF_BUTTON_URL = "/temp/%5BCCS%20402%5D%20OBTL%20Portfolio.pdf";
const PDF_EMBED_URL = "/temp/OBTL%20Presentation.pdf#view=FitH";

export default function PresentationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-900 text-slate-200">
        <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 md:mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">Temporary Showcase</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-100 md:text-5xl">OBTL / OJT Presentation</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={PDF_BUTTON_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
            >
              Open PDF Version
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

        <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950 shadow-2xl">
          <iframe
            src={PDF_EMBED_URL}
            title="OBTL Presentation PDF"
            className="h-[76vh] w-full"
            allowFullScreen
          />
        </div>
        <div className="mt-4 text-sm text-slate-400">
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
