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

export default function DivisionHoldPage() {
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
                        PG&amp;E / SHERLOCK 2.0 / SUMMER 2025
                    </p>

                    <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                        Division Hold Management Tool
                    </h1>

                    <p className="max-w-3xl text-xl leading-8 text-muted">
                        A self-service tool that lets division leads pause and resume
                        inspection scheduling without changing Sherlock’s core assignment
                        logic.
                    </p>
                </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-card pixel-shadow">
                <Image
                    src="/divisionholdtool.png"
                    alt="Division Hold Management Tool interface"
                    width={1424}
                    height={692}
                    className="h-auto w-full"
                    priority
                />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <FactCard label="ROLE" value="Software Developer" />
                <FactCard
                    label="TOOLS"
                    value="NestJS, TypeScript, Prisma, PostgreSQL, REST APIs"
                />
                <FactCard label="TIMELINE" value="Summer 2025" />
                <FactCard
                    label="CONTEXT"
                    value="Built within PG&E’s Sherlock 2.0 inspection scheduling platform"
                />
            </div>

            <Section label="01 / PROJECT OVERVIEW" title="What this project was">
                <p>
                    Sherlock 2.0 automatically assigns field inspections across PG&amp;E’s
                    divisions. But in practice, teams sometimes need to temporarily pause
                    scheduling for specific divisions because of audits, staffing changes,
                    operational constraints, or weather-related disruptions.
                </p>

                <p className="mt-6">
                    Before this tool, handling those pauses required manual workarounds or
                    engineering intervention. I designed and implemented a division-level
                    hold system that gave authorized users a safe, self-service way to
                    manage scheduling behavior without touching the core assignment logic.
                </p>
            </Section>

            <Section label="02 / THE PROBLEM" title="Why this mattered">
                <p>
                    The challenge was not just adding another admin control. The feature
                    had to fit into an existing production system, work with Sherlock’s
                    scheduling architecture, and make operational changes without creating
                    confusion or unexpected side effects.
                </p>

                <p className="mt-6">
                    The goal was to give teams flexibility while still preserving trust in
                    the broader assignment pipeline. That meant the solution needed to be
                    clear in the UI, reliable in the backend, and easy for users to
                    understand at a glance.
                </p>
            </Section>

            <Section label="03 / WHAT I BUILT" title="System + interface">
                <p>
                    I built a self-service hold management workflow where users could
                    select one or more divisions, apply a hold reason, and later release
                    those divisions individually or all at once. The tool integrated
                    directly into Sherlock 2.0’s existing architecture and enforced holds
                    through dynamic query updates rather than invasive changes to the
                    assignment logic itself.
                </p>

                <p className="mt-6">
                    On the frontend, I focused on making status visibility really clear:
                    users could immediately see which divisions were available, which were
                    on hold, and what actions were possible. On the backend, I modeled the
                    hold records, API interactions, and state handling needed to make the
                    tool reliable and safe to use in a real operational environment.
                </p>
            </Section>

            <div className="grid gap-8 lg:grid-cols-2">
                <section className="rounded-[2rem] border-2 border-black/80 bg-card p-6 pixel-shadow">
                    <p className="font-pixel text-[10px] text-accent">04 / HARD SKILLS</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                        Technical growth
                    </h2>

                    <ul className="mt-5 list-disc space-y-4 pl-6 text-lg leading-8 text-muted">
                        <li>Designing and implementing backend services in NestJS</li>
                        <li>Working with Prisma models and PostgreSQL data flows</li>
                        <li>Building and consuming REST API endpoints</li>
                        <li>
                            Designing feature logic that integrates with an existing
                            production architecture
                        </li>
                        <li>
                            Translating operational requirements into a usable internal tool
                        </li>
                    </ul>
                </section>

                <section className="rounded-[2rem] border-2 border-black/80 bg-card p-6 pixel-shadow">
                    <p className="font-pixel text-[10px] text-accent">05 / SOFT SKILLS</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                        Collaboration + product thinking
                    </h2>

                    <ul className="mt-5 list-disc space-y-4 pl-6 text-lg leading-8 text-muted">
                        <li>
                            Thinking through how technical changes would affect real users and
                            workflows
                        </li>
                        <li>
                            Communicating clearly about feature behavior, tradeoffs, and edge
                            cases
                        </li>
                        <li>
                            Balancing backend correctness with frontend clarity and usability
                        </li>
                        <li>
                            Building in a way that respected existing systems instead of
                            overcomplicating them
                        </li>
                        <li>
                            Framing engineering work around operational reliability, not just
                            code completion
                        </li>
                    </ul>
                </section>
            </div>

            <Section label="06 / KEY SCREENS" title="How it looked in practice">
                <p>
                    The tool combined a simple management interface with backend record
                    handling to make division-level scheduling controls visible,
                    traceable, and easy to update.
                </p>
            </Section>

            <div className="grid gap-8 xl:grid-cols-2">
                <div className="space-y-4">
                    <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-card pixel-shadow transition duration-300 hover:scale-[1.01]">
                        <Image
                            src="/divisionholdtool.png"
                            alt="Division hold management frontend interface"
                            width={1424}
                            height={692}
                            className="h-auto w-full"
                        />
                    </div>
                    <p className="text-sm leading-6 text-muted">
                        Frontend interface for placing and releasing division holds, with
                        clear visibility into division status and available actions.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-card pixel-shadow transition duration-300 hover:scale-[1.01]">
                        <Image
                            src="/toolbackend.png"
                            alt="Backend table for division hold records"
                            width={1182}
                            height={430}
                            className="h-auto w-full"
                        />
                    </div>
                    <p className="text-sm leading-6 text-muted">
                        Backend data representation used to store hold records, reasons,
                        active status, and creation metadata.
                    </p>
                </div>
            </div>

            <section className="space-y-6">
                <p className="font-pixel text-[10px] text-accent">06A / INTERACTIONS</p>
                <h2 className="text-3xl font-semibold tracking-tight text-ink">
                    Key workflow moments
                </h2>
                <p className="max-w-4xl text-lg leading-8 text-muted">
                    These screens show the core interaction loop: pausing scheduling for a
                    division and later restoring it when conditions change.
                </p>

                <div className="grid gap-8 xl:grid-cols-2">
                    <div className="space-y-4">
                        <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-card pixel-shadow transition duration-300 hover:scale-[1.01]">
                            <Image
                                src="/holdplace.png"
                                alt="Placing a hold on a division"
                                width={1118}
                                height={848}
                                className="h-auto w-full"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-ink">Placing a Hold</h3>

                        <p className="text-sm leading-6 text-muted">
                            Removes a division from automated inspection scheduling. The
                            change is immediately persisted and reflected in the UI so users
                            can clearly see that the division is now paused.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-card pixel-shadow transition duration-300 hover:scale-[1.01]">
                            <Image
                                src="/holdrelease.png"
                                alt="Releasing a hold from a division"
                                width={1178}
                                height={850}
                                className="h-auto w-full"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-ink">Releasing a Hold</h3>

                        <p className="text-sm leading-6 text-muted">
                            Restores a division to active scheduling. Holds behave as
                            reversible state changes so teams can quickly respond to
                            operational shifts without disrupting the broader scheduling
                            system.
                        </p>
                    </div>
                </div>
            </section>

            <Section label="07 / TAKEAWAYS" title="What I learned">
                <p>
                    This project pushed me to think beyond just implementing a feature. I
                    had to think about how to introduce flexibility into a production
                    system without making that system harder to trust. That meant being
                    careful about architecture, user flows, and the small details that
                    make an internal tool feel dependable.
                </p>

                <p className="mt-6">
                    It also reinforced something I really enjoy: building software that
                    sits at the intersection of systems thinking and user experience. The
                    most satisfying part of this project was creating something that felt
                    technically sound but also immediately useful to the people actually
                    doing the work.
                </p>
            </Section>
        </div>
    );
}