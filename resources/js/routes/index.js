import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../components/posts.vue'
import Details from '../components/fullPost.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Posts',
            component: Posts
        },
        {
            path: '/details',
            name: 'Details',
            component: Details
        },
        { path: '*', redirect: "/404" }
    ]
})