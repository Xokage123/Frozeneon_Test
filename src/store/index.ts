import Vue from "vue";
import Vuex from "vuex";

import { fetchGetSearchPackages } from "@/API";

import type { InitialState } from "./types";

Vue.use(Vuex);

const initialState: InitialState = {
  packages: [],
  modalPackage: undefined,
  isLoadPackages: false,
};

export default new Vuex.Store<InitialState>({
  state: initialState,
  mutations: {
    setModalPackage(state, payload) {
      console.log(
        state.packages.find(
          (packageInformation) => packageInformation.package.name === payload
        )
      );
      state.modalPackage = state.packages.find(
        (packageInformation) => packageInformation.package.name === payload
      );
    },
  },
  actions: {
    getPackages: async ({ state }, payload) => {
      try {
        state.isLoadPackages = true;
        const packages = await fetchGetSearchPackages(payload);
        state.packages = packages;
        return packages;
      } catch (er: any) {
        throw new Error(er.message);
      } finally {
        state.isLoadPackages = false;
      }
    },
  },
});
