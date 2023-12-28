import { defineStore } from 'pinia'
export const useLocaleStore = defineStore({
  id: 'locale',
  state: () => ({
    locale: 'uzLat',
  }),
  getters: {
    // role: (state) => state.roles[0],
  },
  actions: {
    change(locale) {
      this.locale = locale
    }
  },
  persist: true
})
