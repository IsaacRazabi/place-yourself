<template>
  <section class="backoffice-section">
    <navBar class="navBar"></navBar>
    <div class="backoffice-main-container">
 <div class="backoffice-user-details">       
                <div class="backoffice-user-img">
                    <img v-if="user.fullname === 'Issac Razabi'" src="https://a0.muscache.com/im/users/12591733/profile_pic/1393398487/original.jpg?im_w=240" >
                     <img v-else src="../assets/examp/userGuest.a58b1fc1 - dark.jpg" />
                    <p>Update Photo</p>
                </div>
                <div class="backoffice-safe-badge">
                    <img v-if="user.fullname === 'Issac Razabi'" src="../assets/examp/icons/safe-badge.jpg" />
                    <p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                </div>
                <div class="backoffice-identity-verification">
                    <h3>Identity verification</h3>
                    <p>Show others you’re really you with the identity verification badge. </p>
                </div>
                <div class="backoffice-btn-badge">
                    <router-link  to="/superhost">
                        <button v-if="user.fullname === 'Issac Razabi'"  >Get the badge</button>
                    </router-link>  
                </div>
            </div>
      <main class="backoffice-main">
        <div class="backoffice-main-hello">
          <h2>Hello, {{user.fullname}} !</h2>
          <!-- <p>created on april 2018</p> -->
        </div>
        <div class="backoffice-host-offer">
          <!-- <h3>Houses you offer</h3> -->

