<template>
    <div>
        <b-card title="Client Bettings">
            <panel ref="panel" :url-api="urlApi" :columns="columns" :resource="resource">
                <div slot="action" slot-scope="props" class="text-nowrap">
                    <feather-icon :id="`user-row-${props.item.id}-edit-icon`"
                                  icon="EyeIcon"
                                  class="cursor-pointer"
                                  size="16"
                                  @click="edit(props.item.id)"
                    />
                </div>
                <div slot="custom_1" slot-scope="props" class="text-wrap">
                    <router-link :to="{path:`/clients/${props.item.client.id}`}"><span>{{props.item.client.name}}</span>
                    </router-link>
                </div>
            </panel>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {BCard, BRow, BCol, BCardText, BLink, BButton, BTooltip, BModal, VBModal, BFormGroup} from 'bootstrap-vue'
    import Panel from "@/components/Table/Panel";
    import ToastificationContent from "@core/components/toastification/ToastificationContent";
    import {get, post} from '@/libs/api.js'
    import Ripple from "vue-ripple-directive";
    import TagInput from "@/components/Form/TagInput";
    import {form} from "@/libs/mixins";

    export default {
        components: {
            BFormGroup,
            BModal,
            BCard,
            BCardText,
            BLink,
            BButton,
            BRow,
            BCol,
            BTooltip,
            Panel,
            TagInput
        },
        directives: {
            'b-modal': VBModal,
            Ripple
        },
        name: "Index",
        mixins: [form],
        data() {
            return {
                model: null,
                urlApi: "/admin/api/client_bettings",
                resource: "/client-bettings",
                columns: [
                    {
                        label: 'ID',
                        field: 'id',
                    },
                    {
                        custom: true,
                        label: 'Client Name',
                        field: 'custom_1',
                    },
                    {
                        label: 'Competition',
                        displayText: 'competition',
                        field: 'title',
                    },
                    {
                        label: 'Selected Team',
                        displayText: 'team',
                        field: 'title',
                    },
                    {
                        label: 'Bet Coins',
                        field: 'bet_coins',
                    },
                    {
                        label: 'Date Added',
                        field: 'created_at',
                        format: 'formatDate'
                    },
                    {
                        label: 'Action',
                        field: 'action',
                        action: true
                    },
                ],
            }
        },
        methods: {
            edit(id) {
                this.$router.push(`${this.resource}/${id}`)
            },
        },
    }
</script>

<style scoped>

</style>
