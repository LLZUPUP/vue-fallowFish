import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  addCount() {
    ++state.count
  }
}

const getters = {
  computedCount() {
    return state.count*2
  }
}

const actions = {
  incMutations(context) {
    context.commit('addCount')
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
export default store