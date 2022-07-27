<template>
    <div>
        <b-card>
            <b-row>
                <b-col cols="6">
                    <h3>Help Requests</h3>
                </b-col>
                <b-col cols="6" class="text-right">
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        align="right"
                        class="mr-1 mb-1"
                        :to="{name:'create-help-requests'}"
                    >
                        Create
                    </b-button>

                </b-col>
            </b-row>
            <b-tabs @input="changeTab" ref="tab" fill>
                <b-tab title="New">
                    <template v-if="tab[0].show">
                        <request-tab :status="1"></request-tab>
                    </template>
                </b-tab>
                <b-tab title="Accepted">
                    <template v-if="tab[1].show">
                        <request-tab :status="2"></request-tab>
                    </template>
                </b-tab>
                <b-tab title="Completed">
                    <template v-if="tab[2].show">
                        <request-tab :status="3"></request-tab>
                    </template>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
    import {BCard, BRow, BCol, BCardText, BButton,BTabs, BTab} from 'bootstrap-vue'
    import RequestTab from "@/care_giver/views/Tabs/RequestTab";

    export default {
        components: {
            RequestTab,
            BTabs,
            BTab,
            BCard,
            BCardText,
            BRow,
            BCol,
            BButton
        },
        name: "Home",
        data() {
            return {
                tab: [
                    {
                        show: true
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    }
                ]
            }
        },
        methods: {
            changeTab(e) {
                for (let i = 0; i < this.tab.length; i++) {
                    this.tab[i].show = false
                }
                this.tab[e].show = true
            }
        },
    }
</script>

<style scoped>

</style>
