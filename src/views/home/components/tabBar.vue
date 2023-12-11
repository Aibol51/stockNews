<template>
  <div class="mx-[5vw]" v-if="isMobile">
    <van-tabs
      v-model:active="active"
      swipeable
      title-active-color="#4860d3"
      title-inactive-color="#a9a9a9"
    >
      <van-tab title="新闻资讯" title-style="font-size:4.5vw;font-weight:bold">
        <NewsList />
      </van-tab>
      <van-tab title="推荐历史" title-style="font-size:4.5vw;font-weight:bold">
        <div class="recomendList flex flex-col gap-[3vw] py-[2vw]">
          <div
            class="Item flex flex-col items-center justify-around shadow-md border-[#d8d8d8] border-[0.1vw] rounded-[1.2vw] py-[2.5vw] px-[5vw]"
            v-for="(item, index) in recommendedStocks"
            :key="index"
          >
            <div class="recomendTop flex flex-col w-full">
              <div
                class="topInfo flex flex-row items-center justify-between font-bold text-[5vw]"
              >
                <p>{{ item.stockName }}</p>
                <p>{{ item.stockCode }}</p>
                <div class="stockUpDown flex gap-[5vw]">
                  <p
                    :class="[
                      Number(item.stockRise) <= 0 ? 'greenText' : 'redText',
                    ]"
                  >
                    {{ item.stockRise }}
                  </p>
                  <p
                    :class="[
                      Number(item.stockRise) <= 0 ? 'greenText' : 'redText',
                    ]"
                  >
                    {{ item.stockFall }}
                  </p>
                </div>
              </div>
              <div
                class="bottomInfo flex items-center"
                :class="item.stockTags != '' ? 'dateBetween' : 'dateEnd'"
              >
                <n-tag v-if="item.stockTags != ''" type="error">
                  {{ item.stockTags }}
                </n-tag>
                <p class="text-[#969696]">{{ item.addTime }}</p>
              </div>
            </div>
            <div class="recomendBottom w-full">
              <van-text-ellipsis
                rows="2"
                :content="item.details"
                expand-text="展开"
                collapse-text="收起"
              />
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
  <div v-if="!isMobile" class="pt-[1vw]">
    <p class="newsTop text-[15px] font-bold">新闻资讯</p>
    <n-card>
      <NewsList />
    </n-card>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useDeviceStore, recomendedStore } from "@/stores/index";
import { RecomendedItem } from "@/api/interface/index.ts";
import NewsList from "./newsList.vue";
const { isMobile } = useDeviceStore();
const recomendStore = recomendedStore();
const active = ref(0);

const recomendData = computed(() => recomendStore.recomendData);

const recommendedStocks = computed(() => {
  const filtered = recomendData.value.filter(
    (stock: RecomendedItem) => !stock.isRecommend
  );
  return filtered;
});
</script>
<style scoped>
.dateEnd {
  justify-content: end;
}
.dateBetween {
  justify-content: space-between;
}
.newsTop {
  background: url("/img/newsTop.png");
  background-size: 100% 100%;
  padding: 10px 25px;
  background-color: #eef6fd;
  border: 1px solid #efeff5;
  border-bottom: 0;
  border-radius: 5px 5px 0 0;
}
.greenText {
  color: #19d60a;
}
.redText {
  color: #fa0606;
}
:deep(.van-tabs__line) {
  display: none !important;
}
:deep(.van-tab__text--ellipsis){
  overflow: unset !important;
}
</style>
