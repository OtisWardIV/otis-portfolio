import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#F8F5ED]">

            {/* Logo */}
            <Image
                src="/logo.png"
                alt="Loading Logo"
                width={120}
                height={120}
                className="animate-bounce"
                style={{ imageRendering: "pixelated" }}
            />

            {/* Text */}
            <p className="mt-6 font-pixel text-sm text-accent tracking-widest">
                LOADING LEVEL...
            </p>

            {/* Loading Bar */}
            <div className="mt-4 h-3 w-48 overflow-hidden rounded-full border border-black/20">
                <div className="h-full w-1/2 animate-pulse bg-accent"></div>
            </div>

        </div>
    );
}