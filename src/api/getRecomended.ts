
// fetchData.ts
import axios from 'axios';
import { RecomendedResponse, BaseListReq } from "@/api/interface/index.ts"


export async function fetchRecomendedData() {
    try {
        const response = await axios.post<RecomendedResponse>(
            import.meta.env.VITE_GLOB_API_URL + "/sys-api/stock/list",
            {
                page: 1,
                pageSize: 100,
            } as BaseListReq
        );

        if (response.data && response.data.code === 0) {
            return response.data.data.data
        } else {
            console.error("请求失败: ", response.data.msg);
            return null
        }
    } catch (error) {
        console.error("请求出错: ", error);
        return null
    }
}
