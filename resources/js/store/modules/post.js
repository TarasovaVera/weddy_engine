//import { truncate } from "fs";

export default {
    actions: {
        async fetchPosts(ctx, limit = 3){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit='+limit);
            const posts = await res.json();
            ctx.commit('updatePosts', posts);
        }
    },
    mutations: {
        updatePosts(state, posts){    
            state.posts = posts 
        }
    },
    state: {
        posts: [],
        post: ''
    },
    getters: {
        allPosts(state){
            return state.posts
        },
        getPostById(state){
            return (id) => state.posts.filter(p => {
                return p.id === id
            })
        }
    },
    }