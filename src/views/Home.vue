<template>
  <el-container class="home">
    <el-row :span="24" class="logo">
      <span class="display-4">
        Generator
        <sup class="text-warning">
          <b>+</b>
        </sup>
      </span>
    </el-row>
  </el-container>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo{
  opacity: 0.5;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>
