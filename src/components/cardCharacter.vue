<template>
    <router-link
        class="card"
        :to="{name: 'characterItem', params: {id:character_data.id} }"
    >
      <img
          class="card__img"
          :src=character_data.image>

      <div class="card__content">

        <p class="card__title">{{character_data.name}}</p>
        <p
            class="card__status"
            :class="
            (character_data.status === 'Alive') ? 'card__status--alive'
            : (character_data.status === 'Dead') ? 'card__status--dead'
            : ''">
          {{character_data.status}}
        </p>
        <p class="card__species">{{character_data.species}}</p>

      </div>
    </router-link>
</template>

<script>
export default {
  name: "cardCharacter",
  props:{
    character_data:{
      type: Object
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.card{
  list-style: none;
  display: flex;
  cursor: pointer;
  transition: 200ms;
  overflow: hidden;
  border-radius: 0 16px 16px 0;
  text-decoration: none;
  height: 100%;
  /*border-left: 5px solid #39C569;*/
  position: relative;
  top: 0;
}

.card:hover{
  /*box-shadow: 0 10px 46px #77DEB9;*/
  top: -10px;
}

.card__img{
  width: 100px;
  min-height: 100px;
  object-fit: cover;
  display: block;
}

.card__content{
  background-color: #424758;
  /*background-color: #E3E3E3;*/
  padding: 16px;
  color: #E3E3E3;
  /*color: #242731;*/
  width: 100%
}

.card__title{
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}

.card__status{
  position: relative;
  padding-left: 16px;
  margin-bottom: 16px;
  font-size: 14px;
}
.card__status:before{
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

.card__species{
  font-size: 14px;
}
</style>