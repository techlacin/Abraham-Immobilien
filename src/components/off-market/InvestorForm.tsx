"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  investorSchema,
  type InvestorDaten,
  objekttypen,
  bezirke,
  budgets,
  volumina,
} from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { CheckboxRow, Field, FormStatus, Honeypot, honeypotWert, Input, Select, Textarea } from "@/components/ui/form";

export function InvestorForm() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InvestorDaten>({
    resolver: zodResolver(investorSchema),
    defaultValues: { formType: "investor", datenschutz: false },
  });

  const onSubmit = async (daten: InvestorDaten, event?: React.BaseSyntheticEvent) => {
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
        <Field label="Name" htmlFor="inv-name" error={errors.name?.message}>
          <Input id="inv-name" autoComplete="name" {...register("name")} />
        </Field>
        <Field label="E-Mail" htmlFor="inv-email" error={errors.email?.message}>
          <Input id="inv-email" type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Telefon" htmlFor="inv-telefon" error={errors.telefon?.message}>
          <Input id="inv-telefon" type="tel" autoComplete="tel" {...register("telefon")} />
        </Field>
        <Field label="Unternehmen (optional)" htmlFor="inv-unternehmen" error={errors.unternehmen?.message}>
          <Input id="inv-unternehmen" autoComplete="organization" {...register("unternehmen")} />
        </Field>
        <Field label="Objekttyp" htmlFor="inv-objekttyp" error={errors.objekttyp?.message}>
          <Select id="inv-objekttyp" defaultValue="" {...register("objekttyp")}>
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
        <Field label="Bezirk" htmlFor="inv-bezirk" error={errors.bezirk?.message}>
          <Select id="inv-bezirk" defaultValue="" {...register("bezirk")}>
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
        <Field label="Budget-Rahmen" htmlFor="inv-budget" error={errors.budget?.message}>
          <Select id="inv-budget" defaultValue="" {...register("budget")}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Volumen" htmlFor="inv-volumen" error={errors.volumen?.message}>
          <Select id="inv-volumen" defaultValue="" {...register("volumen")}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {volumina.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Nachricht (optional)" htmlFor="inv-nachricht" error={errors.nachricht?.message}>
        <Textarea id="inv-nachricht" {...register("nachricht")} />
      </Field>

      <CheckboxRow id="inv-datenschutz" error={errors.datenschutz?.message} {...register("datenschutz")}>
        Ich habe die{" "}
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-gold-dark">
          Datenschutzerklärung
        </Link>{" "}
        gelesen und stimme der Verarbeitung meiner Angaben zu.
      </CheckboxRow>

      <div>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet …" : "Suchprofil senden"}
        </Button>
      </div>

      <FormStatus status={status} />
    </form>
  );
}
