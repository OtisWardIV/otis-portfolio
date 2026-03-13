"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border-2 border-black/80 bg-card p-6 pixel-shadow">
      <p className="font-pixel text-[10px] text-accent">{title}</p>
      <div className="mt-4 text-[15px] leading-7 text-muted">{children}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/15 bg-white px-3 py-1 text-sm text-muted">
      {children}
    </span>
  );
}

function MusicCard({
  artist,
  track,
  image,
  isPlaying,
  onToggle,
}: {
  artist: string;
  track: string;
  image: string;
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="group w-full rounded-3xl border-2 border-black/80 bg-card p-4 text-left pixel-shadow transition hover:-translate-y-1"
    >
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white">
        <Image
          src={image}
          alt={artist}
          width={640}
          height={640}
          className="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">
          <div className="translate-y-2 rounded-2xl border-2 border-black bg-accent px-4 py-2 opacity-0 pixel-shadow transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="font-pixel text-[10px] text-white">
              {isPlaying ? "PAUSE" : "PRESS PLAY"}
            </span>
          </div>
        </div>

        {isPlaying && (
          <div className="absolute left-3 top-3 rounded-full border-2 border-black bg-white px-2 py-1">
            <span className="font-pixel text-[8px] text-accent">NOW PLAYING</span>
          </div>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-base font-semibold text-ink">{artist}</p>
        <p className="text-sm text-muted">{track}</p>
      </div>
    </button>
  );
}

function CartridgeCard({
  title,
  image,
  accent,
}: {
  title: string;
  image: string;
  accent: string;
}) {
  return (
    <div className="group rounded-3xl border-2 border-black/80 bg-card p-4 pixel-shadow transition hover:-translate-y-1">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-pixel text-[9px] text-accent">GAME CART</span>
        <div className="h-3 w-14 rounded-full bg-black/10" />
      </div>

      <div
        className="rounded-[22px] border-2 border-black/70 p-3"
        style={{ backgroundColor: accent }}
      >
        <div className="overflow-hidden rounded-2xl border-2 border-black/60 bg-white">
          <Image
            src={image}
            alt={title}
            width={640}
            height={640}
            className="aspect-square w-full object-cover"
          />
        </div>
      </div>

      <p className="mt-3 text-base font-semibold text-ink">{title}</p>
    </div>
  );
}

const musicData = [
  {
    artist: "Lil Tecca",
    track: "Dark Thoughts",
    image: "/liltecca.png",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/df/e7/db/dfe7dbb5-9c6a-4c47-b0d9-db6d56e5b3bc/mzaf_4113229891781230283.plus.aac.p.m4a",
  },
  {
    artist: "SZA",
    track: "Chill Baby",
    image: "/sza.png",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/71/a7/ef/71a7ef29-349b-47f7-f6c8-e45048be8fb1/mzaf_674399609375948010.plus.aac.p.m4a",
  },
  {
    artist: "Kendrick Lamar",
    track: "TV Off",
    image: "/kendrick.png",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fb/20/31/fb203190-148f-f2be-6ad6-47c5a165f7b9/mzaf_5391716550911069545.plus.aac.p.m4a",
  },
  {
    artist: "GIVEON",
    track: "Avalanche",
    image: "/giveon.png",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/29/0d/a8/290da821-2cc8-3b87-d2d3-d424c6edb5cb/mzaf_11445183173488549413.plus.aac.p.m4a",
  },
];

const games = [
  {
    title: "The Legend of Zelda: Breath of the Wild",
    image: "/botw.png",
    accent: "#DDEBFF",
  },
  {
    title: "Ghost of Tsushima",
    image: "/GOT.jpg",
    accent: "#ECECEC",
  },
  {
    title: "God of War",
    image: "/godofwar.jpg",
    accent: "#F3E4D6",
  },
  {
    title: "Pokémon FireRed",
    image: "/firered.png",
    accent: "#FFE2D4",
  },
];

export default function Home() {
  const [playingArtist, setPlayingArtist] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePreview = (artist: string, previewUrl: string) => {
    if (!audioRef.current) return;

    if (playingArtist === artist) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlayingArtist(null);
      return;
    }

    audioRef.current.pause();
    audioRef.current.src = previewUrl;
    audioRef.current.currentTime = 0;
    audioRef.current.play();

    setPlayingArtist(artist);
  };

  return (
    <div className="space-y-10">
      <section className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.72fr]">
        <div className="space-y-6 pt-2">
          <div className="inline-flex items-center rounded-full border border-black/15 bg-accent-soft px-4 py-2">
            <span className="font-pixel text-[10px] text-accent">
              START SCREEN
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
              Otis Ward
            </h1>

            <p className="max-w-2xl text-xl leading-8 text-muted">
              Design Engineering student at Stanford building at the intersection
              of software, product design, and human-centered experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Tag>Stanford</Tag>
            <Tag>Design Engineering</Tag>
            <Tag>CS × UX</Tag>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/projects"
              className="rounded-2xl border-2 border-black bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              View Projects
            </Link>

            <Link
              href="/resume"
              className="rounded-2xl border-2 border-black/80 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              View Resume
            </Link>
          </div>
        </div>

        <div className="relative max-w-[420px] lg:justify-self-end">
          <div className="absolute -left-4 -top-4 z-10 rounded-2xl border-2 border-black bg-accent px-3 py-2 pixel-shadow">
            <p className="font-pixel text-[10px] text-white">PLAYER CARD</p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-white pixel-shadow">
            <div className="bg-[linear-gradient(180deg,#f7f4ed_0%,#ece7dc_100%)] p-4">
              <div className="overflow-hidden rounded-[1.5rem] border-2 border-black/70 bg-[#efe8db]">
                <Image
                  src="/me.JPG"
                  alt="Portrait of Otis Ward"
                  width={1365}
                  height={2048}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            <div className="border-t-2 border-black/80 px-5 py-4">
              <p className="font-pixel text-[9px] text-accent">OTIS_WARD.EXE</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Oakland-raised, Black, design-engineer interested in products that feel thoughtful, useful, and fun!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <InfoCard title="ABOUT ME">
          I’m really interested in building products that feel both thoughtful
          and technically real. I like work that sits in the middle of CS,
          design, systems thinking, and culture.
        </InfoCard>

        <InfoCard title="WHAT I LIKE">
          Video games, working out, anime, R&amp;B / Hip-Hop music, computer
          science, creative technology, and projects that feel meaningful and
          impactful.
        </InfoCard>

        <InfoCard title="CURRENTLY">
          Building out this portfolio the real CS way, refining my case studies,
          and pushing more toward design-engineering work that feels polished
          and intentional.
        </InfoCard>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="font-pixel text-[10px] text-accent">MEDIA</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Stories & Work Beyond Tech
          </h2>
          <p className="max-w-2xl text-muted">
            Creative and storytelling work that reflects my experiences growing up in
            Oakland and the broader impact I hope to have beyond building software.
          </p>
        </div>

        <div className="grid items-center gap-8 rounded-3xl border-2 border-black/80 bg-card p-6 pixel-shadow lg:grid-cols-2">
          <a
            href="https://www.youtube.com/watch?v=wHh3BRRMRsg"
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-black/20"
          >

            <Image
              src="/changethesystem.jpg"
              alt="Change the System Documentary"
              width={1200}
              height={675}
              className="w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">

              <div className="translate-y-2 rounded-2xl border-2 border-black bg-accent px-4 py-2 opacity-0 pixel-shadow transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                <span className="font-pixel text-[10px] text-white">
                  PRESS PLAY
                </span>

              </div>

            </div>

          </a>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-ink">
              Change the System: Building Black Wealth
            </h3>

            <p className="leading-7 text-muted">
              &quot;Change the System: Building Black Wealth&quot; is a short film documenting
              my journey as an Oakland high school senior attending financial
              education classes at the University of California, Berkeley, Haas
              School of Business, while grappling with the pressures of leaving my
              hometown and starting college life at Stanford University.
            </p>

            <p className="leading-7 text-muted">
              The film won awards at both the Alameda International Film Festival and
              the Oaklandside Event, and also received a Webby Nomination. It served
              as a model for California AB 2927, now a law that requires all
              graduating high school seniors to take one semester of personal
              finance.
            </p>


          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <p className="font-pixel text-[10px] text-accent">FAVORITE MUSIC</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Soundtrack of my life
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {musicData.map((artist) => (
            <MusicCard
              key={artist.artist}
              artist={artist.artist}
              track={artist.track}
              image={artist.image}
              isPlaying={playingArtist === artist.artist}
              onToggle={() => togglePreview(artist.artist, artist.previewUrl)}
            />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <p className="font-pixel text-[10px] text-accent">FAVORITE GAMES</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Cartridge collection
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <CartridgeCard
              key={game.title}
              title={game.title}
              image={game.image}
              accent={game.accent}
            />
          ))}
        </div>
      </section>



      <audio ref={audioRef} onEnded={() => setPlayingArtist(null)} />
    </div>
  );
}