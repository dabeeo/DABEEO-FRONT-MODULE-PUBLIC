import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{n as i}from"./emotion-styled.browser.esm-C_rvHyWL.js";import{r as b}from"./index-CTjT7uj6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CI9L3Xya.js";const w=""+new URL("logo_studio_3d-Cke9wGlY.svg",import.meta.url).href,V=i.div`
  display: flex;
  gap: ${({gap:e})=>e&&`${e/10}rem`};
  width: ${({sizeFull:e,wFull:a,width:n})=>e||a?"100%":n&&`${n/10}rem`};
  height: ${({sizeFull:e,hFull:a,height:n})=>e||a?"100%":n&&`${n/10}rem`};
  background-color: ${({bgColor:e})=>e&&e};
`,R=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({gap:e})=>e&&`${e/10}rem`};
  width: ${({sizeFull:e,wFull:a,width:n})=>e||a?"100%":n&&`${n/10}rem`};
  height: ${({sizeFull:e,hFull:a,height:n})=>e||a?"100%":n&&`${n/10}rem`};
  background-color: ${({bgColor:e})=>e&&e};
`,k=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({gap:e})=>e&&`${e/10}rem`};
  width: ${({sizeFull:e,wFull:a,width:n})=>e||a?"100%":n&&`${n/10}rem`};
  height: ${({sizeFull:e,hFull:a,height:n})=>e||a?"100%":n&&`${n/10}rem`};
  background-color: ${({bgColor:e})=>e&&e};
`,G=i.div`
  width: ${({width:e})=>e?`${e/10}rem`:"100%"};
  height: ${({height:e})=>e?`${e/10}rem`:"0.1rem"};
  background-color: ${({color:e})=>e?e==="gray"?"var(--color-gray-06)":"var(--color-primary-da-black)":"var(--color-gray-06)"};
`,B=i.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8rem;
  padding: 0 3rem;
  // background-color: var(--color-primary-white);
  background-color: #f9f9f9;
`,z=i.nav`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 140rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-h2);
  font-weight: var(--font-weight-700);
`,W=i.div`
  display: flex;
  width: 14.2rem;
  height: 100%;
  gap: 1rem;
  cursor: pointer;
  > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,F=i.ul`
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  height: 2rem;
  gap: 4rem;
  height: 100%;
`,P=i.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  list-style: none;
  cursor: pointer;
  a {
    font-size: var(--font-h3);
    font-weight: ${({$isActive:e})=>e?"var(--font-weight-700)":"var(--font-weight-500);"};
    color: ${({$isActive:e})=>e?"var(--color-gray-01)":"var(--color-blue-black-04);"};
  }
`,H=i.div`
  display: flex;
  cursor: pointer;
  img {
    max-width: 100%;
    height: auto;
  }
`,X=i.div`
  position: absolute;
  min-width: 12rem;
  width: auto;
  z-index: 50;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
`;i.div`
  position: absolute;
  width: 12rem;
  z-index: 50;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
`;const Y=i.div`
  width: 100%;
  padding-top: 0.5rem;
`,Z=i.div`
  box-shadow: 0px 3px 15px 0px rgba(153, 153, 153, 0.4);
  border-radius: 0.2rem;
  padding: 0.4rem 0;
`,J=i(R)`
  background: var(--color-primary-white);
  font-size: var(--font-h4);
  font-weight: ${({$isActive:e})=>e?"var(--font-weight-700)":"var(--font-weight-500);"};
  color: ${({$isActive:e})=>e?"var(--color-gray-01)":"var(--color-blue-black-04);"};
  &:hover {
    color: var(--color-gray-02);
  }
