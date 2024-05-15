## 一、浏览器的历史
### 1、时间轴
![浏览器历史](/images/knowledge-system/01/1.JPEG)

### 2、三次大战
浏览器的三次大战，可参考该文章：
<https://baijiahao.baidu.com/s?id=1761986635132554662&wfr=spider&for=pc/>


## 二、计算机基础概念

**三层计算机体系结构**：机器硬件Machine Hardware、操作系统Operating System、应用程序Application。
启动应用时，是【中央处理器CPU】和【图形处理器GPU】为应用供能。

**CPU**：计算机的大脑，可以逐一解决不同的任务

**GPU**：擅长同时处理跨内核的简单任务

**进程**：一个应用的执行程序，是系统进行资源分配和调度的最小单位

**线程**：位于进程内部并执行其进程程序的任意部分，是操作系统能够进行运算调度的最小单位
![图片](/images/knowledge-system/01/2.PNG)

启动应用时，会创建一个进程，程序可能会创建一个或多个线程来帮助它工作，操作系统为进程提供了一个可以使用的“一块”内存。

关闭应用时，相应的进程也会消失，操作系统会释放内存。

进程可以请求擦欧总系统启动另一个进程来执行不同的任务。

多个进程需要对话，可以通过<span style="color: red">进程间通信IPC</span>来进行。

![图片](/images/knowledge-system/01/3.PNG)


## 三、浏览器的架构
### 1、进程分类
不同浏览器的进程/线程架构，一般如下图所示：
![图片](/images/knowledge-system/01/4.png)

### 2、Chrome多进程架构
**Chrome设计主旨：**<span style="color: red;">简单、稳定、高效、安全、开源</span>
![图片](/images/knowledge-system/01/5.png)
顶部是浏览器进程，与处理其他任务的进程进行协调。在资源允许的情况下，会创建多个渲染进程分配给各个标签页。现在它试图给每个站点（如：iframe）也都弄个渲染进程。
- **浏览器进程**：处理Chrome的部分，包括 地址栏、书签、前进/后退按钮、网络请求/文件访问等不可见的特权
- **渲染进程**：各个标签页的页面内容展示
- **GPU进程**：处理独立于其它进程的 GPU 任务。GPU 被分成不同进程，因为 GPU 处理来自多个不同应用的请求并绘制在相同表面
- **插件进程**：各个浏览器的插件，如：flash

![图片](/images/knowledge-system/01/6.webp)

<span style="color: red;">浏览器更多的是把自己抽象成一个“操作系统”，网页或插件就像一个个应用程序。它甚至有自己的任务管理器，在标签页后面的空白位置，右键可打开</span>

<span style="color: blue; font-weight: bold">Chrome为什么是多进程，而不是多线程，其优势在哪里？</span>

1. **稳定性**，每个标签页都有自己的渲染进程，某个标签页失去响应，不会影响到其他的，保证标签页的稳定性，提高体验。

2. **安全性与沙箱化**（内存保护、访问控制），操作系统提供了限制浏进程权限的方法，浏览器可以利用沙箱保护某些特定功能的进程。例如，Chrome 浏览器可以限制处理用户输入（如渲染器）的进程的文件访问的权限。每个进程都会被分配到一个私有的内存空间，通常包含基础设施的拷贝（如Chrome V8引擎）。

虽然进程的效率低于线程，因为进程的启动成本高于线程，但线程存在的问题：
1. 任何一个线程的问题，都可能影响整个进程，以及整个进程的其他线程。如果一个线程崩溃或卡死，整个进程也会崩溃会卡死。
2. 安全问题，多线程的代码都在一个进程的空间下，就存在漏洞的可能性，某些网站会利用浏览器的漏洞去窥探用户的隐私，盗取信息。

<span style="color: red;">Chrome就是一个用内存换速度和安全性的浏览器</span>

**感兴趣的可以查看以下文章：**

