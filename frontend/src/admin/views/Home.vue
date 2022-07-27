<template>
    <div>
        <b-card title="Dashboard">

        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { get } from "@/libs/api";
    import {
        BRow,
        BCol,
        BCard,
        BCardText,
        BLink,
        BCardHeader,
        BCardTitle,
        BCardBody,
        BMediaBody,
        BMedia,
        BMediaAside,
        BAvatar,
        BDropdown,
        BDropdownItem
    } from 'bootstrap-vue'
    import StatisticCardVertical from "@core/components/statistics-cards/StatisticCardVertical";
    import BCardActions from "@core/components/b-card-actions/BCardActions";


    export default {
        components: {
            BCardActions,
            StatisticCardVertical,
            BRow,
            BCol,
            BCard,
            BCardText,
            BLink,
            BCardHeader,
            BCardTitle,
            BCardBody,
            BMediaBody,
            BMedia,
            BMediaAside,
            BAvatar,
            BDropdown,
            BDropdownItem,
        },
        data(){
            return {
                model : {},
                show: false
            }
        },
        created() {
            // get('/admin/api/dashboard').then(res=>{
            //     Vue.set(this.$data,'model', res.data.data);
            //     this.show = true;
            // });
        }
    }
</script>

<style>

</style>
