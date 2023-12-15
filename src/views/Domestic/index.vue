<template>
国内
<el-button @click="userInfo">获取信息</el-button>
</template>


<script setup>
import { getUserInfo } from '../../api/index'
import { ElMessage } from 'element-plus'

const userInfo = async () => {
    const res = await getUserInfo({
        username: '123'
    })
    ElMessage({
        message: res.message,
        type: 'success'
    })
}
</script>

<style scoped></style>