(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__a38424._.js", {

"[project]/hooks/useDisableScrollBounce.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useDisableScrollBounce": (()=>useDisableScrollBounce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useDisableScrollBounce = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDisableScrollBounce.useEffect": ()=>{
            document.body.classList.add("overflow-hidden", "overscroll-none");
            return ({
                "useDisableScrollBounce.useEffect": ()=>{
                    document.body.classList.remove("overflow-hidden", "overscroll-none");
                }
            })["useDisableScrollBounce.useEffect"];
        }
    }["useDisableScrollBounce.useEffect"], []);
};
_s(useDisableScrollBounce, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/types/canvas.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CanvasMode": (()=>CanvasMode),
    "LayerType": (()=>LayerType),
    "Side": (()=>Side)
});
var LayerType = /*#__PURE__*/ function(LayerType) {
    LayerType[LayerType["Text"] = 0] = "Text";
    LayerType[LayerType["Note"] = 1] = "Note";
    LayerType[LayerType["Rectangle"] = 2] = "Rectangle";
    LayerType[LayerType["Ellipse"] = 3] = "Ellipse";
    LayerType[LayerType["Path"] = 4] = "Path";
    return LayerType;
}({});
var Side = /*#__PURE__*/ function(Side) {
    Side[Side["Top"] = 1] = "Top";
    Side[Side["Bottom"] = 2] = "Bottom";
    Side[Side["Left"] = 4] = "Left";
    Side[Side["Right"] = 8] = "Right";
    return Side;
}({});
var CanvasMode = /*#__PURE__*/ function(CanvasMode) {
    CanvasMode[CanvasMode["None"] = 0] = "None";
    CanvasMode[CanvasMode["Pressing"] = 1] = "Pressing";
    CanvasMode[CanvasMode["SelectionNet"] = 2] = "SelectionNet";
    CanvasMode[CanvasMode["Translating"] = 3] = "Translating";
    CanvasMode[CanvasMode["Inserting"] = 4] = "Inserting";
    CanvasMode[CanvasMode["Resizing"] = 5] = "Resizing";
    CanvasMode[CanvasMode["Pencil"] = 6] = "Pencil";
    return CanvasMode;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn),
    "colorToCss": (()=>colorToCss),
    "connectionIdToColor": (()=>connectionIdToColor),
    "findIntersectingLayersWithRectangle": (()=>findIntersectingLayersWithRectangle),
    "getContrastingTextColor": (()=>getContrastingTextColor),
    "getSvgPathFromStroke": (()=>getSvgPathFromStroke),
    "penPointsToPathLayer": (()=>penPointsToPathLayer),
    "pointerEventToCanvasPoint": (()=>pointerEventToCanvasPoint),
    "resizeBounds": (()=>resizeBounds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/types/canvas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
const COLORS = [
    "#DC2626",
    "#D97706",
    "#059669",
    "#7C3AED",
    "#DB2777"
];
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const connectionIdToColor = (connectionId)=>{
    return COLORS[connectionId % COLORS.length];
};
const pointerEventToCanvasPoint = (e, camera)=>{
    return {
        x: Math.round(e.clientX) - camera.x,
        y: Math.round(e.clientY) - camera.y
    };
};
function colorToCss(color) {
    return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
}
function resizeBounds(bounds, corner, point) {
    const result = {
        x: bounds.x,
        y: bounds.y,
        width: bounds.width,
        height: bounds.height
    };
    if ((corner & __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Left) === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Left) {
        //if we drag leftwards x will decrease and width will increase
        //it will insure that the x is the leftmost point
        //because the resize handles are calculated based on x and y and width and height
        //where x is the leftmost point and y is the topmost point
        result.x = Math.min(point.x, bounds.x + bounds.width);
        // width is the difference between the right boundary and the new x
        result.width = Math.abs(bounds.x + bounds.width - point.x);
    }
    if ((corner & __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Right) === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Right) {
        result.x = Math.min(point.x, bounds.x);
        result.width = Math.abs(point.x - bounds.x);
    }
    if ((corner & __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Top) === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Top) {
        result.y = Math.min(point.y, bounds.y + bounds.height);
        result.height = Math.abs(bounds.y + bounds.height - point.y);
    }
    if ((corner & __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Bottom) === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Bottom) {
        result.y = Math.min(point.y, bounds.y);
        result.height = Math.abs(point.y - bounds.y);
    }
    return result;
}
function findIntersectingLayersWithRectangle(layerIds, layers, a, b) {
    const rect = {
        x: Math.min(a.x, b.x),
        y: Math.min(a.y, b.y),
        width: Math.abs(a.x - b.x),
        height: Math.abs(a.y - b.y)
    };
    const ids = [];
    for (const layerId of layerIds){
        const layer = layers.get(layerId);
        if (layer == null) {
            continue;
        }
        const { x, y, height, width } = layer;
        if (rect.x + rect.width > x && rect.x < x + width && rect.y + rect.height > y && rect.y < y + height) {
            ids.push(layerId);
        }
    }
    return ids;
}
function getContrastingTextColor(color) {
    const luminance = 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
    return luminance > 182 ? "black" : "white";
}
function penPointsToPathLayer(points, color) {
    if (points.length < 2) {
        throw new Error("Cannot transform path with less than 2 points");
    }
    let left = Number.POSITIVE_INFINITY;
    let top = Number.POSITIVE_INFINITY;
    let right = Number.NEGATIVE_INFINITY;
    let bottom = Number.NEGATIVE_INFINITY;
    for (const point of points){
        const [x, y] = point;
        if (left > x) {
            left = x;
        }
        if (top > y) {
            top = y;
        }
        if (right < x) {
            right = x;
        }
        if (bottom < y) {
            bottom = y;
        }
    }
    return {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Path,
        x: left,
        y: top,
        width: right - left,
        height: bottom - top,
        fill: color,
        points: points.map(([x, y, pressure])=>[
                x - left,
                y - top,
                pressure
            ])
    };
}
function getSvgPathFromStroke(stroke) {
    if (!stroke.length) return "";
    const d = stroke.reduce((acc, [x0, y0], i, arr)=>{
        const [x1, y1] = arr[(i + 1) % arr.length];
        acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
        return acc;
    }, [
        "M",
        ...stroke[0],
        "Q"
    ]);
    d.push("Z");
    return d.join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/cursor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Cursor": (()=>Cursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOtherSuspense__as__useOther$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useOtherSuspense as useOther>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-client] (ecmascript) <export default as MousePointer2>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const Cursor = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(({ connectionId })=>{
    _s();
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOtherSuspense__as__useOther$3e$__["useOther"])(connectionId, {
        "Cursor.useOther[info]": (user)=>user?.info
    }["Cursor.useOther[info]"]);
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOtherSuspense__as__useOther$3e$__["useOther"])(connectionId, {
        "Cursor.useOther[cursor]": (user)=>user.presence.cursor
    }["Cursor.useOther[cursor]"]);
    const name = info?.name || "Teammate";
    if (!cursor) return null;
    const { x, y } = cursor;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
        style: {
            transform: `translateX(${x}px) translateY(${y}px)`
        },
        height: 50,
        width: name.length * 10 + 24,
        className: "relative drop-shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__["MousePointer2"], {
                className: "h-5 w-5",
                style: {
                    fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectionIdToColor"])(connectionId),
                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectionIdToColor"])(connectionId)
                }
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/cursor.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-5 px-1.5 py-0.5 rounded-md text-xs text-white font-semibold",
                style: {
                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectionIdToColor"])(connectionId)
                },
                children: name
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/cursor.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/board/[boardId]/_components/cursor.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}, "mfqaj+bM9xR8lDFiZ8bkJFe7rC0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOtherSuspense__as__useOther$3e$__["useOther"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOtherSuspense__as__useOther$3e$__["useOther"]
    ];
})), "mfqaj+bM9xR8lDFiZ8bkJFe7rC0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOtherSuspense__as__useOther$3e$__["useOther"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOtherSuspense__as__useOther$3e$__["useOther"]
    ];
});
_c1 = Cursor;
// TODO: check dependency array
Cursor.displayName = "Cursor";
var _c, _c1;
__turbopack_refresh__.register(_c, "Cursor$memo");
__turbopack_refresh__.register(_c1, "Cursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/path.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Path": (()=>Path)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$perfect$2d$freehand$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/perfect-freehand/dist/esm/index.mjs [app-client] (ecmascript)");
;
;
;
const Path = ({ x, y, points, fill, onPointerDown, stroke })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        className: "drop-shadow-md",
        onPointerDown: onPointerDown,
        d: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSvgPathFromStroke"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$perfect$2d$freehand$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(points, {
            size: 8,
            thinning: 0.5,
            smoothing: 0.5,
            streamline: 0.5
        })),
        style: {
            transform: `translate(${x}px, ${y}px)`
        },
        x: 0,
        y: 0,
        fill: fill,
        stroke: stroke,
        strokeWidth: 1
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/path.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_c = Path;
var _c;
__turbopack_refresh__.register(_c, "Path");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/cursorPresence.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CursorPresence": (()=>CursorPresence)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$cursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/cursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$path$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/path.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useOthersConnectionIdsSuspense__as__useOthersConnectionIds$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export useOthersConnectionIdsSuspense as useOthersConnectionIds>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOthersMappedSuspense__as__useOthersMapped$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useOthersMappedSuspense as useOthersMapped>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@liveblocks/core/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const Cursors = ()=>{
    _s();
    const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useOthersConnectionIdsSuspense__as__useOthersConnectionIds$3e$__["useOthersConnectionIds"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: ids.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$cursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cursor"], {
                connectionId: id
            }, id, false, {
                fileName: "[project]/app/board/[boardId]/_components/cursorPresence.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false);
};
_s(Cursors, "/8NrLZbAJ4Gaiz5ORkXbsSdd1qM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useOthersConnectionIdsSuspense__as__useOthersConnectionIds$3e$__["useOthersConnectionIds"]
    ];
});
_c = Cursors;
const Draft = ()=>{
    _s1();
    const others = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOthersMappedSuspense__as__useOthersMapped$3e$__["useOthersMapped"])({
        "Draft.useOthersMapped[others]": (other)=>({
                pencilDraft: other.presence.pencilDraft,
                pencilColor: other.presence.pencilColor
            })
    }["Draft.useOthersMapped[others]"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: others.map(([key, other])=>{
            if (other.pencilDraft) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$path$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"], {
                    x: 0,
                    y: 0,
                    points: other.pencilDraft,
                    fill: other.pencilColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToCss"])(other.pencilColor) : "#000"
                }, key, false, {
                    fileName: "[project]/app/board/[boardId]/_components/cursorPresence.tsx",
                    lineNumber: 36,
                    columnNumber: 13
                }, this);
            }
            return null;
        })
    }, void 0, false);
};
_s1(Draft, "vcfNhsei/g6rUF7HjpLCU+ZmO9o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOthersMappedSuspense__as__useOthersMapped$3e$__["useOthersMapped"]
    ];
});
_c1 = Draft;
const CursorPresence = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c2 = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Draft, {}, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/cursorPresence.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cursors, {}, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/cursorPresence.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
});
_c3 = CursorPresence;
CursorPresence.displayName = "CursorPresence";
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "Cursors");
__turbopack_refresh__.register(_c1, "Draft");
__turbopack_refresh__.register(_c2, "CursorPresence$memo");
__turbopack_refresh__.register(_c3, "CursorPresence");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/convex/_generated/api.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable */ /**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */ __turbopack_esm__({
    "api": (()=>api),
    "internal": (()=>internal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/convex/dist/esm/server/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/convex/dist/esm/server/api.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anyApi"];
const internal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anyApi"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useApiMutation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useApiMutation": (()=>useApiMutation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useApiMutation = (mutationFn)=>{
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const apiMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(mutationFn);
    const mutate = (...payload)=>{
        setIsLoading(true);
        return apiMutation(...payload).finally(()=>setIsLoading(false)).then((result)=>result).catch((error)=>{
            throw error;
        });
    };
    return {
        mutate,
        isLoading
    };
};
_s(useApiMutation, "rVEQmnzDXmug6Z+FegmvLlM8B/I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            board: "hover:bg-blue-500/20 hover:text-blue-800",
            boardActive: "bg-blue-500/20 text-blue-800"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 48,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button$React.forwardRef");
__turbopack_refresh__.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/alert-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AlertDialog": (()=>AlertDialog),
    "AlertDialogAction": (()=>AlertDialogAction),
    "AlertDialogCancel": (()=>AlertDialogCancel),
    "AlertDialogContent": (()=>AlertDialogContent),
    "AlertDialogDescription": (()=>AlertDialogDescription),
    "AlertDialogFooter": (()=>AlertDialogFooter),
    "AlertDialogHeader": (()=>AlertDialogHeader),
    "AlertDialogOverlay": (()=>AlertDialogOverlay),
    "AlertDialogPortal": (()=>AlertDialogPortal),
    "AlertDialogTitle": (()=>AlertDialogTitle),
    "AlertDialogTrigger": (()=>AlertDialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger;
const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Portal;
const AlertDialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Overlay, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c = AlertDialogOverlay;
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Overlay.displayName;
const AlertDialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c1 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/alert-dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content, {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/alert-dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this));
_c2 = AlertDialogContent;
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
_c3 = AlertDialogHeader;
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, this);
_c4 = AlertDialogFooter;
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this));
_c6 = AlertDialogTitle;
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title.displayName;
const AlertDialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, this));
_c8 = AlertDialogDescription;
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description.displayName;
const AlertDialogAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c9 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Action, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this));
_c10 = AlertDialogAction;
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Action.displayName;
const AlertDialogCancel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c11 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Cancel, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this));
_c12 = AlertDialogCancel;
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Cancel.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_refresh__.register(_c, "AlertDialogOverlay");
__turbopack_refresh__.register(_c1, "AlertDialogContent$React.forwardRef");
__turbopack_refresh__.register(_c2, "AlertDialogContent");
__turbopack_refresh__.register(_c3, "AlertDialogHeader");
__turbopack_refresh__.register(_c4, "AlertDialogFooter");
__turbopack_refresh__.register(_c5, "AlertDialogTitle$React.forwardRef");
__turbopack_refresh__.register(_c6, "AlertDialogTitle");
__turbopack_refresh__.register(_c7, "AlertDialogDescription$React.forwardRef");
__turbopack_refresh__.register(_c8, "AlertDialogDescription");
__turbopack_refresh__.register(_c9, "AlertDialogAction$React.forwardRef");
__turbopack_refresh__.register(_c10, "AlertDialogAction");
__turbopack_refresh__.register(_c11, "AlertDialogCancel$React.forwardRef");
__turbopack_refresh__.register(_c12, "AlertDialogCancel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/modals/confirmModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConfirmModal": (()=>ConfirmModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
"use client";
;
;
const ConfirmModal = ({ children, onConfirm, disabled, header, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                asChild: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/modals/confirmModal.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                children: header
                            }, void 0, false, {
                                fileName: "[project]/components/modals/confirmModal.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/components/modals/confirmModal.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/confirmModal.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/confirmModal.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                disabled: disabled,
                                onClick: onConfirm,
                                children: "Confirm"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/confirmModal.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/confirmModal.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/confirmModal.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modals/confirmModal.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_c = ConfirmModal;
var _c;
__turbopack_refresh__.register(_c, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Input$React.forwardRef");
__turbopack_refresh__.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/modals/renameModal_2.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RenameModal": (()=>RenameModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/input.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const RenameModal = ({ children, onConfirm, disabled, header, description, title })=>{
    _s();
    const [newTitle, setNewTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(title);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                asChild: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/modals/renameModal_2.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                children: header
                            }, void 0, false, {
                                fileName: "[project]/components/modals/renameModal_2.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/components/modals/renameModal_2.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/renameModal_2.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        disabled: disabled,
                        required: true,
                        maxLength: 60,
                        value: newTitle,
                        onChange: (e)=>setNewTitle(e.target.value),
                        placeholder: "Board title",
                        onKeyDown: (e)=>{
                            if (e.key === 'Enter') {
                                document.querySelector('[data-confirm-id="alert-dialog-action"]')?.click();
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/modals/renameModal_2.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/renameModal_2.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                disabled: disabled,
                                onClick: ()=>onConfirm(newTitle),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-confirm-id": "alert-dialog-action",
                                    children: "Confirm"
                                }, void 0, false, {
                                    fileName: "[project]/components/modals/renameModal_2.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modals/renameModal_2.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/renameModal_2.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/renameModal_2.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modals/renameModal_2.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
_s(RenameModal, "JgGZtnmGwqTH17slKzabeA7oVoU=");
_c = RenameModal;
var _c;
__turbopack_refresh__.register(_c, "RenameModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DropdownMenu": (()=>DropdownMenu),
    "DropdownMenuCheckboxItem": (()=>DropdownMenuCheckboxItem),
    "DropdownMenuContent": (()=>DropdownMenuContent),
    "DropdownMenuGroup": (()=>DropdownMenuGroup),
    "DropdownMenuItem": (()=>DropdownMenuItem),
    "DropdownMenuLabel": (()=>DropdownMenuLabel),
    "DropdownMenuPortal": (()=>DropdownMenuPortal),
    "DropdownMenuRadioGroup": (()=>DropdownMenuRadioGroup),
    "DropdownMenuRadioItem": (()=>DropdownMenuRadioItem),
    "DropdownMenuSeparator": (()=>DropdownMenuSeparator),
    "DropdownMenuShortcut": (()=>DropdownMenuShortcut),
    "DropdownMenuSub": (()=>DropdownMenuSub),
    "DropdownMenuSubContent": (()=>DropdownMenuSubContent),
    "DropdownMenuSubTrigger": (()=>DropdownMenuSubTrigger),
    "DropdownMenuTrigger": (()=>DropdownMenuTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
"use client";
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger;
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group;
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Portal;
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Sub;
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.RadioGroup;
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SubTrigger, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "ml-auto"
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SubTrigger.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SubContent, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SubContent.displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content, {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dropdown-menu.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, this));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Item.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.CheckboxItem, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 109,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 108,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, this));
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.CheckboxItem.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.RadioItem, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 132,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 123,
        columnNumber: 3
    }, this));
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.RadioItem.displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Label, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 147,
        columnNumber: 3
    }, this));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Label.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Separator, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 163,
        columnNumber: 3
    }, this));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_refresh__.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_refresh__.register(_c1, "DropdownMenuSubTrigger");
