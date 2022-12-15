<template>

  <div class="headline">
    <div class="search">
      <input-search @filteringItems="searchText"></input-search>
    </div>
  </div>

  <list-location :locations_data="this.locations"></list-location>
  <buttons-pagination @click="showMoreItems" v-if="!hideButtonMore"></buttons-pagination>
</template>

<script>
import ListLocation from "@/components/listLocations";
import ButtonsPagination from "@/components/buttonsPagination";
import InputSearch from "@/components/inputSearch";
export default {
  name: "pageLocation",
  components: {
    InputSearch,
    ButtonsPagination,
    ListLocation
  },
  data(){
    return{
      locations:[],
      hideButtonMore: false,
      nextPage: 2,
      pages: Number,
      searchName: '',
    }
  },
  methods:{
    // Бесконечная прокрутка START
    async showMoreItems(){
      const list = this.locations;
      const loadPage = this.nextPage;

      const linkApi = (page = loadPage) => `https://rickandmortyapi.com/api/location/?page=${page}`
      const res = await fetch(linkApi());
      const locations = await res.json();
      this.pages = locations.info.pages

      if(this.nextPage <= this.pages) {
        const all = list.concat(locations.results);
        this.locations = all
        this.hideButtonMore = true
        this.listenerScroll();
      }
    },

    listenerScroll(){
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow && this.nextPage < this.pages) {
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

    async filterLocations(){
      const searchName = this.searchName;

      if(searchName == ''){
        this.hideButtonMore = false;
      } else {
        this.hideButtonMore = true;
      }

      const linkApi = (name = searchName) => `https://rickandmortyapi.com/api/location/?name=${name}`
      const res = await fetch(linkApi());
      const locations = await res.json();
      this.locations = locations.results;
    },
    // Поиск по названию
  },
  async mounted() {
    const linkApiLoc = () => `https://rickandmortyapi.com/api/location`;
    const resLoc = await fetch(linkApiLoc());
    const locations = await resLoc.json();
    this.locations = locations.results;
  },
  watch:{
    searchName(){
      this.filterLocations();
    }
  }
}
</script>

<style scoped>

</style>