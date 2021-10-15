import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import bigSur2 from "../img/bigSur2.png";
import "../font/iconfont.css";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊，李银河";

// 设置背景图片
const bgDivEl = document.createElement("div");
bgDivEl.className = "image-bg";

// 设置img元素的src
const imgEl = document.createElement("img");
imgEl.src = bigSur2;

// 打包字体
const iEl = document.createElement("i");
iEl.className = "iconfont icon-ashbin";

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);

console.log(111);
