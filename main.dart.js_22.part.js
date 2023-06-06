self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={m9:function m9(d,e){this.a=d
this.b=e},
kH(d,e,f,g,h,i,j){var x,w,v=null
if(g==null)x=e!=null?new B.c_(e,v,v,v,v,v,C.ad):v
else x=g
w=B.jt(i,j)
return new A.wE(d,x,w,f,h,v,v)},
om:function om(d,e){this.a=d
this.b=e},
mp:function mp(d,e){this.a=d
this.b=e},
pd:function pd(d,e){this.a=d
this.b=e},
wE:function wE(d,e,f,g,h,i,j){var _=this
_.r=d
_.y=e
_.Q=f
_.c=g
_.d=h
_.e=i
_.a=j},
SP:function SP(d,e,f){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.dS$=d
_.bB$=e
_.a=null
_.b=f
_.c=null},
amQ:function amQ(){},
amR:function amR(){},
amS:function amS(){},
amT:function amT(){},
amU:function amU(){},
amV:function amV(){},
amW:function amW(){},
amX:function amX(){},
aEp(){var x=new Float64Array(4)
x[3]=1
return new A.nb(x)},
nb:function nb(d){this.a=d}},B,C
A=a.updateHolder(c[18],A)
B=c[0]
C=c[2]
A.m9.prototype={
dc(d){return B.r9(this.a,this.b,d)}}
A.om.prototype={
dc(d){var x=B.rk(this.a,this.b,d)
x.toString
return x}}
A.mp.prototype={
dc(d){var x=B.ek(this.a,this.b,d)
x.toString
return x}}
A.pd.prototype={
dc(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.dY(new Float64Array(3)),a3=new B.dY(new Float64Array(3)),a4=A.aEp(),a5=A.aEp(),a6=new B.dY(new Float64Array(3)),a7=new B.dY(new Float64Array(3))
this.a.Po(a2,a4,a6)
this.b.Po(a3,a5,a7)
x=1-a8
w=a2.kA(x).S(0,a3.kA(a8))
v=a4.kA(x).S(0,a5.kA(a8))
u=new Float64Array(4)
t=new A.nb(u)
t.bc(v)
t.ES(0)
s=a6.kA(x).S(0,a7.kA(a8))
x=new Float64Array(16)
v=new B.b9(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.b8(0,s)
return v}}
A.wE.prototype={
ac(){return new A.SP(null,null,C.i)}}
A.SP.prototype={
mI(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.amQ()))
s=u.cx
u.a.toString
w=y.f
u.cx=w.a(d.$3(s,t,new A.amR()))
s=y.d
u.cy=s.a(d.$3(u.cy,u.a.y,new A.amS()))
v=u.db
u.a.toString
u.db=s.a(d.$3(v,t,new A.amT()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.amU()))
v=u.dy
u.a.toString
u.dy=w.a(d.$3(v,t,new A.amV()))
v=u.fr
u.a.toString
u.fr=y.w.a(d.$3(v,t,new A.amW()))
v=u.fx
u.a.toString
u.fx=x.a(d.$3(v,t,new A.amX()))},
E(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.ge1(),n=q.CW
n=n==null?p:n.a2(0,o.gk(o))
x=q.cx
x=x==null?p:x.a2(0,o.gk(o))
w=q.cy
w=w==null?p:w.a2(0,o.gk(o))
v=q.db
v=v==null?p:v.a2(0,o.gk(o))
u=q.dx
u=u==null?p:u.a2(0,o.gk(o))
t=q.dy
t=t==null?p:t.a2(0,o.gk(o))
s=q.fr
s=s==null?p:s.a2(0,o.gk(o))
r=q.fx
r=r==null?p:r.a2(0,o.gk(o))
return B.db(n,q.a.r,C.v,p,u,w,v,p,t,x,s,r,p)}}
A.nb.prototype={
bc(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
U6(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
ES(d){var x,w,v=Math.sqrt(this.gkk())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gkk(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gp(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
H(d,e){var x=e.a,w=this.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]},
kA(d){var x=new Float64Array(4),w=new A.nb(x)
w.bc(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
a4(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.galz(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
h=C.d.a4(g,a4)
x=C.d.a4(d,a1)
w=C.d.a4(e,a2)
v=C.d.a4(f,a3)
u=C.d.a4(g,a3)
t=C.d.a4(e,a1)
s=C.d.a4(f,a4)
r=C.d.a4(d,a2)
q=C.d.a4(g,a2)
p=C.d.a4(f,a1)
o=C.d.a4(d,a3)
n=C.d.a4(e,a4)
m=C.d.a4(g,a1)
l=C.d.a4(d,a4)
k=C.d.a4(e,a3)
j=C.d.a4(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.nb(i)},
S(d,e){var x=new A.nb(new Float64Array(4))
x.bc(this)
x.H(0,e)
return x},
a8(d,e){var x,w=new Float64Array(4),v=new A.nb(w)
v.bc(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
n(d,e,f){this.a[e]=f},
j(d){var x=this.a
return B.e(x[0])+", "+B.e(x[1])+", "+B.e(x[2])+" @ "+B.e(x[3])}}
var z=a.updateTypes(["m9(@)","mp(@)","om(@)","pd(@)"])
A.amQ.prototype={
$1(d){return new A.m9(y.k.a(d),null)},
$S:z+0}
A.amR.prototype={
$1(d){return new A.mp(y.m.a(d),null)},
$S:z+1}
A.amS.prototype={
$1(d){return new B.kO(y.r.a(d),null)},
$S:113}
A.amT.prototype={
$1(d){return new B.kO(y.r.a(d),null)},
$S:113}
A.amU.prototype={
$1(d){return new A.om(y.a.a(d),null)},
$S:z+2}
A.amV.prototype={
$1(d){return new A.mp(y.m.a(d),null)},
$S:z+1}
A.amW.prototype={
$1(d){return new A.pd(y.E.a(d),null)},
$S:z+3}
A.amX.prototype={
$1(d){return new A.m9(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.ar,[A.m9,A.om,A.mp,A.pd])
w(A.wE,B.yT)
w(A.SP,B.ob)
x(B.d2,[A.amQ,A.amR,A.amS,A.amT,A.amU,A.amV,A.amW,A.amX])
w(A.nb,B.D)})()
B.ec(b.typeUniverse,JSON.parse('{"m9":{"ar":["fb?"],"an":["fb?"],"an.T":"fb?","ar.T":"fb?"},"om":{"ar":["az"],"an":["az"],"an.T":"az","ar.T":"az"},"mp":{"ar":["cJ"],"an":["cJ"],"an.T":"cJ","ar.T":"cJ"},"pd":{"ar":["b9"],"an":["b9"],"an.T":"b9","ar.T":"b9"},"wE":{"a0":[],"h":[]},"SP":{"ab":["wE"]}}'))
var y=(function rtii(){var x=B.N
return{k:x("fb"),a:x("az"),r:x("ht"),m:x("cJ"),E:x("b9"),b:x("m9?"),e:x("om?"),d:x("kO?"),f:x("mp?"),w:x("pd?")}})()}
$__dart_deferred_initializers__["hCdN0pACtmWGOjKNz8ZysMlcoZ8="] = $__dart_deferred_initializers__.current
