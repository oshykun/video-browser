<template>
  <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailUrl"/>
    <div class="media-body">
      {{ videoTitle }}
    </div>
  </li>
</template>

<script>
  export default {
    name: 'VideoListItem',
    props: {
      videoItem: Object
    },
    computed: {
      thumbnailUrl() {
        return this.videoItem.snippet.thumbnails.default.url
      },
      videoTitle() {
        return this.videoItem.snippet.title
      }
    },
    methods: {
      onVideoSelect() {
        this.$emit('videoSelect', this.videoItem)
      }
    }
  }
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
  }

  li:hover {
    background-color: #eeeeee;
  }
</style>
