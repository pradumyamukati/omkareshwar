import Link from "next/link";
import { isTempleSiteUrl, officialSources, sourceCatalog, templeSiteText, type OfficialKey } from "@/lib/official";
import { pages } from "@/lib/content";
import { pathFor } from "@/lib/paths";
import { verifiedLabel, type Block, type Lang, type PageDef } from "@/lib/types";
import { pageJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";
import { Photo } from "./Photo";
import { HotelPicks } from "./HotelPicks";
import { MortakkaBooking } from "./MortakkaBooking";
import { ExternalLink, RichText } from "./RichText";

export function Blocks({ blocks, lang }: { blocks: Block[]; lang: Lang }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p key={index}>
              <RichText text={block.text} lang={lang} />
            </p>
          );
        }
        if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
        if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
        if (block.type === "ul" || block.type === "ol") {
          const Tag = block.type;
          return (
            <Tag key={index}>
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} lang={lang} />
                </li>
              ))}
            </Tag>
          );
        }
        if (block.type === "facts") {
          return (
            <dl className="facts" key={index}>
              {block.items.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    <RichText text={item.value} lang={lang} />
                  </dd>
                </div>
              ))}
            </dl>
          );
        }
        if (block.type === "ride") return <MortakkaBooking key={index} lang={lang} direction={block.direction} />;
        if (block.type === "stays") return <HotelPicks key={index} lang={lang} />;
        if (block.type === "table") {
          return (
            <div className="table-wrap" key={index}>
              <table>
                {block.caption ? <caption>{block.caption}</caption> : null}
                <thead>
                  <tr>
                    {block.headers.map((header) => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <aside className="note" key={index}>
            <RichText text={block.text} lang={lang} />
          </aside>
        );
      })}
    </>
  );
}

export function Article({ page, lang }: { page: PageDef; lang: Lang }) {
  const copy = page[lang];
  const related = page.related
    .map((slug) => pages.find((item) => item.slug === slug))
    .filter((item): item is PageDef => Boolean(item));
  return (
    <article className="article" id="content">
      <JsonLd data={pageJsonLd(page, lang)} />
      <p className="kicker">{copy.kicker}</p>
      <h1>{copy.h1}</h1>
      {page.verified ? (
        <p className="verified">
          {lang === "en" ? "Last verified" : "अंतिम जाँच"}: {verifiedLabel[lang]}
        </p>
      ) : null}
      <p className="answer">
        <RichText text={copy.answer} lang={lang} />
      </p>
      {page.image ? <Photo id={page.image} lang={lang} priority /> : null}
      <Blocks blocks={copy.blocks} lang={lang} />
      {page.sources.some((key: OfficialKey) => key !== "mpTourism") ? (
        <section className="sources" aria-labelledby="sources-title">
          <h2 id="sources-title">{lang === "en" ? "Sources" : "स्रोत"}</h2>
          <ul>
            {page.sources.some((key: OfficialKey) => key !== "mpTourism" && isTempleSiteUrl(officialSources[key])) ? (
              <li>{templeSiteText}</li>
            ) : null}
            {page.sources
              .filter((key: OfficialKey) => key !== "mpTourism" && !isTempleSiteUrl(officialSources[key]))
              .map((key: OfficialKey) => (
                <li key={key}>
                  <ExternalLink href={officialSources[key]}>{sourceCatalog[key][lang]}</ExternalLink>
                </li>
              ))}
          </ul>
        </section>
      ) : null}
      {copy.faqs.length > 0 ? (
        <section className="faq" aria-labelledby="faq-title">
          <h2 id="faq-title">{lang === "en" ? "Questions" : "प्रश्न"}</h2>
          {copy.faqs.map((item) => (
            <div key={item.q}>
              <h3>{item.q}</h3>
              <p>
                <RichText text={item.a} lang={lang} />
              </p>
            </div>
          ))}
        </section>
      ) : null}
      {related.length > 0 ? (
        <nav className="related" aria-label={lang === "en" ? "Related pages" : "संबंधित पृष्ठ"}>
          <h2>{lang === "en" ? "Related pages" : "संबंधित पृष्ठ"}</h2>
          <ul>
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={pathFor(lang, item.slug)}>{item[lang].h1}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </article>
  );
}
