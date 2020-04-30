<template>
    <header class="header">
        <h1>TodoList</h1>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/login">{{ loggedIn ? 'Logout' : 'Login' }}</router-link>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Header",
        computed: {
            loggedIn: () => mapGetters(['authentication/loggedIn'])
        }
    }
</script>

<style scoped>
    .header {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }

    .header a {
        color: #fff;
        padding-right: 5px;
        text-decoration: none;
    }

</style>