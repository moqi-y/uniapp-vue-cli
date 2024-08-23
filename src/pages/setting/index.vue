<template>
    <view>
        设置页面
    </view>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app' // 引入onLoad方法

onLoad((option) => {
    console.log("onLoad中获取路由传参:",option);
    if (option && option.username) {
        const username = option.username
        console.log("路由获取到的参数：",username)
    }
})

</script>