// stores/useStockStore.ts
import { defineStore } from 'pinia';
import { HangqingItem, RecomendedItem, loginResp, UserInfoResp } from '@/api/interface/index.ts';
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

export const useLoginModalStore = defineStore('loginModal', {
    state: () => ({
        showLoginModal: false,
        showProfileModal: false,
        showNoLoginModal: false,
    }),
    actions: {
        openLoginModal() {
            this.showLoginModal = true
        },
        closeLoginModal() {
            this.showLoginModal = false
        },
        toggleLoginModal(value: boolean) {
            this.showLoginModal = value
        },
        openProfileModal() {
            this.showProfileModal = true
        },
        closeProfileModal() {
            this.showProfileModal = false
        },
        toggleProfileModal(value: boolean) {
            this.showProfileModal = value
        },
        openNoLoginModal() {
            this.showNoLoginModal = true
        },
        closeNoLoginModal() {
            this.showNoLoginModal = false
        },
        toggleNoLoginModal(value: boolean) {
            this.showNoLoginModal = value
        },
    }
});

export const useUserStore = defineStore('user', {
    state: () => {
        // Attempt to recover state from localStorage
        const savedState = localStorage.getItem('userState');
        if (savedState) {
            return JSON.parse(savedState);
        }
        // Default state
        return {
            userInfo: {
                avatar: "",
                expire: 0,
                mobile: "",
                nickname: "",
                rankId: "",
                rankName: "",
                token: "",
                userId: "",
            },
        };
    },
    getters: {
        isLoggedIn: (state) => {
            // Check if userInfo contains keys
            return Object.keys(state.userInfo).length > 0;
        }
    },
    actions: {
        setUserInfo(data: UserInfoResp) {
            this.userInfo = data;
            // Save the state to localStorage
            localStorage.setItem('userState', JSON.stringify(this.$state));
        },
        setProfile(data: UserInfoResp) {
            // Update only specific fields in userInfo
            if (data.avatar !== undefined) {
                this.userInfo.avatar = data.avatar;
            }
            if (data.email !== undefined) {
                this.userInfo.email = data.email;
            }
            if (data.mobile !== undefined) {
                this.userInfo.mobile = data.mobile;
            }
            if (data.nickname !== undefined) {
                this.userInfo.nickname = data.nickname;
            }
            // Save the updated state to localStorage
            localStorage.setItem('userState', JSON.stringify(this.$state));
        },
        clearUser() {
            // Clear user data
            this.userInfo = {};
            // Also clear data from localStorage
            localStorage.removeItem('userState');
        }
    }
});
