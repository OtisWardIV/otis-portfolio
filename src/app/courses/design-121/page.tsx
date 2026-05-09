import Image from "next/image";
import Link from "next/link";

function ProjectCartridge({
    title,
    subtitle,
    href,
    image,
    locked = false,
}: {
    title: string;
    subtitle: string;
    href?: string;
    image?: string;
    locked?: boolean;
}) {
    const card = (
        <div
            className={`group rounded-3xl border-2 border-black/80 bg-card p-5 pixel-shadow transition ${locked ? "opacity-80" : "hover:-translate-y-1"
                }`}
        >
            <div className="mb-3 flex items-center justify-between">
                <span className="font-pixel text-[9px] text-accent">
                    {locked ? "LOCKED SLOT" : "PROJECT SLOT"}
                </span>
                <div className="h-3 w-14 rounded-full bg-black/10" />
            </div>

            <div className="rounded-[22px] border-2 border-black/70 bg-white p-5">
                <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                    {locked ? (
                        <>
                            <div className="mb-5 inline-flex rounded-2xl border-2 border-black bg-black px-4 py-2">
                                <span className="font-pixel text-[9px] text-white">
                                    COMING SOON
                                </span>
                            </div>

                            <h2 className="text-2xl font-semibold tracking-tight text-ink">
                                {title}
                            </h2>
                            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                                {subtitle}
                            </p>
                        </>
                    ) : (
                        <>
                            {image && (
                                <div className="mb-5 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white p-3">
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={160}
                                        height={160}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            )}

                            <h2 className="text-2xl font-semibold tracking-tight text-ink">
                                {title}
                            </h2>
                            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                                {subtitle}
                            </p>
                        </>
                    )}
                </div>
            </div>

            <div className="mt-4">
                <p className="text-sm font-semibold text-accent">
                    {locked ? "Locked" : "Open Project →"}
                </p>
            </div>
        </div>
    );

    if (locked || !href) return card;

    return <Link href={href}>{card}</Link>;
}

export default function Design121Page() {
    return (
        <div className="space-y-8">
            <div className="space-y-3">
                <Link
                    href="/courses"
                    className="inline-block text-sm text-muted transition hover:text-ink"
                >
                    ← Back to Courses
                </Link>

                <p className="font-pixel text-[10px] text-accent">DESIGN 121</p>
                <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                    Design 121
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted">
                    Introduction to Human Values in Design. This course is organized by
                    project arc, with each design project living in its own slot.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <ProjectCartridge
                    title="Design Project 1: Forager Project"
                    subtitle="Partner project focused on how plant-based dairy can become part of everyday life for more people."
                    href="/courses/design-121/dp1"
                    image="/foragerlogo.png"
                />

                <ProjectCartridge
                    title="Design Project 2"
                    subtitle="Locked for now. More to come later in the quarter."
                    locked
                />
            </div>
        </div>
    );
}