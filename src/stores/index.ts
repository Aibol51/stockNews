// stores/useStockStore.ts
import { defineStore } from 'pinia';
import { HangqingItem,RecomendedItem } from '@/api/interface/index.ts';
import { ref, reactive } from 'vue';
export const useStockStore = defineStore('stock', {
    state: () => {
        return reactive({
            hangqingList: [] as HangqingItem[],
            isSwiperReady: false,
            hangqingLoading: true,
            isMobile: false,
        })
    },
    actions: {
        setHangqingList(data: HangqingItem[]) {
            this.hangqingList = data;
        },
        setIsSwiperReady(data: boolean) {
            this.isSwiperReady = data;
        },
        setHangqingLoading(data: boolean) {
            this.hangqingLoading = data;
        },
    },
});
export const useDeviceStore = defineStore('device', () => {
    const isMobile = ref(false);

    function detectMobile() {
        isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    }

    // 初始化时检测一次
    detectMobile();

    return { isMobile };
});

export const recomendedStore = defineStore('recomended', {
    state: () => {
        return {
            recomendData: [] as RecomendedItem[],
            recomendLoading: true
        };
    },
    actions: {
        setRecomendData(data: RecomendedItem[]) {
            this.recomendData = data;
        },
        setRecomendLoading(data: boolean) {
            this.recomendLoading = data;
        },
    },
});