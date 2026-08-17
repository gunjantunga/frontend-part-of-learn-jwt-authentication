import { create } from "zustand";

const useBearAndSlothCounter = create((set, get) => ({


    bear: 0,
    sloth: 0,
    isLoading: false,

    incrementBear: () => set((state) => ({ bear: state.bear + 1 })),
    incrementSloth: () => {

        set({ isLoading: true })
        return new Promise((resolve) => {
            setTimeout(() => {
                set((state) => ({
                    sloth: state.sloth + 1,
                    isLoading: false
                }))
                resolve();
            }, 2000)
        })


    },
    incrementAnimal: async () => {
        await get().incrementSloth();
        get().incrementBear();

    }
}));

export default useBearAndSlothCounter;


