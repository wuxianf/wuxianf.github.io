(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activity-score-score"],{"0d3bc":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShowPop?n("v-uni-view",{staticClass:"pop flex_center"},[n("v-uni-view",{staticClass:"pop-content"},[n("v-uni-view",{staticClass:"pop-content-header"},[n("v-uni-view",{staticClass:"pop-content-header-title"},[t._v(t._s(t.giftName))])],1),t.giftQrcode?n("v-uni-view",{staticClass:"pop-content-main"},[n("v-uni-image",{staticClass:"award_cover",staticStyle:{width:"300upx",height:"300upx",margin:"0 auto"},attrs:{src:t.giftQrcode,mode:""}}),n("v-uni-view",{staticStyle:{color:"#333","text-align":"center","line-height":"60rpx","font-size":"24upx"}},[t._v(t._s(t.remarkText))])],1):t._e(),n("v-uni-view",{staticClass:"pop-content_close flex_center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handClose.apply(void 0,arguments)}}},[t._v("关闭")])],1)],1):t._e()},o=[]},1398:function(t,e,n){var a=n("7ddd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("6270b8b5",a,!0,{sourceMap:!1,shadowMode:!1})},3112:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"sign page_padding"},[n("Navbar",{attrs:{title:"积分玩一玩",backUrl:"/static/img/backW.png",topBg:"url(https://xl-cdn.xinglico.com/mika/pro/2023-12-01/f7881e5256604ca2ba5db30621216561.jpg)"}}),n("v-uni-view",{staticClass:"sign_content"},[n("v-uni-view",{staticClass:"sign_title flex"},[n("v-uni-view",{staticClass:"sign_title_text"},[t._v("每日签到")]),n("v-uni-view",{staticClass:"sign_title_btn flex_center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getQrCode("/activity/sign/index")}}},[t._v("去小程序签到")])],1),n("v-uni-view",{staticClass:"sign_num"},[t._v("本月已连续签到 "+t._s(t.forSignDays)+" 天")])],1),t.weekList.length>0?n("v-uni-view",{staticClass:"sign_week flex_between"},t._l(t.weekList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"sign_week_item flex_center"},[n("v-uni-view",{staticClass:"sign_week_th"},[t._v(t._s(t.weekC[e.week]))]),n("v-uni-view",{staticClass:"sign_week_td flex_center"},[n("v-uni-view",{staticClass:"sign_week_td_box flex_center",class:{checked:e.checked}},[1===e.rewardType||5===e.rewardType?n("v-uni-view",{staticClass:"gift"},[t._v("+"+t._s(e.price)+"积分")]):2===e.rewardType?n("v-uni-view",{staticClass:"gift"},[t._v("+"+t._s(e.price)+"优惠券")]):3===e.rewardType?n("v-uni-view",{staticClass:"gift"},[t._v("+"+t._s(e.price)+"元购物卡")]):t._e(),e.isRepair?n("v-uni-image",{staticClass:"cover",attrs:{src:"/static/img/activity/repair.png",mode:""}}):t._e(),3===e.rewardType?n("v-uni-image",{staticClass:"cover",attrs:{src:"/static/img/activity/card.png",mode:""}}):2===e.rewardType?n("v-uni-image",{staticClass:"cover",attrs:{src:"/static/img/activity/coupon.png",mode:""}}):1===e.rewardType||5===e.rewardType?n("v-uni-image",{staticClass:"cover",attrs:{src:"/static/img/activity/score.png",mode:""}}):e.isRepair?t._e():n("v-uni-image",{staticClass:"cover",attrs:{src:"/static/img/activity/over.png",mode:""}}),e.signDays>=1?n("v-uni-image",{staticClass:"status",attrs:{src:"/static/img/activity/success.png",mode:""}}):t._e()],1)],1),n("v-uni-view",{staticClass:"time"},[t._v(t._s(e.day==t.nowDay.day?"今天":e.day))])],1)})),1):t._e(),n("v-uni-view",{staticClass:"sign_page"},t._l(t.columnList,(function(t,e){return n("indexColumn",{key:e,attrs:{data:t}})})),1),n("PopTip",{ref:"popTip",attrs:{loginQrText:"登录后查看"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeLogin.apply(void 0,arguments)},logined:function(e){arguments[0]=e=t.$handleEvent(e),t.init.apply(void 0,arguments)}}}),n("PopQrcode",{ref:"popQrcode",attrs:{remarkText:"请使用微信扫描上方二维码签到领取礼品"}})],1)},o=[]},"386c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"PopQrcode",data:function(){return{giftQrcode:null,isShowPop:!1,giftName:null}},props:{remarkText:{type:String,default:function(){return"请使用微信扫描上方二维码查看商品详情"}}},methods:{setPopInfo:function(t){this.giftQrcode=t.giftQrcode,this.giftName=t.giftName,this.isShowPop=!0},handClose:function(){this.isShowPop=!1}}};e.default=a},"47b9":function(t,e,n){"use strict";var a=n("1398"),i=n.n(a);i.a},"56d8":function(t,e,n){"use strict";n.r(e);var a=n("0d3bc"),i=n("d9bf");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("dfe9");var r,c=n("f0c5"),d=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"5f57a352",null,!1,a["a"],r);e["default"]=d.exports},6188:function(t,e,n){"use strict";var a=n("d5d5"),i=n.n(a);i.a},"7ddd":function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-57c3c218]::-webkit-scrollbar{display:none}.text_overFlow2[data-v-57c3c218]{text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.text_ellipsis[data-v-57c3c218]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.couponGoods_item[data-v-57c3c218]{margin-bottom:%?30?%;padding:%?10?%;height:%?240?%;border-radius:%?20?%;background-color:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.3);position:relative}.couponGoods_item_cover[data-v-57c3c218]{width:%?240?%;height:%?240?%;border-radius:%?10?%;overflow:hidden}.couponGoods_item_info[data-v-57c3c218]{padding:%?10?% 0;margin-left:%?20?%;width:%?410?%}.couponGoods_item_btn[data-v-57c3c218]{position:absolute;right:%?20?%;top:%?94?%;width:%?130?%;height:%?50?%;border-radius:%?29?%;background-color:#d6913e;color:#fff;font-size:%?24?%}.couponGoods_item_name[data-v-57c3c218]{color:#333;font-size:%?30?%}.couponGoods_item_price[data-v-57c3c218]{color:#f06000;font-size:%?26?%;margin-top:%?6?%}.couponGoods_item_vipPrice[data-v-57c3c218]{align-items:center;color:#1b5847;font-size:%?20?%;margin-top:%?43?%;line-height:%?30?%}.couponGoods_item_vipPrice_label[data-v-57c3c218]{width:%?70?%;height:%?30?%;line-height:%?30?%;text-align:center;color:#fff;font-size:%?18?%;border-radius:%?4?% 0 0 %?4?%;background-image:linear-gradient(90deg,#154c40,#429c6f);margin-right:%?10?%}.couponGoods_item_dikou[data-v-57c3c218]{margin-top:%?24?%;align-items:center;height:%?32?%;background:#f1f1f1;max-width:%?280?%}.couponGoods_item_dikou_label[data-v-57c3c218]{width:%?87?%;height:%?32?%;border-radius:%?4?% 0 0 %?4?%;background-image:linear-gradient(90deg,#d2b373,#ac8532);line-height:%?32?%;text-align:center;color:#fff;font-size:%?20?%;margin-right:%?10?%}.couponGoods_item_dikou_value[data-v-57c3c218]{color:#333;font-size:%?20?%}.couponGoods_two[data-v-57c3c218]{flex-wrap:wrap;padding:0 %?30?%}.couponGoods_two_item[data-v-57c3c218]{width:%?335?%;padding-bottom:%?20?%;border-radius:%?20?%;background-color:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.19);margin-bottom:%?30?%}.couponGoods_two_unborder[data-v-57c3c218]{background:none;box-shadow:none}.couponGoods_two_cover[data-v-57c3c218]{width:%?335?%;height:%?335?%;border-radius:%?20?% %?20?% 0 0;overflow:hidden}.couponGoods_two_info[data-v-57c3c218]{padding:0 %?10?%}.couponGoods_two_name[data-v-57c3c218]{color:#333;font-size:%?32?%}.couponGoods_two_price[data-v-57c3c218]{color:#f06000;font-size:%?28?%;margin-top:%?10?%}.fixed_buttom[data-v-57c3c218]{position:fixed;bottom:0;left:0;width:100%;z-index:10;border-top:%?2?% solid var(--border)}.fixed_buttom .btn_box[data-v-57c3c218]{background-image:linear-gradient(90deg,#fd8b4d,#ff315b);width:%?620?%;height:%?84?%;border-radius:%?42?%;line-height:%?84?%;font-size:%?36?%;color:#fff;text-align:center}.page_btn[data-v-57c3c218]{background-image:linear-gradient(90deg,#ffcd7c,#8b6117);color:#fff!important}.fixed_center[data-v-57c3c218]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;z-index:10}.fixed_center .fixed_box[data-v-57c3c218]{padding:%?20?%;width:%?500?%;background:#fff;border-radius:%?10?%;position:relative}.fixed_center .fixed_box .title[data-v-57c3c218]{text-align:center;color:#333;font-size:%?36?%}.fixed_center .fixed_box .fixed_btn[data-v-57c3c218]{display:flex;justify-content:space-around}.fixed_center .fixed_box .fixed_btn .btn[data-v-57c3c218]{padding:0 %?60?%;height:%?70?%;border-radius:%?35?%;border:%?2?% solid #ccc;line-height:%?70?%;font-size:%?28?%}.fixed_center .fixed_box .fixed_btn .fixed_btn2[data-v-57c3c218]{border:none;background-image:linear-gradient(90deg,#fd8b4d,#ff315b);color:#fff}.fixed_center .fixed_box .close_btn[data-v-57c3c218]{position:absolute;top:%?-70?%;right:%?-20?%;height:%?50?%;width:%?50?%;border:%?2?% solid #fff;color:#fff;border-radius:50%;text-align:center;line-height:%?50?%}.flex_column[data-v-57c3c218]{display:flex;flex-direction:column}.flex_around[data-v-57c3c218]{display:flex;justify-content:space-around}.flex_between[data-v-57c3c218]{display:flex;justify-content:space-between}.flex_center[data-v-57c3c218]{display:flex;justify-content:center;align-items:center}.flex[data-v-57c3c218]{display:flex}uni-image[data-v-57c3c218]{display:block;width:100%;height:100%}.buy_price1[data-v-57c3c218]{color:#f69632;font-size:%?32?%;height:%?40?%}.buy_price[data-v-57c3c218]{height:%?40?%;border-radius:%?4?%;background:#f8f8f8;font-size:%?24?%;line-height:%?40?%}.buy_price .buy[data-v-57c3c218]{height:%?40?%}.buy_price .buy_text[data-v-57c3c218]{padding:0 0 %?0?% %?10?%;color:#fff;background:#349462}.buy_price .buy_jiao[data-v-57c3c218]{width:0;height:0;border-right:%?20?% solid transparent;border-top:%?40?% solid #349462}.buy_price .buy_price_score[data-v-57c3c218]{margin-left:%?4?%;flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#333}.sign[data-v-57c3c218]{min-height:100vh;background-image:url(https://xl-cdn.xinglico.com/mika/pro/2023-12-01/f7881e5256604ca2ba5db30621216561.jpg);background-size:100% auto;background-repeat:no-repeat}.sign_page[data-v-57c3c218]{background:#fff}.sign_content[data-v-57c3c218]{padding:%?50?% %?40?% 0 %?49?%}.sign_title[data-v-57c3c218]{align-items:center}.sign_title_text[data-v-57c3c218]{\r\n  /* Label */color:#111;font-weight:700;font-size:%?40?%}.sign_title_btn[data-v-57c3c218]{height:%?62?%;padding:0 %?20?%;border-radius:%?31?%;background-color:#111;color:#fff;font-weight:700;font-size:%?32?%;margin-left:%?35?%}.sign_num[data-v-57c3c218]{color:#111;font-size:%?32?%;margin-top:%?10?%}.sign_week[data-v-57c3c218]{margin:%?28?% %?20?% 0 %?20?%;padding:%?20?%;background:linear-gradient(180deg,#fff9e8,hsla(0,0%,100%,.91));border-radius:%?20?%}.sign_week_item[data-v-57c3c218]{flex:1;flex-direction:column}.sign_week_td[data-v-57c3c218]{width:100%;height:%?130?%;background:#fff;margin-top:%?20?%}.sign_week_td_box[data-v-57c3c218]{width:%?80?%;height:%?110?%;border-radius:%?6?%;background-color:#f3f3f3;flex-direction:column}.sign_week_td .gift[data-v-57c3c218]{color:#987235;font-size:%?15?%;text-align:center;margin:%?10?% 0 %?4?% 0;height:%?20?%;line-height:%?20?%}.sign_week_td .cover[data-v-57c3c218]{width:%?40?%;height:%?40?%;margin:0 auto}.sign_week_td .status[data-v-57c3c218]{width:%?30?%;height:%?30?%;margin:0 auto}.sign_week_td .time[data-v-57c3c218]{color:#6f6f6f;font-size:%?22?%;text-align:center}',""]),t.exports=e},"844d":function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* page {\n\theight: 100%;\n} */",""]),t.exports=e},ad71:function(t,e,n){"use strict";(function(t){n("7a82");var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getGiftPage=f,e.getReceiveCardPage=s,e.getRepairDea=l,e.getSignReceive=d,e.getSignUserPage=o,e.getUserCardPage=c,e.goUserSign=r;var i=a(n("b775"));function o(e){return t.log(e),(0,i.default)({url:"/app/sign/user/page",method:"post",loading:"加载中...",login:!0,data:e})}function r(t){return(0,i.default)({url:"/app/sign",method:"post",loading:"加载中...",login:!0,data:t})}function c(t){return(0,i.default)({url:"/app/sign/user/card/page",method:"post",loading:"加载中...",login:!0,data:t})}function d(t){return(0,i.default)({url:"/app/sign/receive/"+t,method:"get",loading:"加载中...",login:!0})}function s(t){return(0,i.default)({url:"/app/sign/user/receive/card/page",method:"post",loading:"加载中...",login:!0})}function f(t){return(0,i.default)({url:"/app/sign/reward/record/page",method:"post",loading:"加载中...",login:!0,data:t})}function l(t){return(0,i.default)({url:"/app/sign/repair/card/detail/"+t,method:"get",loading:"加载中...",login:!0})}}).call(this,n("5a52")["default"])},cadb:function(t,e,n){"use strict";function a(t){function e(t){return t<=0&&(t=0),t<10?"0"+t:t}var n="00",a="00",i="00",o=0,r="",c="",d="";if(86400<=t&&(o=parseInt(t/86400),t%=86400,r+=o+"天",c+=o+"天",d+=o+"天"),t<86400){var s=parseInt(t/3600);t%=3600,r+=(i=e(s))+"小时",c+=i+":",d=0<o||0<s?d+i+":":""}return t<3600&&(a=e(parseInt(t/60)),t%=60,r+=a+"分",c+=a+":",d+=a+":"),t<60&&(r+=(n=e(t))+"秒",c+=n,d+=n),{d:o,h:i,m:a,s:e(parseInt(n)),content:r,content_1:c,content_ms:d}}function i(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return"".concat(n,"-").concat(a<10?"0"+a:a,"-").concat(i<10?"0"+i:i)}function o(t){var e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),i=t.getDay();return{year:e,month:n<10?"0"+n:n,day:a<10?"0"+a:a,week:i}}function r(t,e){var n=1e3*t,a=new Date(n),i=a.getFullYear(),o=("0"+(a.getMonth()+1)).slice(-2),r=("0"+a.getDate()).slice(-2),c=("0"+a.getHours()).slice(-2),d=("0"+a.getMinutes()).slice(-2),s=("0"+a.getSeconds()).slice(-2);return"hourOrMinute"===e?"".concat(c,":").concat(d):"".concat(i,"年").concat(o,"月").concat(r,"日").concat(c,":").concat(d,":").concat(s)}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.formatDateTime=r,e.setTimeDay=i,e.setTimeList=a,e.setTimeYmd=o,n("e25e"),n("99af"),n("fb6a")},d39c:function(t,e,n){"use strict";n.r(e);var a=n("3112"),i=n("d779");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("6188"),n("47b9");var r,c=n("f0c5"),d=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"57c3c218",null,!1,a["a"],r);e["default"]=d.exports},d5c2:function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-5f57a352]::-webkit-scrollbar{display:none}.text_overFlow2[data-v-5f57a352]{text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.text_ellipsis[data-v-5f57a352]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.couponGoods_item[data-v-5f57a352]{margin-bottom:%?30?%;padding:%?10?%;height:%?240?%;border-radius:%?20?%;background-color:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.3);position:relative}.couponGoods_item_cover[data-v-5f57a352]{width:%?240?%;height:%?240?%;border-radius:%?10?%;overflow:hidden}.couponGoods_item_info[data-v-5f57a352]{padding:%?10?% 0;margin-left:%?20?%;width:%?410?%}.couponGoods_item_btn[data-v-5f57a352]{position:absolute;right:%?20?%;top:%?94?%;width:%?130?%;height:%?50?%;border-radius:%?29?%;background-color:#d6913e;color:#fff;font-size:%?24?%}.couponGoods_item_name[data-v-5f57a352]{color:#333;font-size:%?30?%}.couponGoods_item_price[data-v-5f57a352]{color:#f06000;font-size:%?26?%;margin-top:%?6?%}.couponGoods_item_vipPrice[data-v-5f57a352]{align-items:center;color:#1b5847;font-size:%?20?%;margin-top:%?43?%;line-height:%?30?%}.couponGoods_item_vipPrice_label[data-v-5f57a352]{width:%?70?%;height:%?30?%;line-height:%?30?%;text-align:center;color:#fff;font-size:%?18?%;border-radius:%?4?% 0 0 %?4?%;background-image:linear-gradient(90deg,#154c40,#429c6f);margin-right:%?10?%}.couponGoods_item_dikou[data-v-5f57a352]{margin-top:%?24?%;align-items:center;height:%?32?%;background:#f1f1f1;max-width:%?280?%}.couponGoods_item_dikou_label[data-v-5f57a352]{width:%?87?%;height:%?32?%;border-radius:%?4?% 0 0 %?4?%;background-image:linear-gradient(90deg,#d2b373,#ac8532);line-height:%?32?%;text-align:center;color:#fff;font-size:%?20?%;margin-right:%?10?%}.couponGoods_item_dikou_value[data-v-5f57a352]{color:#333;font-size:%?20?%}.couponGoods_two[data-v-5f57a352]{flex-wrap:wrap;padding:0 %?30?%}.couponGoods_two_item[data-v-5f57a352]{width:%?335?%;padding-bottom:%?20?%;border-radius:%?20?%;background-color:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.19);margin-bottom:%?30?%}.couponGoods_two_unborder[data-v-5f57a352]{background:none;box-shadow:none}.couponGoods_two_cover[data-v-5f57a352]{width:%?335?%;height:%?335?%;border-radius:%?20?% %?20?% 0 0;overflow:hidden}.couponGoods_two_info[data-v-5f57a352]{padding:0 %?10?%}.couponGoods_two_name[data-v-5f57a352]{color:#333;font-size:%?32?%}.couponGoods_two_price[data-v-5f57a352]{color:#f06000;font-size:%?28?%;margin-top:%?10?%}.fixed_buttom[data-v-5f57a352]{position:fixed;bottom:0;left:0;width:100%;z-index:10;border-top:%?2?% solid var(--border)}.fixed_buttom .btn_box[data-v-5f57a352]{background-image:linear-gradient(90deg,#fd8b4d,#ff315b);width:%?620?%;height:%?84?%;border-radius:%?42?%;line-height:%?84?%;font-size:%?36?%;color:#fff;text-align:center}.page_btn[data-v-5f57a352]{background-image:linear-gradient(90deg,#ffcd7c,#8b6117);color:#fff!important}.fixed_center[data-v-5f57a352]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;z-index:10}.fixed_center .fixed_box[data-v-5f57a352]{padding:%?20?%;width:%?500?%;background:#fff;border-radius:%?10?%;position:relative}.fixed_center .fixed_box .title[data-v-5f57a352]{text-align:center;color:#333;font-size:%?36?%}.fixed_center .fixed_box .fixed_btn[data-v-5f57a352]{display:flex;justify-content:space-around}.fixed_center .fixed_box .fixed_btn .btn[data-v-5f57a352]{padding:0 %?60?%;height:%?70?%;border-radius:%?35?%;border:%?2?% solid #ccc;line-height:%?70?%;font-size:%?28?%}.fixed_center .fixed_box .fixed_btn .fixed_btn2[data-v-5f57a352]{border:none;background-image:linear-gradient(90deg,#fd8b4d,#ff315b);color:#fff}.fixed_center .fixed_box .close_btn[data-v-5f57a352]{position:absolute;top:%?-70?%;right:%?-20?%;height:%?50?%;width:%?50?%;border:%?2?% solid #fff;color:#fff;border-radius:50%;text-align:center;line-height:%?50?%}.flex_column[data-v-5f57a352]{display:flex;flex-direction:column}.flex_around[data-v-5f57a352]{display:flex;justify-content:space-around}.flex_between[data-v-5f57a352]{display:flex;justify-content:space-between}.flex_center[data-v-5f57a352]{display:flex;justify-content:center;align-items:center}.flex[data-v-5f57a352]{display:flex}uni-image[data-v-5f57a352]{display:block;width:100%;height:100%}.buy_price1[data-v-5f57a352]{color:#f69632;font-size:%?32?%;height:%?40?%}.buy_price[data-v-5f57a352]{height:%?40?%;border-radius:%?4?%;background:#f8f8f8;font-size:%?24?%;line-height:%?40?%}.buy_price .buy[data-v-5f57a352]{height:%?40?%}.buy_price .buy_text[data-v-5f57a352]{padding:0 0 %?0?% %?10?%;color:#fff;background:#349462}.buy_price .buy_jiao[data-v-5f57a352]{width:0;height:0;border-right:%?20?% solid transparent;border-top:%?40?% solid #349462}.buy_price .buy_price_score[data-v-5f57a352]{margin-left:%?4?%;flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#333}.pop[data-v-5f57a352]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,.5);z-index:100}.pop-content[data-v-5f57a352]{background-color:#fff;border-radius:%?30?%;width:80%;padding:%?30?% %?50?%;box-sizing:border-box;position:relative}.pop-content-header[data-v-5f57a352]{position:relative;text-align:center}.pop-content-header-close[data-v-5f57a352]{text-align:right}.pop-content-header-close-image[data-v-5f57a352]{width:%?30?%;display:inline-block}.pop-content-header-title[data-v-5f57a352]{margin-top:%?20?%;color:#000;font-weight:600;font-size:%?36?%;text-align:center}.pop-content-main[data-v-5f57a352]{padding:%?30?% 0;font-weight:500;font-size:%?29?%;color:#444;min-height:%?80?%}.pop-content-footer[data-v-5f57a352]{display:flex}.pop-content-footer [class*="button"][data-v-5f57a352]{flex:1}.pop-content-footer [class*="button"][data-v-5f57a352]:nth-child(2){margin-left:%?30?%}.pop-content_close[data-v-5f57a352]{position:absolute;width:%?300?%;height:%?80?%;bottom:%?-100?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:%?40?%;background:#fff;font-size:%?36?%;color:#000}',""]),t.exports=e},d5d5:function(t,e,n){var a=n("844d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("45065073",a,!0,{sourceMap:!1,shadowMode:!1})},d779:function(t,e,n){"use strict";n.r(e);var a=n("ef88"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},d9bf:function(t,e,n){"use strict";n.r(e);var a=n("386c"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},dfe9:function(t,e,n){"use strict";var a=n("e9ad"),i=n.n(a);i.a},e9ad:function(t,e,n){var a=n("d5c2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("26c17ffa",a,!0,{sourceMap:!1,shadowMode:!1})},ef88:function(t,e,n){"use strict";(function(t){n("7a82");var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2909")),o=a(n("5530"));n("99af"),n("d81d"),n("d3b7"),n("159b"),n("7db0"),n("4de4"),n("c740"),n("3ca3"),n("ddb0");var r=n("ad71"),c=n("cadb"),d=n("89cb"),s=a(n("d029")),f=a(n("56d8")),l={data:function(){return{weekList:[],startTime:null,endTime:null,forSignDays:0,isTowMonth:!1,columnList:[],weekC:["日","一","二","三","四","五","六"],gift:{},giftList:[],nowDay:{},nextMonth:{}}},components:{indexColumn:s.default,PopQrcode:f.default},onShareAppMessage:function(t){return{}},onPullDownRefresh:function(){this.getWeek("Refresh")},onLoad:function(){this.getWeek()},methods:{closeLogin:function(){uni.navigateBack()},getQrCode:function(){var t=this;(0,d.getQrCode)({path:"activity/score/score",scene:"11"}).then((function(e){t.$refs.popQrcode.setPopInfo({giftName:"小程序签到",giftQrcode:e.data})})).catch((function(t){1004!==t.ret&&1003!==t.ret||_self.$refs.popTip.initLogin()}))},getWeek:function(t){var e=this,n=new Date,a=new Date(n);a.setDate(n.getDate()-n.getDay());var i=new Date(a);i.setDate(a.getDate()+6);var r=(0,c.setTimeYmd)(a),d=(0,c.setTimeYmd)(i);this.startTime="".concat(r.year,"-").concat(r.month,"-").concat(r.day),this.endTime="".concat(d.year,"-").concat(d.month,"-").concat(d.day),this.isTowMonth=r.month!=d.month,this.nextMonth=d;for(var s=[],f=0;f<7;f++){var l=new Date(a);l.setDate(a.getDate()+f),s.push((0,c.setTimeYmd)(l))}this.weekList=s.map((function(t){return(0,o.default)((0,o.default)({},t),{},{giftTime:"".concat(t.year,"-").concat(t.month,"-").concat(t.day)})})),this.nowDay=(0,c.setTimeYmd)(n),this.selectMonth=this.nowDay.month,this.selectYear=this.nowDay.year,this.requestYear=this.nowDay.year,this.requestMonth=this.nowDay.month,this.init(this.isTowMonth?this.nextMonth:null,t),this.apiPost("/app/page/pageCanvas/socreActivity1018").then((function(t){e.columnList=t.data.pageModule}))},setWeekList:function(t){var e=this,n=[];this.repairDate=[],t.repairDate.forEach((function(t){var n=(0,c.setTimeYmd)(new Date(e.getNewDate(t)));e.repairDate.push({year:n.year,month:n.month,day:n.day})})),t.recordVoList.forEach((function(t){if(t.rewardVoList.length>0){var a=(0,c.setTimeYmd)(new Date(e.getNewDate(t.signTime))),i=t.rewardVoList.find((function(t){return 3===t.rewardType})),o={};o=t.rewardVoList.length>1?t.rewardVoList.find((function(t){return 5!=t.rewardType})):t.rewardVoList[0];var r=i||o;n.push({giftTime:"".concat(a.year,"-").concat(a.month,"-").concat(a.day),year:a.year,month:a.month,day:a.day,rewardType:r.rewardType,price:r.price,signDays:r.signDays})}})),t.recordRewardDayDtoList.forEach((function(t){var a=(0,c.setTimeYmd)(new Date(e.getNewDate(t.rewardDay)));n.push({giftTime:"".concat(a.year,"-").concat(a.month,"-").concat(a.day),year:a.year,month:a.month,day:a.day,rewardType:t.rewardType,price:t.price,signDays:t.signDays})})),this.giftList=n.filter((function(t,e,n){return n.findIndex((function(e){return e.giftTime===t.giftTime&&e.rewardType===t.rewardType}))===e})),this.weekList.forEach((function(t){var n=e.giftList.find((function(e){return t.giftTime==e.giftTime}));n&&(t.rewardType=n.rewardType,t.price=n.price,t.signDays=n.signDays)}))},init:function(e,n){var a=this,o=new Promise((function(t,e){(0,r.getSignUserPage)({startTime:"".concat(a.nowDay.year,"-").concat(a.nowDay.month,"-01"),endTime:"".concat(a.nowDay.year,"-").concat(a.nowDay.month,"-31")}).then((function(e){a.forSignDays=e.data.forSignDays,a.repairNum=e.data.repairCardCount,t(e.data)})).catch((function(t){1004!==t.ret&&1003!==t.ret||a.$refs.popTip.initLogin(),e()}))})),c=null;e&&(c=new Promise((function(t,n){(0,r.getSignUserPage)({startTime:"".concat(e.year,"-").concat(e.month,"-01"),endTime:"".concat(e.year,"-").concat(e.month,"-31")}).then((function(e){t(e.data)})).catch((function(t){n()}))}))),e?Promise.all([o,c]).then((function(t){var e=[],o=[],r=[];"Refresh"===n&&uni.stopPullDownRefresh(),t.forEach((function(t){t&&(e=[].concat((0,i.default)(e),(0,i.default)(t.repairDate)),o=[].concat((0,i.default)(o),(0,i.default)(t.recordVoList)),r=[].concat((0,i.default)(r),(0,i.default)(t.recordRewardDayDtoList)))})),a.setWeekList({repairDate:e,recordVoList:o,recordRewardDayDtoList:r})})).catch((function(t){})):Promise.all([o]).then((function(t){"Refresh"===n&&uni.stopPullDownRefresh()})).catch((function(e){t.log(e)}))}}};e.default=l}).call(this,n("5a52")["default"])}}]);