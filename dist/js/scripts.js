var app=new Vue({el:"#nekochanList",data:function(){return{nekochanInformation:[{name:"遊ぶの大好きなキジシロ",type:"雑種",gender:"♂",age:"子猫",ageDetail:"3ヶ月",location:"東京都 北区赤羽",limit:"2021年02月04日",number:"340150"},{name:"人懐こい4兄妹 次男 福くん！",type:"雑種",gender:"♂",age:"子猫",location:"千葉県 館山市",limit:"2021年02月04日",number:"340151"},{name:"キジ猫 ロン君",type:"雑種",gender:"♂",age:"子猫",location:"福岡県 小郡市",limit:"2021年02月04日",number:"3401512"},{name:"キジ白子猫 わらべちゃん",type:"雑種",gender:"♀",age:"子猫",location:"愛知県 名古屋市",limit:"2021年02月04日",number:"3401513"},{name:"人懐こい4兄妹 長女 しおちゃん",type:"雑種",gender:"♀",age:"子猫",location:"千葉県 館山市",limit:"2021年02月04日",number:"3401514"},{name:"おてんばシャム、ナラちゃん",type:"雑種",gender:"♀",age:"子猫",location:"千葉県 館山市",limit:"2021年02月04日",number:"3401515"},{name:"保護した時からスリスリゴロゴロのSUNちゃん",type:"雑種",gender:"♀",age:"子猫",location:"千葉県 茂原市",limit:"2021年02月04日",number:"3401516"},{name:"茶トラの慣れた女の子みかんちゃん",type:"トラ",gender:"♀",age:"子猫",location:"神奈川県 川崎市麻生区",limit:"2021年02月04日",number:"3401517"},{name:"人懐こい4兄妹 次男 福くん！",type:"雑種",gender:"♂",age:"子猫",location:"千葉県 館山市",limit:"2021年02月04日",number:"340158"}]}}});function nekochanList_maxHeight(){$(".nekochanList__cardOuter").each(function(e,n){var i=$(window).width(),a=0;799<i?($(n).find(".nekochanList__detail").each(function(){$(this).height()>a&&(a=$(this).height())}),$(n).find(".nekochanList__detail").height(a)):$(".nekochanList__detail").height("auto")})}$(window).on("load resize",function(){nekochanList_maxHeight()}),$(window).on("load",function(){setTimeout(function(){$(".spinner img").addClass("loaded"),$(".spinner").addClass("loaded")},1300),setTimeout(function(){$("#loading").addClass("loaded")},2550)});