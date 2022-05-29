import { defineStore } from "pinia";
import fortuneData from "@/assets/FortuneData.json";

export type Fortune = { [key: string]: string };

const data = new Map<string, Fortune>();
for (const [key, val] of Object.entries(fortuneData)) {
  data.set(key, val);
}
const initKey = [...data.keys()][0];
const initVal = [...data.values()][0];

export const useFortuneStore = defineStore({
  id: "fortune",
  state: () => ({
    data: data,
    key: initKey,
    fortune: initVal,
  }),
  actions: {
    init() {
      this.key = initKey;
      this.fortune = initVal;
    },
    tell() {
      const keys = [...data.keys()];
      this.key = keys[Math.floor(Math.random() * keys.length)];
      this.fortune = this.data.get(this.key) as Fortune;
      //console.log(this.fortune);
    },
  },
});
