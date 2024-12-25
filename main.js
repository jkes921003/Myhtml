const app = Vue.createApp({
  data() {
    return {
      navLinks: [
        { text: "首頁", href: "rtfantasy.html" },
        { text: "關於", href: "about.html" },
      ],
      dropdownOptions: [
        { text: "精選作品", href: "work.html" },
        { text: "攝影", href: "photo.html" },
        { text: "基礎設計", href: "design.html" },
      ],
    };
  },
});

app.mount("#app");

const  Carousel= Vue.createApp({
  data() {
    return {
      // 定義幻燈片的資料
      carouselItems: [],
    };
  },
  mounted() {
    // 使用 jQuery 的 Ajax 請求
    $.ajax({
      url: "/photo",
      method: "get",
      dataType: "json",
      success: (results) => {
        // 更新 幻燈片 資料
        this.carouselItems = results;
      },
      error: (error) => {
        console.error("Error fetching data:", error);
      },
    });
  },
});


Carousel.mount("#Carousel"); // 將 Vue 應用程式掛載到 HTML 的 #Carousel

const container = Vue.createApp({
  data() {
    return {
      // 定義卡片的資料
      cards: [],
    };
  },
  mounted() {
    // 使用 jQuery 的 Ajax 請求
    $.ajax({
      url: "/profolio",
      method: "get",
      dataType: "json",
      success: (results) => {
        // 更新 cards 資料
        this.cards = results;
      },
      error: (error) => {
        console.error("Error fetching data:", error);
      },
    });
  },
});

container.mount("#container");