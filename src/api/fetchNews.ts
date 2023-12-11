// fetchNews.ts
import { NewsItem, NewsResponse } from "@/api/interface/index.ts";


export async function getNews(): Promise<NewsItem[]> {
    try {
        const response = await fetch("https://fcvbncsd.com/news?PageIndex=1&PageSize=10");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data: NewsResponse = await response.json();

        // 这里可以根据需要对返回的数据进行额外的验证或处理
        if (data.Code !== 0) {
            throw new Error(data.Message || "Error fetching news");
        }

        return data.Data.RecordList; // 返回请求得到的数据
    } catch (err) {
        console.error(err);
        throw err; // 抛出异常供调用者处理
    }
}
