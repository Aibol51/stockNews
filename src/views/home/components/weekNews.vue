<template>
  <div class="pt-[1vw]">
    <p class="newsTop text-[15px] font-bold text-white">24x7快讯</p>
    <n-card>
      <div
        v-if="loading"
        v-for="n in 10"
        :key="n"
        class="flex flex-col gap-[10px] mb-[15px]"
      >
        <n-skeleton height="20px" width="100%" :sharp="false" />
        <n-skeleton height="90px" width="100%" :sharp="false" />
      </div>
      <div v-else v-for="(item, index) in newsData" :key="index">
        <p class="text-[#747474] font-bold">{{ item.showTime }}</p>
        <p class="text-[14px] font-bold">
          {{ item.summary }}
        </p>
        <n-divider class="!my-[10px]" />
      </div>
    </n-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {useWeekNews} from "@/api/getWeekNews.ts";
import { WeekNewsItem} from "@/api/interface/index.ts";
const loading = ref(true);
const newsData = ref<WeekNewsItem[]>([]);

const fetchWeekNewsData = async () => {
  try {
    const response = await useWeekNews();
    newsData.value = response;
    loading.value = false;
  } catch (error) {
    loading.value = true;
    console.error("请求错误:", error);
  }
};
fetchWeekNewsData();
</script>
<style>
.newsTop {
  background: linear-gradient(
    90.03deg,
    #7ddef4 0.15%,
    #3ea9f2 24.62%,
    #5fd6fa 48.04%,
    #3a9afd 71.98%,
    #5aa8f2 100.08%
  );
  background-size: 100% 100%;
  padding: 10px 25px;
  background-color: #eef6fd;
  border: 1px solid #efeff5;
  border-bottom: 0;
  border-radius: 5px 5px 0 0;
}
</style>
