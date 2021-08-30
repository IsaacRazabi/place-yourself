<template>
<main class="carusel-main">
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
        <div class="img-carusel-comp">
            <img class="showImage-img" :src="showImage"/>
        </div>
    </el-carousel-item>
  </el-carousel>
  </main>
</template>

<script>
export default {
    props: {
    stay: {
      type: Object,
    },
    user : {
        type : Object
    },
    imgs :{
      type: Array,
    //   deafult : "../assets/images/images/4.jpg"
    }
  },
  computed :{
showImage(){
return this.stay.imgUrls[0]
}
  },
methods: {

},
  data() {
    return {
    
    };
  }
}
</script>

<style lang="scss" scoped>
.img-carusel-comp img{
    width: 360px;
    height: 240px;
    border-radius: 15px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>