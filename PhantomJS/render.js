var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = { width: 1920, height: 1080 };
page.open("http://www.google.com", function start(status) {
  page.render('google_home.jpeg', {format: 'jpeg', quality: '100'});
  phantom.exit();
});

// ender方法用于将网页保存成图片，参数就是指定的文件名。该方法根据后缀名，
// 将网页保存成不同的格式，目前支持PNG、GIF、JPEG和PDF
//该方法还可以接受一个配置对象，format字段用于指定图片格式，quality字段用于指定图片质量，最小为0，最大为100。