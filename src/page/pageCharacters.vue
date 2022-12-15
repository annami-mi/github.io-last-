<template>

  <div class="headline">
    <div class="search">
      <input-search @filteringItems="searchText"></input-search>
      <filter-checkbox @changeStatus="statusLive"></filter-checkbox>
    </div>
  </div>

  <list-characters :characters_data="this.characters"></list-characters>

  <buttons-pagination @click="showMoreItems" v-if="!hideButtonMore"></buttons-pagination>

</template>

<script>
import ListCharacters from "@/components/listCharacters";
import ButtonsPagination from "@/components/buttonsPagination";
import InputSearch from "@/components/inputSearch";
import FilterCheckbox from "@/components/filterCheckbox";

export default {
  name: "pageCharacters",
  components: {FilterCheckbox, InputSearch, ButtonsPagination, ListCharacters},
  data(){
    return{
      characters:[],
      hideButtonMore: false,
      nextPage: 2,
      pages: Number,
      searchName: '',
      status:[],
      linkApi: 'https://rickandmortyapi.com/api/character/',
    }
  },
  methods:{


    // Бесконечная прокрутка START
    async showMoreItems(){
      const list = this.characters;
      const loadPage = this.nextPage;

      const linkApi = (page = loadPage) => `https://rickandmortyapi.com/api/character/?page=${page}`
      const res = await fetch(linkApi());
      const characters = await res.json();
      this.pages = characters.info.pages

      if(this.nextPage <= this.pages){
        const all = list.concat(characters.results);
        this.characters = all
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

    async filterCharacters(){
      const searchName = this.searchName;

      if(searchName == ''){
        this.hideButtonMore = false;
      } else {
        this.hideButtonMore = true;
      }

      const linkApi = (name = searchName) => `https://rickandmortyapi.com/api/character/?name=${name}`
      const res = await fetch(linkApi());
      const characters = await res.json();
      this.characters = characters.results;
    },
    // Поиск по названию

    // Фильтр по статусу
    statusLive(obj){
      this.status = obj
    },
    async filterOfStatus(){
      const status = this.status;
        if(status == 'Alive'){
          const linkApi = (id = status) => `https://rickandmortyapi.com/api/character/?status=${id}`
          const res = await fetch(linkApi());
          const characters = await res.json();
          this.characters = characters.results;
        } else if (status == 'Dead') {
          const linkApi = (id = status) => `https://rickandmortyapi.com/api/character/?status=${id}`
          const res = await fetch(linkApi());
          const characters = await res.json();
          this.characters = characters.results;
        } else {
          const linkApi = 'https://rickandmortyapi.com/api/character/';
          const res = await fetch(linkApi);
          const characters = await res.json();
          this.characters = characters.results;
        }
    },
    // Фильтр по статусу
  },

  async mounted() {
      const linkApi = `https://rickandmortyapi.com/api/character/`;
      const res = await fetch(linkApi);
      const characters = await res.json();
      this.characters = characters.results;
  },
  watch:{
    searchName(){
      this.filterCharacters();
    },
    status(){
      this.filterOfStatus();
    }
  }
}
</script>

<style scoped>

</style>