var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = {
  width: 480,
  height: 800
};

//viewportSize属性指定浏览器视口的大小，即网页加载的初始浏览器窗口大小。
// Height字段必须指定