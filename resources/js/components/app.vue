<template>
    <div>
        <h1>
            wedding poratl
        </h1>

        <p>
            <router-link :to="{ name: 'Posts' }">Posts</router-link> |
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {}
</script>