    <template>
  <main>
    <navBar></navBar>

    <section class="signup-container">
      <form class="signup-wraaper" @submit.prevent="login">
        <label for="">login</label>
        <input
          type="text"
          placeholder="username"
          v-model="credencials.username"
          class="signup-input"
        />
        <input
          type="password"
          placeholder="password"
          v-model="credencials.password"
          class="signup-input"
        />
        <button class="signup-input">login</button>
      </form>
      <div class="sign-up" v-if="!loggedInUser">
        <form class="signup-wraaper" @submit.prevent="signup">
          <label for="">sign up</label>
          <input
            type="text"
            placeholder="username"
            v-model="signUpCredencials.username"
            class="signup-input"
          />
          <input
            type="text"
            placeholder="Your full name"
            v-model="signUpCredencials.fullname"
            class="signup-input"
          />
          <input
            type="password"
            placeholder="password"
            v-model="signUpCredencials.password"
            class="signup-input"
          />
          <button class="signup-input">Signup</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import navBar from "../components/nav-bar.vue";
export default {
  data() {
    return {
      credencials: { username: "", password: "" },
      signUpCredencials: {
        username: "",
        password: "",
        fullname: "",
        isAdmin: false,
      },
      loggedInUser: this.$store.getters.loggedinUser,
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch({ type: "login", userCred: this.credencials })
        .then((user) => {
          this.loggedInUser = user;
          this.credencials = { username: "", password: "" };
          this.$router.push("/");
        });
    },
    signup() {
      this.$store
        .dispatch({ type: "signup", userCred: this.signUpCredencials })
        .then((user) => {
          this.loggedInUser = user;
          // this.submitTo();
          this.signUpCredencials = {
            username: "",
            password: "",
            fullname: "",
            isAdmin: false,
          };
          this.$router.push("/");
        });
    },
    logout() {
      this.$store
        .dispatch({ type: "logout" })
        .then(() => (this.loggedInUser = null));
    },
    //   createAutComplete(names){
    // this.completeWords = names
    // },
    //   submitTo() {
    //   let user = this.credencials.username.substring(0,this.credencials.username.indexOf("@"));
    //   if ((this.searchWords).includes(user)) return;
    //   this.searchWords.push(user);
    //   mailService.saveEmailNames(this.searchWords)
    // },
  },
  components: {
    navBar,
  },
  // watch: {
  // credencials: {
  //   handler(newVal, oldVal) {
  //     for (let index = 0; index < this.searchWords.length; index++) {
  //       if (newVal.to[0] === this.searchWords[index][0]) {
  //         const filteredNames = this.searchWords.filter((name)=>{
  //           if (name[0]===newVal.to[0]) return name
  //         })
  //         this.createAutComplete(filteredNames)
  //       }
  //     }

  //   },
  //   deep: true,
  // },

  // },
};
</script>

<style scoped>
</style>







