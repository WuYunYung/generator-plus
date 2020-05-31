import Vue from 'vue'
import {languageCode,countryCode} from "./js/data.js";

const cpmLink = {
  template:'#cpmLink',
  props:{
    cid:String,
    cname:String,
    clink:String,
  }
}

const app = new Vue({
  el: "#app",
  data: {
    sn: "", //sn number
    sp: "", //survey path
    cc: 0, //country code,default is 0
    lc: 0, //language code,default is 0
    pt: "47177e38-057b-bf6e-a3e4d5e035eb", // token/table
    si: "sureyid", //survey id
    mainLink: "https://surveys.globaltestmarket.com/survey/apac",
    lang: languageCode, //list of language code
    countryCode: countryCode, //list of country code
  },
  computed: {
    snComputed() {
      if(this.sn.length===6){
        return "/C" + this.sn
      }else{
        return ""
      }
    }, //计算后的sn，后面的连接都是以此来判断的
    spComputed() {
      if (/temp(0\d|1[0-2])([0-2]\d|3[0-1])/.exec(this.sp)) {
        return "/" + this.sp
      } else {
        return ""
      }
    }, //计算后的survey path，如果不符合规则则返回空
    ccComputed() {
      if (this.cc) {
        return ("&countryCode=" + this.cc);
      } else {
        return ""
      }
    },
    lcComputed() {
      if (this.lc) {
        return "&lang=" + this.lc;
      } else {
        return ""
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
      if (
        this.snComputed &&
        this.ccComputed &&
        this.lcComputed
      ) {
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
      if (
        this.snComputed &&
        this.ccComputed &&
        this.lcComputed
      ) {
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
      if (
        this.snComputed &&
        this.ccComputed &&
        this.lcComputed
      ) {
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
      if (
        this.snComputed &&
        this.ccComputed &&
        this.lcComputed
      ) {
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
      return "https://surveys.globaltestmarket.com/report/apac" +
        this.snComputed +
        this.spComputed;
    },
    editData() {
      return 'https://surveys.globaltestmarket.com/rep/apac' +
        this.snComputed +
        this.spComputed +
        ':edit';
    },
  },
  watch: {
    sn(val) {
      let str = val.replace(/[^\d]/g, "");
      if (str.length <= 6) {
        this.sn = str;
      } else {
        this.sn = str.substr(0, 6);
      }
    },
  },
  components:{
    cpmLink
  }
});

require('./css/style.css')
require('./css/bootstrap.min.css')