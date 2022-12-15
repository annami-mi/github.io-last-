<template>
  <router-link
      :to="{name: 'episodePage', params: {id:episode_data.id} }"
      class="card">
    <div class="card__image">
      <div class="card__date">{{ episode_data.air_date }} </div>
    </div>
    <p class="card__title">{{ episode_data.episode }} {{ episode_data.name }}</p>
  </router-link>
</template>

<script>


export default {
  name: "cardEpisode",
  props:{
    episode_data:{
      type: Object
    }
  },
}
</script>

<style scoped>
.card{
  text-decoration: none;
  transition: 200ms;
  position: relative;
  top: 0;
}

.card:hover{
  top: -10px;
}

.card__image{
  height: 150px;
  background-color: #000;
  position: relative;
  margin-bottom: 16px;
}
.card__date{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #C12B2B;
  color: #E3E3E3;
  font-size: 12px;

  padding: 8px 12px;
  border-radius: 16px;
  white-space: nowrap;
}

.card__title{
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #E3E3E3;

}

</style>