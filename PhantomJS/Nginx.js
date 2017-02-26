// # 定义一个Nginx的upstream为spider_server
// upstream spider_server {
//   server localhost:3000;
// }

// # 指定一个范围，默认 / 表示全部请求
// location / {
//   proxy_set_header  Host            $host:$proxy_port;
//   proxy_set_header  X-Real-IP       $remote_addr;
//   proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;

//   # 当UA里面含有Baiduspider的时候，流量Nginx以反向代理的形式，将流量传递给spider_server
//   if ($http_user_agent ~* "Baiduspider") {
//     proxy_pass  http://spider_server;
//   }
// }