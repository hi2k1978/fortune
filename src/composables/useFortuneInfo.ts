import { reactive, InjectionKey } from "vue";

export type FortuneInfo = {
  selected: string | null;
  fortunes: { [id: string]: string } | null;
};

const useFortuneInfo = () => {
  const fortunesInfo = reactive<FortuneInfo>({
    selected: null,
    fortunes: null,
  });

  const setFortunes = () => {
    fortunesInfo.fortunes = {
      f001: "bad end1",
      f002: "bad end2",
      f003: "bad end3",
    };
  };
  const fortuneInit = () => {
    fortunesInfo.selected = null;
    setFortunes();
  };
  const randomSelectFortune = () => {
    fortunesInfo.selected = "f001";
  };
  const showSelectedFortune = () => {
    if (fortunesInfo.fortunes === null) return null;
    if (fortunesInfo.selected === null) return null;
    return fortunesInfo.fortunes[fortunesInfo.selected];
  };

  return { fortuneInit, randomSelectFortune, showSelectedFortune };
};

export default useFortuneInfo;
export type FortuneInfoStore = ReturnType<typeof useFortuneInfo>;
export const fortuneInfoKey: InjectionKey<FortuneInfoStore> =
  Symbol("FortuneInfo");
