import { register } from "swiper/element";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(register);
});
