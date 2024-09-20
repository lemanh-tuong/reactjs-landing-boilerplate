import { i18n } from 'i18next';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchParamKey } from './constants/SearchParamKey';
import { updateURLSearchParamsOfBrowserWithoutNavigation } from './utils/updateURLSearchParamsOfBrowserWithoutNavigation';

export const useChangeLanguage = (): { i18n: i18n; changeLanguage: (locale: string) => void } => {
  const { i18n } = useTranslation();
  const currentUrlSearchParams = useMemo(() => new URLSearchParams(window.location.search), []);

  const handleChangeLanguage = (locale: string): void => {
    i18n.changeLanguage(locale);
    currentUrlSearchParams.set(SearchParamKey, locale);
    updateURLSearchParamsOfBrowserWithoutNavigation(currentUrlSearchParams);
  };

  useEffect(() => {
    const isI18nParams = currentUrlSearchParams.get(SearchParamKey);
    if (isI18nParams) {
      i18n.changeLanguage(isI18nParams);
      currentUrlSearchParams.delete(SearchParamKey);
      updateURLSearchParamsOfBrowserWithoutNavigation(currentUrlSearchParams);
    }
  }, [currentUrlSearchParams, i18n]);

  return {
    i18n,
    changeLanguage: handleChangeLanguage,
  };
};
