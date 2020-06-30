<template>
  <div class="form-group">
    <label>SN:</label>
    <div class="input-group input-group-sm">
      <div class="input-group-prepend">
        <button
          class="btn dropdown-toggle"
          :class="serverStatusClass"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >{{serverComputed}}</button>

        <div class="dropdown-menu">
          <span
            class="dropdown-item"
            v-for="(item,index) of serverList"
            :key="item.name"
            :value="index"
            @click="serverClick(index)"
          >{{item.name.toUpperCase()}}</span>
        </div>
      </div>
      <input
        type="text"
        class="form-control"
        v-model="sn"
        :class="{'is-valid':snComputed&&serverCheckIndex!=2}"
        placeholder="Please type in your SN number:"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serverList: [
        {
          name: "apac",
          domain: "https://surveys.globaltestmarket.com",
          route: "/apac"
        },
        {
          name: "build",
          domain: "https://surveys.globaltestmarket.com",
          route: "/selfserve/1ab8"
        },
        {
          name: "dev",
          domain: "https://gmidev.decipherinc.com",
          route: "/apac/sha"
        },
        {
          name: "ru",
          domain: "https://gmiru.decipherinc.com",
          route: "/apac"
        },
        {
          name: "PD",
          domain: "https://surveys.globaltestmarket.com",
          route: "/apac/PD"
        }
      ],
      serverCheckIndex: 0,
      sn: ""
    };
  },
  computed: {
    serverStatusClass: function() {
      return {
        "btn-outline-secondary": !this.snComputed,
        "btn-secondary": !!this.snComputed
      };
    },
    serverComputed() {
      return this.serverList[this.serverCheckIndex].name.toUpperCase();
    },
    snComputed() {
      if (this.serverCheckIndex != "2") {
        if (this.sn.length === 6) {
          if (this.serverComputed === "PD") {
            return "/" + this.sn;
          } else {
            return "/C" + this.sn;
          }
        } else {
          return "";
        }
      } else {
        return "/" + this.sn;
      }
    },
    routeComputed() {
      return {
        sn: this.sn,
        server: this.serverComputed,
        surveyLink:
          this.serverList[this.serverCheckIndex].domain +
          "/survey" +
          this.serverList[this.serverCheckIndex].route +
          this.snComputed,
        repLink:
          this.serverList[this.serverCheckIndex].domain +
          "/rep" +
          this.serverList[this.serverCheckIndex].route +
          this.snComputed,
        reportLink:
          this.serverList[this.serverCheckIndex].domain +
          "/report" +
          this.serverList[this.serverCheckIndex].route +
          this.snComputed
      };
    }
  },
  methods: {
    serverClick(value) {
      this.serverCheckIndex = value;
      this.sn = "";
      this.snTextInput;
    },
    snTextInput(val) {
      this.$emit("update:route", val);
    }
  },
  watch: {
    sn(val) {
      let str = val.replace(/[^\d]/g, "");
      if (this.serverCheckIndex != 2) {
        if (str.length <= 6) {
          this.sn = str;
        } else {
          this.sn = str.substr(0, 6);
        }
      }
      if (this.sn.length === 6 || this.serverCheckIndex === 2) {
        this.snTextInput(this.routeComputed);
      } else {
        this.snTextInput("");
      }
    }
  }
};
</script>