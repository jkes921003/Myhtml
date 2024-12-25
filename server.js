//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");

//web root
server.use(express.static(__dirname));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

var fileUpload = require("express-fileupload");
server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));


var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname+"/profolio.db");
var ContactDB = DB.create(__dirname+"/contact.db");
const PhotoDB =DB.create(__dirname+"/photo.db");
 

 /*ProfolioDB.insert([
    {
        modal:"card1",
        title: "縮時攝影", // 卡片標題
        text: "Some example text. John Doe is an architect and engineer.", // 卡片內容文字
        image: "img/work/3.png", // 卡片圖片來源
        link: "photo.html", // 按鈕連結
      },
      {
        modal:"card2",
        title: "偶動畫", // 卡片標題
        text: "Explore the fascinating world of stop-motion animation.", // 卡片內容文字
        image: "img/work/2.jpg", // 卡片圖片來源
        link: "design.html", // 按鈕連結
      },
      {
        modal:"card3",
        title: "資訊科技", // 卡片標題
        text: "Learn about raster animation techniques and creativity.", // 卡片內容文字
        image: "img/work/1.png", // 卡片圖片來源
        link: "work.html", // 按鈕連結
      },
      {
        modal:"card3",
        title: "資訊科技", // 卡片標題
        text: "Learn about raster animation techniques and creativity.", // 卡片內容文字
        image: "img/work/1.png", // 卡片圖片來源
        link: "work.html", // 按鈕連結
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

server.post("/contact_me", (req,res)=>{
     ContactDB.insert(req.body);
     res.redirect("/#contact");
})

server.listen(7414, ()=>{
    console.log("Server is running at port 7414.");
})
