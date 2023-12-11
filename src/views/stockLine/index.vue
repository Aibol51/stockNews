<template>
  <div>
    <iframe class="w-full h-[140vh] mt-[2%]" :src="iframeUrl" frameborder="0"></iframe>
  </div>
</template>
<script setup lang="ts">
import { ref,watchEffect  } from "vue";
import { useRouter } from "vue-router";
import { stockList } from "./codeList";
const router = useRouter();
// const stockCode = router.currentRoute.value.query.n;
const stockName = router.currentRoute.value.query.s;
const iframeUrl = ref("");

watchEffect(() => {
  const matchedStock = stockList.find(stock => stock.name === stockName);
  if (matchedStock) {
    // iframeUrl.value = `http://localhost:9527/#/stock?code=${matchedStock.code}&name=${matchedStock.name}&symbol=${matchedStock.Symbol}`;
    iframeUrl.value = `/stockPro/index.html#/stock?code=${matchedStock.code}&name=${matchedStock.name}&symbol=${matchedStock.Symbol}`;
  }
});
</script>
