<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Hello</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "App"
    });
</script>

<style scoped lang="less">
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>