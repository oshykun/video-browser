<template>
  <div class="col-md-8">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="videoUrl"/>
    </div>
    <div class="details">
      <h4>{{ selectedVideo.snippet.title }}</h4>
      <p>{{ selectedVideo.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VideoDetail',
    props: {
      selectedVideo: Object
    },
    computed: {
      videoUrl() {
        const { videoId } = this.selectedVideo.id
        return `https://www.youtube.com/embed/${videoId}`
      }
    }
  }
</script>

<style scoped>
  .details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
</style>
