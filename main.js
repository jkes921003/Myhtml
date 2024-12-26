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
        this.carouselItems= results;
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



// about頁面

const about = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "王元俊",
        tagline: "​一個學習中的創作者",
        motto:"座右銘: Life is so hard but Fantastic. ",
        photo: "img/me.jpg", 
        bio: "就讀:台中科技大學多媒體設計系 ",
        bio2:"興趣：玩遊戲、烹飪、畫畫、唱歌、拍天空、看動漫、看小說......",
        bio3:"持有證照：數位電子乙級、工業電子丙級、電腦軟體應用丙級",
      }
    };
  }
});

about.mount("#about");