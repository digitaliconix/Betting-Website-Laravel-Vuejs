import {byMethod} from './api'
import {objectToFormData} from './helpers'
import store from '@/store'
import ToastificationContent from "@core/components/toastification/ToastificationContent";

export const form = {
    data() {
        return {
            form: {},
            error: {},
            isProcessing: false,
            show: false
        }
    },
    computed: {
        mode() {
            return this.$route.meta.mode
        },
        isEdit() {
            return this.mode === 'edit'
        }
    },
    methods: {
        errors(key) {
            return this.error[key] ? 'error-bg' : ''
        },
        success() {
            this.$toast({
                component: ToastificationContent,
                props: {
                    title: 'Success',
                    icon: 'BellIcon',
                    text:  this.message,
                    variant:'success'
                },
            })
        },
        deleted(msg = this.message) {
            this.$toast({
                component: ToastificationContent,
                props: {
                    title: 'Deleted',
                    icon: 'BellIcon',
                    text: msg,
                    variant:'danger'
                },
            })
        },
        clearErrors() {
            this.error = {}
        },
        handleError(error) {
            this.closeLoading();
            if (error.response.status === 422) {
                this.error = error.response.data.errors
            }

        },
        destroy(url, cb, data) {
            this.clearErrors();
            this.openLoading();
            byMethod("DELETE", url, data).then(function ({data}) {
                if (data.saved) {
                    cb(data)
                }
            }).catch(this.handleError)
        },
        submit(file='', cb) {
            this.clearErrors();
            // this.openLoading();
            if (file == 'file') {
                this.form = objectToFormData(this.form);
            }
            byMethod(this.method, this.store, this.form).then(function ({data}) {
                if (data.saved) {
                    cb(data);
                }
            }).catch(this.handleError)
        },
        submitMultipartForm(form, cb) {
            this.clearErrors();
            // this.openLoading();
            byMethod(this.method, this.store, objectToFormData(this.form)).then(function ({data}) {
                if (data.saved) {
                    cb(data);
                    return true;
                }
                return false;
            }).catch(error => {
                this.handleError(error);
                return false;
            })
        },
        openLoading(){
            store.commit('app/UPDATE_LOADING', true);
        },
        closeLoading(){
            store.commit('app/UPDATE_LOADING', false);
        }



    }
};
