import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-24 border-t border-black/10 bg-accent px-8 py-12">
            <div className="mx-auto flex max-w-6xl items-center justify-between">

                {/* Name */}
                <p className="font-mono text-lg text-white">
                    Otis Dean Ward, IV
                </p>

                {/* Links */}
                <div className="flex items-center gap-8 font-mono text-lg text-white">

                    <a
                        href="https://www.linkedin.com/in/otiswardiv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:opacity-70"
                    >
                        LinkedIn
                    </a>

                    <Link
                        href="/contact"
                        className="transition hover:opacity-70"
                    >
                        Email
                    </Link>

                </div>

            </div>
        </footer>
    );
}