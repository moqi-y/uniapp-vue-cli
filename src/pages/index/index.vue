<template>
  <wd-navbar title="测试标题"></wd-navbar>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <view class="title">{{ title }}</view>

      <wd-button icon="jump" @click="goToSettingPage">跳转到设置页面</wd-button>

      <wd-text type="warning" :text="myText"></wd-text>
    </view>
  </view>
</template>

<script setup>
import { onShow } from '@dcloudio/uni-app';
import { ref } from 'vue'

import { useRouter } from 'uni-mini-router';  // 引入uni-mini-router路由
let router = useRouter() // 获取路由实例

const title = ref('Hello word')
const myText = ref("设置页面是一个非TabBar页面，此处使用uni-mini-router路由进行跳转示例")

onShow(() => {
  console.log('onShow')
})

// 跳转到设置页面
const goToSettingPage = () => {
  console.log("触发了跳转");
  // 带查询参数跳转，结果是 /user?username=张三
  router.push({ path: 'pages/setting/index', query: { username: '张三' } })
}

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
  margin-bottom: 100rpx;
}
</style>
