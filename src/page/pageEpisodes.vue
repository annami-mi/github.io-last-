<template>

  <div class="headline">
    <groups-season @changeSeason="getCurrentSeason"></groups-season>

    <div class="search">
      <input-search @filteringItems="searchText"></input-search>
    </div>
  </div>

  <list-episodes :episodes_data="this.episodes"></list-episodes>

  <buttons-pagination @click="showMoreItems" v-if="!hideButtonMore"></buttons-pagination>
</template>

<script>
import ListEpisodes from "@/components/listEpisodes";
import ButtonsPagination from "@/components/buttonsPagination";
import GroupsSeason from "@/components/groupsSeason";
import InputSearch from "@/components/inputSearch";

export default {
  name: "pageEpisodes",
  components: {InputSearch, GroupsSeason, ButtonsPagination, ListEpisodes},
  data(){
    return{
      episodes:[],
      season: Number,
      pages: Number,
      hideButtonMore: false,
      nextPage: 2,
      searchName: ''
    }
  },
  methods:{

    // Сортировка по сезонам
    getCurrentSeason(season){
      this.season = Number(season)
    },

    async changeSeason(){

      if(!this.season == 0){
        const linkApi = (id = this.season) => `https://rickandmortyapi.com/api/episode/?episode=S0${id}`
        const res = await fetch(linkApi());
        const episodes = await res.json();
        this.episodes = episodes.results;

        this.hideButtonMore = true
      } else {
        const linkApi = `https://rickandmortyapi.com/api/episode`
        const res = await fetch(linkApi);
        const episodes = await res.json();
        this.episodes = episodes.results;

        this.hideButtonMore = false
        this.nextPage = 2
      }

      console.log(this.episodes)
    },
    // Сортировка по сезонам


    // Бесконечная прокрутка START
    async showMoreItems(){
      const list = this.episodes;
      const loadPage = this.nextPage;

      const linkApi = (page = loadPage) => `https://rickandmortyapi.com/api/episode/?page=${page}`
      const res = await fetch(linkApi());
      const episodes = await res.json();
      this.pages = episodes.info.pages

      if(this.nextPage <= this.pages){
        const all = list.concat(episodes.results);
        this.episodes = all
        this.hideButtonMore = true
        this.listenerScroll();
      }
    },

    listenerScroll(){
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow && this.nextPage < this.pages ) {
          this.nextPage = this.nextPage + 1;
          this.showMoreItems()
        }
      };
    },
    // Бесконечная прокрутка END

  // Поиск по названию
    searchText(text){
      this.searchName = text
    },
    async filterEpisodes(){
      console.log(this.searchName)
      const searchName = this.searchName;
      if(searchName == ''){
        this.hideButtonMore = false;
      } else {
        this.hideButtonMore = true;
      }

      const linkApi = (name = searchName) => `https://rickandmortyapi.com/api/episode/?name=${name}`
      const res = await fetch(linkApi());
      const episodes = await res.json();

      this.episodes = episodes.results;
    },
  // Поиск по названию

  },

  async mounted() {
    const linkApi = `https://rickandmortyapi.com/api/episode/`;
    const res = await fetch(linkApi);
    const episodes = await res.json();
    this.episodes = episodes.results;
  },
  watch:{
    season(){
      this.changeSeason();
    },
    searchName(){
      this.filterEpisodes();
    }
  }
}
</script>

<style scoped>

</style>