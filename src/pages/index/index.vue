<template>
  <wd-navbar title="测试标题"></wd-navbar>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      
      <view class="title">{{ title }}</view>
      <wd-button>主要按钮</wd-button>
    </view>
  </view>
</template>

<script setup>
import { onShow } from '@dcloudio/uni-app';
import { ref } from 'vue'
const title = ref('Hello')

onShow(() => {
  console.log('onShow')
})
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
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
