<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="col col-xl-4 col-lg-4 col-md-5"
          style="margin-top: 1.5rem;height: fit-content;"
          >
          <div class="card shadow animate__animated animate__fadeIn" style="overflow:hidden">
            <div class="card-body">
              <h5 class="card-title">Survey Info:</h5>
              <hr />

              <sn-input :route.sync="route" />
              <div class="form-group animate__animated animate__fadeIn" v-if="route">
                <label>Survey Path:</label>
                <div class="input-group input-group-sm">
                  <div class="input-group-prepend">
                    <span class="input-group-text" v-if="!!sn">{{preCComputed}}{{sn}}</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="sp"
                    placeholder="temp…"
                    :class="{'is-valid':spComputed}"
                  />
                </div>
                <div class="custom-control custom-switch d-inline float-right">
                  <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                </div>
              </div>
              <div class="form-group animate__animated animate__fadeIn" v-if="route">
                <label>Primary Code:</label>
                <div class="input-group input-group-sm" style="font-family: Consolas;">
                  <select class="form-control form-control-sm" v-model="cc">
                    <option selected value="0" disabled>Country code</option>
                    <option
                      v-for="i in countryCode"
                      :value="i.code"
                      :key="i.code"
                    >{{i.code}}({{i.country}})</option>
                  </select>
                  <select class="form-control form-control-sm" v-model="lc">
                    <option selected value="0" disabled>Language code</option>
                    <option
                      v-for="i in lang"
                      :value="i.code"
                      :key="i.code"
                    >{{i.code}}({{i.language}})</option>
                  </select>
                </div>
              </div>
              <button
                class="btn btn-light badge badge-light animate__animated animate__fadeIn"
                type="button"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="spm_info spm_link"
                v-if="route"
              >Super PM</button>
              <div id="spm_info" class="collapse multi-collapse animate__animated animate__fadeIn">
                <hr />
                <div class="form-group">
                  <label>Project Token:</label>
                  <div class="input-group input-group-sm">
                    <input type="text" class="form-control" v-model="pt" />
                  </div>
                </div>

                <div class="form-group">
                  <label>Survey ID:</label>
                  <div class="input-group input-group-sm">
                    <input type="text" class="form-control" v-model="si" />
                  </div>
                </div>
              </div>
              <div v-if="!route" class="animated fadeIn">
                <hr />
                <h5 class="card-title">Guide:</h5>
                <p class="card-text">
                  <small class="text-muted guide">
                    <ul>
                      <li>
                        Please type in your SN number frist to unlock this
                        <b>panel</b>.
                      </li>
                      <li>
                        For SPM link, please also click the
                        <b>Super PM</b> button.
                      </li>
                      <li>
                        Except the Test link,we also need choose a
                        <b>country code</b> and a
                        <b>language code</b>.
                      </li>
                    </ul>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col col-12 float-right col-xl-8 col-lg-8 col-md-7"
          style="margin-top: 1.5rem;"
          v-if="route"
          >
          <div class="card shadow">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active text-secondary"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Survey
                    Links:
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-secondary"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Other
                    useful links:
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <link-item cid="testLink" cname="Test Link" :clink="testLink"></link-item>
                  <link-item cid="liveLink" cname="Live Link" :clink="liveLink"></link-item>
                  <link-item cid="wechatLink" cname="WeChat Link" :clink="wechatLink"></link-item>
                  <div id="spm_link" class="collapse multi-collapse">
                    <link-item cid="spmmbLink" cname="SuperPM MB link" :clink="spmmbLink"></link-item>
                    <link-item cid="spmtnsLink" cname="SuperPM TNS link" :clink="spmtnsLink"></link-item>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <link-item cid="surveySummary" cname="Survey summary" :clink="surveySummary"></link-item>
                  <link-item cid="report2010" cname="Report 2010" :clink="report2010"></link-item>
                  <link-item cid="editData" cname="Edit data" :clink="editData"></link-item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.guide > ul {
  padding-left: 1.5rem;
}
</style>

