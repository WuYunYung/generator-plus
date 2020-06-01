<template>
  <div>
    <app-navbar/>
    <div class="container">
      <div class="row">
        <div class="col col-xl-4 col-lg-4 col-md-5" style="margin-top: 2em;height: fit-content;">
          <div class="card shadow">
            <div class="card-body">
              <h5 class="card-title">Survey Info:</h5>
              <hr />
              <div class="form-group">
                <label>SN:</label>
                <div class="input-group input-group-sm">
                  <input
                    type="text"
                    class="form-control"
                    v-model="sn"
                    :class="{'is-valid':snComputed}"
                    placeholder="Please type in your SN number:"
                  />
                </div>
              </div>

              <div class="form-group" v-if="snComputed">
                <label>Survey Path:</label>
                <div class="input-group input-group-sm">
                  <div class="input-group-prepend">
                    <span class="input-group-text">apac</span>
                    <span class="input-group-text" v-if="snComputed">C{{sn}}</span>
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

              <div class="form-group" v-if="snComputed">
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
                class="btn btn-light badge badge-light"
                type="button"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="spm_info spm_link"
                v-if="snComputed"
              >Super PM</button>

              <div id="spm_info" class="collapse multi-collapse">
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
              <div v-if="sn.length<6">
                <hr />
                <h5 class="card-title">Guide:</h5>
                <p class="card-text">
                  <small class="text-muted">
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
          class="col col-12 float-right"
          style="margin-top: 2em;"
          v-if="snComputed"
          :class="{'col-xl-8 col-lg-8 col-md-7':snComputed}"
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
                  <app-link cid="testLink" cname="Test Link" :clink="testLink"></app-link>
                  <app-link cid="liveLink" cname="Live Link" :clink="liveLink"></app-link>
                  <app-link cid="wechatLink" cname="WeChat Link" :clink="wechatLink"></app-link>
                  <div id="spm_link" class="collapse multi-collapse">
                    <app-link cid="spmmbLink" cname="SuperPM MB link" :clink="spmmbLink"></app-link>
                    <app-link cid="spmtnsLink" cname="SuperPM TNS link" :clink="spmtnsLink"></app-link>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <app-link cid="surveySummary" cname="Survey summary" :clink="surveySummary"></app-link>
                  <app-link cid="report2010" cname="Report 2010" :clink="report2010"></app-link>
                  <app-link cid="editData" cname="Edit data" :clink="editData"></app-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { languageCode, countryCode } from "../js/data.js";
import appNavbar from "./appNavbar.vue";
import appLink from "./appLink.vue";
export default {
  data() {
    return {
      sn: "", //sn number
      sp: "", //survey path
      cc: 0, //country code,default is 0
      lc: 0, //language code,default is 0
      pt: "47177e38-057b-bf6e-a3e4d5e035eb", // token/table
      si: "sureyid", //survey id
      mainLink: "https://surveys.globaltestmarket.com/survey/apac",
      lang: languageCode, //list of language code
      countryCode: countryCode //list of country code
    };
  },
  computed: {
    snComputed() {
      if (this.sn.length === 6) {
        return "/C" + this.sn;
      } else {
        return "";
      }
    }, //计算后的sn，后面的连接都是以此来判断的
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
      if (this.snComputed) {
        return (
          this.mainLink +
          this.snComputed +
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
      if (this.snComputed && this.ccComputed && this.lcComputed) {
        return (
          this.mainLink +
          this.spComputed +
          this.spComputed +
          "?panels=LFP&list=80001&ID=[ID]" +
          this.ccComputed +
          this.lcComputed
        );
      } else {
        return "#";
      }
    }, //live link
    wechatLink() {
      if (this.snComputed && this.ccComputed && this.lcComputed) {
        return (
          this.mainLink +
          this.snComputed +
          this.spComputed +
          "?panels=Wechat&list=90888&ID=[ID]&sn=" +
          this.sn +
          this.ccComputed +
          this.lcComputed
        );
      } else {
        return "#";
      }
    },
    spmmbLink() {
      if (this.snComputed && this.ccComputed && this.lcComputed) {
        return (
          this.mainLink +
          this.snComputed +
          this.spComputed +
          "?panels=SPM&list=90997&ID=[ID]&table=" +
          this.pt +
          this.ccComputed +
          this.lcComputed +
          "&SurveyId=" +
          this.si
        );
      } else {
        return "#";
      }
    },
    spmtnsLink() {
      if (this.snComputed && this.ccComputed && this.lcComputed) {
        return (
          this.mainLink +
          this.snComputed +
          this.spComputed +
          "?panels=SPM&list=90996&ID=[ID]&table=" +
          this.pt +
          this.ccComputed +
          this.lcComputed +
          "&SurveyId=" +
          this.si
        );
      } else {
        return "#";
      }
    },
    surveySummary() {
      return (
        "https://surveys.globaltestmarket.com/rep/apac" +
        this.snComputed +
        this.spComputed +
        ":dashboard"
      );
    },
    report2010() {
      return (
        "https://surveys.globaltestmarket.com/report/apac" +
        this.snComputed +
        this.spComputed
      );
    },
    editData() {
      return (
        "https://surveys.globaltestmarket.com/rep/apac" +
        this.snComputed +
        this.spComputed +
        ":edit"
      );
    }
  },
  watch: {
    sn(val) {
      let str = val.replace(/[^\d]/g, "");
      if (str.length <= 6) {
        this.sn = str;
      } else {
        this.sn = str.substr(0, 6);
      }
    }
  },
  components: {
    appLink,
    appNavbar
  }
};
</script>