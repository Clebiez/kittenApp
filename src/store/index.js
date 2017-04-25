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
    kittens: [],
    currentKittenViewed: {},
    kittenInfoOpened: false
  },
  mutations: {
    [types.SET_KITTENS] (state, kittens) {
      state.kittens = kittens
    },
    [types.SET_CURRENT_KITTEN_VIEWED] (state, kittenId) {
      state.currentKittenViewed = state.kittens[kittenId]
    },
    [types.TOGGLE_KITTEN_INFO] (state) {
      state.kittenInfoOpened = !state.kittenInfoOpened
    }
  },
  actions: {
    retrieveKittens ({ commit }) {
      Vue.http.get('http://localhost:3000/kittens').then(data => {
        commit(types.SET_KITTENS, data.body)
      })
    },
    kittenClicked ({ commit }, kittenId) {
      commit(types.SET_CURRENT_KITTEN_VIEWED, kittenId)
      commit(types.TOGGLE_KITTEN_INFO)
    }
  }
})

