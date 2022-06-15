<template>
  <div>{{ target.name }}</div>
  <div>{{ target.price }}円</div>
  <br />
  <button @click="goBack">戻る</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { FruitsKey, FruitsValue } from "@/store/fruits";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const id = route.params.id;
    const target = store.state.fruits.fruitsMap.get(id);
    const goBack = async () => {
      router.push({ name: "PrefectureView" });
    };
    return { target, goBack };
  },
});
</script>
<style lang="scss">
.selected {
  background-color: red;
  color: white;
}
</style>
