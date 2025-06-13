"use client";

import { useEffect } from "react";

export function PreloadGallery() {
  useEffect(() => {
    const preload = async () => {
      try {
        // Preload selected images/videos manually
        const media = [
          "/media/gallery/image1.jpg",
          "/media/gallery/video1.mp4",
          "/media/gallery/image2.jpg",
          // Add only a few most important media files to reduce overhead
        ];

        for (const url of media) {
          if (url.endsWith(".mp4")) {
            const video = document.createElement("video");
            video.src = url;
            video.preload = "auto";
            video.muted = true; // optional
            video.style.display = "none";
            document.body.appendChild(video); // trigger loading
          } else {
            const img = new Image();
            img.src = url;
          }
        }
      } catch (err) {
        console.error("Gallery preload failed", err);
      }
    };

    // Delay to avoid interfering with first contentful paint
    const timeout = setTimeout(preload, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
