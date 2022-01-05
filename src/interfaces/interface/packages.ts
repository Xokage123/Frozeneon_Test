export interface PublisherProperties {
  username: string;
  email: string;
}

export interface AuthorProperties {
  name: string;
  url?: string;
}

export interface LinksProperties {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}

export interface PackageProperties {
  package: {
    name: string;
    scope: string;
    version: string;
    description: string;
    keywords: string[];
    date: string;
    links: LinksProperties;
    author?: AuthorProperties;
    publisher: PublisherProperties;
    maintainers: PublisherProperties[];
  };
}

type AllTypesPackageProperties =
  | string
  | string[]
  | PublisherProperties
  | AuthorProperties
  | LinksProperties;

export interface PackageModalProps {
  name: string;
  value: AllTypesPackageProperties;
  link?: boolean;
}

export enum NameProperties {
  NAME = "Название пакета",
  SCOPE = "Область видисмости",
  VERSION = "Версия",
  DESCRIPTION = "Описание",
  KEYWORDS = "Ключевые слова",
  DATE = "Дата",
  AUTHOR = "Автор",
  URL_BUGS = "Ссылка на Issues",
  URL_REPOSITORY = "Ссылка на репозиторий",
  URL_NPM = "Ссылка на npm",
  URL_HOMEPAGE = "Ссылка на начальную страницу",
  PUBLISHER = "Издатель",
  MAINTEINERS = "Контрибьютеры",
}
