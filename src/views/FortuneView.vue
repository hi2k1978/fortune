<template>
  <div>
    <p>Login name is {{ userInfo.username }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { UserInfoStore, userInfoKey } from "@/composables/useUserInfo";

export default defineComponent({
  setup() {
    const { userInfo } = inject(userInfoKey) as UserInfoStore;
    return { userInfo };
  },
});
</script>
