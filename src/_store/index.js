import Vuex from 'vuex';
import Vue from 'vue';
import todos from './todos.module.js'


//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
    modules: {
        todos
    }
});