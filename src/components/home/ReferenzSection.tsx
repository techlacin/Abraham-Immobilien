export function ReferenzSection() {
  const bezirke = ["Charlottenburg", "Mitte", "Prenzlauer Berg", "Neukölln", "Reinickendorf"];

  return (
    <section className="border-y border-grey/20 bg-background px-6 py-12 text-center lg:py-14">
      <p className="mx-auto max-w-4xl font-sans text-[11px] uppercase leading-[2.2] tracking-[0.28em] text-grey lg:text-xs">
        Transaktionen in{" "}
        {bezirke.map((b, i) => (
          <span key={b}>
            {b}
            {i < bezirke.length - 1 && <span className="text-gold"> · </span>}
          </span>
        ))}
      </p>
    </section>
  );
}
