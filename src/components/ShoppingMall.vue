<template>
<div>
    <div class="search-bar">
        <van-row >
                <van-col span="3">
                    <img :src="imgSrc" alt="" width="70%" class="location-icon">
                </van-col>
                <van-col span="16" >
                    <input type="text" class="search-input">
                </van-col>
                <van-col span="5"><van-button type="primary" size="mini">查询</van-button></van-col>
        </van-row>
    </div>
<!--swiper area轮播图-->
<div class="swiper-area">
<van-swipe :autoplay=1000>
    <van-swipe-item v-for='(item,index) in bannerPicArry' :key='index'>
        <img :src="item.image" alt="" width="100%" v-lazy="item.image">
    </van-swipe-item>

</van-swipe>
</div>
<!--商品类别-->
<div class='type-bar'>
    <div v-for="(cate,index) in category" :key="index">
        <img :src="cate.image" alt="" width="90%">
        <span>{{cate.mallCategoryName}}</span>
    </div>
</div>
<!--广告条-->
<div>
    <img v-lazy="advertesPicture.PICTURE_ADDRESS" alt="" width="100%">
</div>
<!-- recommend goods-->

   <div class="recommend-area">
            <div class="recommend-title">
                            商品推荐
            </div>
            <div class="recommend-body">
                <swiper :options="swiperOption">
                   <swiper-slide v-for="(item,index) in recommendGoods " :key="index" >
                       <div class="recommend-item">
                           <img :src="item.image" width="80%">
                           <div>{{item.goodsName}}</div>
                           <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</div>
                       </div>
                   </swiper-slide> 
                </swiper>
            </div>
        </div>

<!--floor-->

<floor :floor1="floor1" :floorTitle="floorName.floor1"></floor>
<floor :floor1="floor2" :floorTitle="floorName.floor2"></floor>
<floor :floor1="floor3" :floorTitle="floorName.floor3"></floor>
<!-- hotgoods -->
<van-row gutter="20">
  <van-col span="12" v-for="(item,index) in hotgoods" :key="index">
<hotGoods :goodImage='item.image' :goodName="item.name" :goodMallPrice='item.mallPrice' :goodPrice="item.price"></hotGoods>
      </van-col>
</van-row>


    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import floor from './common/floor'
import hotGoods from './common/hotGoods'
import axios from 'axios'
import url from '@/serviceAPI.config.js'
import { toMoney } from '@/filter/moneyFilter.js'
    export default {
        components:{swiper,swiperSlide,floor,hotGoods},
        data() {
            return {
                 swiperOption:{
                    slidesPerView:3
                },
                imgSrc: require('../assets/img/dw.png'),
                bannerPicArry:[
                    // {imgUrl: require('../assets/img/simleVueDemoPic001.jpg')},
                    // {imgUrl: require('../assets/img/simleVueDemoPic002.jpg')},
                    // {imgUrl: require('../assets/img/simleVueDemoPic003.jpg')}
                              ],
                category:[],
                advertesPicture:'',
                recommendGoods:[],
                floor1:[],
                floor2:[],
                floor3:[],
                floorName:{},
                // 热卖商品
                hotgoods:[]
               
            }
        },
        filters:{
            moneyFilter(money){
                    return toMoney(money)
            }
        },
        created(){
            
            axios({
                url:url.getShoppingMallInfo,
                // url:'https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/index',
                //url:'https://www.easy-mock.com/mock/5ae91932448641772e701156/smileVue/index',
                method:'get'
            })
            .then(response=>{
                this.category=response.data.data.category;
                this.advertesPicture=response.data.data.advertesPicture;
                this.bannerPicArry=response.data.data.slides;
                this.recommendGoods=response.data.data.recommend;
                this.floor1=response.data.data.floor1;
                this.floor2=response.data.data.floor2;
                this.floor3=response.data.data.floor3;
                this.floorName=response.data.data.floorName;
                this.hotgoods=response.data.data.hotGoods;
                console.log(response)
            })
            .catch(err=>{
                console.log(err)
            }),
            this.zz();
            console.log(this)

        },
        methods:{
            zz(){
                //正则匹配三个整数2个小数
            var a1=-455.22;
            var b=(/^\-{0,1}\d{3}\.\d{2}/ig).test(a1);
            console.log(b);
            }
        }
    }
</script>

<style scoped>
.search-bar{
    height: 2.2rem;
    line-height: 2.2rem;
    background-color: cornflowerblue;
    overflow: hidden;
}
.location-icon{
    padding-left: .2rem;
    padding-top: .2rem;
}
.search-input{
    border-bottom: 1px solid #ffffff;
    border-top:0;
    border-left: 0;
    border-right:0;
    color: #ffffff;
    background-color: cornflowerblue; 
    width:100%;
    height: 1.3rem; 
}
.swiper-area{
      max-width:20rem;
      max-height:12rem;
      overflow: hidden;
      clear:both;
}
.type-bar{
    display: flex;
    flex-direction: row;
    font-size: 14px;
    flex-wrap: nowrap;
    margin: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    background: #ffffff;
}
.type-bar div{
    padding: .3rem;
    font-size: 12px;
    text-align: center;
}

    .recommend-area{
        background-color: #fff;
        margin-top:.3rem;
    }
    .recommend-title{
        border-bottom:1px solid #eee;
        font-size:14px;
        padding:.2rem;
        color:#e5017d;
    }
    .recommend-body{
        border-bottom:1px solid #eee;
    }
    .recommend-item{
        width:99%;
        border-right:1px solid #eee;
        font-size:12px;
        text-align: center;
    }
   
</style>