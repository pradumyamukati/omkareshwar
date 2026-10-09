import type { ReactNode } from "react";
import Link from "next/link";
import { isTempleSiteUrl, officialSources, templeSiteText, type OfficialKey } from "@/lib/official";
import { pathFor } from "@/lib/paths";
import type { Lang } from "@/lib/types";

const token = /\[\[([^|\]]+)\|([^\]]+)\]\]|\{\{([a-zA-Z0-9]+)\|([^}]+)\}\}/g;

function emphasize(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  text.split(/(\*\*[^*]+\*\*)/g).forEach((part, index) => {
    if (!part) return;
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      nodes.push(<strong key={`${keyPrefix}-${index}`}>{part.slice(2, -2)}</strong>);
      return;
    }
    nodes.push(part);
  });
  return nodes;
}

export function RichText({ text, lang }: { text: string; lang: Lang }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const pattern = new RegExp(token);
  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(...emphasize(text.slice(last, match.index), `t-${last}`));
    if (match[1] && match[2]) {
      nodes.push(
        <Link key={`${match.index}-in`} href={pathFor(lang, match[1])}>
          {emphasize(match[2], `${match.index}-in`)}
        </Link>,
      );
    } else if (match[3] && match[4]) {
      const key = match[3] as OfficialKey;
      const href = officialSources[key];
      if (isTempleSiteUrl(href)) {
        nodes.push(templeSiteText);
      } else {
        nodes.push(
          <a key={`${match.index}-ex`} href={href} target="_blank" rel="nofollow noopener noreferrer">
            {emphasize(match[4], `${match.index}-ex`)}
          </a>,
        );
      }
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(...emphasize(text.slice(last), `t-${last}`));
  return <>{nodes}</>;
}

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="nofollow noopener noreferrer">
      {children}
    </a>
  );
}
