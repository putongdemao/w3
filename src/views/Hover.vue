<template>
  <div class="box">
    <div class="top"></div>
    <div class="left"></div>
    <div class="bottom"></div>
    <div class="right"></div>
    <div class="item"></div>
  </div>
</template>
<script>
export default {
    
};
</script>
<style lang="less" scoped>
.box {
  margin: auto;
  width: 100px;
  height: 100px;
  position: relative;
  .top,
  .right,
  .bottom,
  .left,
  .item {
    position: absolute;
    width: 100px;
    height: 100px;
  }
}
</style>
