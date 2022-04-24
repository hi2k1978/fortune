import { reactive, InjectionKey } from "vue";

export type UserInfo = {
  username: string;
};

const useUserInfo = () => {
  const userInfo = reactive<UserInfo>({
    username: "nanashi",
  });

  const userInfoInit = () => {
    userInfo.username = "";
  };

  const userInfoSetName = (username: string) => {
    userInfo.username = username;
  };

  const userInfoClear = () => {
    userInfoInit();
  };

  return { userInfo, userInfoInit, userInfoSetName, userInfoClear };
};

export default useUserInfo;
export type UserInfoStore = ReturnType<typeof useUserInfo>;
export const userInfoKey: InjectionKey<UserInfoStore> = Symbol("UserInfoStore");
