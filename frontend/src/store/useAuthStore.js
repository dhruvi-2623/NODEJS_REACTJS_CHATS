import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSingUp: false,
    isLoggIng: false,
    isUpdateIng: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({authUser: res.data})
        } catch (error) {
            console.log("Error in checkAuth:" , error);
            set({authUser: null});
        }
    }
}));