import _ from "lodash";
import { sum } from "./js/math";

import "./css/style.css";
import "./css/title.less";

console.log("Hello World");
console.log(sum(1, 2));

console.log(_.join(["abc", "cba"], "-"));
console.log(111);

const titleEl = document.createElement("div");
titleEl.className = "title";
titleEl.innerHTML = "Hello vite";
document.body.append(titleEl);
