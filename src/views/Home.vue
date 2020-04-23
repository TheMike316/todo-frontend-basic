<template>
    <div id="home">
        <AddTodo @add-todo="addTodo"/>
        <Todos :todos="todos" @del-todo="deleteTodo"/>
    </div>
</template>

<script>
    import axios from 'axios';

    import Todos from "../components/Todos";
    import AddTodo from "../components/AddTodo";

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
            deleteTodo(id) {
                axios.delete(`http://localhost:8090/api/v1/todo/${id}`)
                    .then(() => this.todos = this.todos.filter(t => t.id !== id))
                    .catch(err => console.log(err));
            },
            addTodo(newTodo) {
                const {title, completed} = newTodo;
                axios.post('http://localhost:8090/api/v1/todo', {
                    title,
                    completed
                })
                    .then(res => this.todos = [...this.todos, res.data])
                    .catch(err => console.log(err));
            }
        },
        created() {
            axios.get('http://localhost:8090/api/v1/todo')
                .then(res => this.todos = res.data)
                .catch(e => console.log(e));
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
