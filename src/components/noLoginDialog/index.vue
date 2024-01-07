<template>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
    @mask-click="cancelCallback"
    @close="cancelCallback"
    title="提示"
    content="你还未登录，是否登录"
  >
    <template #default>
      <p>你还未登录，是否登录</p>
      <n-space justify="end">
        <n-button size="small" block strong @click="cancelCallback">
          取消
        </n-button>
        <n-button
          color="#3189f5"
          size="small"
          block
          strong
          @click="submitCallback"
        >
          登录
        </n-button>
      </n-space>
    </template>
  </n-modal>
</template>
<script setup lang="ts">
import { useLoginModalStore } from "@/stores/index";
import { computed } from "vue";

const store = useLoginModalStore();
const showModal = computed({
  get: () => store.showNoLoginModal,
  set: (value) => store.toggleNoLoginModal(value),
});

const submitCallback = () => {
  store.closeNoLoginModal();
  store.openLoginModal();
};

const cancelCallback = () => {
  store.closeNoLoginModal();
};
</script>
<style>
.n-dialog .n-dialog__icon {
  color: #3189f5;
}
</style>
