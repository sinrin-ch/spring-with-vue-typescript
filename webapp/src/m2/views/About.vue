<template>
    <div class="about">
        <h1>{{msg}}</h1>
    </div>
</template>
<script lang="ts">

    import Vue from 'vue';
    import axios from 'axios';

    export default Vue.extend({
        data() {
            return {msg: ''};
        },
        created() {
            axios.get('/api/msg')
                .then(({data}) => {
                    console.log(data);
                    this.msg = data;
                });
        },
    });

</script>