(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{318:function(a,t,s){"use strict";s.r(t);var n=s(28),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"js-bridge-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-bridge-总结"}},[a._v("#")]),a._v(" JS Bridge 总结")]),a._v(" "),s("p",[a._v("构建 Native 和非 Native 间消息通信的通道，而且是 "),s("code",[a._v("双向通信的通道")]),a._v("。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/blog/js-jsBridge-core.png",alt:"jsBridge示意图"}})]),a._v(" "),s("h2",{attrs:{id:"js-native"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-native"}},[a._v("#")]),a._v(" Js -> Native")]),a._v(" "),s("p",[a._v("JavaScript 调用 Native 的方式，主要有两种：注入 API 和 拦截 URL SCHEME。")]),a._v(" "),s("h3",{attrs:{id:"注入-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注入-api"}},[a._v("#")]),a._v(" 注入 API")]),a._v(" "),s("p",[a._v("注入 API 方式的主要原理是，通过 WebView 提供的接口，向 JavaScript 的 Context（window）中注入对象或者方法，让 JavaScript 调用时，直接执行相应的 Native 代码逻辑，达到 JavaScript 调用 Native 的目的。")]),a._v(" "),s("p",[a._v("使用 Native 方式注入后，直接调用：")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("postBridgeMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"拦截-url-scheme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拦截-url-scheme"}},[a._v("#")]),a._v(" 拦截 URL SCHEME")]),a._v(" "),s("p",[a._v("拦截 URL SCHEME 的主要流程是：Web 端通过某种方式（例如 iframe.src）发送 URL Scheme 请求，之后 Native 拦截到请求并根据 URL SCHEME（包括所带的参数）进行相关操作。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/blog/js-jsBridge-detail.png",alt:"jsBridge示意图"}})]),a._v(" "),s("p",[a._v("优缺点：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("兼容性好。")])]),a._v(" "),s("li",[s("p",[a._v("使用 iframe.src 发送 URL SCHEME 会有 url 长度的隐患。")])])]),a._v(" "),s("h2",{attrs:{id:"native-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#native-js"}},[a._v("#")]),a._v(" Native -> Js")]),a._v(" "),s("p",[a._v("Native 调用 JavaScript，其实就是执行拼接 JavaScript 字符串，从外部调用 JavaScript 中的方法，因此 JavaScript 的方法必须在全局的 window 上。")]),a._v(" "),s("h2",{attrs:{id:"简单实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单实现"}},[a._v("#")]),a._v(" 简单实现")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        callbacks "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("JSBridge "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 调用 Native")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("invoke")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("bridgeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 判断环境，获取不同的 nativeBridge")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" thisId "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取唯一 id")]),a._v("\n            callbacks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("thisId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 存储 Callback")]),a._v("\n            nativeBridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                bridgeName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" bridgeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                callbackId"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" thisId "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 传到 Native 端")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("receiveMessage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" bridgeName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bridgeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                callbackId "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("callbackId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Native 将 callbackId 原封不动传回")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 具体逻辑")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// bridgeName 和 callbackId 不会同时存在")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("callbackId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("callbacks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("callbackId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 找到相应句柄")]),a._v("\n                    callbacks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("callbackId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 执行调用")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("elseif")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("bridgeName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br")])]),s("h3",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5abca877f265da238155b6bc",target:"_blank",rel:"noopener noreferrer"}},[a._v("jsBridge 原理"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);