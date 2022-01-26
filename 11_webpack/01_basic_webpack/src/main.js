import { sum } from "./js/math.js"; // ES Module
const { priceFormat } = require("./js/format"); // commonJs的导入

console.log(sum(20, 30));
console.log(priceFormat());
