define([
  "./locales/ca.js",
  "./locales/cs.js",
  "./locales/de.js",
  "./locales/es.js",
  "./locales/fr.js",
  "./locales/it.js",
  "./locales/nl.js",
  "./locales/pl.js",
  "./locales/pt_br.js",
  "./locales/ro.js",
  "./locales/ru.js",
  "./locales/tr.js",
  "./locales/vi.js",
  "./locales/zh.js",
  "./locales/zh_cn.js",
], function () {
  const langId = (navigator.language || navigator.userLanguage).toLowerCase().replace("-", "_");
  let language = langId.substr(0, 2);
  const locales = {};

  for (index in arguments) {
    for (property in arguments[index]) locales[property] = arguments[index][property];
  }
  if (!locales.en) locales.en = {};

  if (!locales[langId] && !locales[language]) language = "en";

  let locale = (locales[langId] ? locales[langId] : locales[language]);

  function __(text) {
    const index = locale[text];
    if (index === undefined) return text;
    return index;
  }

  function setLanguage(language) {
    locale = locales[language];
  }

  return {
    __,
    locales,
    locale,
    setLanguage,
  };
});