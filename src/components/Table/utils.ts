import {
  PackageProperties,
  PackageModalProps,
  NameProperties,
  PublisherProperties,
  AuthorProperties,
} from "@/interfaces/interface/packages";

import { getDate } from "@/utils/index";

const getMaintainers = (maintainers: PublisherProperties[]): string[] =>
  maintainers.map(
    (maintainer) => `${maintainer.username} (${maintainer.email})`
  );

const getAuthor = (auth: AuthorProperties | undefined): string => {
  if (auth) return `${auth.name}  ${auth.url ? `(${auth.url})` : ""}`;
  return "";
};

const getPublisher = (auth: PublisherProperties): string =>
  `${auth.username} (${auth.email})`;

export const getPackageProperties = (
  packageAll: PackageProperties
): PackageModalProps[] => {
  const { package: packageInformation } = packageAll;
  return [
    {
      name: NameProperties.NAME,
      value: packageInformation.name,
    },
    {
      name: NameProperties.SCOPE,
      value: packageInformation.scope,
    },
    {
      name: NameProperties.VERSION,
      value: packageInformation.version,
    },
    {
      name: NameProperties.DESCRIPTION,
      value: packageInformation.description,
    },
    {
      name: NameProperties.KEYWORDS,
      value: packageInformation.keywords,
    },
    {
      name: NameProperties.DATE,
      value: getDate(packageInformation.date),
    },
    {
      name: NameProperties.AUTHOR,
      value: getAuthor(packageInformation.author),
    },
    {
      name: NameProperties.URL_BUGS,
      value: packageInformation.links.bugs,
      link: true,
    },
    {
      name: NameProperties.URL_REPOSITORY,
      value: packageInformation.links.repository,
      link: true,
    },
    {
      name: NameProperties.URL_NPM,
      value: packageInformation.links.npm,
      link: true,
    },
    {
      name: NameProperties.URL_HOMEPAGE,
      value: packageInformation.links.homepage,
      link: true,
    },
    {
      name: NameProperties.PUBLISHER,
      value: getPublisher(packageInformation.publisher),
    },
    {
      name: NameProperties.MAINTEINERS,
      value: getMaintainers(packageInformation.maintainers),
    },
  ];
};
