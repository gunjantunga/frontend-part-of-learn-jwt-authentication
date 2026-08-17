import { create } from "zustand";

const useCounterStore = create((set, get) => ({

    count: 0,
    isLoading: false,
    users: [],

    incrementAsync: async () => {
        if (get().isLoading) return;

        set({ isLoading: true })


        try {

            await new Promise((resolve) => setTimeout(resolve, 1000));

            set((state) => ({
                count: state.count + 1,
                isLoading: false
            }))
        } catch (error) {
            set({ isLoading: false })
            console.error("Error happen while incrementing");
        }
    },

    getUserData: async () => {
        if (get().isLoading) return;

        set({ isLoading: true })

        try {

            setTimeout(async () => {

                const res = await fetch("https://jsonplaceholder.typicode.com/users");

                const data = await res.json();

                set({
                    users: data,
                    isLoading: false
                })
            }, 2000)


        } catch (error) {
            set({ isLoading: false })
            console.log("Error while fetching users")
        }
    }
}))

export default useCounterStore;