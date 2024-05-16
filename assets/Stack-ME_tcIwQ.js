import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as t}from"./index-CTjT7uj6.js";import{n as l}from"./emotion-styled.browser.esm-C_rvHyWL.js";const i=l.div`
  display: flex;
  flex-direction: ${({flexDirection:e})=>e};
  align-items: ${({alignItems:e})=>e};
  justify-content: ${({justifyContent:e})=>e};
  gap: ${({gap:e})=>e&&`${e/10}rem`};
`,n=t.forwardRef((e,a)=>r.jsx(i,{ref:a,...e}));n.displayName="Stack";n.__docgenInfo={description:"<hr>\n<h3>스택 컴포넌트</h3>\n\n- 각 자식 사이에 선택적 간격 및/또는 구분선을 사용하여 수직 또는 수평 축을 따라 직계 자식의 레이아웃을 관리합니다.\n- 스택의 `배치 방향`, `메인축 방향 정렬`, `수직축 방향 정렬`, `간격` 등을 지정할 수 있습니다.\n- HTML `<div>`태그의 속성을 모두 사용할 수 있습니다.",methods:[],displayName:"Stack",props:{flexDirection:{required:!1,tsType:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"},{name:"undefined"}]},description:""},justifyContent:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"},{name:"undefined"}]},description:""},alignItems:{required:!1,tsType:{name:"union",raw:"'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | undefined",elements:[{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"undefined"}]},description:""},gap:{required:!1,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:""}},composes:["NativeStackDivProps"]};export{n as S};