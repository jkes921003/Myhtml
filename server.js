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

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

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
