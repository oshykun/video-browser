import api from '../../api/imgur';
import router from '../../router';

const state = {
  images: [],
  isModalOpen: false,
  selectedImage: null,
};
const getters = {
  allImages(state) {
    return state.images;
  },
  isModalOpen(state) {
    return state.isModalOpen;
  },
  getSelectedImageUrl(state) {
    return state.selectedImage.link;
  },
  selectedImage(state) {
    return state.selectedImage;
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
  selectImage({ commit }, image) {
    commit('setModalState', true);
    commit('setSelectedImage', image);
  },
  closeModal({ commit }) {
    commit('setModalState', false);
  },
  async deleteImage({ dispatch, rootState }) {
    const { auth: { token }, images: { selectedImage } } = rootState;

    await api.deleteImage(selectedImage, token);

    await dispatch('fetchImages');
    await dispatch('closeModal');
  },
};
const mutations = {
  setImages(state, images) {
    state.images = images;
  },
  setModalState(state, modalState) {
    state.isModalOpen = modalState;
  },
  setSelectedImage(state, image) {
    state.selectedImage = image;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