<script>
import { languageCode, countryCode } from "../../js/data.js";
import linkItem from "./linkItem.vue";
import snInput from "./snInput";
export default {
  data() {
    return {
      route: "", //这里将会是组件snInput传过来的地址信息
      sn: "", //sn number
      sp: "", //survey path
      cc: 0, //country code,default is 0
      lc: 0, //language code,default is 0
      pt: "b8dc3876-0d72-434c-9ea586ef8f77", // token/table
      si: "YYYY", //survey id
      mainLink: "https://surveys.globaltestmarket.com/survey/apac",
      lang: languageCode, //list of language code
      countryCode: countryCode //list of country code
    };
  },
  methods: {
    getSnText(item) {
      console.log(item);
    }
  },
  computed: {
    preCComputed(){
      if (this.route.server==="DEV"||this.route.server==="PD") {
        return ""
      }else{
        return "C"
      }
    },
    spComputed() {
      if (/temp(0\d|1[0-2])([0-2]\d|3[0-1])/.exec(this.sp)) {
        return "/" + this.sp;
      } else {
        return "";
      }
    }, //计算后的survey path，如果不符合规则则返回空
    ccComputed() {
      if (this.cc) {
        return "&countryCode=" + this.cc;
      } else {
        return "";
      }
    },
    lcComputed() {
      if (this.lc) {
        return "&lang=" + this.lc;
      } else {
        return "";
      }
    },
    testLink() {
      if (this.route) {
        return (
          this.route.surveyLink +
          this.spComputed +
          "?panels=LFP&list=0" +
          this.ccComputed +
          this.lcComputed
        );
      } else {
        return "#";
      }
    }, //测试连接
    liveLink() {
      if (this.route && this.ccComputed && this.lcComputed) {
        return (
          this.route.surveyLink +
          "?panels=LFP&list=80001" +
          this.ccComputed +
          this.lcComputed +
          "&ID=[ID]"
        );
      } else {
        return "#";
      }
    }, //live link
    wechatLink() {
      if (this.route && this.ccComputed && this.lcComputed) {
        return (
          this.route.surveyLink +
          this.spComputed +
          "?panels=Wechat&list=90888&sn=" +
          this.sn +
          this.ccComputed +
          this.lcComputed +
          "&ID=[ID]"
        );
      } else {
        return "#";
      }
    },
    spmmbLink() {
      if (this.route && this.ccComputed && this.lcComputed) {
        return (
          this.route.surveyLink +
          this.spComputed +
          "?list=90997" +
          "&ID=[ID]" +
          "&table=" + this.pt +
          this.ccComputed +
          this.lcComputed +
          "&panels=SPM" +
          "&SurveyId=" + this.si
        );
      } else {
        return "#";
      }
    },
    spmtnsLink() {
      if (this.route && this.ccComputed && this.lcComputed) {
        return (
          this.route.surveyLink +
          this.spComputed +
          "?list=90996" +
          "&ID=[ID]" +
          "&table=" + this.pt +
          this.ccComputed +
          this.lcComputed +
          "&panels=SPM" +
          "&SurveyId=" + this.si
        );
      } else {
        return "#";
      }
    },
    surveySummary() {
      if (this.route) {
        return this.route.repLink + this.spComputed + ":dashboard";
      } else {
        return "#";
      }
    },
    report2010() {
      if (this.route) {
        return this.route.reportLink + this.spComputed;
      } else {
        return "#";
      }
    },
    editData() {
      if (this.route) {
        return this.route.repLink + this.spComputed + ":edit";
      } else {
        return "#";
      }
    }
  },
  watch: {
    route(val) {
      if (val != "") {
        this.sn = val.sn;
      }
    }
  },
  components: {
    linkItem,
    snInput
  }
};
</script>