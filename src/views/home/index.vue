<template>
  <div v-if="isMobile">
    <n-message-provider>
      <StockSwipe />
    </n-message-provider>
    <Recomended />
    <TabBar />
  </div>
  <div v-if="!isMobile" class="bg-[#F3F5FA] p-[1vw] w-full m-auto px-[15%]">
    <div class="grid grid-cols-[4fr_2fr] gap-[10px]">
      <Recomended />
      <StockTab />
    </div>
    <StockSwipe />
    <div class="grid grid-cols-2 gap-[1vw]">
      <TabBar />
      <WeekNews />
    </div>
  </div>
</template>
<script setup lang="ts">
import StockSwipe from "./components/stockSwipe.vue";
import Recomended from "./components/recomendStock.vue";
import TabBar from "./components/tabBar.vue";
import StockTab from "./components/stockTab.vue";
import WeekNews from "./components/weekNews.vue";
import { useDeviceStore, recomendedStore } from "@/stores/index";
import { fetchRecomendedData } from "@/api/getRecomended.ts";
import { onMounted } from "vue";

const { isMobile } = useDeviceStore();
const recomendStore = recomendedStore();

onMounted(async () => {
  recomendStore.setRecomendLoading(true);
  const data = await fetchRecomendedData();
  if (data) {
    recomendStore.setRecomendData(data);
  }
  recomendStore.setRecomendLoading(false);
});
</script>
