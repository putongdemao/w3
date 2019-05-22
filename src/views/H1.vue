<template>
  <h1>请输入您喜欢的产品</h1>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
h1 {
  margin: auto;
  font: bold 200% Consolas, Monaco, monospace;
  // border-right: 0.1em solid;
  width: 9.1em;
  margin: 2em 1em;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3s steps(9, end);
  // cursor-blink 0.3s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
}

// @keyframes cursor-blink {
//   50% {
//     border-color: transparent;
//   }
// }
</style>
