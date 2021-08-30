<template>
<main class="nav-bar-container" v-bind:class="{ active: onTop }">
  <!-- <main class="nav-bar-container"> -->
  <div class="nav-bar-main">
    <section class="header-container" v-bind:class="{ filterShow: isFilterShow }">

    <router-link to="/" class="home" exact>
    <div class="logo-container">
      <div class="logo-img-container">
        <img class="logo-img" src="@/assets/imgs/app-logo/placetobnbred-logo.jpg">
      </div>
      <div class="logo-title">
        placetobnb
      </div>
    </div>  
     </router-link>
       <button class="search-btn" v-if="this.$route.name==='explore'" @click="showFilter" >
          <div>start your search</div>  
          <div><img class="red-btn2" src="@/assets/imgs/app-logo/search-red-btn.jpg" /></div>
        </button>


      <div class="side-header">

      <nav class="nav-menu">

        <router-link to="/" class="home" exact><span>Home</span></router-link> 
        <router-link to="/explore"><span>Explore</span></router-link> 
        <router-link  to="/host"><span>Become a host</span></router-link>
        <!-- <router-link  to="/office"><span>Back office</span></router-link> -->
               <!-- <router-link  to="/office1"><span>Back office1</span></router-link> -->

      </nav>

       <div class="dropdown">
        <span  class=" user" @click="toogleShow">
          <img
            class="header-img"
            src="@/assets/imgs/user-login/download.png"
          /><img v-if="loggedInUser"
            class="header-img"
            src="@/assets/imgs/user-login/userGuest.a58b1fc1 - red.jpg"
          />
          <img v-else
            class="header-img"
            src="@/assets/imgs/user-login/userGuest.a58b1fc1 - dark.jpg"
          />
           <!-- <button>💳{{massages.length }}</button> -->
          <!-- <p >
          {{orders}}💳
          </p> -->
           <!-- {{orders}} -->
        </span>
        <!-- </div> -->
        <div v-bind:class="{ show: isShow }" >
          <div v-bind:class="{ show: isShow }" class="dropdownContent">
          <div class="hello-user" v-if="loggedInUser"><a>Hello {{ loggedInUser.fullname }}</a></div>
           <hr v-if="loggedInUser"/>
          <span v-if="loggedInUser" @click="logout"><a>Log Out</a></span>
          <router-link v-else to="/sign-up">Log In</router-link>
          <router-link to="/sign-up">Sign Up</router-link>
          <!-- <router-link v-if="loggedInUser" :to="`/user/${loggedInUser._id}`">User profile</router-link> -->
          <hr/>
          <router-link  to="/office"><span>User Profile</span></router-link>
          <router-link  to="/office1"><span>Back Office</span></router-link>
          </div>
          </div>
        </div>
        </div>
      <!-- <section v-if="loggedInUser">
        <p>Hello {{ loggedInUser.fullname }}</p>
        <button @click="logout">Logout</button>
      </section> -->

    </section>
       <stayFilter v-if=isFilterShow   class="filter fixing-filter" @filter="filter"></stayFilter>
</div>
</main>
</template>

<script>
     import stayFilter from '../components/stay-filter.vue'
     import {socketService} from '../services/socket.service'
export default {
  name: "nav-bar",
  data() {
    return {
      loggedInUser: this.$store.getters.loggedinUser,
      isShow: true,
      isFilterShow:false,
      onTop: false,
       massages: [],
   orders : 0
    };
  },
  components: {
   stayFilter,
  },

  computed: {
    currentRouteName() {
        return this.$route.name;
    },
     isScroll(){
      if (this.onTop) return true
      else {return false}
     },
     isOnTop () {
       return this.onTop
      //  else {return false}
      // return true
     }
},
  methods: {
       filter(filterBy) {
      this.$store.commit({ type: "filterStayes", filterBy });
      this.$store.dispatch("loadStayes");
    },
     addMsg(msg) {
      this.massages.push(msg);
    },
    showFilter(){
this.isFilterShow = !this.isFilterShow
    },
        logout() {
      this.$store
        .dispatch({ type: "logout" })
        .then(() => (this.loggedInUser = null));
    },
    toogleShow() {
      this.isShow = !this.isShow;
    },
 changeTopic() {
      socketService.emit('chat topic', this.topic)
    },
    addOrder(){
this.orders++
    },
    toggelTop(){
  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) 
{
   this.onTop = false
}
else{
   this.onTop =true
}
//     addMsg(msg){
// this.massages.push(msg)
//     }
  },
  created(){
   socketService.emit('chat topic', this.topic)
    socketService.on('chat addMsg', this.addMsg)
    socketService.on("newOrder", this.addOrder)
          //  socketService.on('chat addMsg', this.addMsg)

window.addEventListener("scroll", ()=>{
  this.toggelTop()
})
  }
  },

  
  destroyed() {
    socketService.off('chat addMsg', this.addMsg)
    // socketService.terminate();
       removeEventListener('scroll', this.toggelTop)
  },

};
</script>
<style scoped>
input, button, submit { border:none; background: white; } 
/* .active{
z-index: -1;
} */

/* .nav-bar-container{
    background-color: white;
    box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
}

.header-container {
  background-color: #fff !important;
} */
</style>