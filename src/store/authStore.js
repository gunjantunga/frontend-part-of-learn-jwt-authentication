import { create } from "zustand";

// Note: Removed the () => before create
export const useAuthStore = create((set) => ({
    accessToken: localStorage.getItem("accessToken") || '',
    refreshToken: localStorage.getItem("refreshToken") || '',

    // Combine them into one action to update both state and storage
    setTokens: (accessToken, refreshToken) => {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        set({ accessToken, refreshToken });
    },

    logout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        set({ refreshToken: '', accessToken: '' });
    }
}));