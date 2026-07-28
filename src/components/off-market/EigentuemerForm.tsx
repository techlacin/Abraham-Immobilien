"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  eigentuemerSchema,
  type EigentuemerDaten,
  objekttypen,
  bezirke,
  wertspannen,
} from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { CheckboxRow, Field, FormStatus, Honeypot, honeypotWert, Input, Select, Textarea } from "@/components/ui/form";

export function EigentuemerForm() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EigentuemerDaten>({
    resolver: zodResolver(eigentuemerSchema),
    defaultValues: { formType: "eigentuemer", datenschutz: false },
  });

  const onSubmit = async (daten: EigentuemerDaten, event?: React.BaseSyntheticEvent) => {
    setStatus(null);
    try {
      const res = await fetch("/api/off-market", {
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
      <input type="hidden" {...register("formType")} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="eig-name" error={errors.name?.message}>
          <Input id="eig-name" autoComplete="name" {...register("name")} />
        </Field>
        <Field label="E-Mail" htmlFor="eig-email" error={errors.email?.message}>
          <Input id="eig-email" type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Telefon" htmlFor="eig-telefon" error={errors.telefon?.message}>
          <Input id="eig-telefon" type="tel" autoComplete="tel" {...register("telefon")} />
        </Field>
        <Field label="Objekttyp" htmlFor="eig-objekttyp" error={errors.objekttyp?.message}>
          <Select id="eig-objekttyp" defaultValue="" {...register("objekttyp")}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {objekttypen.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Bezirk (grob)" htmlFor="eig-bezirk" error={errors.bezirk?.message}>
          <Select id="eig-bezirk" defaultValue="" {...register("bezirk")}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {bezirke.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Geschätzter Wert" htmlFor="eig-wert" error={errors.wert?.message}>
          <Select id="eig-wert" defaultValue="" {...register("wert")}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {wertspannen.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Nachricht (optional)" htmlFor="eig-nachricht" error={errors.nachricht?.message}>
        <Textarea id="eig-nachricht" {...register("nachricht")} />
      </Field>

      <CheckboxRow id="eig-datenschutz" error={errors.datenschutz?.message} {...register("datenschutz")}>
        Ich habe die{" "}
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-gold-dark">
          Datenschutzerklärung
        </Link>{" "}
        gelesen und stimme der Verarbeitung meiner Angaben zu.
      </CheckboxRow>

      <div>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet …" : "Vertraulich anfragen"}
        </Button>
      </div>

      <FormStatus status={status} />
    </form>
  );
}
