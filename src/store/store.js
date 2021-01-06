import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from 'vuex-persistedstate'
import * as Cookies from "js-cookie";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: null
  },

  getters: {
    getName: state => {
      var name = state.name;
      if (!name) {
        name = Cookies.getJSON("name");
      }
      if (!name) name = "My Dear";
      return name;
    },
    getFrom: state => {
      var from = state.from;
      if (!from) {
        from = Cookies.getJSON("from");
      }
      if (!from) from = "Your Dear";
      return from;
    }
  },

  mutations: {
    setName: (state, name) => {
      Cookies.set("name", name);
      state.name = name;
    },
    setFrom: (state, name) => {
      Cookies.set("from", name);
      state.from = name;
    }
  }
});

export default store;
