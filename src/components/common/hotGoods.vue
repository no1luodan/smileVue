<template>
    <div>
<!-- <van-row gutter="20">
  <van-col span="12" v-for="(item,index) in hotgoods" :key="index"> -->
      <div>
          <img v-lazy="goodImage" alt="">
      </div>
      <div class="goodName">
       {{goodName}}
      </div>
    <div class="goodPrice">
       ￥{{goodMallPrice|moneyFilter}}(￥{{goodPrice|moneyFilter}})
      </div>
      <!-- </van-col>
</van-row> -->
    </div>
</template>

<script>
import {toMoney} from '@/filter/moneyFilter.js'
export default {
    props:['goodImage','goodName','goodMallPrice','goodPrice'],
    data(){
        return {

        }
    },
    // watch:{
    //     hotgoods(newVal,oldVal){
    //         return newVal;
    //     }
    // },
    filters:{
        moneyFilter(money){
            return toMoney(money)
        }
    }
};
</script>

<style scoped>
.goodName{
    padding: 0  .6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.goodPrice{
    text-align: center;
}
</style>