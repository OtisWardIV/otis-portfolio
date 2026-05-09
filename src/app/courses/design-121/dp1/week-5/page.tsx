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
                    width={1600}
                    height={900}
                    className="h-auto w-full object-cover"
                />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{caption}</p>
        </div>
    );
}

export default function Design121Week5Page() {
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
                    DESIGN 121 / DP1 / WEEK 5
                </p>

                <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                    Week 5 Teach One
                </h1>

                <p className="max-w-3xl text-lg leading-8 text-muted">
                    This week was about turning our research, insights, and early ideas
                    into a final product story. For our Forager project, that became
                    Forager Daily Nourishment: a product line designed to make plant-based
                    nutrition feel familiar, trustworthy, and easy to fold into daily life.
                </p>
            </div>

            <Section label="01 / WEEK OVERVIEW" title="From concept to final story">
                <p>
                    Week 5 felt like the moment where everything had to come together. In
                    earlier weeks, we were focused on research, synthesis, and rough ideas.
                    This week was about turning that work into a clear presentation and a
                    product direction that actually made sense.
                </p>

                <p>
                    The biggest shift for me was realizing that a final concept is not
                    just about showing a cool product. It is about showing why that product
                    exists, who it is for, what tension it responds to, and why it feels
                    like a believable next step.
                </p>
            </Section>

            <Section label="02 / FINAL DIRECTION" title="Forager Daily Nourishment">
                <p>
                    Our final direction was Forager Daily Nourishment, a wellness-focused
                    product line built around simple ingredients, familiar flavors, and
                    daily routines. The goal was to make non-dairy feel less like a risky
                    alternative and more like something people could already understand.
                </p>

                <p>
                    We framed the project around the question: how might we make non-dairy
                    feel as trustworthy and familiar as the products “The Senior” has
                    always relied on? That question shaped the whole product line and
                    helped us stay grounded in trust, routine, and familiarity.
                </p>
            </Section>

            <ImageCard
                src="/forager-week5-wellness-drink.jpeg"
                alt="Forager Wellness Drink concept"
                caption="The Wellness Drink concept reimagines the nutrition shake through familiar bottles, nostalgic flavors, and simple daily wellness cues."
            />

            <Section label="03 / WHAT I LEARNED" title="Framing is part of the design">
                <p>
                    One thing that really clicked for me this week is that the product
                    itself is only part of the solution. The framing matters just as much.
                    Calling something vegan, alternative, or innovative can be exciting to
                    one audience, but alienating to another.
                </p>

                <p>
                    For our users, especially older and more routine-oriented users, trust
                    was the core design problem. That meant our product language had to
                    feel simple, natural, and familiar instead of trendy or overly complex.
                </p>

                <p>
                    This changed how I thought about product design. Sometimes the
                    opportunity is not to invent something completely new, but to make
                    something new feel like it already belongs.
                </p>
            </Section>

            <ImageCard
                src="/forager-week5-wellness-powder.jpeg"
                alt="Forager Wellness Powder concept"
                caption="The Wellness Powder pushed the concept into a flexible format that could mix into water, milk, smoothies, or oats without forcing one specific routine."
            />

            <Section label="04 / HOW OUR THINKING EVOLVED" title="Designing around what people already do">
                <p>
                    Across our interviews, we kept seeing the same priorities come up:
                    nutrition, routine, simplicity, and products that support day-to-day
                    life. That became the foundation of our design process.
                </p>

                <p>
                    Instead of asking people to change their behavior, we asked how Forager
                    could fit into behaviors that already exist. That is why our product
                    line included formats like drinks, powders, overnight oats, and small
                    probiotic shots. Each one connects to a routine people already
                    understand.
                </p>

                <p>
                    This was probably my biggest takeaway: if you design around existing
                    behavior, the product has a much better chance of feeling natural.
                </p>
            </Section>

            <ImageCard
                src="/forager-week5-overnight-oats.jpeg"
                alt="Forager Overnight Oats concept"
                caption="The Overnight Oats concept turned Daily Nourishment into a ready-by-morning meal built around convenience, protein, fiber, and familiar flavors."
            />

            <Section label="05 / MY ROLE IN THE STORY" title="Connecting the insight to the product">
                <p>
                    My part of the presentation focused on connecting our participant
                    insights to the product direction. I talked about how nutrition,
                    routine, simplicity in flavors and ingredients, and lifestyle support
                    kept showing up across our research.
                </p>

                <p>
                    I also helped frame the core insight: Forager already has a lot of
                    what this audience is looking for — healthy, wholesome, simple, and
                    delicious products — but it needed to be restructured and targeted in
                    a way that made sense for older users.
                </p>

                <p>
                    That helped me see how important storytelling is in design. The product
                    needs to be strong, but the reasoning behind it has to be clear too.
                </p>
            </Section>

            <ImageCard
                src="/forager-week5-wellness-chaser.jpeg"
                alt="Forager Wellness Chaser concept"
                caption="The Wellness Chaser concept turned a daily medication moment into a small gut-health ritual, using a weekly pack of seven to reduce decision fatigue."
            />

            <Section label="06 / KEY THINGS I’M TAKING FORWARD" title="What I want to remember">
                <p>
                    First, I want to remember that a strong concept should always connect
                    back to a real user tension. If the product does not clearly respond to
                    that tension, then the idea probably needs more work.
                </p>

                <p>
                    Second, I want to keep thinking about language as a design material.
                    The words on the packaging, the name of the product, and the way the
                    concept is introduced all shape whether people trust it.
                </p>

                <p>
                    Third, I want to keep designing around routines. People are more likely
                    to adopt something when it fits into what they already do, instead of
                    forcing them to become a different version of themselves.
                </p>
            </Section>

            <Section label="07 / MY TAKEAWAY" title="Teach one in a sentence">
                <p>
                    What I’m taking from Week 5 is that good design does not just make
                    something new — it makes the new thing feel understandable, trustworthy,
                    and easy to welcome into someone’s life.
                </p>
            </Section>
        </div>
    );
}