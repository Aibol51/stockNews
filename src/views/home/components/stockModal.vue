<template>
  <div>
    <n-modal :show="showModal" @update:show="handleModalChange">
      <n-card
        style="width: 600px"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <template #header>
          <div class="flex">
            <img src="/img/bullStock.svg" alt="" class="w-[20px]" />
            <p>历史推荐</p>
          </div>
        </template>
        <div class="flex flex-col gap-[10px]">
          <div
            v-for="(item, index) in recomendData"
            :key="item.id"
            class="p-[10px] rounded-[10px] border-[1px] border-dark-100 bg-[#F5FAFE] relative"
            :class="index <= 2 ? 'pt-[30px]' : ''"
          >
            <div v-if="index <= 2" class="absolute top-[0] left-[0] w-full">
              <svg
                width="100%"
                viewBox="0 0 648 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 0C4.47715 0 0 4.47715 0 10V35H77.2461C81.8098 35 85.7945 31.9103 86.931 27.4904L91.9429 8H107.5H648V0H94H55H10Z"
                  :fill="'url(#paint0_linear_' + index + ')'"
                />
                <defs>
                  <linearGradient
                    :id="'paint0_linear_' + index"
                    x1="55"
                    y1="7.99965"
                    x2="351.5"
                    y2="7.99965"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop :stop-color="getStopColor(index)" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p
                class="absolute top-[2px] left-[7px] text-white text-[14px] font-bold"
              >
                今日推荐
              </p>
            </div>
            <div
              class="flex justify-between items-center text-[20px] font-bold"
            >
              <p>{{ item.stockName }}</p>
              <p>{{ item.stockCode }}</p>
              <p
                :class="[Number(item.stockRise) <= 0 ? 'greenText' : 'redText']"
              >
                {{ item.stockRise }}
              </p>
              <p
                :class="[Number(item.stockRise) <= 0 ? 'greenText' : 'redText']"
              >
                {{ item.stockFall }}
              </p>
            </div>
            <div class="flex justify-between items-center">
              <div v-if="item.stockTags">
                <div
                  v-if="item.stockTags.includes(',')"
                  class="flex gap-[10px]"
                >
                  <van-tag
                  size="large"
                    plain
                    color="#2c7ee8"
                    v-for="(tag, index) in item.stockTags.split(',')"
                    :key="index"
                    >{{ tag.trim() }}</van-tag
                  >
                </div>
                <div v-else>
                  <van-tag size="large" plain color="#2c7ee8">{{ item.stockTags }}</van-tag>
                </div>
              </div>

              <p
                class="text-[#888888] text-[15px]"
                :class="{ 'ml-auto': !item.stockTags }"
              >
                {{ item.addTime }}
              </p>
            </div>
            <van-text-ellipsis
              class="w-full"
              rows="2"
              :content="item.details"
              expand-text="展开"
              collapse-text="收起"
            />
          </div>
        </div>
      </n-card>
    </n-modal>
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import { recomendedStore } from "@/stores/index";
const recomendStore = recomendedStore();
const recomendData = computed(() => recomendStore.recomendData);

defineProps({
  showModal: Boolean,
});
const emit = defineEmits(["update:show"]);

const handleModalChange = (newShowModal: any) => {
  emit("update:show", newShowModal);
};

const getStopColor = (index: any) => {
  switch (index) {
    case 0:
      return "#FA534A";
    case 1:
      return "#FF912F";
    case 2:
      return "#3C9DFC";
    default:
      return "#FA534A"; // 默认颜色，或者您可以选择其他颜色
  }
};
</script>
<style>
.greenText {
  color: #19d60a;
}
.redText {
  color: #fa0606;
}
.stockTags {
  border: 2px solid #2c7ee8;
  border-radius: 5px;
  padding: 0 5px;
  font-size: 15px;
  font-weight: bold;
  color: #2c7ee8;
}
</style>
