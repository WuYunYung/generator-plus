<template>
  <main id="main">
    <div class="header">
      <h2>新建项目</h2>
      <p class="lead">
        请在此填写项目的相关信息，如有疑惑，可以将滑鼠移至相应的标题上以查看详细信息
      </p>
    </div>
    <div class="main">
      <div class="left">
        <h3 style="grid-area: head">基本信息:</h3>
        <div style="grid-area: title">
          <label class="form-label">邮件标题 <sup>OPT</sup>:</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control form-control"
              placeholder="e.g. [Job number] - [Project name] - [Cint number]"
              v-model="title"
            />
            <button
              class="btn btn btn-outline-secondary"
              type="button"
              @click="analyze"
            >
              解析
            </button>
          </div>
        </div>
        <div style="grid-area: sn">
          <label for="cint-number" class="form-label"
            ><sup style="color: red">*</sup>Cint number:</label
          >
          <div>
            <input
              type="text"
              class="form-control"
              id="cint-number"
              placeholder="[Cint number]"
              required
              v-model="sn"
            />
          </div>
        </div>
        <div style="grid-area: jn">
          <label for="job-number" class="form-label"
            >Job number <sup>OPT</sup>:</label
          >
          <div>
            <input
              type="text"
              class="form-control"
              id="job-number"
              placeholder="[Job number]"
              v-model="jn"
            />
          </div>
        </div>
        <div style="grid-area: name">
          <label for="project-name" class="form-label"
            >Project name <sup>OPT</sup>:</label
          >
          <div>
            <input
              type="text"
              class="form-control"
              id="project-name"
              placeholder="[Project name]"
              v-model="name"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <h3><sup style="color: red">*</sup>项目服务器:</h3>
        <div class="list-group">
          <label class="list-group-item list-group-item-action">
            <input type="radio" id="APAC" value="APAC" v-model="server" />APAC
          </label>
          <label class="list-group-item list-group-item-action">
            <input
              type="radio"
              id="BUILD"
              value="BUILD"
              v-model="server"
            />BUILD
          </label>
          <label class="list-group-item list-group-item-action">
            <input type="radio" id="DEV" value="DEV" v-model="server" />DEV
          </label>
          <label class="list-group-item list-group-item-action">
            <input type="radio" id="RU" value="RU" v-model="server" />RU
          </label>
          <label class="list-group-item list-group-item-action">
            <input type="radio" id="PD" value="PD" v-model="server" />PD
          </label>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <button class="btn btn-secondary" @click="reset">重置信息</button>
      </div>
      <div class="footer-right">
        <button class="btn btn-primary" @click="submit"
        :disabled="!isValid">确认信息</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
#main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr;
}

.lead {
  font-size: 1em;
}

.header {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: baseline;
  box-shadow: inset 0 -1px rgb(0 0 0 / 10%);
}

.header h2,
.header p {
  padding: 15px;
  margin: 0;
}

.header h2 {
  font-size: 1.5em;
}

.main {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.left,
.right {
  padding: 15px;
  gap: 10px;
}

.main h3 {
  font-size: 1.3em;
}

.left {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "head head"
    "title title"
    "sn jn"
    "name name";
}
.right {
  display: grid;
  grid-template-rows: repeat(2, auto);
}

.list-group .list-group-item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
}

.footer {
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-template-rows: 4fr 6fr;
  gap: 15px;
  align-items: flex-end;
}

.footer-left{
  display: flex;
  justify-content: flex-end;
}
</style>

<script>
import store from "../store/store";
import router from "../router";
export default {
  data() {
    return {
      title: "",
      sn: "",
      jn: "",
      name: "",
      server: "APAC",
    };
  },
  computed:{
    isValid(){
      return(!!this.sn.length)
    }
  },
  methods: {
    reset() {
      this.title = "";
      this.sn = "";
      this.jn = "";
      this.name = "";
      this.server = "APAC";
    },
    analyze() {
      let title = this.title;
      let jn = title.match(/\d{9}/);
      let name = title.replace(/\d{9}/, "");
      let sn = name.match(/\d{7}/);
      name = name.replace(/\d{7}/, "").replace(/_/g," ").trim();
      this.sn = sn;
      this.jn = jn;
      this.name = name;
    },
    submit() {
      const route = `/${this.sn}`;
      const project = {
        sn: this.sn,
        jn: this.jn,
        name: this.name,
      };
      store.commit("create", project);
      this.reset();
      router.push(route);
    },
  },
};
</script>