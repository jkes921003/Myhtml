const app = Vue.createApp({
    data() {
      return {
        navLinks: [
          { text: "首頁", href: "rtfantasy.html" },
          { text: "關於", href: "about.html" },
          { text: "作品", href: "#services" },
        ],
      };
    },
  });
  
  app.mount("#app");
  