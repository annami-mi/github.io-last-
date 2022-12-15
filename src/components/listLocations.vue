<template>
  <ul class="list">
    <li v-for="location of locations"
        :key="location.id">
      <card-location :location_info="location"></card-location>
    </li>
  </ul>
</template>

<script>
import CardLocation from "@/components/cardLocation";
export default {
  name: "listLocation",
  props: {
    locations_data: {
      type: Object
    },
  },
  data(){
    return{
      locations: [],
    }
  },
  components: {CardLocation},
  methods: {
    showList() {
      this.locations = this.locations_data
    },
  },
  watch: {
      locations_data() {
      this.showList()
    },
  }
}
</script>

<style scoped>
.list{
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
}

</style>