import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const fieldBase =
  "w-full rounded-none border border-grey/40 bg-white px-4 py-3 font-sans text-sm text-foreground placeholder:text-grey transition-all duration-200 focus:border-gold focus:outline-none";

export function Field({
  label,
  htmlFor,
  error,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/70"
      >
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="font-sans text-xs text-[#a03c2e]">
          {error}
        </p>
      )}
    </div>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return <input className={`${fieldBase} ${className}`} {...rest} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className = "", ...rest } = props;
  return <textarea className={`${fieldBase} min-h-32 ${className}`} {...rest} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  const { className = "", children, ...rest } = props;
  return (
    <select className={`${fieldBase} appearance-none ${className}`} {...rest}>
      {children}
    </select>
  );
}

export function CheckboxRow({
  id,
  error,
  children,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & { id: string; error?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-none border border-grey/50 bg-white transition-all duration-200 checked:border-gold checked:bg-gold"
          {...rest}
        />
        <label htmlFor={id} className="cursor-pointer font-sans text-xs font-light leading-relaxed text-foreground/70">
          {children}
        </label>
      </div>
      {error && (
        <p role="alert" className="font-sans text-xs text-[#a03c2e]">
          {error}
        </p>
      )}
    </div>
  );
}

/** Unsichtbares Honeypot-Feld als Spam-Schutz. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="firma_webseite">Firmen-Webseite</label>
      <input id="firma_webseite" name="firma_webseite" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

/** Liest den Honeypot-Wert aus dem abgeschickten Formular. */
export function honeypotWert(event?: { target?: unknown }): string {
  const form = event?.target;
  if (!(form instanceof HTMLFormElement)) return "";
  const feld = form.elements.namedItem("firma_webseite");
  return feld instanceof HTMLInputElement ? feld.value : "";
}

export function FormStatus({ status, errorText }: { status: "success" | "error" | null; errorText?: string }) {
  if (status === "success") {
    return (
      <p role="status" className="border border-gold/50 bg-gold/5 px-4 py-3 font-sans text-sm text-foreground">
        Vielen Dank. Ihre Anfrage ist bei uns eingegangen — wir melden uns persönlich bei Ihnen.
      </p>
    );
  }
  if (status === "error") {
    return (
      <p role="alert" className="border border-[#a03c2e]/40 bg-[#a03c2e]/5 px-4 py-3 font-sans text-sm text-foreground">
        {errorText ?? "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@abraham-immobilien.de."}
      </p>
    );
  }
  return null;
}
