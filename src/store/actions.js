const actions = {
  setCurIndex({ commit },index) {
    commit('setCurIndex',index)
  },
  hasLogin({ commit }) {
    if(window.localStorage.getItem('username') != null && window.localStorage.getItem('password') != null) {
      commit('hasLogin')
    }else {
      console.log('没有登录')
    }
  }

}

export default actions