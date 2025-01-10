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

const Carousel = Vue.createApp({
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



// about頁面

const about = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "王元俊",
        tagline: "​一個學習中的創作者",
        motto: "座右銘：Life is so hard but Fantastic. ",
        photo: "img/me.jpg",
        bio: "就讀：台中科技大學多媒體設計系 ",
        bio2: "興趣：玩遊戲、烹飪、畫畫、唱歌、拍天空、看動漫、看小說......",
        bio3: "持有證照：數位電子乙級、工業電子丙級、電腦軟體應用丙級",
        bio4: "個性開朗善於溝通與表達，對於邏輯以及現況的掌握有清晰的思維。",
        bio5: "手作能力出色，在工具使用方式的學習上非常快速，可將剛學會的手作技巧運用在自己正在製作的作品。",
      }
    };
  }
});

about.mount("#about");


//photos
const photos = Vue.createApp({
  data() {
    return {
      photos: [], // 存放照片資料
    };
  },
  updated() {
    this.$nextTick(() => {
      this.initGSAPAnimations();
    });
  },
  
  mounted() {
    // Ajax 獲取資料
    $.ajax({
      url: "/photography",
      method: "get",
      dataType: "json",
      success: (results) => {
        this.photos = results;
        
      },
      error: (error) => {
        console.error("Error fetching data:", error);
      },
    });
  },
  
  methods: {
    initGSAPAnimations() {
      if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.error("GSAP or ScrollTrigger is not loaded.");
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const blocks = document.querySelectorAll('.block');
      if (blocks.length === 0) {
        console.error("No blocks found for GSAP animations.");
        return;
      }

      blocks.forEach((block) => {
        const image = block.querySelector('.image');
        const text = block.querySelector('.text');

        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 1,
            markers: false,
          },
        });

        tl.fromTo(image, { opacity: 0, y: 300 }, { opacity: 1, y: 0, duration: 1 });
        tl.fromTo(text, { opacity: 0, y: 300 }, { opacity: 1, y: 0, duration: 1 }, '<0.3');
      });
    },
  },
});

photos.mount("#photo");




//works
const works = Vue.createApp({
  data() {
    return {
      // 定義卡片的資料
      works: [],
    };
  },
  mounted() {
    // Ajax 獲取資料
    $.ajax({
      url: "/work",
      method: "get",
      dataType: "json",
      success: (results) => {
        this.works = results;
        this.$nextTick(() => {
          setTimeout(() => {
            this.initGSAPAnimations(); // 延遲執行動畫初始化
          },200); // 延遲 200 毫秒，可根據實際情況調整
        });
      },
      error: (error) => {
        console.error("Error fetching data:", error);
      }
    });
  },

  methods: {
    initGSAPAnimations() {
      gsap.registerPlugin(ScrollTrigger);

      // 選取所有區塊，並套用 GSAP 動畫
      const blocks = document.querySelectorAll('.block');

      blocks.forEach(block => {
        // 對每個區塊中的圖片進行動畫設定
        gsap.to(block.querySelector('.image'), {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: block, // 以整個區塊為觸發器
            start: 'top 80%', // 動畫開始觸發點
            end: 'top 50%',  // 動畫結束點
            scrub: 1,        // 讓動畫隨滾動進行
            markers: false
          }
        });

        // 對每個區塊中的文字進行動畫設定
        gsap.to(block.querySelector('.text'), {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: block, // 以整個區塊為觸發器
            start: 'top 70%', // 動畫開始觸發點 (文字稍晚)
            end: 'top 50%',  // 動畫結束點
            scrub: 1,        // 讓動畫隨滾動進行
            markers: false
          }
        });
      });
    }
  }
});

works.mount("#work");

//designs
const designs = Vue.createApp({
  data() {
    return {
      // 定義卡片的資料
      designs: [],
    };
  },
  mounted() {
    // Ajax 獲取資料
    $.ajax({
      url: "/design",
      method: "get",
      dataType: "json",
      success: (results) => {
        this.designs = results;
        this.$nextTick(() => {
          setTimeout(() => {
            this.initGSAPAnimations(); // 延遲執行動畫初始化
          },700); // 延遲 700 毫秒，可根據實際情況調整
        });
      },
      error: (error) => {
        console.error("Error fetching data:", error);
      }
    });
  },
  

  methods: {
    initGSAPAnimations() {
      gsap.registerPlugin(ScrollTrigger);

      // 選取所有區塊，並套用 GSAP 動畫
      const blocks = document.querySelectorAll('.block');

      blocks.forEach(block => {
        // 對每個區塊中的圖片進行動畫設定（從左到右）
        gsap.fromTo(
          block.querySelector('.image'),
          { opacity: 0, y: 300 }, // 起始狀態：隱藏，從左側外移
          {
            opacity: 1,
            y: 0, // 結束狀態：完全顯示，回到原位置
            duration: 1,
            scrollTrigger: {
              trigger: block, // 以整個區塊為觸發器
              start: 'top 70%', // 動畫開始觸發點
              end: 'top 35%', // 動畫結束點
              scrub: 1, // 讓動畫隨滾動進行
              markers: false
            }
          }
        );

        // 對每個區塊中的文字進行動畫設定（從右到左）
        gsap.fromTo(
          block.querySelector('.text'),
          { opacity: 0, y: -300 }, // 起始狀態：隱藏，從右側外移
          {
            opacity: 1,
            y: 0, // 結束狀態：完全顯示，回到原位置
            duration: 1,
            scrollTrigger: {
              trigger: block, // 以整個區塊為觸發器
              start: 'top 70%', // 動畫開始觸發點 (文字稍晚)
              end: 'top 35%', // 動畫結束點
              scrub: 1, // 讓動畫隨滾動進行
              markers: false
            }
          }
        );
      });
    }
  }
});

designs.mount("#design");

