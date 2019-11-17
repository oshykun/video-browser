import qs from 'qs';
import api from '../../api/imgur';
import router from '../../router';

const state = {
  token: window.localStorage.getItem('imgur_token'),
};

const getters = {
  isLoggedIn(state) {
    return !!state.token;
  },
};

const actions = {
  login() {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const { access_token: token } = qs.parse(hash.replace('#', ''));

    commit('setToken', token);
    window.localStorage.setItem('imgur_token', token);

    router.push('/');
  },
  logout({ commit }) {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
    if (router.currentRoute.path !== '/') {
      router.push('/');
    }
  },
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
