<template>
    <div>
        <h2>Login</h2>
        <form @submit="handleSubmit">
            <label>Username
                <input type="text" v-model="username" name="username"
                       :class="{ 'is-invalid': submitted && !username }"/>
            </label>
            <div v-show="submitted && !username">Username is required</div>
            <label>Password
                <input type="password" v-model="password" name="password"
                       :class="{ 'is-invalid': submitted && !password }"/>
            </label>
            <div v-show="submitted && !password">Password is required</div>
            <input type="submit" :disabled="loggingIn" value="Login">
        </form>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                username: '',
                password: '',
                submitted: false
            }
        },
        computed: mapGetters('authentication', ['loggingIn']),
        created() {
            // reset login status
            this.$store.dispatch('authentication/logout');
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.submitted = true;
                const {username, password} = this;
                const {dispatch} = this.$store;
                if (username && password) {
                    dispatch('authentication/login', {username, password});
                }
            }
        }
    };
</script>