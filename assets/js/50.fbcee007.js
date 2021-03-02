(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{291:function(t,s,a){"use strict";a.r(s);var e=a(28),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-使用总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-使用总结"}},[t._v("#")]),t._v(" Vue 使用总结")]),t._v(" "),a("p",[t._v("使用 Vue 已经很长时间了，在这里写一下总结。")]),t._v(" "),a("h2",{attrs:{id:"vue-目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-目录结构"}},[t._v("#")]),t._v(" Vue 目录结构")]),t._v(" "),a("p",[t._v("来一张源码截图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/vue-dir.png",alt:"vue 目录结构"}})]),t._v(" "),a("ul",[a("li",[t._v("compiler 目录是编译模板")]),t._v(" "),a("li",[t._v("core 目录是 vue 的核心")]),t._v(" "),a("li",[t._v("platforms 目录是针对核心模块的‘平台’模块，目前有 web，weex")]),t._v(" "),a("li",[t._v("server 目录是处理服务器端渲染")]),t._v(" "),a("li",[t._v("sfc 目录是处理单文件 .vue")]),t._v(" "),a("li",[t._v("shared 目录提供全局用到的工具函数")])]),t._v(" "),a("p",[t._v("我们再来看一下，core 文件夹下的目录：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/vue-platforms.png",alt:"vue 目录结构"}})]),t._v(" "),a("p",[t._v("结论:Vue.js 的组成是由 core + 对应的“平台”补充代码构成。")]),t._v(" "),a("h2",{attrs:{id:"双向数据绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定"}},[t._v("#")]),t._v(" 双向数据绑定")]),t._v(" "),a("p",[t._v("双向绑定图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/vue-mvvm.png",alt:"双向绑定图"}})]),t._v(" "),a("p",[t._v("图中可以看到，双向数据绑定主要用到一下几点：")]),t._v(" "),a("ul",[a("li",[t._v("1.Object.defineProperty")]),t._v(" "),a("li",[t._v("2.Observer")]),t._v(" "),a("li",[t._v("3.Watcher")]),t._v(" "),a("li",[t._v("4.Dep")]),t._v(" "),a("li",[t._v("5.Directive")])]),t._v(" "),a("h3",{attrs:{id:"object-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[t._v("#")]),t._v(" Object.defineProperty")]),t._v(" "),a("p",[t._v("ES5 中的对象方法，可以定义对象属性，这里主要用于自定义 get 和 set 方法。")]),t._v(" "),a("h3",{attrs:{id:"observer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observer"}},[t._v("#")]),t._v(" Observer")]),t._v(" "),a("p",[t._v("观察者模式是软件设计模式的一种。在这种模式中，一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。")]),t._v(" "),a("p",[t._v("Observer 会观察两种类型的数据，Object 与 Array。")]),t._v(" "),a("p",[t._v("对于 Array 类型的数据，由于 JavaScript 的限制， Vue 不能检测变化,会先重写操作数组 的原型方法，重写后能达到以下目的：")]),t._v(" "),a("ul",[a("li",[t._v("当数组发生变化时，触发 notify。")]),t._v(" "),a("li",[t._v("如果是 push，unshift，splice 这些添加新元素的操作，则会使用 observer 观察新添加的数据。")])]),t._v(" "),a("p",[t._v("重写完原型方法后，遍历拿到数组中的每个数据 使用 observer 观察它。")]),t._v(" "),a("p",[t._v("而对于 Object 类型的数据，则遍历它的每个 key，使用 defineProperty 设置 getter 和 setter，当触发 getter 的时候，observer 则开始收集依赖，而触发 setter 的时候，observe 则触发 notify。")]),t._v(" "),a("h3",{attrs:{id:"watcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watcher"}},[t._v("#")]),t._v(" Watcher")]),t._v(" "),a("p",[t._v("Watcher 是将模板和 Observer 对象结合在一起的纽带。Watcher 是订阅者模式中的订阅者。Watcher 的两个参数: expOrFn 最终会被转换为 getter 函数， cb 是更新时执行的回调。依赖收集的入口就是 get 函数。")]),t._v(" "),a("h3",{attrs:{id:"dep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dep"}},[t._v("#")]),t._v(" Dep")]),t._v(" "),a("p",[t._v("这个方法是在响应式的过程中调用的，用户修改数据触发 setter 函数，然后调用 dep.notify 去通知订阅者更新视图。")]),t._v(" "),a("h3",{attrs:{id:"directive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directive"}},[t._v("#")]),t._v(" Directive")]),t._v(" "),a("p",[t._v("vue 内置了这么多的指令， 这些指令都会抛出两个接口 bind 和 update，这两个接口的作用是，编译的最后一步是执行所有用到的指令的 bind 方法，而 update 方法则是当 watcher 触发 update 时， Directive 会触发指令的 update 方法。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/vue-flow.png",alt:"vue 流程图"}})]),t._v(" "),a("h3",{attrs:{id:"vue-运行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-运行流程"}},[t._v("#")]),t._v(" Vue 运行流程")]),t._v(" "),a("p",[t._v("1、先创建 Vue 实例，创建双向数据绑定，监听 data 中数据的 get，set 方法，建立与 Dep 的对应关系。")]),t._v(" "),a("p",[t._v("2、编译模板，在有使用 v-text 等双向数据的地方，new Watcher，建立 DOM 和数据的对应关系。")]),t._v(" "),a("p",[t._v("3、在 new Watcher 中，进行依赖收集，把使用到的 data 记录到 Dep 中。")]),t._v(" "),a("p",[t._v("4、每当数据变更，便会触发 set 方法，然后调用 Dep.notify 通知使用到 data 的 watcher，去更新 DOM。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("vue 异步更新")]),t._v(" "),a("p",[t._v("Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个异步队列，并缓存在同一事件循环中发生的所有数据改变。")]),t._v(" "),a("p",[t._v("Vue 在内部尝试对异步队列使用原生的 setImmediate 和 MessageChannel（基于 postMessage），如果执行环境不支持，会采用 setTimeout(fn, 0) 代替。")]),t._v(" "),a("p",[t._v("如果同一个 watcher 被多次触发，只会被推入到队列中一次（这在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要）。")]),t._v(" "),a("p",[t._v("然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。")]),t._v(" "),a("p",[t._v("修改数据 -> 触发 set-> 执行同步代码，如果有数据更新，则开启异步队列。")]),t._v(" "),a("p",[t._v("-> 异步队列中进行去重操作，并注入 nextTick 回调函数。")]),t._v(" "),a("p",[t._v("-> 异步操作执行完毕，即 DOM 成功渲染，触发 nextTick 回调函数。")])]),t._v(" "),a("h3",{attrs:{id:"vue-运行时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-运行时"}},[t._v("#")]),t._v(" Vue 运行时")]),t._v(" "),a("p",[t._v("Vue 在运行时会检查项目中的模板文件，如果模板文件没有进行编译的话，会调用编译器进行编译，将模板转化成 render 函数。如果项目中使用 vue-loader 进行资源处理，则自动做了编译处理。Vue 官方 提供了包含编译器版和不包含编译器版的 CDN，可以根据情况进行选择。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要编译器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>{{ hi }}</div>'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不需要编译器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("p",[t._v("简单来说，分为")]),t._v(" "),a("ul",[a("li",[t._v("创建（create）前后")]),t._v(" "),a("li",[t._v("挂载（mounted）前后")]),t._v(" "),a("li",[t._v("更新（update）前后")]),t._v(" "),a("li",[t._v("销毁（destory）前后")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cn.vuejs.org/images/lifecycle.png",alt:"vue 生命周期"}})]),t._v(" "),a("h2",{attrs:{id:"vue-运行时优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-运行时优化"}},[t._v("#")]),t._v(" Vue 运行时优化")]),t._v(" "),a("h3",{attrs:{id:"标记静态节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记静态节点"}},[t._v("#")]),t._v(" 标记静态节点")]),t._v(" "),a("p",[t._v("当一个节点是纯静态时，会被 vue 打上标识，模块更新时，这一部分不会进行 domdiff 比较，提高性能。")]),t._v(" "),a("h3",{attrs:{id:"标记静态的变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记静态的变量"}},[t._v("#")]),t._v(" 标记静态的变量")]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("const message = 123;\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ message }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("当一个节点中的数据是一个静态数据，也会被标记成静态节点，加快渲染。")]),t._v(" "),a("h3",{attrs:{id:"优化静态循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化静态循环"}},[t._v("#")]),t._v(" 优化静态循环")]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ i }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如代码所示，静态的循环也会在运行时被优化。")]),t._v(" "),a("h3",{attrs:{id:"以后的优化方向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以后的优化方向"}},[t._v("#")]),t._v(" 以后的优化方向")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("编译应用程序中没有用到的部分 vue 组件。")])]),t._v(" "),a("li",[a("p",[t._v("生成原子 css，让 css 更高效复用。")])])]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/reactivity.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入响应式原理"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/yhlben/mini-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("mini-vue"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);