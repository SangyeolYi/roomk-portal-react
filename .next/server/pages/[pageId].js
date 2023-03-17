"use strict";
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 7199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8751);
/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5574);
/* harmony import */ var _lib_notion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9941);
/* harmony import */ var _components_NotionPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6355);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_2__, react_notion_x__WEBPACK_IMPORTED_MODULE_3__, _lib_notion__WEBPACK_IMPORTED_MODULE_4__, _components_NotionPage__WEBPACK_IMPORTED_MODULE_5__]);
([notion_utils__WEBPACK_IMPORTED_MODULE_2__, react_notion_x__WEBPACK_IMPORTED_MODULE_3__, _lib_notion__WEBPACK_IMPORTED_MODULE_4__, _components_NotionPage__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const getStaticProps = async (context)=>{
    const pageId = context.params.pageId;
    const recordMap = await _lib_notion__WEBPACK_IMPORTED_MODULE_4__/* .getPage */ .f(pageId);
    return {
        props: {
            recordMap
        },
        revalidate: 10
    };
};
async function getStaticPaths() {
    if (_lib_config__WEBPACK_IMPORTED_MODULE_6__/* .isDev */ .r8) {
        return {
            paths: [],
            fallback: true
        };
    }
    const mapPageUrl = (0,react_notion_x__WEBPACK_IMPORTED_MODULE_3__.defaultMapPageUrl)(_lib_config__WEBPACK_IMPORTED_MODULE_6__/* .rootNotionPageId */ .AM);
    // This crawls all public pages starting from the given root page in order
    // for next.js to pre-generate all pages via static site generation (SSG).
    // This is a useful optimization but not necessary; you could just as easily
    // set paths to an empty array to not pre-generate any pages at build time.
    const pages = await (0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getAllPagesInSpace)(_lib_config__WEBPACK_IMPORTED_MODULE_6__/* .rootNotionPageId */ .AM, _lib_config__WEBPACK_IMPORTED_MODULE_6__/* .rootNotionSpaceId */ .bY, _lib_notion__WEBPACK_IMPORTED_MODULE_4__/* .getPage */ .f, {
        traverseCollections: false
    });
    const paths = Object.keys(pages).map((pageId)=>mapPageUrl(pageId)).filter((path)=>path && path !== "/");
    return {
        paths,
        fallback: true
    };
}
function Page({ recordMap  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NotionPage__WEBPACK_IMPORTED_MODULE_5__/* .NotionPage */ .m, {
        recordMap: recordMap,
        rootDomain: _lib_config__WEBPACK_IMPORTED_MODULE_6__/* .rootDomain */ .MB,
        rootPageId: _lib_config__WEBPACK_IMPORTED_MODULE_6__/* .rootNotionPageId */ .AM,
        previewImagesEnabled: _lib_config__WEBPACK_IMPORTED_MODULE_6__/* .previewImagesEnabled */ .SK
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1618:
/***/ ((module) => {

module.exports = require("@matejmazur/react-katex");

/***/ }),

/***/ 891:
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1253:
/***/ ((module) => {

module.exports = require("lqip-modern");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 8871:
/***/ ((module) => {

module.exports = require("prismjs");

/***/ }),

/***/ 9347:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-bash.js");

/***/ }),

/***/ 7632:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-c.js");

/***/ }),

/***/ 7892:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-clike.min.js");

/***/ }),

/***/ 8568:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-coffeescript.js");

/***/ }),

/***/ 7909:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-cpp.js");

/***/ }),

/***/ 4800:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-csharp.js");

/***/ }),

/***/ 5437:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-css-extras.min.js");

/***/ }),

/***/ 2889:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-css.min.js");

/***/ }),

/***/ 9734:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-diff.js");

/***/ }),

/***/ 615:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-docker.js");

/***/ }),

/***/ 5014:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-git.js");

/***/ }),

/***/ 5478:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-go.js");

/***/ }),

/***/ 2615:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-graphql.js");

/***/ }),

/***/ 1126:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-handlebars.js");

/***/ }),

/***/ 4602:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-java.js");

/***/ }),

/***/ 1896:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-javascript.min.js");

/***/ }),

/***/ 9262:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-js-extras.min.js");

/***/ }),

/***/ 5070:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-js-templates.js");

/***/ }),

/***/ 2890:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-json.min.js");

/***/ }),

/***/ 729:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-jsx.min.js");

/***/ }),

/***/ 4962:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-less.js");

/***/ }),

/***/ 9351:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-makefile.js");

/***/ }),

/***/ 6772:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-markdown.js");

/***/ }),

/***/ 4899:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-markup-templating.js");

/***/ }),

/***/ 9545:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-markup.js");

/***/ }),

/***/ 5507:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-objectivec.js");

/***/ }),

/***/ 3786:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-ocaml.js");

/***/ }),

/***/ 712:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-python.js");

/***/ }),

/***/ 1508:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-reason.js");

/***/ }),

/***/ 8352:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-rust.js");

/***/ }),

/***/ 1465:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-sass.js");

/***/ }),

/***/ 6819:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-scss.js");

/***/ }),

/***/ 1360:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-solidity.js");

/***/ }),

/***/ 646:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-sql.js");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-stylus.js");

/***/ }),

/***/ 9815:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-swift.js");

/***/ }),

/***/ 3571:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-tsx.min.js");

/***/ }),

/***/ 2289:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-typescript.min.js");

/***/ }),

/***/ 1742:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-wasm.js");

/***/ }),

/***/ 5019:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-yaml.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 258:
/***/ ((module) => {

module.exports = require("react-fast-compare");

/***/ }),

/***/ 2784:
/***/ ((module) => {

module.exports = require("react-hotkeys-hook");

/***/ }),

/***/ 9358:
/***/ ((module) => {

module.exports = require("react-image");

/***/ }),

/***/ 9785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 1177:
/***/ ((module) => {

module.exports = require("react-tweet-embed");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3470:
/***/ ((module) => {

module.exports = require("unionize");

/***/ }),

/***/ 868:
/***/ ((module) => {

module.exports = import("got");;

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = import("notion-client");;

/***/ }),

/***/ 3217:
/***/ ((module) => {

module.exports = import("notion-compat");;

/***/ }),

/***/ 8751:
/***/ ((module) => {

module.exports = import("notion-utils");;

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = import("p-map");;

/***/ }),

/***/ 9726:
/***/ ((module) => {

module.exports = import("p-memoize");;

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = import("react-notion-x");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,157,742], () => (__webpack_exec__(7199)));
module.exports = __webpack_exports__;

})();