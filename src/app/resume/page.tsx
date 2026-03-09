import Link from "next/link";

function QuickStat({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border-2 border-black/80 bg-card p-4 pixel-shadow">
            <p className="font-pixel text-[9px] text-accent">{label}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{value}</p>
        </div>
    );
}

export default function ResumePage() {
    return (
        <div className="space-y-10">
            <section className="space-y-4">
                <p className="font-pixel text-[10px] text-accent">RESUME</p>

                <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                    Resume
                </h1>

                <p className="max-w-3xl text-xl leading-8 text-muted">
                    A quick overview of my experience across software engineering, product
                    design, and systems thinking.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex rounded-2xl border-2 border-black bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    >
                        Download Resume
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-2xl border-2 border-black/80 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
                    >
                        Open PDF
                    </a>
                </div>
            </section>

            <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <QuickStat label="FOCUS" value="CS × Design × Product Thinking" />
                <QuickStat label="SCHOOL" value="Stanford University" />
                <QuickStat label="EXPERIENCE" value="Engineering, design, and systems projects" />
                <QuickStat label="FORMAT" value="Downloadable PDF + embedded preview" />
            </section>

            <section className="space-y-4">
                <p className="font-pixel text-[10px] text-accent">PREVIEW</p>

                <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-card pixel-shadow">
                    <iframe
                        src="/resume.pdf"
                        title="Resume PDF"
                        className="h-[900px] w-full bg-white"
                    />
                </div>
            </section>


        </div>
    );
}