<template>
  <form @submit.prevent="setFilter">
    <section class="stay-filter">
      <div class="filter-wrraper">
        <span class="location only-location">
          <label> Location </label>
          <input
            v-if="this.$route.name === 'explore'"
            @input="setFilter"
            v-model="filterBy.loc.address"
            type="text"
            color="rgb(180, 169, 169);"
            placeholder="Where are you going? "
          />
          <input
            v-else
            v-model="filterBy.loc.address"
            type="text"
            placeholder="Where are you going? "
            list=" filteredNames"
          />
   
            <datalist v-if="filterBy.loc.address" id=" filteredNames">
              <option  v-for="(word, idx) in  filteredNames"
            :key="idx">{{ word }}</option>
            </datalist>
        </span>
        <span class="location">
          <label> Check in </label>
          <input
            class="textbox-n"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            id="date"
            color="rgb(180, 169, 169);"
            placeholder="Add dates "
          />
          
        </span>
        <span class="location">
          <label> Check out </label>
          <input
            class="textbox-n"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            id="date"
            color="rgb(180, 169, 169);"
            placeholder="Add dates "
          />
          
        </span>
        <span class="location only-guests">
          <label> Guests </label>
          <input
            
            type="number"
            color="rgb(180, 169, 169);"
            placeholder="Add guests "
          />
          
        </span>
       <button>
         <img class="red-btn" src="@/assets/imgs/app-logo/search-red-btn.jpg" />
         </button>
      </div>
    </section>
  </form>
</template>


<script>
import { stayService } from "../services/stay.service.js";
export default {
  name: "stay-filter",
  components: {},
  props: {},
  created() {},
  data() {
    return {
      filterBy: {
        loc: { address: "" },
        dateStart: new Date().toISOString().substr(0, 10),
        dateEnd: new Date().toISOString().substr(0, 10),
        guests: 0,
        priceStart: 0,
        priceEnd: 1000,
        amenities: {
          TV: false,
          Wifi: false,
          Kitchen: false,
          Smokingallowed: false,
          Petsallowed: false,
          Cookingbasics: false,
        },
      },
      isSowen: false,
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      searchWords: stayService.loadSearchNames() || [],
      filteredNames: [],
    };
  },
  computed: {},
  methods: {
    setFilter() {
      this.$emit("filter", JSON.parse(JSON.stringify(this.filterBy)));
      this.$router.push({ path: "/explore" });
      this.$store.dispatch("loadStayes");
      this.activeAutoComplete();
    },
    activeAutoComplete() {
      if (this.searchWords.includes(this.filterBy.loc.address)) return;
      this.searchWords.push(this.filterBy.loc.address);
      stayService.saveSearchNames(this.searchWords);
    },
  },
  watch: {
    filterBy: {
      handler(newVal) {
         this.filteredNames = this.searchWords.filter((word) => {
          return word.startsWith(newVal.loc.address)
        });
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
input,
button,
submit {
  border: none;
  background: white;
}
.a-clean {
  text-decoration: none;
  list-style: none;
}

</style>
