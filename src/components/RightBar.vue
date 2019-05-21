<template>
  <div class="right-bar-container">
    <div class="top">
      <p class="title">最近签到人员</p>
      <div class="rencent-checked-member">
        <ul class="catogary-title">
          <li class="avator">头像</li>
          <li class="name">姓名</li>
          <li class="time">签到时间</li>
        </ul>
        <ul class="rencent-checked-list">
          <li v-for="(item , index) in  members" :key="index">
            <span class="avator">
              <img :src="item.avator" alt>
            </span>
            <span class="name">{{item.name}}</span>
            <span class="time">{{item.time}}</span>
          </li>
        </ul>
      </div>
      <img src="../assets/images/pic_frame04.png" class="bg" alt>
    </div>
    <div class="bottom">
      <p class="title">今日员工签到率</p>
      <div class="daily-check-in-rate"></div>
      <img src="../assets/images/pic_frame01.png" class="bg" alt>
    </div>
  </div>
</template>
<script>
let value = 0.8, // 值，0~1之间
  startAngle = 215, // 开始角度
  endAngle = -35, // 结束角度
  splitCount = 60, // 刻度数量
  pointerAngle = (startAngle - endAngle) * (1 - value) + endAngle; // 当前指针（值）角度
import echarts from "echarts";
export default {
  name: "right-bar",
  data() {
    return {
      members: [
        {
          avator: require("../assets/images/avator.png"),
          name: "Jack",
          time: "16:56:42"
        },
        {
          avator: require("../assets/images/avator.png"),
          name: "Jack",
          time: "16:56:42"
        },
        {
          avator: require("../assets/images/avator.png"),
          name: "Jack",
          time: "16:56:42"
        },
        {
          avator: require("../assets/images/avator.png"),
          name: "Jack",
          time: "16:56:42"
        },
        {
          avator: require("../assets/images/avator.png"),
          name: "Jack",
          time: "16:56:42"
        }
      ],
      echartsInstance: null,
      option: {
        series: [
          {
            type: "gauge",
            radius: "90%",
            startAngle: pointerAngle,
            endAngle: endAngle,
            splitNumber: 1,
            axisLine: {
              show: false,
              lineStyle: {
                width: 3,
                opacity: 0
              }
            },
            title: { show: false },
            detail: { show: false },
            splitLine: { show: false },
            axisTick: {
              length: 27,
              splitNumber: Math.ceil((1 - value) * splitCount),
              lineStyle: {
                color: "#001242",
                width: 3
              }
            },
            axisLabel: { show: false },
            pointer: { show: false },
            itemStyle: {},
            markPoint: {
              animation: false,
              silent: false,
              data: [
                {
                  symbol: "",
                  x: "50%",
                  y: "50%",
                  symbolSize: 280,
                  itemStyle: {
                    borderWidth: 3
                  }
                },
                {
                  symbol: "circle",
                  symbolSize: 200
                }
              ]
            },
            data: [
              {
                value: value,
                name: "test gauge"
              }
            ]
          },
          {
            type: "gauge",
            radius: "90%",
            startAngle: startAngle,
            endAngle: pointerAngle,
            splitNumber: 1,
            axisLine: {
              show: false,
              lineStyle: {
                width: 3,
                opacity: 0
              }
            },
            title: { show: false },
            detail: { show: false },
            splitLine: { show: false },
            axisTick: {
              length: 27,
              splitNumber: Math.ceil(value * splitCount),
              lineStyle: {
                color: {
                  image: document.getElementById("bg_img"),
                  repeat: "no-repeat"
                },
                width: 3
              }
            },
            axisLabel: { show: false },
            pointer: { show: false },
            itemStyle: {},
            data: [
              {
                value: value,
                name: "test gauge"
              }
            ]
          },
          {
            type: "gauge",
            radius: "95%",
            startAngle: pointerAngle,
            endAngle: pointerAngle,
            splitNumber: 1,
            axisLine: {
              show: false,
              lineStyle: {
                width: 3,
                opacity: 0
              }
            },
            title: { show: false },
            detail: { show: false },
            splitLine: { show: false },
            axisTick: {
              length: 20,
              splitNumber: 1,
              lineStyle: {
                color: {
                  image: document.getElementById("bg_img"),
                  repeat: "no-repeat"
                },
                width: 3
              }
            },
            axisLabel: { show: false },
            pointer: { show: false },
            itemStyle: {},
            data: [
              {
                value: value,
                name: "test gauge"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    getAvator(item) {
      return `../${item.avator}`;
    },
    init() {
      return new Promise(resolve => {
        this.echartsInstance = echarts.init(
          document.querySelector(".daily-check-in-rate")
        );
        resolve();
      });
    }
  },
  mounted() {
    this.init().then(() => {
      this.echartsInstance.setOption(this.option);
    });
  }
};
</script>
<style lang="less" scoped>
.right-bar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .top,
  .bottom {
    width: 100%;
    margin-bottom: 25px;
  }
  .top {
    flex: 2;
    position: relative;
    > img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .rencent-checked-member {
      width: 100%;
      height: calc(100% - 84px); /*no*/
      max-height: calc(100% - 84px); /*no*/
      display: flex;
      overflow-y: auto;
      flex-direction: column;
      .catogary-title {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 75px; /*no*/
        margin: 42px 62px 0; /*no*/
        padding: 0 40px; /*no*/
        li {
          text-align: center;
          color: @dashboardColor; /*no*/
          font-size: @dashboardFsz; /*no*/
          &.avator {
            width: 120px; /*no*/
          }
          &.time {
            width: 200px; /*no*/
          }
          &.name {
            flex: 1;
          }
        }
      }
      .rencent-checked-list {
        flex: 1;
        margin: 0 62px; /*no*/
        li {
          padding: 0 40px; /*no*/
          height: 160px; /*no*/
          display: flex;
          align-items: center;
          margin-top: 32px;
          background: url("../assets/images/pic_bg_person.png") no-repeat center;
          background-size: cover;
          span {
            display: block;
            height: 120px; /*no*/
            text-align: center;
            color: #fff;
            line-height: 120px; /*no*/
            font-size: @dashboardFsz;
            &.avator {
              width: 120px; /*no*/
            }
            &.name {
              flex: 1;
            }
            &.time {
              width: 200px; /*no*/
            }
            img {
              display: inline-block;
              z-index: 2;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .bottom {
    flex: 1;
    // background: url("../assets/images/pic_frame01.png") no-repeat center;
    background-size: contain;
    position: relative;
    > img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .daily-check-in-rate {
      width: 100%;
      height: calc(100% - 74px);
    }
  }
}
</style>