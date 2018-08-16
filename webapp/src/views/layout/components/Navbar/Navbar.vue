<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <breadcrumb></breadcrumb>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link class="inlineBlock" to="/">
                    <el-dropdown-item>
                        Home
                    </el-dropdown-item>
                </router-link>
                <el-dropdown-item divided>
                    <span @click="logout" style="display:block;">LogOut</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script lang="ts">
    /**
     * 顶部导航栏,包含了一个汉堡,一条面包屑,和右边一个下拉菜单
     */
    import Vue from 'vue';
    import {mapGetters, mapActions} from 'vuex';
    import Breadcrumb from './Breadcrumb/Breadcrumb.vue';
    import Hamburger from './Hamburger/Hamburger.vue';
    // import {dispatches} from '@/store/modules/app';

    export default Vue.extend({
        name: "Navbar",
        components: {
            Breadcrumb,
            Hamburger
        },
        directives: {},
        filters: {},
        mixins: [],
        props: {},
        data() {
            return {};
        },
        computed: {
            ...mapGetters(['avatar', 'sidebar'])
        },
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
        methods: {
            logout() {

            },
            ...mapActions(['toggleSideBar'])
        },
        beforeRouteEnter(to, from, next) {
        },
        beforeRouteUpdate(to, from, next) {
        },
        beforeRouteLeave(to, from, next) {
        },
    });
</script>

<style lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .screenfull {
            position: absolute;
            right: 90px;
            top: 16px;
            color: red;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>
