var webPage = require('webpage');
var page = webPage.create();

page.zoomFactor = 0.25;
page.render('capture.png');

// zoomFactor属性用来指定渲染时（render方法和renderBase64方法）页面的放大系数，默认是1（即100%）