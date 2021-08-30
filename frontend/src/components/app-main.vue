<template>
    <section class="main-section">
        <aside class="main-aside">
            <div class="main-title">
            Explore nearby
            </div>
            <div class="mini-card-container">
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample1.jpg">
                    </div>
                    <div class="near-city">
                        <p>Germany</p>
                        <p>Home of the Oatmeal Festival</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample2.jpg">
                    </div>
                    <div class="near-city">
                        <p>New York</p>
                        <p>The City That Never Sleeps</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample3.jpg">
                    </div>
                    <div class="near-city">
                        <p>Barcelona</p>
                        <p>City of eternal sunshine</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample4.jpg">
                    </div>
                    <div class="near-city">
                        <p>Paris</p>
                        <p>Where the best begins</p>
                    </div>
                </div>
            </div>
            <div class="mini-card-container">
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample5.jpg">
                    </div>
                    <div class="near-city">
                        <p>Tokyo</p>
                        <p>Smart city</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample6.jpg">
                    </div>
                    <div class="near-city">
                        <p>Melbourne</p>
                        <p>Sophisticated, stylish, free-spirited</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample7.jpg">
                    </div>
                    <div class="near-city">
                        <p>Wellington</p>
                        <p>Beautiful places to hike</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample8.jpg">
                    </div>
                    <div class="near-city">
                        <p>Osaka</p>
                        <p>Japan’s third-largest city</p>
                    </div>
                </div>
            </div>
        </aside>
        <router-link to="/explore">
        <aside class="bottom-img">
            <img src="../assets/examp/baner-sample.jpg">
        </aside>
        </router-link>
        <main class="main-container">
            <div class="main-title">
            Live anywhere
            </div>
            <div class="main-card-container">
            <router-link to="/explore/barcelona">
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample1.jpg">
                    </div>
                    <p>Barcelona</p>
                </div>
                </router-link>
                <router-link to="/explore/paris">
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample2.jpg">
                    </div>
                    <p>Paris</p>
                </div>
                  </router-link>
                    <router-link to="/explore/rome">
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample3.jpg">
                    </div>
                    <p>Rome</p>
                </div>
                </router-link>
                      <router-link to="/explore/berlin">
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample4.jpg">
                    </div>
                    <p>Berlin</p>
                </div>
                 </router-link>
            </div>
        </main> 
         <router-link to="/host">
        <aside class="bottom-img">
            <img src="../assets/examp/sample3.jpg">
        </aside>
        </router-link>
    </section>
</template>

<style>

</style>
