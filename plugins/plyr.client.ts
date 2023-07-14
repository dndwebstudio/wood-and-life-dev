import VuePlyr from "@skjnldsv/vue-plyr";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VuePlyr, { plyr: {} });
});
