import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipies: [],
    page: 0,
    isFetching: false,
  },
  mutations: {
    SET_RECIPIES(state, recipies) {
      state.recipies = [...state.recipies, ...recipies];
    },
    SET_PAGE(state, page) {
      state.page = page;
    },
    SET_FETCHING(state, isFetching) {
      state.isFetching = isFetching;
    },
    EMPTY_RECIPIES(state) {
      state.recipies = [];
    },
  },
  actions: {
    async fetchData({ commit }, endpoint) {
      commit('SET_FETCHING', true);
      return new Promise((resolve) => {
        setTimeout(async () => {
          const url = `http://filizinmutfagi.hbostann.com${endpoint}`;
          const res = await fetch(url);
          const val = await res.json();
          resolve(val);
          commit('SET_FETCHING', false);
        }, 1000);
      });
    },
    async fetchRecipies({ dispatch, commit }) {
      if (this.state.page === -99) {
        return;
      }
      const fetchedRecipies = await dispatch('fetchData', `/api/recipies?page=${this.state.page}`);
      commit('SET_RECIPIES', fetchedRecipies.recipies);
      commit('SET_PAGE', this.state.page + 1);
    },
    async searchRecipies({ dispatch, commit }, query) {
      if (query === '') {
        commit('EMPTY_RECIPIES');
        commit('SET_PAGE', 0);
        await dispatch('fetchRecipies');
        return;
      }
      commit('EMPTY_RECIPIES');
      commit('SET_PAGE', -99);
      const searchResult = await dispatch('fetchData', `/api/search?query=${query}`);
      commit('SET_RECIPIES', searchResult.recipies);
      commit('SET_PAGE', -99);
    },
  },
  getters: {
    getRecipies(state) {
      return state.recipies;
    },
    getPage(state) {
      return state.page;
    },
    getIsFetching(state) {
      return state.isFetching;
    },
  },
  modules: {},
});
