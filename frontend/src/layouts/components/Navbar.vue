<template>
    <div class="navbar-container d-flex content align-items-center">

        <!-- Nav Menu Toggler -->
        <ul class="nav navbar-nav d-xl-none">
            <li class="nav-item">
                <b-link
                    class="nav-link"
                    @click="toggleVerticalMenuActive"
                >
                    <feather-icon
                        icon="MenuIcon"
                        size="21"
                    />
                </b-link>
            </li>
        </ul>

        <!-- Left Col -->
        <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
            <dark-Toggler class="d-none d-lg-block"/>
        </div>

        <b-navbar-nav class="nav align-items-center ml-auto">
            <b-nav-item-dropdown
                right
                toggle-class="d-flex align-items-center dropdown-user-link"
                class="dropdown-user"
            >
                <template #button-content>
                    <div class="d-sm-flex d-none user-nav">
                        <p class="user-name font-weight-bolder mb-0">
                            {{ user_name }}
                        </p>
                        <span class="user-status">{{userGuard}}</span>
                    </div>
                    <b-avatar
                        size="40"
                        variant="light-primary"
                        badge
                        :src="`/${auth}/api/attachment2/${auth}_profile/${photo}`"
                        class="badge-minimal"
                        badge-variant="success"
                    />
                </template>

                <b-dropdown-item @click="goToProfile" link-class="d-flex align-items-center">
                    <feather-icon
                        size="16"
                        icon="UserIcon"
                        class="mr-50"
                    />
                    <span>Profile</span>
                </b-dropdown-item>
                <b-dropdown-divider/>
                <b-dropdown-item @click="logout" link-class="d-flex align-items-center">
                    <feather-icon
                        size="16"
                        icon="LogOutIcon"
                        class="mr-50"
                    />
                    <span>Logout</span>
                </b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </div>
</template>

<script>
    import {
        BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
    } from 'bootstrap-vue'
    import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'

    export default {
        components: {
            BLink,
            BNavbarNav,
            BNavItemDropdown,
            BDropdownItem,
            BDropdownDivider,
            BAvatar,

            // Navbar Components
            DarkToggler,
        },
        computed :{
            userGuard(){
                var words = window.apex.user.auth_guard.replace('_',' ').split(' ');
                for(var i=0;i<words.length;i++){
                    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                }
                return words.join(" ");
            }
        },
        props: {
            toggleVerticalMenuActive: {
                type: Function,
                default: () => {
                },
            },
        },
        data() {
            return {
                user_name: window.apex.user.name,
                auth: window.apex.user.auth_guard,
                photo: window.apex.user.photo
            }
        },
        methods: {
            logout() {
                window.location.href = `/${window.apex.user.auth_guard}/logout`;
                // console.log(window.location);
            },
            goToProfile() {
                this.$router.push('/update-profile');
            }
        }
    }
</script>
