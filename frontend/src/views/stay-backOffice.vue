<template>
    <section class="backoffice-section">
         <navBar class="backoffice-section-navBar"></navBar>
        <div class="backoffice-main-container">
            <div class="backoffice-user-details">       
                <div class="backoffice-user-img">
                    <img src="https://a0.muscache.com/im/users/12591733/profile_pic/1393398487/original.jpg?im_w=240" >
                    <p>Update Photo</p>
                </div>
                <div class="backoffice-safe-badge">
                    <img src="../assets/examp/icons/safe-badge.jpg" />
                    <p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                </div>
                <div class="backoffice-identity-verification">
                    <h3>Identity verification</h3>
                    <p>Show others you’re really you with the identity verification badge. </p>
                </div>
                <div class="backoffice-btn-badge">
                    <router-link  to="/superhost">
                        <button>Get the badge</button>
                    </router-link>  
                </div>
            </div>
            <main class="backoffice-main">
                <div class="backoffice-main-hello">
                    <h2>Hello, Moshe cohen !</h2>
                    <p>Created on April 2018</p>
                </div>
                <div class="backoffice-host-offer">
                    <h3>Houses you offer</h3>
                    <div class="backoffice-offer-details">
                        <span class="backoffice-title">Name:</span>
                        <span class="backoffice-name">Villa de'Larosa</span>
                        <span class="backoffice-title">Type:</span>
                        <span class="backoffice-name">House</span>
                    </div>
                    <div class="details-subtitle">
                        <div>
                            <img src="../assets/examp/red-star.jpg" />
                            <span  class="rating"> 4.9 </span>
                            <span class="voters">(432} <a>reviews</a>)
                            </span>
                         </div>
                    </div>
                    <div class="backoffice-offer-gallery">
                        <div class="backoffice-offer-card-img">
                            <img src="https://a0.muscache.com/im/pictures/d94df1e1-9525-4104-91a0-8395a6275665.jpg?im_w=720">
                        </div>
                        <div class="backoffice-offer-card-img">
                            <img src="https://a0.muscache.com/im/pictures/9a26c18f-ffd4-4277-960f-3d8a0c5bbfd6.jpg?im_w=720">
                        </div>
                        <div class="backoffice-offer-card-img">
                            <img src="https://a0.muscache.com/im/pictures/d9a378fd-b2f8-4dd3-974e-1a755136ce51.jpg?im_w=720">
                        </div>
                    </div>
                    <!-- transition -->
                    <!-- <div id="cf">
                        <img class="bottom" src="https://a0.muscache.com/im/pictures/d9a378fd-b2f8-4dd3-974e-1a755136ce51.jpg?im_w=720" />
                        <img class="top" src="https://a0.muscache.com/im/pictures/9a26c18f-ffd4-4277-960f-3d8a0c5bbfd6.jpg?im_w=720" />
                    </div> -->
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
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/pictures/user/79d73ef5-ba94-4075-af21-63a8cf6e05f6.jpg?im_w=240">
                                                <span>Rony bato</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>2</td>
                                        <td>2020-07-01</td>
                                        <td>2020-07-09</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🟢</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/pictures/user/a8e6be2d-d8aa-443b-8a46-29dd8296d733.jpg?im_w=240">
                                                <span>Ishi moto</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>1</td>
                                        <td>2020-03-12</td>
                                        <td>2020-03-16</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🔴</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/pictures/user/0a330d33-9745-4176-ae52-fb72f9040515.jpg?im_w=240">
                                                <span>Don Karo</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>4</td>
                                        <td>2020-04-20</td>
                                        <td>2020-04-25</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🟢</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/users/19737476/profile_pic/1407604544/original.jpg?im_w=240">
                                                <span>Shin Bul</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>2</td>
                                        <td>2019-02-25</td>
                                        <td>2019-02-29</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🟢</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/pictures/user/56af832c-76d8-40a3-a709-c1e2956cafa6.jpg?im_w=240">
                                                <span>Nim Or</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>1</td>
                                        <td>2020-01-22</td>
                                        <td>2021-01-24</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🟢</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/pictures/user/4432de91-b054-4423-9ec2-5333de04c078.jpg?im_w=240">
                                                <span>Moti luhim</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>1</td>
                                        <td>2021-03-09</td>
                                        <td>2021-03-12</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🟢</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/pictures/user/dcaccf4f-e3c3-4022-b93d-79a789fda789.jpg?im_w=240">
                                                <span>Shimha Rif</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>1</td>
                                        <td>2021-02-17</td>
                                        <td>2021-02-22</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🟢</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/pictures/user/397022fa-e9de-4e36-99ee-d0638c3436be.jpg?im_w=240">
                                                <span>kobi Tiro</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>6</td>
                                        <td>2021-05-23</td>
                                        <td>2021-06-02</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🟢</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/pictures/user/7616e352-3ac0-4217-aa1a-cbdbd7fd7875.jpg?im_w=240">
                                                <span>Eli Kopter</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>8</td>
                                        <td>2021-08-15</td>
                                        <td>2021-10-16</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🟡</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/pictures/user/9db51a14-a66f-4001-9eed-be469d3a0673.jpg?im_w=240">
                                                <span>Bob doono</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>2</td>
                                        <td>2021-11-02</td>
                                        <td>2021-11-28</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🟡</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest-user">
                                                <img src="https://a0.muscache.com/im/users/5437998/profile_pic/1421735073/original.jpg?im_w=240">
                                                <span>Noa Mitch</span>
                                            </div>
                                        </td>
                                        <td>Villa de'Larosa</td>
                                        <td>3</td>
                                        <td>2021-07-12</td>
                                        <td>2021-07-21</td>
                                        <td class="contacts-icons">
                                            <img src="../assets/examp/icons/envelope-icon.jpg" />
                                            <img src="../assets/examp/icons/home-phone-icon.jpg" />
                                        </td>
                                        <td><button>🟢</button></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="financial-interest">
                    <h2>Financial interest of rental income</h2>
                    <div class="financial-interest-container">
                        
                    </div>
                </div>

                <div class="Houses-statistics">
                    <h3>Houses statistics:</h3>
                    <div id="vue-container">
                        <div id="chartContainer" style="height: 360px; width: 100%;"></div>
                    </div>
                </div>
                <div class="backoffice-btn-add">
                    <router-link  to="/host">
                    <button>Add a property</button>
                    </router-link>  
                </div>
            </main>

        </div>


        <!-- <div class="backoffice-container">
            <div data-v-30dfd110="" class="user-card">
                <img  src="../assets/examp/exam-avatar5.jpg">
                <div class="update-img">Update Photo</div>
                    <div class="main-card-container">
                    <h3 >Identity verification</h3>
                    <p> Show others you’re really you with the identity verification badge.</p>
                    <button >Get the badge</button>
                </div>
            </div>

            <div class="user-main-container">
                <h2>Hello, Moshe Marko </h2>
                <div class="user-subtitle">Created on April 2018</div>
                <h2 class="statistics-title">Profit Statistics:</h2>
            </div>
            <div class="chartjs-size-monitor-shrink">
                <div id="vue-container">
                    <div id="chartContainer" style="height: 360px; width: 100%;"></div>
                </div>
            </div>
            <h2>Houses you offer: </h2>
            <ul>
                <li class="user-houses-container flex">
                    <div class="user-houses-txt-container flex">
                        <h3 class="user-houses-txt flex">
                            <span class="house-txt-first"> Name: </span>
                            <span class="house-txt">Beach Apartment </span>
                            <span class="house-txt-second"> Type: </span>
                            <span class="house-txt"> Apartment</span>
                        </h3>
                    </div>
                </li>
            </ul>
        </div> -->
        <appFooter class="backoffice-section-footer"></appFooter>
    </section>
</template>

<script>

var CanvasJS = require('./canvasjs.min.js');
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

import navBar from "../components/nav-bar.vue";
import appFooter from "@/components/app-footer.vue";

    export default {
  el: '#vue-container',
  components: {
    navBar,
    appFooter,
  },
  data () {
    return {
      
    chartOptions: {
      title: {
        text: ""
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
          ]
        }         
      ]
    },
    chart : null
  
    }
  },
  mounted: function () {
    this.chart = new CanvasJS.Chart("chartContainer", this.chartOptions);
    this.chart.render();
  }
}
</script>

<style scoped>

</style>