<chat  :massages="massages" :user="user" v-if="showChat"></chat>

          <ul v-if="this.stayes">
            <li class="a-clean" v-for="(stay, idx) in stayes" :key="idx">
              <div v-if="stay.host._id === user._id">
                <div
                  v-if="stay.host._id === user._id"
                  class="backoffice-offer-details"
                >
                  <span class="backoffice-title">Name:</span>
                  <span class="backoffice-name">{{ stay.name }}</span>
                  <span class="backoffice-title">Type:</span>
                  <span class="backoffice-name">{{ stay.type }}</span>
                </div>

                <div v-if="user.fullname === 'Issac Razabi'" class="details-subtitle">
                  <div>
                    <img src="../assets/examp/red-star.jpg" />
                    <span class="rating"> 4.6 </span>
                    <span class="voters">(11} <a>reviews</a>) </span>
                  </div>
                </div>
                <div class="backoffice-offer-gallery">
                  <div class="backoffice-offer-card-img">
                    <img :src="stay.imgUrls[0]" />
                  </div>
                  <div class="backoffice-offer-card-img">
                    <img :src="stay.imgUrls[1]" />
                  </div>
                  <div class="backoffice-offer-card-img">
                    <img :src="stay.imgUrls[2]" />
                  </div>
                </div>

                <div v-if="stay.host._id !== user._id">
                  <div class="backoffice-offer-details">
                    <span class="backoffice-title">Name:</span>
                    <span class="backoffice-name">Villa de'Larosa</span>
                    <span class="backoffice-title">Type:</span>
                    <span class="backoffice-name">House</span>
                  </div>
                  <div class="details-subtitle">
                    <div>
                      <img src="../assets/examp/red-star.jpg" />
                      <span class="rating"> 4.6 </span>
                      <span class="voters">(11} <a>reviews</a>) </span>
                    </div>
                  </div>
                  <div class="backoffice-offer-gallery">
                    <div class="backoffice-offer-card-img">
                      <img
                        src="https://a0.muscache.com/im/pictures/d94df1e1-9525-4104-91a0-8395a6275665.jpg?im_w=720"
                      />
                    </div>
                    <div class="backoffice-offer-card-img">
                      <img
                        src="https://a0.muscache.com/im/pictures/9a26c18f-ffd4-4277-960f-3d8a0c5bbfd6.jpg?im_w=720"
                      />
                    </div>
                    <div class="backoffice-offer-card-img">
                      <img
                        src="https://a0.muscache.com/im/pictures/d9a378fd-b2f8-4dd3-974e-1a755136ce51.jpg?im_w=720"
                      />
                    </div>
                  </div>
                </div>

                <h3>House Bookings: 11</h3>
                <div class="backoffice-offer-card">
                  <div class="backoffice-offer-card-ditails">
                    <div class="booking-table">
                      <table class="booking-info">
                        <tr>
                          <th>Guest Name:</th>
                          <th>Property:</th>
                          <th>Guests:</th>
                          <th>Check In:</th>
                          <th>Check Out:</th>
                          <th>Contact:</th>
                          <th>Approval:</th>
                        </tr>
                        <!-- <div v-if="stay.orders"> -->
                          <!-- <ul class="ul-clean">
                            <li
                              class="a-clean"
                              v-for="(order, idx) in stay.orders"
                              :key="idx"
                            > -->
                              <tr   v-for="(order, idx) in stay.orders"
                              :key="idx">
                                <td>
                                  <div class="guest-user">
                                    <img
                                      src="https://a0.muscache.com/im/pictures/user/79d73ef5-ba94-4075-af21-63a8cf6e05f6.jpg?im_w=240"
                                    />
                                    <span>{{ order.buyer.fullname }}</span>
                                  </div>
                                </td>
                                <td>{{ order.stay.name }}</td>
                                <td>{{ order.guests }}</td>
                                <td>{{ order.checkIn }}</td>
                                <td>{{ order.checkOut}}</td>
                                <td class="contacts-icons">
                                  <img
                                    @click="changeChat"
                                    src="../assets/examp/icons/envelope-icon.jpg"
                                  />
                                  <img
                                    src="../assets/examp/icons/home-phone-icon.jpg"
                                  />
                                </td>
                                <td v-if="order.status === 'pending'">
                                  <button
                                    @click="
                                      confirmOrder(1, stay, idx, order._id)
                                    "
                                  >
                                    🔴
                                  </button>
                                </td>
                                <td v-if="order.status === 'confirm'">
                                  <button
                                    @click="
                                      confirmOrder(0, stay, idx, order._id)
                                    "
                                  >
                                    🟢
                                  </button>
                                </td>
                              </tr>
                            <!-- </li>
                          </ul> -->
                        <!-- </div> -->

                        <div class="daynmic-tr" v-if="getOrder !== ''">
                          <!-- <tr>
                                <th>Guest Name:</th>
                                <th>Property:</th>
                                <th>Guests:</th>
                                <th>Check In:</th>
                                <th>Check Out:</th>
                                <th>Contact:</th>
                                <th>Approval:</th>
                              </tr> -->
                          <tr>
                            <td>
                              <div class="guest-user">
                                <img
                                  src="https://a0.muscache.com/im/pictures/user/79d73ef5-ba94-4075-af21-63a8cf6e05f6.jpg?im_w=240"
                                />
                                <span>{{ getOrder.buyer.fullname }}</span>
                              </div>
                            </td>
                            <td>{{ getOrder.stay.name }}</td>
                            <td>{{ getOrder.guests }}</td>
                            <td>{{ getOrder.checkIn }}</td>
                            <td>{{ getOrder.checkOut}}</td>
                            <td class="contacts-icons">
                              <img 
                                @click="changeChat"
                                src="../assets/examp/icons/envelope-icon.jpg"
                              />
                               <!-- <span>{{massages.length}}</span> -->
                              <img
                                src="../assets/examp/icons/home-phone-icon.jpg"
                              />
                              <!-- <router-link to="/chat"> -->
                              <!-- <button @click="changeChat" >
                                  <img  src="../assets/imgs/chat/livechat-online-chat-computer-icons-chat-room-web-chat-png-favpng-91JHkthNg2nLfZihFVZ9ppMcB.jpg" />
                                </button> -->
                              <!-- </router-link>  -->
                            </td>
                            <td v-if="getOrder.status === 'pending'">
                              <button
                                @click="confirmOrder(1, stay, idx, order._id)"
                              >
                                🔴
                              </button>
                               
                            </td>
                            <td v-if="getOrder.status === 'confirm'">
                              <button
                                @click="confirmOrder(0, stay, idx, order._id)"
                              >
                                🟢
                              </button>
                            </td>
                          </tr>
                        </div>

                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/pictures/user/79d73ef5-ba94-4075-af21-63a8cf6e05f6.jpg?im_w=240"
                              />
                              <span>Rony bato</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>2</td>
                          <td>2020-07-01</td>
                          <td>2020-07-09</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🟢</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/pictures/user/a8e6be2d-d8aa-443b-8a46-29dd8296d733.jpg?im_w=240"
                              />
                              <span>Ishi moto</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>1</td>
                          <td>2020-03-12</td>
                          <td>2020-03-16</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🔴</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/pictures/user/0a330d33-9745-4176-ae52-fb72f9040515.jpg?im_w=240"
                              />
                              <span>Don Karo</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>4</td>
                          <td>2020-04-20</td>
                          <td>2020-04-25</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🟢</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/users/19737476/profile_pic/1407604544/original.jpg?im_w=240"
                              />
                              <span>Shin Bul</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>2</td>
                          <td>2019-02-25</td>
                          <td>2019-02-29</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🟢</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/pictures/user/56af832c-76d8-40a3-a709-c1e2956cafa6.jpg?im_w=240"
                              />
                              <span>Nim Or</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>1</td>
                          <td>2020-01-22</td>
                          <td>2021-01-24</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🟢</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/pictures/user/4432de91-b054-4423-9ec2-5333de04c078.jpg?im_w=240"
                              />
                              <span>Moti luhim</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>1</td>
                          <td>2021-03-09</td>
                          <td>2021-03-12</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🟢</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/pictures/user/dcaccf4f-e3c3-4022-b93d-79a789fda789.jpg?im_w=240"
                              />
                              <span>Shimha Rif</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>1</td>
                          <td>2021-02-17</td>
                          <td>2021-02-22</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🟢</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/pictures/user/397022fa-e9de-4e36-99ee-d0638c3436be.jpg?im_w=240"
                              />
                              <span>kobi Tiro</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>6</td>
                          <td>2021-05-23</td>
                          <td>2021-06-02</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🟢</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/pictures/user/7616e352-3ac0-4217-aa1a-cbdbd7fd7875.jpg?im_w=240"
                              />
                              <span>Eli Kopter</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>8</td>
                          <td>2021-08-15</td>
                          <td>2021-10-16</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🟡</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/pictures/user/9db51a14-a66f-4001-9eed-be469d3a0673.jpg?im_w=240"
                              />
                              <span>Bob doono</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>2</td>
                          <td>2021-11-02</td>
                          <td>2021-11-28</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🟡</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/users/5437998/profile_pic/1421735073/original.jpg?im_w=240"
                              />
                              <span>Noa Mitch</span>
                            </div>
                          </td>
                          <td>Villa de'Larosa</td>
                          <td>3</td>
                          <td>2021-07-12</td>
                          <td>2021-07-21</td>
                          <td class="contacts-icons">
                            <img
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />
                          </td>
                          <td><button>🟢</button></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <chat :massages="massages" :user="user" v-if="showChat"></chat>
          <ul>
            <li class="a-clean" v-for="(order, idx) in orders" :key="idx">
              <div v-if="order.byUserId === user._id">
                <h3>you orders</h3>
                <div class="backoffice-offer-details">
                  <span class="backoffice-title">Name:</span>
                  <span class="backoffice-name">{{ order.stay.name }}</span>
                  <span class="backoffice-title">Type:</span>
                  <span class="backoffice-name">house</span>
                </div>

                <div class="details-subtitle">
                  <div>
                    <img src="../assets/examp/red-star.jpg" />
                    <span class="rating"> 4.6 </span>
                    <span class="voters">(11} <a>reviews</a>) </span>
                  </div>
                </div>

                <div class="backoffice-offer-card">
                  <div class="backoffice-offer-card-ditails">
                    <div class="booking-table">
                      <table class="booking-info">
                        <tr>
                          <th>Guest Name:</th>
                          <th>Property:</th>
                          <th>Guests:</th>
                          <th>Check In:</th>
                          <th>Check Out:</th>
                          <th>Contact:</th>
                          <th>Approval:</th>
                        </tr>
                        <tr>
                          <td>
                            <div class="guest-user">
                              <img
                                src="https://a0.muscache.com/im/pictures/user/79d73ef5-ba94-4075-af21-63a8cf6e05f6.jpg?im_w=240"
                              />
                              <span>{{ order.buyer.fullname }}</span>
                            </div>
                          </td>
                          <td>{{ order.stay.name }}</td>
                          <td>1</td>
                          <td>{{ order.checkIn }}</td>
                          <td>{{ order.checkOut }}</td>
                          <td class="contacts-icons">
                            <img
                              @click="changeChat"
                              src="../assets/examp/icons/envelope-icon.jpg"
                            />
                           
                            <img
                              src="../assets/examp/icons/home-phone-icon.jpg"
                            />

                            <!-- <button @click="changeChat" >
                                     <img  src="../assets/imgs/chat/livechat-online-chat-computer-icons-chat-room-web-chat-png-favpng-91JHkthNg2nLfZihFVZ9ppMcB.jpg" />
                                  </button> -->
                          </td>
                          <td v-if="status === 'pending'">
                            <button>🔴</button>
                          </td>
                          <td v-if="status === 'confirm'">
                            <button>🟢</button>
                          </td>

                          <!-- <td v-if="massages.length">
                           
                          </td> -->
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div  v-if="user.fullname === 'Issac Razabi'" class="Houses-statistics">
          <h3>Houses statistics:</h3>
          <!-- <img src="../assets/imgs/user-login/image.png"> -->
          <div id="vue-container">
            <div id="chartContainer" style="height: 360px; width: 100%"></div>
          </div>
        </div>

        <div class="backoffice-btn-add">
          <!-- <router-link to="/host">
            <button>Add a property</button>
          </router-link> -->
        </div>
      </main>
    </div>


  </section>
