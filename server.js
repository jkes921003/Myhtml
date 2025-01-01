//install: node js
//install web server package: express >npm install express
const express = require("express");
const server = express();
const path =require("path");



//web root
server.use(express.static(__dirname));

const fileUpload = require("express-fileupload");
server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));


const DB = require("nedb-promises");
const ProfolioDB = DB.create(__dirname+"/profolio.db");
// const ContactDB = DB.create(__dirname+"/contact.db");
const PhotoDB =DB.create(__dirname+"/photo.db");

const photographyDB =DB.create(__dirname+"/photography.db");
const designDB =DB.create(__dirname+"/design.db");
const workDB =DB.create(__dirname+"/work.db");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

  /*photographyDB.insert([
  {
    id:"1",
    title: "散景", // 標題
    text:"此作品為攝影課的散景練習，我在此作品中利用了兩面鏡子，並將相機以定時拍照的方式拍攝，目的是想利用散景的方式呈現鏡子中只有相機一個物品。",
    imgsrc: "img/photo/1.jpg", // 圖片來源
  },
  {
    id:"2",
    title: "Lightroom修圖", // 標題
    text:"此作品為Adobe Lightroom軟體修圖練習，我在此作品中將原本的圖像調色，使其色溫改變，目的是想使圖片呈現像是動畫裡面的模樣。",
    imgsrc: "img/photo/2.jpg", // 圖片來源
  },
  {
    id:"3",
    title: "Lightroom修圖", // 標題
    text:"此作品為Adobe Lightroom軟體修圖練習，我在此作品中將圖片的色溫以及曝光度做調整，目的是想讓圖像呈現出繁華的樣子。",
    imgsrc: "img/photo/3.jpg", // 圖片來源
  },
  {
    id:"4",
    title: "Lightroom修圖", // 標題
    text:"此作品為Adobe Lightroom軟體修圖練習，我在此作品中將圖片的色調、色溫以及曝光做區域性的調整，目的是想讓圖片中的人物像是浮現出來一樣，製造出一點的立體感。",
    imgsrc: "img/photo/4.jpg", // 圖片來源
  },
  {
    id:"5",
    title: "臺中中央公園", // 標題
    text:"此作品為縮時攝影中所拍攝的其中一張照片，之所以在此取景是因為當時的風景以及雲彩相當美麗，因此才將其中一個地點選在「中央公園」。",
    imgsrc: "img/photo/5.jpg", // 圖片來源
  },
  {
    id:"6",
    title: "黃金時光", // 標題
    text:"此作品為學校操場所拍攝的黃金時光，當時在回家的路上遇到美麗的景象，因此使用手機上的Lightroom調整設定並拍攝。",
    imgsrc: "img/photo/6.jpg", // 圖片來源
  },
  {
    id:"7",
    title: "中央公園黃金時光", // 標題
    text:"此作品為縮時攝影中所拍攝的其中一張照片，當時準備離開中央公園時偶遇漂亮的黃金時光，因而爬上高點拍攝的黃金時光。",
    imgsrc: "img/photo/7.jpg", // 圖片來源
  },
  {
    id:"8",
    title: "帝國製糖廠黃金時光", // 標題
    text:"此作品為縮時攝影中所拍攝的其中一張照片，當時在帝國製糖廠取景，在拍攝完取景地點時，看到這樣的黃金時光，因此隨手又架起相機將此場景也作為其中一個取景位置。",
    imgsrc: "img/photo/8.jpg", // 圖片來源
  },
  {
    id:"9",
    title: "帝國製糖廠夜景", // 標題
    text:"此作品為縮時攝影中所拍攝的其中一張照片，當時在取完黃金時光時，天色漸暗準備離開時，又發現此時的夜景也是不錯的取景點，因此又將相機架設後，將此地也設為取景地點。",
    imgsrc: "img/photo/9.jpg", // 圖片來源
  },
  {
    id:"10",
    title: "秋紅谷生態園區", // 標題
    text:"此作品為縮時攝影中所拍攝的其中一張照片，當時先用地圖稍微做了功課，覺得此地的風景很適合拍攝縮時攝影，而剛好當時那個鏡位剛好有兩棟大樓可以將陽光遮擋大部分，使其不這麼的曝光，因此選了這個位置拍攝。",
    imgsrc: "img/photo/10.jpg", // 圖片來源
  },
  {
    id:"11",
    title: "追焦(公車)", // 標題
    text:"此作品為攝影課的追焦練習，但是當時我想嘗試以固定鏡位，且剛好有車快速通過的畫面，而這張照片就在公車經過時產生了，公車因為沒有跟焦的原因模糊了，但是其後面的場景是清楚的，因為效果不錯而留下的照片。",
    imgsrc: "img/photo/11.jpg", // 圖片來源
  },
  {
    id:"12",
    title: "追焦(火車)", // 標題
    text:"此作品為攝影課的追焦練習，當時剛好在火車站而火車也剛從停駛狀態下啟動，因此我將相機拿起來拍攝跟焦的畫面，因為火車剛提速因此跟焦的照片還蠻成功的。",
    imgsrc: "img/photo/12.jpg", // 圖片來源
  },
  {
    id:"13",
    title: "商業大樓", // 標題
    text:"此作品為縮時攝影中所拍攝的其中一張照片，因為當時在「國家歌劇院」附近尋找可拍攝地點，誤打誤撞看到這幾棟商業大樓，因為當時的天空以及雲狀態很好，因而架設相機拍攝的照片。",
    imgsrc: "img/photo/13.jpg", // 圖片來源
  },
  {
    id:"14",
    title: "臺中國家歌劇院", // 標題
    text:"此作品為縮時攝影中所拍攝的其中一張照片，當時在準備拍攝縮時攝影時，此地點就是最先選擇的取景位置，因為當時剛好規劃了順便參觀，並且當天的天氣以及光線也非常好，所以選此為縮時攝影的第一個片段。",
    imgsrc: "img/photo/14.jpg", // 圖片來源
  },
  {
    id:"15",
    title: "日曜天地(車軌)", // 標題
    text:"此作品為縮時攝影中所拍攝的其中一張照片，當時在規劃取景時，因為是縮時攝影，因此直接聯想到「車軌」，也因為想要拍攝「車軌」還因此去學習了該如何調整相機的參數，以達到我想要的效果。",
    imgsrc: "img/photo/15.jpg", // 圖片來源
  },

])*/
  /*designDB.insert([
    {
    id:"1",
    title: "散景", // 標題
    text:"此作品為攝影課的散景練習，我在此作品中利用了兩面鏡子，並將相機以定時拍照的方式拍攝，目的是想利用散景的方式呈現鏡子中只有相機一個物品。",
    imgsrc: "img/photo/1.jpg", // 圖片來源
    },
    {
      id:"1",
      title: "散景", // 標題
      text:"此作品為攝影課的散景練習，我在此作品中利用了兩面鏡子，並將相機以定時拍照的方式拍攝，目的是想利用散景的方式呈現鏡子中只有相機一個物品。",
      imgsrc: "img/photo/1.jpg", // 圖片來源
      },
  ])*/
  workDB.insert([
    {
    id:"1",
    title: "資訊科技", // 標題
    text:"此作品為資訊課程中以簡單介紹路由器為何而做的影片，當時製作時沒有甚麼概念，因為不知道怎麼將複雜的東西講解，而且還要以簡單的方式描述，所以當時查了許多的影片以及文獻，而這部影片也是我在高中，首次運用這樣的剪輯方式製作出來的影片。",
    imgsrc: "img/work/1.png", // 圖片來源
    },
    {
      id:"2",
      title: "偶動畫", // 標題
      text:"此作品為基礎設計課程中利用相機，將拍出來的照片剪輯成影片，當時了解到製作偶動畫其實跟拍攝縮時攝影差不多，都是以多張的照片一幀一幀的拼起來，並剪輯成影片，在這課程中因為我們的玩偶決定以羊毛氈製作，所以我還學習了羊毛氈的製作方式。",
      imgsrc: "img/work/2.jpg", // 圖片來源
      },
    {
      id:"3",
      title: "縮時攝影", // 標題
      text:"此作品為攝影課用相機定時拍出的照片剪輯成影片，在這課程中我學習到了非常多的東西，例如：取景、參數調整、攝影角度、時間......等，這些因素都會影響到拍出來以及剪輯出來的成品，也因為這次的縮時攝影製作，讓我深深愛上相機攝影。",
      imgsrc: "img/work/3.png", // 圖片來源
      },
  ])

  /*ProfolioDB.insert([
    {
        modal:"card1",
        title: "縮時攝影", // 卡片標題
        text: "攝影課用相機定時拍出的照片剪輯成影片", // 卡片內容文字
        image: "img/work/3.png", // 卡片圖片來源
        link: "https://youtu.be/tG5fRMMoAEE?si=MyI58HiIThFf0VZO", // 按鈕連結
      },
      {
        modal:"card2",
        title: "偶動畫", // 卡片標題
        text: "基礎設計課程利用相機將拍出來的照片剪輯成影片", // 卡片內容文字
        image: "img/work/2.jpg", // 卡片圖片來源
        link: "https://youtu.be/Pc1_UenNoIw?si=n7DuljiJAyBUMFxC", // 按鈕連結
      },
      {
        modal:"card3",
        title: "資訊科技", // 卡片標題
        text: "資訊課程以簡單介紹路由器為何而做的影片", // 卡片內容文字
        image: "img/work/1.png", // 卡片圖片來源
        link: "https://youtu.be/yA3PgbTVw7s?si=z_nnIGXE_6bJK_q0", // 按鈕連結
      },
 ])*/

      
  /*PhotoDB.insert([
        {
          title: "", // 標題
          image: "img/design/1.png", // 圖片來源
        },
        {
          title: "", // 標題
          image: "img/photo/8.jpg", // 圖片來源
        },
        {
          title: "", // 標題
            image: "img/photo/13.jpg", // 圖片來源
        },
    
    
     ])*/

server.get("/services", (req, res)=>{
    //DB find
    var Services=[
        {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
        {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
    ];
    res.send(Services);
});

server.get("/profolio", (req,res)=>{
      //DB
      ProfolioDB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
})

server.get("/photo", (req,res)=>{
  //DB
  PhotoDB.find({}).then(results=>{
    if(results != null){
         res.send(results);
    }else{
        res.send("Error!");
    }
  })
})

//攝影DB

server.get("/photography", (req,res)=>{
  //DB
  photographyDB.find({}).then(results=>{
    if(results != null){
         res.send(results);
    }else{
        res.send("Error!");
    }
  })
})

server.get("/design", (req,res)=>{
  //DB
  designDB.find({}).then(results=>{
    if(results != null){
         res.send(results);
    }else{
        res.send("Error!");
    }
  })
})

server.get("/work", (req,res)=>{
  //DB
  workDB.find({}).then(results=>{
    if(results != null){
         res.send(results);
    }else{
        res.send("Error!");
    }
  })
})

// server.post("/contact_me", (req,res)=>{
//      ContactDB.insert(req.body);
//      res.redirect("/#contact");
// })

server.listen(7414, ()=>{
    console.log("Server is running at port 7414.");
})

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname ,'/rtfantasy.html'));
});
