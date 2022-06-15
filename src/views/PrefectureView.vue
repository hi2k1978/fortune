<template>
  <div class="prefecture-view-container">選択</div>
  <br />
  <PrefectureList />
  <br />
  <FruitsList v-show="isExistFruitsList" />
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import PrefectureList from "@/components/PrefectureList.vue";
import FruitsList from "@/components/FruitsList.vue";

export default defineComponent({
  components: {
    PrefectureList,
    FruitsList,
  },
  setup() {
    const store = useStore();
    const prefecture = store.state.prefecture.prefectureMap;

    const isExistFruitsList = computed((fruits) => {
      const size = store.getters["fruits/size"];
      if (size && size > 0) {
        return true;
      } else {
        return false;
      }
    });
    return {
      isExistFruitsList,
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
