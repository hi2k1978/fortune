import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    userName: "",
  }),
  actions: {
    init() {
      this.userName = "";
    },
    setUserName(userName: string) {
      this.userName = userName;
    },
  },
});
