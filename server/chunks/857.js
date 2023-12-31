"use strict";
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 9583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ preview)
/* harmony export */ });
const preview = "io.prismic.preview";
 //# sourceMappingURL=cookie.js.map


/***/ }),

/***/ 7790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ enableAutoPreviews)
/* harmony export */ });
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_prismicio_client_dist_cookie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9583);


const isPrismicPreviewData = (input)=>{
    return typeof input === "object" && input !== null && "ref" in input;
};
const enableAutoPreviews = (config)=>{
    if ("previewData" in config && config.previewData) {
        if (isPrismicPreviewData(config.previewData)) {
            config.client.queryContentFromRef(config.previewData.ref);
        }
    } else if ("req" in config && config.req) {
        config.client.enableAutoPreviewsFromReq(config.req);
    } else {
        config.client.queryContentFromRef(()=>{
            var _a;
            let isDraftModeEnabled = false;
            try {
                isDraftModeEnabled = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.draftMode)().isEnabled;
            } catch  {
                return;
            }
            if (!isDraftModeEnabled) {
                return;
            }
            let cookie;
            try {
                cookie = (_a = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(_node_modules_prismicio_client_dist_cookie_js__WEBPACK_IMPORTED_MODULE_1__/* .preview */ .R)) == null ? void 0 : _a.value;
            } catch  {
                return;
            }
            if (cookie && /\.prismic\.io/.test(cookie)) {
                return cookie;
            }
        });
    }
};
 //# sourceMappingURL=enableAutoPreviews.js.map


/***/ }),

/***/ 9346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ redirectToPreviewURL)
/* harmony export */ });
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4980);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_prismicio_client_dist_cookie_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9583);



async function redirectToPreviewURL(config) {
    const basePath = config.basePath || "";
    const request = "request" in config ? config.request : config.req;
    config.client.enableAutoPreviewsFromReq(request);
    const previewUrl = await config.client.resolvePreviewURL({
        linkResolver: config.linkResolver,
        defaultURL: config.defaultURL || "/"
    });
    if ("nextUrl" in request) {
        (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.draftMode)().enable();
        const previewCookie = request.nextUrl.searchParams.get("token");
        if (previewCookie) {
            (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().set(_node_modules_prismicio_client_dist_cookie_js__WEBPACK_IMPORTED_MODULE_2__/* .preview */ .R, previewCookie);
        }
        (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.redirect)(basePath + previewUrl);
    } else {
        if (!("res" in config)) {
            throw new Error("[redirectToPreviewURL] The `res` object from the API route must be provided to `redirectToPreviewURL()`.");
        }
        config.res.redirect(basePath + previewUrl);
        return;
    }
}
 //# sourceMappingURL=redirectToPreviewURL.js.map


/***/ }),

/***/ 2271:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _dynamicnossr = __webpack_require__(5070);
const _staticgenerationasyncstorage = __webpack_require__(3539);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicnossr.suspense)();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 4713:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "clientHookInServerComponentError", ({
    enumerable: true,
    get: function() {
        return clientHookInServerComponentError;
    }
}));
const _interop_require_default = __webpack_require__(3297);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2947));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 7158:
/***/ ((module, exports, __webpack_require__) => {

// useLayoutSegments() // Only the segments for the current place. ['children', 'dashboard', 'children', 'integrations'] -> /dashboard/integrations (/dashboard/layout.js would get ['children', 'dashboard', 'children', 'integrations'])

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    usePathname: function() {
        return usePathname;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtml.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtml.useServerInsertedHTML;
    },
    useRouter: function() {
        return useRouter;
    },
    useParams: function() {
        return useParams;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    notFound: function() {
        return _notfound.notFound;
    }
});
const _react = __webpack_require__(2947);
const _approutercontext = __webpack_require__(6021);
const _hooksclientcontext = __webpack_require__(4629);
const _clienthookinservercomponenterror = __webpack_require__(4713);
const _getsegmentvalue = __webpack_require__(5891);
const _serverinsertedhtml = __webpack_require__(9107);
const _redirect = __webpack_require__(5287);
const _notfound = __webpack_require__(2241);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
        this.size = urlSearchParams.size;
    }
}
function useSearchParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");
    const searchParams = (0, _react.useContext)(_hooksclientcontext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(2271);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontext.PathnameContext);
}
function useRouter() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");
    const router = (0, _react.useContext)(_approutercontext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function useParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");
    const globalLayoutRouterContext = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!globalLayoutRouterContext) {
        // This only happens in `pages`. Type is overwritten in navigation.d.ts
        return null;
    }
    return getSelectedParams(globalLayoutRouterContext.tree);
}
// TODO-APP: handle parallel routes
/**
 * Get the canonical parameters from the current level to the leaf node.
 */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree } = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 5891:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 6021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\santi\\OneDrive\\Escritorio\\Projects\\jomi-llanding\\jomi\\node_modules\\next\\dist\\shared\\lib\\app-router-context.js");
 //# sourceMappingURL=app-router-context.js.map


/***/ }),

/***/ 4629:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\santi\\OneDrive\\Escritorio\\Projects\\jomi-llanding\\jomi\\node_modules\\next\\dist\\shared\\lib\\hooks-client-context.js");
 //# sourceMappingURL=hooks-client-context.js.map


/***/ }),

/***/ 5070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\santi\\OneDrive\\Escritorio\\Projects\\jomi-llanding\\jomi\\node_modules\\next\\dist\\shared\\lib\\lazy-dynamic\\dynamic-no-ssr.js");
 //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 9107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\santi\\OneDrive\\Escritorio\\Projects\\jomi-llanding\\jomi\\node_modules\\next\\dist\\shared\\lib\\server-inserted-html.js");
 //# sourceMappingURL=server-inserted-html.js.map


/***/ }),

/***/ 63:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(4937);


/***/ }),

/***/ 4980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(7158);


/***/ }),

/***/ 9632:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  eI: () => (/* binding */ createClient)
});

// UNUSED EXPORTS: Client, GET_ALL_QUERY_DELAY, REPOSITORY_CACHE_TTL

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/castArray.js
const castArray = (a)=>{
    return Array.isArray(a) ? a : [
        a
    ];
};
 //# sourceMappingURL=castArray.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/appendFilters.js

const appendFilters = (objWithFilters = {}, filters)=>{
    return {
        ...objWithFilters,
        filters: [
            ...objWithFilters.filters || [],
            ...castArray(filters)
        ]
    };
};
 //# sourceMappingURL=appendFilters.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/castThunk.js
const castThunk = (a)=>{
    return typeof a === "function" ? a : ()=>a;
};
 //# sourceMappingURL=castThunk.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/filter.js
