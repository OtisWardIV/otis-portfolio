"use client";

import { useState } from "react";

export default function ContactPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus("error");
                setErrorMessage(data.error || "Failed to send message.");
                return;
            }

            setStatus("success");
            setEmail("");
            setMessage("");
        } catch {
            setStatus("error");
            setErrorMessage("Failed to send message.");
        }
    }

    return (
        <div className="mx-auto max-w-2xl space-y-8">
            <div className="space-y-3">
                <p className="font-pixel text-[10px] text-accent">CONTACT</p>
                <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                    Contact me!
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted">
                    Got an opportunity, idea, or just want to reach out? Send me a message.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] border-2 border-black/80 bg-card p-6 pixel-shadow space-y-6"
            >
                <div>
                    <label className="mb-2 block text-lg text-muted">Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-muted outline-none focus:border-black/30"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-lg text-muted">Message</label>
                    <textarea
                        required
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message..."
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-muted outline-none focus:border-black/30"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-2xl border-2 border-black bg-accent px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
                >
                    {status === "loading" ? "Sending..." : "Submit"}
                </button>

                {status === "success" && (
                    <p className="text-sm text-green-700">
                        Message sent — I’ll get back to you soon.
                    </p>
                )}

                {status === "error" && (
                    <p className="text-sm text-red-700">
                        {errorMessage || "Something went wrong."}
                    </p>
                )}
            </form>
        </div>
    );
}