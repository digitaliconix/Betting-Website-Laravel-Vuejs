<template>
    <div>
        <b-card title="Inquiries">
            <panel ref="panel" :url-api="urlApi" :columns="columns" :resource="resource">

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
                urlApi: "/admin/api/inquiries",
                resource: "/inquiries",
                columns: [
                    {
                        label: 'ID',
                        field: 'id',
                    },
                    {
                        label: 'Name',
                        field: 'name',
                    },
                    {
                        label: 'Email',
                        field: 'email',
                    },
                    {
                        label: 'Phone No',
                        field: 'mobile_no',
                    },
                    {
                        label: 'Message',
                        field: 'message',
                    },
                    {
                        label: 'Created At',
                        field: 'created_at',
                        format: 'formatDate'
                    },
                ],
            }
        },
        methods: {},
    }
</script>

<style scoped>

</style>
