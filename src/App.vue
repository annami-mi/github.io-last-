<template>
  <main-header></main-header>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import MainHeader from "@/components/mainHeader";

export default {
  name: 'App',
  data(){
    return{
      episodes: [],
      searchItem: '',
      season: null,
    };
  },
  components:{
    MainHeader,
  },

}
</script>

<style>
@font-face {
  font-family: Gotham;
  src: local("Gotham"), url('./fonts/gotham_book.otf') format("truetype");
  font-style: normal;;
  font-weight: normal;
}
@font-face {
  font-family: Gotham;
  src: local("Gotham"), url('./fonts/gotham_bold.otf') format("truetype");
  font-style: normal;;
  font-weight: bold;
}
@font-face {
  font-family: Gotham;
  src: local("Gotham"), url('./fonts/gotham_bookitalic.otf') format("truetype");
  font-style: italic;;
  font-weight: normal;
}
@font-face {
  font-family: Gotham;
  src: local("Gotham"), url('./fonts/gotham_medium.otf') format("truetype");
  font-style: normal;;
  font-weight: 500;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box
}
body{
  background-color: #242731;
  color: #E3E3E3;
  font-family: Gotham, sans-serif;
  padding-bottom: 100px
}

.container{
  max-width: 900px;
  margin: 0 auto
}

.headline{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0 48px;
}

.search{
  display: flex;
  align-items: center;
}




</style>

