<template>
  <div>
    <n-card class="h-full">
      <van-tabs
        v-model:active="active"
        type="card"
        @click-tab="setActiveButton"
      >
        <van-tab title="上证">
          <img class="w-full" :src="stockImg" alt=""
        /></van-tab>
        <van-tab title="深证">
          <img class="w-full" :src="stockImg" alt=""
        /></van-tab>
        <van-tab title="创业">
          <img class="w-full" :src="stockImg" alt=""
        /></van-tab>
      </van-tabs>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref(0);

let stockImg = ref(
  "https://webquotepic.eastmoney.com/GetPic.aspx?nid=1.000001&imageType=GFN"
);

const setActiveButton = (index: any) => {
  if (index) {
    if (index.name == 0) {
      stockImg.value = `https://webquotepic.eastmoney.com/GetPic.aspx?nid=1.000001&imageType=GFN`;
    } else if (index.name == 1) {
      stockImg.value = `https://webquotepic.eastmoney.com/GetPic.aspx?nid=0.399001&imageType=GFN`;
    } else if (index.name == 2) {
      stockImg.value = `https://webquotepic.eastmoney.com/GetPic.aspx?nid=0.399006&imageType=GFN`;
    }
  }
};
</script>
