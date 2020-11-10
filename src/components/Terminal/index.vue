<template>
  <el-container
    :span="24"
    id="terminal"
  >
    <el-col :span="24">
      <el-row
        :span="24"
        class="logo"
      >
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
        <el-col class="search">
          <el-input
            placeholder="Filter:"
            v-model.lazy="serach"
          >
            <i
              slot="prefix"
              class="el-input__icon el-icon-search"
            ></i>
          </el-input>
        </el-col>
        <el-col class="new">
          <el-button
            type="primary"
            size="medium"
            icon="el-icon-plus"
            circle
            title="New"
            @click="newProject"
          />
        </el-col>
      </el-row>
      <el-menu>
        <el-menu-item
          v-for="(item,index) in result"
          :key="index"
        >{{item.jn}} - {{item.name}} - {{item.sn}} <i class="el-icon-caret-right"></i></el-menu-item>
      </el-menu>
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
  .search {
    flex: 1;
  }
  .new {
    margin-left: 10px;
    width: fit-content;
    line-height: 40px;
  }
}

.el-menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    color: #0000;
  }
  &:hover i {
    color: #000;
  }
}
</style>

<script>
export default {
  data() {
    return {
      serach: "",
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    result() {
      if (!this.serach) return this.projects;
      const reg = new RegExp(this.serach, "gi");
      return this.projects.filter((el) => {
        return Object.entries(el)
          .map((el) => {
            return reg.test(el[1]);
          })
          .reduce((a, b) => a || b);
      });
    },
  },
  methods: {
    newProject() {
      this.$router.push({ path: "New" });
    },
  },
};
</script>