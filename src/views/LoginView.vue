<template>
  <div class="login-view-container">
    <p>Login {{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const name = ref("hanake");
    return { name };
  },
});
</script>
<style lang="scss">
.login-view-container {
  margin: auto auto;
}
</style>
