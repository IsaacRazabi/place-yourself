<template>
  <main>
    <navBar></navBar>

    <section v-if="stay" class="details-section">
      <div class="deatails-head-container">
        <h2 class="details-title">{{ stay.name }}</h2>
        <div class="details-subtitle">
          <div>
            <img v-if="stay.reviews[0].rate" src="../assets/examp/red-star.jpg" alt="" srcset="" />
            <span v-if="stay.reviews[0].rate"  class="rating"> {{ stay.reviews[0].rate }} </span>
            <span v-if="stay.reviews[0].votes"  class="voters"
              >({{ stay.reviews[0].votes }} <a>reviews</a>)
            </span>
            <span>· {{ stay.loc.address }}, {{ stay.loc.country }}</span>
          </div>
          <div class="share-n-save">
            <img src="../assets/examp/share-icon.jpg" alt="" srcset="" />
            <span> Share </span>
            <img src="../assets/examp/save-icon.jpg" alt="" srcset="" />
            <span> Save</span>
          </div>
        </div>
        <div class="details-galery">
          <img class="pic1" :src="showImage" alt="" srcset="" />
          <img class="pic2" src="../assets/examp/exam-home2.jpg" />
          <img class="pic3" src="../assets/examp/exam-home4.jpg" />
          <img class="pic4" src="../assets/examp/exam-home3.jpg" />
          <img class="pic5" src="../assets/examp/exam-home5.jpg" />
        </div>
      </div>

      <main class="details-main-container">
        <div class="details-left-column">
          <div class="details-left-column-title">
            <div class="title-details">
              <h2>Entire house hosted by {{ stay.host.fullname }}</h2>
              <span>3 guests · 1 bedroom · 2 beds · 1 bath</span>
            </div>
            <div class="details-left-column-avatar">
              <img src="../assets/examp/exam-avatar.jpg" />
            </div>
          </div>

          <div class="ditails-description">
            <div class="ditails-description-sections">
              <div class="ditails-description-icon">
                <img src="../assets/examp/great-location-icon.jpg" />
              </div>
              <div class="ditails-description-title">
                <h3>Great location</h3>
                <p>93% of recent guests gave the location a 5-star rating.</p>
              </div>
            </div>
            <div class="ditails-description-sections">
              <div class="ditails-description-icon">
                <img src="../assets/examp/wifi-icon.jpg" />
              </div>
              <div class="ditails-description-title">
                <h3>Wifi</h3>
                <p>Guests often search for this popular amenity.</p>
              </div>
            </div>
            <div class="ditails-description-sections">
              <div class="ditails-description-icon">
                <img src="../assets/examp/outstanding-hosp-icon.jpg" />
              </div>
              <div class="ditails-description-title">
                <h3>Outstanding hospitality</h3>
                <p>
                  6 recent guests complimented Maayan for outstanding
                  hospitality.
                </p>
              </div>
            </div>
          </div>
          <div class="details-all-about">
            <h3>All about {{ stay.host.fullname }}’s place</h3>
            <p>
              Our home is located in the Galilee close to tzfat and the kineret
              lake. The place is perfect for families (with kids) ,couples, solo
              adventurers, business travelers. we built this home by our own
              hands , and it feels really cozy and homy
            </p>
          </div>
          <h3>What this place offers</h3>
          <div class="details-offers">
            <div class="details-offers-column-left">
              <div class="details-offers-column">
                <img src="../assets/examp/icons/Kitchen-icon.jpg" />
                <div>Kitchen</div>
              </div>
              <div class="details-offers-column">
                <img
                  src="../assets/examp/icons/Free-parking-on-premises-icon.jpg"
                />
                <div>Free parking on premises</div>
              </div>
              <div class="details-offers-column">
                <img src="../assets/examp/icons/Window-AC-unit-icon.jpg" />
                <div>Window AC unit</div>
              </div>
              <div class="details-offers-column">
                <img src="../assets/examp/icons/Patio-or-balcony-icon.jpg" />
                <div>Patio or balcony</div>
              </div>
              <div class="details-offers-column">
                <img src="../assets/examp/icons/Refrigerator-icon.jpg" />
                <div>Refrigerator</div>
              </div>
            </div>
            <div class="details-offers-column-right">
              <div class="details-offers-column">
                <img src="../assets/examp/icons/wifi-icon.jpg" />
                <div>Wifi</div>
              </div>
              <div class="details-offers-column">
                <img src="../assets/examp/icons/tv-icon.jpg" />
                <div>TV</div>
              </div>
              <div class="details-offers-column">
                <img src="../assets/examp/icons/Bathtub-icon.jpg" />
                <div>Bathtub</div>
              </div>
              <div class="details-offers-column">
                <img src="../assets/examp/icons/Backyard-icon.jpg" />
                <div>Backyard</div>
              </div>
              <div class="details-offers-column">
                <img src="../assets/examp/icons/Oven-icon.jpg" />
                <div>Oven</div>
              </div>
            </div>
          </div>
        </div>

    
    
      <div class="details-right-column">
        <div class="details-reservation">
          <div class="details-reservation-box">
            <div class="details-reservation-title">
              <div class="details-reservation-price">
                <p>
                  <span class="cost">
                    ${{stay.price}} 
                  
                  </span>
                   <span class="etails-reservation-price-night">
                   / night 
                   </span>
                </p>
              </div>
              <div class="details-reservation-rating">
                <img src="../assets/examp/red-star.jpg" alt="" srcset="" />
                <span v-if="stay.reviews[0].rate" class="rating"> {{ stay.reviews[0].rate }} </span>
                <span v-if="stay.reviews[0].votes"  class="voters">({{ stay.reviews[0].votes }})</span>
              </div>
            </div>
            <form>
              <div class="details-reservation-Order">
                <div class="details-reservation-check-in">
                  <p>CHECK IN</p>
                  <p><input v-model="orderToEdit.checkIn" placeholder="Add date"  class="textbox-n" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" /></p>
                  <div class="block">
                    <span class="demonstration"></span>
                    <!-- <el-date-picker class="el-date-picker"
                    v-model="orderToEdit.dates"
                    type="datetimerange"
                    cellClassName="date-picker"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date">
                    </el-date-picker> -->
                  </div>
                </div>
                <div class="details-reservation-check-out">
                  <p>CHECK OUT</p>
                  <p><input @input="showInfo"  v-model="orderToEdit.checkOut" placeholder="Add date" class="textbox-n" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" /></p>
                  </div>
                <div class="details-reservation-guests"><p>GUESTS</p>
                  <!-- <p class="fix-guests-number"><el-input-number  v-model="orderToEdit.guests" :min="1" :max="3"></el-input-number></p> -->
                <p><input v-model="orderToEdit.guests" placeholder="1 guests" class="textbox-n" type="text" onfocus="(this.type='number')" onblur="(this.type='text')" /></p>
                </div>
              </div>
              <div class="form-btn-approval">
                <button @click="reserve">Check availability</button>
              </div>
            </form>
             <div v-if="isOrderActive" class="order-extension">
               <div class="order-extension-container">
                 <div class="order-extension-title">
                   You won't be charged yet
                   </div>
                   <div class="order-extension-summary">
                      <div class="summary-count">
                        <div>$100 x 5 nights</div>
                        <div>$500</div>
                      </div>
                      <div class="summary-count">
                        <div>Cleaning fee</div>
                        <div>$55</div>
                      </div>
                      <div class="summary-count">
                        <div>Service fee</div>
                        <div>$27</div>
                      </div>
                    </div>
                    <div class="order-extension-total">
                      <div class="summary-total">
                        <div>Total</div>
                        <div>$582</div>
                      </div>
                    </div>
                 </div>
             </div>
          </div>
        </div>
        

        </div>

