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
      <el-row :span="24" class="banner" type="flex" justify="end" align="center">
        <el-col class="search">
          <el-input placeholder="请输入内容">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
        <el-col class="new">
          <el-button type="primary" size="medium" icon="el-icon-plus" circle />
        </el-col>
      </el-row>
      <el-row :span="24"> items </el-row>
    </el-col>
  </el-container>
</template>

<style lang="scss" scoped>
#terminal {
  width: 100%;
  height: 100%;
  .el-col > .el-row {
    padding: 10px 20px;
    border-bottom: #f4f4f4 1px solid;
  }
}
.banner {
  .search{
    flex:1;
  }
  .new{
    margin-left:10px;
    width: fit-content;
    line-height: 40px;
  }
}
</style>

<script>
export default {};
</script>