<template>
    <div class="about">
        <span>{{msg}}</span>
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
                }).catch((e)=>{
                    this.msg = e;
            });
        },
    });

</script>