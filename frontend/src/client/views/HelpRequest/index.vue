<template>
    <div>
<!--        <b-card-actions :action-collapse="true" :collapsed="true" title="Filter Search">-->
<!--            <b-row>-->
<!--                <b-col cols="4">-->
<!--                    <b-form-group-->
<!--                        label="Help Type"-->
<!--                        label-for="mc-help-type"-->
<!--                    >-->
<!--                        <x-tag-input :position-relative="true" :value="form.help_type"-->
<!--                                     resource="/client/api/search/help_types" column="title" name="title"-->
<!--                                     @input="onHelpTypeUpdated">-->
<!--                        </x-tag-input>-->
<!--                    </b-form-group>-->
<!--                </b-col>-->
<!--                <b-col cols="4">-->
<!--                    <b-form-group-->
<!--                        label="Help Type Service"-->
<!--                        label-for="mc-help-type-service"-->
<!--                    >-->
<!--                        <x-tag-input :position-relative="true" :value="form.help_type_service"-->
<!--                                     resource="/client/api/search/help_type_services" column="title" name="title"-->
<!--                                     @input="onHelpTypeServiceUpdated">-->
<!--                        </x-tag-input>-->
<!--                    </b-form-group>-->
<!--                </b-col>-->
<!--                <b-col cols="4">-->
<!--                    <b-form-group-->
<!--                        label="Status"-->
<!--                        label-for="mc-status"-->
<!--                    >-->
<!--                        <x-tag-input :position-relative="true" :value="form.status"-->
<!--                                     resource="/client/api/search/help_request_statuses" column="title" name="title"-->
<!--                                     @input="onHelpRequestStatusUpdated">-->
<!--                        </x-tag-input>-->
<!--                    </b-form-group>-->
<!--                </b-col>-->
<!--                <b-col cols="12" class="text-right">-->
<!--                    <b-button-->
<!--                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"-->
<!--                        type="submit"-->
<!--                        variant="primary"-->
<!--                        class="mr-1 mb-1"-->
<!--                        @click="Search"-->
<!--                    >-->
<!--                        Search-->
<!--                    </b-button>-->
<!--                </b-col>-->
<!--            </b-row>-->
<!--        </b-card-actions>-->

        <b-card>
            <b-row>
                <b-col cols="6">
                    <h3>Help Requests</h3>
                </b-col>
                <b-col cols="6" class="text-right">
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        class="mr-1 mb-1"
                        :to="{name:'create-help-requests'}"
                    >
                        Create
                    </b-button>
                </b-col>
            </b-row>

            <panel :url-api="urlApi" :columns="columns" :resource="resource" :sort-enabled="panel_sort_enabled"
                        :additional-params="additionalParams" ref="panel">
                <div slot="action" slot-scope="props" class="text-nowrap">
                    <template v-if="props.item.message">
                        <feather-icon
                            :id="`help-request-row-${props.item.id}-edit-icon`"
                            icon="MessageSquareIcon"
                            class="cursor-pointer"
                            size="16"
                            @click="openMessage(props.item)"
                        />
                        <b-tooltip
                            :target="`help-request-row-${props.item.id}-edit-icon`"
                            title="Show Message"
                            class="cursor-pointer"
                        />
                        <feather-icon v-if="props.item.status_id == 2"
                            :id="`help-request-row-${props.item.id}-message-icon`"
                            icon="MessageCircleIcon"
                            class="cursor-pointer"
                            size="16"
                            @click="goToChat(props.item)"
                        />
                        <b-tooltip
                            :target="`help-request-row-${props.item.id}-message-icon`"
                            title="Chat"
                            class="cursor-pointer"
                        />
                    </template>
                    <template v-else>
                        No Message
                    </template>
                </div>
            </panel>
        </b-card>
        <b-modal
            v-model="messageModal"
            id="modal-prevent-closing"
            title="Detail"
            centered
            ok-only
            ok-title="Close">
            <b-card-text>
                Message : {{model.message}}
            </b-card-text>
        </b-modal>
    </div>
</template>

<script>
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
        BFormInput
    } from 'bootstrap-vue'
    import Panel from "@/components/Table/Panel";
    import ToastificationContent from "@core/components/toastification/ToastificationContent";
    import {get} from '@/libs/api.js'
    import Ripple from "vue-ripple-directive";
    import {form} from "@/libs/mixins";
    import XTagInput from "@/components/Form/TagInput";
    import BCardActions from "@core/components/b-card-actions/BCardActions";
    import Vue from "vue";

    export default {
        components: {
            BCardActions,
            BCard,
            BModal,
            BCardText,
            BLink,
            BButton,
            BRow,
            BCol,
            BTooltip,
            Panel, XTagInput, BFormGroup, BFormInput
        },
        directives: {
            'b-modal': VBModal,
            Ripple
        },
        name: "Index",
        mixins: [form],
        data() {
            return {
                model: {
                    message: '',
                },
                messageModal: false,
                additionalParams: {},
                urlApi: "/client/api/help_requests",
                resource: "/help_requests",
                panel_sort_enabled: true,
                columns: [
                    {
                        label: 'ID',
                        field: 'id',
                    },
                    {
                        label: 'Help Type',
                        displayText: 'help_type',
                        field: 'title',
                    },
                    {
                        label: 'Service Type',
                        displayText: 'help_type_service',
                        field: 'title',
                    },
                    // {
                    //     label: 'User',
                    //     displayText: 'user',
                    //     field: 'name',
                    // },
                    {
                        label: 'Status',
                        displayText: 'status',
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
                ]
            }
        },
        methods: {
            openMessage(item) {
                this.model = item;
                this.messageModal = true;
            },
            goToChat(item) {
                this.$router.push(`/help_request_chat/${item.id}`);
            },
            // onHelpTypeUpdated(e){
            //     Vue.set(this.$data.form,'help_type',e);
            //     Vue.set(this.$data.additionalParams,'help_type_id',e.id);
            // },
            // onHelpTypeServiceUpdated(e){
            //     Vue.set(this.$data.form,'help_type_service',e);
            //     Vue.set(this.$data.additionalParams,'help_type_service_id',e.id);
            // },
            // onHelpRequestStatusUpdated(e){
            //     Vue.set(this.$data.form,'status',e);
            //     Vue.set(this.$data.additionalParams,'status_id',e.id);
            // },
            Search(){
                this.openLoading()
                this.$refs.panel.reload();
                this.closeLoading();
            }
        },
    }
</script>

<style scoped>

</style>
