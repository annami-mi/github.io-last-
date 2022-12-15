<template>
  <div class="filters">
    <div class="filter">
      <div class="filter">
        <input
            id="statusAll"
            class="checkbox-input"
            type="radio"
            name="status"
            checked
            v-model="statusLive"
            value="All"
        >
        <label class="checkbox" for="statusAll"></label>
        <span class="checkbox-label">All</span>
      </div>

      <input
          id="statusAlive"
          class="checkbox-input"
          type="radio"
          value="Alive"
          name="status"
          v-model="statusLive"
          @change="changeStatus"
      >
      <label class="checkbox" for="statusAlive"></label>
      <span class="checkbox-label">Alive</span>
    </div>

    <div class="filter">
      <input
          id="statusDead"
          class="checkbox-input"
          type="radio"
          name="status"
          v-model="statusLive"
          value="Dead"
      >
      <label class="checkbox" for="statusDead"></label>
      <span class="checkbox-label">Dead</span>
    </div>


  </div>
</template>

<script>
export default {
  name: "filterCheckbox",
  data(){
    return{
      statusLive: [],
    }
  },
  methods:{
    changeStatus(){
      this.$emit('changeStatus', this.statusLive)
    }
  },
  watch:{
    statusLive(){
      this.changeStatus()
    }
  }
}
</script>

<style scoped>
.filters{
  display: flex;
  align-items: center;
  margin-left: 24px;
}

.filter{
  display: flex;
  align-items: center;
  margin-right: 16px;
}
.filter:last-child{
  margin-right: 0;
}

.checkbox{
  background: #E3E3E3 no-repeat center / 12px auto;
  border: 1px solid transparent;
  outline: none;
  width: 20px;
  height: 20px;
  display: block;
  /*border-radius: 3px;*/
  cursor: pointer;
  border-radius: 100%;
  position: relative;
}

.checkbox:before{
  content: '';
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
}

.checkbox-input{
  display: none;
}

.checkbox-input:checked ~ .checkbox:before{
  /*background-image: url("../img/check.svg");*/
  border-color: #298D4C;
  background-color: #298D4C;
}

.checkbox-label{
  display: block;
  margin-left: 8px;
  font-size: 14px;
}
</style>