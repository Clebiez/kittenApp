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
    currentKittenViewed: {}
  },
  getters: {
    getKittens: state => {
      return state.kittens
    },
    getCurrentKittenViewed: state => {
      return state.currentKittenViewed
    }
  },
  mutations: {
    [types.SET_KITTENS] (state, kittens) {
      state.kittens = kittens
    },
    [types.OPEN_KITTEN_MODAL] (state, kittenId) {
      state.currentKittenViewed = undefined
      state.currentKittenViewed = state.kittens[kittenId]
    }
  },
  actions: {
    retrieveKittens ({ commit }) {
      Vue.http.get('http://localhost:3000/kittens').then(data => {
        commit(types.SET_KITTENS, data.body)
      })
    },
    kittenClicked ({ commit }, kittenId) {
      commit(types.OPEN_KITTEN_MODAL, kittenId)
    }
  }
})

