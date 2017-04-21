import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import * as types from './mutation-types'

Vue.use(Vuex)
Vue.use(VueResource)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    kittens: []
  },
  getters: {
    getKittens: state => {
      return state.kittens
    }
  },
  mutations: {
    [types.SET_KITTENS] (state, kittens) {
      state.kittens = kittens
    }
  },
  actions: {
    retrieveKittens ({ commit }) {
      Vue.http.get('http://localhost:3000/kittens').then(data => {
        commit(types.SET_KITTENS, data.body)
      })
    }
  }
})

