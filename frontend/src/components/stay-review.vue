<template>
  <div class="container home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ul class="review-list">
      <li v-for="(review, idx) in reviews" :key="idx">
        <p>
          About
          <router-link :to="`user/${review.aboutUser._id}`">
            {{ review.aboutUser.fullname }}
          </router-link>
        </p>
        <h3>{{ review.txt }}</h3>
        <p>
          By
          <router-link :to="`user/${review.byUser._id}`">
            {{ review.byUser.fullname }}
          </router-link>
        </p>
        <hr />
      </li>
    </ul>
    <hr />
    <form v-if="loggedInUser" @submit.prevent="addReview()">
      <h2>share your exprience</h2>
      <!-- <select v-model="reviewToEdit.aboutUserId">
        <option v-for="(user,idx) in users" :key="user._id" :value="idx" >
          {{user.fullname}}
        </option>
      </select> -->
      <textarea
        placeholder="Your Opinion Matters..."
        v-model="reviewToEdit.txt"
      ></textarea>
      <button>Save</button>
    </form>
  </div>
</template>


<script>
import { stayService } from "../services/stay.service.js";
export default {
  // props:{
  // reviews : {
  //   type : Array
  // }
  // },
  data() {
    return {
      reviewToEdit: {
        txt: "",
        aboutUserId: null,
      },
    };
  },
  computed: {
    stay() {
      const { stayId } = this.$route.params;
     return JSON.parse(stayService.getById(stayId));
    },
    reviews() {
      return this.stay.reviews;
    },
    // reviews() {
    //   return this.$store.getters.reviews;
    // },
    users() {
      return this.$store.getters.users;
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadUsers" });

    // this.$store.dispatch({type: 'loadReviews'})
  },
  methods: {
    async addReview() {
      this.reviews.push(this.reviewToEdit);
      await this.$store.dispatch({ type: "saveStay", stay: this.reviews });
      this.reviewToEdit = { txt: "", aboutUserId: null };
    },
  },
};
</script>
