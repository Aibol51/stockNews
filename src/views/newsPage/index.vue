<template>
  <div class="fullscreen-iframe">
    <iframe :src="newsUrl" frameborder="0"></iframe>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const newsUrl =
  "https://fcvbncsd.com/html" + router.currentRoute.value.query.url;
console.log(newsUrl);
</script>
<style scoped>
.fullscreen-iframe {
  width: 100%;
  height: 100vh; /* 设置高度为视口高度 */
}
iframe {
  width: 100%;
  height: 100%;
  border: none; /* 可选，移除边框 */
}

/* 如果需要，以下样式可以添加到全局样式中而不是作用域样式中 */
/* html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
} */
</style>
