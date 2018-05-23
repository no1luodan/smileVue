<template>
<div class="floor">
    <div class="floorTitle">{{floorTitle}}</div>
    <div class="floor-anormaly">
        <div class="floor_one">
        <img :src="floor1_0.image" alt="" width="100%">
        </div>
        <div>
            <div class="floor_two">
            <img :src="floor1_1.image" alt=""  width="100%">
            </div>
            <div >
            <img :src="floor1_2.image" alt=""  width="100%">
            </div>
        </div>
    </div>
    <div class="floor-normal">
        <div v-for="(item,index) in floor1.slice(3)" :key="index">
            <img :src="item.image" alt="" width="100%">
        </div>
    </div>


</div>

</template>

<script>
    export default {
        props:['floor1','floorTitle'],
        data(){
            return {
                floor1_0:{},
                floor1_1:{},
                floor1_2:{}
               

            }
        },
        created(){
            console.log(this.floor1)
        },
        watch:{
            floor1(){
                  console.log(this.floor1)
                  this.floor1_0=this.floor1[0],
                  this.floor1_1=this.floor1[1],
                  this.floor1_2=this.floor1[2]
            }
        }
        
    }
</script>

<style scoped>
 .floor-anormaly{
      
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #aaa;
        
    }
      .floor-anormaly > div{
          width: 10rem;
           box-sizing: border-box;
           background: #ffffff;
      }
    .floor_one{
        border-right:1px solid #aaa;
    }
     .floor_two{
        border-bottom:1px solid #aaa;
    }
    .floor-normal{
        display: flex;
        flex-direction:row;
        flex-wrap: nowrap;

    }
     .floor-normal>div{
         width:10rem;
         box-sizing: border-box;
         border-bottom:1px solid #aaa;
     }
     .floor-normal>div:nth-child(odd){
          border-right:1px solid #aaa;
     }
     .floorTitle{
         text-align: center;
         margin: .2rem;
     }
</style>