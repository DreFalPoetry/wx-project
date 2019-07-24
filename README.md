## 微信小程序开发

##### 小程序文件类型 (web)

1. 样式 【wxss】
2. 骨架 【wxml】
3. 业务【js】
4. 配置【json】

##### 小程序基本结构

1. 全局文件 
   - app.json 
   - app.wxss
   -  app.js
2. Page
   - 【wxml，wxss，js，json（页面配置文件）】
   - component1【wxml，wxss，js，json】
   - component2...
3. Page....

##### 小程序编写规范

1. 页面上元素属性单引号或者双引号，要统一

2. js方法的命名，使用驼峰命名或者下划线命名

3. 文件和文件夹的命名

   ......

##### 布局

- 宏观布局和微观布局

- 在小程序中主要使用flex布局

- ###### flex布局【flexible box -- 弹性盒子】

  【主轴，交叉轴】主轴--取决于flex-direction的取值

  父级元素 display:flex; 

  flex-direction:column;//指定元素垂直或者水平排列

  row-reverse //倒序

  justify-content:flex-start;//【flex-end，center, space-between, space-around】  --元素对齐方向  【指的是主轴的对齐】

  align-items:center;【指的是交叉轴的对齐】 【flex-end flex-start baseline stretch 

  baseline:基线对齐，让子元素中的文字对齐】

  flex-wrap:wrap;
  

##### 页面实现

​	提取公用的组件部分到component文件夹下

​	页面设计尺寸  750 * 1334	页面样式设置rpx为单位 【可以跟随屏幕尺寸变化而变大或变	小】

##### 页面的组件化

	1. 电影页面【】

##### 数据来源



##### 页面的生命周期

onload -- 页面加载 【调用接口获取数据信息】【正确使用promise】

##### 组件的生命周期函数



##### 封装网络请求方法

​	



​	

