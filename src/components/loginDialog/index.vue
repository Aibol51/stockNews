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
      <n-tabs
        class="card-tabs"
        v-model:value="activeTab"
        size="large"
        animated
        pane-wrapper-style="margin: 0 -4px"
        pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
      >
        <n-tab-pane name="signin" tab="登录">
          <loginForm />
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <registerForm @registration-successful="handleRegistrationSuccess" />
        </n-tab-pane>
      </n-tabs>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import loginForm from "./components/loginForm.vue";
import registerForm from "./components/registerForm.vue";
import { useLoginModalStore } from "@/stores/index";
import { computed, ref } from "vue";

const activeTab = ref('signin');
const store = useLoginModalStore();
const showModal = computed({
  get: () => store.showLoginModal,
  set: (value) => store.toggleLoginModal(value),
});

const handleRegistrationSuccess = () => {
  activeTab.value = 'signin'; // 在注册成功时切换到登录标签
};

const submitCallback = () => {
  store.closeLoginModal();
};

const cancelCallback = () => {
  store.closeLoginModal();
};
</script>
