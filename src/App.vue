<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <img src="@/assets/images/main-bg.png" alt class="main-bg">
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang='less'>
@import "./assets/css/normal.less";
@import "./assets/css/common.less";
@import "./assets/css/animate.less";

html,
body {
  font-family: "PingFangSC-Regular Avenir", Helvetica, Arial, sans-serif;
  height: auto;
  overflow: auto;
}
@font-face {
  font-family: "PangMenZhengDao";
  src: url("./assets/fonts/pangmenzhendao.ttf");
}
.bg {
  z-index: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.title {
  text-indent: 24px; /*no*/
  color: @dashboardColor;
  font-size: @dashboardFsz;
  height: 72px; /*no*/
}
#app {
  width: 5760px; /*no*/
  height: 2160px; /*no*/
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .main-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