`,K="data:image/svg+xml,%3csvg%20width='12'%20height='9'%20viewBox='0%200%2012%209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.99994%200L11.4999%209H0.499939L5.99994%200Z'%20fill='white'/%3e%3c/svg%3e",E=({menu:e,menuActive:a,subMenuActive:n,menuClick:p,subMenuClick:o})=>{const[x,c]=b.useState(!1),l=()=>{c(!0)},m=()=>{c(!1)},g=(s,u)=>u==="menu"&&a?a.name===s.name&&a.path===s.path:u==="subMenu"&&n?n.name===s.name&&n.path===s.path:!1;return t.jsxs(P,{onFocus:e.subMenus&&l,onMouseOver:e.subMenus&&l,onMouseLeave:e.subMenus&&m,onBlur:e.subMenus&&m,$isActive:a&&g(e,"menu"),children:[t.jsx("a",{onClick:()=>{p&&p(e)},children:e.name}),x&&e.subMenus&&t.jsx(X,{children:t.jsxs(Y,{children:[t.jsx(k,{children:t.jsx("img",{src:K,alt:"arrow"})}),t.jsx(Z,{children:e.subMenus.map((s,u)=>t.jsxs(J,{$isActive:a&&g(s,"subMenu"),onClick:()=>o&&o(e,s),children:[t.jsx(k,{height:40,children:s.name}),e.subMenus&&u<e.subMenus.length-1&&t.jsx(G,{color:"gray",width:60})]},s.idx))})]})})]},e.idx)};E.__docgenInfo={description:"",methods:[],displayName:"NavigationMenuItem",props:{menu:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  idx: number;
  name: string;
  path: string;
  subMenus?: NavMenuItem[];
}`,signature:{properties:[{key:"idx",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}},{key:"subMenus",value:{name:"Array",elements:[{name:"NavMenuItem"}],raw:"NavMenuItem[]",required:!1}}]}},description:""},menuActive:{required:!0,tsType:{name:"union",raw:"NavMenuClickReturnData | undefined",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  path: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}},{name:"undefined"}]},description:""},subMenuActive:{required:!0,tsType:{name:"union",raw:"NavMenuClickReturnData | undefined",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  path: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}},{name:"undefined"}]},description:""},menuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(menu: NavMenuItem) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  idx: number;
  name: string;
  path: string;
  subMenus?: NavMenuItem[];
}`,signature:{properties:[{key:"idx",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}},{key:"subMenus",value:{name:"Array",elements:[{name:"NavMenuItem"}],raw:"NavMenuItem[]",required:!1}}]}},name:"menu"}],return:{name:"void"}}},description:""},subMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(menu: NavMenuItem, subMenu: NavMenuItem) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  idx: number;
  name: string;
  path: string;
  subMenus?: NavMenuItem[];
}`,signature:{properties:[{key:"idx",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}},{key:"subMenus",value:{name:"Array",elements:[{name:"NavMenuItem"}],raw:"NavMenuItem[]",required:!1}}]}},name:"menu"},{type:{name:"signature",type:"object",raw:`{
  idx: number;
  name: string;
  path: string;
  subMenus?: NavMenuItem[];
}`,signature:{properties:[{key:"idx",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}},{key:"subMenus",value:{name:"Array",elements:[{name:"NavMenuItem"}],raw:"NavMenuItem[]",required:!1}}]}},name:"subMenu"}],return:{name:"void"}}},description:""}}};const Q="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.1179%208V5.5C15.1179%205.22386%2014.8941%205%2014.6179%205H5.27124C4.9951%205%204.77124%205.22386%204.77124%205.5V18.5C4.77124%2018.7761%204.9951%2019%205.27124%2019H14.6179C14.8941%2019%2015.1179%2018.7761%2015.1179%2018.5V16'%20stroke='%23444444'%20stroke-width='2'/%3e%3crect%20x='11.6008'%20y='11.2499'%20width='8'%20height='1.5'%20fill='%23444444'/%3e%3cpath%20d='M17.7734%209.35736L20.2545%2012L17.7734%2014.6426'%20stroke='%23444444'%20stroke-width='1.2'/%3e%3c/svg%3e",d=b.forwardRef((e,a)=>{const{logo:n,logoTitle:p,menus:o,useLogout:x,logoClick:c,menuClick:l,subMenuClick:m,logOutClick:g}=e,[s,u]=b.useState(),[O,M]=b.useState(),D=r=>{u({name:r.name,path:r.path}),console.log(r.subMenus),r.subMenus&&r.subMenus.length>0?M({name:r.subMenus[0].name,path:r.subMenus[0].path}):M(void 0),l&&l({name:r.name,path:r.path})},U=(r,h)=>{M({name:h.name,path:h.path}),u({name:r.name,path:r.path}),m&&m({name:h.name,path:h.path})};return t.jsx(B,{ref:a,...e,children:t.jsxs(z,{children:[t.jsx(V,{width:162,height:40,gap:10,children:t.jsx(W,{onClick:c,children:n?t.jsx("img",{src:n}):t.jsx("span",{children:p})})}),t.jsxs(k,{gap:40,hFull:!0,children:[o&&o.length>0&&t.jsx(F,{children:o.map(r=>t.jsx(E,{menu:r,menuActive:s,subMenuActive:O,menuClick:D,subMenuClick:U},r.idx))}),x&&t.jsx(H,{onClick:g,children:t.jsx("img",{src:Q})})]})]})})});d.defaultProps={logoClick:()=>alert("logo click!!"),logOutClick:()=>alert("logout click!!"),menuClick:e=>alert(`${e.name} : ${e.path}`),subMenuClick:e=>alert(`${e.name} : ${e.path}`),logoTitle:"title이다!!",menus:[{idx:1,name:"매장 관리",path:"매장 관리 경로"},{idx:2,name:"카테고리 관리",path:"카테고리 관리 경로",subMenus:[{idx:1,name:"sub 1",path:"카테고리 관리 서브1 경로"},{idx:2,name:"sub 2",path:"카테고리 관리 서브2 경로"}]},{idx:3,name:"사용자 메뉴",path:"사용자 메뉴 경로",subMenus:[{idx:1,name:"사용자 메뉴 sub 1",path:"사용자 메뉴 sub 1 경로"},{idx:2,name:"사용자 메뉴 sub 2",path:"사용자 메뉴 sub 2 경로"}]},{idx:4,name:"기기 관리",path:"기기 관리 경로"}],useLogout:!0,logo:w};d.displayName="Navigation";d.__docgenInfo={description:`<hr>
<h3>헤더 네비게이션 컴포넌트</h3>

- 레이아웃 헤더에 위치하는 네비게이션 바 컴포넌트입니다.
- 로고 이미지를 지정할 수 있습니다.
- 메뉴 항목을 지정할 수 있습니다. (메뉴 및 서브메뉴 까지 총 2depth)`,methods:[],displayName:"Navigation",props:{logo:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"STD3D_LOGO_IMAGE",computed:!0}},logoTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'title이다!!'",computed:!1}},menus:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  idx: number;
  name: string;
  path: string;
  subMenus?: NavMenuItem[];
}`,signature:{properties:[{key:"idx",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}},{key:"subMenus",value:{name:"Array",elements:[{name:"NavMenuItem"}],raw:"NavMenuItem[]",required:!1}}]}}],raw:"NavMenuItem[]"},description:"",defaultValue:{value:`[
  {
    idx: 1,
    name: '매장 관리',
    path: '매장 관리 경로',
  },
  {
    idx: 2,
    name: '카테고리 관리',
    path: '카테고리 관리 경로',
    subMenus: [
      {idx: 1, name: 'sub 1', path: '카테고리 관리 서브1 경로'},
      {idx: 2, name: 'sub 2', path: '카테고리 관리 서브2 경로'},
    ],
  },
  {
    idx: 3,
    name: '사용자 메뉴',
    path: '사용자 메뉴 경로',
    subMenus: [
      {idx: 1, name: '사용자 메뉴 sub 1', path: '사용자 메뉴 sub 1 경로'},
      {idx: 2, name: '사용자 메뉴 sub 2', path: '사용자 메뉴 sub 2 경로'},
    ],
  },
  {idx: 4, name: '기기 관리', path: '기기 관리 경로'},
]`,computed:!1}},useLogout:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},menuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuInfo: NavMenuClickReturnData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  name: string;
  path: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}},name:"menuInfo"}],return:{name:"void"}}},description:"",defaultValue:{value:"(menuInfo: {name: string; path: string}) => alert(`${menuInfo.name} : ${menuInfo.path}`)",computed:!1}},subMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(subMenuInfo: NavMenuClickReturnData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  name: string;
  path: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}},name:"subMenuInfo"}],return:{name:"void"}}},description:"",defaultValue:{value:"(subMenuInfo: {name: string; path: string}) => alert(`${subMenuInfo.name} : ${subMenuInfo.path}`)",computed:!1}},logoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => alert('logo click!!')",computed:!1}},logOutClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => alert('logout click!!')",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:""}},composes:["NativeNavigationDivProps"]};const N=[{idx:1,name:"매장 관리",path:"path",isActive:!0},{idx:2,name:"카테고리 관리",path:"path",isActive:!1,subMenus:[{idx:1,name:"sub 1",path:"카테고리 관리 서브1 path",isActive:!1},{idx:2,name:"sub 2",path:"카테고리 관리 서브2 path",isActive:!1}]},{idx:3,name:"사용자 메뉴",path:"path",isActive:!1,subMenus:[{idx:1,name:"사용자 메뉴 sub 1",path:"사용자 메뉴 sub 1 path",isActive:!1},{idx:2,name:"사용자 메뉴 sub 2",path:"사용자 메뉴 sub 2 path",isActive:!1}]},{idx:4,name:"기기 관리",path:""}],re={title:"DABEEO/Component/Navigation",component:d,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{menuClick:{action:"menuClicked"},subMenuClick:{action:"subMenuClicked"},logoClick:{action:"logoClicked"},logOutClick:{action:"logoutClicked"},logo:{description:"Logo로 사용할 이미지를 지정합니다.",control:{type:"file"},table:{category:"Navigation 속성",defaultValue:{summary:w}}},logoTitle:{description:"Logo 타이틀로 사용할 텍스트를 지정합니다.<br />(로고 이미지 옵션이 있는 경우 이미지가 우선시 됩니다)",control:{type:"text"},table:{category:"Navigation 속성",defaultValue:{summary:"title"}}},useLogout:{description:"우측 상단 메뉴 목록으로 사용할 데이터를 지정 합니다.",control:{type:"boolean"},table:{category:"Navigation 속성",defaultValue:{summary:"true"}}},menus:{description:"우측 상단 메뉴 목록으로 사용할 데이터를 지정 합니다.",control:{type:"object"},table:{category:"Navigation 속성"}}}},I={render:e=>t.jsx(d,{...e})},v={...I,args:{logo:w,logoTitle:"",useLogout:!0,menus:N}},f={...I,args:{logo:"",logoTitle:"title!",useLogout:!0,menus:N}},y={...I,args:{logo:"",logoTitle:"Un Used Logout Button",useLogout:!1,menus:N}};var T,q,C;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    logo: STD3D_LOGO_IMAGE,
    logoTitle: '',
    useLogout: true,
    menus: TEST_MENUS
  }
}`,...(C=(q=v.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var S,$,j;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    logo: '',
    logoTitle: 'title!',
    useLogout: true,
    menus: TEST_MENUS
  }
}`,...(j=($=f.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var L,A,_;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Template,
  args: {
    logo: '',
    logoTitle: 'Un Used Logout Button',
    useLogout: false,
    menus: TEST_MENUS
  }
}`,...(_=(A=y.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const ie=["Default","Title","UnUsedLogout"];export{v as Default,f as Title,y as UnUsedLogout,ie as __namedExportsOrder,re as default};
