<template>
  <div class="footer-container">
    <p class="footer-text">Footer {{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const name = ref("footer");
    return { name };
  },
});
</script>

<style lang="scss">
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  color: white;
  width: 100%;
  height: 72px;
  .footer-text {
    margin: auto auto;
  }
}
</style>
