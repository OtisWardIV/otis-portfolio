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

function ScreenCard({
    title,
    image,
    description,
}: {
    title: string;
    image: string;
    description: string;
}) {
    return (
        <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-card pixel-shadow transition duration-300 hover:scale-[1.01]">
                <Image
                    src={image}
                    alt={title}
                    width={900}
                    height={1800}
                    className="h-auto w-full"
                />
            </div>
            <h3 className="text-xl font-semibold text-ink">{title}</h3>
            <p className="text-sm leading-6 text-muted">{description}</p>
        </div>
    );
}

export default function BottleBuddyPage() {
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
                        DESIGN 11 / FALL 2025 / PRODUCT DESIGN
                    </p>

                    <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                        BottleBuddy
                    </h1>

                    <p className="max-w-3xl text-xl leading-8 text-muted">
                        A retro-inspired prototype that helps users locate lost water bottles
                        through calm, visual proximity feedback instead of stressful
                        precision tracking.
                    </p>
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <FactCard label="ROLE" value="Product Designer (Student Project)" />
                <FactCard
                    label="TOOLS"
                    value="Figma, interactive prototyping, state-based flows"
                />
                <FactCard label="TIMELINE" value="Fall 2025" />
                <FactCard
                    label="CONTEXT"
                    value="Design 11: Visual Thinking / personal frustration turned product concept"
                />
            </div>

            <Section label="01 / PROJECT OVERVIEW" title="What this project was">
                <p>
                    BottleBuddy is an interactive prototype designed to help users locate
                    lost reusable water bottles in shared environments like dorms,
                    classrooms, and dining halls. Instead of relying on exact coordinates,
                    the system communicates proximity through calm, 8-bit visual feedback.
                </p>

                <p className="mt-6">
                    The project was inspired by a simple but recurring frustration: losing
                    my bottle and wasting time retracing my steps. I wanted to design
                    something that felt more supportive and less stressful than a typical
                    tracking interface, especially in those short moments where you know an
                    item is probably nearby but cannot immediately find it.
                </p>
            </Section>

            <Section label="02 / THE PROBLEM" title="Why this mattered">
                <p>
                    Students frequently misplace reusable water bottles in shared,
                    high-traffic campus spaces. Existing solutions often lean heavily on
                    notifications or exact tracking, but in real life that can feel
                    unreliable, overwhelming, or unnecessarily stressful when the object is
                    close but not visible.
                </p>

                <p className="mt-6">
                    In those situations, users usually need reassurance and directional
                    guidance more than exact coordinates. The design challenge became:
                    how might a system reduce anxiety and help someone search confidently
                    without making them decode overly technical information?
                </p>
            </Section>

            <Section label="03 / USERS + CONSTRAINTS" title="Who it was for and what shaped it">
                <p>
                    BottleBuddy was designed for college students moving through shared
                    campus environments like Stanford dorms, classrooms, and dining halls.
                    These are spaces where search moments are brief, uncertain, and usually
                    happen while people are distracted or rushing between things.
                </p>

                <p className="mt-6">
                    The prototype was also shaped by practical constraints. Because this
                    was built as a Figma-only concept without Bluetooth hardware, location
                    data was treated as relative rather than exact. That pushed the system
                    toward directional guidance instead of false precision, which honestly
                    ended up strengthening the overall interaction model.
                </p>
            </Section>

            <Section label="04 / DESIGN APPROACH" title="How I framed the experience">
                <p>
                    This project came out of a Design 11 prompt to design around something
                    personally frustrating. I started with the experience of repeatedly
                    losing my bottle, then reframed the problem around emotional needs
                    during search: reassurance, clarity, momentum, and low cognitive load.
                </p>

                <p className="mt-6">
                    Using Figma, I designed a state-based prototype that translated
                    uncertainty into understandable feedback. Rather than displaying exact
                    distance, the interface tells users whether they are getting closer or
                    farther away. That makes the product feel more like a guide than a
                    tracker.
                </p>

                <p className="mt-6">
                    The visual language was inspired by retro games like Super Mario World
                    and The Legend of Zelda. That influence helped me make the experience
                    feel playful and exploratory without becoming cluttered or confusing.
                </p>
            </Section>

            <div className="grid gap-8 lg:grid-cols-2">
                <section className="rounded-[2rem] border-2 border-black/80 bg-card p-6 pixel-shadow">
                    <p className="font-pixel text-[10px] text-accent">05 / HARD SKILLS</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                        Product + prototyping skills
                    </h2>

                    <ul className="mt-5 list-disc space-y-4 pl-6 text-lg leading-8 text-muted">
                        <li>Building a state-based interaction flow in Figma</li>
                        <li>Designing for uncertain or approximate system inputs</li>
                        <li>Creating visual feedback systems instead of numeric interfaces</li>
                        <li>Structuring multi-screen prototype logic for usability testing</li>
                        <li>Translating personal frustration into a product concept with clear UX goals</li>
                    </ul>
                </section>

                <section className="rounded-[2rem] border-2 border-black/80 bg-card p-6 pixel-shadow">
                    <p className="font-pixel text-[10px] text-accent">06 / SOFT SKILLS</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                        Design judgment + user empathy
                    </h2>

                    <ul className="mt-5 list-disc space-y-4 pl-6 text-lg leading-8 text-muted">
                        <li>Thinking about reassurance as a core user need, not just utility</li>
                        <li>Reducing cognitive load during stressful, time-sensitive moments</li>
                        <li>Balancing playful visual identity with clarity and trust</li>
                        <li>Designing around constraints instead of treating them like blockers</li>
                        <li>Using familiar metaphors to make an unfamiliar system feel intuitive</li>
                    </ul>
                </section>
            </div>

            <Section label="07 / KEY INTERACTIONS" title="How the system worked">
                <p>
                    BottleBuddy was built around a small set of states that guide users
                    through uncertainty. Each screen is doing a slightly different job:
                    setting expectations, reinforcing confidence, or helping users make
                    progress without overthinking.
                </p>
            </Section>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                <ScreenCard
                    title="Onboarding"
                    image="/bottlebuddyconnect.png"
                    description="Introduces BottleBuddy as a calm, supportive companion and sets expectations around proximity-based guidance rather than perfect tracking."
                />

                <ScreenCard
                    title="Connected"
                    image="/bottlebuddyconnected.png"
                    description="Confirms the bottle is paired and ready, giving users confidence that the system is active before they need it."
                />

                <ScreenCard
                    title="Home"
                    image="/bottlebuddymainpage.png"
                    description="Acts as a reassurance checkpoint by showing that the bottle is nearby and offering simple next actions."
                />

                <ScreenCard
                    title="Map"
                    image="/bottlebuddymap.png"
                    description="Provides contextual awareness through a simplified campus view that helps users mentally retrace their steps."
                />

                <ScreenCard
                    title="Radar Mode"
                    image="/bottlebuddyradar.png"
                    description="Uses progressive visual feedback instead of distance numbers, helping users tell whether they are getting warmer or colder."
                />

                <ScreenCard
                    title="Success"
                    image="/bottlebuddysuccess.png"
                    description="Closes the interaction with celebratory feedback, turning a frustrating moment into a satisfying one."
                />
            </div>

            <Section label="08 / WHY THE INTERACTIONS WORK" title="Designing for calm feedback">
                <p>
                    The biggest design decision in BottleBuddy was avoiding false
                    precision. Rather than pretending the system knew an exact location, I
                    focused on feedback that felt directional, legible, and low-pressure.
                    That made the experience more honest and more usable at the same time.
                </p>

                <p className="mt-6">
                    The retro visual language also helped reinforce that mindset. It made
                    the product feel exploratory and encouraging, which fit the search
                    experience much better than a surveillance-heavy or overly technical
                    interface would have.
                </p>
            </Section>

            <Section label="09 / TAKEAWAYS" title="What I learned">
                <p>
                    BottleBuddy taught me a lot about designing systems around uncertainty.
                    Not every product problem needs to be solved with more data or more
                    precision. Sometimes the better move is to communicate ambiguity well
                    and help users feel oriented enough to act.
                </p>

                <p className="mt-6">
                    It also pushed me to think more intentionally about interaction states.
                    I was not just designing individual screens — I was designing how
                    confidence changes over time as someone moves from frustration to
                    clarity. That is probably my favorite part of the project.
                </p>
            </Section>

            <section className="rounded-[2rem] border-2 border-black/80 bg-card p-6 pixel-shadow">
                <p className="font-pixel text-[10px] text-accent">10 / PROTOTYPE</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                    View the interactive prototype
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
                    This project was built as an interactive Figma prototype focused on
                    flow, state transitions, and visual feedback.
                </p>

                <div className="mt-6">
                    <a
                        href="https://www.figma.com/design/gkphDGxjywAvyqpnFcvBGh/BottleBuddy---Otis?node-id=1-3&t=ZjnBVTd5xEWnOvk2-1"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-2xl border-2 border-black bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    >
                        Open Figma Prototype
                    </a>
                </div>
            </section>
        </div>
    );
}