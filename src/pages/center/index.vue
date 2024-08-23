<template>
    <view>
        <view class="center">
            个人中心
        </view>
    </view>
</template>
<script setup>
import { reactive, ref } from 'vue'

</script>
<style scoped>
.center {
    display: flex;
}

.center__avatar {
    width: 100px;
}

.center__avatar__img {
    width: 100px;
}

.center__nickname {
    margin-left: 20px;
    font-size: 20px;
}

.center__btns {
    margin-top: 20px;
    display: flex;
}

.center__btns__item {
    margin-right: 20px;
    font-size: 16px;
}
</style>