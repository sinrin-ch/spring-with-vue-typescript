<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    export default Vue.extend({
        name: 'App'
    })
</script>
