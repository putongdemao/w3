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
  height: 100px;
  width: 100px;
  box-shadow: inset 0 0 0 3px #000;
  border-radius: 50%;
  &::before,
  &::after {
    display: block;
    content: "";
    position: absolute;
    border: 3px solid transparent;
    box-sizing: border-box;
    transition: border-color 1s;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: rotate(45deg);
  }

  &:hover {
    &::before {
      width: 100px;
      height: 100px;
      border-color: aqua;
      transition: border-top-color 0s linear, border-right-color 0s linear,
        border-bottom-color 0s linear, border-left-color 0s linear;
      transition-delay: 0s, 0.25s, 0.5s, 0.75s;
    }
    &::after {
      width: 100px;
      height: 100px;
      border-top: 3px solid aqua;
      transform: rotate(315deg);
      transition: transform 0.75s linear;
      transition-delay: 0s;
    }
  }
}
</style>
