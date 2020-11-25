<template>
  <el-col class="new">
    <el-button
      type="primary"
      size="medium"
      icon="el-icon-plus"
      circle
      title="New"
      @click="newDialog"
    />

    <el-dialog
      title="新建项目:"
      :visible.sync="visible"
      :destroy-on-close="false"
      :width="dialogWidth"
    >
      <el-container :span="24">
        <el-form
          :model="project"
          :label-position="'right'"
          :label-width="formLabelWidth"
        >
          <el-form-item label="Server:" :required="true">
            <el-select v-model="project.server">
              <el-option label="APAC" value="1"></el-option>
              <el-option label="BUILD" value="2"></el-option>
              <el-option label="DEV" value="3"></el-option>
              <el-option label="RU" value="4"></el-option>
              <el-option label="PD" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="SN:" :required="true">
            <el-input
              v-model="project.sn"
              placeholder="Cint number:"
            ></el-input>
          </el-form-item>
          <el-form-item label="JN:">
            <el-input v-model="project.jn" placeholder="JN:"></el-input>
          </el-form-item>
          <el-form-item label="Name:">
            <el-input
              v-model="project.name"
              placeholder="Project name:"
            ></el-input>
          </el-form-item>
          <el-form-item label="Status:" :required="true">
            <el-select v-model="project.status" placeholder="Status">
              <el-option label="Draft" value="1"></el-option>
              <el-option label="Live" value="2"></el-option>
              <el-option label="Close" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-container>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">Close</el-button>
        <el-button type="primary" @click="save" :disabled="check"
          >Save</el-button
        >
      </div>
    </el-dialog>
  </el-col>
</template>

<style lang="scss" scoped>
.el-input__inner {
  max-width: 140px;
}
</style>

<script>
const item = {
  sn: "",
  jn: "",
  name: "",
  server: "1",
  status: "1",
  date: 0,
  snComment: "",
};
export default {
  data() {
    return {
      visible: false,
      project: { ...item },
      formLabelWidth: "80px",
      dialogWidth: "540px",
    };
  },
  computed:{
    check(){return !this.project.sn.length},
  },
  mounted() {
    // Element UI Dialog 自適應
    window.onresize = () => {
      return (() => {
        this.setDialogWidth();
      })();
    };
  },
  methods: {
    newDialog() {
      this.visible = true;
      this.project = { ...item };
    },
    close() {
      this.visible = false;
    },
    setDialogWidth() {
      let windowSize = document.body.clientWidth;
      const defaultWidth = 540; // 預設寬度
      if (windowSize < defaultWidth) {
        this.dialogWidth = "100%";
      } else {
        this.dialogWidth = defaultWidth + "px";
      }
    },
    save(){
      this.$store.commit('addProject',{...this.project});
      this.close();
    }
  },
  watch: {
    "project.sn": function (val) {
      this.project.sn =
        this.project.server === "3" ? val : val.replace(/[^\d]/gi, "");
    },
  },
};
</script>