import { Module } from "vuex";
import { RootState } from "./index";

export type PrefectureKey = "tokyo" | "okayama" | "gunma";
export type PrefectureValue = {
  name: string;
  selected: boolean;
};
const prefectureState = {
  prefectureKeyList: ["tokyo", "okayama", "gunma"],
  prefectureMap: new Map<PrefectureKey, PrefectureValue>([
    ["tokyo", { name: "東京", selected: false }],
    ["okayama", { name: "岡山", selected: false }],
    ["gunma", { name: "群馬", selected: false }],
  ]),
};
type PrefectureState = typeof prefectureState;

export const prefectureStore: Module<PrefectureState, RootState> = {
  namespaced: true,
  state: prefectureState,
  getters: {
    prefectureKeyList: (state: PrefectureState) => state.prefectureKeyList,
    prefectureMap: (state: PrefectureState) => state.prefectureMap,

    isSelected: (state: PrefectureState) => {
      return (key: PrefectureKey) =>
        (state.prefectureMap.get(key) as PrefectureValue).selected;
    },
    selectedList: (state: PrefectureState) => {
      const dest: string[] = [];
      for (const entry of state.prefectureMap.entries()) {
        if (entry[1].selected) dest.push(entry[0]);
      }
      return dest;
    },
  },
  mutations: {
    toggle(state: PrefectureState, key: PrefectureKey) {
      const target = state.prefectureMap.get(key) as PrefectureValue;
      target.selected = !target.selected;
    },
  },
  actions: {},
  modules: {},
};
