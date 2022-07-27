<template>
    <div style="height: 50vh">
        <section class="chat-app-window">
            <div class="active-chat">
                <!-- User Chat Area -->
                <vue-perfect-scrollbar
                    ref="chat"
                    :settings="perfectScrollbarSettings"
                    class="user-chats scroll-area"
                >
                    <div class="chats">
                        <div
                            v-for="(chatItem, index) in help_request.chat"
                            :key="index"
                            class="chat"
                            :class="{'chat-left': (chatItem.guard != user.guard || chatItem.model_id != user.id)}"
                        >
                            <div class="chat-body">
                                <div
                                    class="chat-content"
                                >
                                    <p>{{ chatItem.message }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </vue-perfect-scrollbar>

                <!-- Message Input -->
                <b-form
                    class="chat-app-form"
                    @submit.prevent="scrollBottom"
                >
                    <b-input-group class="input-group-merge form-send-message mr-1">
                        <b-form-input
                            @keypress.enter="sendMessage"
                            v-model="form.message"
                            placeholder="Enter your message"
                        />
                    </b-input-group>
                    <b-button
                        variant="primary"
                        @click="sendMessage"
                    >
                        Send
                    </b-button>
                </b-form>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        BCard,
        BCardText,
        BForm,
        BLink,
        BInputGroup,
        BRow,
        BCol,
        BFormInput,
        BFormTextarea,
        BFormGroup,
        BFormCheckboxGroup,
        BButton,
        BFormFile,
        BImg,
        BContainer
    } from 'bootstrap-vue'
    import {get, byMethod} from "@/libs/api"
    import {form} from "@/libs/mixins";
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import ToastificationContent from "@core/components/toastification/ToastificationContent";

    export default {
        name: "Chat",
        components: {
            BCard,
            BCardText,
            BForm,
            BInputGroup,
            BLink,
            BRow,
            BCol,
            BFormInput,
            BFormTextarea,
            BFormGroup,
            BFormCheckboxGroup,
            BButton,
            BFormFile,
            BImg,
            BContainer,
            VuePerfectScrollbar
        },
        mixins: [form],

        created() {
            get(`/care_giver/api/help_request_chat/${this.$route.params.id}`).then(res => {
                Vue.set(this.$data, 'help_request', res.data.data);
                this.scrollBottom();
            });
            Vue.set(this.$data.form,'help_request_id',this.$route.params.id);

            window.Echo.private(`help_requests.${this.$route.params.id}`)
                .listen('HelpRequestChatMessage', (e) => {
                    this.help_request.chat.push({
                        guard: e.help_request_chat.guard,
                        message: e.help_request_chat.message,
                        model_id: e.help_request_chat.model_id,
                    });
                    this.scrollBottom()
                });
        },
        data() {
            return {
                show: false,
                store: '/care_giver/api/help_request_chats',
                method: 'POST',
                perfectScrollbarSettings: {
                    maxScrollbarLength: 150,
                },
                user:{
                    guard : window.apex.user.auth_guard,
                    id: window.apex.user.id
                },
                help_request : {
                    chat : []
                }
            }
        },

        methods: {
            scrollBottom(){
                setTimeout(() => {
                    const chatDiv = this.$refs.chat.$el;
                    chatDiv.scrollTop = chatDiv.scrollHeight;
                }, 250)
            },
            sendMessage() {
                if(this.form.message && (this.form.message == '' || this.form.message == null)){
                    this.$toast({
                        component: ToastificationContent,
                        props: {
                            title: 'Alert',
                            icon: 'BellIcon',
                            text:  'Message cannot be empty!!',
                            variant:'danger'
                        },
                    })
                    return 0;
                }
                this.submit(this.form, (res) => {
                    this.form.message = '';
                    this.scrollBottom();
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "~@core/scss/base/pages/app-chat.scss";
    @import "~@core/scss/base/pages/app-chat-list.scss";
</style>
