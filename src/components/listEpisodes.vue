<template>
  <ul class="list">
    <li v-for="episode of episodes"
        :key="episode.id">
      <card-episode :episode_data="episode"></card-episode>
    </li>
  </ul>
</template>

<script>
import CardEpisode from "@/components/cardEpisode";
export default {
  name: "listEpisodes",
  data(){
    return{
      episodes: [],
    }
  },
  props:{
    episodes_data:{
      type: Object
    }
  },
  components: {
    CardEpisode
  },
  mounted() {
  },
  methods:{
    showList(){
      this.episodes = this.episodes_data
    },
  },
  watch:{
    episodes_data(){
      this.showList()
    }
  }
}
</script>

<style scoped>
.list{
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
}
</style>