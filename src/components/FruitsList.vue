<template>
  <div class="fruits-list-container">
    <div v-for="[key, val] in [...items]" :key="key">
      <div @click="select(key)" :class="isSelectedClass(key)">
        {{ val.name }}: {{ val.price }}円
      </div>
    </div>
    <button @click="handleSubmit">詳細画面</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { FruitsKey, FruitsValue } from "@/store/fruits";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const items = store.getters["fruits/items"];

    const isSelectedClass = (target: FruitsKey) => {
      if (target && store.getters["fruits/isSelected"](target)) {
        return "selected";
      }
    };
    const select = (target: FruitsKey) => {
      store.commit("fruits/select", target);
    };
    const handleSubmit = async () => {
      if (store.state.fruits.selected) {
        router.push({
          name: "FruitsDetailView",
          params: { id: store.state.fruits.selected },
        });
      }
    };
    return {
      items,
      select,
      isSelectedClass,
      handleSubmit,
    };
  },
});
</script>

<style lang="scss">
.selected {
  background-color: red;
  color: white;
}
</style>
