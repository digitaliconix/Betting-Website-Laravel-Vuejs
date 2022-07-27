<template>
    <div v-if="show">
        <b-card :title="$route.meta.mode && $route.meta.mode === 'edit' ? 'Edit Role' : 'Add New Role'">
            <b-row>
                <b-col md="6">
                    <b-form-group
                        label="Role Name"
                        label-for="mc-role-name"
                    >
                        <b-form-input
                            id="mc-role-name"
                            placeholder="Role Name"
                            v-model="form.name"
                        />
                    </b-form-group>
                </b-col>
                <b-col md="12">
                    <b-card title="Permissions">
                        <b-form-checkbox-group
                            v-model="form.permissions"
                            :options="permissions"
                            value-field="name"
                            text-field="name"
                            disabled-field="notEnabled"
                            class="demo-inline-spacing"
                        />
                    </b-card>
                </b-col>
                <b-col>
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        class="mr-1"
                        @click="formSubmitted"
                    >
                        Submit
                    </b-button>
                    <b-button
                        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                        type="reset"
                        variant="outline-secondary"
                        :to="{path:'/roles'}"
                    >
                        Cancel
                    </b-button>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {BCard, BCardText, BLink, BRow, BCol, BFormInput, BFormGroup, BFormCheckboxGroup,BButton} from 'bootstrap-vue'
    import {form} from "@/libs/mixins";
    import {get} from '@/libs/api'

    function initialize(to) {
        let urls = {
            'add': `/admin/api/role_permission/create`,
            'edit': `/admin/api/role_permission/${to.params.id}/edit`
        };
        return (urls[to.meta.mode] || urls['add'])
    }

    function titleCase (value) {
        var testString = value

        // var titleCaseString
            // = testString
            // .replace(/(_|-)/g, ' ')
            // .trim()
            // .replace(/\w\S*/g, function(str) {
            //     return str.charAt(0).toUpperCase() + str.substr(1)
            // })
            // .replace(/([a-z])([A-Z])/g, '$1 $2')
            // .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')

        return testString
    }

    export default {
        mixins: [form],
        components: {
            BCard,
            BCardText,
            BLink,
            BRow,
            BCol,
            BFormInput,
            BFormGroup,
            BFormCheckboxGroup,
            BButton
        },
        data() {
            return {
                show: false,
                resource: '/roles',
                store: '/admin/api/role_permission',
                method: 'POST',
                title: 'Add',
                message:'New Role Added',
                permissions: [],
            }
        },

        beforeRouteEnter(to, from, next) {
            get(initialize(to))
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            get(initialize(to))
                .then((res) => {
                    this.setData(res);
                    next()
                })
        },
        methods: {
            setData(res) {
                Vue.set(this.$data, 'form', res.data.form);
                Vue.set(this.$data, 'permissions', res.data.permissions);

                if (this.$route.meta.mode === 'edit') {
                    this.store = `/admin/api/role_permission/${this.$route.params.id}?_method=PUT`;
                    this.title = 'Edit';
                    this.message = 'Role has been updated';
                }
                this.show = true
            },
            formSubmitted() {
                this.submit(this.form, (res) => {
                    this.success()
                    this.successfull(res)
                })
            },
            successfull(res) {
                this.$router.push(`${this.resource}`)
            }
        },
    }
</script>

<style scoped>

</style>
