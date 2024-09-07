<!--
 * @Author: wuyun 1939716743@qq.com
 * @Date: 2024-09-07 19:26:19
 * @LastEditors: wuyun 1939716743@qq.com
 * @LastEditTime: 2024-09-07 22:10:17
 * @FilePath: \vite-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
// import { ElMessage, ElNotification, ElMessageBox } from 'element-plus'
const promptInfo = ()=>{
  // ElMessage.info('麻了')
  // ElNotification({
  //   title: "提示",
  //   message: "您的会话已过期，请重新登录",
  //   type: "info",
  // });
  ElMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>

<template>
  <el-button type="primary" @click="promptInfo">Primary</el-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
