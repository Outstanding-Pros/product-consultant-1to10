export type Locale = 'ko' | 'en'

export function resolveLocale(lang?: string): Locale {
  return lang === 'en' ? 'en' : 'ko'
}
