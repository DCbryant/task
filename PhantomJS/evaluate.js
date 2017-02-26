// evaluate() 会返回一个对象，然而它仅限制于简单的对象并且不能包含方法或闭包。
//evaluate()用于打开网页后，在页面中执行js代码
var page = require('webpage').create();
page.open(url,function(status){
    var title = page.evaluate(function(){
        return document.title;
    });
    console.log('page title is ' + title);
    phantom.exit();
});
