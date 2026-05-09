import Image from "next/image";
import Link from "next/link";

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
        <section className="space-y-4 rounded-3xl border-2 border-black/80 bg-card p-6 pixel-shadow">
            <div className="space-y-2">
                <p className="font-pixel text-[10px] text-accent">{label}</p>
                <h2 className="text-3xl font-semibold tracking-tight text-ink">
                    {title}
                </h2>
            </div>

            <div className="max-w-4xl space-y-4 text-[15px] leading-8 text-muted">
                {children}
            </div>
        </section>
    );
}

function ImageCard({
    src,
    alt,
    caption,
}: {
    src: string;
    alt: string;
    caption: string;
}) {
    return (
        <div className="rounded-3xl border-2 border-black/80 bg-card p-4 pixel-shadow">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <Image
                    src={src}
                    alt={alt}
                    width={1400}
                    height={900}
                    className="h-auto w-full object-cover"
                />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{caption}</p>
        </div>
    );
}

export default function Design121Week4Page() {
    return (
        <div className="space-y-10">
            <div className="space-y-3">
                <Link
                    href="/courses/design-121/dp1"
                    className="inline-block text-sm text-muted transition hover:text-ink"
                >
                    ← Back to DP1
                </Link>

                <p className="font-pixel text-[10px] text-accent">
                    DESIGN 121 / DP1 / WEEK 4
                </p>

                <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                    Week 4 Teach One
                </h1>

                <p className="max-w-3xl text-lg leading-8 text-muted">
                    This week helped me understand that ideas are only valuable once they
                    start becoming real. It was less about finding the perfect idea right
                    away, and more about generating, testing, building, and seeing what
                    actually has enough tension to move forward.
                </p>
            </div>

            <Section label="01 / WEEK OVERVIEW" title="From opportunity to concept">
                <p>
                    Week 4 felt like the moment where our team had to stop living in the
                    abstract. Last week, we were focused on insights and opportunity
                    areas. This week pushed us to activate those opportunities by turning
                    them into actual ideas, rough concepts, and low-fidelity prototypes.
                </p>

                <p>
                    What stood out to me was that ideation is not just about being
                    creative. It is also about staying disciplined enough to keep ideas
                    connected to a real user, a real tension, and a real behavior.
                </p>
            </Section>

            <ImageCard
                src="/build-to-think.png"
                alt="Generate and build to think slide"
                caption="This slide captured the biggest shift for me: ideas get stronger when you build something rough enough to react to."
            />

            <Section label="02 / WHAT I LEARNED" title="The goal is not one perfect idea">
                <p>
                    One of the biggest lessons from this week was that the goal of
                    ideation is not to immediately land on the best idea. The goal is to
                    create enough ideas that you can start seeing patterns, surprises, and
                    directions worth developing.
                </p>

                <p>
                    That changed how I thought about our Forager work. I realized I had
                    been trying to make ideas feel polished too early, when the better move
                    was to get more ideas out first and then decide which ones had the
                    strongest connection to our user.
                </p>

                <p>
                    It reminded me that judgment has a time and place. If you judge too
                    early, you shrink the possibilities before they even have a chance to
                    become interesting.
                </p>
            </Section>

            <ImageCard
                src="/ideation-rules.png"
                alt="Ideation rules"
                caption="These ideation reminders were useful because they made the process feel more open: build on others, defer judgment, stay focused, be visual, and go for quantity."
            />

            <Section label="03 / WHAT CHANGED FOR ME" title="Build first, think sharper after">
                <p>
                    The idea of “build to think” really clicked for me. Before this week,
                    I thought of prototyping as something you do after the idea is mostly
                    figured out. Now I see it more as part of figuring the idea out.
                </p>

                <p>
                    A rough prototype gives you something to react to. Once something is
                    physical, visual, or acted out, you can immediately see what feels off,
                    what feels confusing, and what feels promising.
                </p>

                <p>
                    For me, that was a big design lesson: sometimes you do not think your
                    way into clarity — you make your way into clarity.
                </p>
            </Section>

            <ImageCard
                src="/prototype-methods.png"
                alt="Prototype methods"
                caption="This framework helped me think about matching the prototype material to the idea: physical product, packaging, app/digital, or service interaction."
            />

            <Section label="04 / HOW IT SHOWED UP IN OUR TEAM WORK" title="Forager as familiar, not foreign">
                <p>
                    In our team work, we started moving toward a clearer concept around
                    Forager Daily Nourishment. The idea was to make plant-based nutrition
                    feel familiar, trustworthy, and routine-based instead of overly new or
                    intimidating.
                </p>

                <p>
                    Our direction was inspired by products like Ensure, but reimagined
                    through Forager’s values: simple ingredients, wellness, recovery, and
                    daily nourishment. Instead of leading with “vegan” or “alternative,”
                    the concept focused on making the product feel comforting, clean, and
                    easy to understand.
                </p>

                <p>
                    What I liked about this direction was that it came directly from our
                    user tension. For older or more traditional users, the barrier was not
                    just taste. It was trust. The design opportunity became less about
                    convincing someone to change and more about making the new thing feel
                    like something they already understand.
                </p>
            </Section>

            <ImageCard
                src="/forager-product-line.png"
                alt="Forager product line concept"
                caption="Our team explored a Forager Daily Nourishment line with products like wellness drinks, powders, overnight oats, and probiotic shots."
            />

            <Section label="05 / KEY THINGS I’M TAKING FORWARD" title="What I want to remember">
                <p>
                    First, I want to remember that strong ideas usually come from volume.
                    You need enough ideas on the table before you can recognize which ones
                    are actually worth building on.
                </p>

                <p>
                    Second, I want to keep using low-fidelity prototypes earlier. A sketch,
                    mockup, label, or quick roleplay can reveal more than a long
                    conversation about the idea.
                </p>

                <p>
                    Third, I want to keep checking whether an idea connects back to the
                    user tension. If the idea does not address the tension, then it might
                    be interesting, but it is probably not the right idea.
                </p>
            </Section>

            <Section label="06 / MY TAKEAWAY" title="Teach one in a sentence">
                <p>
                    What I’m taking from Week 4 is that design ideas become stronger when
                    you stop protecting them in your head and start making them real
                    enough to question, test, and improve.
                </p>
            </Section>
        </div>
    );
}