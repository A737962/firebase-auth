/*
   Locale : 
   Used to display different language for the application.
   Add /languagename to check change of locale of the application
*/
export default class Locale {
  static dictionary = {
    es: require("../../../DataJson/es.json"),
    en: require("../../../DataJson/en.json"),
    de: require("../../../DataJson/de.json"),
    pt: require("../../../DataJson/pt.json")
  };

  static print(key) {
    if(localStorage.getItem("language") === null) {
      localStorage.setItem("language","en")
    }
    var selectedLanguage = localStorage.getItem("language")
    if (!this.dictionary[selectedLanguage]) return key;
    if (!this.dictionary[selectedLanguage][key]) return key;
    return this.dictionary[selectedLanguage][key];
  }
}