<template>
  <div class="form-group">
    <div class="banner">
      <label>SN:</label>
      <div class="link">
        <a
          :href="checkerLink"
          class="badge badge-warning animate__animated animate__fadeIn float-right"
          v-if="!!checkerLink"
          title="Checker"
          target="_blank"
        >Checker</a>
      </div>
    </div>
    <div class="input-group input-group-sm">
      <div class="input-group-prepend">
        <button
          class="btn dropdown-toggle"
          :class="serverStatusClass"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          title="Server"
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

<style scoped>
.banner {
  display: flex;
  align-content: space-between;
}
.banner label {
  flex: 1;
}
.link{
  display: flex;
  flex-direction: column;
  justify-content:center;
}
</style>

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
      ].sort(),
      serverCheckIndex: 0,
      sn: ""
    };
  },
  computed: {
    checkerLink: function() {
      if (
        (this.serverComputed === "BUILD" || this.serverComputed === "APAC") &&
        !!this.snComputed
      ) {
        return (
          "https://surveys.globaltestmarket.com/survey/lib/local/surveychecker/v2349?checkPath=" +
          this.serverComputed.toLowerCase() +
          this.snComputed
        );
      } else {
        return "";
      }
    },
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
      if (this.sn.length >= 1) {
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
      } else {
        return "";
      }
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
      if (this.serverComputed != "DEV") {
        if (str.length <= 6) {
          this.sn = str;
        } else {
          this.sn = str.substr(0, 6);
        }
      }
      if (this.sn.length === 6 || this.serverComputed === "DEV") {
        this.snTextInput(this.routeComputed);
      } else {
        this.snTextInput("");
      }
    }
  }
};
</script>