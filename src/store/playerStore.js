import { create } from 'zustand'

export const usePlayerStore = create((set) => {
    isPlaying: false
})