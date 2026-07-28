import { z } from "zod";

/** DSGVO-Zustimmung als Pflichtfeld. */
const datenschutz = z.boolean().refine((v) => v === true, {
  message: "Bitte stimmen Sie der Datenschutzerklärung zu.",
});

const name = z.string().min(2, "Bitte geben Sie Ihren Namen an.").max(120);
const email = z.email("Bitte geben Sie eine gültige E-Mail-Adresse an.");
const telefon = z.string().min(6, "Bitte geben Sie eine Telefonnummer an.").max(40);

export const objekttypen = ["Wohnung", "Haus", "Wohn- und Geschäftshaus", "Gewerbe", "Grundstück"] as const;
export const bezirke = [
  "Charlottenburg-Wilmersdorf",
  "Mitte",
  "Pankow / Prenzlauer Berg",
  "Friedrichshain-Kreuzberg",
  "Neukölln",
  "Reinickendorf",
  "Steglitz-Zehlendorf",
  "Tempelhof-Schöneberg",
  "Anderer Bezirk",
] as const;
export const budgets = [
  "bis 1 Mio. €",
  "1–3 Mio. €",
  "3–10 Mio. €",
  "über 10 Mio. €",
] as const;
export const volumina = ["Einzelobjekt", "Portfolio"] as const;
export const wertspannen = [
  "bis 1 Mio. €",
  "1–3 Mio. €",
  "3–10 Mio. €",
  "über 10 Mio. €",
  "Noch unklar",
] as const;

export const kontaktSchema = z.object({
  name,
  email,
  telefon: z.string().max(40).optional().or(z.literal("")),
  nachricht: z.string().min(10, "Bitte schreiben Sie uns ein paar Sätze.").max(5000),
  datenschutz,
});

export const investorSchema = z.object({
  formType: z.literal("investor"),
  name,
  email,
  telefon,
  unternehmen: z.string().max(200).optional().or(z.literal("")),
  objekttyp: z.enum(objekttypen, "Bitte wählen Sie einen Objekttyp."),
  bezirk: z.enum(bezirke, "Bitte wählen Sie einen Bezirk."),
  budget: z.enum(budgets, "Bitte wählen Sie einen Budget-Rahmen."),
  volumen: z.enum(volumina, "Bitte wählen Sie das Volumen."),
  nachricht: z.string().max(5000).optional().or(z.literal("")),
  datenschutz,
});

export const eigentuemerSchema = z.object({
  formType: z.literal("eigentuemer"),
  name,
  email,
  telefon,
  objekttyp: z.enum(objekttypen, "Bitte wählen Sie einen Objekttyp."),
  bezirk: z.enum(bezirke, "Bitte wählen Sie einen Bezirk."),
  wert: z.enum(wertspannen, "Bitte wählen Sie eine Wertspanne."),
  nachricht: z.string().max(5000).optional().or(z.literal("")),
  datenschutz,
});

export const offMarketSchema = z.discriminatedUnion("formType", [
  investorSchema,
  eigentuemerSchema,
]);

export type KontaktDaten = z.infer<typeof kontaktSchema>;
export type InvestorDaten = z.infer<typeof investorSchema>;
export type EigentuemerDaten = z.infer<typeof eigentuemerSchema>;
export type OffMarketDaten = z.infer<typeof offMarketSchema>;
