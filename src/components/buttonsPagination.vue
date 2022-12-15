<template>
  <div class="container">
<!--    <button @click="prevPage">Назад</button>-->
<!--    <button @click="nextPage">Вперед</button>-->

    <button class="button">More</button>

  </div>
</template>

<script>
// import api from "@/api";

export default {
  name: "buttonsPagination",
  data(){
    return{
      // page: 1,
    }
  },
  methods: {
    // showMore(){
    //   const activePage = this.page;
    //   const nextPage = activePage + 1;
    //   this.page = nextPage;
    //   this.$emit('showMore', this.page)
    // }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  margin: 56px 0;
}

.button{
  background: transparent;
  border-radius: 26px;
  color: #39C569;
  border: 1px solid #39C569;
  outline: none;
  padding: 13px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  transition: 200ms;
  cursor: pointer;
}

.button:hover{
  background-color: #39C569;
  color: #fff;
}
</style>