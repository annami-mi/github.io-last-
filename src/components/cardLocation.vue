<template>
  <router-link
      class="location__card"
      :to="{name: 'locationItem', params: {id:location.id} }">
    <div class="portal">
      <div class="location">
        <div class="location__name">{{location.name}}</div>
        <div class="location__type">{{location.type}}</div>
        <div class="location__type">{{location.dimension}}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "cardLocation",
  props:{
    location_info:{
      type: Object
    }
  },
  data(){
    return{
      location: this.location_info
    }
  }
}
</script>

<style scoped>
.portal{
  width: 300px;
  height: 300px;
  background: url("../img/portal.png") no-repeat center / contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.location{
  position: relative;
  text-align: center;
  background-color: rgba(255,255,255, .5);
  padding: 24px;
  border-radius: 4px;
}

.location__name{
  font-size: 24px;
  font-weight: bold;
  color: #242731;
  margin-bottom: 16px;

}

.location__card{
  text-decoration: none;
  display: flex;
  justify-content: center;
  transition: 200ms;
  margin-bottom: 48px;
}

.location__card:hover{
  transform: scale(1.1);
}

.location__type{
  margin: 8px 0;
  color: #242731;
}
</style>