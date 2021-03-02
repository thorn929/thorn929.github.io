(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{258:function(v,_,a){"use strict";a.r(_);var e=a(28),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"基础面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础面试题"}},[v._v("#")]),v._v(" 基础面试题")]),v._v(" "),a("h2",{attrs:{id:"_1、下列请求算跨域吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、下列请求算跨域吗"}},[v._v("#")]),v._v(" 1、下列请求算跨域吗")]),v._v(" "),a("p",[v._v("1、"),a("code",[v._v("xx.com")]),v._v("向"),a("code",[v._v("mp.xx.com")]),v._v("发请求跨域吗？")]),v._v(" "),a("p",[v._v("2、"),a("code",[v._v("mp.xx.com")]),v._v("的服务器能接收到请求吗？是怎样的请求？")]),v._v(" "),a("p",[v._v("跨域，因为域名不同。")]),v._v(" "),a("p",[v._v("服务器端可以接收到请求。")]),v._v(" "),a("p",[a("img",{attrs:{src:"/blog/front-interview-cross-domain.png",alt:"跨域后端获取到的请求"}})]),v._v(" "),a("p",[v._v("跨域请求，后端拿不到 cookie，x-requested-with，新增 referer 字段。")]),v._v(" "),a("p",[v._v("返回的都是 200 OK。")]),v._v(" "),a("h2",{attrs:{id:"_2、请解释-xss-与-csrf-分别是什么？两者有什么联系，如何防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、请解释-xss-与-csrf-分别是什么？两者有什么联系，如何防御"}},[v._v("#")]),v._v(" 2、请解释 XSS 与 CSRF 分别是什么？两者有什么联系，如何防御")]),v._v(" "),a("p",[a("RouterLink",{attrs:{to:"/blog/osi-web-security.html"}},[v._v("参考链接")])],1),v._v(" "),a("h2",{attrs:{id:"关于-javascript-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-javascript-bridge"}},[v._v("#")]),v._v(" 关于 Javascript Bridge")]),v._v(" "),a("p",[v._v("1、解释一下什么是 Javascript Bridge。")]),v._v(" "),a("p",[v._v("2、Javascript Bridge 的实现原理。")]),v._v(" "),a("p",[v._v("3、你所了解的 Javascript Bridge 通讯中的优化方案。")]),v._v(" "),a("p",[v._v("JSBridge 是一座用 JavaScript 搭建起来的桥，一端是 web，一端是 native。我们搭建这座桥的目的也很简单，让 native 可以调用 web 的 js 代码，让 web 可以 “调用” 原生的代码。请注意这个“调用”是加了引号的，它并不是直接调用，而是可以根据 web 和 native 约定好的规则来通知 native 要做什么，native 可以根据通知来执行相应的代码。")]),v._v(" "),a("p",[a("img",{attrs:{src:"interview-jsbridge.png",alt:"jsbridge原理"}})]),v._v(" "),a("h2",{attrs:{id:"_3、tcp-udp-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、tcp-udp-是什么"}},[v._v("#")]),v._v(" 3、TCP/UDP 是什么")]),v._v(" "),a("h3",{attrs:{id:"tcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[v._v("#")]),v._v(" TCP")]),v._v(" "),a("p",[v._v("优点：可靠 稳定")]),v._v(" "),a("p",[v._v("TCP 的可靠体现在 TCP 在传输数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制。在数据传完之后，还会断开来连接用来节约系统资源。")]),v._v(" "),a("p",[v._v("缺点：慢，效率低，占用系统资源高。")]),v._v(" "),a("p",[v._v("在传递数据之前要先建立连接，这会消耗时间，而且在数据传递时，确认机制、重传机制、拥塞机制等都会消耗大量时间，而且要在每台设备上维护所有的传输连接，每个连接都会占用系统的 CPU，内存等硬件资源。")]),v._v(" "),a("h3",{attrs:{id:"udp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[v._v("#")]),v._v(" UDP")]),v._v(" "),a("p",[v._v("优点：快，支持一对多，多对多传输。")]),v._v(" "),a("p",[v._v("UDP 没有 TCP 拥有的各种机制，是一种无状态的传输协议，并且 UDP 协议也没有任何控制流量的算法，所以传输数据非常快，没有 TCP 的这些校验机制，被攻击利用的机会就少一些，但是也无法避免被攻击。")]),v._v(" "),a("p",[v._v("缺点：不可靠，不稳定。")]),v._v(" "),a("p",[v._v("因为没有 TCP 的这些校验机制，UDP 在传输数据时，如果网络质量不好，就会很容易丢包，造成数据的缺失。")]),v._v(" "),a("p",[v._v("UDP 相比 TCP 简单的多，不需要建立连接，不需要验证数据报文，不需要流量控制，只会把想发的数据报文一股脑的丢给对端。虽然 UDP 并没有 TCP 传输来的准确，但是也能在很多实时性要求高的地方有所作为。")]),v._v(" "),a("h2",{attrs:{id:"_4、如何处理高流量，高并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何处理高流量，高并发"}},[v._v("#")]),v._v(" 4、如何处理高流量，高并发")]),v._v(" "),a("p",[v._v("1、减少请求数（合并 js，css，图片等）。")]),v._v(" "),a("p",[v._v("2、减少资源大小（压缩，删掉无用代码）。")]),v._v(" "),a("p",[v._v("3、静态资源放 CDN。")]),v._v(" "),a("p",[v._v("4、配置强缓存和协商缓存，减少服务器压力。")]),v._v(" "),a("p",[v._v("5、使用压力测试，测试单个服务器的最大 QPS，从而计算出后端多台服务器集群的抗压能力。")]),v._v(" "),a("p",[v._v("6、前端错误日志（监听 window.onerror 等）。")]),v._v(" "),a("p",[v._v("7、后端错误日志记录（process.on('uncaughtException')等）。")]),v._v(" "),a("p",[v._v("8、nginx 负载均衡。")]),v._v(" "),a("p",[v._v("9、后端守护进程（pm2），心跳检测。")]),v._v(" "),a("p",[v._v("10、Varnish，Stupid 后端缓存。")]),v._v(" "),a("p",[v._v("11、数据库读写分离。")]),v._v(" "),a("p",[v._v("12、加机器。。")]),v._v(" "),a("h2",{attrs:{id:"_5、反爬虫方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、反爬虫方案"}},[v._v("#")]),v._v(" 5、反爬虫方案")]),v._v(" "),a("p",[v._v("1、通过 userAgent 来控制访问（可以被伪造）。")]),v._v(" "),a("p",[v._v("2、通过 ip 限制来反爬虫。（如果一个固定的 ip 在短暂的时间内，快速大量的访问一个网站，那自然会引起注意，管理员可以通过一些手段把这个 ip 给封了）。")]),v._v(" "),a("p",[v._v("3、通过 js 脚本来防止爬虫。（如验证码，滑动解锁等）。")]),v._v(" "),a("p",[v._v("4、通过 robots.txt 来限制爬虫。（君子协议）。")]),v._v(" "),a("h2",{attrs:{id:"_6、什么是-bom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、什么是-bom"}},[v._v("#")]),v._v(" 6、什么是 BOM")]),v._v(" "),a("p",[v._v("BOM（Browser Object Model）即浏览器对象模型。\nBOM 提供了独立于内容 而与浏览器窗口进行交互的对象；\n由于 BOM 主要用于管理窗口与窗口之间的通讯，因此其核心对象是 window；\nBOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性；\nBOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C。")]),v._v(" "),a("p",[v._v("常用对象：location，navigation，history，screen，frames。")]),v._v(" "),a("p",[a("img",{attrs:{src:"interview-bom.jpg",alt:"bom模型图"}})]),v._v(" "),a("h2",{attrs:{id:"_7、http-常用的请求方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、http-常用的请求方式"}},[v._v("#")]),v._v(" 7、HTTP 常用的请求方式")]),v._v(" "),a("p",[v._v("HTTP 请求方法并不是只有 GET 和 POST，只是最常用的。据 RFC2616 标准（现行的 HTTP/1.1）得知，通常有以下 8 种方法：OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE 和 CONNECT。")]),v._v(" "),a("ul",[a("li",[v._v("GET 获取资源。")]),v._v(" "),a("li",[v._v("POST 传输实体的主体。")]),v._v(" "),a("li",[v._v("PUT 传输文件。")]),v._v(" "),a("li",[v._v("HEAD 获得报文首部（类似 get，不返回报文实体）。")]),v._v(" "),a("li",[v._v("DELETE 删除文件。")]),v._v(" "),a("li",[v._v("OPTIONS 询问支持的方法。")]),v._v(" "),a("li",[v._v("TRACE 追踪路径（让服务器将之前的请求通信返回给客户端）。")]),v._v(" "),a("li",[v._v("CONNECT 要求用隧道协议连接代理（主要使用 SSL）。")])]),v._v(" "),a("h3",{attrs:{id:"_8、options-请求方法的主要用途有两个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、options-请求方法的主要用途有两个"}},[v._v("#")]),v._v(" 8、OPTIONS 请求方法的主要用途有两个")]),v._v(" "),a("p",[v._v("1、获取服务器支持的 HTTP 请求方法。")]),v._v(" "),a("p",[v._v("2、用来检查服务器的性能。例如：AJAX 进行跨域请求时的预检，需要向另外一个域名的资源发送一个 HTTP OPTIONS 请求头，用以判断实际发送的请求是否安全。")]),v._v(" "),a("h2",{attrs:{id:"_9、常用的跨域解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、常用的跨域解决方案"}},[v._v("#")]),v._v(" 9、常用的跨域解决方案")]),v._v(" "),a("ul",[a("li",[v._v("PostMessage （HTML5 协议：跨窗口通信，不论这两个窗口是否同源）")]),v._v(" "),a("li",[v._v("JSONP （浏览器 hack 方式）")]),v._v(" "),a("li",[v._v("WebSocket (传输层直连，没有同源策略)")]),v._v(" "),a("li",[v._v("CORS （终极解决方案，服务器端允许跨域）")]),v._v(" "),a("li",[v._v("设置 document.domain 让多个二级域名跨域")])]),v._v(" "),a("h2",{attrs:{id:"_10、http-中和缓存相关的-header-有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、http-中和缓存相关的-header-有哪些"}},[v._v("#")]),v._v(" 10、HTTP 中和缓存相关的 Header 有哪些")]),v._v(" "),a("ul",[a("li",[v._v("Expires：过期时间，一个具体的时间。")]),v._v(" "),a("li",[v._v("Cache-Control：相比 Expires，有更多的控制，可以控制多久后过期。")]),v._v(" "),a("li",[v._v("ETag/If-None-Match：通过资源标识符，判断资源是否改变。")]),v._v(" "),a("li",[v._v("Last-Modified/If-Modified-Since：通过发送上一次请求的时间，判断在这期间内资源是否改变。")])]),v._v(" "),a("h2",{attrs:{id:"_11、mvc-和-mvvm-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11、mvc-和-mvvm-的区别"}},[v._v("#")]),v._v(" 11、MVC 和 MVVM 的区别")]),v._v(" "),a("p",[v._v("我们可以这样理解：将 "),a("code",[v._v("HTML")]),v._v(" 看成 "),a("code",[v._v("View")]),v._v(" 层，js 看成 "),a("code",[v._v("controller")]),v._v(" 层，将 "),a("code",[v._v("ajax")]),v._v(" 当做 "),a("code",[v._v("Model")]),v._v(" 层。")]),v._v(" "),a("p",[v._v("MVC："),a("code",[v._v("View")]),v._v(" -> 触发事件 -> "),a("code",[v._v("controller")]),v._v(" 处理事件 -> 操作 "),a("code",[v._v("Model")]),v._v(" -> 重新渲染 "),a("code",[v._v("View")]),v._v("。")]),v._v(" "),a("p",[v._v("MVVM：")]),v._v(" "),a("p",[a("code",[v._v("View")]),v._v(" -> 触发事件 -> "),a("code",[v._v("ViewModel")]),v._v(" 双向绑定 -> 改变 "),a("code",[v._v("Model")]),v._v("。")]),v._v(" "),a("p",[a("code",[v._v("Model")]),v._v(" -> 改变数据 -> "),a("code",[v._v("ViewModel")]),v._v(" 双向绑定 -> 改变 "),a("code",[v._v("View")]),v._v("。")]),v._v(" "),a("h2",{attrs:{id:"_12、请说出你所知道的前端缓存方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12、请说出你所知道的前端缓存方案"}},[v._v("#")]),v._v(" 12、请说出你所知道的前端缓存方案")]),v._v(" "),a("p",[v._v("1、h5 端可以通过 localStorage，SessionStorage，WebSQL，IndexedDB 等 API 存储数据，也可以使用封装好的 ORM 库 localForage 库，来方便操作 IndexedDB，WebSQL 等。")]),v._v(" "),a("p",[v._v("2、使用 Manifest 离线缓存（注意版本管理）。")]),v._v(" "),a("p",[v._v("3、使用 PWA，Service Worker 离线缓存（要求 HTTPS 环境， HTML5 fetch API）。")]),v._v(" "),a("h2",{attrs:{id:"_13、pwa-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13、pwa-是什么"}},[v._v("#")]),v._v(" 13、PWA 是什么")]),v._v(" "),a("p",[v._v("PWA 主要是为了解决传统 web 的一下几个缺点：")]),v._v(" "),a("ul",[a("li",[v._v("传统的 web 应用，数据在 pc 上是没有缓存的，每一次打开页面的时候都会去请求数据。")]),v._v(" "),a("li",[v._v("传统的 web 应用，没有像 app 一样的小图标放在桌面，一点开就进入了应用，而是通过打开浏览器输入网址，")]),v._v(" "),a("li",[v._v("传统的 web 应用，不能像 app 一样给用户推送消息，像微博会跟你推送说有谁评论了你的微博之类的功能。")])]),v._v(" "),a("p",[v._v("具体操作步骤：")]),v._v(" "),a("ul",[a("li",[v._v("添加 manifest.json 文件。")]),v._v(" "),a("li",[v._v("添加 Service Worker。\n"),a("ul",[a("li",[v._v("使用 cacheStorage 管理缓存。")]),v._v(" "),a("li",[v._v("使用 Web Push 推送消息。")])])])]),v._v(" "),a("h2",{attrs:{id:"_14、浏览器缓存可以分成-service-worker、memory-cache、disk-cache-和-push-cache，那请求的时候-from-memory-cache-和-from-disk-cache-的依据是什么，哪些数据什么时候存放在-memory-cache-和-disk-cache-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14、浏览器缓存可以分成-service-worker、memory-cache、disk-cache-和-push-cache，那请求的时候-from-memory-cache-和-from-disk-cache-的依据是什么，哪些数据什么时候存放在-memory-cache-和-disk-cache-中"}},[v._v("#")]),v._v(" 14、浏览器缓存可以分成 Service Worker、Memory Cache、Disk Cache 和 Push Cache，那请求的时候 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache 中")]),v._v(" "),a("p",[v._v("从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络。")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("Service Worker")])]),v._v(" "),a("li",[a("p",[v._v("Memory Cache")])]),v._v(" "),a("li",[a("p",[v._v("Disk Cache")])]),v._v(" "),a("li",[a("p",[v._v("Push Cache")]),v._v(" "),a("p",[v._v("1.Service Worker")])])]),v._v(" "),a("p",[v._v("Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker 的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("自由控制缓存文件")])]),v._v(" "),a("li",[a("p",[v._v("可持续性缓存")]),v._v(" "),a("p",[v._v("2.Memory Cache")])])]),v._v(" "),a("p",[v._v("Memory Cache 也就是内存中的缓存，主要包含的是当前中页面中已经抓取到的资源,例如页面上已经下载的样式、脚本、图片等。读取内存中的数据肯定比磁盘快,内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。 一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。")]),v._v(" "),a("ul",[a("li",[v._v("容量小")]),v._v(" "),a("li",[v._v("读取快")]),v._v(" "),a("li",[v._v("缓存时间短")])]),v._v(" "),a("p",[v._v("这是不可能的。计算机中的内存一定比硬盘容量小得多，操作系统需要精打细算内存的使用，所以能让我们使用的内存必然不多。\n当我们访问过页面以后，再次刷新页面，可以发现很多数据都来自于内存缓存。")]),v._v(" "),a("p",[v._v("3.Disk Cache")]),v._v(" "),a("p",[v._v("Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。\n在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。")]),v._v(" "),a("ul",[a("li",[v._v("读取慢")]),v._v(" "),a("li",[v._v("容量大")]),v._v(" "),a("li",[v._v("缓存时间长")])]),v._v(" "),a("p",[v._v("浏览器会把哪些文件丢进内存中？哪些丢进硬盘中？")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("对于大文件来说，大概率是不存储在内存中的，反之优先。")])]),v._v(" "),a("li",[a("p",[v._v("当前系统内存使用率高的话，文件优先存储进硬盘。")]),v._v(" "),a("p",[v._v("4.Push Cache")])])]),v._v(" "),a("p",[v._v("Push Cache（推送缓存）是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在 Chrome 浏览器中只有 5 分钟左右，同时它也并非严格执行 HTTP 头中的缓存指令。\nPush Cache 在国内能够查到的资料很少，也是因为 HTTP/2 在国内不够普及。")]),v._v(" "),a("ul",[a("li",[v._v("只在会话中存在")]),v._v(" "),a("li",[v._v("会话结束后就被释放")]),v._v(" "),a("li",[v._v("缓存时间短")])]),v._v(" "),a("h2",{attrs:{id:"_15、为什么-dom-很慢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15、为什么-dom-很慢"}},[v._v("#")]),v._v(" 15、为什么 DOM 很慢")]),v._v(" "),a("p",[v._v("因为 DOM 是属于渲染引擎中的东西，而 JS 又是 JS 引擎中的东西。当我们通过 JS 操作 DOM 的时候，其实这个操作涉及到了两个线程之间的通信，那么势必会带来一些性能上的损耗。操作 DOM 次数一多，也就等同于一直在进行线程之间的通信，并且操作 DOM 可能还会带来重绘重排的情况，所以也就导致了性能上的问题。")]),v._v(" "),a("h2",{attrs:{id:"_16、如果不使用四则运算，怎么计算出两个数的和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16、如果不使用四则运算，怎么计算出两个数的和"}},[v._v("#")]),v._v(" 16、如果不使用四则运算，怎么计算出两个数的和")]),v._v(" "),a("p",[v._v("这道题中可以按位异或，因为按位异或就是不进位加法，8 ^ 8 = 0 如果进位了，就是 16 了，所以我们只需要将两个数进行异或操作，然后进位。那么也就是说两个二进制都是 1 的位置，左边应该有一个进位 1，所以可以得出以下公式 a + b = (a ^ b) + ((a & b) << 1) ，然后通过迭代的方式模拟加法。")]),v._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("function")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[v._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[v._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("if")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("==")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("return")]),v._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("if")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("==")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("return")]),v._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("let")]),v._v(" newA "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("^")]),v._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("let")]),v._v(" newB "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("&")]),v._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<<")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("return")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[v._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("newA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" newB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br"),a("span",{staticClass:"line-number"},[v._v("4")]),a("br"),a("span",{staticClass:"line-number"},[v._v("5")]),a("br"),a("span",{staticClass:"line-number"},[v._v("6")]),a("br"),a("span",{staticClass:"line-number"},[v._v("7")]),a("br")])]),a("h2",{attrs:{id:"_17、输入一个网址后发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17、输入一个网址后发生了什么"}},[v._v("#")]),v._v(" 17、输入一个网址后发生了什么")]),v._v(" "),a("ul",[a("li",[v._v("输入网址并回车。")]),v._v(" "),a("li",[v._v("解析域名获得服务器 IP。")]),v._v(" "),a("li",[v._v("根据 IP 建立 TCP 管道。")]),v._v(" "),a("li",[v._v("浏览器连接 TCP 管道并发送 HTTP 请求。")]),v._v(" "),a("li",[v._v("服务器接收并处理请求。")]),v._v(" "),a("li",[v._v("服务器通过 TCP 管道传输 HTML 响应。")]),v._v(" "),a("li",[v._v("浏览器处理 HTML 响应，并渲染页面。")]),v._v(" "),a("li",[v._v("如果 HTML 内包含图片，CSS，JS 等其他资源，会继续请求其他资源。")])]),v._v(" "),a("p",[v._v("详细内容可以参考："),a("a",{attrs:{href:"https://github.com/skyline75489/what-happens-when-zh_CN",target:"_blank",rel:"noopener noreferrer"}},[v._v("当你在浏览器中输入 google.com 并且按下回车之后发生了什么？"),a("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=t.exports}}]);