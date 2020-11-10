<template>
  <el-container :span="24" id="terminal">
    <el-col :span="24">
      <el-row :span="24" class="logo">
        <span class="navbar-brand">
          Generator
          <sup class="text-warning">
            <b>+</b>
          </sup>
        </span>
      </el-row>
      <el-row
        :span="24"
        class="banner"
        type="flex"
        justify="end"
        align="center"
      >
        <el-col class="text">
          <span>项目</span>
        </el-col>
        <el-col class="btn">filter</el-col>
        <el-col class="btn">new</el-col>
      </el-row>
      <el-row :span="24">全部|filter</el-row>
      <el-row :span="24"> items </el-row>
    </el-col>
  </el-container>
</template>

<style lang="scss" scoped>
#terminal {
  width: 100%;
  height: 100%;
  .el-col>.el-row{
    padding:10px 20px;
    border-bottom:#f4f4f4 1px solid;
  }
}
.banner {
  line-height: 38px;
  .text {
    flex: 1;
    h1::after {
      content: "|";
    }
  }
  .btn {
    width: fit-content;
  }
}
</style>

<script>
export default {};
</script>