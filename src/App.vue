<template>
  <div>
    <n-message-provider>
      <TopBar />
    </n-message-provider>
    <router-view></router-view>

    <n-message-provider>
      <loginModal />
    </n-message-provider>
    <n-message-provider>
      <profileDialog />
    </n-message-provider>
    <n-message-provider>
      <noLoginDialog />
    </n-message-provider>
  </div>
</template>
<script setup lang="ts">
import TopBar from "@/components/topBar.vue";
import { useStockStore } from "@/stores/index";
import { getHangQingData } from "@/api/getHangQingData.ts";
import loginModal from "@/components/loginDialog/index.vue";
import profileDialog from "@/components/profileDialog/index.vue";
import noLoginDialog from "@/components/noLoginDialog/index.vue";

const store = useStockStore();

getHangQingData((data) => {
  store.setHangqingList(data);
  store.setIsSwiperReady(true);
  store.setHangqingLoading(false);
});
</script>

<style>
.n-tabs.n-tabs--bar-type .n-tabs-tab.n-tabs-tab--active {
  color: #3189f5;
}
.n-tabs.n-tabs--bar-type .n-tabs-tab:hover {
  color: #3189f5;
}
.n-tabs .n-tabs-bar {
  background-color: #3189f5;
}

.n-input .n-input__input-el,
.n-input .n-input__textarea-el {
  caret-color: #3189f5;
}

.n-input:not(.n-input--disabled).n-input--focus .n-input__state-border {
  border-color: #3189f5 !important;
  box-shadow: 0 0 0 2px rgba(0, 145, 255, 0.2);
}
.n-input:not(.n-input--disabled):hover .n-input__state-border {
  border-color: #3189f5 !important;
}
</style>
