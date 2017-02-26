page.onResourceRequested = function(requestData, request) {
  if ((/http:\/\/.+?\.css$/gi).test(requestData['url'])) {
    console.log('Skipping', requestData['url']);
    request.abort();
  }   
};

// 、、上面代码一旦发现加载的资源是CSS文件，就会使用request.abort方法中断连接