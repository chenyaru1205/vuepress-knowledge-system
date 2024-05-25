# JS
## 一、组成
![Image](/vuepress-knowledge-system/images/knowledge-system/05/1.png)

## 二、BOM浏览器对象模型（window对象）
![Image](/vuepress-knowledge-system/images/knowledge-system/05/2.png)

遗留困惑点：
1、moveTo、moveBy 同 resizeTo、resizeBy的区别

## 三、DOM页面文档对象模型
1998年DOM1级规范，成为W3C的推荐标准，为基本的文档结构及查询提供了接口
DOM将文档（XML/HTML文档）页面形象地映射成一个<span style="color: red;">有层次的节点树结构（对象即节点）</span>，并提供API给ES来操作这个节点树，进而改变底层文档的外观和结构。简而言之，它会将web页面和脚本或程序语言连接起来。

<span style="color: red; font-weight: bold">注意：</span> DOM操作往往是<span style="color: red;">js开销最大的部分</span>，尽量<span style="color: red;">减少DOM操作</span>

![Image](/vuepress-knowledge-system/images/knowledge-system/05/3.png)

文档的任何东西都可以看成节点，如：文档节点，元素节点、属性节点、文本节点、注释节点，共有12种类型的节点。

**DOM对象：** doucument对象、element对象、node对象...

在浏览器中，document是HTMLDocument的一个实例，表示整个HTML页面

<span style="color: red; font-weight: bold">困惑点1：element对象和node对象有什么区别？document.getElementById("id")取到的到底是element对象？还是node对象？</span>

=> 
node节点是DOM层次结构中的任何类型（文档节点，元素节点、属性节点、文本节点、注释节点等等）的对象的通用名称 。**Element类继承Node类，也就是Element是Node多种类型中的一种**。另外，Element也拓展了Node，Element拥有id、class、children等属性。

故，`document.getElementById("id")`取到的即是element对象，也是node对象。

**children是Element的属性（返回HTMLCollection），childNodes是Node的属性（返回NodeList）**

<span style="color: red; font-weight: bold">困惑点2：HTMLDocument、HTMLElement、HTMLCollection、NodeList的区别？</span>

HTMLxxxxx 都是在Document的基础上做HTML拓展

（1）HTMLDocument接口，提供了对HTML的访问，是对Document的接口进行拓展，定义HTML专用的属性和方法，很多属性和方法都是HTMLCollection对象。

（2）HTMLCollection接口，表示HTML元素的集合，提供了可以遍历列表的方法和属性。直接通过索引号或名称获取指定的HTMLCollection对象，或者通过item(索引号)、namedItem(名称)。

（3）HTMLElement对象，表示HTML中的一个元素，继承了Node对象和Element对象的标准方法。

（4）NodeList对象，表示一个有顺序的节点列表，直接通过索引号获取指定位置的节点，或者通过item(索引号)。节点列表是实时更新的。

### 1、DOM发展史
![Image](/vuepress-knowledge-system/images/knowledge-system/05/4.png)

### 2、文档类型发展史
![Image](/vuepress-knowledge-system/images/knowledge-system/05/5.png)

### 3、渲染过程
从浏览器输入url，到页面呈现，这个加载过程就是：HTML标签解析并构建成DOM节点树，样式解析生成CSSOM树，合并DOM节点树和CSSOM树生成render渲染树，布局与绘制 

**具体如何解析呢？** 主要依靠 <span style="color: red;">渲染引擎</span>，把CSS、HTML、图片，渲染到浏览器显示。

![Image](/vuepress-knowledge-system/images/knowledge-system/05/6.png)

**什么是domReady？** 就是页面上的HTML标签全部转为DOM节点时，就称为domReady。

window.onload是所有元素、资源加载全部加载完成才会触发。这就造成了，当页面要加载大量js、资源的这个时间阶段，页面的操作是无效的，用户体验非常的不好。

w3c新增了DOMContentLoaded事件，就是在domReady后就开始解析JS。

其他：
1、浏览器解析的顺序时从上到下，从左到右，单线程。但是如果遇到script标签或者src href属性时引用外部资源，就要区别对待，就是会阻塞了：等外部资源加载完成，执行里面的脚本，才会解析下一个标签
2、iframe如果是静态资源，不会造成阻塞；如果是有加载外部资源，会引起HTTP请求，HTTP请求是有限的，会发生资源竞争，导致页面加载慢
3、回流reFlow与重绘rePaint

### 4、DOM知识体系
![Image](/vuepress-knowledge-system/images/knowledge-system/05/7.png)
注意点
