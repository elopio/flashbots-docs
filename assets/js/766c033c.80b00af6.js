(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(108)),l={title:"Web3.py"},i={unversionedId:"web3-flashbots",id:"web3-flashbots",isDocsHomePage:!1,title:"Web3.py",description:"This library works by injecting a new module in the Web3.py instance, which allows",source:"@site/docs/web3-flashbots.md",slug:"/web3-flashbots",permalink:"/docs/web3-flashbots",editUrl:"https://github.com/flashbots/docs/edit/main/docs/web3-flashbots.md",version:"current",sidebar:"docs",previous:{title:"Simple Arbitrage",permalink:"/docs/simple-arbitrage"},next:{title:"Ethers Provider - Flashbot-bundle",permalink:"/docs/ethers-provider-flashbots-bundle"}},c=[{value:"Example",id:"example",children:[]},{value:"Linting",id:"linting",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'This library works by injecting a new module in the Web3.py instance, which allows\nsubmitting "bundles" of transactions directly to miners. This is done by also creating\na middleware which captures calls to ',Object(a.b)("inlineCode",{parentName:"p"},"eth_sendBundle")," and ",Object(a.b)("inlineCode",{parentName:"p"},"eth_callBundle"),", and sends\nthem to an RPC endpoint which you have specified, which corresponds to ",Object(a.b)("inlineCode",{parentName:"p"},"mev-geth"),".\nTo apply correct headers we use FlashbotProvider which injects the correct header on post "),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'from eth_account.signers.local import LocalAccount\nfrom web3 import Web3, HTTPProvider\nfrom flashbots import flashbot\nfrom eth_account.account import Account\nimport os\n\nETH_ACCOUNT_SIGNATURE: LocalAccount = Account.from_key(os.environ.get("ETH_SIGNATURE_KEY"))\n\n\nw3 = Web3(HTTPProvider("http://localhost:8545"))\nflashbot(w3, ETH_ACCOUNT_SIGNATURE)\n')),Object(a.b)("p",null,"Now the ",Object(a.b)("inlineCode",{parentName:"p"},"w3.flashbots.sendBundle")," method should be available to you. Look in ",Object(a.b)("inlineCode",{parentName:"p"},"examples/simple.py")," for usage examples"),Object(a.b)("h1",{id:"development-and-testing"},"Development and testing"),Object(a.b)("p",null,"Setup and run (mev-)geth with Websocket support:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"geth --http --http.api eth,net,web3,txpool --syncmode full\n")),Object(a.b)("p",null,"Install ",Object(a.b)("a",{parentName:"p",href:"https://python-poetry.org/"},"poetry")),Object(a.b)("p",null,"Poetry will automatically fix your venv and all packages needed"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"poetry install\n")),Object(a.b)("p",null,"Tips: PyCharm has a poetry plugin"),Object(a.b)("h2",{id:"linting"},"Linting"),Object(a.b)("p",null,"It's advisable to run black with default rules for linting"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo pip install black # Black should be installed with a global entrypoint\nblack .\n")))}s.isMDXComponent=!0}}]);