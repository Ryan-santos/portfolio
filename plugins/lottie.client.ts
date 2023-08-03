import _vue3Lottie from "vue3-lottie";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(_vue3Lottie);
});