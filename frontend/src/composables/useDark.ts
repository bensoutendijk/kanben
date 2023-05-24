import { useDark as vueUseDark } from "@vueuse/core";

export function useDark() {
  return vueUseDark({
    selector: "body",
    attribute: "class",
    valueDark: "dark-theme",
    valueLight: ""
  });
}
