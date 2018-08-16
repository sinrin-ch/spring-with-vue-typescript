<template>
    <div class="app-wrapper" :class="classObj">
        <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script lang="ts">
    // import { Navbar, Sidebar, AppMain } from './components'
    // import ResizeMixin from './mixin/ResizeHandler'
    import Vue from 'vue';
    import Sidebar from './components/Sidebar/Sidebar.vue';
    import Navbar from './components/Navbar/Navbar.vue';
    import AppMain from './components/AppMain.vue';
    import {mapState,mapGetters} from 'vuex';

    export default Vue.extend({
        name: 'layout',
        components: {
            Navbar,     // 顶部导航栏
            Sidebar,  // 侧边栏菜单组件
            AppMain,
        },
        // mixins: [ResizeMixin],
        computed: {
            ...mapGetters(['sidebar', 'device']),
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        },
        methods: {
            handleClickOutside() {
                this.$store.dispatch('closeSideBar', {withoutAnimation: false});
            }
        }
    });
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar {
            position: fixed;
            top: 0;
        }
    }

    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>
