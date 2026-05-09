import Image from "next/image";
import Link from "next/link";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/courses", label: "Courses" },
    { href: "/resume", label: "Resume" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(248,245,237,0.82)] backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                <Link href="/" className="flex items-center gap-4">

                    {/* Logo */}
                    <Image
                        src="/logo.png"
                        alt="OW Logo"
                        width={100}
                        height={100}
                        priority
                        className="object-contain select-none"
                        style={{ imageRendering: "pixelated" }}
                    />

                    {/* Name */}
                    <div className="hidden sm:block leading-tight">
                        <p className="font-pixel text-[9px] text-accent tracking-widest">
                            PLAYER 01
                        </p>
                        <p className="text-sm font-semibold tracking-wide text-ink">
                            Otis Ward
                        </p>
                    </div>

                </Link>

                {/* Nav */}
                <nav className="flex items-center gap-4 sm:gap-7">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted transition hover:text-ink"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
    );
}