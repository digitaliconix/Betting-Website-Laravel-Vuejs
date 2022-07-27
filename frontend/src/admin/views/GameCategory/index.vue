<template>
    <div>
        <b-card title="Game Categories">
            <panel ref="panel" :url-api="urlApi" :columns="columns" :resource="resource">
                <div slot="custom" slot-scope="props" class="text-nowrap">
                    <span>
                        {{props.item.status == 1 ? 'Active' : 'De-Active'}}
                    </span>
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
                urlApi: "/admin/api/game_categories",
                resource: "/game-categories",
                columns: [
                    {
                        label: 'ID',
                        field: 'id',
                    },
                    {
                        label: 'Title',
                        field: 'title',
                    },
                    {
                        label: 'Slug',
                        field: 'slug',
                    },
                    {
                        label: 'Status',
                        field: 'custom',
                        custom: true,
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
