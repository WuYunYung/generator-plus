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

    <el-dialog title="New Project" :visible.sync="visible">
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
            <el-form :model="project" :key="'dialog_'+key" :label-position="'left'" label-width="100px">
              <div class="form-item" v-if="active===1">
                <h5>1. Please choose your server:</h5>
                <el-form-item label="Server:">
                  <el-select v-model="project.server" placeholder="Serve">
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
                <el-form-item label="SN:">
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
        <el-button type="primary" @click="next" v-if="active<3">Next</el-button>
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
  server: "1",
  status: "1",
  date: 0,
  snComment: ""
};
export default {
  data() {
    return {
      visible: false,
      key: 0,
      active: 1,
      project: { ...item }
    };
  },
  methods: {
    newDialog() {
      this.key++;
      this.visible = true;
      this.active = 1;
      this.project = { ...item };
    },
    next() {
      this.active++;
    },
    close() {
      this.visible = false;
    }
  }
};
</script>