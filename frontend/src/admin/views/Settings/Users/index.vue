<template>
    <div>
        <b-card title="Users">
            <b-row>
                <b-col cols="12">
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        align="right"
                        class="mr-1 mb-1"
                        :to="{name:'create-users'}"
                    >
                        Create
                    </b-button>

                </b-col>
            </b-row>
            <panel ref="panel" :url-api="urlApi" :columns="columns" :resource="resource">
                <div slot="action" slot-scope="props" class="text-nowrap">
                    <feather-icon
                        :id="`user-row-${props.item.id}-edit-icon`"
                        icon="EditIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="edit(props.item.id)"
                    />
                    <b-tooltip
                        :target="`user-row-${props.item.id}-edit-icon`"
                        title="Edit User"
                        class="cursor-pointer"
                    />
                    <feather-icon
                        :id="`user-row-${props.item.id}-delete-icon`"
                        icon="TrashIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="deleteUser(props.item.id)"
                    />
                    <b-tooltip
                        :target="`user-row-${props.item.id}-delete-icon`"
                        title="Delete User"
                        class="cursor-pointer"
                    />
                    <feather-icon
                        :id="`user-row-${props.item.id}-role-icon`"
                        icon="ShieldIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="assignRole(props.item)"
                    />
                    <b-tooltip
                        :target="`user-row-${props.item.id}-role-icon`"
                        title="Assign Role"
                        class="cursor-pointer"
                    />
                </div>
            </panel>
        </b-card>
        <b-modal
            v-model="assignRoleModal"
            id="modal-prevent-closing"
            title="Assign Roles"
            ok-title="Save"
            cancel-variant="outline-secondary"
            @hidden="resetModal"
            @ok="handleOk">

            <b-form-group>
                <tag-input :positionRelative="true" keyIndex="id" :removable="true"
                                    :multiple="true" :value="user_data.roles"
                                    resource="/admin/api/get_roles" column="name" name="name"
                                    @input="value => {user_data.roles = value }">
                </tag-input>
            </b-form-group>

        </b-modal>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {BCard, BRow, BCol, BCardText, BLink, BButton, BTooltip,BModal,VBModal,BFormGroup} from 'bootstrap-vue'
    import Panel from "@/components/Table/Panel";
    import ToastificationContent from "@core/components/toastification/ToastificationContent";
    import {get,post} from '@/libs/api.js'
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
        mixins:[form],
        data() {
            return {
                model: null,
                urlApi: "/admin/api/users",
                resource: "/users",
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
                        label:'Roles',
                        field: 'name',
                        displayText:'roles',
                        multiple:true
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
                assignRoleModal:false,
                user_data:{},
                message:'The user role updated successfully',
            }
        },
        methods: {
            handleOk(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                // Trigger submit handler
                this.updateRoles()
            },
            updateRoles(){
                post('/admin/api/assign_user_role',this.user_data).then(res=>{
                    if (res.data.saved){
                        this.resetModal()
                        Vue.set(this.$data,'assignRoleModal',false)
                        this.success();
                        this.$refs.panel.reload();
                        // this.reload()
                    }
                })
            },
            resetModal(){
                this.user_data = {}
            },
            assignRole(data){
                this.form = {}
                var roles = [];
                for(let i=0;i<data.roles.length;i++){
                    roles.push(data.roles[i])
                }
                this.user_data = {
                    id:data.id,
                    roles:roles
                };
                Vue.set(this.$data,'assignRoleModal',true)
            },
            edit(id){
                this.$router.push(`${this.resource}/${id}/edit`)
            },
            deleteUser(id){
                console.log(id)
            }
        },
    }
</script>

<style scoped>

</style>
