(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{322:function(v,_,t){"use strict";t.r(_);var a=t(28),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"tcp-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-总结"}},[v._v("#")]),v._v(" TCP 总结")]),v._v(" "),t("p",[v._v("TCP 建立连接断开连接都需要先需要进行握手。在传输数据的过程中，通过各种算法保证数据的可靠性，相比 UDP 来说不那么的高效。")]),v._v(" "),t("h2",{attrs:{id:"建立连接过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立连接过程"}},[v._v("#")]),v._v(" 建立连接过程")]),v._v(" "),t("h3",{attrs:{id:"三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[v._v("#")]),v._v(" 三次握手")]),v._v(" "),t("p",[v._v("第一次握手")]),v._v(" "),t("p",[v._v("客户端向服务端发送连接请求报文段。该报文段中包含自身的数据通讯初始序号。请求发送后，客户端便进入 SYN-SENT 状态。")]),v._v(" "),t("p",[v._v("第二次握手")]),v._v(" "),t("p",[v._v("服务端收到连接请求报文段后，如果同意连接，则会发送一个应答，该应答中也会包含自身的数据通讯初始序号，发送完成后便进入 SYN-RECEIVED 状态。")]),v._v(" "),t("p",[v._v("第三次握手")]),v._v(" "),t("p",[v._v("当客户端收到连接同意的应答后，还要向服务端发送一个确认报文。客户端发完这个报文段后便进入 ESTABLISHED 状态，服务端收到这个应答后也进入 ESTABLISHED 状态，此时连接建立成功。")]),v._v(" "),t("p",[v._v("PS：第三次握手中可以包含数据，通过快速打开（TFO）技术就可以实现这一功能。其实只要涉及到握手的协议，都可以使用类似 TFO 的方式，客户端和服务端存储相同的 cookie，下次握手时发出 cookie 达到减少 RTT 的目的。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("为什么 TCP 建立连接需要三次握手，明明两次就可以建立起连接？")]),v._v(" "),t("p",[v._v("这是为了防止出现失效的连接请求报文段被服务端接收的情况，从而产生错误。")]),v._v(" "),t("p",[v._v("可以想象如下场景。客户端发送了一个连接请求 A，但是因为网络原因造成了超时，这时 TCP 会启动超时重传的机制再次发送一个连接请求 B。此时请求顺利到达服务端，服务端应答完就建立了请求，然后接收数据后释放了连接。")]),v._v(" "),t("p",[v._v("假设这时候连接请求 A 在两端关闭后终于抵达了服务端，那么此时服务端会认为客户端又需要建立 TCP 连接，从而应答了该请求并进入 ESTABLISHED 状态。但是客户端其实是 CLOSED 的状态，那么就会导致服务端一直等待，造成资源的浪费。")]),v._v(" "),t("p",[v._v("PS：在建立连接中，任意一端掉线，TCP 都会重发 SYN 包，一般会重试五次，在建立连接中可能会遇到 SYN Flood 攻击。遇到这种情况你可以选择调低重试次数或者干脆在不能处理的情况下拒绝请求。")])]),v._v(" "),t("h3",{attrs:{id:"四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[v._v("#")]),v._v(" 四次挥手")]),v._v(" "),t("p",[v._v("TCP 是全双工的，在断开连接时两端都需要发送 FIN 和 ACK。")]),v._v(" "),t("p",[v._v("第一次握手")]),v._v(" "),t("p",[v._v("若客户端 A 认为数据发送完成，则它需要向服务端 B 发送连接释放请求。")]),v._v(" "),t("p",[v._v("第二次握手")]),v._v(" "),t("p",[v._v("B 收到连接释放请求后，会告诉应用层要释放 TCP 链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明 A 到 B 的连接已经释放，不再接收 A 发的数据了。但是因为 TCP 连接是双向的，所以 B 仍旧可以发送数据给 A。")]),v._v(" "),t("p",[v._v("第三次握手")]),v._v(" "),t("p",[v._v("B 如果此时还有没发完的数据会继续发送，完毕后会向 A 发送连接释放请求，然后 B 便进入 LAST-ACK 状态。")]),v._v(" "),t("p",[v._v("PS：通过延迟确认的技术（通常有时间限制，否则对方会误认为需要重传），可以将第二次和第三次握手合并，延迟 ACK 包的发送。")]),v._v(" "),t("p",[v._v("第四次握手")]),v._v(" "),t("p",[v._v("A 收到释放请求后，向 B 发送确认应答，此时 A 进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有 B 的重发请求的话，就进入 CLOSED 状态。当 B 收到确认应答后，也便进入 CLOSED 状态。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("为什么 A 要进入 TIME-WAIT 状态，等待 2MSL 时间后才进入 CLOSED 状态？")]),v._v(" "),t("p",[v._v("为了保证 B 能收到 A 的确认应答。若 A 发完确认应答后直接进入 CLOSED 状态，如果确认应答因为网络问题一直没有到达，那么会造成 B 不能正常关闭。")])]),v._v(" "),t("h2",{attrs:{id:"arq-协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arq-协议"}},[v._v("#")]),v._v(" ARQ 协议")]),v._v(" "),t("p",[t("strong",[v._v("ARQ 协议也就是超时重传机制")]),v._v("。通过确认和超时机制保证了数据的正确送达，ARQ 协议包含停止等待 ARQ 和连续 ARQ 两种协议。")]),v._v(" "),t("h3",{attrs:{id:"停止等待-arq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止等待-arq"}},[v._v("#")]),v._v(" 停止等待 ARQ")]),v._v(" "),t("h4",{attrs:{id:"正常传输过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正常传输过程"}},[v._v("#")]),v._v(" 正常传输过程")]),v._v(" "),t("p",[v._v("只要 A 向 B 发送一段报文，都要停止发送并启动一个定时器，等待对端回应，在定时器时间内接收到对端应答就取消定时器并发送下一段报文。")]),v._v(" "),t("h4",{attrs:{id:"报文丢失或出错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#报文丢失或出错"}},[v._v("#")]),v._v(" 报文丢失或出错")]),v._v(" "),t("p",[v._v("在报文传输的过程中可能会出现丢包。这时候超过定时器设定的时间就会再次发送丢失的数据直到对端响应，所以需要每次都备份发送的数据。")]),v._v(" "),t("p",[v._v("即使报文正常的传输到对端，也可能出现在传输过程中报文出错的问题。这时候对端会抛弃该报文并等待 A 端重传。")]),v._v(" "),t("p",[v._v("PS：一般定时器设定的时间都会大于一个 RTT(表示发送端发送数据到接收到对端数据所需的往返时间) 的平均时间。")]),v._v(" "),t("h4",{attrs:{id:"ack-超时或丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ack-超时或丢失"}},[v._v("#")]),v._v(" ACK 超时或丢失")]),v._v(" "),t("p",[v._v("对端传输的应答也可能出现丢失或超时的情况。那么超过定时器时间 A 端照样会重传报文。这时候 B 端收到相同序号的报文会丢弃该报文并重传应答，直到 A 端发送下一个序号的报文。")]),v._v(" "),t("p",[v._v("在超时的情况下也可能出现应答很迟到达，这时 A 端会判断该序号是否已经接收过，如果接收过只需要丢弃应答即可。")]),v._v(" "),t("p",[v._v("从上面的描述中大家肯定可以发现这肯定不是一个高效的方式。假设在良好的网络环境中，每次发送数据都需要等待片刻肯定是不能接受的。那么既然我们不能接受这个不那么高效的协议，就来继续学习相对高效的协议吧。")]),v._v(" "),t("h3",{attrs:{id:"连续-arq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连续-arq"}},[v._v("#")]),v._v(" 连续 ARQ")]),v._v(" "),t("p",[v._v("在连续 ARQ 中，发送端拥有一个发送窗口，可以在没有收到应答的情况下持续发送窗口内的数据，这样相比停止等待 ARQ 协议来说减少了等待时间，提高了效率。")]),v._v(" "),t("h4",{attrs:{id:"累计确认"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#累计确认"}},[v._v("#")]),v._v(" 累计确认")]),v._v(" "),t("p",[v._v("连续 ARQ 中，接收端会持续不断收到报文。通过累计确认，可以在收到多个报文以后统一回复一个应答报文。报文中的 ACK 标志位可以用来告诉发送端这个序号之前的数据已经全部接收到了，下次请发送这个序号后的数据。")]),v._v(" "),t("p",[v._v("但是累计确认也有一个弊端。在连续接收报文时，可能会遇到接收到序号 5 的报文后，并未接收到序号 6 的报文，然而序号 7 以后的报文已经接收。遇到这种情况时，ACK 只能回复 6，这样就会造成发送端重复发送数据的情况。")]),v._v(" "),t("h2",{attrs:{id:"滑动窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[v._v("#")]),v._v(" 滑动窗口")]),v._v(" "),t("p",[v._v("在上面小节中讲到了发送窗口。在 TCP 中，两端其实都维护着窗口：分别为"),t("strong",[v._v("发送端窗口")]),v._v("和"),t("strong",[v._v("接收端窗口")]),v._v("。")]),v._v(" "),t("p",[v._v("发送端窗口包含：已发送但未收到应答的数据、可以发送但是未发送的数据。")]),v._v(" "),t("p",[v._v("发送端窗口是由接收窗口剩余大小决定的。接收方会把当前接收窗口的剩余大小写入应答报文，发送端收到应答后根据该值和当前网络拥塞情况设置发送窗口的大小，所以发送窗口的大小是不断变化的。")]),v._v(" "),t("p",[t("strong",[v._v("滑动窗口")]),v._v("是一个很重要的概念，"),t("strong",[v._v("它帮助 TCP 实现了流量控制的功能")]),v._v("。接收方通过报文告知发送方还可以发送多少数据，从而"),t("strong",[v._v("保证接收方能够来得及接收数据")]),v._v("，防止出现接收方带宽已满，但是发送方还一直发送数据的情况。")]),v._v(" "),t("h3",{attrs:{id:"zero-窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zero-窗口"}},[v._v("#")]),v._v(" Zero 窗口")]),v._v(" "),t("p",[v._v("在发送报文的过程中，可能会接收到零窗口大小的情况。在该情况下，发送端会停止发送数据，并启动 persistent timer 。该定时器会定时发送请求给对端，让接收端告知窗口大小。在重试次数超过一定次数后，可能会中断 TCP 连接。")]),v._v(" "),t("h2",{attrs:{id:"拥塞处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞处理"}},[v._v("#")]),v._v(" 拥塞处理")]),v._v(" "),t("p",[t("strong",[v._v("拥塞处理")]),v._v("作用于网络，"),t("strong",[v._v("防止过多的数据拥塞网络，避免出现网络负载过大的情况")]),v._v("。")]),v._v(" "),t("p",[v._v("拥塞处理包括了四个算法，分别为：慢开始，拥塞避免，快速重传，快速恢复。")]),v._v(" "),t("h3",{attrs:{id:"慢开始算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#慢开始算法"}},[v._v("#")]),v._v(" 慢开始算法")]),v._v(" "),t("p",[v._v("慢开始算法，顾名思义，就是在传输开始时将发送窗口慢慢的指数级扩大，从而避免一开始就传输大量数据导致网络拥塞。想必大家都下载过资源，每当我们开始下载的时候都会发现下载速度是慢慢提升的，而不是一蹴而就直接拉满带宽。")]),v._v(" "),t("p",[v._v("慢开始算法步骤具体如下：")]),v._v(" "),t("ul",[t("li",[v._v("连接初始设置拥塞窗口（Congestion Window） 为 1 MSS（一个分段的最大数据量）。")]),v._v(" "),t("li",[v._v("每过一个 RTT 就将窗口大小乘二。")]),v._v(" "),t("li",[v._v("指数级增长肯定不能没有限制的，所以有一个阈值限制，当窗口大小大于阈值时就会启动拥塞避免算法。")])]),v._v(" "),t("h3",{attrs:{id:"拥塞避免算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免算法"}},[v._v("#")]),v._v(" 拥塞避免算法")]),v._v(" "),t("p",[v._v("拥塞避免算法相比简单点，每过一个 RTT 窗口大小只加一，这样能够避免指数级增长导致网络拥塞，慢慢将大小调整到最佳值。")]),v._v(" "),t("p",[v._v("在传输过程中可能定时器超时的情况，这时候 TCP 会认为网络拥塞了，会马上进行以下步骤：")]),v._v(" "),t("ul",[t("li",[v._v("将阈值设为当前拥塞窗口的一半")]),v._v(" "),t("li",[v._v("将拥塞窗口设为 1 MSS")]),v._v(" "),t("li",[v._v("启动拥塞避免算法")])]),v._v(" "),t("h3",{attrs:{id:"快速重传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速重传"}},[v._v("#")]),v._v(" 快速重传")]),v._v(" "),t("p",[v._v("快速重传一般和快恢复一起出现。一旦接收端收到的报文出现失序的情况，接收端只会回复最后一个顺序正确的报文序号。如果发送端收到三个重复的 ACK，无需等待定时器超时而是直接启动快速重传算法。具体算法分为两种：")]),v._v(" "),t("h4",{attrs:{id:"tcp-taho-实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-taho-实现"}},[v._v("#")]),v._v(" TCP Taho 实现")]),v._v(" "),t("ul",[t("li",[v._v("将阈值设为当前拥塞窗口的一半")]),v._v(" "),t("li",[v._v("将拥塞窗口设为 1 MSS")]),v._v(" "),t("li",[v._v("重新开始慢开始算法")])]),v._v(" "),t("h4",{attrs:{id:"tcp-reno-实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-reno-实现"}},[v._v("#")]),v._v(" TCP Reno 实现")]),v._v(" "),t("ul",[t("li",[v._v("拥塞窗口减半。")]),v._v(" "),t("li",[v._v("将阈值设为当前拥塞窗口。")]),v._v(" "),t("li",[v._v("进入快恢复阶段（重发对端需要的包，一旦收到一个新的 ACK 答复就退出该阶段），这种方式在丢失多个包的情况下就不那么好了。")]),v._v(" "),t("li",[v._v("使用拥塞避免算法。")])]),v._v(" "),t("h4",{attrs:{id:"tcp-new-ren-改进后的快恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-new-ren-改进后的快恢复"}},[v._v("#")]),v._v(" TCP New Ren 改进后的快恢复")]),v._v(" "),t("p",[v._v("TCP New Reno 算法改进了之前 TCP Reno 算法的缺陷。在之前，快恢复中只要收到一个新的 ACK 包，就会退出快恢复。")]),v._v(" "),t("p",[v._v("在 TCP New Reno 中，TCP 发送方先记下三个重复 ACK 的分段的最大序号。")]),v._v(" "),t("p",[v._v("假如我有一个分段数据是 1 ~ 10 这十个序号的报文，其中丢失了序号为 3 和 7 的报文，那么该分段的最大序号就是 10。发送端只会收到 ACK 序号为 3 的应答。这时候重发序号为 3 的报文，接收方顺利接收的话就会发送 ACK 序号为 7 的应答。这时候 TCP 知道对端是有多个包未收到，会继续发送序号为 7 的报文，接收方顺利接收并会发送 ACK 序号为 11 的应答，这时发送端认为这个分段接收端已经顺利接收，接下来会退出快恢复阶段。")]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("这一章节几乎全理论知识，需要反复理解记忆。")]),v._v(" "),t("ul",[t("li",[v._v("建立连接需要三次握手，断开连接需要四次握手。")]),v._v(" "),t("li",[v._v("滑动窗口动态调整发送端窗口大小，保证接收方来得及接受数据。")]),v._v(" "),t("li",[v._v("拥塞窗口动态调整发送端窗口大小，防止过多的数据拥塞网络，出现网络负载过大的情况。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);