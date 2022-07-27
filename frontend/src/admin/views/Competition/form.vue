<template>
    <div v-if="show">
        <b-card :title="$route.meta.mode && $route.meta.mode === 'edit' ? 'Edit Competition' : 'Add New Competition'">
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
                        label="Game Category"
                        label-for="mc-game-category"
                    >
                        <x-tag-input :positionRelative="true" :value="form.game_category"
                                     :disabled="title == 'Edit' ? true : false"
                                     resource="/admin/api/search/game_categories" column="title" name="title"
                                     @input="onGameCategoryUpdated">
                        </x-tag-input>
                        <error :error="error.game_category_id"/>
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group
                        label="Team 1"
                        label-for="mc-team-1"
                    >
                        <x-tag-input :positionRelative="true" :value="form.team_1"

                                     :disabled="(form.game_category_id == null || title == 'Edit') ? true : false" resource="/admin/api/search/teams" :params="{game_category:form.game_category_id}" column="title" name="title"
                                     @input="onTeam1Updated">
                        </x-tag-input>
                        <error :error="error.team1_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Team 2"
                        label-for="mc-team-2"
                    >
                        <x-tag-input :positionRelative="true" :value="form.team_2"
                                     :disabled="(form.game_category_id == null || title == 'Edit') ? true : false" resource="/admin/api/search/teams" :params="{game_category:form.game_category_id}" column="title" name="title"
                                     @input="onTeam2Updated">
                        </x-tag-input>
                        <error :error="error.team2_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Team 1 Score"
                        label-for="mc-team1-score"
                    >
                        <b-form-input
                            id="mc-team1-score"
                            placeholder="Team 1 Score"
                            v-model="form.team1_score"
                        />
                        <error :error="error.team1_score"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Team 2 Score"
                        label-for="mc-team2-score"
                    >
                        <b-form-input
                            id="mc-team2-score"
                            placeholder="Team 2 Score"
                            v-model="form.team2_score"
                        />
                        <error :error="error.team2_score"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Start Time"
                        label-for="mc-start-tme"
                    >
                        <flat-pickr
                            id="mc-date-tme"
                            v-model="form.start_time"
                            class="form-control"
                            :disabled="title == 'Edit' ? true : false"
                            :config="{ enableTime: true,dateFormat: 'Y-m-d H:i'}"
                        />
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
                        :to="{name: 'view-competitions'}"
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
    import flatPickr from 'vue-flatpickr-component'

    function initialize(to) {
        let urls = {
            'add': `/admin/api/competitions/create`,
            'edit': `/admin/api/competitions/${to.params.id}/edit`
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
            BFormFile, BImg, flatPickr
        },
        directives: {
            Ripple
        },
        data() {
            return {
                show: false,
                resource: '/competitions',
                store: '/admin/api/competitions',
                method: 'POST',
                title: 'Add',
                message: 'New Competition Added',
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
                    this.store = `/admin/api/competitions/${this.$route.params.id}?_method=PUT`;
                    this.title = 'Edit';
                    this.message = 'Competitions has been updated';
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
            onGameCategoryUpdated(e){
                Vue.set(this.$data.form,'game_category',e);
                Vue.set(this.$data.form,'game_category_id',e.id);
                Vue.set(this.$data.form,'team_1',null);
                Vue.set(this.$data.form,'team1_id',null);
                Vue.set(this.$data.form,'team_2',null);
                Vue.set(this.$data.form,'team2_id',null);
            },
            onTeam1Updated(e){
                Vue.set(this.$data.form,'team_1',e);
                Vue.set(this.$data.form,'team1_id',e.id);
            },
            onTeam2Updated(e){
                Vue.set(this.$data.form,'team_2',e);
                Vue.set(this.$data.form,'team2_id',e.id);
            }
        },
    }
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>

