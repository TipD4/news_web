<template>
    <div class="layout-box">
        <div class="header">
            Header
        </div>
        <div class="bodyer">
            <div class="menu">
                <el-menu style="height: calc(100vh - 70px); width: 250px;">
                    <el-menu-item 
                    :index="index" v-for="(item, index) in items"
                    @click="handleClick(item.path)">{{ item.name }}</el-menu-item>
                    
                </el-menu>
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const items = [
    {
        name: '国内',
        path: '/'
    },
    {
        name: '国際',
        path: '/international'
    },
    {
        name: '経済',
        path: '/economy'
    },
    {
        name: 'エンタメ',
        path: '/ename'
    },
    {
        name: 'スポーツ',
        path: '/sports'
    },
    {
        name: 'IT',
        path: '/it'
    },
    {
        name: '科学',
        path: '/science'
    },
    {
        name: 'ライフ',
        path: '/life'
    }
]

const handleClick = (path) => {
    router.push(path)
}
</script>

<style scoped>
.layout-box {
    width: 100vw;
    height: 100vh;
}
.header {
    height: 70px;
    width: 100vw;
    border-bottom: 1px solid #d7d7d7;
}
.bodyer {
    height: calc(100vh - 70px);
    width: 100vw;
    display: flex;
    flex-wrap: nowrap;
}
.menu {
    width: 250px;
    height: calc(100vh - 70px);
    border-right: 1px solid #d7d7d7;
}
.main {
    width: calc(100vw - 250px);
    height: calc(100vh - 70px);
    flex: 1;
}
</style>