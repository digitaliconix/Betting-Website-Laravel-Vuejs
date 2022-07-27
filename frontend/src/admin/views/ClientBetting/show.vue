<template>
    <div v-if="show">
        <b-card title="">
            <b-row>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th colspan="2" class="text-center" scope="col">Client Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope="row">Name</td>
                        <td>{{bettingData.client.name}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Email</td>
                        <td>{{bettingData.client.email}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Wallet</td>
                        <td>{{bettingData.client.wallet}}</td>
                    </tr>
                    </tbody>
                </table>
            </b-row>
            <b-row>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th colspan="2" class="text-center" scope="col">Betting Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope="row">Competition Title</td>
                        <td>{{bettingData.competition.title}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Selected Team</td>
                        <td>{{bettingData.team.title}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Bet Coins</td>
                        <td>{{bettingData.bet_coins}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Status</td>
                        <td>{{bettingData.status == 1 ? 'Confirm' : 'Pending'}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Result</td>
                        <td>{{bettingData.bet_status === null ?  'No Result Yet' : bettingData.bet_status == 0 ? 'Lost' :'Won'}}</td>
                    </tr>
                    </tbody>
                </table>
            </b-row>
            <b-row class="mt-2">
                <b-col>
                    <b-button
                        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                        type="reset"
                        variant="outline-secondary"
                        :to="{name: 'view-client-bettings'}"
                    >
                        Back
                    </b-button>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {BCard, BRow, BCol, BCardText, BLink, BButton, BTooltip, BModal, VBModal, BFormGroup} from 'bootstrap-vue'
    import {get, post} from '@/libs/api.js'

    export default {
        name: "show",
        components: {
            BCard,
            BCardText,
            BLink,
            BRow,
            BCol,
            BButton
        },
        created() {
            get(`/admin/api/client_bettings/${this.$route.params.id}`).then((res) => {
                if (res.data.data) {
                    Vue.set(this.$data, 'bettingData', res.data.data);
                    this.show = true;
                }
            })
        },
        data() {
            return {
                show: false,
                bettingData: null
            }
        }

    }
</script>

<style scoped>

</style>
