import { stockList } from './../../views/stockLine/codeList';
export interface HangqingItem {
    f1: number
    f2: number
    f3: number
    f4: number
    f12: string
    f13: number
    f14: string
}

export interface BaseListReq {
    page: number;
    pageSize: number;
}

export interface RecomendedItem {
    addTime: string
    createdAt: number
    details: string
    id: string
    isRecommend: boolean
    status: number
    stockCode: string
    stockFall: string
    stockName: string
    stockRise: string
    stockTags: string
    updatedAt: number
}

export interface RecomendedResponse {
    code: number
    data: {
        data: RecomendedItem[]
    }
    msg: string
}

export interface GlobEnvConfig {
    // Site title
    VITE_GLOB_APP_TITLE: string;
    // Service interface url
    VITE_GLOB_API_URL: string;
}


export interface NewsItem {
    author: string
    desc: string
    id: number
    link: string
    news_from: string
    news_time: string
    preview_img: string
    title: string
    type: string
}

export interface NewsResponse {
    Code: number
    Data: {
        RecordList: NewsItem[]
        RecordCount: number
    }
    Message: string
}

export interface WeekNewsItem {
    summary: string;
    code: string;
    titleColor: number;
    realSort: string;
    showTime: string;
    title: string;
    share: number;
    pinglun_Num: number;
    stockList: string[];
    image: string[];
}

export interface WeekNewsData {
    sortEnd: string;
    index: number;
    total: number;
    size: number;
    fastNewsList: WeekNewsItem[];
}

export interface WeekNewsResponse {
    req_trace: string;
    code: string;
    message: string;
    data: WeekNewsData;
}
