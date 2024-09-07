# Vue 3 + Vite

如果通过element-plus的自动导入来进行导入的话，需要将自定义主题的css链接放入vite当中，但是如果你在组件当中使用ElMessage的话那么你的自定义主题将消失，如果你在组建当中引入import {ElMessage} from 'element-plus' 的话那么自定义样式就会成功。

目前在app当中我是用了这个ElMessage，由于没有进行引入所以自定义样式失效。但是ElMessgae是可以使用的。

目前是用的是pnpm 9.5.0  node版本是20.14.0


If importing through automatic import of element plus, you need to put the CSS link of the custom theme into Vite. However, if you use ElMessage in the component, your custom theme will disappear. If you introduce import {ElMessage} from 'element plus' in the build, the custom style will be successful.

I am currently using ElMessage in the app, but the custom style is invalid because it has not been introduced. But ElMessgae can be used.

Currently using pnpm 9.5.0 node version and 20.14.0
