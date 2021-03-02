(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{259:function(t,a,s){"use strict";s.r(a);var v=s(28),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《http2-基础教程》读书笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《http2-基础教程》读书笔记"}},[t._v("#")]),t._v(" 《HTTP2 基础教程》读书笔记")]),t._v(" "),s("p",[t._v("最近读完《HTTP2 基础教程》，书中的知识点很精简，我们一起来回顾一下吧！")]),t._v(" "),s("h2",{attrs:{id:"http-发展史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-发展史"}},[t._v("#")]),t._v(" HTTP 发展史")]),t._v(" "),s("p",[t._v("互联网刚开始的时候，人们浏览网页只是为了阅读文字，随着时代的不断发展，人们对于网站的需求越来越高，一个网站不仅仅要展示文字，还要展示图片，视频，3D 特效等。")]),t._v(" "),s("p",[t._v("1、Web 页面引用的内容每年都在增长，图片，JS，CSS 越来越大，也越来越多。")]),t._v(" "),s("p",[t._v("2、Web 所依赖的资源也变得越来越复杂。")]),t._v(" "),s("p",[t._v("3、大多数 Web 页面会关联数十个域名的资源，每一个资源都需要经历一次 DNS，TCP，TLS 等。")]),t._v(" "),s("h3",{attrs:{id:"http1-1-阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-1-阶段"}},[t._v("#")]),t._v(" HTTP1.1 阶段")]),t._v(" "),s("p",[t._v("人们对网站的需求越来越多，但是 HTTP 协议却发展很慢，HTTP1.1 已经存在 20 年了，却还是当前社会中使用最广泛的协议。以下几个缺点也越来越被大家所关注：")]),t._v(" "),s("p",[t._v("1、队头阻塞，在请求响应中如果出现任何问题，剩下的工作都会被阻塞在那次请求应答之后。")]),t._v(" "),s("p",[t._v("2、低效的 TCP 利用")]),t._v(" "),s("p",[t._v("拥塞窗口：在接收方确认数据包之前，发送方可以发出的 TCP 包的数量。（例如：如果拥塞窗口为 1，那么发送方发出 1 个数据包之后，只有接收方确认了那个包，才能发送下一个）。")]),t._v(" "),s("p",[t._v("TCP 中有个概念叫慢启动，目的是为了让新连接搞清楚当前的网络状况，避免给已经拥堵的网络继续添乱。（它允许客户端在收到每个确认回复后额外发送 1 个未确认包，这意味着新连接在收到 1 个确认回复后，可以发送 2 个数据包，在收到 2 个确认回复后，可以发 4 个，以此类推，直到达到上限值）")]),t._v(" "),s("p",[t._v("3、臃肿的消息首部")]),t._v(" "),s("p",[t._v("虽然 HTTP1 提供了"),s("code",[t._v("压缩请求内容")]),t._v("的机制，但是消息首部却无法压缩，如果算上 cookie，可能每次都会多发送几千个字节。")]),t._v(" "),s("p",[t._v("4、受限制的优先级设置")]),t._v(" "),s("p",[t._v("HTTP1 没有优先级一说，要么发起请求，要么不发起。")]),t._v(" "),s("h2",{attrs:{id:"web-性能调优"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-性能调优"}},[t._v("#")]),t._v(" Web 性能调优")]),t._v(" "),s("p",[t._v("为了解决 HTTP1 的各种问题，大家也总结一下优化方案，我们来依次介绍一下吧。")]),t._v(" "),s("h3",{attrs:{id:"网站运行流程（简化版）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网站运行流程（简化版）"}},[t._v("#")]),t._v(" 网站运行流程（简化版）")]),t._v(" "),s("ol",[s("li",[t._v("输入 URL 并敲回车。")]),t._v(" "),s("li",[t._v("根据域名解析 IP 地址。")]),t._v(" "),s("li",[t._v("建立 TCP 连接管道。")]),t._v(" "),s("li",[t._v("如果是 HTTPS，进行 TLS 握手。")]),t._v(" "),s("li",[t._v("服务器端收到请求。")]),t._v(" "),s("li",[t._v("输出主体 HTML 。")]),t._v(" "),s("li",[t._v("客户端根据 HTML 内的其他资源进行请求。")])]),t._v(" "),s("p",[t._v("如果想在 HTTP 协议层面做优化，可以考虑下几点：")]),t._v(" "),s("ul",[s("li",[t._v("DNS 查询时间")]),t._v(" "),s("li",[t._v("TCP 三次握手时间")]),t._v(" "),s("li",[t._v("TLS 安全协议时间（秘钥协商，对称加密，非对称加密）")])]),t._v(" "),s("h4",{attrs:{id:"dns-查询优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-查询优化"}},[t._v("#")]),t._v(" DNS 查询优化")]),t._v(" "),s("ul",[s("li",[t._v("限制不同域名数量")]),t._v(" "),s("li",[t._v("使用 dns-prefetch，在解析主体 HTML 的同时，就会解析制定域名。")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//www.xxx.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("找一家好的外部供应商")])]),t._v(" "),s("h4",{attrs:{id:"优化-tcp-连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化-tcp-连接"}},[t._v("#")]),t._v(" 优化 TCP 连接")]),t._v(" "),s("ul",[s("li",[t._v("使用 preconnect 指令，让连接在使用之前就已经建立好。")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preconnect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//www.xxx.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("尽早终止响应（借助 CDN，让传输更近）。")])]),t._v(" "),s("h4",{attrs:{id:"避免重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免重定向"}},[t._v("#")]),t._v(" 避免重定向")]),t._v(" "),s("ul",[s("li",[t._v("利用 CDN 云端重定向。")]),t._v(" "),s("li",[t._v("统一域名使用 Web 服务器上的 rewrite 规则，避免重定向。")])]),t._v(" "),s("h4",{attrs:{id:"缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[t._v("#")]),t._v(" 缓存策略")]),t._v(" "),s("p",[t._v("我们常常使用缓存来避免不必要的请求，但要使用缓存必须遵守着两个概念："),s("code",[t._v("多用户之间可共享")]),t._v("，"),s("code",[t._v("能够接受一定程度的旧数据")]),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("纯静态不变的内容，可以永久缓存。")]),t._v(" "),s("li",[t._v("CSS/JS 等个性化资源，缓存时间是会话（交付）平均时间的两倍。")])]),t._v(" "),s("h5",{attrs:{id:"强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),s("p",[t._v("使用 Expires 首部，将资源"),s("code",[t._v("失效的日期")]),t._v("告诉客户端，在失效如期之前，客户端都会直接使用缓存中的资源而"),s("code",[t._v("不会发起请求")]),t._v("。")]),t._v(" "),s("p",[t._v("使用 Cache-Control 首部，进行更多的定制化缓存：")]),t._v(" "),s("ul",[s("li",[t._v("max-age 表示资源会缓存的具体时间。")]),t._v(" "),s("li",[t._v("no-cache 不使用本地缓存。需要使用缓存协商。")]),t._v(" "),s("li",[t._v("no-store 直接禁止游览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。")]),t._v(" "),s("li",[t._v("public 可以被所有的用户缓存，包括终端用户和 CDN 等中间代理服务器。")]),t._v(" "),s("li",[t._v("private 只能被终端用户的浏览器缓存，不允许 CDN 等中继缓存服务器对其缓存。")])]),t._v(" "),s("h5",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),s("p",[t._v("在请求中包含 HTTP 首部 Last Modified，仅当最新内容在首部中制定的日志之后被更新过，服务器才返回完整内容，否则返回 304.")]),t._v(" "),s("p",[t._v("在请求实体中包含实体校验码 ETag，它唯一标识所请求的资源，服务器会比较当前 ETag 与请求首部中收到 ETag，如果一致，就返回 304.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Last Modified 存在的一些弊端")]),t._v(" "),s("p",[t._v("如果本地文件内容没有进行修改，而修改时间进行了更新，还是会造成 Last-Modified 被修改，服务端会重新返回相同的资源。")]),t._v(" "),s("p",[t._v("Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源。")])]),t._v(" "),s("h4",{attrs:{id:"压缩和代码简化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩和代码简化"}},[t._v("#")]),t._v(" 压缩和代码简化")]),t._v(" "),s("p",[t._v("删除 html 文档中的注释，换行，空格等，减少资源大小。")]),t._v(" "),s("h4",{attrs:{id:"避免阻塞-css-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免阻塞-css-js"}},[t._v("#")]),t._v(" 避免阻塞 CSS/JS")]),t._v(" "),s("p",[t._v("由于 JS 在处理时，会阻止其他任何资源的下载和渲染，可能会带来不必要的延迟。")]),t._v(" "),s("ul",[s("li",[t._v("CSS 影响页面可视化效果，建议先请求。")]),t._v(" "),s("li",[t._v("JS 则需要正确用好 defer, async。")])]),t._v(" "),s("h4",{attrs:{id:"图片优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片优化"}},[t._v("#")]),t._v(" 图片优化")]),t._v(" "),s("p",[t._v("一张图片中往往并不是只有图片内容，往往还包含有一些图片元信息：地理位置信息，时间戳，尺寸，像素等。而这些信息对于页面并没有声明用，还会增加图片的大小，建议"),s("code",[t._v("删除掉图片元信息")]),t._v("，只保留真正有用的部分。")]),t._v(" "),s("p",[t._v("另外，页面中的图片，尽量不要使用 CSS 去拉伸或者缩放，需要多大的图片，就返回多大的图，避免资源浪费。")]),t._v(" "),s("h2",{attrs:{id:"回归正题-http2-核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回归正题-http2-核心概念"}},[t._v("#")]),t._v(" 回归正题 HTTP2 核心概念")]),t._v(" "),s("p",[t._v("上面介绍了 HTTP 的历史以及现阶段使用最广泛的 HTTP1 ，接下来我们来介绍一下 HTTP2 ，看一看 HTTP2 是怎么解决 HTTP1 所遗留的问题？")]),t._v(" "),s("p",[t._v("首先，要搭建 HTTP2 服务，必须配套使用 HTTPS 安全策略，才能得到浏览器的支持。"),s("code",[t._v("HTTP2 其实并没有要求必须使用 HTTPS，只是人们正好认识到 HTTPS 的重要性，而 HTTP2 正好出来，就不谋而合的结合在一起了")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"http2-分层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http2-分层"}},[t._v("#")]),t._v(" HTTP2 分层")]),t._v(" "),s("ul",[s("li",[t._v("分帧层，即 HTTP2 多路复用能力的核心部分。")]),t._v(" "),s("li",[t._v("数据或 HTTP 层，其中包含传统上被认为是 HTTP 及其相关数据的部分。")])]),t._v(" "),s("p",[t._v("分帧会来来如下好处：")]),t._v(" "),s("p",[t._v("1、二进制协议：HTTP2 的分帧层是基于帧的二进制协议，方便机器解析。")]),t._v(" "),s("p",[t._v("2、首部压缩：仅仅使用二进制协议还不够，HTTP2 的首部还会被深度压缩。")]),t._v(" "),s("p",[t._v("3、多路复用：当你在使用 HTTP2 传输链接的时候，不必等待上一个请求结束后才进行下一个请求，请求和响应可以交织在一起。")]),t._v(" "),s("h3",{attrs:{id:"帧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#帧"}},[t._v("#")]),t._v(" 帧")]),t._v(" "),s("p",[t._v("HTTP2 是基于帧的协议，为了将重要的信息都封装起来，让协议的解析方可以轻松的阅读、解析并还原信息。相比之下，HTTP1 并不是基于帧的，而是以文本来分隔，服务器只能根据文本换行符来拆分请求数据。")]),t._v(" "),s("p",[t._v("使用 HTTP1 可能会产生以下问题：")]),t._v(" "),s("ul",[s("li",[t._v("换行符对于每个平台可能有兼容性问题，例如有些平台采用"),s("code",[t._v("<crlf>")]),t._v("，有些平台采用"),s("code",[t._v("<lf>")])]),t._v(" "),s("li",[t._v("一次只能处理一个请求或响应，完成之前不能停止解析。")]),t._v(" "),s("li",[t._v("无法预判解析需要多少内存，如果一行的信息量太大，超出了内存，会返回 400 错误")])]),t._v(" "),s("p",[t._v("帧有着严格的结构格式，有了帧，处理协议的程序就能预先知道会受到什么，从而采取对应的解析方法。可以把帧理解为一个对象：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'帧负载的长度'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'类型'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Flags"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'帧的标识'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'保留位'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Stream Identifer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'每个流唯一ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Frame Payload"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'真实的帧内容'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("这样以来，实现和维护都会简单很多，不用等到一个请求完成以后才进行下一次请求，请求和响应可以交错甚至可多路复用。")]),t._v(" "),s("h3",{attrs:{id:"流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流"}},[t._v("#")]),t._v(" 流")]),t._v(" "),s("p",[t._v("流是 HTTP2 链接上独立的，双向的帧序列交换。可以将流看作在连接上的一些列帧，他们构成了单独的 HTTP 请求和响应。")]),t._v(" "),s("p",[t._v("1、消息：泛指 HTTP 中一个请求或一个响应。")]),t._v(" "),s("p",[t._v("2、流量控制：当一段接收并消费被发送的数据时，它将发出一个 WINDOW_UPDATE 帧，用来表示其更新后的处理字节的能力。")]),t._v(" "),s("p",[t._v("确保一个流不会影响到其他的流。")]),t._v(" "),s("p",[t._v("3、优先级")]),t._v(" "),s("p",[t._v("首先请求网页上最重要的元素，以最优的顺序获取资源，由此来优化页面性能。")]),t._v(" "),s("ul",[s("li",[t._v("通过 HEADERS 帧可以指明某些对象和其他对象的依赖关系。")]),t._v(" "),s("li",[t._v("通过 PRIORITY 帧，可以告诉服务器如何确定具有共同依赖关系的对象的优先级。")])]),t._v(" "),s("h3",{attrs:{id:"服务器推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送"}},[t._v("#")]),t._v(" 服务器推送")]),t._v(" "),s("p",[t._v("提升单个资源性能的最佳方式，就是在它被用到之前就放到了浏览器的缓存里，服务器端可以主动将资源发给客户端，这可能是因为它知道客户端不久后将会用到该资源。")]),t._v(" "),s("p",[t._v("如果服务器决定推送一个对象，会通过 PUSH_PROMISE 帧去传递将会被推送的资源。")]),t._v(" "),s("h3",{attrs:{id:"首部压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首部压缩"}},[t._v("#")]),t._v(" 首部压缩")]),t._v(" "),s("p",[t._v("之前说到，HTTP1 中没有对首部进行压缩，这会在每次请求中发送大量的冗余首部，而 HTTP2 则解决了这个问题。HTTP2 没有使用 gzip 压缩，而是使用 HPACK，因为 GZIP 压缩有泄漏加密信息的风险，简称 CRIME。")]),t._v(" "),s("p",[t._v("CRIME 原理：攻击者在请求中添加数据，观察压缩加密后的数据量，如果变小了，就证明注入的数据和请求中的其他内容有重复，进而搞清楚所有的加密数据内容。")]),t._v(" "),s("p",[t._v("HTTP2 的 HPACK 原理：")]),t._v(" "),s("p",[t._v("当客户端请求时，会根据发送的首部信息，建立一张表：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("索引")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("首部名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("62")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("header1")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("foo")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("63")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("header2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("bar")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("64")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("header3")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("baz")])])])]),t._v(" "),s("p",[t._v("服务器端再接收到数据的时候也会创建一张与之对应的表。客户端在发送下一个请求的时候，如果首部是相同的，就不用发送 Header 头，只用发送索引号就行了，服务器端会索引去还原对应的首部信息。")]),t._v(" "),s("h2",{attrs:{id:"并非一定能从-http2-中获益"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并非一定能从-http2-中获益"}},[t._v("#")]),t._v(" 并非一定能从 HTTP2 中获益")]),t._v(" "),s("p",[t._v("之前说了这么多 HTTP2 的好处，你是否已经觉得升级 HTTP2 已经迫不及待了呢？但是 HTTP2 页不是完美的，这一小节我们来介绍一下 HTTP2 的一些坑。")]),t._v(" "),s("p",[t._v("1、关于丢包。之前说到，HTTP2 采用多路复用，可以让多个请求在同一个 TCP 连接中进行传输，但是由于 HTTP2 是单链接架构，如果唯一的连接发生了丢包，所有的工作都会受到影响，这其实是 HTTP2 中比较大的坑。")]),t._v(" "),s("p",[t._v("HTTP1 在请求时建立了多个连接（和浏览器相关，一般为 6 个），相对于 TCP 的初始拥塞窗口更大。当有一个连接发生丢包时，不会影响到其他请求。对比之下： HTTP2 比 HTTP1 更容易丢包。")]),t._v(" "),s("p",[t._v("2、关于服务器端推送。之前说到，服务器端推送可以主动给客户端推送资源，用来减少客户端发起请求数量。可是这也可能带来一个问题：如果推送的资源在客户端已经缓存过，那就是多此一举了，所以在做服务器端渲染时，一定要和客户端的缓存策略结合起来。")]),t._v(" "),s("h2",{attrs:{id:"http2-反模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http2-反模式"}},[t._v("#")]),t._v(" HTTP2 反模式")]),t._v(" "),s("p",[t._v("HTTP2 部署之后，之前针对于 HTTP1 的优化方案有可能就不适用了，我们来看一下都有哪些。")]),t._v(" "),s("ul",[s("li",[t._v("域名拆分")])]),t._v(" "),s("p",[t._v("在 HTTP1 中，会将一些静态资源存在多个 cdn 服务器（因为浏览器对同一个域名下的资源请求并发数有限制，一般是 6 个）。但是使用 HTTP2 之后就不必要了，因为 HTTP2 采用多路复用，再多的资源也都能够进行并发请求。")]),t._v(" "),s("ul",[s("li",[t._v("资源内联")])]),t._v(" "),s("p",[t._v("在 HTTP1 中，我们可会对一些小图片直接打包成 base64 格式，用来减少请求。但内联无法利用缓存优势，应具体情况具体分析。")]),t._v(" "),s("ul",[s("li",[t._v("资源合并（雪碧图等）")])]),t._v(" "),s("p",[t._v("由于多路复用的原因，多个小图片可以并行请求，雪碧图也不是很有必要了。")]),t._v(" "),s("ul",[s("li",[t._v("禁用带 cookie 的域名")])]),t._v(" "),s("p",[t._v("在 HTTP1 中，由于无法压缩首部，会启动一个无 cookie 的服务器专门用来存放某些静态资源，用来减少不必要的 cookie 传输。在 HTTP2 中，首部信息会被 HPACK 算法优化，大大减少了首部字节，而且不用心增一个无 cookie 的服务器，所以建议取消掉禁用 cookie 域名的方式。")]),t._v(" "),s("ul",[s("li",[t._v("资源预取")])]),t._v(" "),s("p",[t._v("高数浏览器，之哟啊有可能就继续下载可缓存资源，并把这些资源缓存起来，这个还是有必要。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"展望未来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#展望未来"}},[t._v("#")]),t._v(" 展望未来")]),t._v(" "),s("p",[t._v("1、HTTP 是使用 TCP 作为传输层的协议，由于 TCP 是可靠的，拥塞控制的协议，在进行一次连接时，会发生三次握手，断开连接时会有 4 次挥手，所以有人提出可以用 UDP 这种简单，快速的协议去代替。")]),t._v(" "),s("ul",[s("li",[t._v("Google 开发的 QUIC 是极快的 UDP 网络连接，提供了 HTTP2 等效的，多路复用，流量控制，TSL 等效的安全机制，以及 TCP 等效的连接语义、可靠性、拥塞机制。")]),t._v(" "),s("li",[t._v("QUIC 已经被重命名为 HTTP3 有望成为下一代的 HTTP。")])]),t._v(" "),s("p",[t._v("2、TLS（传输层安全协议，用来实现 HTTPS）也在不断地进行改进。在 TLS1.3 版本中 新连接只需要一次往返（目前最少是三次），如果是恢复连接，则不需要往返延时。")]),t._v(" "),s("h2",{attrs:{id:"相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),s("ul",[s("li",[t._v("《HTTP2 基础教程》")])])])}),[],!1,null,null,null);a.default=_.exports}}]);