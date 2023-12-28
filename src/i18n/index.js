import { createI18n } from 'vue-i18n'
import uzLat from '@/i18n/uzLat'
import uzCyr from '@/i18n/uzCyr'
import ru from '@/i18n/ru'
import en from '@/i18n/en'
import { useLocaleStore } from '@/stores/locale'

const i18nFactory = () => {
  const localeStore = useLocaleStore()
  return createI18n({
    legacy: false,
    locale: localeStore.locale,
    fallbackLocale: 'uzLat',
    messages: { uzLat, uzCyr, ru, en }
  })
}

export default i18nFactory
