import Vuex from 'vuex';
import Vue from 'vue';
import todos from 'todos.module'
import {authentication} from 'auth.module'

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
    modules: {
        todos,
        authentication
    }
});