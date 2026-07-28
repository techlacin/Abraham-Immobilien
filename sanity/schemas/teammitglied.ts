import { defineField, defineType } from "sanity";

export const teammitglied = defineType({
  name: "teammitglied",
  title: "Teammitglied",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Name", validation: (r) => r.required() }),
    defineField({ name: "rolle", type: "string", title: "Rolle / Position" }),
    defineField({ name: "bild", type: "image", title: "Foto", options: { hotspot: true } }),
    defineField({ name: "kurzbiografie", type: "text", title: "Kurzbiografie", rows: 3 }),
    defineField({ name: "reihenfolge", type: "number", title: "Reihenfolge" }),
  ],
  orderings: [
    {
      title: "Reihenfolge",
      name: "reihenfolge",
      by: [{ field: "reihenfolge", direction: "asc" }],
    },
  ],
});
