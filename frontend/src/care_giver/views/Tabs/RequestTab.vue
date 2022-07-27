<template>
    <div>
        <panel :url-api="urlApi" :columns="columns" :resource="resource"
               :additional-params="{status: status}" ref="panel"
               :sort-enabled="panel_sort_enabled">
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
                </template>
                <template v-if="props.item.status_id < 3">
                    <feather-icon
                        :id="`help-request-row-${props.item.id}-update-icon`"
                        icon="EditIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="updateStatus(props.item)"
                    />
                    <b-tooltip
                        :target="`help-request-row-${props.item.id}-update-icon`"
                        title="Update Status"
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
            </div>
        </panel>
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
    import {BButton, BCard, BCardText, BCol, BLink, BModal, BRow, BTooltip, VBModal} from "bootstrap-vue";
    import Panel from "@/components/Table/Panel";
    import Ripple from "vue-ripple-directive";
    import {byMethod} from "@/libs/api";

    export default {
        name: "RequestTab",
        components: {
            BCard,
            BModal,
            BCardText,
            BLink,
            BButton,
            BRow,
            BCol,
            BTooltip,
            Panel
        },
        directives: {
            'b-modal': VBModal,
            Ripple
        },
        props: {
            status: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                model: {
                    message: '',
                },
                messageModal: false,
                urlApi: "/care_giver/api/help_requests",
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
                    {
                        label: 'User',
                        displayText: 'user',
                        field: 'name',
                    },
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
            updateStatus(item) {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Confirm',
                    customClass: {
                        confirmButton: 'btn btn-primary',
                        cancelButton: 'btn btn-outline-danger ml-1',
                    },
                    buttonsStyling: false,
                }).then(result => {
                    if (result.value) {
                        var form = {
                            id: item.id,
                            status_id: this.status+1,
                        }
                        byMethod('POST',this.urlApi, form).then(res => {
                            if(res.data.saved){
                                this.$swal({
                                    icon: 'success',
                                    title: 'Success!',
                                    text: 'Help request status updated successfully.',
                                    customClass: {
                                        confirmButton: 'btn btn-success',
                                    },
                                })
                            }
                            this.$refs.panel.reload();
                        })
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>
