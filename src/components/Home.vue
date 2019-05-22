<template>
  <div class="home">
    <ul class="home-menu">
      <li :key="index" v-for="(menu, index) in menus" @click="toMenu(menu)">{{menu}}</li>
    </ul>
    <div class="home-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        "both",
        "rect",
        "circle",
        "dot",
        "h1",
        "slash",
        "transparent",
        "hover"
      ]
    };
  },
  methods: {
    toMenu(name) {
      this.$router.push({ name });
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  &-menu {
    padding: 30px;
    width: 240px;
    background-color: #ccc;
    li {
      line-height: 25px;
      text-align: center;
      cursor: pointer;
    }
  }
  &-container {
    padding: 30px;
    width: calc(100% - 240px);
    background-color: #eee;
    display: flex;
  }
}
</style>
