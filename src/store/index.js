import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex);

const state = {
  showMainNav: true,
  cartList: []
}
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store;