const formatValue = (value)=>{
    if (Array.isArray(value)) {
        return `[${value.map(formatValue).join(", ")}]`;
    }
    if (typeof value === "string") {
        return `"${value}"`;
    }
    if (value instanceof Date) {
        return `${value.getTime()}`;
    }
    return `${value}`;
};
const pathWithArgsFilter = (name)=>{
    const fn = (path, ...args)=>{
        const formattedArgs = args.map(formatValue).join(", ");
        const joiner = path && args.length ? ", " : "";
        return `[${name}(${path}${joiner}${formattedArgs})]`;
    };
    return fn;
};
const pathFilter = (name)=>{
    const filterFn = pathWithArgsFilter(name);
    const fn = (path)=>{
        return filterFn(path);
    };
    return fn;
};
const argsFilter = (name)=>{
    const filterFn = pathWithArgsFilter(name);
    const fn = (...args)=>{
        return filterFn("", ...args);
    };
    return fn;
};
const filter = {
    /**
   * The `at` filter checks that the path matches the described value exactly.
   * It takes a single value for a field or an array (only for tags).
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#at}
   */ at: pathWithArgsFilter("at"),
    /**
   * The `not` filter checks that the path doesn't match the provided value
   * exactly. It takes a single value for a field or an array (only for tags).
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#not}
   */ not: pathWithArgsFilter("not"),
    /**
   * The `any` filter takes an array of values. It works exactly the same way as
   * the `at` operator, but checks whether the fragment matches any of the
   * values in the array.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#any}
   */ any: pathWithArgsFilter("any"),
    /**
   * The `in` filter is used specifically to retrieve an array of documents by
   * their IDs or UIDs. This filter is much more efficient at this than the any
   * filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#in}
   */ in: pathWithArgsFilter("in"),
    /**
   * The `fulltext` filter provides two capabilities:
   *
   * 1. Checking if a certain string is anywhere inside a document (this is what
   *    you should use to make your project's search engine feature)
   * 2. Checking if the string is contained inside a specific custom type’s Rich
   *    Text or Key Text fragment.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#fulltext}
   */ fulltext: pathWithArgsFilter("fulltext"),
    /**
   * The `has` filter checks whether a fragment has a value. It will return all
   * the documents of the specified type that contain a value for the specified
   * field.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#has}
   */ has: pathFilter("has"),
    /**
   * The `missing` filter checks if a fragment doesn't have a value. It will
   * return all the documents of the specified type that do not contain a value
   * for the specified field.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#missing}
   */ missing: pathFilter("missing"),
    /**
   * The `similar` filter takes the ID of a document, and returns a list of
   * documents with similar content. This allows you to build an automated
   * content discovery feature (for example, a "Related posts" section).
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#similar}
   */ similar: argsFilter("similar"),
    /**
   * The `geopoint.near` filter checks that the value in the path is within the
   * radius of the given coordinates.
   *
   * This filter will only work for a geopoint field.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#geopointnear}
   */ geopointNear: pathWithArgsFilter("geopoint.near"),
    /**
   * The `number.lt` filter checks that the value in the number field is less
   * than the value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#numberlessthan}
   */ numberLessThan: pathWithArgsFilter("number.lt"),
    /**
   * The `number.gt` filter checks that the value in the number field is greater
   * than the value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#numbergreaterthan}
   */ numberGreaterThan: pathWithArgsFilter("number.gt"),
    /**
   * The `number.inRange` filter checks that the value in the path is within the
   * two values passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#numberinrange}
   */ numberInRange: pathWithArgsFilter("number.inRange"),
    /**
   * The `date.after` filter checks that the value in the path is after the date
   * value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateAfter: pathWithArgsFilter("date.after"),
    /**
   * The `date.before` filter checks that the value in the path is before the
   * date value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateBefore: pathWithArgsFilter("date.before"),
    /**
   * The `date.between` filter checks that the value in the path is within the
   * date values passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateBetween: pathWithArgsFilter("date.between"),
    /**
   * The `date.day-of-month` filter checks that the value in the path is equal
   * to the day of the month passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateDayOfMonth: pathWithArgsFilter("date.day-of-month"),
    /**
   * The `date.day-of-month-after` filter checks that the value in the path is
   * after the day of the month passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateDayOfMonthAfter: pathWithArgsFilter("date.day-of-month-after"),
    /**
   * The `date.day-of-month-before` filter checks that the value in the path is
   * before the day of the month passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateDayOfMonthBefore: pathWithArgsFilter("date.day-of-month-before"),
    /**
   * The `date.day-of-week` filter checks that the value in the path is equal to
   * the day of the week passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateDayOfWeek: pathWithArgsFilter("date.day-of-week"),
    /**
   * The `date.day-of-week-after` filter checks that the value in the path is
   * after the day of the week passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateDayOfWeekAfter: pathWithArgsFilter("date.day-of-week-after"),
    /**
   * The date.day-of-week-before filter checks that the value in the path is
   * before the day of the week passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateDayOfWeekBefore: pathWithArgsFilter("date.day-of-week-before"),
    /**
   * The `date.month` filter checks that the value in the path occurs in the
   * month value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateMonth: pathWithArgsFilter("date.month"),
    /**
   * The `date.month-after` filter checks that the value in the path occurs in
   * any month after the value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateMonthAfter: pathWithArgsFilter("date.month-after"),
    /**
   * The `date.month-before` filter checks that the value in the path occurs in
   * any month before the value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateMonthBefore: pathWithArgsFilter("date.month-before"),
    /**
   * The `date.year` filter checks that the value in the path occurs in the year
   * value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateYear: pathWithArgsFilter("date.year"),
    /**
   * The `date.hour` filter checks that the value in the path occurs within the
   * hour value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateHour: pathWithArgsFilter("date.hour"),
    /**
   * The `date.hour-after` filter checks that the value in the path occurs after
   * the hour value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateHourAfter: pathWithArgsFilter("date.hour-after"),
    /**
   * The `date.hour-before` filter checks that the value in the path occurs
   * before the hour value passed into the filter.
   *
   * {@link https://prismic.io/docs/rest-api-technical-reference#date-filters}
   */ dateHourBefore: pathWithArgsFilter("date.hour-before")
};
 //# sourceMappingURL=filter.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/everyTagFilter.js


const everyTagFilter = (tags)=>{
    return filter.at("document.tags", castArray(tags));
};
 //# sourceMappingURL=everyTagFilter.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/errors/PrismicError.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
class PrismicError extends Error {
    constructor(message = "An invalid API response was returned", url, response){
        super(message);
        __publicField(this, "url");
        __publicField(this, "response");
        this.url = url;
        this.response = response;
    }
}
 //# sourceMappingURL=PrismicError.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/findRef.js

const findRef = (refs, filter)=>{
    const ref = refs.find((ref2)=>filter(ref2));
    if (!ref) {
        throw new PrismicError("Ref could not be found.", void 0, void 0);
    }
    return ref;
};
 //# sourceMappingURL=findRef.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/findMasterRef.js

const findMasterRef = (refs)=>{
    return findRef(refs, (ref)=>ref.isMasterRef);
};
 //# sourceMappingURL=findMasterRef.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/findRefByID.js

