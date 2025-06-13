"use client";

import { useEffect } from "react";
import { gallery } from "@/app/resources/content";

const PreloadGallery = () => {
  useEffect(() => {
    gallery.images.forEach((image) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = image.type === "video" ? "video" : "image";
      link.href = image.src;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default PreloadGallery;
