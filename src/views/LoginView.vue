<template>
  <div class="login-view-container">
    <p>Login: input your name</p>
  </div>
  <div>
    <form @submit.prevent="handleSubmit">
      <input
        class="input-username"
        type="text"
        v-model="loginForm.userName"
        placeholder="名前を入力してください"
      />
      <br />
      <button type="submit">運勢を占ってみる</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/useUserStore";
import { useLoginForm } from "@/composables/useLoginForm";

export default defineComponent({
  setup() {
    const router = useRouter();
    const userStore = useUserStore();
    const { loginForm, saveUserDataToStore } = useLoginForm();

    const handleSubmit = () => {
      saveUserDataToStore(loginForm.userName);
      router.push({ name: "FortuneView" });
    };
    return { loginForm, handleSubmit };
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
