!function(e){var o={};function t(n){if(o[n])return o[n].exports;var c=o[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var c in e)t.d(n,c,function(o){return e[o]}.bind(null,c));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){"use strict";t.r(o);new Vue({el:"#app",data:{sn:"",sp:"",cc:0,lc:0,pt:"47177e38-057b-bf6e-a3e4d5e035eb",si:"sureyid",mainLink:"https://surveys.globaltestmarket.com/survey/apac",lang:[{language:"English",code:"E"},{language:"Chinese Mordern",code:"CHM"},{language:"Chinse Traditional",code:"CHT"},{language:"Japanese",code:"JP"},{language:"Korean",code:"KR"},{language:"Malaysia",code:"BA"},{language:"Indonesian",code:"ND"},{language:"Thai",code:"TH"},{language:"Vietnam",code:"VT"},{language:"Germany",code:"DE"},{language:"French",code:"FR"},{language:"Portuguese",code:"PR"},{language:"Italian",code:"IT"},{language:"Polish",code:"PO"},{language:"Spanish",code:"SP"},{language:"Russian",code:"RU"},{language:"Turkish",code:"TU"},{language:"Hungary",code:"HU"},{language:"Bulgarian",code:"BU"},{language:"Romanian",code:"RO"},{language:"Dutch",code:"NL"},{language:"Danish",code:"DA"},{language:"Czech",code:"CZ"},{language:"Swedish",code:"SW"},{language:"Arabic",code:"AR"},{language:"Hindi",code:"HI"}],countryCode:[{country:"United Arab Emirates",code:"ARE"},{country:"Argentina",code:"ARG"},{country:"Australia",code:"AUS"},{country:"Austria",code:"AUT"},{country:"Belgium",code:"BEL"},{country:"Bangladesh",code:"BGD"},{country:"Bulgaria",code:"BGR"},{country:"Bosnia and Herzegovina",code:"BIH"},{country:"Bolivia",code:"BOL"},{country:"Brazil",code:"BRA"},{country:"Canada",code:"CAN"},{country:"Switzerland",code:"CHE"},{country:"Chile",code:"CHL"},{country:"China",code:"CHN"},{country:"Cameroon",code:"CMR"},{country:"Colombia",code:"COL"},{country:"Costa Rica",code:"CRI"},{country:"Cuba",code:"CUB"},{country:"Cyprus",code:"CYP"},{country:"Czech Republic",code:"CZE"},{country:"Germany",code:"DEU"},{country:"Denmark",code:"DNK"},{country:"Ecuador",code:"ECU"},{country:"Egypt",code:"EGY"},{country:"Spain",code:"ESP"},{country:"Finland",code:"FIN"},{country:"France",code:"FRA"},{country:"United Kingdom",code:"GBR"},{country:"Greece",code:"GRC"},{country:"Hong Kong",code:"HKG"},{country:"Croatia",code:"HRV"},{country:"Hungary",code:"HUN"},{country:"Indonesia",code:"IDN"},{country:"India",code:"IND"},{country:"Ireland",code:"IRL"},{country:"Iran, Islamic Republic of",code:"IRN"},{country:"Iraq",code:"IRQ"},{country:"Iceland",code:"ISL"},{country:"Israel",code:"ISR"},{country:"Italy",code:"ITA"},{country:"Japan",code:"JPN"},{country:"Cambodia",code:"KHM"},{country:"Korea, Republic of",code:"KOR"},{country:"Lao People's Democratic Republic",code:"LAO"},{country:"Sri Lanka",code:"LKA"},{country:"Luxembourg",code:"LUX"},{country:"Macao",code:"MAC"},{country:"Morocco",code:"MAR"},{country:"Monaco",code:"MCO"},{country:"Maldives",code:"MDV"},{country:"Mexico",code:"MEX"},{country:"Myanmar",code:"MMR"},{country:"Mongolia",code:"MNG"},{country:"Malaysia",code:"MYS"},{country:"Nigeria",code:"NGA"},{country:"Netherlands",code:"NLD"},{country:"Norway",code:"NOR"},{country:"Nepal",code:"NPL"},{country:"New Zealand",code:"NZL"},{country:"Pakistan",code:"PAK"},{country:"Peru",code:"PER"},{country:"Philippines",code:"PHL"},{country:"Poland",code:"POL"},{country:"Portugal",code:"PRT"},{country:"Paraguay",code:"PRY"},{country:"Qatar",code:"QAT"},{country:"Romania",code:"ROU"},{country:"Russian Federation",code:"RUS"},{country:"Saudi Arabia",code:"SAU"},{country:"Senegal",code:"SEN"},{country:"Singapore",code:"SGP"},{country:"Serbia",code:"SRB"},{country:"Slovakia",code:"SVK"},{country:"Slovenia",code:"SVN"},{country:"Sweden",code:"SWE"},{country:"Thailand",code:"THA"},{country:"Tunisia",code:"TUN"},{country:"Turkey",code:"TUR"},{country:"Taiwan",code:"TWN"},{country:"Ukraine",code:"UKR"},{country:"Uruguay",code:"URY"},{country:"United States",code:"USA"},{country:"Venezuela",code:"VEN"},{country:"Viet Nam",code:"VNM"},{country:"South Africa",code:"ZAF"}]},computed:{snComputed(){return 6===this.sn.length?"/C"+this.sn:""},spComputed(){return/temp(0\d|1[0-2])([0-2]\d|3[0-1])/.exec(this.sp)?"/"+this.sp:""},ccComputed(){return this.cc?"&countryCode="+this.cc:""},lcComputed(){return this.lc?"&lang="+this.lc:""},testLink(){return this.snComputed?this.mainLink+this.snComputed+this.spComputed+"?panels=LFP&list=0"+this.ccComputed+this.lcComputed:"#"},liveLink(){return this.snComputed&&this.ccComputed&&this.lcComputed?this.mainLink+this.spComputed+this.spComputed+"?panels=LFP&list=80001&ID=[ID]"+this.ccComputed+this.lcComputed:"#"},wechatLink(){return this.snComputed&&this.ccComputed&&this.lcComputed?this.mainLink+this.snComputed+this.spComputed+"?panels=Wechat&list=90888&ID=[ID]&sn="+this.sn+this.ccComputed+this.lcComputed:"#"},spmmbLink(){return this.snComputed&&this.ccComputed&&this.lcComputed?this.mainLink+this.snComputed+this.spComputed+"?panels=SPM&list=90997&ID=[ID]&table="+this.pt+this.ccComputed+this.lcComputed+"&SurveyId="+this.si:"#"},spmtnsLink(){return this.snComputed&&this.ccComputed&&this.lcComputed?this.mainLink+this.snComputed+this.spComputed+"?panels=SPM&list=90996&ID=[ID]&table="+this.pt+this.ccComputed+this.lcComputed+"&SurveyId="+this.si:"#"},surveySummary(){return"https://surveys.globaltestmarket.com/rep/apac"+this.snComputed+this.spComputed+":dashboard"},report2010(){return"https://surveys.globaltestmarket.com/report/apac"+this.snComputed+this.spComputed},editData(){return"https://surveys.globaltestmarket.com/rep/apac"+this.snComputed+this.spComputed+":edit"}},watch:{sn(e){str=e.replace(/[^\d]/g,""),str.length<=6?this.sn=str:this.sn=str.substr(0,6)}},components:{cpmLink:{template:"#cpmLink",props:{cid:String,cname:String,clink:String}}}})}]);