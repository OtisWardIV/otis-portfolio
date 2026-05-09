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

export default function Design121Week3Page() {
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
                    DESIGN 121 / DP1 / WEEK 3
                </p>
                <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                    Week 3 Teach One
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted">
                    This week helped me understand that good design direction doesn’t come
                    from random ideas — it comes from being able to clearly connect who
                    you’re designing for, what tension they’re living in, and why that
                    tension is actually worth solving.
                </p>
            </div>

            <Section label="01 / WEEK OVERVIEW" title="What this week was really about">
                <p>
                    Week 3 felt like the point where our research had to start becoming
                    sharper. Up until now, we had stories, quotes, and observations from
                    interviews, but this week pushed us to ask what all of that actually
                    meant.
                </p>

                <p>
                    The big shift was moving from just collecting interesting findings to
                    forming insights and then turning those insights into opportunity
                    areas. For me, that made the work feel much more intentional. It was
                    less about saying “here’s what people told us” and more about saying
                    “here’s the deeper pattern we think matters.”
                </p>
            </Section>

            <Section label="02 / WHAT I LEARNED" title="Insights are more than summaries">
                <p>
                    The biggest thing I learned is that an insight is not just a cleaned-up
                    observation. A quote by itself is not enough, and even a theme by
                    itself is not enough. The real work is figuring out the tension
                    underneath what people say — the gap between what they want and what
                    they actually do.
                </p>

                <p>
                    That distinction really mattered to me. It made me realize that good
                    synthesis is less about organizing information and more about
                    interpreting behavior. That was probably my biggest takeaway from the
                    week.
                </p>

                <p>
                    I also learned that not every user group is equally worth designing
                    for. We talked a lot about viability, and I liked that because it made
                    the process feel more grounded. A strong opportunity is not just
                    emotionally interesting — it also has to show up often enough, matter
                    enough, and connect to a behavior people already spend money on.
                </p>
            </Section>

            <ImageCard
                src="/design121-week3-four-steps-synthesis.png"
                alt="Four steps of synthesis"
                caption="One of the most useful frameworks from the week: synthesis as a progression from surfacing what stood out, to clustering, to articulating insights, to moving those insights into action."
            />

            <Section label="03 / WHAT CHANGED FOR ME" title="Designing for everyone is designing for no one">
                <p>
                    Another big idea that stuck with me was the emphasis on clearly
                    defining who you design for. Before this week, it was easy for me to
                    think too broadly — like “people who might want plant-based dairy.”
                    But that is way too vague to design from.
                </p>

                <p>
                    What clicked for me was that the user needs to be specific in terms of
                    mindset or behavior, not just demographics. That changes the quality
                    of the design question. Once the user becomes more specific, the
                    opportunity becomes more specific too.
                </p>

                <p>
                    That helped me see that narrowing your audience is not limiting the
                    project — it is what makes the project real.
                </p>
            </Section>

            <ImageCard
                src="/design121-week3-viability-chain.png"
                alt="Viability chain"
                caption="This framework made the opportunity feel more rigorous: start with the user and their tension, then think through frequency, current spend, scale, and only then define the design opportunity."
            />

            <Section label="04 / HOW IT SHOWED UP IN OUR TEAM WORK" title="What this meant for the Forager project">
                <p>
                    In our team’s work, this week pushed us to sharpen the kinds of users
                    we were actually talking about. Instead of staying broad, we started
                    naming more specific roles and mindsets like the senior, the
                    traditionalist, and the “clean freak.” What those shared was not age
                    alone, but a preference for familiarity, routine, and products that
                    feel trustworthy.
                </p>

                <p>
                    What I found most interesting was that a lot of the tension was not
                    really about plant-based products being objectively worse — it was
                    about how “newness” can feel risky. That changed how I thought about
                    the problem. The barrier was not just taste or price; it was also
                    perception, familiarity, and whether a product felt like it could fit
                    into an already established routine.
                </p>

                <p>
                    That made our design space feel more nuanced. Instead of asking “how
                    do we convince people to switch,” the better question became something
                    closer to: how do we make the switch feel safe, familiar, and low
                    friction?
                </p>
            </Section>

            <Section label="05 / KEY THINGS I’M TAKING FORWARD" title="What I want to hold onto from this week">
                <p>
                    First, I want to keep remembering that research only becomes useful
                    when it starts changing the direction of the work. If the insight does
                    not affect what we design, then it is probably not strong enough yet.
                </p>

                <p>
                    Second, I want to be more intentional about naming tensions. I think
                    that is where a lot of the real design opportunity lives.
                </p>

                <p>
                    And third, I’m leaving this week thinking more carefully about how to
                    define users. Not by broad identity labels, but by the beliefs,
                    routines, and behaviors that shape how they move through the world.
                </p>
            </Section>

            <Section label="06 / MY TAKEAWAY" title="Teach one in a sentence">
                <p>
                    What I’m taking from Week 3 is that the strongest design opportunities
                    come from being able to clearly name a person’s tension, understand
                    how often it shows up in real life, and use that to move from “what we
                    heard” to “what we should design.”
                </p>
            </Section>
        </div>
    );
}