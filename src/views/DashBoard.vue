<template>
  <div class="dashboard-container">
    <div class="company-title">中新智擎科技有限公司</div>
    <div class="top-flash">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="left-bar">
      <left-bar></left-bar>
    </div>
    <div class="main-bar">
      <main-bar></main-bar>
    </div>
    <div class="right-bar">
      <right-bar></right-bar>
    </div>
  </div>
</template>
<script>
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
import MainBar from "@/components/MainBar";
export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    LeftBar,
    RightBar,
    MainBar
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.dashboard-container {
  font-family: @font-family;
  width: calc(100% - 72px);
  /*no*/
  height: calc(100% - 145px * 2);
  /*no*/
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .company-title {
    width: 100%;
    height: 123px;
    font-size: @companyFsz;
    line-height: 123px;
    text-align: center;
    color: @companyColor;
  }
  .top-flash {
    width: 100%;
    height: 130px; /*no*/
    position: absolute;
    top: -6px; /*no*/
    display: flex;
    > div {
      flex: 1;
      &.left {
        transform: scaleY(-1);
        animation: toggle_top_line 6s ease infinite reverse;
      }
      &.right {
        animation: toggle_top_line 6s ease infinite;
      }
    }
  }
  .left-bar,
  .right-bar {
    width: 1336px;
    /*no*/
    height: calc(100% - 123px);
  }
  .main-bar {
    flex: 1;
    margin: 0 24px;
    height: calc(100% - 123px);
  }
}
</style>
