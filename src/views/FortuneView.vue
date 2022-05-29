<template>
  <div>
    <p>{{ userName }}さんの運勢は、{{ fortune.fortune }}です。</p>
    <p>{{ fortune.comment }}</p>
    <button @click="goBack">戻る</button>
    <button style="margin-left: 16px" @click="fortuneAgain">
      もう一度占う
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/useUserStore";
import { useFortuneStore } from "@/store/useFortuneStore";
import { LoadStore, loadKey } from "@/composables/useLoad";

export default defineComponent({
  setup() {
    const router = useRouter();
    const userStore = useUserStore();
    const fortuneStore = useFortuneStore();
    const { load } = inject(loadKey) as LoadStore;

    onMounted(() => {
      load.pageLoad = true;
      fortuneStore.tell();
      load.pageLoad = false;
    });

    const userName = computed(() => userStore.userName);
    const fortune = computed(() => fortuneStore.fortune);
    const fortuneAgain = () => fortuneStore.tell();
    const goBack = () => {
      userStore.init();
      fortuneStore.init();
      router.push({ name: "LoginView" });
    };

    return { userName, fortune, fortuneAgain, goBack };
  },
});
</script>
