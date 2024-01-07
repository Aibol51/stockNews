<template>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
    @mask-click="cancelCallback"
    @close="cancelCallback"
    :showIcon="false"
  >
    <template #default>
      <profileForm />
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { useLoginModalStore } from "@/stores/index";
import { computed } from "vue";
import profileForm from "./components/profileForm.vue";

const store = useLoginModalStore();
const showModal = computed({
  get: () => store.showProfileModal,
  set: (value) => store.toggleProfileModal(value),
});

const submitCallback = () => {
  store.closeProfileModal();
};

const cancelCallback = () => {
  store.closeProfileModal();
};
</script>
