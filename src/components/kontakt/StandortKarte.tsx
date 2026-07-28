"use client";

import { APIProvider, AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const STANDORT = { lat: 52.5027, lng: 13.3317 }; // Kurfürstendamm 15, 10719 Berlin

export function StandortKarte() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <ImagePlaceholder
        label="[Karte: Kurfürstendamm 15 — erscheint, sobald der Google-Maps-API-Key hinterlegt ist]"
        className="h-full min-h-96 w-full"
      />
    );
  }

  return (
    <div className="h-full min-h-96 w-full grayscale">
      <Map
        defaultCenter={STANDORT}
        defaultZoom={15}
        mapId="abraham-immobilien-standort"
        disableDefaultUI
        gestureHandling="cooperative"
        style={{ width: "100%", height: "100%" }}
      >
        <AdvancedMarker position={STANDORT} title="Abraham Immobilien Advisors GmbH" />
      </Map>
    </div>
  );
}

export function StandortKarteProvider() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) return <StandortKarte />;
  return (
    <APIProvider apiKey={apiKey}>
      <StandortKarte />
    </APIProvider>
  );
}
