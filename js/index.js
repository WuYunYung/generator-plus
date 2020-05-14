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
      { language: "English", code: "E" },
      { language: "Chinese Mordern", code: "CHM" },
      { language: "Chinse Traditional", code: "CHT" },
      { language: "Japanese", code: "JP" },
      { language: "Korean", code: "KR" },
      { language: "Malaysia", code: "BA" },
      { language: "Indonesian", code: "ND" },
      { language: "Thai", code: "TH" },
      { language: "Vietnam", code: "VT" },
      { language: "Germany", code: "DE" },
      { language: "French", code: "FR" },
      { language: "Portuguese", code: "PR" },
      { language: "Italian", code: "IT" },
      { language: "Polish", code: "PO" },
      { language: "Spanish", code: "SP" },
      { language: "Russian", code: "RU" },
      { language: "Turkish", code: "TU" },
      { language: "Hungary", code: "HU" },
      { language: "Bulgarian", code: "BU" },
      { language: "Romanian", code: "RO" },
      { language: "Dutch", code: "NL" },
      { language: "Danish", code: "DA" },
      { language: "Czech", code: "CZ" },
      { language: "Swedish", code: "SW" },
      { language: "Arabic", code: "AR" },
      { language: "Hindi", code: "HI" },
    ].sort(),
    countryCode: [
      { country: "United Arab Emirates", code: "ARE" },
      { country: "Argentina", code: "ARG" },
      { country: "Australia", code: "AUS" },
      { country: "Austria", code: "AUT" },
      { country: "Belgium", code: "BEL" },
      { country: "Bangladesh", code: "BGD" },
      { country: "Bulgaria", code: "BGR" },
      { country: "Bosnia and Herzegovina", code: "BIH" },
      { country: "Bolivia", code: "BOL" },
      { country: "Brazil", code: "BRA" },
      { country: "Canada", code: "CAN" },
      { country: "Switzerland", code: "CHE" },
      { country: "Chile", code: "CHL" },
      { country: "China", code: "CHN" },
      { country: "Cameroon", code: "CMR" },
      { country: "Colombia", code: "COL" },
      { country: "Costa Rica", code: "CRI" },
      { country: "Cuba", code: "CUB" },
      { country: "Cyprus", code: "CYP" },
      { country: "Czech Republic", code: "CZE" },
      { country: "Germany", code: "DEU" },
      { country: "Denmark", code: "DNK" },
      { country: "Ecuador", code: "ECU" },
      { country: "Egypt", code: "EGY" },
      { country: "Spain", code: "ESP" },
      { country: "Finland", code: "FIN" },
      { country: "France", code: "FRA" },
      { country: "United Kingdom", code: "GBR" },
      { country: "Greece", code: "GRC" },
      { country: "Hong Kong", code: "HKG" },
      { country: "Croatia", code: "HRV" },
      { country: "Hungary", code: "HUN" },
      { country: "Indonesia", code: "IDN" },
      { country: "India", code: "IND" },
      { country: "Ireland", code: "IRL" },
      { country: "Iran, Islamic Republic of", code: "IRN" },
      { country: "Iraq", code: "IRQ" },
      { country: "Iceland", code: "ISL" },
      { country: "Israel", code: "ISR" },
      { country: "Italy", code: "ITA" },
      { country: "Japan", code: "JPN" },
      { country: "Cambodia", code: "KHM" },
      { country: "Korea, Republic of", code: "KOR" },
      { country: "Lao People's Democratic Republic", code: "LAO" },
      { country: "Sri Lanka", code: "LKA" },
      { country: "Luxembourg", code: "LUX" },
      { country: "Macao", code: "MAC" },
      { country: "Morocco", code: "MAR" },
      { country: "Monaco", code: "MCO" },
      { country: "Maldives", code: "MDV" },
      { country: "Mexico", code: "MEX" },
      { country: "Myanmar", code: "MMR" },
      { country: "Mongolia", code: "MNG" },
      { country: "Malaysia", code: "MYS" },
      { country: "Nigeria", code: "NGA" },
      { country: "Netherlands", code: "NLD" },
      { country: "Norway", code: "NOR" },
      { country: "Nepal", code: "NPL" },
      { country: "New Zealand", code: "NZL" },
      { country: "Pakistan", code: "PAK" },
      { country: "Peru", code: "PER" },
      { country: "Philippines", code: "PHL" },
      { country: "Poland", code: "POL" },
      { country: "Portugal", code: "PRT" },
      { country: "Paraguay", code: "PRY" },
      { country: "Qatar", code: "QAT" },
      { country: "Romania", code: "ROU" },
      { country: "Russian Federation", code: "RUS" },
      { country: "Saudi Arabia", code: "SAU" },
      { country: "Senegal", code: "SEN" },
      { country: "Singapore", code: "SGP" },
      { country: "Serbia", code: "SRB" },
      { country: "Slovakia", code: "SVK" },
      { country: "Slovenia", code: "SVN" },
      { country: "Sweden", code: "SWE" },
      { country: "Thailand", code: "THA" },
      { country: "Tunisia", code: "TUN" },
      { country: "Turkey", code: "TUR" },
      { country: "Taiwan", code: "TWN" },
      { country: "Ukraine", code: "UKR" },
      { country: "Uruguay", code: "URY" },
      { country: "United States", code: "USA" },
      { country: "Venezuela", code: "VEN" },
      { country: "Viet Nam", code: "VNM" },
      { country: "South Africa", code: "ZAF" },
    ],
    countryCodeSelected: 0,
    langSelected: 0,
  },
  computed: {
    ccComputed: function () {
      if (this.countryCodeSelected) {
        return this.countryCode[this.countryCodeSelected - 1].code;
      }
    },
    lcComputed: function () {
      if (this.langSelected) {
        return this.lang[this.langSelected - 1].code;
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
