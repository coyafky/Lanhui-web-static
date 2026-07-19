"use client";

import { useState } from "react";
import { ColorFilmStyleSelector } from "@/components/color-film/ColorFilmStyleSelector";
import { ColorFilmGallery } from "@/components/color-film/ColorFilmGallery";

export function ColorFilmPageClient() {
  const [activeStyle, setActiveStyle] = useState<string | null>(null);

  return (
    <>
      <ColorFilmStyleSelector
        activeStyle={activeStyle}
        onStyleChange={setActiveStyle}
      />
      <ColorFilmGallery activeStyle={activeStyle} />
    </>
  );
}
