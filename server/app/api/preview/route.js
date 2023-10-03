"use strict";
(() => {
var exports = {};
exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 8871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/preview/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/@prismicio/next/dist/redirectToPreviewURL.js
var redirectToPreviewURL = __webpack_require__(9346);
// EXTERNAL MODULE: ./node_modules/@prismicio/client/dist/createClient.js + 25 modules
var createClient = __webpack_require__(9632);
// EXTERNAL MODULE: ./node_modules/@prismicio/next/dist/enableAutoPreviews.js
var enableAutoPreviews = __webpack_require__(7790);
;// CONCATENATED MODULE: ./slicemachine.config.json
const slicemachine_config_namespaceObject = {"AF":"jomi"};
;// CONCATENATED MODULE: ./prismicio.js



/**
 * The project's Prismic repository name.
 */ const repositoryName = slicemachine_config_namespaceObject.AF;
/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */ // TODO: Update the routes array to match your project's route structure.
const routes = [
    {
        type: "homepage",
        path: "/"
    },
    {
        type: "page",
        path: "/:uid"
    }
];
/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.
 */ const prismicio_createClient = (config = {})=>{
    const client = createClient/* createClient */.eI(repositoryName, {
        routes,
        fetchOptions:  true ? {
            next: {
                tags: [
                    "prismic"
                ]
            },
            cache: "force-cache"
        } : 0,
        ...config
    });
    enableAutoPreviews/* enableAutoPreviews */.L({
        client,
        previewData: config.previewData,
        req: config.req
    });
    return client;
};

;// CONCATENATED MODULE: ./app/api/preview/route.js


async function GET(request) {
    const client = prismicio_createClient();
    await (0,redirectToPreviewURL/* redirectToPreviewURL */.u)({
        client,
        request
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fpreview%2Froute&name=app%2Fapi%2Fpreview%2Froute&pagePath=private-next-app-dir%2Fapi%2Fpreview%2Froute.js&appDir=C%3A%5CUsers%5Csanti%5COneDrive%5CEscritorio%5CProjects%5Cjomi-llanding%5Cjomi%5Capp&appPaths=%2Fapi%2Fpreview%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/preview/route",
        pathname: "/api/preview",
        filename: "route",
        bundlePath: "app/api/preview/route"
    },
    resolvedPagePath: "C:\\Users\\santi\\OneDrive\\Escritorio\\Projects\\jomi-llanding\\jomi\\app\\api\\preview\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/preview/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,265,857], () => (__webpack_exec__(8871)));
module.exports = __webpack_exports__;

})();