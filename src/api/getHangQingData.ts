import { ref, Ref } from "vue";
import { HangqingItem } from "@/api/interface/index.ts"


export function getHangQingData(callback: (data: HangqingItem[]) => void) {
  const hangqingList: Ref<HangqingItem[]> = ref([]);
  const isSwiperReady: Ref<boolean> = ref(false);
  const hangqingLoading: Ref<boolean> = ref(true);

  const fetchStockListData = () => {
    const now = new Date().getTime();
    const callbackName = `jQuery34_${now}`;
    const url = `https://push2delay.eastmoney.com/api/qt/ulist.np/get?cb=${callbackName}&fltt=2&invt=2&fields=f1,f2,f3,f4,f12,f13,f14&secids=1.000001,0.399001,0.399006,100.DJIA,100.NDX,100.SPX,100.FTSE,100.GDAXI,100.FCHI,100.HSI,100.N225,101.GC00Y,102.CL00Y,133.USDCNH,100.UDI&ut=157cbcbce2a86e2866ab8877db1d059&forcect=1&_=${now}`;

    // @ts-ignore
    window[callbackName] = async (data: { data: { diff: HangqingItem[] } }) => {
      callback(data.data.diff);
      hangqingList.value = data.data.diff;
      isSwiperReady.value = true;
      hangqingLoading.value = false;
      // @ts-ignore
      delete window[callbackName];
    };

    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);

    script.onload = () => {
      document.body.removeChild(script);
    };

    script.onerror = () => {
      console.error("JSONP request failed");
      // @ts-ignore
      delete window[callbackName];
      document.body.removeChild(script);
      hangqingLoading.value = false;
    };
  };
  fetchStockListData();

  return {
    hangqingList,
    isSwiperReady,
    hangqingLoading,
    fetchStockListData,
  };
}