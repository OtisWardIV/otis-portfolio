import Link from "next/link";

function CourseCard({
    title,
    subtitle,
    href,
}: {
    title: string;
    subtitle: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="group block rounded-3xl border-2 border-black/80 bg-card p-5 pixel-shadow transition hover:-translate-y-1"
        >
            <div className="mb-3 flex items-center justify-between">
                <span className="font-pixel text-[9px] text-accent">COURSE CART</span>
                <div className="h-3 w-14 rounded-full bg-black/10" />
            </div>

            <div className="rounded-[22px] border-2 border-black/70 bg-white p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-ink">
                    {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">{subtitle}</p>
            </div>

            <p className="mt-4 text-sm font-semibold text-accent">Open Course →</p>
        </Link>
    );
}

export default function CoursesPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <p className="font-pixel text-[10px] text-accent">COURSES</p>
                <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                    Courses & Class Work
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted">
                    A space for class-based projects, weekly reflections, and work that
                    shows how I learn, think, and build over time.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                    title="Design 121"
                    subtitle="Weekly teach-one reflections, learnings, and course work."
                    href="/courses/design-121"
                />
            </div>
        </div>
    );
}