import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
import './assets/style.css'
import App from './App.vue'

const router = createRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/artifact/:id',
            name: 'Artifact',
            component: () => import('./views/Artifact.vue')
        },
        // {
        //     path: "/artifact/*",
        //     name: "NotFound",
        //     component: () => import('./views/NotFound.vue')
        // }

    ],
    scrollBehavior(to, from, savedPosition) {
        // let position = { x: 0, y: 0 }
        if (to.hash) {
            router.push("/")
            return {
                el: to.hash,
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})

const app = createApp(App)

app.use(router)

app.use(MotionPlugin)

// app.mount('#app')
router.isReady().then(() => {
    app.mount('#app')
})

