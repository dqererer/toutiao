import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isShowTab: true,
  },
  mutations: {
    changeTabShowStatus (state) {
      state.isShowTab = !state.isShowTab;
    },
  }
})

export default store;