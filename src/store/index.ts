import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    addUser(state, user){
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
