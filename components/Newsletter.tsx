"use client";

import { useState } from "react";
import { Reveal } from "@/components/animations";
import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="newsletter" className="border-t border-[#1a1a1a] bg-[#080808]">
      <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-serif text-xl italic text-[#a8342a]">
                Be the First to Know
              </p>
              <h2 className="mt-5 max-w-[16ch] font-display text-4xl font-normal uppercase leading-[0.9] text-[#F2F0EB] sm:text-6xl">
                New shows, first
              </h2>
              <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-[#8a8a8a]">
                First to hear when AR4 announces new music, films and shows.
              </p>
            </div>

            <div className="w-full max-w-xl">
              {status === "success" ? (
                <div className="px-6 py-8 text-center">
                  <p className="font-display text-3xl font-normal uppercase text-[#F2F0EB]">
                    You&apos;re in.
                  </p>
                  <p className="mt-3 font-serif text-lg italic text-[#8a8a8a]">
                    First to hear about new shows.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="flex flex-col gap-0 sm:flex-row">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Your email"
                      className="w-full border border-[#2a2a2a] bg-[#111] px-5 py-4 text-sm text-[#F2F0EB] placeholder:text-[#55554e] focus:border-[#a8342a] focus:outline-none"
                    />
                    <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                      Subscribe
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                  {status === "error" ? (
                    <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#a8342a]">
                      Enter a valid email address.
                    </p>
                  ) : (
                    <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#6b6b64]">
                      No spam. Unsubscribe anytime.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}