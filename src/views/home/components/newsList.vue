<template>
  <div v-if="isMobile" class="flex flex-col gap-[2vw] py-[2vw]">
    <div v-if="loading" v-for="n in 3" :key="n" class="flex flex-row gap-[2vw]">
      <div class="flex flex-grow-[4] flex-col gap-[2vw]">
        <n-skeleton height="15vw" width="100%" :sharp="false" />
        <n-skeleton height="7vw" width="100%" :sharp="false" />
      </div>
      <div class="flex-grow-[2]">
        <n-skeleton height="100%" width="100%" :sharp="false" />
      </div>
    </div>

    <div
      v-else
      v-for="(item, index) in newsData"
      @click="goToNews(item)"
      :key="index"
    >
      <div class="flex flex-row gap-[2vw] newsItem">
        <div class="flex flex-col justify-between w-full" style="flex-grow: 4">
          <p class="multiline-ellipsis font-bold text-[3.5vw]">
            {{ item.title }}
          </p>
          <div class="flex justify-between">
            <van-tag plain color="#4860d3">{{ item.type }}</van-tag>
            <p class="text-[#999999] font-bold">
              {{ formatNewsTime(item.news_time) }}
            </p>
          </div>
        </div>
        <img
          style="flex-grow: 2"
          :src="item.preview_img == '' ? '/img/photo.png' : item.preview_img"
          class="w-[30vw] rounded-[1vw]"
        />
      </div>
    </div>
  </div>
  <div v-if="!isMobile" class="flex flex-col gap-[20px]">
    <div v-if="loading" class="newsItemPc" v-for="n in 10" :key="n">
      <div>
        <n-skeleton height="110px" width="100%" />
        <div class="mt-[1vw]">
          <n-skeleton height="20px" width="100%" />
        </div>
      </div>
      <n-skeleton height="100%" width="100%" :sharp="false" />
    </div>
    <div
      v-else
      class="newsItemPc cursor-pointer"
      v-for="(item, index) in newsData"
      @click="goToNews(item)"
      :key="index"
    >
      <div class="itemLeft flex flex-col justify-between h-full">
        <div>
          <p class="multiline-ellipsis font-bold text-[15px]">
            {{ item.title }}
          </p>
          <p class="line-clamp-3">{{ item.desc }}</p>
        </div>

        <div class="flex justify-between items-center">
          <p
            class="rounded-[0.3vw] px-[5px] text-[#4860d3] font-bold text-[12px]"
            style="border: 2px solid #4860d3"
          >
            {{ item.type }}
          </p>
          <p class="text-[#C5C6C9] font-bold text-[12px]">
            {{ formatNewsTime(item.news_time) }}
          </p>
        </div>
      </div>
      <img
        :src="item.preview_img == '' ? '/img/photo.png' : item.preview_img"
        class="w-[30vw] rounded-[1vw]"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDeviceStore } from "@/stores/index";
import { getNews } from "@/api/fetchNews.ts";
import { NewsItem } from "@/api/interface/index.ts";
const { isMobile } = useDeviceStore();
const router = useRouter();

const newsData = ref<NewsItem[]>([]);
const loading = ref(true);

async function fetchNews() {
  loading.value = true;
  try {
    const data = await getNews();
    newsData.value = data;
    loading.value = false;
  } catch (err) {
    console.log("Feiled to fetch news:", err);
    loading.value = false;
  } finally {
    loading.value = false;
  }
}

fetchNews();

const goToNews = (urlData: any) => {
  router.push({
    path: "/News",
    query: {
      url: urlData.link,
    },
  });
};

function formatNewsTime(dateTime: string | number | Date) {
  const date = new Date(dateTime);
  return date.toLocaleDateString("en-CA");
}
</script>
<style scoped>
.multiline-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 这里的数字代表文本行数 */
  overflow: hidden;
  text-overflow: ellipsis;
}
.newsItem {
  /* display: grid;
  display: flex; */
  /* grid-template-columns: 4fr 2fr; */
  /* align-items: center; */
  /* margin-bottom: 4vw; */
  /* gap: 2vw; */
  background: #f5f8fe;
  padding: 10px;
  border-radius: 10px;
}
.newsItemPc {
  display: grid;
  /* display: flex; */
  grid-template-columns: 4fr 2fr;
  align-items: center;
  /* margin-bottom: 4vw; */
  gap: 2vw;
  background: #f5f8fe;
  padding: 10px;
  border-radius: 10px;
}
</style>
