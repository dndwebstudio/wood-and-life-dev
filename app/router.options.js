export default {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();

    if (savedPosition) return savedPosition;

    if (to.hash && to.path === from.path) {
      const el = document.querySelector(to.hash);
      const header = document.querySelector(".header");
      if (!el && !header.length) return;
      return {
        top: el.offsetTop - header.offsetHeight,
        left: 0,
        behavior: "smooth",
      };
    }

    return new Promise((resolve) => {
      nuxtApp.hook("page:finish", () => {
        resolve({
          top: 0,
          left: 0,
        });
      });
    });
  },
};
