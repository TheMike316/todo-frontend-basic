import axios from 'axios';

export const todoService = {
    getAll,
    addTodo,
    updateTodo,
    deleteTodo
}

function updateTodo(todo) {
    const request = {
        title: todo.title,
        completed: todo.completed
    }

    return axios.put(`http://localhost:8090/api/v1/todo/${todo.id}`, request);
}

function deleteTodo(id) {
    return axios.delete(`http://localhost:8090/api/v1/todo/${id}`);
}

function addTodo(newTodo) {
    const {title, completed} = newTodo;
    return axios.post('http://localhost:8090/api/v1/todo', {
        title,
        completed
    })
}

function getAll() {
    return axios.get('http://localhost:8090/api/v1/todo')
}