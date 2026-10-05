import Image from "next/image";
import { media, type MediaKey } from "@/lib/media";
import type { Lang } from "@/lib/types";
import { ExternalLink } from "./RichText";

export function Photo({
  id,
  lang,
  priority = false,
  sizes = "(max-width: 800px) 100vw, 720px",
  cover = false,
}: {
  id: MediaKey;
  lang: Lang;
  priority?: boolean;
  sizes?: string;
  cover?: boolean;
}) {
  const item = media[id];
  return (
    <figure className={cover ? "photo photo-cover" : "photo"}>
      <Image
        src={item.src}
        alt={item.alt[lang]}
        title={item.alt[lang]}
        width={item.width}
        height={item.height}
        priority={priority}
        sizes={sizes}
      />
      <figcaption>
        <span>{item.caption[lang]}</span>
        <span>
          {lang === "en" ? "Credit" : "श्रेय"}: {item.author}. {item.license}.{" "}
          <ExternalLink href={item.sourceUrl}>{lang === "en" ? "Source file" : "स्रोत फ़ाइल"}</ExternalLink>
          {" · "}
          <ExternalLink href={item.licenseUrl}>{item.license}</ExternalLink>
          {item.takenLabel[lang] ? ` · ${item.takenLabel[lang]}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}
