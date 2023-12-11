<template>
  <div>
    <n-message-provider>
      <TopBar />
    </n-message-provider>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import TopBar from "@/components/topBar.vue";
import { useStockStore } from "@/stores/index";
import { getHangQingData } from "@/api/getHangQingData.ts";

const store = useStockStore();

getHangQingData((data) => {
  store.setHangqingList(data);
  store.setIsSwiperReady(true);
  store.setHangqingLoading(false);
});
</script>
