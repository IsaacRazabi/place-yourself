<template>
<div class="card-container">
      <div class="card">
        <router-link  :to="'/stay/details/'+stay._id">
          <div class="card-img">
            <!-- <span class="my-heart">♡</span> -->
            <img class="showImage-img" :src="showImage"/>
            <!-- <img-carusel :stay=stay></img-carusel> -->
          </div>
          <!-- <router-link  :to="'/stay/details/'+stay._id"> -->
          <div class="card-details"> 
            <img src="../assets/examp/red-star.jpg" alt="" srcset="">
            <span v-if="stay.reviews[0].rate" class="rating"> {{stay.reviews[0].rate}} </span>
            <span v-if="stay.reviews[0].votes" class="voters">({{stay.reviews[0].votes}})</span>
            <!-- <p>{{stay.loc.country}}</p> -->
            <p>Entire apartment - {{stay.loc.address}}</p>
            <p>{{stay.name}} </p>
            <p>
              <span class="cost">
                 ${{stay.price}} 
              </span>
              <span>
                / night 
              </span>
            </p>
          </div>
        </router-link>
      </div>
</div>
</template>

<script>
// import imgCarusel from "./img-carusel.vue";
export default {
  props: {
    stay: {
      type: Object,
    },
    user : {
        type : Object
    },
    imgs :{
      type: Array,
    //   deafult : "../assets/images/images/4.jpg"
    }
  },
  components:{
    //  imgCarusel,
  },
  computed :{
showImage(){
return this.stay.imgUrls[0]
}
  },
methods: {

},
  data() {
    return {
    
    };
  }
}
</script>

<style scoped>

</style>

