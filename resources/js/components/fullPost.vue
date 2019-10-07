<template>
    <b-container>
        <b-row>
            <b-col>
                <b-card 
                    :title=posts[0].title
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                <b-card-text>
                    {{posts[0].body}}
                </b-card-text>
                </b-card>                
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import {mapGetters} from 'vuex'
import {$route} from 'vue-router'
export default {
    data(){
        return {
            id: this.$route.params.id,
            posts: []
        }
    },
    computed: {
        ...mapGetters(['getPostById']),
        // ...mapState({
        //     //post: (state) => state.post.posts
        //     post: state => id => state.post.posts[id]
        // })
        
    },
    created() {
            this.posts = this.getPostById(this.id)    
    },
    methods: {
        // getPost(id){
        //     return this.getPostById(id)
        // }
    }
}
</script>