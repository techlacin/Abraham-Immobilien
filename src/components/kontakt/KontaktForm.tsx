"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { kontaktSchema, type KontaktDaten } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { CheckboxRow, Field, FormStatus, Honeypot, honeypotWert, Input, Textarea } from "@/components/ui/form";

export function KontaktForm() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<KontaktDaten>({
    resolver: zodResolver(kontaktSchema),
    defaultValues: { datenschutz: false },
  });

  const onSubmit = async (daten: KontaktDaten, event?: React.BaseSyntheticEvent) => {
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...daten, firma_webseite: honeypotWert(event) }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative flex flex-col gap-6">
      <Honeypot />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="kon-name" error={errors.name?.message}>
          <Input id="kon-name" autoComplete="name" {...register("name")} />
        </Field>
        <Field label="E-Mail" htmlFor="kon-email" error={errors.email?.message}>
          <Input id="kon-email" type="email" autoComplete="email" {...register("email")} />
        </Field>
      </div>
      <Field label="Telefon (optional)" htmlFor="kon-telefon" error={errors.telefon?.message}>
        <Input id="kon-telefon" type="tel" autoComplete="tel" {...register("telefon")} />
      </Field>
      <Field label="Nachricht" htmlFor="kon-nachricht" error={errors.nachricht?.message}>
        <Textarea id="kon-nachricht" {...register("nachricht")} />
      </Field>

      <CheckboxRow id="kon-datenschutz" error={errors.datenschutz?.message} {...register("datenschutz")}>
        Ich habe die{" "}
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-gold-dark">
          Datenschutzerklärung
        </Link>{" "}
        gelesen und stimme der Verarbeitung meiner Angaben zu.
      </CheckboxRow>

      <div>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet …" : "Nachricht senden"}
        </Button>
      </div>

      <FormStatus status={status} />
    </form>
  );
}
