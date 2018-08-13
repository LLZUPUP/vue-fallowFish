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
  },
  //用户名
  setUsername({ commit }, username) {
    commit('setUsername', username)
  },
  //用户信息
  setUserinfo({commit}, userinfo){
		commit('setUserinfo', userinfo)
  },
  //被赞数
  setStarnum({ commit }) {
    commit('setStarnum')
  },
  cutStarnum({ commit }) {
    commit('cutStarnum')
  },
  //关注数
  setFocusnum({ commit }) {
    commit('setFocusnum')
  },
  cutFocusnum({ commit }) {
    commit('cutFocusnum')
  },
  //发布数
  setFabunum({ commit }) {
    commit('setFabunum')
  },
  cutFabunum({ commit }) {
    commit('cutFabunum')
  },
  //粉丝数
  setFannum({ commit }) {
    commit('setFannum')
  },
  cutFannum({ commit }) {
    commit('cutFannum')
  },
  //卖出数
  setSellnum({ commit }){
		commit('setSellnum')
  },
  //买到数
	setBuynum({ commit }){
		commit('setBuynum')
  },
  //赞过的
	setLikenum({ commit }){
		commit('setLikenum')
  },
  cutSellnum({ commit }){
		commit('cutSellnum')
	},
	cutBuynum({ commit }){
		commit('cutBuynum')
  },
  cutLikenum({ commit }){
		commit('cutLikenum')
  },
  //登陆状态false
  noLogin({ commit }) {
    if(window.localStorage.getItem('username') == null && window.localStorage.getItem('password') == null) {
      commit('noLogin')
    }
  },
  //传递数据
  setNews: ({ commit }, news) =>{
    commit('setNews', news)
  },
  setAddr: ({ commit }, address)=> {
    commit('setAddr', address)
  },
  setGoods: ({ commit }, good)=> {
    commit('setGoods', good)
  },
  cutGoods: ({ commit }, index)=> {
    commit('cutGoods', index)
  },
  setReceive: ({ commit }, obj)=> {
    commit('setReceive', obj)
  },
  setDel: ({ commit }, obj)=> {
    commit('setDel', obj)
  },
  setFabuinfo: ({ commit },info)=> {
    commit('setFabuinfo', info)
  },
  cutFabuinfo: ({commit}, index) => {
		commit('cutFabuinfo', index)
	},

}

export default actions