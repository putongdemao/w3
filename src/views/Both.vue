<template>
  <div class="rect"></div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.rect {
  position: relative;
  margin: auto;
  height: 50px;
  width: 100px;
  box-shadow: inset 0 0 0 3px #000;
  &::before,
  &::after {
    display: block;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border: 3px solid transparent;
    box-sizing: border-box;
    transition: border-color 1s;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover {
    &::before,
    &::after {
      width: 100%;
      height: 100%;
    }
    &::before {
      border-left-color: aqua;
      border-bottom-color: aqua;
      transition: width 0.5s, height 0.5s, border-bottom-color 0.5s;
      transition-delay: 0.5s, 0s, 0.5s;
    }
    &::after {
      border-right-color: aqua;
      border-top-color: aqua;
      transition: width 0.5s, height 0.5s, border-right-color 0.5s;
      transition-delay: 0s, 0.5s, 0.5s;
    }
  }
}
</style>
