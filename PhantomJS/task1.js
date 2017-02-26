var page = require('webpage').create();
var keyWord = require('system').args[1];
var url = 'http://www.baidu.com/s?wd=' + keyWord;
var result = {};
var	beginTime = Date.now();

page.open(url, function(s) {
	if (s !== 'success') {
		console.log("open failed!");
		result.code = 0;
		result.msg = '抓取失败!';
		console.log(JSON.stringify(result));
		phantom.exit();
	}else if(s === 'success' && s == 'success' && page.loadingProgress >= 100){
        console.log('open successed');
        console.log('正在抓取');
        page.includeJs("http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js", function() {
            var dataList = page.evaluate(function() {
                var data = []
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
            var data = {
                code: 1,
                msg: '抓起成功',
                word: keyWord,
                time: Date.now() - beginTime,
                dataList: dataList
            }
            phantom.outputEncoding = 'gb2312';
            console.log(JSON.stringify(data));
            phantom.exit();
        })
    }
})