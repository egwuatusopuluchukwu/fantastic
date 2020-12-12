import Vue from 'vue'
import Router from 'vue-router'

// import Blog from './components/Blog.vue'
import Home from './components/Home.vue'


Vue.use(Router)

const router = new Router ({
    mode: 'history',
    routes: [
        {path: '/', 
        name: 'home',
        components:Home
        },
        // {path: '/blog', 
        // name: 'blog',
        // components:Blog
        // },
    ]
})
export default router