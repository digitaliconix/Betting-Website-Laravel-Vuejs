<template>
    <div>
        <b-card title="Roles">
            <b-row>
                <b-col cols="12">
                    <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            type="submit"
                            variant="primary"
                            align="right"
                            class="mr-1 mb-1"
                            :to="{name:'create-roles'}"
                        >
                            Create
                        </b-button>

                </b-col>
            </b-row>
            <panel :url-api="urlApi" :columns="columns" :resource="resource" :sort-enabled="panel_sort_enabled">
                <div slot="action" slot-scope="props" class="text-nowrap">
                    <feather-icon
                        :id="`role-row-${props.item.id}-edit-icon`"
                        icon="EditIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="edit(props.item.id)"
                    />
                    <b-tooltip
                        :target="`role-row-${props.item.id}-edit-icon`"
                        title="Edit Role"
                        class="cursor-pointer"
                    />
                    <feather-icon
                        :id="`role-row-${props.item.id}-delete-icon`"
                        icon="TrashIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="deleteRole(props.item.id)"
                    />
                    <b-tooltip
                        :target="`role-row-${props.item.id}-delete-icon`"
                        title="Delete Role"
                        class="cursor-pointer"
                    />
                </div>
            </panel>
        </b-card>
    </div>
</template>

<script>
    import {BCard, BRow, BCol, BCardText, BLink, BButton, BTooltip} from 'bootstrap-vue'
    import Panel from "@/components/Table/Panel";
    import ToastificationContent from "@core/components/toastification/ToastificationContent";
    import {get} from '@/libs/api.js'
    import Ripple from "vue-ripple-directive";

    export default {
        components: {
            BCard,
            BCardText,
            BLink,
            BButton,
            BRow,
            BCol,
            BTooltip,
            Panel
        },
        directives: {
            Ripple
        },
        name: "Index",
        data() {
            return {
                model: null,
                urlApi: "/admin/api/role_permission",
                resource: "/roles",
                panel_sort_enabled : true,
                columns: [
                    {
                        label: 'ID',
                        field: 'id',
                    },
                    {
                        label: 'Role',
                        field: 'name',
                    },
                    {
                        label: 'Created At',
                        field: 'created_at',
                        format: 'formatDate'
                    },

                    {
                        label: 'Action',
                        field: 'action',
                        action: true
                    }
                ]
            }
        },
        methods: {
            edit(id){
                this.$router.push(`${this.resource}/${id}/edit`)
            },
            deleteRole(id){
                console.log(id)
            }
        },
    }
</script>

<style scoped>

</style>