</template>

<script>
var CanvasJS = require("./canvasjs.min.js");
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

import navBar from "../components/nav-bar.vue";
import chat from "./chat.vue";
import { userService } from "../services/user.service.js";
import { socketService } from "@/services/socket.service";

export default {
  el: "#vue-container",
  components: {
    navBar,
    chat,
  },
  data() {
    return {
      chartOptions: {
        title: {
          text: "",
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { x: 1, y: 71 },
              { x: 2, y: 55 },
              { x: 3, y: 50 },
              { x: 4, y: 65 },
              { x: 5, y: 95 },
              { x: 6, y: 68 },
              { x: 7, y: 28 },
              { x: 8, y: 34 },
              { x: 9, y: 14 },
              { x: 10, y: 54 },
              { x: 11, y: 45 },
              { x: 12, y: 32 },
            ],
          },
        ],
      },
      chart: null,
      user: "",
      showChat: false,
      status: "",
      getOrder: "",
      msg: "",
      massages: [],
    };
  },
  mounted: function () {
    this.chart = new CanvasJS.Chart("chartContainer", this.chartOptions);
    this.chart.render();
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
    async confirmOrder(diff, orderToSave, idx) {
      if (diff === 1) orderToSave.orders[idx].status = "confirm";
      this.status = "confirm";
      if (diff === 0) orderToSave.orders[idx].status = "pending";
      this.status = "pending";
      // socketService.emit('change status',orderToSave.orders[idx].status)
      this.$store.dispatch({ type: "updateStayStatus", orderToSave });

      this.status = orderToSave.orders[idx].status;
      socketService.emit("order newStatus", this.status); // emit : pass the info
    },
    changeStatus(status) {
      this.status = status;
    },
    changeChat() {
      this.showChat = !this.showChat;
    },
    addOrder(order) {
      this.getOrder = order;
    },
    addMsg(msg) {
      this.massages.push(msg);
    },
  },
  async created() {
    await this.$store.dispatch("loadStayes");
    await this.$store.dispatch("loadUsers");
    await this.$store.dispatch("loadOrders");
    const user = await userService.getById(this.loggedinUser._id);
    this.user = user;
    socketService.on("status", this.changeStatus);
    socketService.on("newOrder", this.addOrder);
    socketService.on("chat addMsg", this.addMsg);
  },
  destroyed() {
    socketService.off("status", this.status);
    // socketService.terminate();
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
    // userId() {
    //   return this.$route.params.id;
    // },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
    //     checkOrderStatus(){
    //   return this.$store.getters.stayesToDisplay;
    // }
  },
};
</script>

