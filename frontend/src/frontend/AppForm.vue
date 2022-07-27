<template>
    <div class="container">
        <b-card>
            <b-row>
                <b-col md="6">
                    <b-form-group
                        label="Date"
                        label-for="mc-date-tme"
                    >
                        <flat-pickr
                            id="mc-date-tme"
                            v-model="form.date"
                            class="form-control"
                            :config="{ enableTime: false,dateFormat: 'Y-m-d'}"
                        />
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Client Name"
                        label-for="mc-client-name"
                    >
                        <b-form-input
                            id="mc-client-name"
                            placeholder="Name"
                            v-model="form.client_name"/>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
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
    import flatPickr from 'vue-flatpickr-component'
    export default {
        name: "AppForm",
        components :{
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
            BFormFile,flatPickr
        },
        data(){
            return {
                form : {
                    date: null
                }
            }
        }
    }
</script>
<style lang="scss">
    @import '@core/scss/vue/libs/vue-flatpicker.scss';

</style>
