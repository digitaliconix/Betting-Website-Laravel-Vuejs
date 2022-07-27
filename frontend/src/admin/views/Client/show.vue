<template>
    <div v-if="show">
        <b-card title="Client Information">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Client</th>
                    <th scope="col">Details</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{{clientData.name}}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{{clientData.email}}</td>
                    </tr>
                    <tr>
                        <td>Wallet (Coins)</td>
                        <td>{{clientData.wallet}}</td>
                    </tr>
                    <tr>
                        <td>Joined Date</td>
                        <td>{{clientData.created_at | formatDate}}</td>
                    </tr>
                </tbody>
            </table>
        </b-card>


        <b-card title="Client Packages Bought">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Package</th>
                    <th scope="col">Price</th>
                    <th scope="col">Coins</th>
                    <th scope="col">Buy Date</th>
                    <th scope="col">Transaction Id</th>
                </tr>
                </thead>
                <tbody>
                <template v-if="clientData.package_orders.length > 0">
                    <tr v-for="(item,index) in clientData.package_orders">
                        <th scope="row">{{index+1}}</th>
                        <td>{{item.package.title}}</td>
                        <td>$ {{item.package.price}}</td>
                        <td>{{item.package.coins}}</td>
                        <td>{{item.created_at | formatDate}}</td>
                        <td>{{item.paypal_response ? item.paypal_response.id : ''}}</td>
                    </tr>
                </template>
                <template v-else>
                    <tr>
                        <td colspan="7" class="text-center">
                            No packages bought
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </b-card>

        <b-card title="Client Bettings">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Competition</th>
                    <th scope="col">Selected Team</th>
                    <th scope="col">Bet Coins</th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Status</th>
                    <th scope="col">Result</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <template v-if="clientData.bettings.length > 0">
                    <tr v-for="(item,index) in clientData.bettings">
                        <th scope="row">{{index+1}}</th>
                        <td>{{item.competition.title}}</td>
                        <td>{{item.team.title}}</td>
                        <td>{{item.bet_coins}}</td>
                        <td>{{item.created_at | formatDate}}</td>
                        <td>{{item.status == 1 ?'Confirm':'Pending'}}</td>
                        <td>{{item.bet_status === null ? 'No Result Yet' : item.bet_status == 0 ? 'Lost':'Won' }}</td>
                        <td><feather-icon :id="`bettings-row-${item.id}-edit-icon`"
                                          icon="EyeIcon"
                                          class="cursor-pointer"
                                          size="16"
                                          @click="$router.push(`/client-bettings/${item.id}`)"/></td>
                    </tr>
                </template>
                <template v-else>
                    <tr>
                        <td colspan="7" class="text-center">
                            No bettings
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </b-card>
        <b-card title="Client Order">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Order Number</th>
                    <th scope="col">Product</th>
                    <th scope="col">Product Coins</th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <template v-if="clientData.orders.length > 0">
                    <tr v-for="(item,index) in clientData.orders">
                        <th scope="row">{{index+1}}</th>
                        <td>{{item.order_number}}</td>
                        <td>{{item.product.title}}</td>
                        <td>{{item.product.unit_price}}</td>
                        <td>{{item.created_at | formatDate}}</td>
                        <td>{{item.status == 1 ?'Confirm':'Failed'}}</td>
                        <td><feather-icon :id="`order-row-${item.id}-edit-icon`"
                                          icon="EyeIcon"
                                          class="cursor-pointer"
                                          size="16"
                                          @click="$router.push(`/client-orders/${item.id}`)"/></td>
                    </tr>
                </template>
                <template v-else>
                    <tr>
                        <td colspan="7" class="text-center">
                            No pacakges bought
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {BCard, BRow, BCol, BCardText, BLink} from 'bootstrap-vue'
    import {get, post} from '@/libs/api.js'
    export default {
        name: "show",
        components: {
            BCard,
            BCardText,
            BLink,
            BRow,
            BCol,
        },
        created(){
            get(`/admin/api/clients/${this.$route.params.id}`).then((res)=>{
                if(res.data.data){
                    Vue.set(this.$data, 'clientData', res.data.data);
                    this.show = true;
                }
            })
        },
        data(){
            return {
                show : false,
                clientData: null
            }
        }

    }
</script>

<style scoped>

</style>
