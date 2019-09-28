import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex);

const store = new Vuex.Store({

  state:{
    name:null
  },

  getters:{
    getName : state => {
      var name = state.name;
      if (!name) {
        name =  Cookies.getJSON('name')
      }
      if(!name)
        name = "My Dear"
      return name;
    }
  },

  mutations:{
    setName: (state, name) => {
      Cookies.set('name', name);
      state.name = name
    }
  },
})

export default store;