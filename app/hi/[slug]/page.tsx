import { notFound } from "next/navigation";
import { Article } from "@/components/Article";
import { pages, getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return pageMetadata(page, "hi");
}

export default async function HindiPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return <Article page={page} lang="hi" />;
}
