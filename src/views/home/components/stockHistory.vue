<template>
  <div class="flex items-center justify-between py-[20px]">
    <div class="flex items-center gap-[0.3vw]">
      <img src="/img/bullStock.svg" alt="" class="w-[20px]" />
      <p class="font-bold text-[15px]">历史推荐</p>
    </div>
    <p class="cursor-pointer" @click="showModal = true">查看更多></p>
  </div>
  <div class="grid grid-cols-2 gap-[10px]" v-if="recomendedLoading">
    <n-skeleton text :repeat="4" :sharp="false" height="35px" />
  </div>
  <div class="grid grid-cols-2 gap-[10px]" v-else>
    <div
      class="flex whitespace-nowrap justify-center bg-[#F6F7F9] p-[5px] justify-between px-[10px] py-[5px] rounded-[5px] items-center cursor-pointer"
      v-for="(item, index) in recommendedStocks.slice(0, 4)"
      :key="index"
      @click="showModal = true"
    >
      <p class="text-[15px] text-[#5E5E5E] font-bold">{{ item.stockName }}</p>
      <p class="text-[#5E5E5E]">{{ item.stockCode }}</p>
      <p :class="[Number(item.stockRise) <= 0 ? 'greenText' : 'redText']">
        {{ item.stockRise }}
      </p>
      <p :class="[Number(item.stockRise) <= 0 ? 'greenText' : 'redText']">
        {{ item.stockFall }}
      </p>
      <p class="text-[13px] text-[#948989]">{{ item.addTime }}</p>
    </div>
  </div>
  <StockModal :showModal="showModal" @update:show="showModal = $event" />
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import StockModal from "./stockModal.vue";
import { recomendedStore } from "@/stores/index";
import { RecomendedItem } from "@/api/interface/index.ts";
const recomendStore = recomendedStore();
const recomendedLoading = computed(() => recomendStore.recomendLoading);
const recomendData = computed(() => recomendStore.recomendData);

const recommendedStocks = computed(() => {
  const filtered = recomendData.value.filter(
    (stock: RecomendedItem) => !stock.isRecommend
  );
  return filtered;
});

const showModal = ref(false);
</script>
<style scoped>
.greenText {
  color: #19d60a;
}
.redText {
  color: #fa0606;
}
</style>
