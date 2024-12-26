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
        name: "你的名字",
        tagline: "一位熱愛學習的開發者",
        photo: "img/me.jpg", // 替換為你的照片連結
        bio: "這裡是你的自我介紹，可以描述你的背景、興趣和夢想。",
        contact: {
          email: "youremail@example.com",
          phone: "123-456-7890",
          location: "台北, 台灣"
        }
      }
    };
  }
});

about.mount("#about");