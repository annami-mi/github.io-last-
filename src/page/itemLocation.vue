<template>
  <h1 class="card__title">{{location.name}}</h1>

  <div class="card__section">
    <p class="card__p"><span class="card__label">Type:</span> <span>{{location.type}}</span></p>
    <p class="card__p"><span class="card__label">Dimension:</span> <span>{{location.dimension}}</span></p>
  </div>

  <div class="title">Residents</div>

  <list-characters :characters_data="characters"></list-characters>
</template>

<script>
import ListCharacters from "@/components/listCharacters";
export default {
  name: "itemLocation",
  components: {ListCharacters},
  data(){
    return{
      location: [],
      characters: [],
      linksCharacters: [],
      idCharacters: [],
    }
  },
  async mounted() {
    const idLocation = this.$route.params.id;
    const linkApi = (id = idLocation) => `https://rickandmortyapi.com/api/location/${id}`;
    const res = await fetch(linkApi());
    const location = await res.json();
    this.location = location;
    this.linksCharacters = location.residents;

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
.card__title{
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #E3E3E3;
}
.card__p{
  margin: 16px 0;
}

.title{
  font-size: 24px;
  font-weight: bold;
  margin: 48px 0 24px;
  color: #E3E3E3;
}

.card__label{
  color: #5A5D68;
  font-size: 14px;
  font-style: italic;
  display: inline-block;
  margin-right: 8px;
}

</style>