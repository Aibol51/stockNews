<template>
  <div
    v-if="isMobile"
    class="topBar w-full flex justify-between py-[3vw] fixed z-50 px-[5%]"
    style="
      background: linear-gradient(
        90deg,
        rgba(35, 70, 157, 1) 0%,
        rgba(49, 137, 245, 1) 100%
      );
    "
  >
    <img src="/img/logo.png" class="w-[28vw]" />
    <div class="flex items-center">
      <p class="text-white">易记域名：</p>
      <p
        @click="copyToClipboard(randomDomain.url)"
        class="text-[#deff00] font-bold cursor-pointer"
      >
        {{ randomDomain.url }}
      </p>
    </div>
  </div>

  <div
    v-if="!isMobile"
    class="topBar w-full px-[20px] py-[10px] flex fixed z-50 justify-between items-center"
    style="
      background: linear-gradient(
        90deg,
        rgba(35, 70, 157, 1) 0%,
        rgba(49, 137, 245, 1) 100%
      );
    "
  >
    <img src="/img/logo.png" class="w-[100px]" />

    <div class="flex items-center gap-[15px]">
      <div class="flex items-center">
        <p class="topStockText">今日指数</p>
        <img class="w-[35px]" src="/img/topStock.svg" alt="" />
      </div>
      <p class="text-[15px] text-white">|</p>
      <div
        class="flex items-center gap-[15px]"
        v-for="(item, index) in topBarData.slice(0, 3)"
        :key="index"
      >
        <p class="text-white text-[13px] whitespace-nowrap">{{ item.f14 }}</p>
        <p
          class="text-[13px]"
          :class="[item.f3 <= 0 ? 'greenText' : 'redText']"
        >
          {{ item.f2 }}
        </p>
        <p
          class="text-[13px]"
          :class="[item.f3 <= 0 ? 'greenText' : 'redText']"
        >
          {{ item.f3 }}
        </p>
        <p
          class="text-[13px]"
          :class="[item.f3 <= 0 ? 'greenText' : 'redText']"
        >
          {{ item.f4 }}%
        </p>
      </div>
    </div>
    <div class="flex items-center text-[14px]">
      <p class="text-white">易记域名：</p>
      <p
        @click="copyToClipboard(randomDomain.url)"
        class="text-[#deff00] font-bold cursor-pointer"
      >
        {{ randomDomain.url }}
      </p>
    </div>
  </div>
  <div :style="{ height: isMobile ? '15vw' : '55px' }"></div>
</template>
<script setup lang="ts">
import { useStockStore, useDeviceStore } from "@/stores/index";
import { computed } from "vue";
import { domainList } from "@/utils/domainList";
import { useMessage } from "naive-ui";

const copyMessage = useMessage();

const { isMobile } = useDeviceStore();
const store = useStockStore();
const topBarData = computed(() => store.hangqingList);

const randomDomain = computed(() => {
  const randomIndex = Math.floor(Math.random() * domainList.length);
  return domainList[randomIndex];
});

const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      copyMessage.success("复制成功！");
    })
    .catch(() => {
      copyMessage.error("复制失败！");
    });
};
</script>
<style>
.topStockText {
  background: linear-gradient(#fcfaef, #fff3c0);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 15px;
  font-weight: bold;
}
.greenText {
  color: #00ffc2;
}
.redText {
  color: #ff9c00;
}
</style>
