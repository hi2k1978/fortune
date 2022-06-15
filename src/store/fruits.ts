import { Module } from "vuex";
import { RootState } from "./index";
import { PrefectureKey } from "./prefecture";

export type FruitsKey = string;
export type FruitsValue = {
  name: string;
  price: number;
};
const fruitsState = {
  selected: null as FruitsKey | null,
  fruitsKeyList: [] as FruitsKey[],
  fruitsMap: new Map<FruitsKey, FruitsValue>([]),
};

type FruitsState = typeof fruitsState;

export const fruitsStore: Module<FruitsState, RootState> = {
  namespaced: true,
  state: fruitsState,
  getters: {
    selected: (state: FruitsState) => state.selected,
    fruitsKeyList: (state: FruitsState) => state.fruitsKeyList,
    fruitsMap: (state: FruitsState) => state.fruitsMap,
    isSelected: (state: FruitsState) => {
      return (key: FruitsKey) => key == state.selected;
    },
    size: (state: FruitsState) => state.fruitsMap.size,
  },
  mutations: {
    select(state: FruitsState, key: FruitsKey) {
      state.selected = key && key == state.selected ? null : key;
    },
    fetch(state: FruitsState, items: any) {
      for (const item of items) {
        const key = item.key;
        delete item["key"];
        const value = item;
        state.fruitsMap.set(key, value);
      }
      state.fruitsKeyList = Array.from(state.fruitsMap.keys());
      state.fruitsMap.forEach((value, key) => {
        console.log(key, value);
      });
    },
  },
  actions: {
    async fetch(context, keys: PrefectureKey[]) {
      const items = [
        { key: "peach", name: "モモ", price: 680 },
        { key: "apple", name: "リンゴ", price: 103 },
        { key: "grape", name: "グレープ", price: 203 },
      ];
      context.commit("fetch", items);
    },
  },
  modules: {},
};
