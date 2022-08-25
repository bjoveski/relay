"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[31125],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){return function(n){var t=d(n.components);return r.createElement(e,i({},n,{components:t}))}},d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,f=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(39960),a=t(44256),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var s=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return i.createElement(l,null,i.createElement(u,null),i.createElement(s,null),i.createElement(c,null))},m=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(c,null))};const p=function(){return(0,a.fbContent)({internal:i.createElement(d,null),external:i.createElement(m,null)})}},50826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=t(68629),l=t(44256),s=["components"],u={id:"variables",title:"Variables",slug:"/guided-tour/rendering/variables/",description:"Relay guide to query variables",keywords:["query","variables"]},c=void 0,d={unversionedId:"guided-tour/rendering/variables",id:"version-v14.0.0/guided-tour/rendering/variables",title:"Variables",description:"Relay guide to query variables",source:"@site/versioned_docs/version-v14.0.0/guided-tour/rendering/variables.md",sourceDirName:"guided-tour/rendering",slug:"/guided-tour/rendering/variables/",permalink:"/docs/guided-tour/rendering/variables/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/rendering/variables.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Emmanuel Meric de Bellefon",lastUpdatedAt:1661385827,formattedLastUpdatedAt:"8/25/2022",frontMatter:{id:"variables",title:"Variables",slug:"/guided-tour/rendering/variables/",description:"Relay guide to query variables",keywords:["query","variables"]},sidebar:"version-v14.0.0/docs",previous:{title:"Fragments",permalink:"/docs/guided-tour/rendering/fragments/"},next:{title:"Loading States with Suspense",permalink:"/docs/guided-tour/rendering/loading-states/"}},m={},p=[{value:"@arguments and @argumentDefinitions",id:"arguments-and-argumentdefinitions",level:2},{value:"Accessing GraphQL Variables At Runtime",id:"accessing-graphql-variables-at-runtime",level:2}],f={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"You may have noticed that the query declarations in our examples above contain references to an ",(0,i.mdx)("inlineCode",{parentName:"p"},"$id")," symbol inside the GraphQL code: these are ",(0,i.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#variables"},"GraphQL Variables"),"."),(0,i.mdx)("p",null,"GraphQL variables are a construct that allows referencing dynamic values inside a GraphQL query. When fetching a query from the server, we also need to provide as input the actual set of values to use for the variables declared inside the query:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query UserQuery($id: ID!) {\n  # The value of $id is used as input to the user() call:\n  user(id: $id) {\n    id\n    name\n  }\n}\n")),(0,i.mdx)("p",null,"In the above, ",(0,i.mdx)("inlineCode",{parentName:"p"},"ID!")," is the type of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"$id")," variable. That is, it is a required ID."),(0,i.mdx)("p",null,"When sending a network request to fetch the query above, we need to provide both the query, and the variables to be used for this particular execution of the query.  For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'# Query:\nquery UserQuery($id: ID!) {\n  # ...\n}\n\n# Variables:\n{"id": 4}\n')),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"Fetching the above query and variables from the server would produce the following response, which can also be visualized in ",(0,i.mdx)("a",{parentName:"p",href:"https://fburl.com/graphiql/kiuar058"},"GraphiQL"),":")),(0,i.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Fetching the above query and variables from the server would produce the following response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "user": {\n      "id": "4",\n      "name": "Mark Zuckerberg"\n    }\n  }\n}\n')),(0,i.mdx)("hr",null),(0,i.mdx)("p",null,"Fragments can also reference variables that have been declared by a query:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment UserFragment on User {\n  name\n  profile_picture(scale: $scale) {\n    uri\n  }\n}\n\n\nquery ViewerQuery($scale: Float!) {\n  viewer {\n    actor {\n      ...UserFragment\n    }\n  }\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Even though the fragment above doesn't ",(0,i.mdx)("em",{parentName:"li"},"declare")," the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable directly, it can still reference it. Doing so makes it so any query that includes this fragment, either directly or transitively, ",(0,i.mdx)("em",{parentName:"li"},"must")," declare the variable and its type, otherwise an error will be produced."),(0,i.mdx)("li",{parentName:"ul"},"In other words, ",(0,i.mdx)("em",{parentName:"li"},"query variables are available globally by any fragment that is a descendant of the query"),"."),(0,i.mdx)("li",{parentName:"ul"},"A fragment which references a global variable can only be included (directly or transitively) in a query which defines that global variable.")),(0,i.mdx)("p",null,"In Relay, fragment declarations inside components can also reference query variables:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`\n    fragment UserComponent_user on User {\n      name\n      profile_picture(scale: $scale) {\n        uri\n      }\n    }\n    `,\n    props.user,\n  );\n\n  return (...);\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The above fragment could be included by multiple queries, and rendered by different components, which means that any query that ends up rendering/including the above fragment ",(0,i.mdx)("em",{parentName:"li"},"must")," declare the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable."),(0,i.mdx)("li",{parentName:"ul"},"If any query that happens to include this fragment ",(0,i.mdx)("em",{parentName:"li"},"doesn't")," declare the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable, an error will be produced by the Relay Compiler at build time, ensuring that an incorrect query never gets sent to the server (sending a query with missing variable declarations will also produce an error in the server).")),(0,i.mdx)("h2",{id:"arguments-and-argumentdefinitions"},"@arguments and @argumentDefinitions"),(0,i.mdx)("p",null,"However, in order to avoid bloating queries with global variable declarations and to allow developers to reuse fragments with different variables, Relay also provides a way to declare variables that are scoped locally to a fragment using  the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@arguments")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions")," directives:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n * Declare a fragment that accepts arguments with @argumentDefinitions\n */\n\nfunction PictureComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment PictureComponent_user on User\n        @argumentDefinitions(scale: {type: "Float!"}) {\n        profile_picture(scale: $scale) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n}\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Include fragment using @arguments\n */\n\nfunction UserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n\n        # Pass value of 2.0 for the $scale variable\n        ...PictureComponent_user @arguments(scale: 2.0)\n      }\n    `,\n    props.user,\n  );\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Include same fragment using *_different_* @arguments\n */\n\nfunction OtherUserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment OtherUserComponent_user on User {\n        name\n\n        # Pass a different value for the scale variable.\n        # The value can be a local variable, global variable or literal:\n        ...PictureComponent_user @arguments(scale: $pictureScale)\n      }\n    `,\n    props.user,\n  );\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Note that when passing ",(0,i.mdx)("inlineCode",{parentName:"li"},"@arguments")," to a fragment, we can pass a literal value or pass another variable. The variable can be a global query variable, a local variable declared via ",(0,i.mdx)("inlineCode",{parentName:"li"},"@argumentDefinitions")," or a literal (e.g. ",(0,i.mdx)("inlineCode",{parentName:"li"},"42.0"),")."),(0,i.mdx)("li",{parentName:"ul"},"When we actually fetch ",(0,i.mdx)("inlineCode",{parentName:"li"},"PictureComponent_user")," as part of a query, the ",(0,i.mdx)("inlineCode",{parentName:"li"},"scale")," value passed to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"profile_picture")," field will depend on the argument that was provided by the parent of ",(0,i.mdx)("inlineCode",{parentName:"li"},"PictureComponent_user"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"For ",(0,i.mdx)("inlineCode",{parentName:"li"},"UserComponent_user")," the value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," will be 2.0."),(0,i.mdx)("li",{parentName:"ul"},"For ",(0,i.mdx)("inlineCode",{parentName:"li"},"OtherUserComponent_user"),", the value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," will be whatever value we pass to the server for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$pictureScale")," variable when we fetch the query.")))),(0,i.mdx)("p",null,"Fragments that expect arguments can also declare default values, making the arguments optional:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n * Declare a fragment that accepts arguments with default values\n */\n\nfunction PictureComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment PictureComponent_user on User\n        @argumentDefinitions(scale: {type: "Float!", defaultValue: 2.0}) {\n\n        # $scale is a local variable here, declared above\n        # as an argument scale, of type Float! with a default value of 2.0\n        profile_picture(scale: $scale) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n}\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function UserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n\n        # Do not pass an argument, value for scale will be 2.0\n        ...PictureComponent_user\n      }\n    `,\n    props.user,\n  );\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Not passing the argument to ",(0,i.mdx)("inlineCode",{parentName:"li"},"PictureComponent_user")," makes it use the default value for its locally declared ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable, in this case 2.0.")),(0,i.mdx)("h2",{id:"accessing-graphql-variables-at-runtime"},"Accessing GraphQL Variables At Runtime"),(0,i.mdx)("p",null,"If you want to access the variables that were set at the query root, the recommended approach is to pass the variables down the component tree in your application, using props, or your own application-specific context."),(0,i.mdx)("p",null,"Relay currently does not expose the resolved variables (i.e. after applying argument definitions) for a specific fragment, and you should very rarely need to do so."),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(n){i(n)}}function l(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(n){i(n)}}function l(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,a=0;const i={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=a++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),o={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,l),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(n){i(n)}}function l(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const a=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield a.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield a.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=i(t(47596)),n.uidocs=i(t(17483)),n.feedback=i(t(24855)),n.inpageeditor=i(t(27312));const o=["internal","external"];function l(e){return u(e),c()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function c(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function d(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=u,n.isInternal=c,n.hasEphemeralDiffNumber=function(){return Boolean(d())},n.getEphemeralDiffNumber=d,n.FbInternalOnly=function(e){return c()?e.children:null},n.OssOnly=function(e){return c()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(n){i(n)}}function l(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const a=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:i}=e;try{return yield a.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:i}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(n){i(n)}}function l(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const a=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield a.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);