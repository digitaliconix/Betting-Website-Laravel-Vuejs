<template>
    <div v-if="show">
        <b-card :title="$route.meta.mode && $route.meta.mode === 'edit' ? 'Edit User' : 'Add New User'">
            <b-row>
                <b-col md="6">
                    <b-form-group
                        label="Name"
                        label-for="mc-name"
                    >
                        <b-form-input
                            id="mc-name"
                            placeholder="Name"
                            v-model="form.name"
                            :disabled="$route.meta.mode === 'edit'"
                        />
                        <error :error="error.name"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Email"
                        label-for="mc-email"
                    >
                        <b-form-input
                            id="mc-email"
                            :disabled="$route.meta.mode === 'edit'"
                            placeholder="Email"
                            v-model="form.email"
                        />
                        <error :error="error.email"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" v-if="$route.meta.mode === 'edit'">
                    <b-form-group
                        label="New Password"
                        label-for="mc-password"
                    >
                        <b-form-input
                            id="mc-new-password"
                            placeholder="New Password"
                            v-model="form.new_password"
                        />
                        <error :error="error.new_password"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" v-else>
                    <b-form-group
                        label="Password"
                        label-for="mc-password"
                    >
                        <b-form-input
                            id="mc-password"
                            placeholder="Password"
                            v-model="form.password"
                        />
                        <error :error="error.password"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Confirm Password"
                        label-for="mc-confirm-password"
                    >
                        <b-form-input
                            id="mc-confirm-password"
                            placeholder="Confirm Password"
                            v-model="form.password_confirmation"
                        />
                        <error :error="error.password_confirmation"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
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
                        :to="{path:'/users'}"
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
    import Error from "@/components/Form/Error";

    function initialize(to) {
        let urls = {
            'add': `/admin/api/users/create`,
            'edit': `/admin/api/users/${to.params.id}/edit`
        };
        return (urls[to.meta.mode] || urls['add'])
    }

    export default {
        mixins: [form],
        components: {
            Error,
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
                resource: '/users',
                store: '/admin/api/users',
                method: 'POST',
                title: 'Add',
                message:'New User Added',
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

                if (this.$route.meta.mode === 'edit') {
                    this.store = `/admin/api/users/${this.$route.params.id}?_method=PUT`;
                    this.title = 'Edit';
                    this.message = 'Users has been updated';
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
