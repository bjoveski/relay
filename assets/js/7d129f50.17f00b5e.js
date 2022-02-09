(self.webpackChunk=self.webpackChunk||[]).push([[36044],{3905:(e,n,a)=>{"use strict";a.r(n),a.d(n,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>s,withMDXComponents:()=>m});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),m=function(e){return function(n){var a=s(n.components);return r.createElement(e,i({},n,{components:a}))}},s=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(a),c=t,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(h,l(l({ref:n},p),{},{components:a})):r.createElement(h,l({ref:n},p))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},72316:(e,n,a)=>{"use strict";a.r(n),a.d(n,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>p,toc:()=>m,default:()=>c});var r=a(74034),t=a(79973),i=(a(67294),a(3905)),o=["components"],l={id:"graphql-in-relay",title:"GraphQL in Relay",original_id:"graphql-in-relay"},d=void 0,p={unversionedId:"graphql-in-relay",id:"version-v1.6.2/graphql-in-relay",isDocsHomePage:!1,title:"GraphQL in Relay",description:"Table of Contents:",source:"@site/versioned_docs/version-v1.6.2/Modern-GraphQLInRelay.md",sourceDirName:".",slug:"/graphql-in-relay",permalink:"/docs/v1.6.2/graphql-in-relay",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.2/Modern-GraphQLInRelay.md",tags:[],version:"v1.6.2",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1644427940,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"graphql-in-relay",title:"GraphQL in Relay",original_id:"graphql-in-relay"},sidebar:"version-v1.6.2/docs",previous:{title:"Quick Start Guide",permalink:"/docs/v1.6.2/quick-start-guide"},next:{title:"Relay Environment",permalink:"/docs/v1.6.2/relay-environment"}},m=[{value:"<code>graphql</code>",id:"graphql",children:[],level:2},{value:"Directives",id:"directives",children:[{value:"<code>@arguments</code>",id:"arguments",children:[],level:3},{value:"<code>@argumentDefinitions</code>",id:"argumentdefinitions",children:[],level:3},{value:"<code>@connection(key: String!, filters: [String])</code>",id:"connectionkey-string-filters-string",children:[],level:3},{value:"<code>@relay(plural: Boolean)</code>",id:"relayplural-boolean",children:[],level:3},{value:"<code>@relay(mask: Boolean)</code>",id:"relaymask-boolean",children:[],level:3}],level:2},{value:"Relay Compiler",id:"relay-compiler",children:[{value:"Set up relay-compiler",id:"set-up-relay-compiler",children:[],level:3},{value:"GraphQL Schema",id:"graphql-schema",children:[],level:3},{value:"Source files",id:"source-files",children:[],level:3},{value:"Importing generated definitions",id:"importing-generated-definitions",children:[],level:3},{value:"Advanced usage",id:"advanced-usage",children:[],level:3}],level:2}],s={toc:m};function c(e){var n=e.components,a=(0,t.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Table of Contents:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#graphql"},(0,i.mdx)("inlineCode",{parentName:"a"},"graphql"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#directives"},"Directives")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#relay-compiler"},"Relay Compiler"))),(0,i.mdx)("h2",{id:"graphql"},(0,i.mdx)("inlineCode",{parentName:"h2"},"graphql")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," template tag provided by Relay serves as the mechanism to write queries, fragments, mutations or subscriptions in the ",(0,i.mdx)("a",{parentName:"p",href:"http://graphql.org/learn/"},"GraphQL")," language. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {graphql} from 'react-relay';\n\ngraphql`\n  query MyQuery {\n    viewer {\n      id\n    }\n  }\n`;\n")),(0,i.mdx)("p",null,"The result of using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," template tag are ",(0,i.mdx)("inlineCode",{parentName:"p"},"GraphQLTaggedNode"),"s, which are used to define ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/query-renderer"},"Query Renderers"),", ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/fragment-container"},"Fragment Containers"),", ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/refetch-container"},"Refetch Containers"),", ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/pagination-container"},"Pagination Containers"),", etc."),(0,i.mdx)("p",null,"However, ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," template tags are ",(0,i.mdx)("strong",{parentName:"p"},"never executed at runtime"),". Instead, they are compiled ahead of time by the ",(0,i.mdx)("a",{parentName:"p",href:"#relay-compiler"},"Relay Compiler")," into generated artifacts that live alongside your source code, and which Relay requires to operate at runtime. The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/installation-and-setup#setup-babel-plugin-relay"},"Relay Babel plugin")," will then convert the ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," literals in your code into ",(0,i.mdx)("inlineCode",{parentName:"p"},"require()")," calls for the generated files."),(0,i.mdx)("h2",{id:"directives"},"Directives"),(0,i.mdx)("p",null,"Relay uses directives to add additional information to GraphQL documents, which are used by the ",(0,i.mdx)("a",{parentName:"p",href:"#relay-compiler"},"Relay Compiler")," to generate the appropriate runtime artifacts. These directives only appear in your application code and are removed from requests sent to your GraphQL server."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note:")," The relay-compiler will maintain any directives supported by your server (such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"@include")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"@skip"),") so they remain part of the request to the GraphQL server and won't alter generated runtime artifacts."),(0,i.mdx)("h3",{id:"arguments"},(0,i.mdx)("inlineCode",{parentName:"h3"},"@arguments")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@arguments")," is a directive used to pass arguments to a fragment that was defined using ",(0,i.mdx)("a",{parentName:"p",href:"#argumentdefinitions"},(0,i.mdx)("inlineCode",{parentName:"a"},"@argumentDefinitions")),". For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query TodoListQuery($userID: ID) {\n  ...TodoList_list @arguments(count: $count, userID: $userID) # Pass arguments here\n}\n")),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/fragment-container#passing-arguments-to-a-fragment"},"Fragment Container docs")," for more details."),(0,i.mdx)("h3",{id:"argumentdefinitions"},(0,i.mdx)("inlineCode",{parentName:"h3"},"@argumentDefinitions")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions")," is a directive used to specify arguments taken by a fragment. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'fragment TodoList_list on TodoList @argumentDefinitions(\n  count: {type: "Int", defaultValue: 10},  # Optional argument\n  userID: {type: "ID"},                    # Required argument\n) {\n  title\n  todoItems(userID: $userID, first: $count) {  # Use fragment arguments here as variables\n    ...TodoItem_item\n  }\n}\n')),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/fragment-container#passing-arguments-to-a-fragment"},"Fragment Container docs")," for more details."),(0,i.mdx)("h3",{id:"connectionkey-string-filters-string"},(0,i.mdx)("inlineCode",{parentName:"h3"},"@connection(key: String!, filters: [String])")),(0,i.mdx)("p",null,"When using the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/pagination-container"},"Pagination Container"),", Relay expects connection fields to be annotated with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@connection")," directive. For more detailed information and example, check out our docs on using ",(0,i.mdx)("inlineCode",{parentName:"p"},"@connection")," inside a Pagination Container ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/pagination-container#connection"},(0,i.mdx)("inlineCode",{parentName:"a"},"here")),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note:")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"@connection")," is also supported in ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/relay-compat"},"compatibility mode")),(0,i.mdx)("h3",{id:"relayplural-boolean"},(0,i.mdx)("inlineCode",{parentName:"h3"},"@relay(plural: Boolean)")),(0,i.mdx)("p",null,"When defining a fragment, you can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@relay(plural: true)")," directive to indicate that the fragment is backed by a ",(0,i.mdx)("a",{parentName:"p",href:"http://graphql.org/learn/schema/#lists-and-non-null"},"GraphQL list"),", meaning that it will inform Relay that this particular field is an array. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"graphql`\nfragment TodoItems_items on TodoItem @relay(plural: true) {\n  id\n  text\n}`;\n")),(0,i.mdx)("h3",{id:"relaymask-boolean"},(0,i.mdx)("inlineCode",{parentName:"h3"},"@relay(mask: Boolean)")),(0,i.mdx)("p",null,"Relay by default will only expose the data for fields explicitly requested by a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/fragment-container#createfragmentcontainer"},"component's fragment"),", which is known as ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/thinking-in-relay#data-masking"},"data masking"),"."),(0,i.mdx)("p",null,"However, ",(0,i.mdx)("inlineCode",{parentName:"p"},"@relay(mask: false)")," can be used to prevent data masking; when including a fragment and annotating it with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@relay(mask: false)"),", its data will be available to the parent, recursively including the data from the fields of the referenced fragment."),(0,i.mdx)("p",null,"This may be helpful to reduce redundant fragments when dealing with nested or recursive data within a single Component."),(0,i.mdx)("p",null,"Keep in mind that it is typically considered an ",(0,i.mdx)("strong",{parentName:"p"},"anti-pattern")," to create a single fragment shared across many containers. Abusing this directive could result in over-fetching in your application."),(0,i.mdx)("p",null,"In the example below, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"user")," prop will include the data for ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," fields wherever ",(0,i.mdx)("inlineCode",{parentName:"p"},"...Component_internUser")," is included, instead of Relay's normal behavior to mask those fields:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  fragment Component_internUser on InternUser {\n    id\n    name\n  }\n`;\n\nexport default createFragmentContainer(\n  ({ user }) => /* ... */,\n  graphql`\n    fragment Component_user on User {\n      internUser {\n        manager {\n          ...Component_internUser @relay(mask: false)\n        }\n        .... on Employee {\n          admins {\n            ...Component_internUser @relay(mask: false)\n          }\n          reports {\n            ...Component_internUser @relay(mask: false)\n          }\n        }\n      }\n    }\n  `,\n);\n")),(0,i.mdx)("h2",{id:"relay-compiler"},"Relay Compiler"),(0,i.mdx)("p",null,"Relay uses the Relay Compiler to convert ",(0,i.mdx)("a",{parentName:"p",href:"#graphql"},(0,i.mdx)("inlineCode",{parentName:"a"},"graphql"))," literals into generated files that live alongside your source files."),(0,i.mdx)("p",null,"A query like the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  fragment MyComponent on Type {\n    field\n  }\n`\n\n")),(0,i.mdx)("p",null,"Will cause a generated file to appear in ",(0,i.mdx)("inlineCode",{parentName:"p"},"./__generated__/MyComponent.graphql"),",\nwith both runtime artifacts (which help to read and write from the Relay Store)\nand ",(0,i.mdx)("a",{parentName:"p",href:"https://flow.org/"},"Flow types")," to help you write type-safe code."),(0,i.mdx)("p",null,"The Relay Compiler is responsible for generating code as part of a build step which, at runtime, can be used statically. By building the query ahead of time, the client's JS runtime is not responsible for generating a query string, and fields that are duplicated in the query can be merged during the build step, to improve parsing efficiency. If you have the ability to persist queries to your server, the compiler's code generation process provides a convenient time to convert a query or mutation's text into a unique identifier, which can greatly reduce the upload bytes required in some applications."),(0,i.mdx)("h3",{id:"set-up-relay-compiler"},"Set up relay-compiler"),(0,i.mdx)("p",null,"See our relay-compiler section in our ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/installation-and-setup#set-up-relay-compiler"},"Installation and Setup guide"),"."),(0,i.mdx)("h3",{id:"graphql-schema"},"GraphQL Schema"),(0,i.mdx)("p",null,"To use the Relay Compiler, you need either a .graphql or .json GraphQL schema file, describing your GraphQL server's API. Typically these files are local representations of a server source of truth and are not edited directly. For example, we might have a ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.graphql")," like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Root\n}\n\ntype Root {\n  dictionary: [Word]\n}\n\ntype Word {\n  id: String!\n  definition: WordDefinition\n}\n\ntype WordDefinition {\n  text: String\n  image: String\n}\n")),(0,i.mdx)("h3",{id:"source-files"},"Source files"),(0,i.mdx)("p",null,"Additionally, you need a directory containing ",(0,i.mdx)("inlineCode",{parentName:"p"},".js")," files that use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," tag to describe GraphQL queries and fragments. Let's call this ",(0,i.mdx)("inlineCode",{parentName:"p"},"./src"),"."),(0,i.mdx)("p",null,"Then run ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn run relay")," as set up before."),(0,i.mdx)("p",null,"This will create a series of ",(0,i.mdx)("inlineCode",{parentName:"p"},"__generated__")," directories that are co-located with the corresponding files containing ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," tags."),(0,i.mdx)("p",null,"For example, given the two files:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"src/Components/DictionaryComponent.js")),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const DictionaryWordFragment = graphql`\n  fragment DictionaryComponent_word on Word {\n    id\n    definition {\n      ...DictionaryComponent_definition\n    }\n  }\n`\n\nconst DictionaryDefinitionFragment = graphql`\n  fragment DictionaryComponent_definition on WordDefinition {\n    text\n    image\n  }\n`\n\n"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"src/Queries/DictionaryQuery.js")),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const DictionaryQuery = graphql`\n  query DictionaryQuery {\n    dictionary {\n      ...DictionaryComponent_word\n    }\n  }\n`\n\n")))),(0,i.mdx)("p",null,"This would produce three generated files, and two ",(0,i.mdx)("inlineCode",{parentName:"p"},"__generated__")," directories:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"src/Components/__generated__/DictionaryComponent_word.graphql.js")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"src/Components/__generated__/DictionaryComponent_definition.graphql.js")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"src/Queries/__generated__/DictionaryQuery.graphql.js"))),(0,i.mdx)("h3",{id:"importing-generated-definitions"},"Importing generated definitions"),(0,i.mdx)("p",null,"Typically you will not need to import your generated definitions. The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/installation-and-setup#setup-babel-plugin-relay"},"Relay Babel plugin")," will then convert the ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," literals in your code into ",(0,i.mdx)("inlineCode",{parentName:"p"},"require()")," calls for the generated files."),(0,i.mdx)("p",null,"However the Relay Compiler also automatically generates ",(0,i.mdx)("a",{parentName:"p",href:"https://flow.org"},"Flow")," types as ",(0,i.mdx)("a",{parentName:"p",href:"https://flow.org/en/docs/types/comments/"},"type comments"),". For example, you can import the generated flow types like so:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import type {DictionaryComponent_word} from './__generated__/DictionaryComponent_word.graphql';\n")),(0,i.mdx)("h3",{id:"advanced-usage"},"Advanced usage"),(0,i.mdx)("p",null,"In addition to the bin script, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"relay-compiler")," package also ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/blob/main/packages/relay-compiler/RelayCompilerPublic.js"},"exports library code")," which you may use to create more complex configurations for the compiler, or to extend the compiler with your own custom output."),(0,i.mdx)("p",null,"If you find you need to do something unique (like generate types that conform to an older version of flow, or to parse non-javascript source files), you can build your own version of the Compiler by swapping in your own ",(0,i.mdx)("inlineCode",{parentName:"p"},"FileWriter")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"ASTCache"),", or by adding on an additional ",(0,i.mdx)("inlineCode",{parentName:"p"},"IRTransform"),". Note, the internal APIs of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"RelayCompiler")," are under constant iteration, so rolling your own version may lead to incompatibilities with future releases."))}c.isMDXComponent=!0}}]);