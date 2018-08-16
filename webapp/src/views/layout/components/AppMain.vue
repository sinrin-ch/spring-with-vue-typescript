<template>
    <section class="app-main">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "AppMain",
        components: {},
        directives: {},
        filters: {},
        mixins: [],
        props: {},
        data() {
            return {};
        },
        computed: {},
        watch: {},
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        beforeUpdate() {
        },
        updated() {
        },
        activated() {
        },
        deactivated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        },
        methods: {},
        beforeRouteEnter(to, from, next) {
        },
        beforeRouteUpdate(to, from, next) {
        },
        beforeRouteLeave(to, from, next) {
        },
    });
</script>

<style scoped>
    .app-main {
        /*50 = navbar  */
        min-height: calc(100vh - 50px);
        position: relative;
        overflow: hidden;
    }
</style>
