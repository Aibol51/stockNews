<template>
    <div class="stockSwipe px-[4vw] py-[3vw]" v-if="isMobile">
      <div class="flex items-center gap-[1vw]">
        <img src="/img/line.png" alt="" class="w-[5.5vw]" />
        <p class="font-bold text-[4.4vw]">今日指数</p>
      </div>
      <n-skeleton
        v-if="hangqingLoading"
        class="mt-[2vw]"
        height="22vw"
        width="100%"
        :sharp="false"
      />
      <swiper
        v-else
        v-if="isSwiperReady"
        :slidesPerView="3"
        :spaceBetween="20"
        :modules="stockModules"
        class="mySwiper px-[1vw] py-[3vw]"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :loop="true"
        ref="mySwiper"
      >
        <swiper-slide v-for="(item, index) in hangqingList" :key="index">
          <div
            class="stockBox flex flex-col items-center p-[2vw] bg-white rounded-[1vw] shadow-custom"
            :class="[item.f3 <= 0 ? 'greenBack' : 'redBack']"
            @click="goToStock(item)"
          >
            <div class="stockTop flex flex-col items-center">
              <p class="font-bold text-[4vw] whitespace-nowrap">{{ item.f14 }}</p>
              <p
                class="font-bold text-[4vw]"
                :class="[item.f3 <= 0 ? 'greenText' : 'redText']"
              >
                {{ item.f2 }}
              </p>
            </div>
            <div class="stockBottom flex gap-[2vw]">
              <p
                class="font-bold text-[3vw]"
                :class="[item.f3 <= 0 ? 'greenText' : 'redText']"
              >
                {{ item.f3 }}
              </p>
              <p
                class="font-bold text-[3vw]"
                :class="[item.f3 <= 0 ? 'greenText' : 'redText']"
              >
                {{ item.f4 }}%
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="pt-[1vw]" v-if="!isMobile">
      <n-card>
        <template #header>
          <div class="flex items-center gap-[0.3vw]">
            <img src="/img/line.png" alt="" class="w-[20px]" />
            <p class="font-bold text-[15px]">今日指数</p>
          </div>
        </template>
        <n-divider />
        <n-skeleton
          v-if="hangqingLoading"
          text
          :repeat="1"
          :sharp="false"
          size="medium"
          height="5vw"
        />
        <template v-else>
          <swiper
            v-if="isSwiperReady"
            :slidesPerView="8"
            :spaceBetween="20"
            :modules="stockModules"
            :speed="3000"
            class="mySwiper py-[0.2vw] px-[0.5vw]"
            :autoplay="{
              delay: 0,
              disableOnInteraction: false,
            }"
            :loop="true"
            ref="mySwiper"
          >
            <swiper-slide v-for="(item, index) in hangqingList" :key="index">
              <div
                class="stockBox flex flex-col items-center p-[0.5vw] bg-white rounded-[0.1vw] shadow-custom"
                :class="[item.f3 <= 0 ? 'pGreen' : 'pRed']"
                @click="goToStock(item)"
              >
                <div class="stockTop flex flex-col items-center">
                  <p class="font-bold text-[13px] whitespace-nowrap">
                    {{ item.f14 }}
                  </p>
                  <p
                    class="font-bold text-[13px]"
                    :class="[item.f3 <= 0 ? 'greenText' : 'redText']"
                  >
                    {{ item.f2 }}
                  </p>
                </div>
                <div class="stockBottom flex gap-[1vw] whitespace-nowrap">
                  <p
                    class="font-bold text-[10px]"
                    :class="[item.f3 <= 0 ? 'greenText' : 'redText']"
                  >
                    {{ item.f3 }}
                  </p>
                  <p
                    class="font-bold text-[10px]"
                    :class="[item.f3 <= 0 ? 'greenText' : 'redText']"
                  >
                    {{ item.f4 }}%
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </template>
      </n-card>
    </div>
  </template>
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay, EffectFade } from "swiper/modules";
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";
  import { useDeviceStore,useStockStore } from "@/stores/index";
  import "swiper/css";
  import "swiper/css/pagination";
  import { HangqingItem } from '@/api/interface/index.ts';

  
  const router = useRouter();
  const store = useStockStore();
  const { isMobile } = useDeviceStore();
  
  const goToStock = (stockCode:HangqingItem) => {
    router.push({
      path: "/Stock",
      query: {
        n: stockCode.f12,
        s: stockCode.f14,
      },
    });
  };
  

  const hangqingList = computed(() => store.hangqingList);
  const hangqingLoading = computed(() => store.hangqingLoading);
  const isSwiperReady = computed(() => store.isSwiperReady);
  
  const stockModules = [Autoplay, EffectFade];
  const mySwiper = ref(null);
  

  
  </script>
  <style scoped>
  .greenBack {
    background: linear-gradient(#a8ffa0, #fff);
  }
  .greenText {
    color: #0eb500;
  }
  .redBack {
    background: linear-gradient(#ffa0a0, #fff);
  }
  .redText {
    color: #ff0000;
  }
  .n-divider:not(.n-divider--vertical) {
    margin-top: 0;
  }
  
  .pGreen {
    background: #e7f7e9;
  }
  .pRed {
    background: #fbefee;
  }
  
  :deep(.swiper-wrapper) {
    transition-timing-function: linear !important;
  }
  .stockBox {
    cursor: pointer;
  }
  </style>
  