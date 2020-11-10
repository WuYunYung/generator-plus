<template>
  <el-container>
    <el-header>
      <el-page-header
        @back="back"
        content="New Project:"
      >
      </el-page-header>
    </el-header>
    <el-container id="new">

      <el-form
        labelPosition="left"
        label-width="80px"
        :model="project"
      >
        <el-form-item label="SN:">
          <el-input v-model="project.sn"></el-input>
        </el-form-item>
        <el-form-item label="JN:">
          <el-input v-model="project.jn"></el-input>
        </el-form-item>
        <el-form-item label="Name:">
          <el-input v-model="project.name"></el-input>
        </el-form-item>
        <el-form-item label="Server:">
          <el-select
            v-model="project.server"
            placeholder="Serve"
          >
            <el-option
              label="APAC"
              value="1"
            ></el-option>
            <el-option
              label="BUILD"
              value="2"
            ></el-option>
            <el-option
              label="DEV"
              value="3"
            ></el-option>
            <el-option
              label="RU"
              value="4"
            ></el-option>
            <el-option
              label="PD"
              value="5"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Status:">
          <el-select
            v-model="project.status"
            placeholder="Status"
          >
            <el-option
              label="Draft"
              value="1"
            ></el-option>
            <el-option
              label="Live"
              value="2"
            ></el-option>
            <el-option
              label="Close"
              value="3"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
#new {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-header {
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #f4f4f4;
}
</style>

<script>
export default {
  data() {
    return {
      project: {
        sn: "",
        jn: "",
        name: "",
        server: "1",
        status: "1",
        date: 0,
        snComment: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>