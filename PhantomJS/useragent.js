// 读取 id  为myagent的元素的  textContent  属性

//PhantomJS适合支持各种 页面自动化任务 

var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';

page.open('https://www.baidu.com/',function(status){
    if(status !== 'success'){
        console.log('Unable to access network');
    }else{
        var ua = page.evaluate(function(){
            return document.getElementById('content_right').textContent;
        })
        console.log(ua);
    }
    phantom.exit();
});