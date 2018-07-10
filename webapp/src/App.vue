<template>
    <div>
        <el-button @click="show2 = !show2" icon="el-icon-search">Click Me</el-button>
        <a href="m2/index.html">
            <el-button icon="el-icon-search">Click Me2</el-button>
        </a>

        <div class="transition-box-div">
            <transition name="el-zoom-in-center">
                <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
            </transition>

            <transition name="el-zoom-in-top">
                <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
            </transition>

            <transition name="el-zoom-in-bottom">
                <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Button} from 'element-ui';

    Vue.component(Button.name, Button);

    export default Vue.extend({
        name: "App",
        data: () => ({
            show2: true
        }),
    });
</script>

<style scoped>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }

    .transition-box-div {
        display: flex;
        margin-top: 20px;
        height: 100px;
    }
</style>