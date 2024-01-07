import axios from 'axios';
import { BaseDataResp, CaptchaResp } from "@/api/interface/index.ts"

export async function getCaptcha(): Promise<BaseDataResp<CaptchaResp>> {
    try {
        const response = await axios.get<BaseDataResp<CaptchaResp>>(import.meta.env.VITE_GLOB_API_URL + '/sys-api/captcha');
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch captcha'); // Or throw the original error
    }
}

export async function getEmailCaptcha(email: string): Promise<BaseDataResp<String>> {
    try{
        const response = await axios.post<BaseDataResp<String>>(import.meta.env.VITE_GLOB_API_URL + '/sys-api/captcha/email', { email: email });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch captcha'); // Or throw the original error
    }
}


export async function getSmsCaptcha(phoneNumber: string): Promise<BaseDataResp<String>> {
    try{
        const response = await axios.post<BaseDataResp<String>>(import.meta.env.VITE_GLOB_API_URL + '/sys-api/captcha/sms', { phoneNumber: phoneNumber });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch captcha'); // Or throw the original error
    }
}
