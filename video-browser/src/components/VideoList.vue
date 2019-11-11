<template>
  <div class="list-group" :class="isSelected ? 'col-md-4' : 'col-md-12'">
    <ul>
      <video-list-item
        v-for="video in videos"
        :key="video.etag"
        :videoItem="video"
        @videoSelect="onVideoSelect"
      />
    </ul>
  </div>
</template>

<script>
  import VideoListItem from './VideoListItem'

  export default {
    name: 'VideoList',
    components: { VideoListItem },
    props: {
      videos: Array,
      isSelected: Boolean
    },
    methods: {
      onVideoSelect(videoItem) {
        this.$emit('videoSelect', videoItem)
      }
    }
  }
</script>

<style scoped>

</style>
