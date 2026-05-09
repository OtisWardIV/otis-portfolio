import Image from "next/image";
import Link from "next/link";

function WeekButton({
    week,
    href,
}: {
    week: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="inline-flex rounded-2xl border-2 border-black bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
            {week}
        </Link>
    );
}

export default function Design121DP1Page() {
    return (
        <div className="space-y-8">
            <div className="space-y-3">
                <Link
                    href="/courses/design-121"
                    className="inline-block text-sm text-muted transition hover:text-ink"
                >
                    ← Back to Design 121
                </Link>

                <p className="font-pixel text-[10px] text-accent">DESIGN 121 / DP1</p>
                <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                    Design Project 1: Forager Project
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted">
                    How might we reimagine how plant-based dairy becomes part of everyday
                    life for more people?
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
                <div className="rounded-3xl border-2 border-black/80 bg-card p-6 pixel-shadow">
                    <p className="font-pixel text-[10px] text-accent">PARTNER</p>

                    <div className="mt-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white p-3">
                        <Image
                            src="/foragerlogo.png"
                            alt="Forager logo"
                            width={160}
                            height={160}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <p className="mt-4 text-[15px] leading-7 text-muted">
                        Forager is our partner for DP1. This project arc focuses on
                        understanding the routines, barriers, and motivations that shape how
                        people engage with plant-based dairy in everyday life.
                    </p>
                </div>

                <div className="rounded-3xl border-2 border-black/80 bg-card p-6 pixel-shadow">
                    <p className="font-pixel text-[10px] text-accent">PROJECT OVERVIEW</p>

                    <div className="mt-4 space-y-4 text-[15px] leading-7 text-muted">
                        <p>
                            DP1 spans Weeks 1–5 of the quarter and centers on our work with
                            Forager. The broader challenge is not just convincing people to
                            switch to plant-based dairy, but understanding how it can fit more
                            naturally into everyday routines.
                        </p>

                        <p>
                            This phase of the project is about early synthesis, identifying
                            insights, surfacing opportunity areas, and beginning to turn those
                            into clearer design directions.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <WeekButton
                                week="Week 3"
                                href="/courses/design-121/dp1/week-3"
                            />
                            <WeekButton
                                week="Week 4"
                                href="/courses/design-121/dp1/week-4"
                            />
                            <WeekButton
                                week="Week 5"
                                href="/courses/design-121/dp1/week-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}