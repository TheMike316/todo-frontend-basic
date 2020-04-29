<template>
    <div id="home">
        <AddTodo @add-todo="addTodo"/>
        <Todos :todos="todos" @completed="updateTodo" @del-todo="deleteTodo"/>
    </div>
</template>

<script>
    import Todos from "../components/Todos";
    import AddTodo from "../components/AddTodo";

    import {mapActions} from 'vuex'

    export default {
        name: 'Home',
        components: {
            AddTodo,
            Todos
        },
        data() {
            return {
                todos: []
            }
        },
        methods: {
            ...mapActions(['fetchTodos', 'addTodo', 'updateTodo', 'deleteTodo']),
        },
        created() {
            this.fetchTodos();
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Helvetica, Arial, sans-serif;
        line-height: 1.4;
    }

    .btn {
        display: inline-block;
        border: none;
        background: #555;
        color: #fff;
        padding: 7px 20px;
        cursor: pointer;
    }

    .btn:hover {
        background: #666;
    }
</style>
