import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showComponent:{
      search: {
        isShow: false,
        showType: "left",
      },

    },
    currentKeyword:"",
  },
  mutations: {
    changeComponentShowStatus (state,payload) {
      state.showComponent[payload].isShow = !state.showComponent[payload].isShow;
    },
    setCurrentKeyword: function(state,payload){
      alert(payload)
      state.currentKeyword = payload;
      alert(state.currentKeyword);
    },

  }
})

export default store;