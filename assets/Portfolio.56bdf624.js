import{_ as m,o as s,c as p,w as n,a as e,r as i,T as f,p as b,b as x,d as c,e as a,F as _,f as u,u as v,t as l}from"./index.37654135.js";var w="/assets/korat.379258bc.png";const k=t=>(b("data-v-34d9a742"),t=t(),x(),t),y={class:"max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"},C={href:"#"},$=["src"],S={class:"p-5"},B={href:"#"},I={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900"},L={class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},P={class:"px-6 pt-4 pb-2"},R=k(()=>e("a",{href:"#",class:"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[c(" Read more "),e("svg",{"aria-hidden":"true",class:"ml-2 -mr-1 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1)),T={name:"PortfolioCard",props:{image:String},setup(t){return(o,d)=>(s(),p(f,{appear:"",name:"slide-fade",duration:550},{default:n(()=>[e("div",y,[e("a",C,[e("img",{class:"rounded-t-lg object-cover h-48 w-96",src:t.image,alt:""},null,8,$)]),e("div",S,[e("a",B,[e("h5",I,[i(o.$slots,"heading",{},void 0,!0)])]),e("p",L,[i(o.$slots,"description",{},void 0,!0)]),e("div",P,[i(o.$slots,"tags",{},void 0,!0)]),R])])]),_:3}))}};var U=m(T,[["__scopeId","data-v-34d9a742"]]);const E={class:"container flex flex-col h-full text-center pt-10 content-center"},F=e("h1",{class:"text-4xl pb-6 font-bold"},"My Portfolio",-1),M={class:"content-center place-content-center"},N={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-content-center"},V={class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},D={name:"Portfolio",setup(t){let o=[{heading:"E-Commerce website",description:"Tailor made E-Commerce website built using Codeignite 4 framework",techstack:["Codeigiter 4","Javascript","SCSS"],imageURL:"korat.png"}];function d(g){return new URL({"../assets/portfoli/korat.png":w}[`../assets/portfoli/${g}`],self.location).href}return(g,j)=>(s(),a("div",E,[F,e("div",M,[e("div",N,[(s(!0),a(_,null,u(v(o),r=>(s(),p(U,{image:d(r.imageURL)},{heading:n(()=>[c(l(r.heading),1)]),description:n(()=>[c(l(r.description),1)]),tags:n(()=>[(s(!0),a(_,null,u(r.techstack,h=>(s(),a("span",V,"#"+l(h),1))),256))]),_:2},1032,["image"]))),256))])])]))}};export{D as default};
