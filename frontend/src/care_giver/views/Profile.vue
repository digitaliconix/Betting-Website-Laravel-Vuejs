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
                <b-col md="6">
                    <b-form-group
                        label="Phone No."
                        label-for="mc-phone_no"
                    >
                        <b-form-input
                            id="mc-phone_no"
                            placeholder="Phone No"
                            v-model="form.phone_no"/>
                        <error :error="error.phone_no"/>
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group
                        label="Care Giver Type"
                        label-for="mc-care_giver-type"
                    >
                        <x-tag-input :value="form.care_giver_type"
                                   resource="/care_giver/api/search/care_giver_types" column="title" name="title"
                                   @input="onCareGiverTypeUpdated">
                        </x-tag-input>
                        <error :error="error.care_giver_type_id"/>
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group
                        label="Country"
                        label-for="mc-country"
                    >
                        <x-tag-input :value="form.country"
                                     resource="/care_giver/api/search/countries" column="title" name="title"
                                     @input="onCountryUpdated">
                        </x-tag-input>
                        <error :error="error.country_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="State"
                        label-for="mc-state"
                    >
                        <x-tag-input :value="form.state" :params="{country_id: form.country_id}"
                                     resource="/care_giver/api/search/states" column="title" name="title"
                                     @input="onStateUpdated">
                        </x-tag-input>
                        <error :error="error.state_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="City"
                        label-for="mc-city"
                    >
                        <x-tag-input :value="form.city" :params="{state_id: form.state_id}"
                                     resource="/care_giver/api/search/cities" column="title" name="title"
                                     @input="onCityUpdated">
                        </x-tag-input>
                        <error :error="error.city_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Zip Code"
                        label-for="mc-zip_code"
                    >
                        <b-form-input
                            id="mc-zip_code"
                            placeholder="Zip Code"
                            v-model="form.zip_code"/>
                        <error :error="error.zip_code"/>
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
                        <b-img thumbnail fluid width="100" :src="`/care_giver/api/attachment/care_giver_profile/${form.old_photo}`" />
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
    import XTagInput from "@/components/Form/TagInput";

    export default {
        mixins: [form],
        components: {
            XTagInput,
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
                store: '/care_giver/api/update_detail',
                method: 'POST',
                title: 'Add',
                message: 'Update Successfully',
            }
        },

        created() {
            get('/care_giver/api/get_detail').then(res => {
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
            },
            onCareGiverTypeUpdated(e){
                Vue.set(this.$data.form,'care_giver_type',e);
                Vue.set(this.$data.form,'care_giver_type_id',e.id);
            },
            onCountryUpdated(e){
                Vue.set(this.$data.form,'country',e);
                Vue.set(this.$data.form,'country_id',e.id);
                Vue.set(this.$data.form,'state',null);
                Vue.set(this.$data.form,'state_id',null);
                Vue.set(this.$data.form,'city',null);
                Vue.set(this.$data.form,'city_id',null);
            },
            onStateUpdated(e){
                Vue.set(this.$data.form,'state',e);
                Vue.set(this.$data.form,'state_id',e.id);
                Vue.set(this.$data.form,'city',null);
                Vue.set(this.$data.form,'city_id',null);
            },
            onCityUpdated(e){
                Vue.set(this.$data.form,'city',e);
                Vue.set(this.$data.form,'city_id',e.id);
            },
        },
    }
</script>

<style scoped>

</style>
