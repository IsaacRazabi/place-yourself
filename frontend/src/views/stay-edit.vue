
<template>
  <main class="edit-container">
    <navBar class="edit-navBar"></navBar>
    <main class="add-container" v-if="loggedInUser">
      <section v-if="stayToEdit">
        <form class="stay-edit" @submit.prevent="saveStay">
          <h1>{{ title }}</h1>
          <label for="name">Name: </label>
          <input
            class="edit-input"
            id="name"
            type="text"
            v-model="stayToEdit.name"
          />
          <label for=" summary"> decsribe your loaction </label>
          <input class="edit-input" type="text" v-model="stayToEdit.summary" />
          <label for=" location"> Located at </label>
          <input
            class="edit-input"
            type="text"
            v-model="stayToEdit.loc.address"
          />
          <label for="price">Price: </label>
          <input
            class="edit-input"
            id="price"
            type="text"
            v-model.number="stayToEdit.price"
          />
          <label for="type">Type: </label>
          <select
            name=""
            placeholder="Select category"
            v-model="stayToEdit.type"
          >
            <option value="house">house</option>
            <option value="bikta">bikta</option>
            <option value="ohel">ohel</option>
          </select>
          <!-- <label for="upload Photos">upload Photos</label>
      <input class="edit-input" type="file" id="input" multiple /> -->
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              jpg/png files with a size less than 500kb
            </div>
          </el-upload>
          <button>Save</button>
        </form>
        <button><router-link to="/explore">back</router-link></button>
      </section>
    </main>
    <main v-else>
      <h1>you can easily sign-up and become one of our hostes !</h1>
      <router-link to="/sign-up">
        <button>sign-up</button>
      </router-link>
    </main>
  </main>
</template>

<script>
import { stayService } from "../services/stay.service.js";
import { userService } from "../services/user.service.js";
import navBar from "../components/nav-bar.vue";
export default {
  data() {
    return {
      stayToEdit: {
        name: "",
        summary: "",
        price: null,
        loc: { address: "" },
        type: "",
        createdAt: Date.now(),
        imgUrls: [],
        reviews: [],
        host: {
          _id: '',
          fullname: '',
          imgUrl: '',
        },
        //   host:{
        //        _id: userService.getLoggedinUser()._id ,
        // fullname: userService.getLoggedinUser().fullname,
        // imgUrl :userService.getLoggedinUser().imgUrl
        //   }
      },
    };
  },
  created() {
    const { stayId } = this.$route.params;
    //cheak if there is on the url an id to determend add or edit
    if (stayId) {
      stayService.getById(stayId).then((stay) => {
        this.stayToEdit = stay;
      });
    } else {
      this.stayToEdit = stayService.getEmptyStay();
    }
  },
  methods: {
    saveStay() {
      if(!this.stayToEdit.imgUrls.length){
     this.stayToEdit.imgUrls.push("https://a0.muscache.com/im/pictures/689fbec7-3c63-44d6-a1ef-c4336e54e314.jpg?im_w=720","/img/exam-home4.b4a356bc.jpg","/img/exam-home3.a51f4729.jpg") 
      }
      this.$store
        .dispatch({ type: "saveStay", stay: this.stayToEdit })
        .then(() => {
          this.$store.dispatch({ type: "loadStayes" });
        })
        .then(() => {
          userService.addUserStay({ stay: this.stayToEdit });
        })
        .then(() => this.$router.push({ path: "/explore" }));
    },
    handlePreview(file) {
      console.log(file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
    },
  },
  computed: {
    title() {
      return this.$route.params.stayId ? "stay Edit" : "stay Add";
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  components: {
    navBar,
  },
};
</script>

<style  scoped>

</style>