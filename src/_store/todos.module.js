import {todoService} from "../_services";

const state = {
    todos: []
}

const getters = {
    allTodos: state => state.todos
}

const actions = {
    fetchTodos({commit}) {
        todoService.getAll()
            .then(res => commit('setTodos', res.data))
            .catch(e => console.log(e));
    },
    addTodo({commit}, todo) {
        todoService.addTodo(todo)
            .then(res => commit('newTodo', res.data))
            .catch(err => console.log(err));
    },
    updateTodo({commit}, todo) {
        todoService.updateTodo(todo)
            .then(res => commit('updateTodo', res.data))
            .catch(err => console.log(err));
    },
    deleteTodo({commit}, id) {
        todoService.deleteTodo(id)
            .then(() => commit('removeTodo', id))
            .catch(err => console.log(err));
    }
}

const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, newTodo) => state.todos = [...state.todos, newTodo],
    updateTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(t => t.id === updatedTodo.id);
        state.todos[index] = updatedTodo.data;
    },
    removeTodo: (state, id) => state.todos = state.todos.filter(t => t.id !== id)
}

export default {
    state,
    getters,
    actions,
    mutations
};