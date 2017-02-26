// 重写网页控制台信息
//网页内部的console语句，以及evaluate方法内部的console语句，
// 默认不会显示在命令行。这时可以采用onConsoleMessage回调函数
var page = require('webpage').create();
page.onconsoleMessage = function(msg){
    console.log('page title is ' + msg);
};

page.open(url,function(status){
    page.evaluate(function(){
        console.log(document.title);
    });
    phantom.exit();
});


//evaluate方法内部有console语句，默认不会输出在命令行
//这时，可以用onConsoleMessage方法监听这个事件，进行处理