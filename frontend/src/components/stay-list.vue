<template>
 <section>
      <section class="list-section">
    <main class="main-list-container">
    <!-- <div  class="list-title">Places to stay near you</div> -->
<div  class="list-title"> {{this.locationList}}</div>
    
    <div class="list-filter">
      <button @click="tooglePrice" class="btn-filter">Price</button>
      <button class="btn-filter">Loacation</button>
      <button @click="toogleType" class="btn-filter">Type of place</button>
    </div>
 
    <ul>
      <li v-for="stay in stayes" :key="stay._id">
        <!-- <router-link :to="'/stay-details/' + stay._id"> -->
        <stay-preview :stay="stay"></stay-preview>
        
        <!-- </router-link> -->
      </li>
    </ul>


    <div v-bind:class="{ show: isPriceShow, priceContainer: !isPriceShow }">
      <main>
        <p>choose your price</p>
        <div class="block">
          <span class="demonstration">min price</span>
          <el-slider :max=1000 v-model="filterBy.priceStart"></el-slider>
          <p>{{ filterBy.priceStart }}₪</p>
        </div>
        <div class="block">
          <span class="demonstration">max price</span>
          <el-slider :max=1000  v-model="filterBy.priceEnd" ></el-slider>
          <p>{{ filterBy.priceEnd }}₪</p>
        </div>
      </main>
      <button @click="filterByPrice">search</button>
      <button @click="clearPrice">clear</button>
    </div>

    <div v-bind:class="{ show: isTypeShow, amenitiesContainer: !isTypeShow }">
      <main>
  <el-checkbox v-model="filterBy.amenities.TV">TV</el-checkbox>
  <el-checkbox v-model="filterBy.amenities.Wifi">Wifi</el-checkbox>
  <el-checkbox v-model="filterBy.amenities.Kitchen">Kitchen</el-checkbox>
  <el-checkbox v-model="filterBy.amenities.Smokingallowed">Smoking allowed</el-checkbox>
  <el-checkbox v-model="filterBy.amenities.Petsallowed">Pets allowed</el-checkbox>
  <el-checkbox v-model="filterBy.amenities.Cookingbasics">Cooking basics</el-checkbox>
      <button @click="filterByAmenities">search</button>
      <button @click="clearAmenities">clear</button>
</main> 

    </div>
    </main>
    
  </section>
        <appFooter></appFooter>
 </section>
</template>

<script>
import stayPreview from "./preview.vue";
import appFooter from "@/components/app-footer.vue";
export default {
  data() {
    return {
      isPriceShow: true,
      isTypeShow: true,
      filterBy:{
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
      }
    };
  },
  props: {
    stayes: {
      type: Array,
    },
  },
  methods: {
    clearAmenities(){
      this.filterBy.amenities.TV=false;
this.filterBy.amenities.Wifi=false;
this.filterBy.amenities.Kitchen=false;
this.filterBy.amenities.Smokingallowed=false;
this.filterBy.amenities.Petsallowed=false;
this.filterBy.amenities.Cookingbasics=false;
 this.$store.commit({ type: "filterStayes", filterBy:this.filterBy });
  this.$store.dispatch("loadStayes");
    },
    clearPrice(){
 this.filterBy.priceStart= 0,
      this.filterBy.priceEnd= 1000;
       this.$store.commit({ type: "filterStayes", filterBy:this.filterBy });
        this.$store.dispatch("loadStayes");
    },
    tooglePrice() {
      this.isPriceShow = !this.isPriceShow;
    },
    toogleType() {
      this.isTypeShow = !this.isTypeShow;
    },
    filterByAmenities(){
  this.$store.commit({ type: "filterStayes", filterBy:this.filterBy });
      this.$store.dispatch("loadStayes");
    },
    filterByPrice() {
      this.$store.commit({ type: "filterStayes", filterBy:this.filterBy });
      this.$store.dispatch("loadStayes");
    },
  },
  computed:{
    priceToFilter(){return {priceStart:this.filterBy.priceStart , priceEnd:this.filterBy.priceEnd }},
    locationList() {
       const { place } = this.$route.params;
       if (!place) return 'Places to stay around the world '
       return ` places to stay in ${place} ` 
       }
  },
  components: {
    stayPreview,
    appFooter,
  },
  created() {
    window.scrollTo(0, 0);
  },
};
// :user="user"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
