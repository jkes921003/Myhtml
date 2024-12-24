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
      carouselItems: [
        {
          title: "", // 標題
          image: "img/design/8.png", // 圖片來源
        },
        {
          title: "", // 標題
          image: "img/photo/8.jpg", // 圖片來源
        },
        {
          title: "", // 標題
            image: "img/photo/13.jpg", // 圖片來源
        },
      ],
    };
  },
});


Carousel.mount("#Carousel"); // 將 Vue 應用程式掛載到 HTML 的 #Carousel

const container = Vue.createApp({
  data() {
    return {
      // 定義卡片的資料
      cards: [
        {
          title: "縮時攝影", // 卡片標題
          text: "Some example text. John Doe is an architect and engineer.", // 卡片內容文字
          image: "img/work/3.png", // 卡片圖片來源
          link: "photo.html", // 按鈕連結
        },
        {
          title: "偶動畫", // 卡片標題
          text: "Explore the fascinating world of stop-motion animation.", // 卡片內容文字
          image: "img/work/2.jpg", // 卡片圖片來源
          link: "design.html", // 按鈕連結
        },
        {
          title: "資訊科技", // 卡片標題
          text: "Learn about raster animation techniques and creativity.", // 卡片內容文字
          image: "img/work/1.png", // 卡片圖片來源
          link: "work.html", // 按鈕連結
        },
      ],
    };
  },
});

container.mount("#container");
