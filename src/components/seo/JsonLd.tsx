const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Abraham Immobilien Advisors GmbH",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kurfürstendamm 15",
    addressLocality: "Berlin",
    postalCode: "10719",
    addressCountry: "DE",
  },
  url: "https://www.abraham-immobilien.de",
  email: "info@abraham-immobilien.de",
  telephone: "+49 30 123 456 0",
  areaServed: "Berlin",
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
