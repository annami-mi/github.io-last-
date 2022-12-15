<template>

  <div class="card__title">{{ episode.episode}} {{ episode.name}}</div>
  <div class="card__video">
    <div class="card__date">{{ episode.air_date}}</div>
  </div>

  <div class="title">Characters in Episode</div>

  <list-characters :characters_data="characters"></list-characters>

</template>

<script>
import ListCharacters from "@/components/listCharacters";
export default {
  name: "itemEpisode",
  components: {ListCharacters},
  data(){
    return{
      episode: [],
      characters: [],
      linksCharacters: [],
      idCharacters: [],
    }
  },
  computed:{
  },
  async mounted() {
    const idEpisode = this.$route.params.id;
    const linkApi = (episode = idEpisode) => `https://rickandmortyapi.com/api/episode/${episode}`;
    const res = await fetch(linkApi());
    const episode = await res.json();
    this.episode = episode;
    this.linksCharacters = episode.characters;

    for (let link of this.linksCharacters) {
      const segments = new URL(link).pathname.split('/');
      const last = segments.pop() || segments.pop();
      this.idCharacters.push(last)
    }

    const linkApiCh = (items = this.idCharacters) => `https://rickandmortyapi.com/api/character/${items}`;
    const resCh = await fetch(linkApiCh());
    const character = await resCh.json();
    this.characters = character;
  },
}
</script>

<style scoped>
.card__video{
  background-color: #000;
  width: 100%;
  height: 500px;
  position: relative;
  margin-bottom: 48px;
}

.card__date{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #C12B2B;
  color: #E3E3E3;
  font-size: 16px;

  padding: 12px 20px;
  border-radius: 25px;
  white-space: nowrap;
}


.card__title{
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #E3E3E3;
}

.title{
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #E3E3E3;
}

</style>