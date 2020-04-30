import axios from 'axios';
import {authService} from "./auth.service";
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

    return axios.put(`http://localhost:8090/api/v1/todo/${todo.id}`, request, {headers: authHeader()})
        .then(handleResponse);
}

function deleteTodo(id) {
    return axios.delete(`http://localhost:8090/api/v1/todo/${id}`, {headers: authHeader()})
        .then(handleResponse);
}

function addTodo(newTodo) {
    const {title, completed} = newTodo;
    return axios.post('http://localhost:8090/api/v1/todo', {
        title,
        completed
    }, {headers: authHeader()})
        .then(handleResponse);
}

function getAll() {
    return axios.get('http://localhost:8090/api/v1/todo', {headers: authHeader()})
        .then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                // auto logout if 401 response returned from api
                authService.logout();
                location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}