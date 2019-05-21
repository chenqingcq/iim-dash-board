<template>
  <div class="main-bar-container">
    <div class="top">
      <img src="../assets/images/pic_frame05.png" class="bg" alt>
      <div class="desc-panel">
        <ul>
          <li v-for="(item,index) in descList" :key="index">
            <p class="title">{{item.desc}}</p>
            <span>{{item.total}}</span>
          </li>
        </ul>
      </div>
      <div class="show-panel">
        <div class="status">
          <template v-if="isCheckIng">
            <div class="active"></div>
          </template>
          <div class="inactive"></div>
          <div class="logo"></div>
          <div class="rotate">
            <div class="rotate-item"></div>
          </div>
        </div>
        <div class="new-logistics">
          <div class="logistics-panel">
            <img src="../assets/images/ltd-icon/icon_item01.png" class="service-icon" alt>
          </div>
          <p class="title">新物流</p>
        </div>
        <div class="new-region">
          <div class="region-panel">
            <img src="../assets/images/ltd-icon/icon_item02.png" class="service-icon" alt>
          </div>
          <p class="title">新社区</p>
        </div>
        <div class="new-fade">
          <div class="fade-panel">
            <img src="../assets/images/ltd-icon/icon_item03.png" class="service-icon" alt>
          </div>
          <p class="title">新养老</p>
        </div>
        <div class="new-goverment">
          <div class="goverment-panel">
            <img src="../assets/images/ltd-icon/icon_item04.png" class="service-icon" alt>
          </div>
          <p class="title">新政务</p>
        </div>
        <div class="new-trade">
          <div class="trade-panel">
            <img src="../assets/images/ltd-icon/icon_item05.png" class="service-icon" alt>
          </div>
          <p class="title">新商贸</p>
        </div>
        <div class="new-visitorial">
          <div class="visitorial-panel">
            <img src="../assets/images/ltd-icon/icon_item06.png" class="service-icon" alt>
          </div>
          <p class="title">新餐旅</p>
        </div>
        <div class="new-agricuture">
          <div class="agricuture-panel">
            <img src="../assets/images/ltd-icon/icon_item07.png" class="service-icon" alt>
          </div>
          <p class="title">新农业</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <p class="title">访客数</p>
        <ul>
          <li v-for="(number , index) in visitorTotal" :key="index" class="register">{{number}}</li>
        </ul>
        <img src="../assets/images/pic_frame01.png" class="bg" alt>
      </div>
      <div class="right">
        <p class="title">已签到人数</p>
        <ul>
          <li v-for="(number , index) in  checkedTotal" :key="index" class="register">{{number}}</li>
        </ul>
        <img src="../assets/images/pic_frame03.png" alt class="bg">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main-bar",
  data() {
    return {
      isCheckIng: false, //是否有人签到
      visitorTotal: [2, 8, 4], //访客数
      checkedTotal: [0, 5, 4, 3, 8], //已签到人数
      descList: [
        {
          //top描述信息
          desc: "全网出入人数",
          total: 423152454
        },
        {
          desc: "全网注册人数",
          total: "1234"
        },
        {
          desc: "全网访客人数",
          total: 72314
        },
        {
          desc: "在线机器人数",
          total: 598
        }
      ]
    };
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.inactive {
  animation: toggle 2s ease infinite;
}
.main-bar-container {
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
    margin-top: 18px; /*no*/
    // background: url("../assets/images/pic_frame05.png") no-repeat center;
    background-size: contain;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .desc-panel {
      width: 100%;
      height: 200px; /*no*/
      margin-top: 130px; /*no*/
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          width: 600px; /*no*/
          height: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          background: url("../assets/images/pic_bg_number01.png") no-repeat
            center;
          background-size: contain;
          p {
            width: 100%;
            text-align: center;
          }
          span {
            display: block;
            width: 100%;
            text-align: center;
            font-family: @font-family-desc;
            font-size: @font-family-desc-fsz; /*no*/
            color: #fff;
          }
        }
      }
    }
    .show-panel {
      height: calc(100% - 200px - 130px); /*no*/
      position: relative;
      .status {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 480px; /*no*/
        height: 480px; /*no*/
        div {
          width: 100%;
          height: 100%;
          &.logo {
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url("../assets/images/ltd-icon/icon_logo.png") no-repeat
              center;
            background-size: 150px 105px; /*no*/
          }
          &.rotate {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 2;
            transform: translate(-50%, -50%);
            > .rotate-item {
              background: url(../assets/images/pic_circle_round.png) no-repeat
                center;
              background-size: contain;
              animation: rotate 4s linear infinite reverse;
              width: 100%;
              height: 100%;
              position: absolute;
            }
          }
        }
      }
      .new-logistics {
        position: absolute;
        left: 163px; /*no*/
        bottom: 385px; /*no*/
        width: 199px; /*no*/
        height: 219px; /*no*/
        animation: debounce 15s 3s infinite linear; /*no*/
        p {
          width: 100%;
          text-align: center;
        }
        .logistics-panel {
          width: 199px; /*no*/
          height: 190px; /*no*/
          display: flex;
          justify-content: center;
          align-items: center;
          animation: toggle_new_logistics 5s ease infinite;
          img {
            display: block;
            width: 92px; /*no*/
            height: 68px; /*no*/
            margin: 0 auto;
          }
        }
      }
      .new-region {
        position: absolute;
        left: 629px; /*no*/
        bottom: 158px; /*no*/
        width: 263px; /*no*/
        height: 321px; /*no*/
        animation: debounce 15s infinite linear; /*no*/
        p {
          width: 100%;
          text-align: center;
        }
        .region-panel {
          width: 100%; /*no*/
          height: 263px; /*no*/
          display: flex;
          justify-content: center;
          align-items: center;
          animation: toggle_new_logistics 5s 2s ease infinite;
          img {
            display: block;
            width: 107px; /*no*/
            height: 107px; /*no*/
            margin: 0 auto;
          }
        }
      }
      .new-fade {
        position: absolute;
        left: 614px; /*no*/
        top: 84px; /*no*/
        width: 199px; /*no*/
        height: 259px; /*no*/
        animation: debounce 15s 2s infinite linear; /*no*/
        p {
          width: 100%;
          text-align: center;
        }
        .fade-panel {
          width: 100%; /*no*/
          height: 199px; /*no*/
          display: flex;
          justify-content: center;
          align-items: center;
          animation: toggle_new_logistics 5s 4s ease infinite;
          img {
            display: block;
            width: 68px; /*no*/
            height: 76px; /*no*/
          }
        }
      }
      .new-goverment {
        position: absolute;
        right: 614px; /*no*/
        top: 104px; /*no*/
        width: 199px; /*no*/
        height: 259px; /*no*/
        animation: debounce 15s 4s infinite linear; /*no*/
        p {
          width: 100%;
          text-align: center;
        }
        .goverment-panel {
          width: 100%; /*no*/
          height: 199px; /*no*/
          display: flex;
          justify-content: center;
          align-items: center;
          animation: toggle_new_logistics 5s 6s ease infinite;
          img {
            display: block;
            width: 91px; /*no*/
            height: 101px; /*no*/
          }
        }
      }
      .new-trade {
        position: absolute;
        right: 914px; /*no*/
        bottom: 104px; /*no*/
        width: 199px; /*no*/
        height: 259px; /*no*/
        animation: debounce 15s 6s infinite linear; /*no*/
        p {
          width: 100%;
          text-align: center;
        }
        .trade-panel {
          width: 100%; /*no*/
          height: 199px; /*no*/
          display: flex;
          justify-content: center;
          align-items: center;
          animation: toggle_new_logistics 5s 8s ease infinite;
          img {
            display: block;
            width: 61px; /*no*/
            height: 61px; /*no*/
          }
        }
      }
      .new-visitorial {
        position: absolute;
        right: 514px; /*no*/
        bottom: 104px; /*no*/
        width: 199px; /*no*/
        height: 259px; /*no*/
        animation: debounce 15s 5s infinite linear; /*no*/
        p {
          width: 100%;
          text-align: center;
        }
        .visitorial-panel {
          width: 100%; /*no*/
          height: 199px; /*no*/
          display: flex;
          justify-content: center;
          align-items: center;
          animation: toggle_new_logistics 5s 10s ease infinite;
          img {
            display: block;
            width: 69px; /*no*/
            height: 59px; /*no*/
          }
        }
      }
      .new-agricuture {
        position: absolute;
        right: 200px; /*no*/
        bottom: 304px; /*no*/
        width: 199px; /*no*/
        height: 259px; /*no*/
        animation: debounce 15s 5s infinite linear; /*no*/
        p {
          width: 100%;
          text-align: center;
        }
        .agricuture-panel {
          width: 100%; /*no*/
          height: 199px; /*no*/
          display: flex;
          justify-content: center;
          align-items: center;
          animation: toggle_new_logistics 5s 12s ease infinite;
          img {
            display: block;
            width: 70px; /*no*/
            height: 74px; /*no*/
          }
        }
      }
    }
  }
  .bottom {
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    .left {
      width: 1136px; /*no*/
      height: 100%;
      margin-right: 24px; /*no*/
      position: relative;
      //   background: url("../assets/images/pic_frame01.png") no-repeat center;
      background-size: contain;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      ul {
        width: 100%;
        height: calc(90% - 72px);
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          background: url("../assets/images/pic_bg_number02.png") no-repeat
            center;
          width: 240px;
          height: 384px;
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: @registerFsz;
          color: @visitorColor;
        }
      }
    }
    .right {
      flex: 1;
      height: 100%;
      position: relative;
      //   background: url("../assets/images/pic_frame03.png") no-repeat center;
      background-size: contain;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      ul {
        width: 100%;
        height: calc(90% - 72px);
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          background: url("../assets/images/pic_bg_number02.png") no-repeat
            center;
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
}
</style>