import { NameHeaderTable } from "@/interfaces/interface/table";
import { NameProperties } from "@/interfaces/interface/packages";

export const BASE_URL_API = "https://registry.npmjs.org";
export const URL_SEARCH = "/-/v1/search";

export const MY_INITIAL = "Артемов Максим Алексеевич";

export const GITHUB_URL = "https://github.com/Xokage123?tab=repositories";

export const headerTablePackages = [
  {
    text: NameProperties.NAME,
    value: NameHeaderTable.NAME,
  },
  {
    text: NameProperties.VERSION,
    value: NameHeaderTable.VERSION,
  },
  {
    text: NameProperties.DATE,
    value: NameHeaderTable.DATE,
  },
  {
    text: NameProperties.AUTHOR,
    value: NameHeaderTable.AUTHOR,
  },
  {
    text: NameProperties.KEYWORDS,
    value: NameHeaderTable.KEYWORDS,
  },
];