const findRefByID = (refs, id)=>{
    return findRef(refs, (ref)=>ref.id === id);
};
 //# sourceMappingURL=findRefByID.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/findRefByLabel.js

const findRefByLabel = (refs, label)=>{
    return findRef(refs, (ref)=>ref.label === label);
};
 //# sourceMappingURL=findRefByLabel.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/cookie.js
const preview = "io.prismic.preview";
 //# sourceMappingURL=cookie.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/getPreviewCookie.js

const readValue = (value)=>{
    return value.replace(/%3B/g, ";");
};
const getPreviewCookie = (cookieJar)=>{
    const cookies = cookieJar.split("; ");
    let value;
    for (const cookie of cookies){
        const parts = cookie.split("=");
        const name = readValue(parts[0]).replace(/%3D/g, "=");
        if (name === preview) {
            value = readValue(parts.slice(1).join("="));
            break;
        }
    }
    return value;
};
 //# sourceMappingURL=getPreviewCookie.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/minifyGraphQLQuery.js
const minifyGraphQLQuery = (query)=>{
    return query.replace(/(\n| )*( |{|})(\n| )*/gm, (_chars, _spaces, brackets)=>brackets);
};
 //# sourceMappingURL=minifyGraphQLQuery.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/someTagsFilter.js


const someTagsFilter = (tags)=>{
    return filter.any("document.tags", castArray(tags));
};
 //# sourceMappingURL=someTagsFilter.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/typeFilter.js

const typeFilter = (documentType)=>{
    return filter.at("document.type", documentType);
};
 //# sourceMappingURL=typeFilter.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/errors/ForbiddenError.js

class ForbiddenError extends PrismicError {
}
 //# sourceMappingURL=ForbiddenError.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/errors/NotFoundError.js

class NotFoundError extends PrismicError {
}
 //# sourceMappingURL=NotFoundError.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/errors/ParsingError.js

class ParsingError extends PrismicError {
}
 //# sourceMappingURL=ParsingError.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/types/value/link.js
const LinkType = {
    Any: "Any",
    Document: "Document",
    Media: "Media",
    Web: "Web"
};
 //# sourceMappingURL=link.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/helpers/documentToLinkField.js

const documentToLinkField = (prismicDocument)=>{
    var _a;
    return {
        link_type: LinkType.Document,
        id: prismicDocument.id,
        uid: prismicDocument.uid || void 0,
        type: prismicDocument.type,
        tags: prismicDocument.tags,
        lang: prismicDocument.lang,
        url: prismicDocument.url == null ? void 0 : prismicDocument.url,
        slug: (_a = prismicDocument.slugs) == null ? void 0 : _a[0],
        // The REST API does not include a `data` property if the data
        // object is empty.
        //
        // A presence check for `prismicDocument.data` is done to
        // support partial documents. While `documentToLinkField` is
        // not typed to accept partial documents, passing a partial
        // document can happen in untyped projects.
        ...prismicDocument.data && Object.keys(prismicDocument.data).length > 0 ? {
            data: prismicDocument.data
        } : {}
    };
};
 //# sourceMappingURL=documentToLinkField.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/helpers/asLink.js


const asLink = (linkFieldOrDocument, ...configObjectOrTuple)=>{
    if (!linkFieldOrDocument) {
        return null;
    }
    const linkField = // prettier-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Bug in TypeScript 4.9: https://github.com/microsoft/TypeScript/issues/51501
    // TODO: Remove the `prettier-ignore` comment when this bug is fixed.
    "link_type" in linkFieldOrDocument ? linkFieldOrDocument : documentToLinkField(linkFieldOrDocument);
    const [configObjectOrLinkResolver] = configObjectOrTuple;
    let config;
    if (typeof configObjectOrLinkResolver === "function" || configObjectOrLinkResolver == null) {
        config = {
            linkResolver: configObjectOrLinkResolver
        };
    } else {
        config = {
            ...configObjectOrLinkResolver
        };
    }
    switch(linkField.link_type){
        case LinkType.Media:
        case LinkType.Web:
            return "url" in linkField ? linkField.url : null;
        case LinkType.Document:
            {
                if ("id" in linkField && config.linkResolver) {
                    const resolvedURL = config.linkResolver(linkField);
                    if (resolvedURL != null) {
                        return resolvedURL;
                    }
                }
                if ("url" in linkField && linkField.url) {
                    return linkField.url;
                }
                return null;
            }
        case LinkType.Any:
        default:
            return null;
    }
};
 //# sourceMappingURL=asLink.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/buildQueryURL.js


const RENAMED_PARAMS = {
    accessToken: "access_token"
};
const castOrderingToString = (ordering)=>{
    if (typeof ordering === "string") {
        if (false) {}
        return ordering;
    }
    return ordering.direction === "desc" ? `${ordering.field} desc` : ordering.field;
};
const buildQueryURL = (endpoint, args)=>{
    const { filters, predicates, ...params } = args;
    const url = new URL(`documents/search`, `${endpoint}/`);
    if (filters) {
        if (false) {}
        for (const filter of castArray(filters)){
            url.searchParams.append("q", `[${filter}]`);
        }
    }
    if (predicates) {
        for (const predicate of castArray(predicates)){
            url.searchParams.append("q", `[${predicate}]`);
        }
    }
    for(const k in params){
        const name = RENAMED_PARAMS[k] || k;
        let value = params[k];
        if (name === "orderings") {
            const scopedValue = params[name];
            if (scopedValue != null) {
                if (false) {}
                const v = castArray(scopedValue).map((ordering)=>castOrderingToString(ordering)).join(",");
                value = `[${v}]`;
            }
        } else if (name === "routes") {
            if (typeof params[name] === "object") {
                value = JSON.stringify(castArray(params[name]));
            }
        }
        if (value != null) {
            url.searchParams.set(name, castArray(value).join(","));
        }
    }
    return url.toString();
};
 //# sourceMappingURL=buildQueryURL.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/isRepositoryName.js
const isRepositoryName = (input)=>{
    return /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(input);
};
 //# sourceMappingURL=isRepositoryName.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/getRepositoryEndpoint.js


const getRepositoryEndpoint = (repositoryName)=>{
    if (isRepositoryName(repositoryName)) {
        return `https://${repositoryName}.cdn.prismic.io/api/v2`;
    } else {
        throw new PrismicError(`An invalid Prismic repository name was given: ${repositoryName}`, void 0, void 0);
    }
};
 //# sourceMappingURL=getRepositoryEndpoint.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/isRepositoryEndpoint.js
const isRepositoryEndpoint = (input)=>{
    try {
        new URL(input);
        return true;
    } catch  {
        return false;
    }
};
 //# sourceMappingURL=isRepositoryEndpoint.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/createClient.js
