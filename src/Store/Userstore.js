
import { create } from "zustand"
import { api } from "../api/api"
import { toast } from "react-toastify"

export const useUserStore = create((set) => ({
    user: null,
    isLoggedIn: false,

    signup: async ({ username, email, password }) => {
        try {
            const response = await api.post("/signup", {
                username,
                email,
                password,
            })

            const data = response.data
            set({ user: data.data, isLoggedIn: true })
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message)
                throw new Error(err.message, err.stack)
            }
        }
    },

    login: async ({ email, password }) => {
        try {
            const response = await api.post("/login", {
                email,
                password,
            })

            const data = response.data
            set({ user: data.data, isLoggedIn: true })
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message)
                throw new Error(err.message, err.stack)
            }
        }
    },

    logout: () => {
        set({ user: null, isLoggedIn: false })
    },
}))