[Chrome 为什么多进程而不是多线程? - 知乎](https://www.zhihu.com/question/368712837)

[独家:Google Chrome漫画书中文版_互联网_科技时代_新浪网](https://tech.sina.com.cn/i/2008-09-02/21522430443.shtml)


## 四、浏览器的运行原理

![图片](/images/knowledge-system/01/7.webp)

### 1、用户界面User Interface
浏览器的地址栏、书签、前进/后退按钮等等，除了浏览器通过地址栏url请求得到的主界面，其他都属于用户界面。

### 2、浏览器引擎Browser Engine
用户界面和渲染引擎之间的桥梁，为用户界面和渲染引擎传送指令。浏览器引擎提供了开始加载URL资源 和 其他一些高级操作方法，如：重新加载、前进、后退动作，错误信息、加载进度等。

### 3、渲染引擎Rendering Engine
负责网页语法的解析，如：HTML、JavaScript，并渲染到页面。

![图片](/images/knowledge-system/01/8.webp)
<span style="color: purple; font-weight: bold;">浏览器的内核分为两部分：渲染引擎、JavaScript引擎</span>

**渲染引擎：** KHTML、WebCore(是KHTML的衍生产品)

**JavaScript引擎：** JavaScriptCore、V8

<span style="background-color: yellow; font-weight: bold;">浏览器引擎</span>
- Trident：IE浏览器引擎
- Gecko：Firefox浏览器引擎
- Presto：Opera浏览器引擎
- Webkit：Safari浏览器引擎

（1）Chrominum：基于webkit，08年作为Chrome的引擎，Chrominum是Chrome的实验版。
![图片](/images/knowledge-system/01/9.webp)

（2）Webkit2：2010年随OS X Lion一起面世。WebCore层面实现进程隔离与Google的沙箱设计存在冲突。

（3）Blink：基于Webkit2分支，13年谷歌开始作为Chrome 28的引擎集成在Chromium浏览器里。
![图片](/images/knowledge-system/01/10.png)

webkit的渲染流程
![图片](/images/knowledge-system/01/11.webp)

<span style="background-color: yellow; font-weight: bold;">JavaScript引擎：V8</span>

从字节码的放弃到真香
![图片](/images/knowledge-system/01/12.webp)

采用了直接编译成机器码的方式，速度是有改善，但同时也造成了**内存消耗问题**。

Full-Codegen未优化的机器代码，<span style="color: red;">内存占用大，编译时间长，导致启动速度慢。</span>

Crankshaft优化过后的机器代码，<span style="color: red;">无法优化try，catch和finally等关键字划分的代码块。</span>
![图片](/images/knowledge-system/01/13.webp)
- Parser：负责将 JavaScript 源码转换为 Abstract Syntax Tree (AST)
- Ignition：解释器，负责将 AST 转换为 Bytecode，解释执行 Bytecode
- Turbofan：优化编译器，利用 Ignition 所收集的类型信息，将 Bytecode 转换为优化的汇编代码
- Orinoco：垃圾回收模块，负责将程序不再需要的内存空间回收

采用新的Ignition+TurboFan架构后，比Full-codegen+Crankshaft架构内存降低一半多，且70%左右的网页速度得到了提升

<span style="color: red; font-weight: bold;">即时编译JIT：</span> 在运行的时候，先执行再编译

<span style="color: red; font-weight: bold;">V8也属于JIT编译器，V8本质上是个虚拟机</span>

<span style="background-color: yellow; font-weight: bold;">V8的事件机制</span>
![图片](/images/knowledge-system/01/14.webp)

### 4、网络Networking
用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现，负责网络通信和安全。

### 5、JavaScript解释器
用于解析和执行 JavaScript 代码，执行结果将传递给渲染引擎来展示。

### 6、用户界面后端Display Backend
用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法。

### 7、数据存储Data persistence
这是持久层，浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“网络数据库”，这是一个完整而轻便的浏览器内数据库。


## 五、浏览器的不同形态

### 1、webView
是一种嵌入式浏览器，原生应用可以用它来展示网络内容。

### 2、Headless Brower
无头浏览器是一种未配置图形用户界面 (GUI) 的 Web 浏览器，通常通过命令行或网络通信来执行。

### 3、Eletron
通过使用 Node.js（作为后端）和Chromium 的渲染引擎（作为前端）完成跨平台的桌面 GUI 应用程序的开发。现已被多个开源 Web 应用程序用于前端与后端的开发，著名项目包括 GitHub 的 Atom 和微软的 Visual Studio Code。

## 六、其他
<span style="color: red; font-weight: bold;">在浏览器中输入一个 URL，然后浏览器从 Internet 上获取数据并显示一个页面？</span>

[现代浏览器 - 深入理解](https://blackpearl.fun/zh/technology/web/inside-look-at-browser)
该网址的第二部分
