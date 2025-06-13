"use client";

import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from "@/app/resources/content";
import { useInView } from "react-intersection-observer";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  const isVideo = (src: string) =>
    src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map((media, index) => {
        const aspectRatio =
          media.orientation === "horizontal" ? "16 / 9" : "9 / 16";

        if (isVideo(media.src)) {
          const { ref, inView } = useInView({
            triggerOnce: true,
            rootMargin: "200px",
          });

          return (
            <div
              key={index}
              ref={ref}
              style={{ width: "100%", aspectRatio }}
              className={styles.gridItem}
            >
              {inView && (
                <video
                  src={media.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  poster={media.poster || "/images/placeholder.jpg"} // Optional poster fallback
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              )}
            </div>
          );
        }

        return (
          <SmartImage
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
            key={index}
            radius="m"
            aspectRatio={aspectRatio}
            src={media.src}
            alt={media.alt}
            className={styles.gridItem}
          />
        );
      })}
    </Masonry>
  );
}
