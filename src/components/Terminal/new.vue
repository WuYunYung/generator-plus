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
      title="New Project"
      :visible.sync="visible"
      :destroy-on-close="false"
      :width="dialogWidth"
    >
      <el-container span="24">
        <el-col>
          <el-row>
            <el-steps :active="active" finish-status="success" simple>
              <el-step title="Step 1"></el-step>
              <el-step title="Step 2"></el-step>
              <el-step title="Step 3"></el-step>
            </el-steps>
          </el-row>
          <hr />
          <el-row>
            <el-form :model="project" :label-position="'right'" :label-width="formLabelWidth">
              <div class="form-item" v-if="active===1">
                <h5>1. Please choose your server:</h5>
                <el-form-item label="Server:">
                  <el-select v-model="project.server" placeholder="Serve">
                    <el-option label="Server..." value="0" disabled></el-option>
                    <el-option label="APAC" value="1"></el-option>
                    <el-option label="BUILD" value="2"></el-option>
                    <el-option label="DEV" value="3"></el-option>
                    <el-option label="RU" value="4"></el-option>
                    <el-option label="PD" value="5"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="form-item" v-if="active===2">
                <h5>2. Please enter project information：</h5>
                <el-form-item label="SN:" :required="true">
                  <el-input v-model="project.sn"></el-input>
                </el-form-item>
                <el-form-item label="JN:">
                  <el-input v-model="project.jn"></el-input>
                </el-form-item>
                <el-form-item label="Name:">
                  <el-input v-model="project.name"></el-input>
                </el-form-item>
                <el-form-item label="Status:">
                  <el-select v-model="project.status" placeholder="Status">
                    <el-option label="Draft" value="1"></el-option>
                    <el-option label="Live" value="2"></el-option>
                    <el-option label="Close" value="3"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="form-item" v-if="active===3">
                <h5>3. Please check the above information：</h5>
              </div>
            </el-form>
          </el-row>
        </el-col>
      </el-container>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">Close</el-button>
        <el-button type="primary" @click="next" v-if="active<3" :disabled="disableNext">Next</el-button>
        <el-button type="primary" @click="close" v-if="active===3">Save</el-button>
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
  server: "0",
  status: "1",
  date: 0,
  snComment: ""
};
export default {
  computed:{
    
  },
  data() {
    return {
      visible: false,
      active: 1,
      project: { ...item },
      formLabelWidth: "80px",
      dialogWidth: "540px"
    };
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
      this.active = 1;
      this.project = { ...item };
    },
    next() {
      this.active++;
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
    }
  },
};
</script>