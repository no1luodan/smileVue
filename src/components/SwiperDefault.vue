<template>
    <div>
  <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide><chart></chart></swiper-slide>
    <swiper-slide><chart1></chart1></swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
   
  </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import chart from './chart'
import chart1 from './chart1'
    export default {
          components:{swiper,swiperSlide,chart,chart1},
        data(){
            return{
                swiperOption:{
                   direction : 'vertical',
                    slidesPerView:1
                }
            }
        }
    }
</script>

<style scoped>

</style>