<!-- 
          <form>
                <div class="details-reservation-Order">
                  <div class="details-reservation-check-in">
                    <p>CHECK IN</p>
                      <input
                        placeholder=""
                        class="textbox-n"
                        type="text"
                        onfocus="(this.type='date')"
                        onblur="(this.type='text')"
                        id="date"
                      /> -->
                    <!-- <p>
                        <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="orderToEdit.dates"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
                    </p>
                  </div>
                  <div class="details-reservation-check-out">
                    <p>CHECK OUT</p>
                    <p>
                      <input
                        placeholder=""
                        class="textbox-n"
                        type="text"
                        onfocus="(this.type='date')"
                        onblur="(this.type='text')"
                        id="date"
                      />
                    </p>
                  </div>
                  <div class="details-reservation-guests">
                    <p>GUESTS</p>
                    {{orderToEdit.guests}}
                    <p><input v-model="orderToEdit.guests" type="number" /></p>
                  </div>
                </div>
                <div class="form-btn-approval">
                  <button @click="reserve">Check availability</button>
                </div>
              </form>
 --> 


      </main>
      <aside class="details-reviews">
        <div class="details-reviews-box">
          <div class="details-reviews-user-details">
            <div class="details-reviews-user-img">
              <img src="../assets/examp/exam-avatar1.jpg" />
            </div>
            <div class="details-reviews-user-name-n-date">
              <h5>Phillip</h5>
              <span>April 2018</span>
            </div>
          </div>
          <div class="details-review-text">
            <p>
              This place is amazing! I would recommend it to anyone who wants to
              stay in the region. It is close to both Haifa and Tiberias with a
              view that is the best in the region.
            </p>
          </div>
        </div>
        <div class="details-reviews-box">
          <div class="details-reviews-user-details">
            <div class="details-reviews-user-img">
              <img src="../assets/examp/exam-avatar2.jpg" />
            </div>
            <div class="details-reviews-user-name-n-date">
              <h5>Susan</h5>
              <span>April 2017</span>
            </div>
          </div>
          <div class="details-review-text">
            <p>
              We had a wonderful stay at Maayan's place. The location is lovely,
              high on a mountain with an amazing view. The house was spacious,
              clean, and well-equipped
            </p>
          </div>
        </div>
        <div class="details-reviews-box">
          <div class="details-reviews-user-details">
            <div class="details-reviews-user-img">
              <img src="../assets/examp/exam-avatar3.jpg" />
            </div>
            <div class="details-reviews-user-name-n-date">
              <h5>Elishai</h5>
              <span>August 2020</span>
            </div>
          </div>
          <div class="details-review-text">
            <p>
              We stayed two night during the weekend with our extended family .
              The house was very accommodating, great shower. Wonderful for
              summer
            </p>
          </div>
        </div>
        <div class="details-reviews-box">
          <div class="details-reviews-user-details">
            <div class="details-reviews-user-img">
              <img src="../assets/examp/exam-avatar4.jpg" />
            </div>
            <div class="details-reviews-user-name-n-date">
              <h5>Mika</h5>
              <span>March 2018</span>
            </div>
          </div>
          <div class="details-review-text">
            <p>
              A great and funky place with a fantastic view of Galilea
              mountains. Very convenient if you want to explore Northern Israel.
              A bit far from grocery stores/restaurants but compensated by
              tranquility.
            </p>
          </div>
        </div>
        <div class="details-reviews-box">
          <div class="details-reviews-user-details">
            <div class="details-reviews-user-img">
              <img src="../assets/examp/exam-avatar5.jpg" />
            </div>
            <div class="details-reviews-user-name-n-date">
              <h5>Noa</h5>
              <span>April 2021</span>
            </div>
          </div>
          <div class="details-review-text">
            <p>
              House is great to relax in. Pleasant breeze even during mid
              August. Relaxing porch with couches and dining area. Hararit is
              quite and has access to some light hiking in the surrounding
              forests
            </p>
          </div>
        </div>

        <div class="details-reviews-box">
          <div class="details-reviews-user-details">
            <div class="details-reviews-user-img">
              <img src="../assets/examp/exam-avatar6.jpg" />
            </div>
            <div class="details-reviews-user-name-n-date">
              <h5>Jenny</h5>
              <span>August 2020</span>
            </div>
          </div>
          <div class="details-review-text">
            <p>
              We stayed at this house for 2 night in August, 6 adults and one
              1.3 years old child. The house is beautiful and the view is
              amazing. My son is in love with this place and all the toys.
              Notice that there is no air conditioning in the rooms, so some of
              them are quite hot, even though there is a fan there.
            </p>
          </div>
        </div>

        <div v-for="review in stay.reviews" :key="review.id" class="details-reviews-box">
          <div class="details-reviews-user-details">
            <div class="details-reviews-user-img">
              <img src="../assets/examp/userGuest.a58b1fc1 - dark.jpg" />
            </div>
            <div class="details-reviews-user-name-n-date">
            <router-link :to="`/user/${review.by._id}`">
              <h5>{{review.by.fullname }}</h5>
           </router-link>
              <span>June 2021</span>
            </div>
          </div>
          <div class="details-review-text">
            <p>
           {{ review.txt }}
            </p>
             <!-- <el-rate v-if="review.rate" v-moי3del="review.rate" :colors="colors" disabled> </el-rate> -->
          </div>
       </div>

          </aside>
         <h2>Where you'll be</h2>
      <GmapMap
  :center="{lat:48.864716, lng:2.349014}"
  :zoom="10"
  map-type-id="terrain"
  style="width: 1200px; height: 500px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
