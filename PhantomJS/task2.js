var page = require('webpage').create();
var keyWord = require('system').args[1];
var device = require('system').args[2];
var fs = require('fs');
var url = 'http://www.baidu.com/s?wd=' + keyWord;
var result = {};
var	beginTime = Date.now();

// view了一下别人，也可以将json文件改成js文件，通过models.exports = config;
// 然后在这里调用js文件方法，类似下面
// page.settings.userAgent = option[device].userAgent;
// page.viewportSize = {
//   width: option[device].width,
//   height: option[device].height
// };
// 读取device.json
if(fs.exists('device.json')){
    var file = fs.open('device.json','r');
    content = '';
    config = null;
    while(!file.atEnd()){
        content += file.readLine();
    }
    config = JSON.parse(content);
    for(var i=0;i<4;i++){
        if(device === config[i]){
            device = config[i];
        }
    }
    page.settings.userAgent = device.ua;
    page.viewportSize = {
        width:device.width,
        height:device.height
    };
}

page.open(url, function(s) {
	if (s !== 'success') {
		console.log("open failed!");
        result = {
            code:0,
            msg: "抓取失败"
        };
		console.log(JSON.stringify(result));
		phantom.exit();
	}else if(s === 'success' && s == 'success' && page.loadingProgress >= 100){
        console.log('open successed');
        console.log('正在抓取');
        page.includeJs("http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js", function() {
            var dataList = page.evaluate(function() {
                var data = [];
                var $result = $('.result');
                $result.each(function() {
                    var imgs = $(this).find('.c-img')
                    data.push({
                        title: $(this).children('h3').text(),
                        info: $(this).find('.c-abstract').text(),
                        link: $(this).find('h3 a')[0].href,
                        pic: imgs.length > 0 ? imgs[0].src : ''
                    })
                })
                return data;
            })
            result = {
                code: 1,
                msg: '抓起成功',
                word: keyWord,
                time: Date.now() - beginTime,
                device: device,
                dataList: dataList
            }
            phantom.outputEncoding = 'gb2312';
            console.log(JSON.stringify(result));
            phantom.exit();
        })
    }
})