import { reactive } from "vue";
import { useUserStore } from "@/store/useUserStore";

export type LoginForm = {
  userName: string;
};

export const useLoginForm = () => {
  const userStore = useUserStore();
  const loginForm = reactive<LoginForm>({
    userName: "",
  });

  const saveUserDataToStore = (userName: string) => {
    userStore.setUserName(userName);
  };

  return { loginForm, saveUserDataToStore };
};
