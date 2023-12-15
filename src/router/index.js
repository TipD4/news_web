
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Domestic/index.vue')
        },
        {
            path: '/international',
            component: () => import('../views/International/index.vue')
        },
        {
            path: '/economy',
            component: () => import('../views/Economy/index.vue')
        },
        {
            path: '/sports',
            component: () => import('../views/Sports/index.vue')
        },
        {
            path: '/life',
            component: () => import('../views/Life/index.vue')
        },
        {
            path: '/it',
            component: () => import('../views/IT/index.vue')
        },
        {
            path: '/ename',
            component: () => import('../views/Ename/index.vue')
        },
        {
            path: '/science',
            component: () => import('../views/Science/index.vue')
        }
    ]
})


export default router