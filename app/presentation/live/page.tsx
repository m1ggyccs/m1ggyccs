import Link from "next/link";

const CANVA_DECK_URL = "https://canva.link/svfv778tr2jnost";
const PDF_PRESENTATION_URL = "/temp/obtl-presentation.pdf#view=FitH";

export default function LivePresentationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">Live Mode</p>
          <h1 className="text-sm font-semibold text-slate-100 md:text-base">OBTL Presentation</h1>
        </div>
        <div className="flex gap-2">
          <a
            href={CANVA_DECK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-teal-500/40 hover:text-teal-300 md:text-sm"
          >
            Open in Canva
          </a>
          <Link
            href="/presentation"
            className="inline-flex items-center rounded-md bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-teal-500 md:text-sm"
          >
            Exit Live Mode
          </Link>
        </div>
      </div>

      <iframe
        src={PDF_PRESENTATION_URL}
        title="OBTL PDF Slides Live View"
        className="h-[calc(100vh-57px)] w-full"
        allowFullScreen
      />
    </main>
  );
}
