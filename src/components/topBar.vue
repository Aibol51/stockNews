<template>
  <div
    v-if="isMobile"
    class="topBar w-full flex justify-between py-[3vw] fixed z-50 px-[5%] items-center"
    style="
      background: linear-gradient(
        90deg,
        rgba(35, 70, 157, 1) 0%,
        rgba(49, 137, 245, 1) 100%
      );
    "
  >
    <van-icon
      v-if="showIcon"
      @click="goToHome"
      name="arrow-left"
      color="#fff"
      size="5vw"
    />
    <img src="/img/logo.png" class="w-[28vw]" />
    <div class="text-white text-[4vw]">
      <n-dropdown v-if="userIsLoggedIn" :options="options" trigger="click">
        <div class="flex items-center gap-[2vw]">
          <img
            class="w-[8vw]"
            :src="userStore.userInfo.avatar || '/img/avatar.svg'"
            alt=""
          />
          <p class="">{{ userStore.userInfo.nickname }}</p>
        </div>
      </n-dropdown>
      <div v-else class="flex items-center gap-[2vw]" @click="openLoginModal">
        <img class="w-[8vw]" src="/img/avatar.svg" alt="" />
        <p class="">登录</p>
      </div>
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
    <div class="text-[15px] cursor-pointer">
      <!-- 如果用户已登录 -->
      <n-dropdown v-if="userIsLoggedIn" :options="options" trigger="click">
        <div class="flex items-center gap-[10px]">
          <img
            class="w-[35px]"
            :src="userStore.userInfo.avatar || '/img/avatar.svg'"
            alt="Avatar"
          />
          <p class="text-white">
            {{ userStore.userInfo.nickname }}
          </p>
        </div>
      </n-dropdown>

      <!-- 如果用户未登录 -->
      <div v-else @click="openLoginModal" class="flex items-center gap-[10px]">
        <img class="w-[35px]" src="/img/avatar.svg" alt="Avatar" />
        <p class="text-white">登录</p>
      </div>
    </div>
  </div>
  <div :style="{ height: isMobile ? '15vw' : '55px' }"></div>
</template>
<script setup lang="ts">
import {
  useStockStore,
  useDeviceStore,
  useLoginModalStore,
  useUserStore,
} from "@/stores/index";
import { computed, h } from "vue";
// import { domainList } from "@/utils/domainList";
// import { useMessage } from "naive-ui";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { NIcon } from "naive-ui";
import { logout } from "@/api/stockUser";
import { useMessage } from "naive-ui";

const message = useMessage();
const renderLocalIcon = (iconPath: string) => {
  return () =>
    h(NIcon, null, {
      default: () => h("img", { src: iconPath }),
    });
};

const modalStore = useLoginModalStore();

const userStore = useUserStore();

const userIsLoggedIn = computed(() => userStore.isLoggedIn);

const openLoginModal = () => {
  modalStore.openLoginModal();
};

const openProfileModal = () => {
  modalStore.openProfileModal();
};

const options = [
  {
    label: "用户资料",
    props: {
      onClick: () => {
        openProfileModal();
      },
    },

    icon: renderLocalIcon("/img/userInfo.svg"),
  },
  {
    label: "退出登录",
    props: {
      onClick: () => {
        logoutUser();
        userStore.clearUser();
      },
    },
    icon: renderLocalIcon("/img/log_out.svg"),
  },
];

const logoutUser = async () => {
  const res = await logout();
  if (res.code === 0) {
    message.success("退出登录成功！");
  }

  userStore.clearUser();
};

const route = useRoute();
const router = useRouter();

const showIcon = computed(() => route.name && route.name !== "Home");

const goToHome = () => {
  router.push({
    path: "/",
  });
};

// const copyMessage = useMessage();

const { isMobile } = useDeviceStore();
const store = useStockStore();
const topBarData = computed(() => store.hangqingList);

// const randomDomain = computed(() => {
//   const randomIndex = Math.floor(Math.random() * domainList.length);
//   return domainList[randomIndex];
// });

// const copyToClipboard = (text: string) => {
//   navigator.clipboard
//     .writeText(text)
//     .then(() => {
//       copyMessage.success("复制成功！");
//     })
//     .catch(() => {
//       copyMessage.error("复制失败！");
//     });
// };
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
