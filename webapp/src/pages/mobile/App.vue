<template>
    <div>
        <mt-header fixed>
            <a href="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </a>
        </mt-header>
        <mt-cell-swipe
                v-for="n in 3"
                :right="rightButtons"
                title="n"
                :key="n"></mt-cell-swipe>
        <!-- tab-container -->
        <mt-tab-container v-model="selected" class="container">
            <mt-tab-container-item id="1">
                <mt-cell-swipe
                        title="标题文字"
                        :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('提示','delete')
    }
  ]"></mt-cell-swipe>
                <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <mt-cell-swipe
                        v-for="n in 10"
                        :right="rightButtons"
                        title="n"
                        :key="n"></mt-cell-swipe>
            </mt-tab-container-item>
        </mt-tab-container>

        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="1">
                <img slot="icon" src="../m2/assets/logo.png">
                外卖
            </mt-tab-item>
            <mt-tab-item id="2">
                <img slot="icon" src="../m2/assets/logo.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="3">
                <img slot="icon" src="../m2/assets/logo.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="4">
                <img slot="icon" src="../m2/assets/logo.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script lang="js">
    import Vue from 'vue';
    // import {Tabbar, TabItem, Header, Button, TabContainer, TabContainerItem, Cell, CellSwipe} from 'mint-ui';
    //
    // Vue.component(Header.name, Header);
    // Vue.component(Tabbar.name, Tabbar);
    // Vue.component(TabItem.name, TabItem);
    // Vue.component(Button.name, Button);
    // Vue.component(TabContainer.name, TabContainer);
    // Vue.component(TabContainerItem.name, TabContainerItem);
    // Vue.component(Cell.name, Cell);
    // Vue.component(CellSwipe.name, CellSwipe);

    export default Vue.extend({
        name: "App",
        data() {
            return {
                selected: '2',
                rightButtons: [
                    {
                        content: 'Mark as Unread',
                        style: {background: 'lightgray', color: '#fff'}
                    },
                    {
                        content: 'Delete',
                        style: {background: 'red', color: '#fff'},
                        handler: () => this.$messagebox('delete')
                    }
                ]

            }
        }
    });
</script>

<style scoped>
    .container {
        padding-top: 31px;
        padding-bottom: 46px;
    }
</style>