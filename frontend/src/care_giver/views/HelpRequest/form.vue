<template>
    <b-card title="Get Help">
        <b-row>
            <b-col md="6">
                <b-form-group
                    label="Help Type"
                    label-for="mc-help-type"
                >
                    <tag-input :positionRelative="true" :value="form.help_type"
                               resource="/care_giver/api/search/help_types" column="title" name="title"
                               @input="onHelpTypeUpdated">
                    </tag-input>
                    <error :error="error.help_type_id"/>
                </b-form-group>
            </b-col>
            <b-col md="6">
                <b-form-group
                    label="Service Type"
                    label-for="mc-help_type_service_id"
                >
                    <tag-input :disabled="form.help_type_id == null" :positionRelative="true" :value="form.help_type_service"
                               resource="/care_giver/api/search/help_type_services" column="title" name="title" :params="{help_type_id:form.help_type_id}"
                               @input="onHelpTypeServiceUpdated">
                    </tag-input>
                    <error :error="error.help_type_service_id"/>
                </b-form-group>
            </b-col>
            <b-col md="12" >
                <b-form-group
                    label="Custom Message"
                    label-for="mc-message"
                >
                    <b-form-input
                        id="mc-message"
                        placeholder="Write a message"
                        v-model="form.message"
                    />
                    <error :error="error.message"/>
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
                    @click="()=>{$router.go(-1)}"
                >
                    Cancel
                </b-button>
            </b-col>
        </b-row>
    </b-card>

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
        BFormCheckboxGroup,
        BButton
    } from 'bootstrap-vue'
    import {form} from "@/libs/mixins";
    import Error from "@/components/Form/Error";
    import TagInput from "@/components/Form/TagInput";

    export default {
        name : 'form',
        mixins: [form],
        components: {
            Error,
            TagInput,
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
                store: '/care_giver/api/create_help_requests',
                method: 'POST',
                message: 'Request Submitted Successfully',

            }
        },
        methods: {
            formSubmitted() {
                this.submit(this.form, (res) => {
                    this.success()
                    this.successfull()
                })
            },
            successfull() {
                this.$router.go(-1);
            },
            onHelpTypeUpdated(e){
                Vue.set(this.$data.form,'help_type',e);
                Vue.set(this.$data.form,'help_type_id',e.id);
            },
            onHelpTypeServiceUpdated(e){
                Vue.set(this.$data.form,'help_type_service',e);
                Vue.set(this.$data.form,'help_type_service_id',e.id);
            }
        },
    }
</script>

<style scoped>

</style>
