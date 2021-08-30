<template>
  <main>
   
    <main>
      <div class="header-main-title">
       Place yourself anywhere anytime
      </div>
      <div class="main-display">
        <div class="filter-container">
          <stayFilter class="filter" @filter="filter"></stayFilter>
        </div>
        <!-- <img
          class="bgc-img"
           :src="getImgSlide"
        /> -->
        <div class="bgc-img-contaner" id="cf">
          <img class="bottom bgc-img" src="@/assets/imgs/bgc/3-itay.jpg" />
          <img class="top bgc-img" src="@/assets/imgs/bgc/5-norway.jpg" />
        </div>
      </div>
    </main>
  </main>
</template>

<script>
import stayFilter from "../components/stay-filter.vue";
// import navBar from "./nav-bar.vue";
export default {
  name: "app-header",
  data() {
    return {
      interval: null,
      imgUrl: 1,
  
      isShow: true,
      
    };
  },
  components: {
    stayFilter,
    // navBar,
  },
  computed: {
    getImgSlide(){
      let src=''
      if (this.imgUrl === 1) src= require('@/assets/examp/exam-home2.jpg')
        if (this.imgUrl === 2) src= require('@/assets/imgs/bgc/Airbnb-Beachfront-Greece.webp');
      if (this.imgUrl === 3) src= require('@/assets/imgs/bgc/airbnb-example-home-1000x667.jpg');
      return src
    },
      loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  created() {
    this.interval = setInterval(() => {
      this.imgUrl++;
      if (this.imgUrl > 3) this.imgUrl = 1;
    }, 6000);

  },
  methods: {
    logout() {
      this.$store
        .dispatch({ type: "logout" })
        .then(() => (this.loggedInUser = null));
    },
    toogleShow() {
      this.isShow = !this.isShow;
    },
    filter(filterBy) {
      this.$store.commit({ type: "filterStayes", filterBy });
      this.$store.dispatch("loadStayes");
    },
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>




<style scoped>
/* .main-display {
    position: relative;
    grid-column: 1/-1;
   
  }
  
  .filter {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 70px;
    border-radius: 50px;
    background-color: #fff;
    height: 40px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
    padding: 20px 0;
    z-index: 2;
  }
  .filter * > {
    width: 250px;
  }
  .bgc-img-contaner{
    height: 80vh;
    width: 100%;
    position: relative;
    grid-column: 1/-1;
  }
  .bgc-img {
    height: 80vh;
    width: 100%;
    object-fit: cover;
  }
  .filter-container {
    display: flex;
    justify-content: center;
  }
  
  
  
  #cf {
    position:relative;
    
    margin:0 auto;
  }
  
  #cf img {
    position:absolute;
    left:0;
    -webkit-transition: opacity 3s ease-in-out;
    -moz-transition: opacity 3s ease-in-out;
    -o-transition: opacity 3s ease-in-out;
    transition: opacity 3s ease-in-out;
  }
  
    @keyframes cf3FadeInOut {
    0% {
    opacity:1;
  }
  45% {
  opacity:1;
  }
  55% {
  opacity:0;
  }
  100% {
  opacity:0;
  }
  }
  
  #cf img.top {
  animation-name: cf3FadeInOut;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 15s;
  animation-direction: alternate;
  
  } */
</style>