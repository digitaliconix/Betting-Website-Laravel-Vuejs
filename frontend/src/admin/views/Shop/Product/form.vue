<template>
    <div v-if="show">
        <b-card :title="$route.meta.mode && $route.meta.mode === 'edit' ? 'Edit Shop Product' : 'Add New Shop Product'">
            <b-row>
                <b-col md="6">
                    <b-form-group
                        label="Title"
                        label-for="mc-title"
                    >
                        <b-form-input
                            id="mc-title"
                            placeholder="Title"
                            v-model="form.title"
                        />
                        <error :error="error.title"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Price (Coins)"
                        label-for="mc-unit-price"
                    >
                        <b-form-input
                            id="mc-unit-price"
                            placeholder="Price (Coins)"
                            v-model="form.unit_price"
                        />
                        <error :error="error.unit_price"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Shop Category"
                        label-for="mc-shop-category"
                    >
                         <x-tag-input :positionRelative="true" :value="form.shop_category"
                                     resource="/admin/api/search/shop_categories" column="title" name="title"
                                     @input="onShopCategoryUpdated">
                        </x-tag-input>
                        <error :error="error.shop_category_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Thumbnail (Single Image)"
                        label-for="mc-thumbnail"
                    >
                        <b-form-file
                            id="mc-thumbnail"
                            v-model="form.thumbnail"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                            accept=".jpg, .jpeg, .png, .gif"
                        />
                        <error :error="error.thumbnail"/>
                    </b-form-group>
                </b-col>
                <template v-if="form.old_thumbnail">
                    <b-col cols="12">
                        <hr>
                    </b-col>
                    <b-col md="12" class="mb-2">
                        <b-img thumbnail width="500" fluid :src="`/admin/api/attachment/shop_product/${form.old_thumbnail}`"/>
                    </b-col>
                </template>
                <b-col cols="12">
                    <hr>
                </b-col>
                <b-col md="12">
                    <b-form-group
                        label="Active ?"
                        label-for="mc-active"
                    >
                        <b-form-checkbox
                            id="mc-active"
                            checked="true"
                            class="custom-control-success"
                            name="check-button"
                            :value="1"
                            :unchecked-value="0"
                            v-model="form.status"
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
                        :to="{path:'/shop-products'}"
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
        BFormTextarea,
        BFormCheckboxGroup,
        BFormCheckbox,
        BButton,
        BFormFile,
        BImg
    } from 'bootstrap-vue'
    import {form} from "@/libs/mixins";
    import {get} from '@/libs/api'
    import Error from "@/components/Form/Error";
    import {quillEditor} from 'vue-quill-editor'
    import Ripple from 'vue-ripple-directive'
    import XTagInput from "@/components/Form/TagInput";

    function initialize(to) {
        let urls = {
            'add': `/admin/api/shop-products/create`,
            'edit': `/admin/api/shop-products/${to.params.id}/edit`
        };
        return (urls[to.meta.mode] || urls['add'])
    }

    export default {
        mixins: [form],
        components: {
            XTagInput,
            quillEditor,
            Error,
            BCard,
            BCardText,
            BLink,
            BRow,
            BCol,
            BFormInput,
            BFormGroup,
            BFormTextarea,
            BFormCheckboxGroup,
            BFormCheckbox,
            BButton,
            BFormFile, BImg
        },
        directives: {
            Ripple
        },
        data() {
            return {
                show: false,
                resource: '/shop-products',
                store: '/admin/api/shop-products',
                method: 'POST',
                title: 'Add',
                message: 'New Shop Product Added',
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
                    this.store = `/admin/api/shop-products/${this.$route.params.id}?_method=PUT`;
                    this.title = 'Edit';
                    this.message = 'Shop Product has been updated';
                }
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
            onShopCategoryUpdated(e){
                Vue.set(this.$data.form,'shop_category',e);
                Vue.set(this.$data.form,'shop_category_id',e.id);
            }
        },
    }
</script>

<style scoped>

</style>
