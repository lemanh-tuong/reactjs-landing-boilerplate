// the hook
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from './i18n/useChangeLanguage';

export const App = () => {
  const { t } = useTranslation();
  useChangeLanguage();

  return <h1 className="italic">{t('Welcome to React')}</h1>;
};
