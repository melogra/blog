(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{508:function(t,e,a){"use strict";a.r(e);var v=a(1),r=function(t){t.options.__data__block__={mermaid_64a56f32:"flowchart LR\n  classDef default fill:#4abf8a,color:#fff,stroke:none;\n\ttext(html / css / js 文本) --\x3e engine[/浏览器渲染引擎/] --\x3e image(图像)\n",mermaid_64a5682c:"flowchart LR\n\tweb-content(网页内容)\n\thtml-parser(HTML 解释器)\n\tcss-parser(CSS 解释器)\n\tdom(DOM)\n\tjs-engine(JavaScript 引擎)\n\tmid-content(内部表示)\n\tlayout(布局和绘图)\n\timage(图像)\n\t\n\t%% 依赖的基础设施\n\tnetwork(网络)\n\tstorage(存储)\n\t2d-3d(2D / 3D 图形)\n\taudio-video(音频和视频)\n\timage-parser(图片解码器)\n\t%%\n\t\t\t\t\t\t\t\t\thtml-parser --\x3e css-parser\n\tweb-content --\x3e html-parser --\x3e dom --\x3e mid-content <--\x3e layout --\x3e image\n\t\t\t\t\t\t\t\t\thtml-parser <--\x3e js-engine\n\tweb-content -.-> network\n\tweb-content -.-> storage\n\t\n\tcss-parser --\x3e mid-content\n\tjs-engine --\x3e mid-content\n\tdom <--\x3e js-engine\n\t\n\tlayout -.-> 2d-3d\n\tlayout -.-> audio-video\n\tlayout -.-> image-parser\n\t\n\t%% 样式设置\n  classDef default fill:#4abf8a,color:#fff,stroke:none;\n  classDef orange fill:#f96;\n  \n  class network,storage,2d-3d,audio-video,image-parser orange\n  %%\n\t\n"}},_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器原理"}},[t._v("#")]),t._v(" 浏览器原理")]),t._v(" "),a("h2",{attrs:{id:"浏览器与浏览器内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器与浏览器内核"}},[t._v("#")]),t._v(" 浏览器与浏览器内核")]),t._v(" "),a("h3",{attrs:{id:"浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),a("h4",{attrs:{id:"浏览器发展史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器发展史"}},[t._v("#")]),t._v(" 浏览器发展史")]),t._v(" "),a("p",[a("em",[t._v("WroldWideWeb(nexus) -> netscape -> internet explorer -> mozila firefox -> safari -> chromium -> chrome")])]),t._v(" "),a("h4",{attrs:{id:"浏览器特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器特性"}},[t._v("#")]),t._v(" 浏览器特性")]),t._v(" "),a("p",[t._v("浏览器功能：")]),t._v(" "),a("p",[a("em",[t._v("网络、资源管理、网页浏览、多页面管理、插件和拓展、书签管理、历史记录管理、设置管理、下载管理、账户、安全机制、隐私管理、外观主题、开发者工具等")])]),t._v(" "),a("h4",{attrs:{id:"html5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5"}},[t._v("#")]),t._v(" HTML5")]),t._v(" "),a("p",[t._v("html5包含了一系列标准，一共包含了10大的个类别。")]),t._v(" "),a("p",[a("em",[t._v("离线（offline）、存储（storage）、连接（connectivity）、文件访问（file access）、语义（semantics）、音频 / 视频（audio / video）、3D / 图形（3D / graphics）、展示（presentation）、性能（performance）、其他（nuts and bolts）")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("类别")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("具体规范")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("离线")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Application cache，Local storage，Indexed DB，在线 / 离线事件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("存储")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Application cache ，Local storage，Indexed DB")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("连接")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Web Sockets、Server-sent事件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("文件访问")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("File API，File system，FileWriter，ProgressEvents")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("语义")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("各种新元素，比如Media、structural，国际化，Link relation，属性，form类型，microdata等方面")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("音频视频")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("HTML5 video，WebAudio，WebRTC，Video track等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3D图形")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Canvas2D，3D CSS变换，WebGL，SVG等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("展示")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CSS3 2D / 3D 变换，转换（transition），WebFonts等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("性能")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Web Worker，HTTP caching等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("其他")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("触控和鼠标、Shadow DOM、CSS masking等")])])])]),t._v(" "),a("h4",{attrs:{id:"useragent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useragent"}},[t._v("#")]),t._v(" userAgent")]),t._v(" "),a("p",[a("em",[t._v("userAgent")]),t._v(" 的作用在于让互联网的内容提供商了解发送请求的浏览器的身份，以便提供商根据不同浏览器提供不同的内容。")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("firefox")]),t._v(" 包含 "),a("em",[t._v("Gecko")]),t._v("、"),a("em",[t._v("Firefox")]),t._v(" 等关键词")]),t._v(" "),a("li",[a("em",[t._v("IE")]),t._v(" 包含 "),a("em",[t._v("Mozilla")]),t._v("、"),a("em",[t._v("MSIE")]),t._v("、"),a("em",[t._v("windows")]),t._v(" 等关键词")]),t._v(" "),a("li",[a("em",[t._v("safari")]),t._v(" 包含 "),a("em",[t._v("AppleWebKit")]),t._v("、"),a("em",[t._v("safari")]),t._v(" 等")]),t._v(" "),a("li",[a("em",[t._v("chrome")]),t._v(" 包含 "),a("em",[t._v("Mozilla")]),t._v("、"),a("em",[t._v("Android")]),t._v("、"),a("em",[t._v("AppleWebKit")]),t._v("、"),a("em",[t._v("Gecko")]),t._v("、"),a("em",[t._v("Chrome")]),t._v("、"),a("em",[t._v("safari")]),t._v(" 等关键词")])]),t._v(" "),a("p",[t._v("总的来说，因为某种浏览器的流行，很多内容提供商和网站需要根据流行的浏览器来定制内容，当后来者需要相同内容的时候，"),a("strong",[t._v("就只能通过这些用户代理的信息来模仿获得")]),t._v("。")]),t._v(" "),a("p",[t._v("所以能看到，越往后出现的浏览器通常会包含老浏览器里的部分关键词。")]),t._v(" "),a("h3",{attrs:{id:"浏览器内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核"}},[t._v("#")]),t._v(" 浏览器内核")]),t._v(" "),a("h4",{attrs:{id:"什么是内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是内核"}},[t._v("#")]),t._v(" 什么是内核")]),t._v(" "),a("p",[t._v("浏览器的一个最重要的功能就是将页面转变成可视化的图像结果，这就是浏览器内核，通常也被称为"),a("strong",[t._v("渲染引擎")]),t._v("。")]),t._v(" "),a("p",[t._v("所谓的渲染，就是根据描述或者定义构建数学模型，通过模型生成图像的过程。"),a("strong",[t._v("浏览器的渲染引擎就是将 "),a("em",[t._v("html / css / javascript")]),t._v(" 文本及其相应的资源文件转换成图像结果的模块。")])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_64a56f32",graph:t.$dataBlock.mermaid_64a56f32}}),a("p",[t._v("需要注意的是，渲染引擎和浏览器并非一一对应的，就像单个版本的Linux内核可以对应多个Linux操作系统的发行版。")]),t._v(" "),a("p",[t._v("以下是浏览器和渲染引擎的关系：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Trident")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Gecko")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Webkit")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("基于渲染引擎的浏览器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("firefox")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("safari、chromium / chrome、Android 浏览器、chromeOS等等")])])])]),t._v(" "),a("p",[t._v("事实上，根据Wikipedia上的数据，超过30种浏览器和Web平台是基于Webkit渲染引擎开发的。")]),t._v(" "),a("h4",{attrs:{id:"内核特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内核特征"}},[t._v("#")]),t._v(" 内核特征")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gquly6342vj30j807kq3a.jpg",alt:"渲染引擎模块"}})]),t._v(" "),a("p",[t._v("从图中可以看出，一个渲染引擎主要包括 "),a("em",[a("strong",[t._v("HTML解释器")])]),t._v("、"),a("em",[a("strong",[t._v("CSS解释器")])]),t._v("、"),a("em",[a("strong",[t._v("布局")])]),t._v(" 和 "),a("em",[a("strong",[t._v("JavaScript引擎")])]),t._v(" 等，其他还有 "),a("em",[a("strong",[t._v("绘图模块")])]),t._v("、"),a("em",[a("strong",[t._v("网络")])]),t._v(" 等并没有在图中直接表示出来，下面依次来描述他们。")]),t._v(" "),a("ul",[a("li",[a("p",[a("em",[a("strong",[t._v("HTML解释器")])]),t._v("：解释HTML文本的解释器，主要作用是将HTML文本解释成 "),a("em",[a("strong",[t._v("DOM（文档对象模型）树")])]),t._v("，"),a("em",[t._v("DOM")]),t._v(" 是一种文档的表示方法。")])]),t._v(" "),a("li",[a("p",[a("em",[a("strong",[t._v("CSS解释器")])]),t._v("：级联样式表的解释器，作用是为"),a("em",[t._v("DOM")]),t._v("中的各个元素对象计算出样式信息，从而为计算最后网页的布局提供基础设施。")])]),t._v(" "),a("li",[a("p",[a("em",[a("strong",[t._v("布局")])]),t._v("：在"),a("em",[t._v("DOM")]),t._v("创建之后，"),a("em",[t._v("Webkit")]),t._v("需要将其中的元素对象和样式信息结合起来，计算它们的大小位置等布局信息，形成一个能够表示这所有信息的"),a("strong",[t._v("内部表示模型")]),t._v("。")])]),t._v(" "),a("li",[a("p",[a("em",[a("strong",[t._v("JavaScript引擎")])]),t._v("：使用JavaScript代码可以修改网页的内容，也能修改CSS的信息，JavaScript引擎能够解释JavaScript代码并通过 "),a("strong",[t._v("DOM接口")]),t._v(" 和 "),a("strong",[t._v("CSSOM接口")]),t._v(" 修来改网页内容和样式信息，从而改变渲染的结果。")])]),t._v(" "),a("li",[a("p",[a("em",[a("strong",[t._v("绘图")])]),t._v("：使用图形库将布局计算后的各个网页的节点绘制成图像结果。")])])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_64a5682c",graph:t.$dataBlock.mermaid_64a5682c}}),a("h3",{attrs:{id:"webkit内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webkit内核"}},[t._v("#")]),t._v(" webkit内核")]),t._v(" "),a("h4",{attrs:{id:"webkit介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webkit介绍"}},[t._v("#")]),t._v(" webkit介绍")]),t._v(" "),a("p",[t._v("苹果公司参与网页渲染引擎 "),a("em",[a("strong",[t._v("KHTML")])])]),t._v(" "),a("p",[t._v("=> 苹果公司从 "),a("em",[a("strong",[t._v("KHTML")])]),t._v(" 中复制代码出来成立 "),a("em",[a("strong",[t._v("webkit项目")])])]),t._v(" "),a("p",[t._v("=> 苹果公司将 "),a("em",[a("strong",[t._v("webkit项目")])]),t._v(" 开源")]),t._v(" "),a("p",[t._v("=> google公司从 "),a("em",[a("strong",[t._v("webkit项目")])]),t._v(" 中复制代码成立 "),a("em",[a("strong",[t._v("Blink项目")])]),t._v("，并将其应用于 "),a("em",[a("strong",[t._v("Chromium浏览器")])])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(_);e.default=_.exports}}]);