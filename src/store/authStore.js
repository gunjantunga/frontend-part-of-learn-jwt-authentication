import { create } from "zustand";

export const useAuthStore = () => create((set) => ({

    accessToken: localStorage.getItem("accessToken") || '',
    refreshToken: localStorage.getItem("refreshToken") || '',

    setAccessToken: (token) => set({ accessToken: token }),
    setRefreshToken: (token) => set({ refreshToken: token }),

    logout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        set({ refreshToken: '', accessToken: '' });
    }

}))