<style scoped>
.navBar {
  grid-column: 1/-1;
}
.backoffice-section {
  display: grid;
  grid-template-columns: 15% 1fr 15%;
  grid-auto-flow: dense;
}
.backoffice-offer-gallery {
  display: flex;
}
.booking-info {
  width: 100%;
}

.backoffice-main-container {
  /* width: 1024px; */
  /* grid-column: 2; */
  /* display: flex;
  padding-top: 50px; */
}
.backoffice-user-details {
  text-align: center;
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  width: 310px;
  height: 550px;
  display: block;
  align-self: start;
  position: sticky;
  top: 80px;
  padding: 40px 20px 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* color: #6b6a6a; */
}
.backoffice-user-img img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.backoffice-user-img p {
  font-size: 16px;
  text-decoration-line: underline;
}
.backoffice-identity-verification h3 {
  /* padding-left: 20%; */
}
.backoffice-btn-badge button {
  padding: 15px 40px;
  border-radius: 10px;
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  color: white;
  background-color: rgb(255, 56, 92);
}
.backoffice-btn-add button {
  padding: 15px 40px;
  border-radius: 10px;
  width: 50%;
  height: 48px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  color: white;
  background-color: rgb(255, 56, 92);
}
.Houses-statistics {
  width: 1000px;
  padding: 40px 0px 40px 0px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 60px;
}
.backoffice-main-hello p {
  text-align: left;
}
.backoffice-main-hello {
  padding-bottom: 50px;
  padding: 40px 0px 40px 0px;
  border-bottom: 1px solid #ddd;
}
.backoffice-offer-details {
  text-align: left;
  padding: 0px 0px 40px 0px;
}
.backoffice-title {
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
}
.backoffice-name {
  font-size: 20px;
  font-weight: 400;
  margin-right: 40px;
}
.contacts-icons img {
  width: 20px;
  margin: 15px;
}
.guest-user img {
  border-radius: 50%;
  height: 32px;
  width: 32px;
}
.guest-user span {
  padding: 10px;
}

