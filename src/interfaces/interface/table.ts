export enum NameHeaderTable {
  NAME = "name",
  VERSION = "version",
  DATE = "date",
  AUTHOR = "author",
  KEYWORDS = "keywords",
}

export interface TableHeader {
  text: string;
  value: string;
}
