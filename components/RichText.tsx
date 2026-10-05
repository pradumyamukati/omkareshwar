import type { ReactNode } from "react";
import Link from "next/link";
import { officialSources, type OfficialKey } from "@/lib/official";
import { pathFor } from "@/lib/paths";
import type { Lang } from "@/lib/types";

const token = /\[\[([^|\]]+)\|([^\]]+)\]\]|\{\{([a-zA-Z0-9]+)\|([^}]+)\}\}/g;

export function RichText({ text, lang }: { text: string; lang: Lang }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const pattern = new RegExp(token);
  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] && match[2]) {
      nodes.push(
        <Link key={`${match.index}-in`} href={pathFor(lang, match[1])}>
          {match[2]}
        </Link>,
      );
    } else if (match[3] && match[4]) {
      const key = match[3] as OfficialKey;
      const href = officialSources[key];
      nodes.push(
        <a key={`${match.index}-ex`} href={href} target="_blank" rel="nofollow noopener noreferrer">
          {match[4]}
        </a>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
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
