<template>
  <div class="profile">
    <img
        class="profile__img"
        :src=character.image>
    <div>
      <p class="profile__title">{{character.name}}</p>
      <p class="profile__status"
         :class="(character.status === 'Alive') ? 'card__status--alive'
            : (character.status === 'Dead') ? 'card__status--dead'
            : ''"
      >{{character.status}}</p>
      <p class="profile__p">{{character.species}}</p>
      <p class="profile__p">{{character.gender}}</p>

      <div class="profile__section">
        <p>
          <span class="profile__label">Origin:</span>
          <router-link
              :disabled="this.originUnknown"
            :to="!this.originUnknown ? {name: 'locationItem', params: {id: this.originId}} : ''"
            class="profile__link"
            :class="this.originUnknown ? 'profile__link--disable' : ''"
          >{{character.origin?.name}}
          </router-link>
        </p>
        <p>
          <span class="profile__label">Location:</span>
          <router-link


              :is="this.locationUnknown ? 'span' : 'router-link'"
            :to="{name: 'locationItem', params: {id:this.locationId} }"
            class="profile__link">{{character.location?.name}}
          </router-link>
        </p>
      </div>
    </div>
  </div>

  <div class="title">Episode</div>

  <list-episodes :episodes_data="episodes"></list-episodes>

</template>

<script>
import ListEpisodes from "@/components/listEpisodes";
export default {
  name: "itemCharacter",
  components: {ListEpisodes},
  data(){
    return{
      character: {},
      linkEpisodes: [],
      idEpisodes: [],
      episodes: {},
      originId: Number,
      locationId: Number,
      originUnknown: Boolean,
      locationUnknown: Boolean,
    }
  },
  async mounted() {
    const idCharacter = Number(this.$route.params.id);

    const linkApi = (ch = idCharacter) => `https://rickandmortyapi.com/api/character/${ch}`;
    const res = await fetch(linkApi());
    const character = await res.json();
    this.character = character;
    this.linkEpisodes = character.episode;


    for (let link of this.linkEpisodes) {
      const segments = new URL(link).pathname.split('/');
      const last = segments.pop() || segments.pop();
      this.idEpisodes.push(last)
    }


    const linkApiEp = (items = this.idEpisodes) => `https://rickandmortyapi.com/api/episode/${items}`;
    const resEp = await fetch(linkApiEp());
    const episodes = await resEp.json();
    this.episodes = episodes;

    this.episodes = Array.isArray(episodes) ? episodes : [episodes]

    if(!this.character.origin?.url == ''){
      const linkApiOr = character.origin?.url;
      const resOr = await fetch(linkApiOr);
      const origin = await resOr.json();
      this.originId = origin.id;
      this.originUnknown = false
    } else {
      this.originUnknown = true
    }

    if(!this.character.location?.url == ''){
      const linkApiLoc = character.location?.url;
      const resLoc = await fetch(linkApiLoc);
      const location = await resLoc.json();
      this.locationId = location.id;
      this.locationUnknown = false
    } else {
      this.locationUnknown = true
    }
    //
    // console.log(this.originId)
    // console.log(this.locationId)



  },
}
</script>

<style scoped>
.profile{
  display: flex;
}
.profile__img{
  width: 250px;
  height: 250px;
  margin-right: 24px;
}
.profile__title{
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #E3E3E3;
}

.profile__status{
  position: relative;
  padding-left: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  color: #E3E3E3;
}
.profile__status:before{
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #2BB8C1;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.card__status--alive:before{
  background-color: #39C569;
}
.card__status--dead:before{
  background-color: #C12B2B;
}

.profile__p{
  font-size: 16px;
  color: #E3E3E3;
  margin: 16px 0;
}

.title{
  font-size: 24px;
  font-weight: bold;
  margin: 48px 0 24px;
  color: #E3E3E3;
}



.profile__link{
  color: #39C569;
  text-decoration: none;
  cursor: pointer;
}

.profile__link--disable{
  text-decoration: none;
  color: #E3E3E3;
  cursor: default;
}

.profile__link:hover{
  text-decoration: underline;
}

.profile__link--disable:hover{
  text-decoration: none;
}

.profile__label{
  color: #5A5D68;
  font-size: 14px;
  font-style: italic;
  display: inline-block;
  margin-right: 8px;
}

.profile__section p{
  margin: 16px 0;
}
.profile__section{
  margin-top: 32px;
}

</style>