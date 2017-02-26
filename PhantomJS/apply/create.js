var page = require('webpage').create();
page.viewportSize = { width: 400, height : 400 };
page.content = '<html><body><canvas id="surface"></canvas></body></html>';
phantom.exit();

// phantomjs可以生成网页，使用content方法指定网页的HTML代码。

