import Vue from 'vue'
import Vuex from 'vuex'
import Post from './post'
import Comment from './comment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Post,
    Comment
  }
})
