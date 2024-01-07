<template>
  <div v-if="isMobile">
    <div class="px-[5vw] py-[4.5vw] stockBoxBody rounded-[3vw] m-[3vw]">
      <div class="flex items-center gap-[1vw]">
        <!-- <img src="/img/wHot.png" alt="" class="w-[5.5vw]" /> -->
        <svg
          class="w-[5.5vw]"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.47321 26.8389C5.72008 23.15 6.64239 21.0281 8.0266 19.0921C9.50229 16.8787 9.87121 14.7568 9.87121 14.7568C9.87121 14.7568 11.0695 16.2324 10.6091 18.6302C12.6381 16.3254 13.0071 12.6364 12.7296 11.2531C17.3412 14.4809 19.3703 21.5814 16.6963 26.746C30.8999 18.6302 20.2011 6.54962 18.3565 5.25848C19.0013 6.64185 19.0943 8.94745 17.8031 10.0541C15.681 1.93842 10.4246 0.370605 10.4246 0.370605C11.0695 4.52069 8.21106 9.03967 5.44413 12.452C5.35116 10.7919 5.25967 9.68524 4.33736 8.02521C4.1529 11.0686 1.84639 13.4664 1.20151 16.5098C0.370692 20.6592 1.84639 23.6103 7.47321 26.8389Z"
            fill="#fff"
          />
        </svg>

        <div class="flex items-baseline gap-[3vw] text-[#fff]">
          <p class="font-bold text-[4.4vw]">每日牛股推荐</p>
          <p class="text-red-600 text-[3.5vw]">资料仅供参考 投资需谨慎</p>
        </div>
      </div>
      <div
        class="flex flex-col text-center mt-[4.5vw] bg-white p-[3vw] rounded-[2vw]"
      >
        <n-skeleton
          v-if="recomendedLoading"
          height="22vw"
          width="100%"
          :sharp="false"
        />
        <div
          v-else
          class="recomendItem w-full flex flex-row justify-between"
          v-for="(item, index) in userStore.isLoggedIn
            ? recommendedStocks
            : recommendedStocks.slice(0, 1)"
        >
          <p
            class="font-bold text-[4.4vw] w-[10%]"
            :style="{ color: index === 0 ? '#C61010' : '#FF912F' }"
          >
            {{ index + 1 }}
          </p>
          <p class="font-bold text-[4.4vw] w-[25%]">
            {{ item.stockName }}
          </p>
          <p class="text-[4.4vw] text-[#9F9F9F] w-[25%]">
            {{ item.stockCode }}
          </p>

          <p
            class="text-[4.4vw] font-bold w-[15%]"
            :class="[Number(item.stockRise) <= 0 ? 'greenText' : 'redText']"
          >
            {{ item.stockRise }}
          </p>
          <p
            class="text-[4.4vw] font-bold w-[15%]"
            :class="[Number(item.stockRise) <= 0 ? 'greenText' : 'redText']"
          >
            {{ item.stockFall }}
          </p>
        </div>
        <div
          v-if="!userStore.isLoggedIn"
          class="flex items-center justify-center"
        >
          <img class="w-[30vw]" src="/img/noLogin.png" alt="" />
          <div>
            <p class="text-[#757575] text-[3.5vw]">登录查看更多</p>
            <n-button
              color="#3189f5"
              round
              strong
              @click="loginModalStore.openLoginModal"
              >去登录 ></n-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!isMobile">
    <n-card class="h-full">
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-[0.3vw]">
            <img src="/img/hot.svg" alt="" class="w-[20px]" />
            <p class="font-bold text-[15px]">每日牛股推荐</p>
            <p class="text-[13px] leading-normal text-[#8C8A89]">
              资料仅供参考 投资需谨慎
            </p>
          </div>
        </div>
      </template>
      <div class="flex flex-row gap-[10px]" v-if="recomendedLoading">
        <n-skeleton text :repeat="3" :sharp="false" height="135px" />
      </div>
      <template v-else>
        <div
          :class="
            userStore.isLoggedIn
              ? 'recomendList grid grid-cols-3 gap-[1vw]'
              : 'recomendList grid grid-cols-2 align-items-center'
          "
        >
          <div
            class="Item flex flex-col items-center justify-around border-[#97C1FF] border-[0.1vw] rounded-[0.2vw] p-[10px] h-max"
            v-for="(item, index) in userStore.isLoggedIn
              ? recommendedStocks
              : recommendedStocks.slice(0, 1)"
            :key="index"
          >
            <div class="leftItem flex flex-col whitespace-nowrap items-center">
              <p class="font-bold text-[15px]">
                {{ item.stockName }}
              </p>
              <p class="text-[15px] text-[#9F9F9F]">
                {{ item.stockCode }}
              </p>
            </div>
            <div
              class="rightItem text-[15px] font-bold flex gap-[15px] whitespace-nowrap"
            >
              <p
                :class="[Number(item.stockRise) <= 0 ? 'greenText' : 'redText']"
              >
                {{ item.stockRise }}
              </p>
              <p
                :class="[Number(item.stockRise) <= 0 ? 'greenText' : 'redText']"
              >
                {{ item.stockFall }}
              </p>
            </div>
            <van-text-ellipsis
              class="w-full"
              rows="2"
              :content="item.details"
              expand-text="展开"
              collapse-text="收起"
            />
          </div>
          <div
            v-if="!userStore.isLoggedIn"
            class="flex items-center justify-center"
          >
            <img class="w-[150px]" src="/img/noLogin.png" alt="" />
            <div>
              <p class="text-[#757575] text-[15px]">登录查看更多</p>
              <n-button
                color="#3189f5"
                round
                strong
                @click="loginModalStore.openLoginModal"
                >去登录 ></n-button
              >
            </div>
          </div>
        </div>
      </template>
      <div>
        <HistoryStock />
      </div>
    </n-card>
  </div>
</template>
<script setup lang="ts">
import HistoryStock from "./stockHistory.vue";
import { computed } from "vue";
import {
  useDeviceStore,
  recomendedStore,
  useUserStore,
  useLoginModalStore,
} from "@/stores/index";
import { RecomendedItem } from "@/api/interface/index.ts";
const { isMobile } = useDeviceStore();
const recomendStore = recomendedStore();
const recomendedLoading = computed(() => recomendStore.recomendLoading);
const recomendData = computed(() => recomendStore.recomendData);
const userStore = useUserStore();
const loginModalStore = useLoginModalStore();
const recommendedStocks = computed(() => {
  const filtered = recomendData.value.filter(
    (stock: RecomendedItem) => stock.isRecommend
  );
  return filtered;
});
</script>
<style scoped>
.recomendItem {
  /* background: linear-gradient(#a8ffa0, #fff); */
}
.n-divider:not(.n-divider--vertical) {
  margin-top: 0;
}
.stockBoxBody {
  background: linear-gradient(#3468ee, #fef8f2);
}
.greenText {
  color: #19d60a;
}
.redText {
  color: #fa0606;
}
</style>
