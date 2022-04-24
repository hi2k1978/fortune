<template>
  <div class="login-view-container">
    <p>Login: input your name</p>
  </div>
  <div>
    <form @submit.prevent="handleSubmit">
      <input
        class="input-username"
        type="text"
        v-model="formUserName"
        placeholder="Jon Doe"
      />
      <br />
      <button type="submit">Goto Fortune!</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { UserInfoStore, userInfoKey } from "@/composables/useUserInfo";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const formUserName = ref<string>("");
    const { userInfo, userInfoSetName } = inject(userInfoKey) as UserInfoStore;

    const handleSubmit = () => {
      userInfoSetName(formUserName.value);
      console.log(userInfo.username);
      router.push({ name: "FortuneView" });
    };
    return { userInfo, formUserName, handleSubmit };
  },
});
</script>
<style lang="scss">
.login-view-container {
  .input-username {
    border: 1px solid black;
  }
}
</style>
