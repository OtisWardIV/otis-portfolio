"use client";

import { useEffect, useState } from "react";

export default function BootLoader({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mounted, setMounted] = useState(false);
    const [done, setDone] = useState(false);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("Booting OTIS_WARD.exe");

    useEffect(() => {
        const hasSeenLoader = sessionStorage.getItem("otis-loader-seen");

        if (hasSeenLoader) {
            setMounted(true);
            setDone(true);
            return;
        }

        setMounted(true);

        const messages = [
            "Booting OTIS_WARD.exe",
            "Loading portfolio assets...",
            "Initializing selected work...",
            "Rendering player profile...",
            "Ready",
        ];

        let currentStep = 0;

        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = Math.min(prev + 10, 100);

                if (next >= (currentStep + 1) * 20 && currentStep < messages.length - 1) {
                    currentStep += 1;
                    setMessage(messages[currentStep]);
                }

                if (next === 100) {
                    clearInterval(interval);

                    setTimeout(() => {
                        sessionStorage.setItem("otis-loader-seen", "true");
                        setDone(true);
                    }, 350);
                }

                return next;
            });
        }, 120);

        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    if (!done) {
        const filledBlocks = Math.floor(progress / 10);
        const emptyBlocks = 10 - filledBlocks;

        return (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgb(var(--bg))]">
                <div className="w-full max-w-2xl px-6">
                    <div className="rounded-[2rem] border-2 border-black bg-card p-8 pixel-shadow">
                        <div className="space-y-6">
                            <p className="font-pixel text-[10px] text-accent">SYSTEM BOOT</p>

                            <div className="space-y-3">
                                <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                                    {message}
                                </h1>

                                <p className="text-base leading-7 text-muted">
                                    Entering portfolio world...
                                </p>
                            </div>

                            <div className="rounded-2xl border-2 border-black/80 bg-white p-4">
                                <p className="font-pixel break-all text-[10px] leading-6 text-accent sm:text-xs">
                                    [{"█".repeat(filledBlocks)}
                                    <span className="text-black/20">{"░".repeat(emptyBlocks)}</span>]
                                </p>
                            </div>

                            <div className="flex items-center justify-between text-sm text-muted">
                                <span>{progress}%</span>
                                <span className="font-pixel text-[9px] text-accent">
                                    PLAYER 01
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <div className="animate-fadeIn">{children}</div>;
}