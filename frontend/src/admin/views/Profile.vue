<template>
    <div v-if="show">
        <b-card title="Edit Profile">
            <b-row>
                <b-col md="6">
                    <b-form-group
                        label="Name"
                        label-for="mc-name"
                    >
                        <b-form-input
                            id="mc-name"
                            placeholder="Name"
                            v-model="form.name"/>
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
                            placeholder="Email"
                            v-model="form.email"/>
                        <error :error="error.email"/>
                    </b-form-group>
                </b-col>
                <b-col cols="12">
                    <hr>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Image (Single Image)"
                        label-for="mc-cover-image"
                    >
                        <b-form-file
                            id="mc-cover-image"
                            v-model="form.photo"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                            accept=".jpg, .jpeg, .png, .gif"
                        />
                        <error :error="error.photo"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" class="mb-2">
                    <template v-if="form.old_photo !== null">
                        <b-img thumbnail fluid width="100"
                               :src="`/admin/api/attachment2/admin_profile/${form.old_photo}`"/>
                    </template>
                </b-col>
                <b-col cols="12">
                    <hr>
                </b-col>
                <b-col md="12">
                    <b-form-group
                        label="Change Password ?"
                        label-for="mc-change-password"
                    >
                        <b-form-checkbox
                            id="mc-change-password"
                            checked="true"
                            class="custom-control-success"
                            name="check-button"
                            :value="true"
                            :unchecked-value="false"
                            v-model="form.change_password"
                            switch
                        >
                    <span class="switch-icon-left">
                      <feather-icon icon="CheckIcon"/>
                    </span>
                            <span class="switch-icon-right">
                      <feather-icon icon="XIcon"/>
                    </span>
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>
                <b-col cols="12">
                    <hr>
                </b-col>
                <b-col md="6" v-if="form.change_password">
                    <b-form-group
                        label="Password"
                        label-for="mc-new-password"
                    >
                        <b-form-input
                            id="mc-new-password"
                            placeholder="Password"
                            v-model="form.new_password"/>
                        <error :error="error.new_password"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" v-if="form.change_password">
                    <b-form-group
                        label="Confirm Password"
                        label-for="mc-confirm-password"
                    >
                        <b-form-input
                            id="mc-confirm-password"
                            placeholder="Confirm Password"
                            v-model="form.password_confirmation"/>
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
                        :to="{path:'/'}"
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
    import {
        BCard,
        BCardText,
        BLink,
        BRow,
        BCol,
        BFormInput,
        BFormGroup,
        BFormCheckbox,
        BButton,
        BFormSelect,
        BImg,
        BFormFile
    } from 'bootstrap-vue'
    import {form} from "@/libs/mixins";
    import {get} from '@/libs/api'
    import Error from "@/components/Form/Error";

    export default {
        mixins: [form],
        components: {
            BFormSelect,
            Error,
            BCard,
            BCardText,
            BLink,
            BRow,
            BCol,
            BFormInput,
            BFormGroup,
            BFormCheckbox,
            BButton,
            BImg,
            BFormFile
        },
        data() {
            return {
                show: false,
                resource: '/',
                store: '/admin/api/update_detail',
                method: 'POST',
                title: 'Add',
                message: 'Update Successfully',
            }
        },

        created() {
            get('/admin/api/get_detail').then(res => {
                if (res.data) {
                    this.setData(res)
                }
            })
        },
        methods: {
            setData(res) {
                Vue.set(this.$data, 'form', res.data.form);
                Vue.set(this.$data.form, 'change_password', false);

                this.show = true
            },
            formSubmitted() {
                this.submitMultipartForm(this.form, (res) => {
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
