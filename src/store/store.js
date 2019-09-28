import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:null
  },

  mutations: {
    setName (state, name) {
      state.name = name
    }
  },
  actions: {

  },
  getters:{
    getName(state, getters){
      if(state.name)
        return state.name
      return "My Dear My Deat My Dear"
    }
  }
});
