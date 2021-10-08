import en from "./en.json";
import it from "./it.json";

// import vee validate localizations
import valIt from "vee-validate/dist/locale/it.json";
import valEn from "vee-validate/dist/locale/en.json";

// eventually overwrite vee-validate rules messages
// overwriting required message for Italian
valIt.messages.required = "Il campo {_field_} è obbligatorio";

// add vee-validate messages to it and en objects
it["validations"] = valIt.messages;
en["validations"] = valEn.messages;

const languages = {
  en: en,
  it: it,
};

const messages = Object.assign(languages);
const langCode = navigator.language;
import { createI18n } from "@/utils/vue-i18n-composable";
const i18n = createI18n({
  locale: langCode,
  fallbackLocale: "en",
  messages: messages,
});

import { configure } from "vee-validate";
configure({
  // this will be used to generate messages.
  defaultMessage: ((field: string, values: any) => {
    values._field_ = i18n.t(`fields.${field}`);
    return i18n.t(`validations.${values._rule_}`, values);
  }) as any,
});

export { i18n };
