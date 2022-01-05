import { NameHeaderTable } from "@/interfaces/interface/table";

export const BASE_URL_API = "https://registry.npmjs.org";
export const URL_SEARCH = "/-/v1/search";

export const MY_INITIAL = "Артемов Максим Алексеевич";

export const GITHUB_URL = "https://github.com/Xokage123?tab=repositories";

export const headerTablePackages = [
  {
    text: "Название пакета",
    value: NameHeaderTable.NAME,
  },
  {
    text: "Версия",
    value: NameHeaderTable.VERSION,
  },
  {
    text: "Дата",
    value: NameHeaderTable.DATE,
  },
  {
    text: "Автор",
    value: NameHeaderTable.AUTHOR,
  },
  {
    text: "Ключевые слова",
    value: NameHeaderTable.KEYWORDS,
  },
];
