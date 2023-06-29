# interview-assignments

使用了自己实现的 vite 插件 vite-plugin-svgs-react 将 svg 文件导入为 react 组件。

工具类上实现了 useMouseHover hook，监听鼠标是否在元素上，返回 ref 和布尔值数组。、

实现上借鉴了 Antd 的 JSON 配置方式，可以通过配置来自定义组件的属性。

键盘拦截已经实现，但是键盘跳转选项没有实现，初步思路是将配置建立一个关系映射图，然后保存当前 key。

正在尝试拆分出可复用的逻辑。
