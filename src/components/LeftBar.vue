<template>
  <div class="left-bar-container">
    <div class="top">
      <p class="title">各设备通行人数</p>
      <div class="number-in-diff-equipment"></div>
      <img src="../assets/images/pic_frame01.png" class="bg" alt>
    </div>
    <div class="middle">
      <p class="title">性格比例</p>
      <div class="gender-contaienr">
        <div class="gender-scale"></div>
      </div>
      <img src="../assets/images/pic_frame01.png" class="bg" alt>
    </div>
    <div class="bottom">
      <p class="title">已注册人数</p>
      <ul>
        <li v-for="(number , index) in registerTotal" :key="index" class="register">{{number}}</li>
      </ul>
      <img src="../assets/images/pic_frame01.png" class="bg" alt>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "left-bar",
  data() {
    return {
      echartsInstance: null,
      registerTotal: [0, 6, 7, 7],
      option: {
        tooltip: {
          trigger: "item",
          formatter: " {b}：{c} "

          // ({d}%)   代表该模块所占圆环比例
          // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        //环形颜色
        color: ["#2694FF", "#0cccad"],
        legend: {
          icon: "circle",
          orient: "vertical",
          show: true,
          bottom: 200,
          itemWidth: 33,
          itemHeight: 33,
          itemGap: 10,
          right: 0,
          textStyle: {
            fontSize: 40
          },
          x: "right",
          data: ["男", "女"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            labelLine: {
              normal: {
                length: 70,
                length2: 60,
                lineStyle: {}
              }
            },
            label: {
              normal: {
                // \n\n可让文字居于牵引线上方，很关键
                //  {b}  代表显示的内容标题
                // {c}代表数据
                // formatter: " {b}：{c} \n\n",
                formatter: function(num1, num2) {
                  return `${num1.percent} % \n\n`;
                },
                borderWidth: 10,
                borderRadius: 10,
                padding: [0, -70],
                fontSize: 30,
                rich: {
                  a: {
                    color: "#2694FF",
                    fontSize: 60,
                    lineHeight: 20
                  },
                  b: {
                    fontSize: 60,
                    lineHeight: 20,
                    color: "#0cccad "
                  }
                }
              }
            },
            data: [
              {
                value: 58,
                name: "男"
              },
              {
                value: 42,
                name: "女"
              }
            ]
          }
        ]
      },
      optionEquipment: {
        title: {
          text: "",
          subtext: ""
        },
        tooltip: {
          trigger: "item" //悬浮提示框不显示
        },
        grid: {
          //绘图区调整
          x: 150, //左留白
          y: 10, //上留白
          x2: 10, //右留白
          y2: 10 //下留白
        },
        xAxis: [
          {
            show: false,
            type: "value",
            boundaryGap: [0, 0],
            position: "top"
          }
        ],
        yAxis: [
          {
            type: "category",
            data: [
              '测试ego01',
              '二楼ego01',
              '三楼会议室ego'
            ],
            axisLine: { show: false }, //坐标轴
            axisTick: [
              {
                //坐标轴小标记
                show: true
              }
            ],
            axisLabel: {
              textStyle: {
                fontSize: "30",
                color:"#fff",
              }
            }
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            tooltip: { show: false },
            barMinHeight: 30, //最小柱高
            barWidth: 20, //柱宽度
            barMaxWidth: 30, //最大柱宽度
            data: [
              120,
              130,
              230
            ],
            itemStyle: {
              normal: {
                //柱状图颜色
                color: "#fdaa2e",
                label: {
                  show: true, //显示文本
                  position: "right", //数据值位置
                  textStyle: {
                    color: "#fff",
                    fontSize: "26"
                  }
                }
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    init() {
      return new Promise(resolve => {
        if (!this.echartsInstance) {
          this.echartsInstance = echarts.init(
            document.querySelector(".gender-scale")
          );
        }
        if(!this.echartsEquipmentInstance){
          this.echartsEquipmentInstance = echarts.init(
            document.querySelector('.number-in-diff-equipment')
          )
        }
        resolve();
      });
    }
  },
  mounted() {
    this.init().then(() => {
      this.echartsInstance.setOption(this.option);
      this.echartsEquipmentInstance.setOption(this.optionEquipment)
    });
  }
};
</script>
<style lang="less" scoped>
.left-bar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .top,
  .middle,
  .bottom {
    width: 100%;
    flex: 1;
    margin-bottom: 25px;
    position: relative;
    // background: url('../assets/images/pic_frame01.png') no-repeat center;
    background-size: contain;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .top {
    .number-in-diff-equipment {
      padding-left: 60px;
      width: 100%;
      height: calc(90% - 72px);
    }
  }
  .middle {
    .gender-contaienr {
      width: 100%;
      height: calc(90% - 72px);
      display: flex;
      justify-content: center;
      align-items: center;
      .gender-scale {
        width: 60%; /*no*/
        height: 100%; /*no*/
      }
    }
  }
  .bottom {
    ul {
      width: 100%;
      height: calc(90% - 72px);
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        background: url("../assets/images/pic_bg_number02.png") no-repeat center;
        width: 240px;
        height: 384px;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: @registerFsz;
        color: @registerColor;
      }
    }
  }
}
</style>