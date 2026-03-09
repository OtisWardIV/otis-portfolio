import Image from "next/image";
import Link from "next/link";

function ProjectCard({
    title,
    description,
    image,
    link,
    tags,
}: {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}) {
    return (
        <Link
            href={link}
            className="group block rounded-[28px] border-2 border-black bg-card p-5 pixel-shadow transition hover:-translate-y-1"
        >
            <div className="overflow-hidden rounded-2xl border border-black/15">
                <Image
                    src={image}
                    alt={title}
                    width={1400}
                    height={800}
                    className="aspect-[16/9] w-full object-cover"
                />
            </div>

            <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold text-ink">{title}</h3>

                <p className="text-sm text-muted leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-black/15 bg-white px-3 py-1 text-xs text-muted"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default function ProjectsPage() {
    return (
        <div className="space-y-10">
            <div className="space-y-3">
                <p className="font-pixel text-[10px] text-accent">SELECTED WORK</p>

                <h1 className="text-5xl font-semibold tracking-tight text-ink">
                    Projects
                </h1>

                <p className="max-w-2xl text-muted">
                    A mix of engineering systems, product design, and human-centered
                    technology projects.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <ProjectCard
                    title="Division Hold Management Tool"
                    description="A system integrated into PG&E's Sherlock 2.0 platform allowing division leads to safely pause and resume inspection scheduling without modifying core assignment logic."
                    image="/pgelogo.jpg"
                    link="/projects/division-hold"
                    tags={[
                        "PG&E",
                        "NestJS",
                        "TypeScript",
                        "Prisma",
                        "PostgreSQL",
                    ]}
                />
                <ProjectCard
                    title="BottleBuddy"
                    description="A retro-inspired prototype that helps users locate lost water bottles through calm visual proximity feedback instead of stressful precision tracking."
                    image="/bottlebuddylogo.png"
                    link="/projects/bottlebuddy"
                    tags={[
                        "Product Design",
                        "Figma",
                        "Interaction Design",
                        "State-Based Prototype",
                    ]}
                />
                <ProjectCard
                    title="Heap Allocator"
                    description="A custom implementation of malloc, free, and realloc built for Stanford CS107, exploring correctness, utilization, and performance tradeoffs in systems programming."
                    image="/stanfordcs.jpeg"
                    link="/projects/heap-allocator"
                    tags={[
                        "C",
                        "Systems Programming",
                        "Memory Management",
                        "Performance Optimization",
                    ]}
                />
            </div>
        </div>
    );
}