.guest-user {
  display: flex;
  justify-content: left;
  margin-left: 15px;
}
.backoffice-offer-card-img img {
  width: 320px;
  height: 200px;
  margin-inline-end: 15px;
  border-radius: 15px;
  object-fit: cover;
}
.backoffice-offer-card {
  display: flex;
  margin-bottom: 70px;
  width: 1000px;
}
th {
  font-size: 1rem;
  background-color: #eee;
  padding: 5px;
  height: 40px;
  font-size: 0.9rem;
  position: sticky;
  top: 0;
}
.backoffice-offer-card-ditails {
  overflow-y: auto;
  height: 900px;
  width: 100%;
  box-shadow: 0 6px 16px hsla(0, 0%, 45.9%, 0.12);
  border-radius: 10px;
  margin-bottom: 20px;
}

#cf {
  position: relative;
  height: 281px;
  width: 450px;
  margin: 0 auto;
}

#cf img {
  position: absolute;
  left: 0;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  width: 320px;
  height: 200px;
}

@keyframes cf3FadeInOut {
  0% {
    opacity: 1;
  }
  45% {
    opacity: 1;
  }
  55% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

#cf img.top {
  animation-name: cf3FadeInOut;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 10s;
  animation-direction: alternate;
}
input,
button,
submit {
  border: none;
  background: white;
}

.ul-clean {
  padding: 0;
}
.daynmic-tr {
  display: flex;
}
</style>
 



