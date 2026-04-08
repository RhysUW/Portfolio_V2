"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

const inputBase =
  "w-full rounded-lg px-4 py-3 text-sm border outline-none transition-all duration-200 focus:ring-2 bg-transparent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center gap-3 rounded-xl border p-10 text-center"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
      >
        <CheckCircle size={28} style={{ color: "var(--accent)" }} />
        <p className="font-medium">Message sent!</p>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm underline opacity-60 hover:opacity-100 transition-opacity"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-mono opacity-60">Name</label>
        <input
          {...register("name")}
          placeholder="Your name"
          className={cn(
            inputBase,
            errors.name ? "border-red-500/50 focus:ring-red-500/20" : "focus:ring-blue-500/20"
          )}
          style={{ borderColor: errors.name ? undefined : "var(--border)" }}
        />
        {errors.name && (
          <p className="text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-mono opacity-60">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="you@example.com"
          className={cn(
            inputBase,
            errors.email ? "border-red-500/50 focus:ring-red-500/20" : "focus:ring-blue-500/20"
          )}
          style={{ borderColor: errors.email ? undefined : "var(--border)" }}
        />
        {errors.email && (
          <p className="text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-mono opacity-60">Message</label>
        <textarea
          {...register("message")}
          placeholder="What's on your mind?"
          rows={5}
          className={cn(
            inputBase,
            "resize-none",
            errors.message ? "border-red-500/50 focus:ring-red-500/20" : "focus:ring-blue-500/20"
          )}
          style={{ borderColor: errors.message ? undefined : "var(--border)" }}
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-400 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3">
          <AlertCircle size={15} />
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "loading"}
        className="mt-1 self-start"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
