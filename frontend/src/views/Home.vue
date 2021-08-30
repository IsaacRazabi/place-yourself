<template>
  <section>
    <header>
      <nav-bar></nav-bar>
      <appHeader></appHeader>
      <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div> -->
    </header>
    <main>
      <appMain></appMain>
    </main>
    <footer>
      <appFooter></appFooter>
    </footer>
  </section>
</template>

<script>
// @ is an alias to /src

import navBar from "@/components/nav-bar.vue";
import appHeader from "@/components/app-header.vue";
import appMain from "@/components/app-main.vue";
import appFooter from "@/components/app-footer.vue";
import NavBar from '../components/nav-bar.vue';


export default {
  name: "Home",
  components: {
    navBar,
    appHeader,
    appMain,
    appFooter,
  },
};
    NavBar
</script>
