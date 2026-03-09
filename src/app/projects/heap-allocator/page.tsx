import Image from "next/image";
import Link from "next/link";

function FactCard({
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

function Section({
    label,
    title,
    children,
}: {
    label: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="space-y-4">
            <p className="font-pixel text-[10px] text-accent">{label}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{title}</h2>
            <div className="max-w-4xl text-lg leading-8 text-muted">{children}</div>
        </section>
    );
}

export default function HeapAllocatorPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <Link
                    href="/projects"
                    className="inline-block text-sm text-muted transition hover:text-ink"
                >
                    ← Back to Projects
                </Link>

                <div className="space-y-3">
                    <p className="font-pixel text-[10px] text-accent">
                        STANFORD CS107 / WINTER 2025 / SYSTEMS PROGRAMMING
                    </p>

                    <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                        Heap Allocator
                    </h1>

                    <p className="max-w-3xl text-xl leading-8 text-muted">
                        A custom implementation of malloc, free, and realloc built in C for
                        CS107, focused on correctness, memory utilization, and performance
                        tradeoffs.
                    </p>
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <FactCard label="ROLE" value="Student / Systems Programmer" />
                <FactCard
                    label="TOOLS"
                    value="C, pointer arithmetic, debugging, profiling, memory management"
                />
                <FactCard label="TIMELINE" value="Winter 2025" />
                <FactCard
                    label="CONTEXT"
                    value="Final project for Stanford CS107: Computer Organization & Systems"
                />
            </div>

            <Section label="01 / PROJECT OVERVIEW" title="What this project was">
                <p>
                    This project was my final assignment for Stanford CS107, where I built
                    my own heap allocator from scratch. The goal was to implement core
                    memory management functionality equivalent to malloc, free, and
                    realloc, while balancing correctness, speed, and memory efficiency.
                </p>

                <p className="mt-6">
                    The assignment involved building two allocator designs: an implicit
                    free list allocator and an explicit free list allocator. That made the
                    project not just about getting something working, but about
                    understanding the tradeoffs between different system designs and making
                    implementation decisions that affected performance.
                </p>
            </Section>

            <Section label="02 / THE PROBLEM" title="Why this mattered">
                <p>
                    All quarter in CS107, I had been using the heap indirectly through
                    dynamic memory allocation. This project flipped that perspective and
                    forced me to go under the hood. Instead of treating memory allocation
                    as a black box, I had to design the data structures and logic that
                    make the heap usable in the first place.
                </p>

                <p className="mt-6">
                    The challenge was that a heap allocator has competing goals. It needs
                    to be correct for arbitrary well-formed requests, compact in how it
                    uses memory, and fast enough to serve allocations efficiently. Those
                    goals naturally create tradeoffs, so the project became an exercise in
                    systems thinking as much as implementation.
                </p>
            </Section>

            <Section label="03 / DESIGN APPROACH" title="How I framed the allocator">
                <p>
                    I approached the assignment by thinking carefully about allocator
                    structure before writing code. For the implicit free list allocator, I
                    focused on understanding block layout, header metadata, alignment, and
                    traversal through contiguous memory. For the explicit free list
                    allocator, I then extended that thinking to track free blocks more
                    directly and improve efficiency.
                </p>

                <p className="mt-6">
                    A big part of the design process was reasoning about tradeoffs. An
                    allocator can move quickly by doing less bookkeeping, but that often
                    wastes memory. On the other hand, aggressively reusing and packing
                    blocks can improve utilization while increasing implementation
                    complexity. This project forced me to think about those tradeoffs in a
                    very concrete way.
                </p>
            </Section>

            <Section label="04 / WHAT I BUILT" title="Allocator functionality">
                <p>
                    I implemented custom versions of malloc, free, and realloc, along with
                    the supporting heap logic needed to manage block allocation,
                    deallocation, splitting, reuse, and traversal. The project required
                    handling well-formed request patterns while preserving consistency of
                    the heap structure across many possible allocation sequences.
                </p>

                <p className="mt-6">
                    The explicit free list version pushed things further by tracking free
                    blocks in a more structured way, which improved performance compared to
                    a purely implicit scan. That progression made it easier to see how
                    different allocator designs impact both runtime behavior and memory
                    utilization.
                </p>
            </Section>

            <div className="grid gap-8 lg:grid-cols-2">
                <section className="rounded-[2rem] border-2 border-black/80 bg-card p-6 pixel-shadow">
                    <p className="font-pixel text-[10px] text-accent">05 / HARD SKILLS</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                        Systems + technical growth
                    </h2>

                    <ul className="mt-5 list-disc space-y-4 pl-6 text-lg leading-8 text-muted">
                        <li>Implementing heap allocation logic in C</li>
                        <li>Working directly with pointers, offsets, and memory layout</li>
                        <li>Reasoning about block headers, alignment, and heap invariants</li>
                        <li>Comparing implicit and explicit free list designs</li>
                        <li>Profiling code and thinking through utilization vs. speed tradeoffs</li>
                    </ul>
                </section>

                <section className="rounded-[2rem] border-2 border-black/80 bg-card p-6 pixel-shadow">
                    <p className="font-pixel text-[10px] text-accent">06 / SOFT SKILLS</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                        Problem solving + persistence
                    </h2>

                    <ul className="mt-5 list-disc space-y-4 pl-6 text-lg leading-8 text-muted">
                        <li>Breaking a complex systems problem into smaller design decisions</li>
                        <li>Debugging patiently when small pointer mistakes caused major failures</li>
                        <li>Thinking in terms of tradeoffs instead of “one perfect solution”</li>
                        <li>Using iteration to improve both correctness and performance</li>
                        <li>Building confidence working closer to the machine level</li>
                    </ul>
                </section>
            </div>

            <Section label="07 / KEY VISUAL" title="Allocator model">
                <p>
                    This diagram captures the core mental model behind the project: memory
                    blocks on the heap must be organized, tracked, and reused in a way
                    that balances correctness with efficiency.
                </p>
            </Section>

            <div className="grid gap-8 xl:grid-cols-2">
                <div className="space-y-4">
                    <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-card pixel-shadow transition duration-300 hover:scale-[1.01]">
                        <Image
                            src="/heapallocator.png"
                            alt="Heap allocator block diagram"
                            width={512}
                            height={626}
                            className="h-auto w-full bg-white object-contain p-8"
                        />
                    </div>
                    <p className="text-sm leading-6 text-muted">
                        A visual representation of allocator structure, showing how memory
                        blocks and management logic interact inside the heap.
                    </p>
                </div>
            </div>

            <Section label="08 / LEARNING GOALS" title="What this project taught me">
                <p>
                    This assignment helped me appreciate how much complexity sits behind
                    something as common as dynamic memory allocation. It strengthened my
                    pointer skills, forced me to debug carefully, and made performance
                    profiling feel much more meaningful because every design choice had a
                    visible consequence.
                </p>

                <p className="mt-6">
                    More broadly, it brought together a lot of what I learned in CS107:
                    reasoning about memory, designing around constraints, and thinking
                    critically about efficiency. It was one of those projects that made
                    systems programming feel much more real and much more rewarding.
                </p>
            </Section>

            <Section label="09 / TAKEAWAYS" title="What stuck with me">
                <p>
                    What I liked most about this project was that it made tradeoffs feel
                    tangible. You cannot optimize everything at once, so you have to
                    reason about what matters most and why. That mindset applies far beyond
                    allocators — it is really a broader lesson in engineering design.
                </p>

                <p className="mt-6">
                    It also made me more comfortable with lower-level programming. Building
                    a heap allocator from scratch was difficult, but it gave me a much
                    stronger intuition for how memory systems actually work and why careful
                    systems design matters.
                </p>
            </Section>
        </div>
    );
}