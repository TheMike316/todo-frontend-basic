import axios from 'axios';
import {authHeader} from "../_helpers";

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

    return axios.put(`http://localhost:8090/api/v1/todo/${todo.id}`, request, {headers: authHeader()});
}

function deleteTodo(id) {
    return axios.delete(`http://localhost:8090/api/v1/todo/${id}`, {headers: authHeader()});
}

function addTodo(newTodo) {
    const {title, completed} = newTodo;
    return axios.post('http://localhost:8090/api/v1/todo', {
        title,
        completed
    }, {headers: authHeader()})
}

function getAll() {
    return axios.get('http://localhost:8090/api/v1/todo', {headers: authHeader()})
}