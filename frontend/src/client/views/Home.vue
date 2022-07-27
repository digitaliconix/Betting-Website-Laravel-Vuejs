<template>
    <div v-if="show">
        <b-card-actions background-color="#cae0f7" :action-collapse="true" title="Help Request Statistics">
            <b-row>
                <b-col v-for="(item,index) in model.help_requests" :key="index"
                       lg="3"
                >
                    <statistic-card-vertical
                        color="success"
                        icon="UsersIcon"
                        :statistic="item.hr_count"
                        :statistic-title="item.title"
                    />
                </b-col>
            </b-row>
        </b-card-actions>

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
            get('/client/api/dashboard').then(res=>{
                Vue.set(this.$data,'model', res.data.data);
                this.show = true;
            });
        }
    }
</script>

<style>

</style>
