(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88c254c0"],{"3e2a":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=Object(c["E"])("data-v-b8d650d8");Object(c["t"])("data-v-b8d650d8");var s={class:"DeleteUser"},a=Object(c["h"])("h1",null,"Êtes vous sûrs de vouloir supprimer votre compte ?",-1),r={class:"content"},u=Object(c["g"])("Annuler"),l=Object(c["h"])("br",null,null,-1),i={class:"message-confirm"};Object(c["r"])();var b=o((function(e,t,n,b,d,p){var h=Object(c["x"])("HeaderHome"),m=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("div",s,[Object(c["h"])(h),a,Object(c["h"])("div",r,[Object(c["h"])("button",{class:"btn btn__yes",onClick:t[1]||(t[1]=function(e){return p.DeleteUser()})}," Confirmer "),Object(c["h"])(m,{class:"btn btn__no",to:"/posts"},{default:o((function(){return[u]})),_:1})]),l,Object(c["h"])("div",i,Object(c["z"])(d.message),1)])})),d=n("bc3a"),p=n.n(d),h=n("f9a3"),m={name:"DeleteUser",components:{HeaderHome:h["a"]},data:function(){return{message:""}},methods:{DeleteUser:function(){var e=this,t=JSON.parse(localStorage.getItem("user")).userId,n=JSON.parse(localStorage.getItem("user")).token;p.a.delete("http://localhost:3000/api/users/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(){e.message="Compte supprimé !",localStorage.clear(),setTimeout((function(){window.location="/"}),1500)})).catch((function(e){console.log(e.response)}))}}};n("4b57");m.render=b,m.__scopeId="data-v-b8d650d8";t["default"]=m},"4b57":function(e,t,n){"use strict";n("6806")},6806:function(e,t,n){}}]);
//# sourceMappingURL=chunk-88c254c0.9121aaf3.js.map