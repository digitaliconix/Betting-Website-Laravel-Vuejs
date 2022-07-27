<template>
    <div>
        <b-card>
            <b-row>
                <b-col cols="6">
                    <h3>Competitions</h3>
                </b-col>
                <b-col cols="6" class="text-right">
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        align="right"
                        class="mr-1 mb-1"
                        @click="updateScores"
                    >
                        Update Scores
                    </b-button>
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        align="right"
                        class="mr-1 mb-1"
                        @click="updateMatches"
                    >
                        Update Matches
                    </b-button>
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        align="right"
                        class="mr-1 mb-1"
                        :to="{name:'create-competitions'}"
                    >
                        Create
                    </b-button>
                </b-col>
            </b-row>

            <panel ref="panel" :url-api="urlApi" :columns="columns" :resource="resource">
                <div slot="action" slot-scope="props" class="text-nowrap">
                    <feather-icon v-if="!props.item.completed"
                        :id="`user-row-${props.item.id}-edit-icon`"
                        icon="EditIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="edit(props.item.id)"
                    />
                </div>
                <div slot="custom_1" slot-scope="props" class="text-wrap">
                    <b-row>
                        <b-col cols="5">
                            <b-img thumbnail fluid width="50"
                                   :src="`/admin/api/attachment/team/${props.item.team_1.thumbnail}`"/>
                            <br>
                            <router-link :to="{path:`/teams/${props.item.team1_id}/edit`}"><span>{{props.item.team_1.title}}</span>
                            </router-link>
                        </b-col>
                        <b-col cols="2">
                            Vs.
                        </b-col>
                        <b-col cols="5">
                            <b-img thumbnail fluid width="50"
                                   :src="`/admin/api/attachment/team/${props.item.team_2.thumbnail}`"/>
                            <br>
                            <router-link :to="{path:`/teams/${props.item.team2_id}/edit`}"><span>{{props.item.team_2.title}}</span>
                            </router-link>
                        </b-col>
                    </b-row>
                </div>
            </panel>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {
        BCard,
        BRow,
        BCol,
        BCardText,
        BLink,
        BButton,
        BTooltip,
        BModal,
        VBModal,
        BFormGroup,
        BImg
    } from 'bootstrap-vue'
    import Panel from "@/components/Table/Panel";
    import ToastificationContent from "@core/components/toastification/ToastificationContent";
    import {get, post} from '@/libs/api.js'
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
            TagInput,
            BImg
        },
        directives: {
            'b-modal': VBModal,
            Ripple
        },
        name: "Index",
        mixins: [form],
        data() {
            return {
                model: null,
                urlApi: "/admin/api/competitions",
                resource: "/competitions",
                columns: [
                    {
                        custom: true,
                        label: 'Match',
                        field: 'custom_1',
                    },
                    {
                        label: 'Game',
                        displayText: 'game_category',
                        field: 'title',
                    },
                    {
                        label: 'Team 1 score',
                        // custom: true,
                        field: 'team1_score',
                    },
                    {
                        label: 'Team 2 score',
                        // custom: true,
                        field: 'team2_score',
                    },
                    {
                        label: 'Start Time',
                        field: 'start_time',
                        format: 'formatDateTime'
                    },
                    {
                        label: 'Action',
                        field: 'action',
                        action: true
                    }
                ],
            }
        },
        methods: {
            edit(id) {
                this.$router.push(`${this.resource}/${id}/edit`)
            },
            deleteBlog(id) {

            },
            updateScores(){
                this.openLoading()
                get('/admin/api/get_scores').then((res)=>{
                    if(res.data.saved){
                        this.$refs.panel.reload();
                        this.closeLoading()
                    }
                }).catch(error => {
                    this.closeLoading();
                    return false;
                })
            },
            updateMatches(){
                this.openLoading()
                get('/admin/api/get_matches').then((res)=>{
                    if(res.data.saved){
                        this.$refs.panel.reload();
                        this.closeLoading()
                    }
                }).catch(error => {
                    this.closeLoading();
                    return false;
                })
            }
        },
    }
</script>

<style scoped>

</style>
