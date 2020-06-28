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
    isIndexChanged:false,
  },
  mutations: {
    changeComponentShowStatus (state,payload) {
      state.showComponent[payload].isShow = !state.showComponent[payload].isShow;
    },
    setCurrentKeyword: function(state,payload){
      state.currentKeyword = payload;
    },
    changeKeywordsIndex: function(state){
      state.isIndexChanged = !state.isIndexChanged;
      alert(state.isIndexChanged);
    }

  }
})

export default store;