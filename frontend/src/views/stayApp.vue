<template>
<main>
<navBar></navBar>
  <section v-if="stayes">
    <stayList :stayes="stayes"></stayList>
  </section>
  </main>
</template>

<script>
import stayList from "../components/stay-list.vue";
import navBar from '../components/nav-bar.vue'

export default {
  props: {},
  data() {
    return {
   filterBy: {
       loc: {address:''},
        dateStart: new Date().toISOString().substr(0, 10),
        dateEnd: new Date().toISOString().substr(0, 10),
        guests: 0,
              priceStart: 0,
      priceEnd: 1000,
      amenities:{
        TV:false,
Wifi:false,
Kitchen:false,
Smokingallowed:false,
Petsallowed:false,
Cookingbasics:false,
      }
      },
    };
  },
  methods: {

  },

  computed: {
    stayes() {
      return this.$store.getters.stayesToDisplay;
    },
  },
  components: {
    // preview,

   navBar,
    stayList,
  },
  created() {
    let {place} = this.$route.params;
    if (place === undefined) place = '';
    this.filterBy.loc.address = place
    this.$store.commit({ type: "filterStayes",  filterBy : this.filterBy});
    this.$store.dispatch("loadStayes");

  },
};
</script>

<style scoped>
</style>
