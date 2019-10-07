import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
modules: {
    post
},
strict: debug
})