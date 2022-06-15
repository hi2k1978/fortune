import { Module } from "vuex";
import { RootState } from "./index";

export type PrefectureKey = "tokyo" | "okayama" | "gunma";
export type PrefectureValue = {
  name: string;
  selected: boolean;
};
const prefectureState = {
  keys: ["tokyo", "okayama", "gunma"],
  items: new Map<PrefectureKey, PrefectureValue>([
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
    keys: (state: PrefectureState) => state.keys,
    items: (state: PrefectureState) => state.items,

    isSelected: (state: PrefectureState) => {
      return (key: PrefectureKey) =>
        (state.items.get(key) as PrefectureValue).selected;
    },
    selected: (state: PrefectureState) => {
      const dest: string[] = [];
      for (const entry of state.items.entries()) {
        if (entry[1].selected) dest.push(entry[0]);
      }
      return dest;
    },
  },
  mutations: {
    toggle(state: PrefectureState, key: PrefectureKey) {
      const target = state.items.get(key) as PrefectureValue;
      target.selected = !target.selected;
    },
  },
  actions: {},
  modules: {},
};