<!-- 
         <div class="flex">
        <ul class=" a-clean reviews-container ">
          <li class="review-box" v-for="review in stay.reviews" :key="review.id"> -->

<!-- <div v-for="review in stay.reviews" :key="review.id" class="details-reviews-box">
          <div class="details-reviews-user-details">
            <div class="details-reviews-user-img">
              <img src="../assets/examp/exam-avatar6.jpg" />
            </div>
            <div class="details-reviews-user-name-n-date">
            <router-link :to="`/user/${review.by._id}`">
              <h5>{{ review.by.fullname }}</h5>
           </router-link>
              <span>August 2020</span>
            </div>
          </div>
          <div class="details-review-text">
            <p>
           {{ review.txt }}
            </p>
             <el-rate v-if="review.rate" v-model="review.rate" :colors="colors" disabled> </el-rate>
          </div>
       </div> -->
          <!-- </li>
        </ul>
        </div> -->

      <div>
        <form v-if="loggedInUser" @submit.prevent="addReview()">
          <h2>Share your exprience</h2>
<div class="txt-input el-textarea"></div>
          <textarea 
            autocomplete="off"
            rows="8"
            placeholder="Share your experience here..."
            class="el-textarea__inner"
            style="min-height: 33px"
             v-model="reviewToEdit.txt"
          ></textarea>

          <!-- <input  v-model="reviewToEdit.txt" /> -->
          <div class="block">
            <span class="demonstration"></span>
            <el-rate  v-model="reviewToEdit.rate" :colors="colors"> </el-rate>
          </div>
          <button>Save</button>
        </form>
      </div>
    </section>
    <appFooter></appFooter>
  </main>
  
