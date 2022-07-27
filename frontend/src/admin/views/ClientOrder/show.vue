<template>
    <div v-if="show">
        <b-card title="">
            <b-row>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th colspan="2" class="text-center" scope="col">Order Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope="row">Order Number</td>
                        <td>{{orderData.order_number}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Order Date</td>
                        <td>{{orderData.created_at}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Product Name</td>
                        <td>{{orderData.product.title}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Product Coin</td>
                        <td>{{orderData.product.unit_price}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Name</td>
                        <td>{{orderData.name}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Email</td>
                        <td>{{orderData.email}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Phone</td>
                        <td>{{orderData.phone}}</td>
                    </tr>
                    <tr>
                        <td scope="row">City</td>
                        <td>{{orderData.city}}</td>
                    </tr>
                    <tr>
                        <td scope="row">State</td>
                        <td>{{orderData.state}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Country</td>
                        <td>{{orderData.country}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Zipcode</td>
                        <td>{{orderData.zipcode}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Shipping Address</td>
                        <td>{{orderData.address}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Additional Information</td>
                        <td>{{orderData.additional_info}}</td>
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
                        :to="{name: 'view-client-orders'}"
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
        created(){
            get(`/admin/api/client_orders/${this.$route.params.id}`).then((res)=>{
                if(res.data.data){
                    Vue.set(this.$data, 'orderData', res.data.data);
                    this.show = true;
                }
            })
        },
        data(){
            return {
                show : false,
                orderData: null
            }
        }

    }
</script>

<style scoped>

</style>
