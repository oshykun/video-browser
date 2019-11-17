<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img
        v-for="image in allImages"
        :key="image.id"
        :src="image.link"
        @click="selectImage(image)"
      />
    </div>
    <h2 v-else>Log in to get started!</h2>

    <sui-modal v-model="isModalOpen">
      <sui-modal-content image>
        <img class="ui centered large image" v-if="selectedImage" :src="getSelectedImageUrl">
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button negative @click="deleteImage">
          Delete
        </sui-button>
        <sui-button positive @click="closeModal">
          Close
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'ImageLIst',
    computed: mapGetters([
      'allImages',
      'isLoggedIn',
      'isModalOpen',
      'selectedImage',
      'getSelectedImageUrl',
    ]),
    methods: mapActions([
      'fetchImages',
      'selectImage',
      'closeModal',
      'deleteImage',
    ]),
    created() {
      this.fetchImages();
    },
  };
</script>

<style scoped>
  .image-container {
    column-count: 3;
    column-gap: 0;
  }

  img {
    max-width: 100%;
    padding: 5px;
  }
</style>
