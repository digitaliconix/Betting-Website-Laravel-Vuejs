<template>
    <div>
        <b-card>
            <b-row>
                <b-col cols="6">
                    <h3>NBA Teams</h3>
                </b-col>
                <b-col cols="6" class="text-right">
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        align="right"
                        class="mr-1 mb-1"
                        :to="{path:'/teams/create?game_category=1'}"
                    >
                        Create Team
                    </b-button>
                </b-col>
            </b-row>
            <panel ref="panel" :url-api="urlApi" :columns="columns" :resource="resource">
                <div slot="custom" slot-scope="props" class="text-nowrap">
                    <span>
                        <b-img thumbnail fluid width="60"
                               :src="`/admin/api/attachment/team/${props.item.thumbnail}`"/>
                        {{props.item.title}}
                    </span>
                </div>
                <div slot="action" slot-scope="props" class="text-nowrap">
                    <feather-icon
                        :id="`user-row-${props.item.id}-edit-icon`"
                        icon="EditIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="edit(props.item.id)"
                    />
                    <feather-icon
                        :id="`user-row-${props.item.id}-delete-icon`"
                        icon="TrashIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="deleteBlog(props.item.id)"
                    />
                </div>
            </panel>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {
        BCard,
        BRow,
        BCol,
        BCardText,
        BLink,
        BButton,
        BTooltip,
        BModal,
        VBModal,
        BFormGroup,
        BImg
    } from 'bootstrap-vue'
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
            TagInput,
            BImg
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
                urlApi: "/admin/api/teams?game_category=1",
                resource: "/teams",
                columns: [
                    {
                        custom: true,
                        label: 'Title',
                        field: 'custom',
                    },
                    {
                        label: 'Game Category',
                        displayText: 'game_category',
                        field: 'title',
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
                ],
            }
        },
        methods: {
            edit(id) {
                this.$router.push(`${this.resource}/${id}/edit`)
            },
            deleteBlog(id) {

            }
        },
    }
</script>

<style scoped>

</style>
