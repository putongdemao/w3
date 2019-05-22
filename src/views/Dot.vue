<template>
  <p>加载中</p>
</template>
<script>
export default {};
</script>
<style lang="less">
p {
  margin: auto;
}
p::after {
  display: inline-block;
  content: "";
  line-height: 20px;
  animation: dot 1s infinite;
}
@keyframes dot {
  33.33% {
    content: ".";
  }
  66.66% {
    content: "..";
  }
  100% {
    content: "...";
  }
}
</style>
