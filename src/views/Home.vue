<template>
  <div id="home">
    <el-container :span="24">
      <el-aside :span="6" class="shadow-sm">
        <terminal />
      </el-aside>
      <el-container :span="18">
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  & > .el-container {
    width: 100%;
    height: 100%;
    & > .el-aside {
      background: #ffffff;
    }
    & > .el-container {
      background: #f3f2f1;
    }
  }
}
</style>

<script>
import terminal from "./Terminal";

export default {
  components: {
    terminal,
  },
};
</script>
