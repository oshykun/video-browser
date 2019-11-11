<template>
  <div class="container">
    <search-bar @termChange="onTermChange"/>
    <div class="row">
      <video-detail :selectedVideo="selectedVideo" v-if="selectedVideo"/>
      <video-list @videoSelect="onVideoSelect" :videos="videos" :isSelected="!!selectedVideo"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import SearchBar from './components/SearchBar'
  import VideoList from './components/VideoList'
  import VideoDetail from './components/VideoDetail'

  const API_KEY = process.env.VUE_APP_API_KEY || ''
  const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'

  export default {
    name: 'App',
    components: {
      SearchBar,
      VideoList,
      VideoDetail
    },
    data() {
      return {
        videos: [],
        selectedVideo: null
      }
    },
    methods: {
      onVideoSelect(video) {
        this.selectedVideo = video
      },
      async onTermChange(searchTerm) {
        try {
          const { data } = await axios.get(SEARCH_URL, {
            params: {
              key: API_KEY,
              type: 'video',
              part: 'snippet',
              q: searchTerm
            }
          })
          this.videos = data.items
        } catch (err) {
          console.error(err)
        }
      }
    }
  }
</script>

<style scoped>

</style>
