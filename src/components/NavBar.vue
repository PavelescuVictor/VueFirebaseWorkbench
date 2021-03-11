<template>
    <div id="navbar">
        <div class="navbar__content">
            <div class="nav__logo" @click="redirectToHome">
                <h4>Placeholder Logo</h4>
            </div>
            <div class="nav__menu">
                <ul class="nav__list">
                    <router-link to="/home">
                        <li>
                            <a>Home</a>
                        </li>
                    </router-link>
                    <router-link to="/about">
                        <li>
                            <a>About</a>
                        </li>
                    </router-link>
                    <router-link to="/login" v-if="showLoggedOutButtons">
                        <li>
                            <a>Login</a>
                        </li>
                    </router-link>
                    <router-link to="/register" v-if="showLoggedOutButtons">
                        <li>
                            <a>Register</a>
                        </li>
                    </router-link>
                    <router-link to="/logout" v-if="showLoggedInButtons">
                        <li>
                            <a>Logout</a>
                        </li>
                    </router-link>
                    <router-link to="/profile" v-if="showProfileButton">
                        <li>
                            <a>Profile</a>
                        </li>
                    </router-link>
                </ul>
            </div>
            <router-view />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
    name: "Navbar",
    components: {},
    data() {
        return {
            showLoggedInButtons: false,
            showLoggedOutButtons: true,
            showProfileButton: false,
        }
    },

    mounted() {
        
    },

    computed: {
        ...mapGetters(["isLoggedIn"])
    },

    methods: {
        ...mapActions(["logout"]),
        redirectToHome: function() {
            if (this.$route.name != "home") {
                this.$router.push({ name: "home" })
            }
        },
    },
}
</script>

<style>

</style>