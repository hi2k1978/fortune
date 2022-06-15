import { createStore } from "vuex";
import { prefectureStore } from "./prefecture";
import { fruitsStore } from "./fruits";

const rootState = {};
export type RootState = typeof rootState;

export default createStore({
  state: rootState,
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    prefecture: prefectureStore,
    fruits: fruitsStore,
  },
});
