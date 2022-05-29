import { reactive, InjectionKey } from "vue";

export type Load = {
  pageLoad: boolean;
};

const useLoad = () => {
  const load = reactive<Load>({
    pageLoad: false,
  });
  return { load };
};

export default useLoad;
export type LoadStore = ReturnType<typeof useLoad>;
export const loadKey: InjectionKey<LoadStore> = Symbol("LoadStore");
