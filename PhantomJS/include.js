var page = require('webpage').create();
page.open('http://www.sample.com', function() {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        page.evaluate(function() {
            $("button").click();
        });
        phantom.exit()
    });
});

//includeJs方法用于页面加载外部脚本，加载结束后就调用指定的回调函数

//上面的例子在页面中注入jQuery脚本，然后点击所有的按钮。
// 需要注意的是，由于是异步加载，所以phantom.exit()语句要放在page.includeJs()方法的回调函数之中，否则页面会过早退出。