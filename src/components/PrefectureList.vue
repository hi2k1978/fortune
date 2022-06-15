<template>
  <div class="prefecture-list-container">
    <div v-for="[key, val] in [...prefecture]" :key="key">
      <div @click="toggle(key)" :class="isSelectedClass(key)">
        {{ val.name }}
      </div>
    </div>
    <button @click.prevent="handleSubmit">サーチ</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { PrefectureKey, PrefectureValue } from "@/store/prefecture";

export default defineComponent({
  setup() {
    const store = useStore();
    //const prefecture = store.state.prefecture.prefectureMap;
    const prefecture = store.getters["prefecture/prefectureMap"];
    const isSelectedClass = (target: PrefectureKey) => {
      if (store.getters["prefecture/isSelected"](target)) {
        return "selected";
      }
    };
    const toggle = (target: PrefectureKey) => {
      store.commit("prefecture/toggle", target);
    };
    const handleSubmit = async () => {
      const selected = store.getters["prefecture/selectedList"];
      if (selected && selected.length > 0)
        await store.dispatch("fruits/fetch", selected);
    };
    return {
      prefecture,
      toggle,
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
