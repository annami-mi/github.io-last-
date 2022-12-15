<template>
  <input
      @keyup="filteringItems"
      v-model="searchText"
      type="text"
      class="input-search"
      placeholder="Search.."
  >
</template>

<script>
export default {
  name: "inputSearch",
  data(){
    return{
      searchText: '',
    }
  },
  methods:{
    // Поиск по названию START
    filteringItems(){
      this.$emit('filteringItems', this.searchText)
    }
    // Поиск по названию END
  }
}
</script>

<style scoped>
.input-search{
  height: 36px;
  background-color: #E3E3E3;
  border: 1px solid transparent;
  outline: none;
  border-radius: 26px;
  padding: 0 16px;
  font-size: 14px;
  transition: 200ms;
  font-weight: 500;
}

.input-search:hover{
  background-color: #FBFBFB;
}

.input-search:focus{
  background-color: #FBFBFB;
  border-color: #39D870;
}
</style>