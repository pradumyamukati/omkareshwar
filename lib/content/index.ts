import { culturePages } from "./culture";
import { placePages } from "./places";
import { policyPages } from "./policy";
import { routePages } from "./routes";
import { stayPages } from "./stay";
import { templePages } from "./temple";
import { templeVisitPages } from "./temple-visit";
import { travelPages } from "./travel";
import { yatraPages } from "./yatra";
import type { PageDef } from "../types";

export const pages: PageDef[] = [
  ...templePages,
  ...templeVisitPages,
  ...travelPages,
  ...routePages,
  ...placePages,
  ...stayPages,
  ...culturePages,
  ...yatraPages,
  ...policyPages,
];

export function getPage(slug: string) {
  return pages.find((page) => page.slug === slug);
}
