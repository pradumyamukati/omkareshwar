import { culturePages } from "./culture";
import { guidePages } from "./guide";
import { placePages } from "./places";
import { policyPages } from "./policy";
import { mortakkaPages } from "./mortakka";
import { routePages } from "./routes";
import { hotelGuidePages } from "./hotel-guide";
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
  ...mortakkaPages,
  ...placePages,
  ...stayPages,
  ...hotelGuidePages,
  ...culturePages,
  ...yatraPages,
  ...guidePages,
  ...policyPages,
];

export function getPage(slug: string) {
  return pages.find((page) => page.slug === slug);
}
