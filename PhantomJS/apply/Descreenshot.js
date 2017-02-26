var page = require('webpage').create();

// settings.userAgent：指定HTTP请求的userAgent头信息，上面例子是手机浏览器的userAgent。
page.settings.userAgent = 'WebKit/534.46 Mobile/9A405 Safari/7534.48.3';
// settings.viewportSize：指定浏览器窗口的大小，这里是400x600
page.settings.viewportSize = { width: 400, height: 600 };

page.open('http://slashdot.org', function (status) {
	if (status !== 'success') {
    console.log('Unable to load!');
    phantom.exit();
  } else {
      //evaluate()：用来在网页上运行Javascript代码。在这里，我们抓取第一条新闻，然后修改背景颜色，并返回该条新闻的标题
	  var title = page.evaluate(function () {
  	  var posts = document.getElementsByClassName("article");
		  posts[0].style.backgroundColor = "#FFF";
		  return document.title;
	  });

    window.setTimeout(function () {
        // clipRect：用来指定网页截图的大小，这里的截图左上角从网页的(0. 0)坐标开始，宽600像素，高700像素。如果不指定这个值，就表示对整张网页截图。
        // render()：根据clipRect的范围，在当前目录下生成以第一条新闻的名字命名的截图。
        page.clipRect = { top: 0, left: 0, width: 600, height: 700 };
	    page.render(title + "1.png");
	    page.clipRect = { left: 0, top: 600, width: 400, height: 600 };
        page.render(title + '2.png');
	    phantom.exit();
    }, 1000);	  
  }
});