import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isLogin:false
  },
  mutations: {
    login(state){
      state.isLogin = true;
    }
  },
  getters:{
    loginshow(state){
      return state.isLogin?'欢迎回来':'游客'
    }
  },
  actions: {
    aclogin({commit}){
      return new Promise(resolve => {
        setTimeout(function(){
          commit('login')
          resolve(true)
        },2000)
      })
    }
  }
})
