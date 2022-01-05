import axios from "axios";

import type { PackageProperties } from "@/interfaces/interface/packages";

import { BASE_URL_API, URL_SEARCH } from "@/const";

const instance = axios.create({
  baseURL: BASE_URL_API,
});

// Получаем все найденные пакеты по нужному тексту
export const fetchGetSearchPackages = async (
  text: string
): Promise<PackageProperties[]> =>
  await instance({
    url: URL_SEARCH,
    params: {
      text,
    },
  })
    .then((packages) => packages.data.objects)
    .catch((er) => {
      throw new Error(er);
    });
