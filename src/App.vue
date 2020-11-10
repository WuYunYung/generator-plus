<template>
  <el-container id="app">
    <el-aside :span="6">
      <terminal />
    </el-aside>
    <el-container :span="18">
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
#app{
  width: 100vw;
  height: 100vh;
  &>.el-aside{
    background: #ffffff;
  }
  &>.el-container{
    background:#f3f2f1;
  }
}
</style>

<script>
import terminal from "./components/Terminal";

export default {
  components: {
    terminal,
  },
};
</script>
