import { HomePage } from "@/components/HomePage";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata("hi");

export default function HindiHome() {
  return <HomePage lang="hi" />;
}
