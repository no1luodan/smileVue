<template>
<div>
<div id="main4"></div>
</div>


</template>


<script>
     export default {
        data(){
            return{
                myChart:null
            }
        },
        mounted(){
            var domHeight=document.documentElement.clientHeight||document.body.clientHeight
            document.getElementById("main4").style.height=domHeight+'px';    
            console.log( document.getElementById("main4").style.height)
            this.drawChart()
           
        },
        methods:{
            drawChart(){
                this.myChart = this.$echarts.init(document.getElementById('main4'))
                var option = {
                    title: {
                        text: ''
                    },
                    tooltip: {},
                    legend: {
                        top: 20,
                        itemWidth: 12,
                        itemHeight: 12,
                        data: ['公司总人数', '未登陆人数'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    radar: {
                        radius: '60%',
                        splitNumber: 8,
                        axisLine: {
                            lineStyle: {
                                color: '#fff',
                                opacity: .2
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#fff',
                                opacity: .2
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: 'rgba(127,95,132,.3)',
                                opacity: 1,
                                shadowBlur: 45,
                                shadowColor: 'rgba(0,0,0,.5)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 15,
                            }
                        },
                        indicator: [{
                            name: '深圳',
                            max: 30000
                        }, {
                            name: '北京',
                            max: 40000
                        }, {
                            name: '天津',
                            max: 20000
                        }, {
                            name: '上海',
                            max: 20000
                        }, {
                            name: '广东',
                            max: 30000
                        }, {
                            name: '福建',
                            max: 20000
                        }]
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        symbolSize: 0,
                        areaStyle: {
                            normal: {
                                shadowBlur: 13,
                                shadowColor: 'rgba(0,0,0,.2)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 10,
                                opacity: 1
                            }
                        },
                        data: [{
                            value: [5000, 17000, 12000, 11000, 15000, 14000],
                            name: '公司总人数',
                        }, {
                            value: [2500, 12000, 8000, 8500, 12000, 12000],
                            name: '未登陆人数',
                        }]
                    }],
                    color: ['#ef4b4c', '#b1eadb'],
                    backgroundColor: {
                    //     type: 'radial',
                    //     x: 0.4,
                    //     y: 0.4,
                    //     r: 0.35,
                    //     colorStops: [{
                    //         offset: 0,
                    //         color: '#895355' // 0% 处的颜色
                    //     }, {
                    //         offset: .4,
                    //         color: '#593640' // 100% 处的颜色
                    //     }, {
                    //         offset: 1,
                    //         color: '#39273d' // 100% 处的颜色
                    //     }],
                    //     globalCoord: false // 缺省为 false
                    }
                };
                this.myChart.setOption(option)
            }
        }
    
}
</script>

<style scoped>
#main4{
    height: 300px;
    width: 300px;
}
</style>