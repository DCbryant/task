var webPage = require('webpage');
var page = webPage.create();

page.onResourceReceived = function(response) {
  console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ' + JSON.stringify(response));
};

// onResourceReceived属性用于指定一个回调函数，当网页收到所请求的资源时，就会执行该回调函数

// 它的参数就是服务器发来的HTTP回应的元数据对象，包括以下字段:
//     id：所请求的资源编号
//     url：所请求的资源的URL r- time：包含HTTP回应时间的Date对象
//     headers：HTTP头信息数组
//     bodySize：解压缩后的收到的内容大小
//     contentType：接到的内容种类
//     redirectURL：重定向URL（如果有的话）
//     stage：对于多数据块的HTTP回应，头一个数据块为start，最后一个数据块为end。
//     status：HTTP状态码，成功时为200。
//     statusText：HTTP状态信息，比如OK。