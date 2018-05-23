<template>
<div>
<div id="main1"></div>
</div>


</template>


<script>

     export default {
        data(){
            return{
                myChart:null
            }
        },
        created(){
            console.log( this.$echarts)
             },
        mounted(){
            var domHeight=document.documentElement.clientHeight||document.body.clientHeight
            document.getElementById("main1").style.height=domHeight+'px';    
            console.log( document.getElementById("main1").style.height)
            this.drawBar()
           
        },
        methods:{
            drawBar(){
                       // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('main1'));
        var uploadedDataURL1 = "";
var uploadedDataURL2 = "";
var baifenbi = [0.111, 0.333, 0.444, 0.555, 0.777, 0.888, 0.922];
var grayBar = [1, 1, 1, 1, 1, 1, 1];
var paiming = [7, 6, 5, 4, 3, 2, 1];
var zongjine = [10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000];
var fenpeijine = [100000, 200000, 300000, 400000, 500000, 600000, 700000];
var city = ['北京分公司', '湖南分公司', '上海分公司', '广州分公司', '厦门分公司', '深圳分公司', '天津分公司'];
        // 绘制图表
        myChart.setOption({
          
    title: {
        text: '分公司完成度排行榜',
        top:'2%',
        left: 'center',
        textStyle: {
            color:'#0366d3'
        }
    },
    color: ['#61A8FF'], //进度条颜色
    /* grid: {
         left: '-10%',  //如果离左边太远就用这个......
         //right: '14%',
         bottom: '5%',
         top: '5%',
         containLabel: true
     },*/
    xAxis: [{
            show: false,
        },
        //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        axisLabel: {
            show: false, //让Y轴数据不显示
        },
        itemStyle: {

        },
        axisTick: {
            show: false, //隐藏Y轴刻度
        },
        axisLine: {
            show: false, //隐藏Y轴线段
        },
        data: city,
    },
    series: [
        //背景色--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '0%',
            barWidth: '25%', //统计条宽度 
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                    color: 'rgba(102, 102, 102,0.5)'
                },
            },
            z: 1,
            data: grayBar,
        },
        //蓝条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '0%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                        1, 1, 0, 0,
                        [
                            {offset: 0, color: 'rgba(1, 232, 151,1)'},
                            {offset: 0.68, color: '#00aaba'},
                            {offset: 1, color: 'rgba(1, 232, 151,.2)'}
                        ]
                    ),

                    //  color: {
                    //     type: 'radial',
                    //     x: 0.5,
                    //     y: 0.5,
                    //     r: 0.5,
                    //     colorStops: [{
                    //         offset: 0, color: '#01e897' // 0% 处的颜色
                    //     }, {
                    //         offset: 1, color: '#046bdc' // 100% 处的颜色
                    //     }],
                    //     globalCoord: false // 缺省为 false
                    // },
                    barBorderRadius: 20, //统计条弧度
                },

            },
            max: 1,
            label: {
                normal: {
                    show: true,
                    //百分比格式
                    formatter: function(data) {
                        return (baifenbi[data.dataIndex] * 100).toFixed(1) + '%';
                    },
                }
            },
            labelLine: {
                show: false,
            },
            z: 2,
            data: baifenbi,
        },
        //数据条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: 'rgba(22,203,115,0.05)'
                },
            },
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: [0, '-150%'],
                    rich: { //富文本
                        black: { //自定义颜色
                          //  color: '#000',
                          color: '#488bd0',
                        },
                        start2: {
                            backgroundColor: { //这里可以添加你想自定义的图片
                                image: uploadedDataURL2,
                            },
                        },
                        start1: {
                            backgroundColor: {
                                image: uploadedDataURL1,
                            }
                        },
                        green: {
                            color: '#70DDA7',
                           
                        },
                        yellow: {
                            color: '#FEC735',
                          
                        },
                    },
                    formatter: function(data) {
                        //富文本固定格式{colorName|这里填你想要写的内容}
                     //   return paiming[data.dataIndex] == 1 ? '{start1|}{yellow|第' + paiming[data.dataIndex] + '名:' + city[data.dataIndex] + '}' + '{black|                                                                     疑案金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,追回金额:}' + '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}' : '{start2|}{black|第' + paiming[data.dataIndex] + '名:' + city[data.dataIndex] + '}' + '{black|                                                                     疑案金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,追回金额:}' + '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}';
                        return  '{start2|}{black|'+ city[data.dataIndex] + '}' + '{black|                                                                     疑案金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,追回金额:}' + '{yellow|' + fenpeijine[data.dataIndex] / 10000 + '}{black|万元}';
                    },
                }
            },
            data: zongjine
        }

    ]
        });
            }
        }
        }

</script>

<style scoped>
#main1{
    height: 300px;
    width: 300px;
}
</style>