__turbopack_refresh__.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_refresh__.register(_c3, "DropdownMenuSubContent");
__turbopack_refresh__.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_refresh__.register(_c5, "DropdownMenuContent");
__turbopack_refresh__.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_refresh__.register(_c7, "DropdownMenuItem");
__turbopack_refresh__.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_refresh__.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_refresh__.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_refresh__.register(_c11, "DropdownMenuRadioItem");
__turbopack_refresh__.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_refresh__.register(_c13, "DropdownMenuLabel");
__turbopack_refresh__.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_refresh__.register(_c15, "DropdownMenuSeparator");
__turbopack_refresh__.register(_c16, "DropdownMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/actions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Actions": (()=>Actions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/convex/_generated/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useApiMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useApiMutation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$confirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modals/confirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$renameModal_2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modals/renameModal_2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
function Actions({ children, side, sideOffset, id, title }) {
    _s();
    const { mutate: remove, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useApiMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].board.remove);
    const { mutate: update, isLoading: isLoadingRename } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useApiMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].board.update);
    const handleCopyLink = ()=>{
        navigator.clipboard.writeText(`${window.location.origin}/board/${id}`).then(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Link copied!")).catch(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to copy link"));
    };
    const handleDelete = ()=>{
        remove({
            id: id
        }).then(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Board deleted!")).catch(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete board"));
    };
    const handleUpdate = (newTitle)=>{
        update({
            id: id,
            title: newTitle
        }).then(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Board title updated");
        }).catch(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update board title"));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/actions.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                onClick: (e)=>e.stopPropagation(),
                side: side,
                sideOffset: sideOffset,
                className: "w-60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        className: "p-3 cursor-pointer",
                        onClick: handleCopyLink,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/actions.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            "Copy board link"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/actions.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$renameModal_2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenameModal"], {
                        header: "Edit board title",
                        description: "Enter a new title for this board",
                        disabled: isLoadingRename,
                        onConfirm: handleUpdate,
                        title: title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "p-3 cursor-pointer w-full justify-start font-normal",
                            variant: "ghost",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/actions.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                "Rename"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/actions.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/actions.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$confirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmModal"], {
                        header: "Delete board?",
                        description: "This will delete the board and all of its content",
                        disabled: isLoading,
                        onConfirm: handleDelete,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "p-3 cursor-pointer w-full justify-start font-normal",
                            variant: "ghost",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/actions.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                "Delete"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/actions.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/actions.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/actions.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/actions.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(Actions, "eh5wA2IqAzE17voHb2THXJfDS9Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useApiMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useApiMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiMutation"]
    ];
});
_c = Actions;
var _c;
__turbopack_refresh__.register(_c, "Actions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/tooltip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Provider;
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger;
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content, {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = TooltipContent;
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
;
var _c, _c1;
__turbopack_refresh__.register(_c, "TooltipContent$React.forwardRef");
__turbopack_refresh__.register(_c1, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/hint.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Hint": (()=>Hint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/tooltip.tsx [app-client] (ecmascript)");
;
;
function Hint({ label, children, side, align, sideOffset, alignOffset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            delayDuration: 100,
            disableHoverableContent: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                    asChild: true,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/hint.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    className: "text-white bg-black border-black",
                    side: side,
                    align: align,
                    sideOffset: sideOffset,
                    alignOffset: alignOffset,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold capitalize",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/hint.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/hint.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/hint.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/hint.tsx",
        lineNumber: 26,
        columnNumber: 7
    }, this);
}
_c = Hint;
var _c;
__turbopack_refresh__.register(_c, "Hint");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/internal/font/google/poppins_e0d8a4e1.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "className": "poppins_e0d8a4e1-module__Q0VF_W__className",
});
}}),
"[next]/internal/font/google/poppins_e0d8a4e1.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_e0d8a4e1$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/poppins_e0d8a4e1.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_e0d8a4e1$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Poppins', 'Poppins Fallback'",
        fontWeight: 600,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_e0d8a4e1$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_e0d8a4e1$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/app/board/[boardId]/_components/info.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Info": (()=>Info),
    "InfoSkeleton": (()=>InfoSkeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/actions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/hint.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/convex/_generated/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_e0d8a4e1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/poppins_e0d8a4e1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$renameModal_2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modals/renameModal_2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useApiMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useApiMutation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const TabSeparator = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-neutral-300 px-1.5",
        children: "|"
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/info.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
};
_c = TabSeparator;
const Info = ({ boardId })=>{
    _s();
    const { mutate: update, isLoading: isLoadingRename } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useApiMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].board.update);
    const handleUpdate = (newTitle)=>{
        update({
            id: boardId,
            title: newTitle
        }).then(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Board title updated");
        }).catch(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update board title"));
    };
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].board.get, {
        id: boardId
    });
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoSkeleton, {}, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/info.tsx",
        lineNumber: 47,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
                label: "Go to boards",
                side: "bottom",
                sideOffset: 10,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    variant: "board",
                    className: "px-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.svg",
                                alt: "Canvasly Logo",
                                height: 40,
                                width: 40
                            }, void 0, false, {
                                fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold text-xl ml-2 text-black", __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_e0d8a4e1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className),
                                children: "Canvasly"
                            }, void 0, false, {
                                fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabSeparator, {}, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
                label: "Edit title",
                side: "bottom",
                sideOffset: 10,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$renameModal_2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenameModal"], {
                    header: "Edit board title",
                    description: "Enter a new title for this board",
                    disabled: isLoadingRename,
                    onConfirm: handleUpdate,
                    title: data.title,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "board",
                        className: "text-base font-normal px-2",
                        children: data.title
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabSeparator, {}, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Actions"], {
                id: data._id,
                title: data.title,
                side: "bottom",
                sideOffset: 10,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
                        label: "Main menu",
                        side: "bottom",
                        sideOffset: 10,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "icon",
                            variant: "board",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                                fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/info.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/board/[boardId]/_components/info.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_s(Info, "wXrP/HARuII6oIXTraCUzQCSMQQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useApiMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c1 = Info;
function InfoSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/info.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c2 = InfoSkeleton;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "TabSeparator");
__turbopack_refresh__.register(_c1, "Info");
__turbopack_refresh__.register(_c2, "InfoSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/ellipse.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Ellipse": (()=>Ellipse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
const Ellipse = ({ id, layer, onPointerDown, selectionColor })=>{
    const { x, y, width, height, fill } = layer;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
        className: "drop-shadow-md",
        onPointerDown: (e)=>onPointerDown(e, id),
        style: {
            transform: `translate(${x}px, ${y}px)`
        },
        cx: width / 2,
        cy: height / 2,
        rx: width / 2,
        ry: height / 2,
        fill: fill ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToCss"])(fill) : "#000",
        stroke: selectionColor || "transparent",
        strokeWidth: 1
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/ellipse.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_c = Ellipse;
var _c;
__turbopack_refresh__.register(_c, "Ellipse");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/rectangle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Rectangle": (()=>Rectangle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
const Rectangle = ({ id, layer, onPointerDown, selectionColor })=>{
    const { x, y, width, height, fill } = layer;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
        className: "drop-shadow-md",
        onPointerDown: (e)=>onPointerDown(e, id),
        style: {
            transform: `translate(${x}px, ${y}px)`
        },
        x: 0,
        y: 0,
        width: width,
        height: height,
        strokeWidth: 1,
        fill: fill ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToCss"])(fill) : "#000",
        stroke: selectionColor || "transparent"
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/rectangle.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_c = Rectangle;
var _c;
__turbopack_refresh__.register(_c, "Rectangle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/internal/font/google/kalam_c4cc9030.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "className": "kalam_c4cc9030-module__w7xwPW__className",
});
}}),
"[next]/internal/font/google/kalam_c4cc9030.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_c4cc9030$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/kalam_c4cc9030.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_c4cc9030$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Kalam', 'Kalam Fallback'",
        fontWeight: 400,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_c4cc9030$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_c4cc9030$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/app/board/[boardId]/_components/text.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Text": (()=>Text)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_c4cc9030$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/kalam_c4cc9030.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$contenteditable$2f$lib$2f$react$2d$contenteditable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-contenteditable/lib/react-contenteditable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useMutation as useMutation>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const calculateFontSize = (width, height)=>{
    const maxFontSize = 96;
    const scaleFactor = 0.5;
    const fontSizeBasedOnHeight = height * scaleFactor;
    const fontSizeBasedOnWidth = width * scaleFactor;
    return Math.min(maxFontSize, fontSizeBasedOnHeight, fontSizeBasedOnWidth);
};
const Text = ({ id, layer, onPointerDown, selectionColor })=>{
    _s();
    const { x, y, width, height, fill, value } = layer;
    const updateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Text.useMutation[updateValue]": ({ storage }, newValue)=>{
            const liveLayers = storage.get("layers");
            liveLayers.get(id)?.set("value", newValue);
        }
    }["Text.useMutation[updateValue]"], []);
    const hanldeContentChange = (e)=>{
        updateValue(e.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
        x: x,
        y: y,
        height: height,
        width: width,
        onPointerDown: (e)=>onPointerDown(e, id),
        style: {
            outline: selectionColor ? `1px solid ${selectionColor}` : "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$contenteditable$2f$lib$2f$react$2d$contenteditable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            html: value || "Text",
            onChange: hanldeContentChange,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full flex items-center justify-center drop-shadow-md outline-none", __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_c4cc9030$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className),
            style: {
                color: fill ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToCss"])(fill) : "#000",
                fontSize: calculateFontSize(width, height)
            }
        }, void 0, false, {
            fileName: "[project]/app/board/[boardId]/_components/text.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/text.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_s(Text, "MH+ld3NgYfI87rKjnZ9J//iI5os=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"]
    ];
});
_c = Text;
var _c;
__turbopack_refresh__.register(_c, "Text");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/internal/font/google/kalam_6837c164.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "className": "kalam_6837c164-module__vbVTCG__className",
});
}}),
"[next]/internal/font/google/kalam_6837c164.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_6837c164$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/kalam_6837c164.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_6837c164$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Kalam', 'Kalam Fallback'",
        fontWeight: 400,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_6837c164$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_6837c164$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/app/board/[boardId]/_components/note.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Note": (()=>Note)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_6837c164$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/kalam_6837c164.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$contenteditable$2f$lib$2f$react$2d$contenteditable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-contenteditable/lib/react-contenteditable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useMutation as useMutation>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const calculateFontSize = (width, height)=>{
    const maxFontSize = 96;
    const scaleFactor = 0.15;
    const fontSizeBasedOnHeight = height * scaleFactor;
    const fontSizeBasedOnWidth = width * scaleFactor;
    return Math.min(maxFontSize, fontSizeBasedOnHeight, fontSizeBasedOnWidth);
};
const Note = ({ id, layer, onPointerDown, selectionColor })=>{
    _s();
    const { x, y, width, height, fill, value } = layer;
    const updateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Note.useMutation[updateValue]": ({ storage }, newValue)=>{
            const liveLayers = storage.get("layers");
            liveLayers.get(id)?.set("value", newValue);
        }
    }["Note.useMutation[updateValue]"], []);
    const hanldeContentChange = (e)=>{
        updateValue(e.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
        x: x,
        y: y,
        height: height,
        width: width,
        onPointerDown: (e)=>onPointerDown(e, id),
        style: {
            outline: selectionColor ? `1px solid ${selectionColor}` : "none",
            backgroundColor: fill ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToCss"])(fill) : "#000"
        },
        className: "shadow-md drop-shadow-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$contenteditable$2f$lib$2f$react$2d$contenteditable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            html: value || "Text",
            onChange: hanldeContentChange,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full flex items-center justify-center outline-none", __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$kalam_6837c164$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className),
            style: {
                color: fill ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastingTextColor"])(fill) : "#000",
                fontSize: calculateFontSize(width, height)
            }
        }, void 0, false, {
            fileName: "[project]/app/board/[boardId]/_components/note.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/note.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_s(Note, "MH+ld3NgYfI87rKjnZ9J//iI5os=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"]
    ];
});
_c = Note;
var _c;
__turbopack_refresh__.register(_c, "Note");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/layerPreview.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LayerPreview": (()=>LayerPreview)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/types/canvas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$ellipse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/ellipse.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$rectangle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/rectangle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$note$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/note.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$path$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/path.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useStorageSuspense as useStorage>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
const LayerPreview = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(({ id, onLayerPointerDown, selectionColor })=>{
    _s();
    const layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__["useStorage"])({
        "LayerPreview.useStorage[layer]": (root)=>root.layers.get(id)
    }["LayerPreview.useStorage[layer]"]);
    if (!layer) return null;
    switch(layer.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Path:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$path$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"], {
                points: layer.points,
                onPointerDown: (e)=>onLayerPointerDown(e, id),
                x: layer.x,
                y: layer.y,
                fill: layer.fill ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToCss"])(layer.fill) : "#000",
                stroke: selectionColor
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/layerPreview.tsx",
                lineNumber: 28,
                columnNumber: 11
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Note:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$note$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Note"], {
                id: id,
                layer: layer,
                onPointerDown: onLayerPointerDown,
                selectionColor: selectionColor
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/layerPreview.tsx",
                lineNumber: 39,
                columnNumber: 11
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Text:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                id: id,
                layer: layer,
                onPointerDown: onLayerPointerDown,
                selectionColor: selectionColor
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/layerPreview.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Ellipse:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$ellipse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ellipse"], {
                id: id,
                layer: layer,
                onPointerDown: onLayerPointerDown,
                selectionColor: selectionColor
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/layerPreview.tsx",
                lineNumber: 57,
                columnNumber: 11
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Rectangle:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$rectangle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"], {
                id: id,
                layer: layer,
                onPointerDown: onLayerPointerDown,
                selectionColor: selectionColor
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/layerPreview.tsx",
                lineNumber: 66,
                columnNumber: 11
            }, this);
        default:
            console.warn("Unknown layer type", layer);
            return null;
    }
}, "04s2BEa/zzKbKNq8k8oCQMiwAAQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__["useStorage"]
    ];
})), "04s2BEa/zzKbKNq8k8oCQMiwAAQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__["useStorage"]
    ];
});
_c1 = LayerPreview;
LayerPreview.displayName = "LayerPreview";
var _c, _c1;
__turbopack_refresh__.register(_c, "LayerPreview$memo");
__turbopack_refresh__.register(_c1, "LayerPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/avatar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Avatar": (()=>Avatar),
    "AvatarFallback": (()=>AvatarFallback),
    "AvatarImage": (()=>AvatarImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = Avatar;
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root.displayName;
const AvatarImage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Image, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = AvatarImage;
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Image.displayName;
const AvatarFallback = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fallback, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c5 = AvatarFallback;
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fallback.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_refresh__.register(_c, "Avatar$React.forwardRef");
__turbopack_refresh__.register(_c1, "Avatar");
__turbopack_refresh__.register(_c2, "AvatarImage$React.forwardRef");
__turbopack_refresh__.register(_c3, "AvatarImage");
__turbopack_refresh__.register(_c4, "AvatarFallback$React.forwardRef");
__turbopack_refresh__.register(_c5, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/userAvatar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UserAvatar": (()=>UserAvatar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/hint.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
;
;
;
const UserAvatar = ({ src, name, fallback, borderColor })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
        label: name || "Teammate",
        side: "bottom",
        sideOffset: 10,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
            className: "h-8 w-8 border-2",
            style: {
                borderColor
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                    src: src
                }, void 0, false, {
                    fileName: "[project]/app/board/[boardId]/_components/userAvatar.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                    className: "text-xs font-semibold",
                    children: fallback
                }, void 0, false, {
                    fileName: "[project]/app/board/[boardId]/_components/userAvatar.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/board/[boardId]/_components/userAvatar.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/userAvatar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_c = UserAvatar;
var _c;
__turbopack_refresh__.register(_c, "UserAvatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/participants.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Participants": (()=>Participants),
    "ParticipantsSkeleton": (()=>ParticipantsSkeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$userAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/userAvatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOthersSuspense__as__useOthers$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useOthersSuspense as useOthers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useSelfSuspense as useSelf>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const MAX_SHOWN_OTHER_USERS = 2;
const Participants = ()=>{
    _s();
    const otherUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOthersSuspense__as__useOthers$3e$__["useOthers"])();
    const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"])();
    const hasMoreUsers = otherUsers.length > MAX_SHOWN_OTHER_USERS;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-x-2",
            children: [
                otherUsers.slice(0, MAX_SHOWN_OTHER_USERS).map(({ connectionId, info })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$userAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAvatar"], {
                        src: info?.avatar,
                        name: info?.name,
                        fallback: info?.name?.[0] || "T",
                        borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectionIdToColor"])(connectionId)
                    }, connectionId, false, {
                        fileName: "[project]/app/board/[boardId]/_components/participants.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this)),
                currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$userAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAvatar"], {
                    src: currentUser.info?.avatar,
                    name: `${currentUser.info?.name} (You)`,
                    fallback: currentUser.info?.name?.[0],
                    borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectionIdToColor"])(currentUser.connectionId)
                }, void 0, false, {
                    fileName: "[project]/app/board/[boardId]/_components/participants.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this),
                hasMoreUsers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$userAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAvatar"], {
                    name: `${otherUsers.length - MAX_SHOWN_OTHER_USERS} more`,
                    fallback: `+${otherUsers.length - MAX_SHOWN_OTHER_USERS}`
                }, void 0, false, {
                    fileName: "[project]/app/board/[boardId]/_components/participants.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/board/[boardId]/_components/participants.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/participants.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(Participants, "8vn1IqdiOyX+z3MvHFC4hZMH6L8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOthersSuspense__as__useOthers$3e$__["useOthers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"]
    ];
});
_c = Participants;
function ParticipantsSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]"
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/participants.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c1 = ParticipantsSkeleton;
var _c, _c1;
__turbopack_refresh__.register(_c, "Participants");
__turbopack_refresh__.register(_c1, "ParticipantsSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useSelectionBounds.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSelectionBounds": (()=>useSelectionBounds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useSelfSuspense as useSelf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useStorageSuspense as useStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@liveblocks/core/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const boundingBox = (layers)=>{
    const first = layers[0];
    if (!first) return null;
    let left = first.x;
    let right = first.x + first.width;
    let top = first.y;
    let bottom = first.y + first.height;
    for(let i = 1; i < layers.length; i++){
        const { x, y, width, height } = layers[i];
        if (left > x) {
            left = x;
        }
        if (right < x + width) {
            right = x + width;
        }
        if (top > y) {
            top = y;
        }
        if (bottom < y + height) {
            bottom = y + height;
        }
    }
    return {
        x: left,
        y: top,
        width: right - left,
        height: bottom - top
    };
};
const useSelectionBounds = ()=>{
    _s();
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"])({
        "useSelectionBounds.useSelf[selection]": (me)=>me.presence.selection
    }["useSelectionBounds.useSelf[selection]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__["useStorage"])({
        "useSelectionBounds.useStorage": (root)=>{
            const selectedLayers = selection.map({
                "useSelectionBounds.useStorage.selectedLayers": (layerId)=>root.layers.get(layerId)
            }["useSelectionBounds.useStorage.selectedLayers"]).filter(Boolean); //to remove undefined and null etc
            return boundingBox(selectedLayers);
        }
    }["useSelectionBounds.useStorage"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
};
_s(useSelectionBounds, "PAFsluYKLCs0U4i511XGNcYcg9E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__["useStorage"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/selectionBox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SelectionBox": (()=>SelectionBox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSelectionBounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useSelectionBounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/types/canvas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useSelfSuspense as useSelf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useStorageSuspense as useStorage>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const HANDLE_WIDTH = 8;
const SelectionBox = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(({ onResizeHandlePointerDown })=>{
    _s();
    const soleLayerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"])({
        "SelectionBox.useSelf[soleLayerId]": (me)=>me.presence.selection.length === 1 ? me.presence.selection[0] : null
    }["SelectionBox.useSelf[soleLayerId]"]);
    const isShowingHandles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__["useStorage"])({
        "SelectionBox.useStorage[isShowingHandles]": (root)=>soleLayerId && root.layers.get(soleLayerId)?.type !== __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Path
    }["SelectionBox.useStorage[isShowingHandles]"]);
    const bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSelectionBounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectionBounds"])();
    if (!bounds) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                className: "fill-transparent stroke-blue-500 stroke-1 pointer-events-none",
                style: {
                    transform: `translate(${bounds.x}px, ${bounds.y}px)`
                },
                x: 0,
                y: 0,
                width: bounds.width,
                height: bounds.height
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/selectionBox.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this),
            isShowingHandles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        className: "fill-white stroke-1 stroke-blue-500",
                        x: 0,
                        y: 0,
                        style: {
                            cursor: "nwse-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(
                    ${bounds.x - HANDLE_WIDTH / 2}px, 
                    ${bounds.y - HANDLE_WIDTH / 2}px)`
                        },
                        onPointerDown: (e)=>{
                            e.stopPropagation();
                            onResizeHandlePointerDown(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Top + __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Left, bounds);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionBox.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        className: "fill-white stroke-1 stroke-blue-500",
                        x: 0,
                        y: 0,
                        style: {
                            cursor: "ns-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(
                ${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, 
                   ${bounds.y - HANDLE_WIDTH / 2}px)`
                        },
                        onPointerDown: (e)=>{
                            e.stopPropagation();
                            onResizeHandlePointerDown(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Top, bounds);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionBox.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        className: "fill-white stroke-1 stroke-blue-500",
                        x: 0,
                        y: 0,
                        style: {
                            cursor: "nesw-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(
                    ${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, 
                    ${bounds.y - HANDLE_WIDTH / 2}px)`
                        },
                        onPointerDown: (e)=>{
                            e.stopPropagation();
                            onResizeHandlePointerDown(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Top + __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Right, bounds);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionBox.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        className: "fill-white stroke-1 stroke-blue-500",
                        x: 0,
                        y: 0,
                        style: {
                            cursor: "ew-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(
                    ${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, 
                    ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px
                )`
                        },
                        onPointerDown: (e)=>{
                            e.stopPropagation();
                            onResizeHandlePointerDown(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Right, bounds);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionBox.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        className: "fill-white stroke-1 stroke-blue-500",
                        x: 0,
                        y: 0,
                        style: {
                            cursor: "nwse-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(
                    ${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, 
                    ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px
                )`
                        },
                        onPointerDown: (e)=>{
                            e.stopPropagation();
                            onResizeHandlePointerDown(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Bottom + __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Right, bounds);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionBox.tsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        className: "fill-white stroke-1 stroke-blue-500",
                        x: 0,
                        y: 0,
                        style: {
                            cursor: "ns-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(
                    ${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, 
                    ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px
                )`
                        },
                        onPointerDown: (e)=>{
                            e.stopPropagation();
                            onResizeHandlePointerDown(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Bottom, bounds);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionBox.tsx",
                        lineNumber: 130,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        className: "fill-white stroke-1 stroke-blue-500",
                        x: 0,
                        y: 0,
                        style: {
                            cursor: "nesw-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(
                    ${bounds.x - HANDLE_WIDTH / 2}px, 
                    ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px
                )`
                        },
                        onPointerDown: (e)=>{
                            e.stopPropagation();
                            onResizeHandlePointerDown(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Bottom + __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Left, bounds);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionBox.tsx",
                        lineNumber: 148,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        className: "fill-white stroke-1 stroke-blue-500",
                        x: 0,
                        y: 0,
                        style: {
                            cursor: "ew-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(
                    ${bounds.x - HANDLE_WIDTH / 2}px, 
                    ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px
                )`
                        },
                        onPointerDown: (e)=>{
                            e.stopPropagation();
                            onResizeHandlePointerDown(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Side"].Left, bounds);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionBox.tsx",
                        lineNumber: 166,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}, "5HpGGA8mFwj+57/PtsTxPnPLdEo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__["useStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSelectionBounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectionBounds"]
    ];
})), "5HpGGA8mFwj+57/PtsTxPnPLdEo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__["useStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSelectionBounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectionBounds"]
    ];
});
_c1 = SelectionBox;
SelectionBox.displayName = "SelectionBox";
var _c, _c1;
__turbopack_refresh__.register(_c, "SelectionBox$memo");
__turbopack_refresh__.register(_c1, "SelectionBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useDeleteLayers.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useDeleteLayers": (()=>useDeleteLayers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useSelfSuspense as useSelf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useMutation as useMutation>");
var _s = __turbopack_refresh__.signature();
;
const useDeleteLayers = ()=>{
    _s();
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"])({
        "useDeleteLayers.useSelf[selection]": (me)=>me.presence.selection
    }["useDeleteLayers.useSelf[selection]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "useDeleteLayers.useMutation": ({ storage, setMyPresence })=>{
            const liveLayers = storage.get("layers");
            const liveLayerIds = storage.get("layerIds");
            for (const id of selection){
                liveLayers.delete(id);
                const index = liveLayerIds.indexOf(id);
                if (index !== -1) {
                    liveLayerIds.delete(index);
                }
            }
            setMyPresence({
                selection: []
            }, {
                addToHistory: true
            });
        }
    }["useDeleteLayers.useMutation"], [
        selection
    ]);
};
_s(useDeleteLayers, "EsWS+SMMcainnYw49pF+gijrR/A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/colorPicker.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ColorButton": (()=>ColorButton),
    "ColorPicker": (()=>ColorPicker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
const ColorPicker = ({ onChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorButton, {
                color: {
                    r: 243,
                    g: 82,
                    b: 35
                },
                onClick: onChange
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorButton, {
                color: {
                    r: 255,
                    g: 249,
                    b: 177
                },
                onClick: onChange
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorButton, {
                color: {
                    r: 68,
                    g: 202,
                    b: 99
                },
                onClick: onChange
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorButton, {
                color: {
                    r: 39,
                    g: 142,
                    b: 237
                },
                onClick: onChange
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorButton, {
                color: {
                    r: 155,
                    g: 105,
                    b: 245
                },
                onClick: onChange
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorButton, {
                color: {
                    r: 252,
                    g: 142,
                    b: 42
                },
                onClick: onChange
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorButton, {
                color: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                onClick: onChange
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorButton, {
                color: {
                    r: 255,
                    g: 255,
                    b: 255
                },
                onClick: onChange
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_c = ColorPicker;
const ColorButton = ({ color, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "w-8 h-8 flex items-center justify-center hover:opacity-75 transition",
        onClick: ()=>onClick(color),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-8 w-8 rounded-md border border-neutral-300",
            style: {
                background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToCss"])(color)
            }
        }, void 0, false, {
            fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/colorPicker.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
_c1 = ColorButton;
var _c, _c1;
__turbopack_refresh__.register(_c, "ColorPicker");
__turbopack_refresh__.register(_c1, "ColorButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/selectionTools.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SelectionTools": (()=>SelectionTools)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/hint.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeleteLayers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useDeleteLayers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSelectionBounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useSelectionBounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$colorPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/colorPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useSelfSuspense as useSelf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useMutation as useMutation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bring$2d$to$2d$front$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BringToFront$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/bring-to-front.js [app-client] (ecmascript) <export default as BringToFront>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$to$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendToBack$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/send-to-back.js [app-client] (ecmascript) <export default as SendToBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sparkle.js [app-client] (ecmascript) <export default as Sparkle>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
const SelectionTools = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(({ camera, setLastUsedColor })=>{
    _s();
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"])({
        "SelectionTools.useSelf[selection]": (self)=>self.presence.selection
    }["SelectionTools.useSelf[selection]"]);
    const deleteLayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeleteLayers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteLayers"])();
    const selectionBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSelectionBounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectionBounds"])();
    const handleMoveToBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "SelectionTools.useMutation[handleMoveToBack]": ({ storage })=>{
            const liveLayerIds = storage.get("layerIds");
            const indices = [];
            const arr = liveLayerIds.toImmutable();
            for(let i = 0; i < arr.length; i++){
                if (selection.includes(arr[i])) {
                    indices.push(i);
                }
            }
            for(let i = 0; i < indices.length; i++){
                liveLayerIds.move(indices[i], i);
            }
        }
    }["SelectionTools.useMutation[handleMoveToBack]"], [
        selection
    ]);
    const handleMoveToFront = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "SelectionTools.useMutation[handleMoveToFront]": ({ storage })=>{
            const liveLayerIds = storage.get("layerIds");
            const indices = [];
            const arr = liveLayerIds.toImmutable();
            for(let i = 0; i < arr.length; i++){
                if (selection.includes(arr[i])) {
                    indices.push(i);
                }
            }
            for(let i = indices.length - 1; i >= 0; i--){
                liveLayerIds.move(indices[i], arr.length - 1 - (indices.length - 1 - i));
            }
        }
    }["SelectionTools.useMutation[handleMoveToFront]"], [
        selection
    ]);
    const handleColorChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "SelectionTools.useMutation[handleColorChange]": ({ storage }, fill)=>{
            const liveLayers = storage.get("layers");
            setLastUsedColor(fill);
            selection.forEach({
                "SelectionTools.useMutation[handleColorChange]": (id)=>{
                    liveLayers.get(id)?.set("fill", fill);
                }
            }["SelectionTools.useMutation[handleColorChange]"]);
        }
    }["SelectionTools.useMutation[handleColorChange]"], [
        selection,
        setLastUsedColor
    ]);
    if (!selectionBounds) return null;
    const handleMagicSearch = ()=>{
        const magicSearch = document.getElementById("canvas");
        if (magicSearch) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(magicSearch, {
                x: selectionBounds.x - camera.x,
                y: selectionBounds.y - camera.y,
                width: selectionBounds.width,
                height: selectionBounds.height
            }).then((canvas)=>{
                const img = canvas.toDataURL("image/png");
                fetch("http://localhost:3000/api/upload", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        image: img,
                        tags: "canvas-upload"
                    })
                }).then((response)=>response.json()).then((data)=>{
                    console.log("Response from uploader API:", data); // Log the response
                }).catch((error)=>{
                    console.error("Error uploading image:", error);
                });
            });
        }
    };
    const x = selectionBounds.width / 2 + selectionBounds.x - camera.x;
    const y = selectionBounds.y + camera.y;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute p-3 rounded-xl bg-white shadow-sm border flex select-none",
        style: {
            transform: `translate(
            calc(${x}px - 50%),
            calc(${y - 16}px - 100%)
          )`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$colorPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorPicker"], {
                onChange: handleColorChange
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-y-0.5 pr-2 mr-2 border-r border-neutral-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
                        label: "Bring to front",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "board",
                            size: "icon",
                            onClick: handleMoveToFront,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bring$2d$to$2d$front$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BringToFront$3e$__["BringToFront"], {}, void 0, false, {
                                fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
                        label: "Bring to back",
                        side: "bottom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "board",
                            size: "icon",
                            onClick: handleMoveToBack,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$to$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendToBack$3e$__["SendToBack"], {}, void 0, false, {
                                fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-y-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
                        label: "Delete",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "board",
                            size: "icon",
                            onClick: deleteLayers,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {}, void 0, false, {
                                fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
                        label: "Magic search",
                        side: "bottom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "board",
                            size: "icon",
                            onClick: handleMagicSearch,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkle$3e$__["Sparkle"], {}, void 0, false, {
                                fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/board/[boardId]/_components/selectionTools.tsx",
        lineNumber: 121,
        columnNumber: 7
    }, this);
}, "MneVet0NjJ+i2f2qQVG1Apsqskw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeleteLayers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteLayers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSelectionBounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectionBounds"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"]
    ];
})), "MneVet0NjJ+i2f2qQVG1Apsqskw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeleteLayers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteLayers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSelectionBounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectionBounds"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"]
    ];
});
_c1 = SelectionTools;
SelectionTools.displayName = "SelectionTools";
var _c, _c1;
__turbopack_refresh__.register(_c, "SelectionTools$memo");
__turbopack_refresh__.register(_c1, "SelectionTools");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/toolButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ToolButton": (()=>ToolButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/hint.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
const ToolButton = ({ label, icon: Icon, onClick, isActive, disabled })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
        label: label,
        side: "right",
        sideOffset: 14,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            disabled: disabled,
            onClick: onClick,
            size: "icon",
            variant: isActive ? "boardActive" : "board",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/toolButton.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/board/[boardId]/_components/toolButton.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/toolButton.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_c = ToolButton;
