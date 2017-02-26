var webPage = require('webpage');
var page = webPage.create();

page.onResourceRequested = function(requestData, networkRequest) {
  console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
};


//onResourceRequested属性用来指定一个回调函数，当页面请求一个资源时，会触发这个回调函数。
// 它的第一个参数是HTTP请求的元数据对象，第二个参数是发出的网络请求对象

// HTTP请求包括以下字段:
//     id：所请求资源的编号
//     method：使用的HTTP方法
//     url：所请求的资源 URL
//     time：一个包含请求时间的Date对象
//     headers：HTTP头信息数组

// 网络请求对象包含以下方法:
//     abort()：终止当前的网络请求，这会导致调用onResourceError回调函数。
//     changeUrl(newUrl)：改变当前网络请求的URL。
//     setHeader(key, value)：设置HTTP头信息