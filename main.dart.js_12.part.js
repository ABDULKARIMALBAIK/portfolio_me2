self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
kl(d,e,f,g,h,i,j,k){return new A.Sx(k,f,g,i,d,e,j,h,null)},
Sx:function Sx(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
amy:function amy(d){this.a=d},
amx:function amx(d){this.a=d},
zj:function zj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
VN:function VN(d){var _=this
_.d=null
_.e=!0
_.a=null
_.b=d
_.c=null},
aqL:function aqL(d){this.a=d},
aMp(d){return new A.rJ(d,null)},
Ma:function Ma(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
rJ:function rJ(d,e){this.c=d
this.a=e},
a49:function a49(d,e){this.a=d
this.b=e},
tu:function tu(d,e){this.a=d
this.b=e},
amC:function amC(){},
aV8(d){switch(d.a){case 0:return C.Eh
case 1:return C.Ei
case 2:return D.a2o
case 3:return C.Ej
default:throw B.b(B.j("`null` encountered as case in a switch expression with a non-nullable enum type."))}},
dl(d,e){var x=0,w=B.Y(y.e),v,u,t,s,r,q
var $async$dl=B.T(function(f,g){if(f===1)return B.V(g,w)
while(true)switch(x){case 0:if(e===D.r0)u=!(d.gf_()==="https"||d.gf_()==="http")
else u=!1
if(u)throw B.b(B.eP(d,"url","To use an in-app web view, you must provide an http(s) URL."))
u=$.axG()
t=d.j(0)
s=A.aV8(e)
u.toString
r=C.c.bG(t,"http:")||C.c.bG(t,"https:")
if(s!==C.Ei)q=r&&s===C.Eh
else q=!0
v=u.R6(t,!0,!0,C.df,s===C.Ej,q,q,null)
x=1
break
case 1:return B.W(v,w)}})
return B.X($async$dl,w)},
aAt(d){var x=0,w=B.Y(y.e),v
var $async$aAt=B.T(function(e,f){if(e===1)return B.V(f,w)
while(true)switch(x){case 0:v=$.axG().OL(d.j(0))
x=1
break
case 1:return B.W(v,w)}})
return B.X($async$aAt,w)}},B,C,D
A=a.updateHolder(c[20],A)
B=c[0]
C=c[2]
D=c[30]
A.Sx.prototype={
E(d){return new A.zj(this.abO(d),this.e,this.d,null)},
abO(d){var x=this,w=null
return B.c2(w,new A.Ma(new A.amy(x),B.bX(x.d,0,w),x.f,w),!1,w,!1,!1,w,w,w,x.r,w,x.w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,x.x)}}
A.zj.prototype={
ac(){return new A.VN(C.i)}}
A.VN.prototype={
E(d){var x,w,v=this,u=null,t=d.j7(y.a).e
t===$&&B.c()
if(!t)return v.a.c
x="html-link-"+v.a.e
$.o6().toString
$.m6().lz(x,new A.aqL(v),!0)
t=v.d
w=B.a([new B.uE(v.gF7(),v.a.c,u)],y.l)
if(v.d!=null&&v.e)w.push(new B.fC(!0,u,new B.jJ(x,u),u))
return B.uF(B.dV(C.aQ,w,C.W,C.aA),t)}}
A.Ma.prototype={
gahn(){return!1},
ga0S(){var x=$.axG().gRb()
return x==null?A.aWc():x},
E(d){return this.a0T(this)},
$iMb:1,
a0T(d){return this.ga0S().$1(d)}}
A.rJ.prototype={
gabF(){var x=this.c.e
if(x===C.pt)return!0
if(x===C.bj)return!1
return!1},
nD(d){return this.a1y(d)},
a1y(d){var x=0,w=B.Y(y.f),v,u=this,t
var $async$nD=B.T(function(e,f){if(e===1)return B.V(f,w)
while(true)switch(x){case 0:t=u.c.d
x=!t.grG()?3:4
break
case 3:x=5
return B.a3(B.aId(d,t.j(0)),$async$nD)
case 5:x=1
break
case 4:x=9
return B.a3(A.aAt(t),$async$nD)
case 9:x=f?6:8
break
case 6:x=10
return B.a3(A.dl(t,u.gabF()?D.r0:D.P1),$async$nD)
case 10:x=7
break
case 8:B.d4(new B.bn("Could not launch link "+t.j(0),B.Rt(),"url_launcher",B.bk("during launching a link"),null,!1))
case 7:case 1:return B.W(v,w)}})
return B.X($async$nD,w)},
E(d){return this.c.c.$2(d,new A.a49(this,d))}}
A.tu.prototype={
K(){return"LaunchMode."+this.b}}
A.amC.prototype={}
var z=a.updateTypes(["rJ(Mb)"])
A.amy.prototype={
$2(d,e){var x=null,w=this.a
return B.ds(B.cd(x,w.c,C.L,!1,x,x,x,x,x,x,x,x,x,x,new A.amx(w),x,x,x,x,x,x),C.aO,x,x,x)},
$S:497}
A.amx.prototype={
$0(){var x=this.a.y
if(x!=null)x.$0()},
$S:0}
A.aqL.prototype={
$1(d){var x,w,v=this.a,u=B.axV(v.a.e)
u.textContent=v.a.d
x=u.style
x.fontSize="14px"
x=u.style
x.color="#ff0000"
x=u.style
x.margin="0px"
x=u.style
x.padding="0px"
x=u.style
w=v.d
w=w==null?null:w.a
if(w==null)w=0
x.width=B.e(w)+"px"
x=u.style
v=v.d
v=v==null?null:v.b
if(v==null)v=0
x.height=B.e(v)+"px"
return u},
$S:498}
A.a49.prototype={
$0(){return this.a.nD(this.b)},
$S:37};(function installTearOffs(){var x=a._static_1
x(A,"aWc","aMp",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.ag,[A.Sx,A.Ma,A.rJ])
w(A.amy,B.fd)
x(B.fw,[A.amx,A.a49])
w(A.zj,B.a0)
w(A.VN,B.ni)
w(A.aqL,B.d2)
w(A.tu,B.hP)
w(A.amC,B.D)})()
B.ec(b.typeUniverse,JSON.parse('{"Sx":{"ag":[],"h":[]},"zj":{"a0":[],"h":[]},"VN":{"ab":["zj"],"pK":[]},"rJ":{"ag":[],"h":[]},"Ma":{"ag":[],"h":[],"Mb":[]},"tu":{"P":[]}}'))
var y={l:B.N("o<h>"),a:B.N("qG"),e:B.N("E"),f:B.N("~")};(function constants(){D.abB=new A.amC()
D.aq=new A.tu(0,"platformDefault")
D.r0=new A.tu(1,"inAppWebView")
D.P1=new A.tu(2,"externalApplication")
D.a2o=new B.pz(2,"externalApplication")})()}
$__dart_deferred_initializers__["SOh0b3aQrl89Yq2rQjo2F9kP7TY="] = $__dart_deferred_initializers__.current
