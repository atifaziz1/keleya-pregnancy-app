import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

import {NativeModules, Platform} from 'react-native';

const translationGetters = {
  en: () => require('./languages/en.json'),
  de: () => require('./languages/de.json'),
};

const getLocal = () => {
  let locale = 'en';
  if (Platform.OS === 'ios') {
    locale =
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0];
  } else {
    locale = NativeModules.I18nManager.localeIdentifier;
  }
  return locale.slice(0, 2);
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = () => {
  const fallback = {languageTag: getLocal()};
  const {languageTag} = fallback;

  translate.cache.clear();

  i18n.translations = {[languageTag]: translationGetters[languageTag]()};

  i18n.locale = getLocal();
};

export {translate, setI18nConfig};