var _c;
__turbopack_refresh__.register(_c, "ToolButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/toolbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Toolbar": (()=>Toolbar),
    "ToolbarSkeleton": (()=>ToolbarSkeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/types/canvas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/toolButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-client] (ecmascript) <export default as MousePointer2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sticky-note.js [app-client] (ecmascript) <export default as StickyNote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/redo-2.js [app-client] (ecmascript) <export default as Redo2>");
;
;
;
;
const Toolbar = ({ canvasState, setCanvasState, undo, redo, canUndo, canRedo })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-md p-1.5 flex gap-1 flex-col items-center shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                        label: "Select",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__["MousePointer2"],
                        onClick: ()=>setCanvasState({
                                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].None
                            }),
                        isActive: canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].None || canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Translating || canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].SelectionNet || canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pressing || canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Resizing
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                        label: "Text",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"],
                        onClick: ()=>setCanvasState({
                                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting,
                                layerType: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Text
                            }),
                        isActive: canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting && canvasState.layerType === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Text
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                        label: "Sticky note",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__["StickyNote"],
                        onClick: ()=>setCanvasState({
                                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting,
                                layerType: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Note
                            }),
                        isActive: canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting && canvasState.layerType === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Note
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                        label: "Rectangle",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"],
                        onClick: ()=>setCanvasState({
                                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting,
                                layerType: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Rectangle
                            }),
                        isActive: canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting && canvasState.layerType === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Rectangle
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                        label: "Ellipse",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"],
                        onClick: ()=>setCanvasState({
                                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting,
                                layerType: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Ellipse
                            }),
                        isActive: canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting && canvasState.layerType === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerType"].Ellipse
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                        label: "Pen",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"],
                        onClick: ()=>setCanvasState({
                                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pencil
                            }),
                        isActive: canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pencil
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-md p-1.5 flex flex-col items-center shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                        label: "Undo",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"],
                        onClick: undo,
                        disabled: !canUndo
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                        label: "Redo",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__["Redo2"],
                        onClick: redo,
                        disabled: !canRedo
                    }, void 0, false, {
                        fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
_c = Toolbar;
function ToolbarSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md"
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/_components/toolbar.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_c1 = ToolbarSkeleton;
var _c, _c1;
__turbopack_refresh__.register(_c, "Toolbar");
__turbopack_refresh__.register(_c1, "ToolbarSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/canvas.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Canvas": (()=>Canvas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDisableScrollBounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useDisableScrollBounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/types/canvas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$cursorPresence$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/cursorPresence.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/info.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$layerPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/layerPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$participants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/participants.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$path$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/path.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$selectionBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/selectionBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$selectionTools$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/selectionTools.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/toolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeleteLayers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useDeleteLayers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useStorageSuspense as useStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useSelfSuspense as useSelf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOthersMappedSuspense__as__useOthersMapped$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useOthersMappedSuspense as useOthersMapped>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _useMutation as useMutation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@liveblocks/core/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MAX_LAYERS = 5000;
const SELECTION_THRESHOLD = 5;
const Canvas = ({ boardId })=>{
    _s();
    const layerIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__["useStorage"])({
        "Canvas.useStorage[layerIds]": (root)=>root.layerIds
    }["Canvas.useStorage[layerIds]"]);
    const pencilDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"])({
        "Canvas.useSelf[pencilDraft]": (self)=>self.presence.pencilDraft
    }["Canvas.useSelf[pencilDraft]"]);
    const selections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOthersMappedSuspense__as__useOthersMapped$3e$__["useOthersMapped"])({
        "Canvas.useOthersMapped[selections]": (other)=>other.presence.selection
    }["Canvas.useOthersMapped[selections]"]);
    const layerIdsToColorSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Canvas.useMemo[layerIdsToColorSelection]": ()=>{
            const layerIdsToColorSelection = {};
            for (const user of selections){
                const [connectionId, selection] = user;
                for (const layerId of selection){
                    layerIdsToColorSelection[layerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectionIdToColor"])(connectionId);
                }
            }
            return layerIdsToColorSelection;
        }
    }["Canvas.useMemo[layerIdsToColorSelection]"], [
        selections
    ]);
    const [canvasState, setCanvasState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].None
    });
    const [camera, setCamera] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [lastUsedColor, setLastUsedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        r: 255,
        g: 255,
        b: 255
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDisableScrollBounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisableScrollBounce"])();
    const history = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistory"])();
    const canUndo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanUndo"])();
    const canRedo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanRedo"])();
    const insertLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[insertLayer]": ({ storage, setMyPresence }, layerType, position)=>{
            const liveLayers = storage.get("layers");
            if (liveLayers.size >= MAX_LAYERS) {
                return; //TODO: show error message
            }
            const liveLayerIds = storage.get("layerIds");
            const layerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])();
            const layer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveObject"]({
                type: layerType,
                x: position.x,
                y: position.y,
                width: 100,
                height: 100,
                fill: lastUsedColor
            });
            liveLayerIds.push(layerId);
            liveLayers.set(layerId, layer);
            setMyPresence({
                selection: [
                    layerId
                ]
            }, {
                addToHistory: true
            });
            setCanvasState({
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].None
            });
        }
    }["Canvas.useMutation[insertLayer]"], [
        lastUsedColor
    ]);
    const translateSelectedLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[translateSelectedLayer]": ({ storage, self }, point)=>{
            if (canvasState.mode !== __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Translating) return;
            const offset = {
                x: point.x - canvasState.current.x,
                y: point.y - canvasState.current.y
            };
            const liveLayers = storage.get("layers");
            for (const id of self.presence.selection){
                const layer = liveLayers.get(id);
                if (layer) {
                    layer.update({
                        x: layer.get("x") + offset.x,
                        y: layer.get("y") + offset.y
                    });
                }
            }
            setCanvasState({
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Translating,
                current: point
            });
        }
    }["Canvas.useMutation[translateSelectedLayer]"], [
        canvasState
    ]);
    const unselectLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[unselectLayer]": ({ self, setMyPresence })=>{
            if (self.presence.selection.length > 0) {
                setMyPresence({
                    selection: []
                }, {
                    addToHistory: true
                });
            }
        }
    }["Canvas.useMutation[unselectLayer]"], []);
    const updateSelectionNet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[updateSelectionNet]": ({ storage, setMyPresence }, current, origin)=>{
            const layers = storage.get("layers").toImmutable();
            setCanvasState({
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].SelectionNet,
                origin,
                current
            });
            const ids = layerIds ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findIntersectingLayersWithRectangle"])(layerIds, layers, origin, current) : [];
            setMyPresence({
                selection: ids
            });
        }
    }["Canvas.useMutation[updateSelectionNet]"], [
        layerIds
    ]);
    const startMultiSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Canvas.useCallback[startMultiSelection]": (current, origin)=>{
            if (Math.abs(current.x - origin.x) + Math.abs(current.y - origin.y) > SELECTION_THRESHOLD) {
                setCanvasState({
                    mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].SelectionNet,
                    origin,
                    current
                });
            }
        }
    }["Canvas.useCallback[startMultiSelection]"], []);
    const continueDrawing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[continueDrawing]": ({ self, setMyPresence }, point, event)=>{
            const { pencilDraft } = self.presence;
            if (canvasState.mode !== __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pencil || event.buttons !== 1 || !pencilDraft) return;
            setMyPresence({
                cursor: point,
                pencilDraft: pencilDraft.length === 1 && pencilDraft[0][0] === point.x && pencilDraft[0][1] === point.y ? pencilDraft : [
                    ...pencilDraft,
                    [
                        point.x,
                        point.y,
                        event.pressure
                    ]
                ]
            });
        }
    }["Canvas.useMutation[continueDrawing]"], [
        canvasState.mode
    ]);
    const insertPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[insertPath]": ({ storage, self, setMyPresence })=>{
            const liveLayers = storage.get("layers");
            const { pencilDraft } = self.presence;
            if (!pencilDraft || pencilDraft.length < 2 || liveLayers.size >= MAX_LAYERS) {
                setMyPresence({
                    pencilDraft: null
                });
                return;
            }
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])();
            liveLayers.set(id, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveObject"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["penPointsToPathLayer"])(pencilDraft, lastUsedColor)));
            const liveLayerIds = storage.get("layerIds");
            liveLayerIds.push(id);
            setMyPresence({
                pencilDraft: null
            });
            setCanvasState({
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pencil
            });
        }
    }["Canvas.useMutation[insertPath]"], [
        lastUsedColor
    ]);
    const startDrawing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[startDrawing]": ({ setMyPresence }, point, pressure)=>{
            setMyPresence({
                pencilDraft: [
                    [
                        point.x,
                        point.y,
                        pressure
                    ]
                ],
                pencilColor: lastUsedColor
            });
        }
    }["Canvas.useMutation[startDrawing]"], [
        lastUsedColor
    ]);
    const resizeSelectedLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[resizeSelectedLayer]": ({ self, storage }, point)=>{
            if (canvasState.mode !== __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Resizing) {
                return;
            }
            const bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeBounds"])(canvasState.initialBounds, canvasState.corner, point);
            const liveLayers = storage.get("layers");
            const layer = liveLayers.get(self.presence.selection[0]);
            if (layer) {
                layer.update(bounds);
            }
        }
    }["Canvas.useMutation[resizeSelectedLayer]"], [
        canvasState
    ]);
    const handleResizeHandlePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Canvas.useCallback[handleResizeHandlePointerDown]": (corner, initialBounds)=>{
            history.pause();
            setCanvasState({
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Resizing,
                initialBounds,
                corner
            });
        }
    }["Canvas.useCallback[handleResizeHandlePointerDown]"], [
        history
    ]);
    const handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Canvas.useCallback[handleWheel]": (e)=>{
            setCamera({
                "Canvas.useCallback[handleWheel]": (camera)=>({
                        x: camera.x - e.deltaX,
                        y: camera.y - e.deltaY
                    })
            }["Canvas.useCallback[handleWheel]"]);
        }
    }["Canvas.useCallback[handleWheel]"], []);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[handlePointerMove]": ({ setMyPresence }, e)=>{
            e.preventDefault();
            const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointerEventToCanvasPoint"])(e, camera);
            if (canvasState.mode == __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pressing) {
                startMultiSelection(current, canvasState.origin);
            } else if (canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].SelectionNet) {
                updateSelectionNet(current, canvasState.origin);
            } else if (canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Translating) {
                translateSelectedLayer(current);
            } else if (canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Resizing) {
                resizeSelectedLayer(current);
            } else if (canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pencil) {
                continueDrawing(current, e);
            }
            setMyPresence({
                cursor: current
            });
        }
    }["Canvas.useMutation[handlePointerMove]"], [
        canvasState,
        resizeSelectedLayer,
        camera,
        translateSelectedLayer,
        continueDrawing,
        startMultiSelection,
        updateSelectionNet
    ]);
    const handlePointerLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[handlePointerLeave]": ({ setMyPresence })=>{
            setMyPresence({
                cursor: null
            });
        }
    }["Canvas.useMutation[handlePointerLeave]"], []);
    const handlePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Canvas.useCallback[handlePointerDown]": (e)=>{
            const point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointerEventToCanvasPoint"])(e, camera);
            if (canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting) return;
            if (canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pencil) {
                startDrawing(point, e.pressure);
                return;
            }
            setCanvasState({
                origin: point,
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pressing
            });
        }
    }["Canvas.useCallback[handlePointerDown]"], [
        camera,
        canvasState.mode,
        setCanvasState,
        startDrawing
    ]);
    const handlePointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[handlePointerUp]": ({}, e)=>{
            const point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointerEventToCanvasPoint"])(e, camera);
            if (canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].None || canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pressing) {
                unselectLayer();
                setCanvasState({
                    mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].None
                });
            } else if (canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pencil) {
                insertPath();
            } else if (canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting) {
                insertLayer(canvasState.layerType, point);
            } else {
                setCanvasState({
                    mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].None
                });
            }
            history.resume();
        }
    }["Canvas.useMutation[handlePointerUp]"], [
        camera,
        canvasState,
        history,
        insertLayer,
        unselectLayer,
        setCanvasState,
        insertPath
    ]);
    const handleLayerPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"])({
        "Canvas.useMutation[handleLayerPointerDown]": ({ self, setMyPresence }, e, layerId)=>{
            if (canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Pencil || canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Inserting) {
                return;
            }
            history.pause();
            e.stopPropagation();
            const point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointerEventToCanvasPoint"])(e, camera);
            if (!self.presence.selection.includes(layerId)) {
                setMyPresence({
                    selection: [
                        layerId
                    ]
                }, {
                    addToHistory: true
                });
            }
            setCanvasState({
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].Translating,
                current: point
            });
        }
    }["Canvas.useMutation[handleLayerPointerDown]"], [
        setCanvasState,
        camera,
        history,
        canvasState.mode
    ]);
    const deleteLayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeleteLayers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteLayers"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Canvas.useEffect": ()=>{
            function onKeyDown(e) {
                switch(e.key){
                    case "z":
                        {
                            if (e.ctrlKey || e.metaKey) {
                                history.undo();
                                break;
                            }
                        }
                    case "y":
                        {
                            if (e.ctrlKey || e.metaKey) {
                                history.redo();
                                break;
                            }
                        }
                }
            }
            document.addEventListener("keydown", onKeyDown);
            return ({
                "Canvas.useEffect": ()=>{
                    document.removeEventListener("keydown", onKeyDown);
                }
            })["Canvas.useEffect"];
        }
    }["Canvas.useEffect"], [
        history,
        deleteLayers
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "canvas",
        className: "h-full w-full relative bg-neutral-100 touch-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Info"], {
                boardId: boardId
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$participants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Participants"], {}, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toolbar"], {
                canvasState: canvasState,
                setCanvasState: setCanvasState,
                undo: history.undo,
                redo: history.redo,
                canUndo: canUndo,
                canRedo: canRedo
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$selectionTools$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionTools"], {
                camera: camera,
                setLastUsedColor: setLastUsedColor
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-[100vh] w-[100vw]",
                onWheel: handleWheel,
                onPointerMove: handlePointerMove,
                onPointerLeave: handlePointerLeave,
                onPointerUp: handlePointerUp,
                onPointerDown: handlePointerDown,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    style: {
                        transform: `translate(${camera.x}px, ${camera.y}px)`
                    },
                    children: [
                        layerIds && layerIds.map((layerId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$layerPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerPreview"], {
                                id: layerId,
                                onLayerPointerDown: handleLayerPointerDown,
                                selectionColor: layerIdsToColorSelection[layerId]
                            }, layerId, false, {
                                fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                                lineNumber: 463,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$selectionBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionBox"], {
                            onResizeHandlePointerDown: handleResizeHandlePointerDown
                        }, void 0, false, {
                            fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this),
                        canvasState.mode === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$canvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasMode"].SelectionNet && canvasState.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            className: "fill-blue-500/5 stroke-blue-500 stroke-1",
                            x: Math.min(canvasState.origin.x, canvasState.current.x),
                            y: Math.min(canvasState.origin.y, canvasState.current.y),
                            width: Math.abs(canvasState.origin.x - canvasState.current.x),
                            height: Math.abs(canvasState.origin.y - canvasState.current.y)
                        }, void 0, false, {
                            fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                            lineNumber: 475,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$cursorPresence$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorPresence"], {}, void 0, false, {
                            fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this),
                        pencilDraft && pencilDraft.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$path$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"], {
                            fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToCss"])(lastUsedColor),
                            points: pencilDraft,
                            x: 0,
                            y: 0
                        }, void 0, false, {
                            fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                            lineNumber: 491,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                    lineNumber: 457,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/board/[boardId]/_components/canvas.tsx",
        lineNumber: 437,
        columnNumber: 5
    }, this);
};
_s(Canvas, "k9kXhS+PTVGAwv6L7kg3x9v2AsI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useStorageSuspense__as__useStorage$3e$__["useStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useSelfSuspense__as__useSelf$3e$__["useSelf"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useOthersMappedSuspense__as__useOthersMapped$3e$__["useOthersMapped"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDisableScrollBounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisableScrollBounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistory"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanUndo"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanRedo"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$useMutation__as__useMutation$3e$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeleteLayers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteLayers"]
    ];
});
_c = Canvas;
var _c;
__turbopack_refresh__.register(_c, "Canvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/room.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Room": (()=>Room)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$RoomProvider__as__RoomProvider$3e$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript) <export _RoomProvider as RoomProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@liveblocks/core/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$FE7VYVHO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-FE7VYVHO.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const Room = ({ children, roomId, fallback })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$RoomProvider__as__RoomProvider$3e$__["RoomProvider"], {
        id: roomId,
        initialPresence: {
            cursor: null,
            selection: [],
            pencilDraft: null,
            pencilColor: null
        },
        initialStorage: {
            layers: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveMap"](),
            layerIds: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveList"]([])
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$FE7VYVHO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientSideSuspense"], {
            fallback: fallback,
            children: ()=>children
        }, void 0, false, {
            fileName: "[project]/components/room.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/room.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, this);
};
_c = Room;
var _c;
__turbopack_refresh__.register(_c, "Room");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/_components/loading.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Loading": (()=>Loading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/info.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$participants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/participants.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/toolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript) <export default as Loader>");
;
;
;
;
;
const Loading = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                className: "h-6 w-6 text-muted-foreground animate-spin"
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/loading.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoSkeleton"], {}, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/loading.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$participants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticipantsSkeleton"], {}, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/loading.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarSkeleton"], {}, void 0, false, {
                fileName: "[project]/app/board/[boardId]/_components/loading.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/board/[boardId]/_components/loading.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = Loading;
var _c;
__turbopack_refresh__.register(_c, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/canvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$room$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/room.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/board/[boardId]/_components/loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@liveblocks/react/dist/chunk-63WTJCBG.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const BoardIdPage = ()=>{
    _s();
    const { boardId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    if (!boardId || Array.isArray(boardId)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/app/board/[boardId]/page.tsx",
            lineNumber: 13,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$liveblocks$2f$react$2f$dist$2f$chunk$2d$63WTJCBG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveblocksProvider"], {
        throttle: 16,
        authEndpoint: `/api/liveblocks-auth`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$room$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"], {
            roomId: boardId,
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                fileName: "[project]/app/board/[boardId]/page.tsx",
                lineNumber: 18,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$board$2f5b$boardId$5d2f$_components$2f$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Canvas"], {
                boardId: boardId
            }, void 0, false, {
                fileName: "[project]/app/board/[boardId]/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/board/[boardId]/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/board/[boardId]/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_s(BoardIdPage, "hpbizaSFqDDpTSw2ARvLOFJC8As=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = BoardIdPage;
const __TURBOPACK__default__export__ = BoardIdPage;
var _c;
__turbopack_refresh__.register(_c, "BoardIdPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/board/[boardId]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__a38424._.js.map