var createClient_defProp = Object.defineProperty;
var createClient_defNormalProp = (obj, key, value)=>key in obj ? createClient_defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var createClient_publicField = (obj, key, value)=>{
    createClient_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};





















const MAX_PAGE_SIZE = 100;
const REPOSITORY_CACHE_TTL = 5e3;
const GET_ALL_QUERY_DELAY = 500;
const DEFUALT_RETRY_AFTER_MS = 1e3;
var RefStateMode;
(function(RefStateMode2) {
    RefStateMode2["Master"] = "Master";
    RefStateMode2["ReleaseID"] = "ReleaseID";
    RefStateMode2["ReleaseLabel"] = "ReleaseLabel";
    RefStateMode2["Manual"] = "Manual";
})(RefStateMode || (RefStateMode = {}));
const createClient = (repositoryNameOrEndpoint, options)=>new Client(repositoryNameOrEndpoint, options);
class Client {
    /**
   * Creates a Prismic client that can be used to query a repository.
   *
   * If used in an environment where a global `fetch` function is unavailable,
   * such as Node.js, the `fetch` option must be provided as part of the
   * `options` parameter.
   *
   * @param repositoryNameOrEndpoint - The Prismic repository name or full Rest
   *   API V2 endpoint for the repository.
   * @param options - Configuration that determines how content will be queried
   *   from the Prismic repository.
   *
   * @returns A client that can query content from the repository.
   */ constructor(repositoryNameOrEndpoint, options = {}){
        /**
     * The Prismic REST API V2 endpoint for the repository (use
     * `prismic.getRepositoryEndpoint` for the default endpoint).
     */ createClient_publicField(this, "endpoint");
        /**
     * The secure token for accessing the API (only needed if your repository is
     * set to private).
     *
     * {@link https://user-guides.prismic.io/en/articles/1036153-generating-an-access-token}
     */ createClient_publicField(this, "accessToken");
        /**
     * A list of route resolver objects that define how a document's `url` field
     * is resolved.
     *
     * {@link https://prismic.io/docs/route-resolver}
     */ createClient_publicField(this, "routes");
        /**
     * The `brokenRoute` option allows you to define the route populated in the
     * `url` property for broken link or content relationship fields. A broken
     * link is a link or content relationship field whose linked document has been
     * unpublished or deleted.
     *
     * {@link https://prismic.io/docs/route-resolver}
     */ createClient_publicField(this, "brokenRoute");
        /**
     * The function used to make network requests to the Prismic REST API. In
     * environments where a global `fetch` function does not exist, such as
     * Node.js, this function must be provided.
     */ createClient_publicField(this, "fetchFn");
        createClient_publicField(this, "fetchOptions");
        /**
     * Default parameters that will be sent with each query. These parameters can
     * be overridden on each query if needed.
     */ createClient_publicField(this, "defaultParams");
        /**
     * The client's ref mode state. This determines which ref is used during
     * queries.
     */ createClient_publicField(this, "refState", {
            mode: RefStateMode.Master,
            autoPreviewsEnabled: true
        });
        /**
     * Cached repository value.
     */ createClient_publicField(this, "cachedRepository");
        /**
     * Timestamp at which the cached repository data is considered stale.
     */ createClient_publicField(this, "cachedRepositoryExpiration", 0);
        /**
     * Active `fetch()` jobs keyed by URL and AbortSignal (if it exists).
     */ createClient_publicField(this, "fetchJobs", {});
        if (isRepositoryEndpoint(repositoryNameOrEndpoint)) {
            if (false) {}
            this.endpoint = repositoryNameOrEndpoint;
        } else {
            this.endpoint = getRepositoryEndpoint(repositoryNameOrEndpoint);
        }
        this.accessToken = options.accessToken;
        this.routes = options.routes;
        this.brokenRoute = options.brokenRoute;
        this.fetchOptions = options.fetchOptions;
        this.defaultParams = options.defaultParams;
        if (options.ref) {
            this.queryContentFromRef(options.ref);
        }
        if (typeof options.fetch === "function") {
            this.fetchFn = options.fetch;
        } else if (typeof globalThis.fetch === "function") {
            this.fetchFn = globalThis.fetch;
        } else {
            throw new PrismicError("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.", void 0, void 0);
        }
        if (this.fetchFn === globalThis.fetch) {
            this.fetchFn = this.fetchFn.bind(globalThis);
        }
        this.graphQLFetch = this.graphQLFetch.bind(this);
    }
    /**
   * Enables the client to automatically query content from a preview session if
   * one is active in browser environments. This is enabled by default in the
   * browser.
   *
   * For server environments, use `enableAutoPreviewsFromReq`.
   *
   * @example
   *
   * ```ts
   * client.enableAutoPreviews();
   * ```
   *
   * @see enableAutoPreviewsFromReq
   */ enableAutoPreviews() {
        this.refState.autoPreviewsEnabled = true;
    }
    /**
   * Enables the client to automatically query content from a preview session if
   * one is active in server environments. This is disabled by default on the
   * server.
   *
   * For browser environments, use `enableAutoPreviews`.
   *
   * @example
   *
   * ```ts
   * // In an express app
   * app.get("/", function (req, res) {
   * 	client.enableAutoPreviewsFromReq(req);
   * });
   * ```
   *
   * @param req - An HTTP server request object containing the request's
   *   cookies.
   */ enableAutoPreviewsFromReq(req) {
        this.refState.httpRequest = req;
        this.refState.autoPreviewsEnabled = true;
    }
    /**
   * Disables the client from automatically querying content from a preview
   * session if one is active.
   *
   * Automatic preview content querying is enabled by default unless this method
   * is called.
   *
   * @example
   *
   * ```ts
   * client.disableAutoPreviews();
   * ```
   */ disableAutoPreviews() {
        this.refState.autoPreviewsEnabled = false;
    }
    /**
   * Queries content from the Prismic repository.
   *
   * @example
   *
   * ```ts
   * const response = await client.get();
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param params - Parameters to filter, sort, and paginate results.
   *
   * @returns A paginated response containing the result of the query.
   */ async get(params) {
        const url = await this.buildQueryURL(params);
        return await this.fetch(url, params);
    }
    /**
   * Queries content from the Prismic repository and returns only the first
   * result, if any.
   *
   * @example
   *
   * ```ts
   * const document = await client.getFirst();
   * ```
   *
   * @typeParam TDocument - Type of the Prismic document returned.
   *
   * @param params - Parameters to filter, sort, and paginate results. @returns
   *   The first result of the query, if any.
   */ async getFirst(params) {
        var _a;
        const actualParams = {
            ...params
        };
        if (!(params && params.page) && !(params == null ? void 0 : params.pageSize)) {
            actualParams.pageSize = ((_a = this.defaultParams) == null ? void 0 : _a.pageSize) ?? 1;
        }
        const url = await this.buildQueryURL(actualParams);
        const result = await this.fetch(url, params);
        const firstResult = result.results[0];
        if (firstResult) {
            return firstResult;
        }
        throw new NotFoundError("No documents were returned", url, void 0);
    }
    /**
   * **IMPORTANT**: Avoid using `dangerouslyGetAll` as it may be slower and
   * require more resources than other methods. Prefer using other methods that
   * filter by filters such as `getAllByType`.
   *
   * Queries content from the Prismic repository and returns all matching
   * content. If no filters are provided, all documents will be fetched.
   *
   * This method may make multiple network requests to query all matching
   * content.
   *
   * @example
   *
   * ```ts
   * const response = await client.dangerouslyGetAll();
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param params - Parameters to filter, sort, and paginate results.
   *
   * @returns A list of documents matching the query.
   */ async dangerouslyGetAll(params = {}) {
        var _a;
        const { limit = Infinity, ...actualParams } = params;
        const resolvedParams = {
            ...actualParams,
            pageSize: Math.min(limit, actualParams.pageSize || ((_a = this.defaultParams) == null ? void 0 : _a.pageSize) || MAX_PAGE_SIZE)
        };
        const documents = [];
        let latestResult;
        while((!latestResult || latestResult.next_page) && documents.length < limit){
            const page = latestResult ? latestResult.page + 1 : void 0;
            latestResult = await this.get({
                ...resolvedParams,
                page
            });
            documents.push(...latestResult.results);
            if (latestResult.next_page) {
                await new Promise((res)=>setTimeout(res, GET_ALL_QUERY_DELAY));
            }
        }
        return documents.slice(0, limit);
    }
    /**
   * Queries a document from the Prismic repository with a specific ID.
   *
   * @remarks
   * A document's UID is different from its ID. An ID is automatically generated
   * for all documents and is made available on its `id` property. A UID is
   * provided in the Prismic editor and is unique among all documents of its
   * custom type.
   *
   * @example
   *
   * ```ts
   * const document = await client.getByID("WW4bKScAAMAqmluX");
   * ```
   *
   * @typeParam TDocument- Type of the Prismic document returned.
   *
   * @param id - ID of the document.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns The document with an ID matching the `id` parameter, if a matching
   *   document exists.
   */ async getByID(id, params) {
        return await this.getFirst(appendFilters(params, filter.at("document.id", id)));
    }
    /**
   * Queries documents from the Prismic repository with specific IDs.
   *
   * @remarks
   * A document's UID is different from its ID. An ID is automatically generated
   * for all documents and is made available on its `id` property. A UID is
   * provided in the Prismic editor and is unique among all documents of its
   * custom type.
   *
   * @example
   *
   * ```ts
   * const response = await client.getByIDs([
   * 	"WW4bKScAAMAqmluX",
   * 	"U1kTRgEAAC8A5ldS",
   * ]);
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param ids - A list of document IDs.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A paginated response containing documents with IDs matching the
   *   `ids` parameter.
   */ async getByIDs(ids, params) {
        return await this.get(appendFilters(params, filter.in("document.id", ids)));
    }
    /**
   * Queries all documents from the Prismic repository with specific IDs.
   *
   * This method may make multiple network requests to query all matching
   * content.
   *
   * @remarks
   * A document's UID is different from its ID. An ID is automatically generated
   * for all documents and is made available on its `id` property. A UID is
   * provided in the Prismic editor and is unique among all documents of its
   * custom type.
   *
   * @example
   *
   * ```ts
   * const response = await client.getAllByIDs([
   * 	"WW4bKScAAMAqmluX",
   * 	"U1kTRgEAAC8A5ldS",
   * ]);
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param ids - A list of document IDs.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A list of documents with IDs matching the `ids` parameter.
   */ async getAllByIDs(ids, params) {
        return await this.dangerouslyGetAll(appendFilters(params, filter.in("document.id", ids)));
    }
    /**
   * Queries a document from the Prismic repository with a specific UID and
   * custom type.
   *
   * @remarks
   * A document's UID is different from its ID. An ID is automatically generated
   * for all documents and is made available on its `id` property. A UID is
   * provided in the Prismic editor and is unique among all documents of its
   * custom type.
   *
   * @example
   *
   * ```ts
   * const document = await client.getByUID("blog_post", "my-first-post");
   * ```
   *
   * @typeParam TDocument - Type of the Prismic document returned.
   *
   * @param documentType - The API ID of the document's custom type.
   * @param uid - UID of the document.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns The document with a UID matching the `uid` parameter, if a
   *   matching document exists.
   */ async getByUID(documentType, uid, params) {
        return await this.getFirst(appendFilters(params, [
            typeFilter(documentType),
            filter.at(`my.${documentType}.uid`, uid)
        ]));
    }
    /**
   * Queries document from the Prismic repository with specific UIDs and Custom
   * Type.
   *
   * @remarks
   * A document's UID is different from its ID. An ID is automatically generated
   * for all documents and is made available on its `id` property. A UID is
   * provided in the Prismic editor and is unique among all documents of its
   * custom type.
   *
   * @example
   *
   * ```ts
   * const document = await client.getByUIDs("blog_post", [
   * 	"my-first-post",
   * 	"my-second-post",
   * ]);
   * ```
   *
   * @typeParam TDocument - Type of the Prismic document returned.
   *
   * @param documentType - The API ID of the document's custom type.
   * @param uids - A list of document UIDs.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A paginated response containing documents with UIDs matching the
   *   `uids` parameter.
   */ async getByUIDs(documentType, uids, params) {
        return await this.get(appendFilters(params, [
            typeFilter(documentType),
            filter.in(`my.${documentType}.uid`, uids)
        ]));
    }
    /**
   * Queries all documents from the Prismic repository with specific UIDs and
   * custom type.
   *
   * This method may make multiple network requests to query all matching
   * content.
   *
   * @remarks
   * A document's UID is different from its ID. An ID is automatically generated
   * for all documents and is made available on its `id` property. A UID is
   * provided in the Prismic editor and is unique among all documents of its
   * custom type.
   *
   * @example
   *
   * ```ts
   * const response = await client.getAllByUIDs([
   * 	"my-first-post",
   * 	"my-second-post",
   * ]);
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param documentType - The API ID of the document's custom type.
   * @param uids - A list of document UIDs.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A list of documents with UIDs matching the `uids` parameter.
   */ async getAllByUIDs(documentType, uids, params) {
        return await this.dangerouslyGetAll(appendFilters(params, [
            typeFilter(documentType),
            filter.in(`my.${documentType}.uid`, uids)
        ]));
    }
    /**
   * Queries a singleton document from the Prismic repository for a specific
   * custom type.
   *
   * @remarks
   * A singleton document is one that is configured in Prismic to only allow one
   * instance. For example, a repository may be configured to contain just one
   * Settings document. This is in contrast to a repeatable custom type which
   * allows multiple instances of itself.
   *
   * @example
   *
   * ```ts
   * const document = await client.getSingle("settings");
   * ```
   *
   * @typeParam TDocument - Type of the Prismic document returned.
   *
   * @param documentType - The API ID of the singleton custom type.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns The singleton document for the custom type, if a matching document
   *   exists.
   */ async getSingle(documentType, params) {
        return await this.getFirst(appendFilters(params, typeFilter(documentType)));
    }
    /**
   * Queries documents from the Prismic repository for a specific custom type.
   *
   * Use `getAllByType` instead if you need to query all documents for a
   * specific custom type.
   *
   * @example
   *
   * ```ts
   * const response = await client.getByType("blog_post");
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param documentType - The API ID of the custom type.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A paginated response containing documents of the custom type.
   */ async getByType(documentType, params) {
        return await this.get(appendFilters(params, typeFilter(documentType)));
    }
    /**
   * Queries all documents from the Prismic repository for a specific Custom
   * Type.
   *
   * This method may make multiple network requests to query all matching
   * content.
   *
   * @example
   *
   * ```ts
   * const response = await client.getByType("blog_post");
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param documentType - The API ID of the custom type.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A list of all documents of the custom type.
   */ async getAllByType(documentType, params) {
        return await this.dangerouslyGetAll(appendFilters(params, typeFilter(documentType)));
    }
    /**
   * Queries documents from the Prismic repository with a specific tag.
   *
   * Use `getAllByTag` instead if you need to query all documents with a
   * specific tag.
   *
   * @example
   *
   * ```ts
   * const response = await client.getByTag("food");
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param tag - The tag that must be included on a document.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A paginated response containing documents with the tag.
   */ async getByTag(tag, params) {
        return await this.get(appendFilters(params, someTagsFilter(tag)));
    }
    /**
   * Queries all documents from the Prismic repository with a specific tag.
   *
   * This method may make multiple network requests to query all matching
   * content.
   *
   * @example
   *
   * ```ts
   * const response = await client.getAllByTag("food");
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param tag - The tag that must be included on a document.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A list of all documents with the tag.
   */ async getAllByTag(tag, params) {
        return await this.dangerouslyGetAll(appendFilters(params, someTagsFilter(tag)));
    }
    /**
   * Queries documents from the Prismic repository with specific tags. A
   * document must be tagged with all of the queried tags to be included.
   *
   * @example
   *
   * ```ts
   * const response = await client.getByEveryTag(["food", "fruit"]);
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param tags - A list of tags that must be included on a document.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A paginated response containing documents with the tags.
   */ async getByEveryTag(tags, params) {
        return await this.get(appendFilters(params, everyTagFilter(tags)));
    }
    /**
   * Queries documents from the Prismic repository with specific tags. A
   * document must be tagged with all of the queried tags to be included.
   *
   * This method may make multiple network requests to query all matching
   * content.
   *
   * @example
   *
   * ```ts
   * const response = await client.getAllByEveryTag(["food", "fruit"]);
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param tags - A list of tags that must be included on a document.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A list of all documents with the tags.
   */ async getAllByEveryTag(tags, params) {
        return await this.dangerouslyGetAll(appendFilters(params, everyTagFilter(tags)));
    }
    /**
   * Queries documents from the Prismic repository with specific tags. A
   * document must be tagged with at least one of the queried tags to be
   * included.
   *
   * @example
   *
   * ```ts
   * const response = await client.getByEveryTag(["food", "fruit"]);
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param tags - A list of tags that must be included on a document.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A paginated response containing documents with at least one of the
   *   tags.
   */ async getBySomeTags(tags, params) {
        return await this.get(appendFilters(params, someTagsFilter(tags)));
    }
    /**
   * Queries documents from the Prismic repository with specific tags. A
   * document must be tagged with at least one of the queried tags to be
   * included.
   *
   * This method may make multiple network requests to query all matching
   * content.
   *
   * @example
   *
   * ```ts
   * const response = await client.getAllBySomeTags(["food", "fruit"]);
   * ```
   *
   * @typeParam TDocument - Type of Prismic documents returned.
   *
   * @param tags - A list of tags that must be included on a document.
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A list of all documents with at least one of the tags.
   */ async getAllBySomeTags(tags, params) {
        return await this.dangerouslyGetAll(appendFilters(params, someTagsFilter(tags)));
    }
    /**
   * Returns metadata about the Prismic repository, such as its refs, releases,
   * and custom types.
   *
   * @returns Repository metadata.
   */ async getRepository(params) {
        const url = new URL(this.endpoint);
        if (this.accessToken) {
            url.searchParams.set("access_token", this.accessToken);
        }
        return await this.fetch(url.toString(), params);
    }
    /**
   * Returns a list of all refs for the Prismic repository.
   *
   * Refs are used to identify which version of the repository's content should
   * be queried. All repositories will have at least one ref pointing to the
   * latest published content called the "master ref".
   *
   * @returns A list of all refs for the Prismic repository.
   */ async getRefs(params) {
        const repository = await this.getRepository(params);
        return repository.refs;
    }
    /**
   * Returns a ref for the Prismic repository with a matching ID.
   *
   * @param id - ID of the ref.
   *
   * @returns The ref with a matching ID, if it exists.
   */ async getRefByID(id, params) {
        const refs = await this.getRefs(params);
        return findRefByID(refs, id);
    }
    /**
   * Returns a ref for the Prismic repository with a matching label.
   *
   * @param label - Label of the ref.
   *
   * @returns The ref with a matching label, if it exists.
   */ async getRefByLabel(label, params) {
        const refs = await this.getRefs(params);
        return findRefByLabel(refs, label);
    }
    /**
   * Returns the master ref for the Prismic repository. The master ref points to
   * the repository's latest published content.
   *
   * @returns The repository's master ref.
   */ async getMasterRef(params) {
        const refs = await this.getRefs(params);
        return findMasterRef(refs);
    }
    /**
   * Returns a list of all Releases for the Prismic repository. Releases are
   * used to group content changes before publishing.
   *
   * @returns A list of all Releases for the Prismic repository.
   */ async getReleases(params) {
        const refs = await this.getRefs(params);
        return refs.filter((ref)=>!ref.isMasterRef);
    }
    /**
   * Returns a Release for the Prismic repository with a matching ID.
   *
   * @param id - ID of the Release.
   *
   * @returns The Release with a matching ID, if it exists.
   */ async getReleaseByID(id, params) {
        const releases = await this.getReleases(params);
        return findRefByID(releases, id);
    }
    /**
   * Returns a Release for the Prismic repository with a matching label.
   *
   * @param label - Label of the ref.
   *
   * @returns The ref with a matching label, if it exists.
   */ async getReleaseByLabel(label, params) {
        const releases = await this.getReleases(params);
        return findRefByLabel(releases, label);
    }
    /**
   * Returns a list of all tags used in the Prismic repository.
   *
   * @returns A list of all tags used in the repository.
   */ async getTags(params) {
        try {
            const tagsForm = await this.getCachedRepositoryForm("tags", params);
            const url = new URL(tagsForm.action);
            if (this.accessToken) {
                url.searchParams.set("access_token", this.accessToken);
            }
            return await this.fetch(url.toString(), params);
        } catch  {
            const repository = await this.getRepository(params);
            return repository.tags;
        }
    }
    /**
   * Builds a URL used to query content from the Prismic repository.
   *
   * @param params - Parameters to filter, sort, and paginate the results.
   *
   * @returns A URL string that can be requested to query content.
   */ async buildQueryURL({ signal, fetchOptions, ...params } = {}) {
        const ref = params.ref || await this.getResolvedRefString({
            signal,
            fetchOptions
        });
        const integrationFieldsRef = params.integrationFieldsRef || (await this.getCachedRepository({
            signal,
            fetchOptions
        })).integrationFieldsRef || void 0;
        return buildQueryURL(this.endpoint, {
            ...this.defaultParams,
            ...params,
            ref,
            integrationFieldsRef,
            routes: params.routes || this.routes,
            brokenRoute: params.brokenRoute || this.brokenRoute,
            accessToken: params.accessToken || this.accessToken
        });
    }
    /**
   * Determines the URL for a previewed document during an active preview
   * session. The result of this method should be used to redirect the user to
   * the document's URL.
   *
   * @example
   *
   * ```ts
   * 	const url = client.resolvePreviewURL({
   * 	linkResolver: (document) => `/${document.uid}`
   * 	defaultURL: '/'
   * 	})
   * ```
   *
   * @param args - Arguments to configure the URL resolving.
   *
   * @returns The URL for the previewed document during an active preview
   *   session. The user should be redirected to this URL.
   */ async resolvePreviewURL(args) {
        var _a, _b;
        let documentID = args.documentID;
        let previewToken = args.previewToken;
        if (typeof globalThis.location !== "undefined") {
            const searchParams = new URLSearchParams(globalThis.location.search);
            documentID = documentID || searchParams.get("documentId");
            previewToken = previewToken || searchParams.get("token");
        } else if (this.refState.httpRequest) {
            if ("query" in this.refState.httpRequest) {
                documentID = documentID || ((_a = this.refState.httpRequest.query) == null ? void 0 : _a.documentId);
                previewToken = previewToken || ((_b = this.refState.httpRequest.query) == null ? void 0 : _b.token);
            } else if ("url" in this.refState.httpRequest && this.refState.httpRequest.url) {
                const searchParams = new URL(this.refState.httpRequest.url, "missing-host://").searchParams;
                documentID = documentID || searchParams.get("documentId");
                previewToken = previewToken || searchParams.get("token");
            }
        }
        if (documentID != null && previewToken != null) {
            const document = await this.getByID(documentID, {
                ref: previewToken,
                lang: "*",
                signal: args.signal,
                fetchOptions: args.fetchOptions
            });
            const url = asLink(document, {
                linkResolver: args.linkResolver
            });
            if (typeof url === "string") {
                return url;
            }
        }
        return args.defaultURL;
    }
    /**
   * Configures the client to query the latest published content for all future
   * queries.
   *
   * If the `ref` parameter is provided during a query, it takes priority for
   * that query.
   *
   * @example
   *
   * ```ts
   * await client.queryLatestContent();
   * const document = await client.getByID("WW4bKScAAMAqmluX");
   * ```
   */ queryLatestContent() {
        this.refState.mode = RefStateMode.Master;
    }
    /**
   * Configures the client to query content from a specific Release identified
   * by its ID for all future queries.
   *
   * If the `ref` parameter is provided during a query, it takes priority for
   * that query.
   *
   * @example
   *
   * ```ts
   * await client.queryContentFromReleaseByID("YLB7OBAAACMA7Cpa");
   * const document = await client.getByID("WW4bKScAAMAqmluX");
   * ```
   *
   * @param releaseID - The ID of the Release.
   */ queryContentFromReleaseByID(releaseID) {
        this.refState = {
            ...this.refState,
            mode: RefStateMode.ReleaseID,
            releaseID
        };
    }
    /**
   * Configures the client to query content from a specific Release identified
   * by its label for all future queries.
   *
   * If the `ref` parameter is provided during a query, it takes priority for
   * that query.
   *
   * @example
   *
   * ```ts
   * await client.queryContentFromReleaseByLabel("My Release");
   * const document = await client.getByID("WW4bKScAAMAqmluX");
   * ```
   *
   * @param releaseLabel - The label of the Release.
   */ queryContentFromReleaseByLabel(releaseLabel) {
        this.refState = {
            ...this.refState,
            mode: RefStateMode.ReleaseLabel,
            releaseLabel
        };
    }
    /**
   * Configures the client to query content from a specific ref. The ref can be
   * provided as a string or a function.
   *
   * If a function is provided, the ref is fetched lazily before each query. The
   * function may also be asynchronous.
   *
   * @example
   *
   * ```ts
   * await client.queryContentFromRef("my-ref");
   * const document = await client.getByID("WW4bKScAAMAqmluX");
   * ```
   *
   * @param ref - The ref or a function that returns the ref from which to query
   *   content.
   */ queryContentFromRef(ref) {
        this.refState = {
            ...this.refState,
            mode: RefStateMode.Manual,
            ref
        };
    }
    /**
   * A `fetch()` function to be used with GraphQL clients configured for
   * Prismic's GraphQL API. It automatically applies the necessary `prismic-ref`
   * and Authorization headers. Queries will automatically be minified by
   * removing whitespace where possible.
   *
   * @example
   *
   * ```ts
   * const graphQLClient = new ApolloClient({
   * 	link: new HttpLink({
   * 		uri: prismic.getGraphQLEndpoint(repositoryName),
   * 		// Provide `client.graphQLFetch` as the fetch implementation.
   * 		fetch: client.graphQLFetch,
   * 		// Using GET is required.
   * 		useGETForQueries: true,
   * 	}),
   * 	cache: new InMemoryCache(),
   * });
   * ```
   *
   * @param input - The `fetch()` `input` parameter. Only strings are supported.
   * @param init - The `fetch()` `init` parameter. Only plain objects are
   *   supported.
   *
   * @returns The `fetch()` Response for the request.
   *
   * @experimental
   */ async graphQLFetch(input, init) {
        const cachedRepository = await this.getCachedRepository();
        const ref = await this.getResolvedRefString();
        const unsanitizedHeaders = {
            "Prismic-ref": ref,
            Authorization: this.accessToken ? `Token ${this.accessToken}` : "",
            // Asserting `init.headers` is a Record since popular GraphQL
            // libraries pass this as a Record. Header objects as input
            // are unsupported.
            ...init ? init.headers : {}
        };
        if (cachedRepository.integrationFieldsRef) {
            unsanitizedHeaders["Prismic-integration-field-ref"] = cachedRepository.integrationFieldsRef;
        }
        const headers = {};
        for(const key in unsanitizedHeaders){
            if (unsanitizedHeaders[key]) {
                headers[key.toLowerCase()] = unsanitizedHeaders[key];
            }
        }
        const url = new URL(// Asserting `input` is a string since popular GraphQL
        // libraries pass this as a string. Request objects as
        // input are unsupported.
        input);
        url.searchParams.set("ref", ref);
        const query = url.searchParams.get("query");
        if (query) {
            url.searchParams.set("query", // Compress the GraphQL query (if it exists) by
            // removing whitespace. This is done to
            // optimize the query size and avoid
            // hitting the upper limit of GET requests
            // (2048 characters).
            minifyGraphQLQuery(query));
        }
        return await this.fetchFn(url.toString(), {
            ...init,
            headers
        });
    }
    /**
   * Returns a cached version of `getRepository` with a TTL.
   *
   * @returns Cached repository metadata.
   */ async getCachedRepository(params) {
        if (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) {
            this.cachedRepositoryExpiration = Date.now() + REPOSITORY_CACHE_TTL;
            this.cachedRepository = await this.getRepository(params);
        }
        return this.cachedRepository;
    }
    /**
   * Returns a cached Prismic repository form. Forms are used to determine API
   * endpoints for types of repository data.
   *
   * @param name - Name of the form.
   *
   * @returns The repository form.
   *
   * @throws If a matching form cannot be found.
   */ async getCachedRepositoryForm(name, params) {
        const cachedRepository = await this.getCachedRepository(params);
        const form = cachedRepository.forms[name];
        if (!form) {
            throw new PrismicError(`Form with name "${name}" could not be found`, void 0, void 0);
        }
        return form;
    }
    /**
   * Returns the ref needed to query based on the client's current state. This
   * method may make a network request to fetch a ref or resolve the user's ref
   * thunk.
   *
   * If auto previews are enabled, the preview ref takes priority if available.
   *
   * The following strategies are used depending on the client's state:
   *
   * - If the user called `queryLatestContent`: Use the repository's master ref.
   *   The ref is cached for 5 seconds. After 5 seconds, a new master ref is
   *   fetched.
   * - If the user called `queryContentFromReleaseByID`: Use the release's ref.
   *   The ref is cached for 5 seconds. After 5 seconds, a new ref for the
   *   release is fetched.
   * - If the user called `queryContentFromReleaseByLabel`: Use the release's ref.
   *   The ref is cached for 5 seconds. After 5 seconds, a new ref for the
   *   release is fetched.
   * - If the user called `queryContentFromRef`: Use the provided ref. Fall back
   *   to the master ref if the ref is not a string.
   *
   * @returns The ref to use during a query.
   */ async getResolvedRefString(params) {
        var _a, _b;
        if (this.refState.autoPreviewsEnabled) {
            let previewRef;
            let cookieJar;
            if ((_a = this.refState.httpRequest) == null ? void 0 : _a.headers) {
                if ("get" in this.refState.httpRequest.headers && typeof this.refState.httpRequest.headers.get === "function") {
                    cookieJar = this.refState.httpRequest.headers.get("cookie");
                } else if ("cookie" in this.refState.httpRequest.headers) {
                    cookieJar = this.refState.httpRequest.headers.cookie;
                }
            } else if ((_b = globalThis.document) == null ? void 0 : _b.cookie) {
                cookieJar = globalThis.document.cookie;
            }
            if (cookieJar) {
                previewRef = getPreviewCookie(cookieJar);
            }
            if (previewRef) {
                return previewRef;
            }
        }
        const cachedRepository = await this.getCachedRepository(params);
        const refModeType = this.refState.mode;
        if (refModeType === RefStateMode.ReleaseID) {
            return findRefByID(cachedRepository.refs, this.refState.releaseID).ref;
        } else if (refModeType === RefStateMode.ReleaseLabel) {
            return findRefByLabel(cachedRepository.refs, this.refState.releaseLabel).ref;
        } else if (refModeType === RefStateMode.Manual) {
            const res = await castThunk(this.refState.ref)();
            if (typeof res === "string") {
                return res;
            }
        }
        return findMasterRef(cachedRepository.refs).ref;
    }
    /**
   * Performs a network request using the configured `fetch` function. It
   * assumes all successful responses will have a JSON content type. It also
   * normalizes unsuccessful network requests.
   *
   * @typeParam T - The JSON response.
   *
   * @param url - URL to the resource to fetch.
   * @param params - Prismic REST API parameters for the network request.
   *
   * @returns The JSON response from the network request.
   */ async fetch(url, params = {}) {
        var _a, _b, _c, _d;
        const requestInit = {
            ...this.fetchOptions,
            ...params.fetchOptions,
            headers: {
                ...(_a = this.fetchOptions) == null ? void 0 : _a.headers,
                ...(_b = params.fetchOptions) == null ? void 0 : _b.headers
            },
            signal: ((_c = params.fetchOptions) == null ? void 0 : _c.signal) || params.signal || ((_d = this.fetchOptions) == null ? void 0 : _d.signal)
        };
        let job;
        if (this.fetchJobs[url] && this.fetchJobs[url].has(requestInit.signal)) {
            job = this.fetchJobs[url].get(requestInit.signal);
        } else {
            this.fetchJobs[url] = this.fetchJobs[url] || /* @__PURE__ */ new Map();
            job = this.fetchFn(url, requestInit).then(async (res2)=>{
                let json = void 0;
                try {
                    json = await res2.json();
                } catch  {}
                return {
                    status: res2.status,
                    headers: res2.headers,
                    json
                };
            }).finally(()=>{
                this.fetchJobs[url].delete(requestInit.signal);
                if (this.fetchJobs[url].size === 0) {
                    delete this.fetchJobs[url];
                }
            });
            this.fetchJobs[url].set(requestInit.signal, job);
        }
        const res = await job;
        if (res.status !== 404 && res.json == null) {
            throw new PrismicError(void 0, url, res.json);
        }
        switch(res.status){
            case 200:
                {
                    return res.json;
                }
            case 400:
                {
                    throw new ParsingError(res.json.message, url, res.json);
                }
            case 401:
            case 403:
                {
                    throw new ForbiddenError("error" in res.json ? res.json.error : res.json.message, url, res.json);
                }
            case 404:
                {
                    throw new NotFoundError(`Prismic repository not found. Check that "${this.endpoint}" is pointing to the correct repository.`, url, void 0);
                }
            case 429:
                {
                    const parsedRetryAfter = Number(res.headers.get("retry-after"));
                    const delay = Number.isNaN(parsedRetryAfter) ? DEFUALT_RETRY_AFTER_MS : parsedRetryAfter;
                    return await new Promise((resolve, reject)=>{
                        setTimeout(async ()=>{
                            try {
                                resolve(await this.fetch(url, params));
                            } catch (error) {
                                reject(error);
                            }
                        }, delay);
                    });
                }
        }
        throw new PrismicError(void 0, url, res.json);
    }
}
 //# sourceMappingURL=createClient.js.map


/***/ })

};
;