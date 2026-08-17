import { create } from "zustand";


export const useCounter = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count === 0 ? 0 : state.count - 1 })),
    reset: () => set((state) => ({ count: 0 }))
}))


