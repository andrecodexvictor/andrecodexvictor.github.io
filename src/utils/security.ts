/**
 * Public display preferences helper.
 *
 * Security note (2026 Architecture Revision):
 * Client-side password hash comparison and browser-local "admin" gates have been
 * intentionally removed. All portfolio content is versioned at build time in `src/content/`.
 * This module only manages non-sensitive reader display preferences (theme, accent, reduced motion).
 */

import { useSyncExternalStore } from 'react';
import type { Language } from '@/config/i18n';

export type ThemeMode = 'light' | 'dark';
export type AccentTone = 'sage' | 'bronze';

const THEME_STORAGE_KEY = 'av_editorial_theme';
const ACCENT_STORAGE_KEY = 'av_editorial_accent';
const LANG_STORAGE_KEY = 'av_editorial_lang';
const PREF_EVENT = 'av_editorial_pref_change';

function subscribePrefs(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener(PREF_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(PREF_EVENT, callback);
  };
}

function notifyPrefsChange(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(PREF_EVENT));
  }
}

export function getStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored === 'dark' ? 'dark' : 'light';
}

export function setStoredTheme(theme: ThemeMode): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  document.documentElement.setAttribute('data-theme', theme);
  notifyPrefsChange();
}

export function getStoredAccent(): AccentTone {
  if (typeof window === 'undefined') return 'sage';
  const stored = window.localStorage.getItem(ACCENT_STORAGE_KEY);
  return stored === 'bronze' ? 'bronze' : 'sage';
}

export function setStoredAccent(accent: AccentTone): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ACCENT_STORAGE_KEY, accent);
  document.documentElement.setAttribute('data-accent', accent);
  notifyPrefsChange();
}

export function getStoredLang(): Language {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  return stored === 'pt' ? 'pt' : 'en';
}

export function setStoredLang(lang: Language): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  notifyPrefsChange();
}

export function useStoredLang(): [Language, (next: Language) => void] {
  const lang = useSyncExternalStore<Language>(
    subscribePrefs,
    getStoredLang,
    () => 'en'
  );
  return [lang, setStoredLang];
}

export function useStoredTheme(): [ThemeMode, (next: ThemeMode) => void] {
  const theme = useSyncExternalStore<ThemeMode>(
    subscribePrefs,
    getStoredTheme,
    () => 'light'
  );
  return [theme, setStoredTheme];
}

export function useStoredAccent(): [AccentTone, (next: AccentTone) => void] {
  const accent = useSyncExternalStore<AccentTone>(
    subscribePrefs,
    getStoredAccent,
    () => 'sage'
  );
  return [accent, setStoredAccent];
}
