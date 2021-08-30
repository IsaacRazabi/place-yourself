<template>
  <main>
    <navBar></navBar>
    <section class="center" v-if="this.user">
      <div>
        <img class="user-img" src="@/assets/examp/user-avatar.png" />
        <h4>{{ user.fullname }}</h4>
      </div>
    <div   v-if="this.user._id">
         <h1> your stayes </h1>

         
       <ul v-if="this.stayes" >
        <li
          class="a-clean"
          v-for="(stay, idx) in stayes"
          :key="idx"
        >
     
        <div v-if="stay.host._id===user._id">
          <p>stay name : {{ stay.name }}</p>
              <p>price per night : {{ stay.price }}</p>
              <p>stay summary: {{ stay.summary }}</p>
              <p>type : {{ stay.type }}</p>
              <img :src="stay.imgUrls[0]" />
<div v-if="stay.orders">
 <ul >
        <li
          class="a-clean"
          v-for="(order, idx) in stay.orders"
          :key="idx"
        >
         <p>ordere at : {{ order.createdAt }}</p>
            <p>order price: {{ order.totalPrice }}</p>
            <p>cheak in : {{ order.dates[0] }}</p>
            <p>check out : {{ order.dates[1] }}</p>
            <p>number of guests: {{ order.guests }}</p>
            <p>location : {{ order.stay.name }}</p>
            <button @click="confirmOrder(1,stay,idx)">confirm order</button>
            <button @click="confirmOrder(0,stay,idx)">reject order</button>
            <p>status: {{ order.status }}</p>

               </li>
        </ul>
</div>
        </div>
        </li>
        </ul>
    </div>





<h2> your orders </h2>
 <ul v-if="this.stayes" >
        <li
          class="a-clean"
          v-for="(stay, idx) in stayes"
          :key="idx"
        >
     
<div v-if="stay.orders">
 <ul >
        <li
          class="a-clean"
          v-for="(order, idx) in stay.orders"
          :key="idx"
        >
                <div v-if="order.byUserId===user._id">
         <p>ordere at : {{ order.createdAt }}</p>
            <p>order price: {{ order.totalPrice }}</p>
            <p>cheak in : {{ order.dates[0] }}</p>
            <p>check out : {{ order.dates[1] }}</p>
            <p>number of guests: {{ order.guests }}</p>
            <p>location : {{ order.stay.name }}</p>
            <p>status: {{ order.status }}</p>
</div>

               </li>
        </ul>
        </div>
        </li>
        </ul>

      <!-- <h2>your orders</h2>
      <div v-if="this.orders">
        <ul>
          <li class="a-clean" v-for="(order, idx) in this.orders" :key="idx">
         <div v-if="order.byUserId===user._id">
            <p>ordere at : {{ order.createdAt }}</p>
            <p>order price: {{ order.totalPrice }}</p>
            <p>cheak in : {{ order.dates[0] }}</p>
            <p>check out : {{ order.dates[1] }}</p>
            <p>number of guests: {{ order.guests }}</p>
            <p>location : {{ order.stay.name }}</p>
            <p>status: {{ order.status }}</p>
         </div>
          </li>
        </ul>
      </div> -->




      <h2>your reviews</h2>
      <div v-if="user.reviews.length">
        <ul>
          <li class="a-clean" v-for="(review, idx) in user.reviews" :key="idx">
            {{ review.txt }}
            <el-rate
              v-if="review.rate"
              v-model="review.rate"
              :colors="colors"
              disabled
            >
            </el-rate>
          </li>
        </ul>
      </div>


      <details>
        <summary>pesrsonal info</summary>
        <pre>user name : {{ user.username }}</pre>
        <pre> full name : {{ user.fullname }}</pre>
        <pre v-if="user.reviews.length">
 reviews added : {{ user.reviews.length }}</pre
        >
        <pre> add profile img 
      <pre> orders: {{ user.orders.length }}</pre>

             <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
 :on-success="handleSuccess"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
      </pre>
      </details>
    </section>
  </main>
</template>

<script>
import { userService } from "../services/user.service.js";
import navBar from "../components/nav-bar.vue";

export default {
  data() {
    return {
      user: "",
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
  methods: {
    handlePreview(file) {
      console.log(file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
    },
    confirmOrder(diff, orderToSave,idx) {
      console.log(diff,idx);
      if (diff === 1) orderToSave.orders[idx].status = "confirm";
      if (diff === 0) orderToSave.orders[idx].status = "rejected";
      this.$store.dispatch({ type: "updateStayStatus", orderToSave });
    },
  },
  components: {
    navBar,
  },
  async created() {
  await  this.$store.dispatch("loadStayes");
  await this.$store.dispatch("loadUsers");
  await this.$store.dispatch("loadOrders");
    const user = await userService.getById(this.$route.params.id);
    this.user = user;
  },

  computed: {
    orders() {
      return this.$store.getters.ordersToDisplay;
    },
    stayes() {
      return this.$store.getters.stayesToDisplay;
    },
    users() {
      return this.$store.getters.users;
    },
    userId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>

</style>