</template>

<script>
import { stayService } from "../services/stay.service.js";
import {socketService} from '../services/socket.service.js'
import navBar from "../components/nav-bar.vue";
import { userService } from "../services/user.service.js";
import appFooter from "@/components/app-footer.vue";
// import maps from '../components/maps.vue'
// import  {mapService} from '../services/map.service'
export default {
  data() {
    return {
      reviewToEdit: {
        id: userService._makeId(),
        txt: "",
        rate: 3,
        votes: 3,
        by: {
          _id: '',
          fullname: '',
          imgUrl: '',
        },
      },
      stay: "",
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      orderToEdit: {
        _id: "",
        hostId: "",
        createdAt: Date.now(),
        buyer: {
          _id: "",
          fullname: "",
        },
        totalPrice: 0,
        // startDate: "2025/10/15",
        // endDate: "2025/10/17",
        dates: [],
        checkIn:'',
        checkOut:'',
        guests: 1,
        stay: {
          _id: "",
          name: "",
          price: 0,
        },
        status: "pending",
        isOrderActive : false
      },
// dayes:0
    };
    
  },
  computed: {
    showImage() {
      return this.stay.imgUrls[0];
    },
    showAvatarImage() {
      return this.stay.host.imgUrl;
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    // totalPriceToClose(){
    //   return this.orderToEdit.price*this.orderToEdit.guests*this.days
    // }
  },
  components: {
    // maps,
    navBar,
    appFooter,
  },
  methods: {
    showImages() {
      return this.stay.imgUrls;
    },
    addReview() {
      // this.stay.reviews.push(this.reviewToEdit);
      this.reviewToEdit.by._id = this.loggedInUser._id;
      this.reviewToEdit.by.fullname = this.loggedInUser.fullname;
      this.reviewToEdit.by.imgUrl = this.loggedInUser.imgUrl;
      this.$store.dispatch({
        type: "updateStay",
        stay: this.stay,
        review: this.reviewToEdit,
      });
      userService.addUserReview({ review: this.reviewToEdit, stay: this.stay });
      this.reviewToEdit = { txt: "" };
    },
    reserve() {
      let days = Math.floor(
        (this.orderToEdit.dates[1] - this.orderToEdit.dates[0]) /
          (1000 * 60 * 60 * 24)
      );
      // this.dayes=dayes
      // this.orderToEdit.checkIn = this.orderToEdit.checkIn.toLocaleString();
      // this.orderToEdit.checkOut = this.orderToEdit.checkOut.toLocaleString();
      this.orderToEdit.buyer._id = this.loggedInUser._id;
      this.orderToEdit.buyer.fullname = this.loggedInUser.fullname;
      this.orderToEdit.totalPrice = days * this.stay.price;
      this.orderToEdit.hostId = this.stay.host._id;
      this.orderToEdit.stay._id = this.stay._id;
      this.orderToEdit.stay.name = this.stay.name;
      this.orderToEdit.stay.price = this.stay.price;
      this.$store.dispatch({ type: "saveOrder", order: this.orderToEdit });
         socketService.emit('orderToSend',this.orderToEdit)
       this.$router.push({path: '/office1'})
      userService.addUserOrder({ order: this.orderToEdit });
    },
    showInfo(){
      this.isOrderActive = true
    }
//     onInit() {
//     mapService.initMap()
//         .then(() => {
//             console.log('Map is ready');
//         })
//         .catch(() => console.log('Error: cannot init map'));
// }
  },
  created() {
    window.scrollTo(0, 0);
    const { stayId } = this.$route.params;
    stayService.getById(stayId).then((stay) => {
      this.stay = stay;
    });
    socketService.on('newOrder',this.orderToEdit)
    // this.onInit()
  },
};
</script>

<style scoped>

</style>>

