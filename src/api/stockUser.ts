import { BaseDataResp, RegisterReq, loginReq, loginResp, UpdateUserInfoReq } from "@/api/interface/index.ts"
import axios from 'axios';
import { useUserStore } from '@/stores/index';


export async function register(registerReq: RegisterReq): Promise<BaseDataResp<String>> {
    try {
        const response = await axios.post<BaseDataResp<String>>(import.meta.env.VITE_GLOB_API_URL + '/mms-api/member/register_by_sms', registerReq);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to register'); // Or throw the original error
    }
}

export async function login(registerReq: loginReq): Promise<BaseDataResp<loginResp>> {
    try {
        const response = await axios.post<BaseDataResp<loginResp>>(import.meta.env.VITE_GLOB_API_URL + '/mms-api/member/login_by_phone', registerReq);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to register'); // Or throw the original error
    }
}

export async function updateUserData(updateReq: UpdateUserInfoReq): Promise<BaseDataResp<String>> {
    const userStore = useUserStore();
    const token = userStore.userInfo.token;

    try {
        const response = await axios.post<BaseDataResp<string>>(import.meta.env.VITE_GLOB_API_URL + '/mms-api/member/profile', updateReq, {
            headers: {
                'Authorization': token
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to register'); // Or throw the original error
    }
}

export async function logout(): Promise<BaseDataResp<String>> {
    const userStore = useUserStore();
    const token = userStore.userInfo.token;

    try {
        const response = await axios.get<BaseDataResp<string>>(import.meta.env.VITE_GLOB_API_URL + '/mms-api/member/logout', {
            headers: {
                'Authorization': token
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to register'); // Or throw the original error
    }
}