import axios from 'axios';
import { WeekNewsResponse, WeekNewsItem } from "./interface/index";

export async function useWeekNews(): Promise<WeekNewsItem[]> {
    try {
        const response = await axios.get<WeekNewsResponse>("https://np-weblist.eastmoney.com/comm/web/getFastNewsList", {
            params: {
                client: "web",
                biz: "web_724",
                fastColumn: "102",
                sortEnd: "",
                pageSize: "20",
                req_trace: "1701694361510"
            }
        });

        const data = response.data;

        if (data.code !== '1') {
            throw new Error(data.message || "Error fetching news");
        }

        return data.data.fastNewsList;

    } catch (error) {
        console.error('Error fetching weekly news:', error);
        throw error;
    }
}
