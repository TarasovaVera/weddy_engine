<template>
    <div>
        <div class="post" v-for="post in allPosts" v-bind:key="post.id">
            <b-card
                :title="post.title"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >     
            <b-card-text>{{post.body | truncate(50, '...')}}</b-card-text>
            <b-button @click="fullPost(post.id)"  variant="primary">More</b-button>
            </b-card>
        </div>
    </div>
</template>


<script>
// import store from '../store/index'
import {mapGetters, mapActions} from 'vuex'
export default {
    computed:   mapGetters(['allPosts']),
    methods: {
                fullPost(id){
                     this.$router.push({name:'Details', params:{id:id}})
                },
                ...mapActions(['fetchPosts'])
            },
    async mounted() {
        this.fetchPosts()
                }
    
}
</script>
<style>
.post{
    border: 5px solid #0000;
    border-radius: 5px;
    margin-bottom: 1rem;
}
</style>
