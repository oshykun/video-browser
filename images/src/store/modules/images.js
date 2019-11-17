import api from '../../api/imgur';
import router from '../../router';

const state = {
  images: [],
};
const getters = {
  allImages(state) {
    return state.images;
  },
};
const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const images = await api.fetchImages(token);
    commit('setImages', images);
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;

    await api.uploadImages(images, token);

    router.push('/');
  },
};
const mutations = {
  setImages(state, images) {
    state.images = images;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
