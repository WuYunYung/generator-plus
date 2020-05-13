var app = new Vue({
  el: "#app",
  data: {
    sn: "",
    sp: "",
    pt: "47177e38-057b-bf6e-a3e4d5e035eb",
    si: "sureyid",
    mainLink: "https://surveys.globaltestmarket.com/survey/apac",
    tempLink: "",
    lang: [
      "E",
      "CHM",
      "CHT",
      "JP",
      "KR",
      "BA",
      "ND",
      "TH",
      "VT",
      "DE",
      "FR",
      "PR",
      "IT",
      "PO",
      "SP",
      "RU",
      "TU",
      "HU",
      "BU",
      "RO",
      "NL",
      "DA",
      "CZ",
      "SW",
      "AR",
      "HI",
    ].sort(),
    countryCode: [
      "ARG",
      "AUS",
      "AUT",
      "BGD",
      "BEL",
      "BOL",
      "BIH",
      "BRA",
      "BGR",
      "KHM",
      "CMR",
      "CAN",
      "CHL",
      "CHN",
      "COL",
      "CRI",
      "HRV",
      "CUB",
      "CYP",
      "CZE",
      "DNK",
      "ECU",
      "EGY",
      "FIN",
      "FRA",
      "DEU",
      "GRC",
      "HKG",
      "HUN",
      "ISL",
      "IND",
      "IDN",
      "IRN",
      "IRQ",
      "IRL",
      "ISR",
      "ITA",
      "JPN",
      "KOR",
      "LAO",
      "LUX",
      "MAC",
      "MYS",
      "MDV",
      "MEX",
      "MCO",
      "MNG",
      "MAR",
      "MMR",
      "NPL",
      "NLD",
      "NZL",
      "NGA",
      "NOR",
      "PAK",
      "PRY",
      "PER",
      "PHL",
      "POL",
      "PRT",
      "QAT",
      "ROU",
      "RUS",
      "SAU",
      "SEN",
      "SRB",
      "SGP",
      "SVK",
      "SVN",
      "ZAF",
      "ESP",
      "LKA",
      "SWE",
      "CHE",
      "TWN",
      "THA",
      "TUN",
      "TUR",
      "UKR",
      "ARE",
      "GBR",
      "USA",
      "URY",
      "VEN",
      "VNM",
    ].sort(),
    countryCodeSelected: 14,
    langSelected: 4,
  },
  computed: {
    ccComputed: function () {
      if (this.countryCodeSelected) {
        return this.countryCode[this.countryCodeSelected - 1];
      }
    },
    lcComputed: function () {
      if (this.langSelected) {
        return this.lang[this.langSelected - 1];
      }
    },
    testLink: function () {
      let sn = "";
      let sp = "";
      let cc = "";
      let lc = "";
      if (this.sn) {
        sn = "/C" + this.sn;
      }
      if (this.sp) {
        sp = "/" + this.sp;
      }
      if (this.countryCodeSelected) {
        cc = "&countryCode=" + this.ccComputed;
      }
      if (this.langSelected) {
        lc = "&lang=" + this.lcComputed;
      }
      if (this.sn.length === 6) {
        return this.mainLink + sn + sp + "?panels=LFP&list=0" + cc + lc;
      } else {
        return "#";
      }
    },
    liveLink: function () {
      let sn = "";
      let sp = "";
      let cc = "";
      let lc = "";
      if (this.sn) {
        sn = "/C" + this.sn;
      }
      if (this.sp) {
        sp = "/" + this.sp;
      }
      if (this.countryCodeSelected) {
        cc = "&countryCode=" + this.ccComputed;
      }
      if (this.langSelected) {
        lc = "&lang=" + this.lcComputed;
      }
      if (
        this.sn.length === 6 &&
        this.countryCodeSelected &&
        this.langSelected
      ) {
        return (
          this.mainLink + sn + sp + "?panels=LFP&list=80001&ID=[ID]" + cc + lc
        );
      } else {
        return "#";
      }
    },
    wechatLink: function () {
      let sn = "";
      let sp = "";
      let cc = "";
      let lc = "";
      if (this.sn) {
        sn = "/C" + this.sn;
      }
      if (this.sp) {
        sp = "/" + this.sp;
      }
      if (this.countryCodeSelected) {
        cc = "&countryCode=" + this.ccComputed;
      }
      if (this.langSelected) {
        lc = "&lang=" + this.lcComputed;
      }
      if (
        this.sn.length === 6 &&
        this.countryCodeSelected &&
        this.langSelected
      ) {
        return (
          this.mainLink +
          sn +
          sp +
          "?panels=Wechat&list=90888&ID=[ID]&sn=" +
          this.sn +
          cc +
          lc
        );
      } else {
        return "#";
      }
    },
    spmmbLink: function () {
      let sn = "";
      let sp = "";
      let cc = "";
      let lc = "";
      if (this.sn) {
        sn = "/C" + this.sn;
      }
      if (this.sp) {
        sp = "/" + this.sp;
      }
      if (this.countryCodeSelected) {
        cc = "&countryCode=" + this.ccComputed;
      }
      if (this.langSelected) {
        lc = "&lang=" + this.lcComputed;
      }
      if (
        this.sn.length === 6 &&
        this.countryCodeSelected &&
        this.langSelected &&
        this.pt &&
        this.si
      ) {
        return (
          this.mainLink +
          sn +
          sp +
          "?panels=SPM&list=90997&ID=[ID]&table=" +
          this.pt +
          cc +
          lc +
          "&SurveyId=" +
          this.si
        );
      } else {
        return "#";
      }
    },
    spmtnsLink: function () {
      let sn = "";
      let sp = "";
      let cc = "";
      let lc = "";
      if (this.sn) {
        sn = "/C" + this.sn;
      }
      if (this.sp) {
        sp = "/" + this.sp;
      }
      if (this.countryCodeSelected) {
        cc = "&countryCode=" + this.ccComputed;
      }
      if (this.langSelected) {
        lc = "&lang=" + this.lcComputed;
      }
      if (
        this.sn.length === 6 &&
        this.countryCodeSelected &&
        this.langSelected &&
        this.pt &&
        this.si
      ) {
        return (
          this.mainLink +
          sn +
          sp +
          "?panels=SPM&list=90996&ID=[ID]&table=" +
          this.pt +
          cc +
          lc +
          "&SurveyId=" +
          this.si
        );
      } else {
        return "#";
      }
    },
  },
  watch: {
    sn: function (val) {
      str = val.replace(/[^\d]/g, "");
      if (str.length <= 6) {
        this.sn = str;
      } else {
        this.sn = str.substr(0, 6);
      }
    },
  },
});
