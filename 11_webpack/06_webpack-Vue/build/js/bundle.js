/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateCodeFrame": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame),
/* harmony export */   "BASE_TRANSITION": () => (/* binding */ BASE_TRANSITION),
/* harmony export */   "CAMELIZE": () => (/* binding */ CAMELIZE),
/* harmony export */   "CAPITALIZE": () => (/* binding */ CAPITALIZE),
/* harmony export */   "CREATE_BLOCK": () => (/* binding */ CREATE_BLOCK),
/* harmony export */   "CREATE_COMMENT": () => (/* binding */ CREATE_COMMENT),
/* harmony export */   "CREATE_ELEMENT_BLOCK": () => (/* binding */ CREATE_ELEMENT_BLOCK),
/* harmony export */   "CREATE_ELEMENT_VNODE": () => (/* binding */ CREATE_ELEMENT_VNODE),
/* harmony export */   "CREATE_SLOTS": () => (/* binding */ CREATE_SLOTS),
/* harmony export */   "CREATE_STATIC": () => (/* binding */ CREATE_STATIC),
/* harmony export */   "CREATE_TEXT": () => (/* binding */ CREATE_TEXT),
/* harmony export */   "CREATE_VNODE": () => (/* binding */ CREATE_VNODE),
/* harmony export */   "FRAGMENT": () => (/* binding */ FRAGMENT),
/* harmony export */   "GUARD_REACTIVE_PROPS": () => (/* binding */ GUARD_REACTIVE_PROPS),
/* harmony export */   "IS_MEMO_SAME": () => (/* binding */ IS_MEMO_SAME),
/* harmony export */   "IS_REF": () => (/* binding */ IS_REF),
/* harmony export */   "KEEP_ALIVE": () => (/* binding */ KEEP_ALIVE),
/* harmony export */   "MERGE_PROPS": () => (/* binding */ MERGE_PROPS),
/* harmony export */   "NORMALIZE_CLASS": () => (/* binding */ NORMALIZE_CLASS),
/* harmony export */   "NORMALIZE_PROPS": () => (/* binding */ NORMALIZE_PROPS),
/* harmony export */   "NORMALIZE_STYLE": () => (/* binding */ NORMALIZE_STYLE),
/* harmony export */   "OPEN_BLOCK": () => (/* binding */ OPEN_BLOCK),
/* harmony export */   "POP_SCOPE_ID": () => (/* binding */ POP_SCOPE_ID),
/* harmony export */   "PUSH_SCOPE_ID": () => (/* binding */ PUSH_SCOPE_ID),
/* harmony export */   "RENDER_LIST": () => (/* binding */ RENDER_LIST),
/* harmony export */   "RENDER_SLOT": () => (/* binding */ RENDER_SLOT),
/* harmony export */   "RESOLVE_COMPONENT": () => (/* binding */ RESOLVE_COMPONENT),
/* harmony export */   "RESOLVE_DIRECTIVE": () => (/* binding */ RESOLVE_DIRECTIVE),
/* harmony export */   "RESOLVE_DYNAMIC_COMPONENT": () => (/* binding */ RESOLVE_DYNAMIC_COMPONENT),
/* harmony export */   "RESOLVE_FILTER": () => (/* binding */ RESOLVE_FILTER),
/* harmony export */   "SET_BLOCK_TRACKING": () => (/* binding */ SET_BLOCK_TRACKING),
/* harmony export */   "SUSPENSE": () => (/* binding */ SUSPENSE),
/* harmony export */   "TELEPORT": () => (/* binding */ TELEPORT),
/* harmony export */   "TO_DISPLAY_STRING": () => (/* binding */ TO_DISPLAY_STRING),
/* harmony export */   "TO_HANDLERS": () => (/* binding */ TO_HANDLERS),
/* harmony export */   "TO_HANDLER_KEY": () => (/* binding */ TO_HANDLER_KEY),
/* harmony export */   "UNREF": () => (/* binding */ UNREF),
/* harmony export */   "WITH_CTX": () => (/* binding */ WITH_CTX),
/* harmony export */   "WITH_DIRECTIVES": () => (/* binding */ WITH_DIRECTIVES),
/* harmony export */   "WITH_MEMO": () => (/* binding */ WITH_MEMO),
/* harmony export */   "advancePositionWithClone": () => (/* binding */ advancePositionWithClone),
/* harmony export */   "advancePositionWithMutation": () => (/* binding */ advancePositionWithMutation),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "baseCompile": () => (/* binding */ baseCompile),
/* harmony export */   "baseParse": () => (/* binding */ baseParse),
/* harmony export */   "buildProps": () => (/* binding */ buildProps),
/* harmony export */   "buildSlots": () => (/* binding */ buildSlots),
/* harmony export */   "checkCompatEnabled": () => (/* binding */ checkCompatEnabled),
/* harmony export */   "createArrayExpression": () => (/* binding */ createArrayExpression),
/* harmony export */   "createAssignmentExpression": () => (/* binding */ createAssignmentExpression),
/* harmony export */   "createBlockStatement": () => (/* binding */ createBlockStatement),
/* harmony export */   "createCacheExpression": () => (/* binding */ createCacheExpression),
/* harmony export */   "createCallExpression": () => (/* binding */ createCallExpression),
/* harmony export */   "createCompilerError": () => (/* binding */ createCompilerError),
/* harmony export */   "createCompoundExpression": () => (/* binding */ createCompoundExpression),
/* harmony export */   "createConditionalExpression": () => (/* binding */ createConditionalExpression),
/* harmony export */   "createForLoopParams": () => (/* binding */ createForLoopParams),
/* harmony export */   "createFunctionExpression": () => (/* binding */ createFunctionExpression),
/* harmony export */   "createIfStatement": () => (/* binding */ createIfStatement),
/* harmony export */   "createInterpolation": () => (/* binding */ createInterpolation),
/* harmony export */   "createObjectExpression": () => (/* binding */ createObjectExpression),
/* harmony export */   "createObjectProperty": () => (/* binding */ createObjectProperty),
/* harmony export */   "createReturnStatement": () => (/* binding */ createReturnStatement),
/* harmony export */   "createRoot": () => (/* binding */ createRoot),
/* harmony export */   "createSequenceExpression": () => (/* binding */ createSequenceExpression),
/* harmony export */   "createSimpleExpression": () => (/* binding */ createSimpleExpression),
/* harmony export */   "createStructuralDirectiveTransform": () => (/* binding */ createStructuralDirectiveTransform),
/* harmony export */   "createTemplateLiteral": () => (/* binding */ createTemplateLiteral),
/* harmony export */   "createTransformContext": () => (/* binding */ createTransformContext),
/* harmony export */   "createVNodeCall": () => (/* binding */ createVNodeCall),
/* harmony export */   "extractIdentifiers": () => (/* binding */ extractIdentifiers),
/* harmony export */   "findDir": () => (/* binding */ findDir),
/* harmony export */   "findProp": () => (/* binding */ findProp),
/* harmony export */   "generate": () => (/* binding */ generate),
/* harmony export */   "getBaseTransformPreset": () => (/* binding */ getBaseTransformPreset),
/* harmony export */   "getInnerRange": () => (/* binding */ getInnerRange),
/* harmony export */   "getMemoedVNodeCall": () => (/* binding */ getMemoedVNodeCall),
/* harmony export */   "getVNodeBlockHelper": () => (/* binding */ getVNodeBlockHelper),
/* harmony export */   "getVNodeHelper": () => (/* binding */ getVNodeHelper),
/* harmony export */   "hasDynamicKeyVBind": () => (/* binding */ hasDynamicKeyVBind),
/* harmony export */   "hasScopeRef": () => (/* binding */ hasScopeRef),
/* harmony export */   "helperNameMap": () => (/* binding */ helperNameMap),
/* harmony export */   "injectProp": () => (/* binding */ injectProp),
/* harmony export */   "isBuiltInType": () => (/* binding */ isBuiltInType),
/* harmony export */   "isCoreComponent": () => (/* binding */ isCoreComponent),
/* harmony export */   "isFunctionType": () => (/* binding */ isFunctionType),
/* harmony export */   "isInDestructureAssignment": () => (/* binding */ isInDestructureAssignment),
/* harmony export */   "isMemberExpression": () => (/* binding */ isMemberExpression),
/* harmony export */   "isMemberExpressionBrowser": () => (/* binding */ isMemberExpressionBrowser),
/* harmony export */   "isMemberExpressionNode": () => (/* binding */ isMemberExpressionNode),
/* harmony export */   "isReferencedIdentifier": () => (/* binding */ isReferencedIdentifier),
/* harmony export */   "isSimpleIdentifier": () => (/* binding */ isSimpleIdentifier),
/* harmony export */   "isSlotOutlet": () => (/* binding */ isSlotOutlet),
/* harmony export */   "isStaticArgOf": () => (/* binding */ isStaticArgOf),
/* harmony export */   "isStaticExp": () => (/* binding */ isStaticExp),
/* harmony export */   "isStaticProperty": () => (/* binding */ isStaticProperty),
/* harmony export */   "isStaticPropertyKey": () => (/* binding */ isStaticPropertyKey),
/* harmony export */   "isTemplateNode": () => (/* binding */ isTemplateNode),
/* harmony export */   "isText": () => (/* binding */ isText),
/* harmony export */   "isVSlot": () => (/* binding */ isVSlot),
/* harmony export */   "locStub": () => (/* binding */ locStub),
/* harmony export */   "makeBlock": () => (/* binding */ makeBlock),
/* harmony export */   "noopDirectiveTransform": () => (/* binding */ noopDirectiveTransform),
/* harmony export */   "processExpression": () => (/* binding */ processExpression),
/* harmony export */   "processFor": () => (/* binding */ processFor),
/* harmony export */   "processIf": () => (/* binding */ processIf),
/* harmony export */   "processSlotOutlet": () => (/* binding */ processSlotOutlet),
/* harmony export */   "registerRuntimeHelpers": () => (/* binding */ registerRuntimeHelpers),
/* harmony export */   "resolveComponentType": () => (/* binding */ resolveComponentType),
/* harmony export */   "toValidAssetId": () => (/* binding */ toValidAssetId),
/* harmony export */   "trackSlotScopes": () => (/* binding */ trackSlotScopes),
/* harmony export */   "trackVForSlotScopes": () => (/* binding */ trackVForSlotScopes),
/* harmony export */   "transform": () => (/* binding */ transform),
/* harmony export */   "transformBind": () => (/* binding */ transformBind),
/* harmony export */   "transformElement": () => (/* binding */ transformElement),
/* harmony export */   "transformExpression": () => (/* binding */ transformExpression),
/* harmony export */   "transformModel": () => (/* binding */ transformModel),
/* harmony export */   "transformOn": () => (/* binding */ transformOn),
/* harmony export */   "traverseNode": () => (/* binding */ traverseNode),
/* harmony export */   "walkBlockDeclarations": () => (/* binding */ walkBlockDeclarations),
/* harmony export */   "walkFunctionParams": () => (/* binding */ walkFunctionParams),
/* harmony export */   "walkIdentifiers": () => (/* binding */ walkIdentifiers),
/* harmony export */   "warnDeprecation": () => (/* binding */ warnDeprecation)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _errorMessages, _helperNameMap, _deprecationData;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function defaultOnError(error) {
  throw error;
}

function defaultOnWarn(msg) {
   true && console.warn("[Vue warn] ".concat(msg.message));
}

function createCompilerError(code, loc, messages, additionalMessage) {
  var msg =  true ? (messages || errorMessages)[code] + (additionalMessage || "") : 0;
  var error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}

var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, 0
/* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
, 'Illegal comment.'), _defineProperty(_errorMessages, 1
/* CDATA_IN_HTML_CONTENT */
, 'CDATA section is allowed only in XML context.'), _defineProperty(_errorMessages, 2
/* DUPLICATE_ATTRIBUTE */
, 'Duplicate attribute.'), _defineProperty(_errorMessages, 3
/* END_TAG_WITH_ATTRIBUTES */
, 'End tag cannot have attributes.'), _defineProperty(_errorMessages, 4
/* END_TAG_WITH_TRAILING_SOLIDUS */
, "Illegal '/' in tags."), _defineProperty(_errorMessages, 5
/* EOF_BEFORE_TAG_NAME */
, 'Unexpected EOF in tag.'), _defineProperty(_errorMessages, 6
/* EOF_IN_CDATA */
, 'Unexpected EOF in CDATA section.'), _defineProperty(_errorMessages, 7
/* EOF_IN_COMMENT */
, 'Unexpected EOF in comment.'), _defineProperty(_errorMessages, 8
/* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
, 'Unexpected EOF in script.'), _defineProperty(_errorMessages, 9
/* EOF_IN_TAG */
, 'Unexpected EOF in tag.'), _defineProperty(_errorMessages, 10
/* INCORRECTLY_CLOSED_COMMENT */
, 'Incorrectly closed comment.'), _defineProperty(_errorMessages, 11
/* INCORRECTLY_OPENED_COMMENT */
, 'Incorrectly opened comment.'), _defineProperty(_errorMessages, 12
/* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
, "Illegal tag name. Use '&lt;' to print '<'."), _defineProperty(_errorMessages, 13
/* MISSING_ATTRIBUTE_VALUE */
, 'Attribute value was expected.'), _defineProperty(_errorMessages, 14
/* MISSING_END_TAG_NAME */
, 'End tag name was expected.'), _defineProperty(_errorMessages, 15
/* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
, 'Whitespace was expected.'), _defineProperty(_errorMessages, 16
/* NESTED_COMMENT */
, "Unexpected '<!--' in comment."), _defineProperty(_errorMessages, 17
/* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
, 'Attribute name cannot contain U+0022 ("), U+0027 (\'), and U+003C (<).'), _defineProperty(_errorMessages, 18
/* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
, 'Unquoted attribute value cannot contain U+0022 ("), U+0027 (\'), U+003C (<), U+003D (=), and U+0060 (`).'), _defineProperty(_errorMessages, 19
/* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
, "Attribute name cannot start with '='."), _defineProperty(_errorMessages, 21
/* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
, "'<?' is allowed only in XML context."), _defineProperty(_errorMessages, 20
/* UNEXPECTED_NULL_CHARACTER */
, "Unexpected null character."), _defineProperty(_errorMessages, 22
/* UNEXPECTED_SOLIDUS_IN_TAG */
, "Illegal '/' in tags."), _defineProperty(_errorMessages, 23
/* X_INVALID_END_TAG */
, 'Invalid end tag.'), _defineProperty(_errorMessages, 24
/* X_MISSING_END_TAG */
, 'Element is missing end tag.'), _defineProperty(_errorMessages, 25
/* X_MISSING_INTERPOLATION_END */
, 'Interpolation end sign was not found.'), _defineProperty(_errorMessages, 27
/* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
, 'End bracket for dynamic directive argument was not found. ' + 'Note that dynamic directive argument cannot contain spaces.'), _defineProperty(_errorMessages, 26
/* X_MISSING_DIRECTIVE_NAME */
, 'Legal directive name was expected.'), _defineProperty(_errorMessages, 28
/* X_V_IF_NO_EXPRESSION */
, "v-if/v-else-if is missing expression."), _defineProperty(_errorMessages, 29
/* X_V_IF_SAME_KEY */
, "v-if/else branches must use unique keys."), _defineProperty(_errorMessages, 30
/* X_V_ELSE_NO_ADJACENT_IF */
, "v-else/v-else-if has no adjacent v-if or v-else-if."), _defineProperty(_errorMessages, 31
/* X_V_FOR_NO_EXPRESSION */
, "v-for is missing expression."), _defineProperty(_errorMessages, 32
/* X_V_FOR_MALFORMED_EXPRESSION */
, "v-for has invalid expression."), _defineProperty(_errorMessages, 33
/* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
, "<template v-for> key should be placed on the <template> tag."), _defineProperty(_errorMessages, 34
/* X_V_BIND_NO_EXPRESSION */
, "v-bind is missing expression."), _defineProperty(_errorMessages, 35
/* X_V_ON_NO_EXPRESSION */
, "v-on is missing expression."), _defineProperty(_errorMessages, 36
/* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
, "Unexpected custom directive on <slot> outlet."), _defineProperty(_errorMessages, 37
/* X_V_SLOT_MIXED_SLOT_USAGE */
, "Mixed v-slot usage on both the component and nested <template>." + "When there are multiple named slots, all slots should use <template> " + "syntax to avoid scope ambiguity."), _defineProperty(_errorMessages, 38
/* X_V_SLOT_DUPLICATE_SLOT_NAMES */
, "Duplicate slot names found. "), _defineProperty(_errorMessages, 39
/* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
, "Extraneous children found when component already has explicitly named " + "default slot. These children will be ignored."), _defineProperty(_errorMessages, 40
/* X_V_SLOT_MISPLACED */
, "v-slot can only be used on components or <template> tags."), _defineProperty(_errorMessages, 41
/* X_V_MODEL_NO_EXPRESSION */
, "v-model is missing expression."), _defineProperty(_errorMessages, 42
/* X_V_MODEL_MALFORMED_EXPRESSION */
, "v-model value must be a valid JavaScript member expression."), _defineProperty(_errorMessages, 43
/* X_V_MODEL_ON_SCOPE_VARIABLE */
, "v-model cannot be used on v-for or v-slot scope variables because they are not writable."), _defineProperty(_errorMessages, 44
/* X_INVALID_EXPRESSION */
, "Error parsing JavaScript expression: "), _defineProperty(_errorMessages, 45
/* X_KEEP_ALIVE_INVALID_CHILDREN */
, "<KeepAlive> expects exactly one child component."), _defineProperty(_errorMessages, 46
/* X_PREFIX_ID_NOT_SUPPORTED */
, "\"prefixIdentifiers\" option is not supported in this build of compiler."), _defineProperty(_errorMessages, 47
/* X_MODULE_MODE_NOT_SUPPORTED */
, "ES module mode is not supported in this build of compiler."), _defineProperty(_errorMessages, 48
/* X_CACHE_HANDLER_NOT_SUPPORTED */
, "\"cacheHandlers\" option is only supported when the \"prefixIdentifiers\" option is enabled."), _defineProperty(_errorMessages, 49
/* X_SCOPE_ID_NOT_SUPPORTED */
, "\"scopeId\" option is only supported in module mode."), _defineProperty(_errorMessages, 50
/* __EXTEND_POINT__ */
, ""), _errorMessages);
var FRAGMENT = Symbol( true ? "Fragment" : 0);
var TELEPORT = Symbol( true ? "Teleport" : 0);
var SUSPENSE = Symbol( true ? "Suspense" : 0);
var KEEP_ALIVE = Symbol( true ? "KeepAlive" : 0);
var BASE_TRANSITION = Symbol( true ? "BaseTransition" : 0);
var OPEN_BLOCK = Symbol( true ? "openBlock" : 0);
var CREATE_BLOCK = Symbol( true ? "createBlock" : 0);
var CREATE_ELEMENT_BLOCK = Symbol( true ? "createElementBlock" : 0);
var CREATE_VNODE = Symbol( true ? "createVNode" : 0);
var CREATE_ELEMENT_VNODE = Symbol( true ? "createElementVNode" : 0);
var CREATE_COMMENT = Symbol( true ? "createCommentVNode" : 0);
var CREATE_TEXT = Symbol( true ? "createTextVNode" : 0);
var CREATE_STATIC = Symbol( true ? "createStaticVNode" : 0);
var RESOLVE_COMPONENT = Symbol( true ? "resolveComponent" : 0);
var RESOLVE_DYNAMIC_COMPONENT = Symbol( true ? "resolveDynamicComponent" : 0);
var RESOLVE_DIRECTIVE = Symbol( true ? "resolveDirective" : 0);
var RESOLVE_FILTER = Symbol( true ? "resolveFilter" : 0);
var WITH_DIRECTIVES = Symbol( true ? "withDirectives" : 0);
var RENDER_LIST = Symbol( true ? "renderList" : 0);
var RENDER_SLOT = Symbol( true ? "renderSlot" : 0);
var CREATE_SLOTS = Symbol( true ? "createSlots" : 0);
var TO_DISPLAY_STRING = Symbol( true ? "toDisplayString" : 0);
var MERGE_PROPS = Symbol( true ? "mergeProps" : 0);
var NORMALIZE_CLASS = Symbol( true ? "normalizeClass" : 0);
var NORMALIZE_STYLE = Symbol( true ? "normalizeStyle" : 0);
var NORMALIZE_PROPS = Symbol( true ? "normalizeProps" : 0);
var GUARD_REACTIVE_PROPS = Symbol( true ? "guardReactiveProps" : 0);
var TO_HANDLERS = Symbol( true ? "toHandlers" : 0);
var CAMELIZE = Symbol( true ? "camelize" : 0);
var CAPITALIZE = Symbol( true ? "capitalize" : 0);
var TO_HANDLER_KEY = Symbol( true ? "toHandlerKey" : 0);
var SET_BLOCK_TRACKING = Symbol( true ? "setBlockTracking" : 0);
var PUSH_SCOPE_ID = Symbol( true ? "pushScopeId" : 0);
var POP_SCOPE_ID = Symbol( true ? "popScopeId" : 0);
var WITH_CTX = Symbol( true ? "withCtx" : 0);
var UNREF = Symbol( true ? "unref" : 0);
var IS_REF = Symbol( true ? "isRef" : 0);
var WITH_MEMO = Symbol( true ? "withMemo" : 0);
var IS_MEMO_SAME = Symbol( true ? "isMemoSame" : 0); // Name mapping for runtime helpers that need to be imported from 'vue' in
// generated code. Make sure these are correctly exported in the runtime!
// Using `any` here because TS doesn't allow symbols as index type.

var helperNameMap = (_helperNameMap = {}, _defineProperty(_helperNameMap, FRAGMENT, "Fragment"), _defineProperty(_helperNameMap, TELEPORT, "Teleport"), _defineProperty(_helperNameMap, SUSPENSE, "Suspense"), _defineProperty(_helperNameMap, KEEP_ALIVE, "KeepAlive"), _defineProperty(_helperNameMap, BASE_TRANSITION, "BaseTransition"), _defineProperty(_helperNameMap, OPEN_BLOCK, "openBlock"), _defineProperty(_helperNameMap, CREATE_BLOCK, "createBlock"), _defineProperty(_helperNameMap, CREATE_ELEMENT_BLOCK, "createElementBlock"), _defineProperty(_helperNameMap, CREATE_VNODE, "createVNode"), _defineProperty(_helperNameMap, CREATE_ELEMENT_VNODE, "createElementVNode"), _defineProperty(_helperNameMap, CREATE_COMMENT, "createCommentVNode"), _defineProperty(_helperNameMap, CREATE_TEXT, "createTextVNode"), _defineProperty(_helperNameMap, CREATE_STATIC, "createStaticVNode"), _defineProperty(_helperNameMap, RESOLVE_COMPONENT, "resolveComponent"), _defineProperty(_helperNameMap, RESOLVE_DYNAMIC_COMPONENT, "resolveDynamicComponent"), _defineProperty(_helperNameMap, RESOLVE_DIRECTIVE, "resolveDirective"), _defineProperty(_helperNameMap, RESOLVE_FILTER, "resolveFilter"), _defineProperty(_helperNameMap, WITH_DIRECTIVES, "withDirectives"), _defineProperty(_helperNameMap, RENDER_LIST, "renderList"), _defineProperty(_helperNameMap, RENDER_SLOT, "renderSlot"), _defineProperty(_helperNameMap, CREATE_SLOTS, "createSlots"), _defineProperty(_helperNameMap, TO_DISPLAY_STRING, "toDisplayString"), _defineProperty(_helperNameMap, MERGE_PROPS, "mergeProps"), _defineProperty(_helperNameMap, NORMALIZE_CLASS, "normalizeClass"), _defineProperty(_helperNameMap, NORMALIZE_STYLE, "normalizeStyle"), _defineProperty(_helperNameMap, NORMALIZE_PROPS, "normalizeProps"), _defineProperty(_helperNameMap, GUARD_REACTIVE_PROPS, "guardReactiveProps"), _defineProperty(_helperNameMap, TO_HANDLERS, "toHandlers"), _defineProperty(_helperNameMap, CAMELIZE, "camelize"), _defineProperty(_helperNameMap, CAPITALIZE, "capitalize"), _defineProperty(_helperNameMap, TO_HANDLER_KEY, "toHandlerKey"), _defineProperty(_helperNameMap, SET_BLOCK_TRACKING, "setBlockTracking"), _defineProperty(_helperNameMap, PUSH_SCOPE_ID, "pushScopeId"), _defineProperty(_helperNameMap, POP_SCOPE_ID, "popScopeId"), _defineProperty(_helperNameMap, WITH_CTX, "withCtx"), _defineProperty(_helperNameMap, UNREF, "unref"), _defineProperty(_helperNameMap, IS_REF, "isRef"), _defineProperty(_helperNameMap, WITH_MEMO, "withMemo"), _defineProperty(_helperNameMap, IS_MEMO_SAME, "isMemoSame"), _helperNameMap);

function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach(function (s) {
    helperNameMap[s] = helpers[s];
  });
} // AST Utilities ---------------------------------------------------------------
// Some expressions, e.g. sequence and conditional expressions, are never
// associated with template nodes, so their source locations are just a stub.
// Container types like CompoundExpression also don't need a real location.


var locStub = {
  source: '',
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};

function createRoot(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 0
    /* ROOT */
    ,
    children: children,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: undefined,
    loc: loc
  };
}

function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives) {
  var isBlock = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var disableTracking = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  var isComponent = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
  var loc = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : locStub;

  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
    } else {
      context.helper(getVNodeHelper(context.inSSR, isComponent));
    }

    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }

  return {
    type: 13
    /* VNODE_CALL */
    ,
    tag: tag,
    props: props,
    children: children,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    directives: directives,
    isBlock: isBlock,
    disableTracking: disableTracking,
    isComponent: isComponent,
    loc: loc
  };
}

function createArrayExpression(elements) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 17
    /* JS_ARRAY_EXPRESSION */
    ,
    loc: loc,
    elements: elements
  };
}

function createObjectExpression(properties) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 15
    /* JS_OBJECT_EXPRESSION */
    ,
    loc: loc,
    properties: properties
  };
}

function createObjectProperty(key, value) {
  return {
    type: 16
    /* JS_PROPERTY */
    ,
    loc: locStub,
    key: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(key) ? createSimpleExpression(key, true) : key,
    value: value
  };
}

function createSimpleExpression(content) {
  var isStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  var constType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    type: 4
    /* SIMPLE_EXPRESSION */
    ,
    loc: loc,
    content: content,
    isStatic: isStatic,
    constType: isStatic ? 3
    /* CAN_STRINGIFY */
    : constType
  };
}

function createInterpolation(content, loc) {
  return {
    type: 5
    /* INTERPOLATION */
    ,
    loc: loc,
    content: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(content) ? createSimpleExpression(content, false, loc) : content
  };
}

function createCompoundExpression(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 8
    /* COMPOUND_EXPRESSION */
    ,
    loc: loc,
    children: children
  };
}

function createCallExpression(callee) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  return {
    type: 14
    /* JS_CALL_EXPRESSION */
    ,
    loc: loc,
    callee: callee,
    arguments: args
  };
}

function createFunctionExpression(params) {
  var returns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var newline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSlot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var loc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : locStub;
  return {
    type: 18
    /* JS_FUNCTION_EXPRESSION */
    ,
    params: params,
    returns: returns,
    newline: newline,
    isSlot: isSlot,
    loc: loc
  };
}

function createConditionalExpression(test, consequent, alternate) {
  var newline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return {
    type: 19
    /* JS_CONDITIONAL_EXPRESSION */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    newline: newline,
    loc: locStub
  };
}

function createCacheExpression(index, value) {
  var isVNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 20
    /* JS_CACHE_EXPRESSION */
    ,
    index: index,
    value: value,
    isVNode: isVNode,
    loc: locStub
  };
}

function createBlockStatement(body) {
  return {
    type: 21
    /* JS_BLOCK_STATEMENT */
    ,
    body: body,
    loc: locStub
  };
}

function createTemplateLiteral(elements) {
  return {
    type: 22
    /* JS_TEMPLATE_LITERAL */
    ,
    elements: elements,
    loc: locStub
  };
}

function createIfStatement(test, consequent, alternate) {
  return {
    type: 23
    /* JS_IF_STATEMENT */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    loc: locStub
  };
}

function createAssignmentExpression(left, right) {
  return {
    type: 24
    /* JS_ASSIGNMENT_EXPRESSION */
    ,
    left: left,
    right: right,
    loc: locStub
  };
}

function createSequenceExpression(expressions) {
  return {
    type: 25
    /* JS_SEQUENCE_EXPRESSION */
    ,
    expressions: expressions,
    loc: locStub
  };
}

function createReturnStatement(returns) {
  return {
    type: 26
    /* JS_RETURN_STATEMENT */
    ,
    returns: returns,
    loc: locStub
  };
}

var isStaticExp = function isStaticExp(p) {
  return p.type === 4
  /* SIMPLE_EXPRESSION */
  && p.isStatic;
};

var isBuiltInType = function isBuiltInType(tag, expected) {
  return tag === expected || tag === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hyphenate)(expected);
};

function isCoreComponent(tag) {
  if (isBuiltInType(tag, 'Teleport')) {
    return TELEPORT;
  } else if (isBuiltInType(tag, 'Suspense')) {
    return SUSPENSE;
  } else if (isBuiltInType(tag, 'KeepAlive')) {
    return KEEP_ALIVE;
  } else if (isBuiltInType(tag, 'BaseTransition')) {
    return BASE_TRANSITION;
  }
}

var nonIdentifierRE = /^\d|[^\$\w]/;

var isSimpleIdentifier = function isSimpleIdentifier(name) {
  return !nonIdentifierRE.test(name);
};

var validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
var validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
var whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
/**
 * Simple lexer to check if an expression is a member expression. This is
 * lax and only checks validity at the root level (i.e. does not validate exps
 * inside square brackets), but it's ok since these are only used on template
 * expressions and false positives are invalid expressions in the first place.
 */

var isMemberExpressionBrowser = function isMemberExpressionBrowser(path) {
  // remove whitespaces around . or [ first
  path = path.trim().replace(whitespaceRE, function (s) {
    return s.trim();
  });
  var state = 0
  /* inMemberExp */
  ;
  var stateStack = [];
  var currentOpenBracketCount = 0;
  var currentOpenParensCount = 0;
  var currentStringType = null;

  for (var i = 0; i < path.length; i++) {
    var _char = path.charAt(i);

    switch (state) {
      case 0
      /* inMemberExp */
      :
        if (_char === '[') {
          stateStack.push(state);
          state = 1
          /* inBrackets */
          ;
          currentOpenBracketCount++;
        } else if (_char === '(') {
          stateStack.push(state);
          state = 2
          /* inParens */
          ;
          currentOpenParensCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(_char)) {
          return false;
        }

        break;

      case 1
      /* inBrackets */
      :
        if (_char === "'" || _char === "\"" || _char === '`') {
          stateStack.push(state);
          state = 3
          /* inString */
          ;
          currentStringType = _char;
        } else if (_char === "[") {
          currentOpenBracketCount++;
        } else if (_char === "]") {
          if (! --currentOpenBracketCount) {
            state = stateStack.pop();
          }
        }

        break;

      case 2
      /* inParens */
      :
        if (_char === "'" || _char === "\"" || _char === '`') {
          stateStack.push(state);
          state = 3
          /* inString */
          ;
          currentStringType = _char;
        } else if (_char === "(") {
          currentOpenParensCount++;
        } else if (_char === ")") {
          // if the exp ends as a call then it should not be considered valid
          if (i === path.length - 1) {
            return false;
          }

          if (! --currentOpenParensCount) {
            state = stateStack.pop();
          }
        }

        break;

      case 3
      /* inString */
      :
        if (_char === currentStringType) {
          state = stateStack.pop();
          currentStringType = null;
        }

        break;
    }
  }

  return !currentOpenBracketCount && !currentOpenParensCount;
};

var isMemberExpressionNode = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP;
var isMemberExpression = isMemberExpressionBrowser;

function getInnerRange(loc, offset, length) {
  var source = loc.source.slice(offset, offset + length);
  var newLoc = {
    source: source,
    start: advancePositionWithClone(loc.start, loc.source, offset),
    end: loc.end
  };

  if (length != null) {
    newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
  }

  return newLoc;
}

function advancePositionWithClone(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  return advancePositionWithMutation((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, pos), source, numberOfCharacters);
} // advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser


function advancePositionWithMutation(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  var linesCount = 0;
  var lastNewLinePos = -1;

  for (var i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10
    /* newline char code */
    ) {
      linesCount++;
      lastNewLinePos = i;
    }
  }

  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}

function assert(condition, msg) {
  /* istanbul ignore if */
  if (!condition) {
    throw new Error(msg || "unexpected compiler condition");
  }
}

function findDir(node, name) {
  var allowEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 7
    /* DIRECTIVE */
    && (allowEmpty || p.exp) && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}

function findProp(node, name) {
  var dynamicOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowEmpty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
      if (dynamicOnly) continue;

      if (p.name === name && (p.value || allowEmpty)) {
        return p;
      }
    } else if (p.name === 'bind' && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) {
      return p;
    }
  }
}

function isStaticArgOf(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}

function hasDynamicKeyVBind(node) {
  return node.props.some(function (p) {
    return p.type === 7
    /* DIRECTIVE */
    && p.name === 'bind' && (!p.arg || // v-bind="obj"
    p.arg.type !== 4
    /* SIMPLE_EXPRESSION */
    || // v-bind:[_ctx.foo]
    !p.arg.isStatic);
  } // v-bind:[foo]
  );
}

function isText(node) {
  return node.type === 5
  /* INTERPOLATION */
  || node.type === 2
  /* TEXT */
  ;
}

function isVSlot(p) {
  return p.type === 7
  /* DIRECTIVE */
  && p.name === 'slot';
}

function isTemplateNode(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 3
  /* TEMPLATE */
  ;
}

function isSlotOutlet(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 2
  /* SLOT */
  ;
}

function getVNodeHelper(ssr, isComponent) {
  return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}

function getVNodeBlockHelper(ssr, isComponent) {
  return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}

var propsHelperSet = new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);

function getUnnormalizedProps(props) {
  var callPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (props && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props) && props.type === 14
  /* JS_CALL_EXPRESSION */
  ) {
    var callee = props.callee;

    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(callee) && propsHelperSet.has(callee)) {
      return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
    }
  }

  return [props, callPath];
}

function injectProp(node, prop, context) {
  var propsWithInjection;
  /**
   * 1. mergeProps(...)
   * 2. toHandlers(...)
   * 3. normalizeProps(...)
   * 4. normalizeProps(guardReactiveProps(...))
   *
   * we need to get the real props before normalization
   */

  var props = node.type === 13
  /* VNODE_CALL */
  ? node.props : node.arguments[2];
  var callPath = [];
  var parentCall;

  if (props && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props) && props.type === 14
  /* JS_CALL_EXPRESSION */
  ) {
    var ret = getUnnormalizedProps(props);
    props = ret[0];
    callPath = ret[1];
    parentCall = callPath[callPath.length - 1];
  }

  if (props == null || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14
  /* JS_CALL_EXPRESSION */
  ) {
    // merged props... add ours
    // only inject key to object literal if it's the first argument so that
    // if doesn't override user provided keys
    var first = props.arguments[0];

    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(first) && first.type === 15
    /* JS_OBJECT_EXPRESSION */
    ) {
      first.properties.unshift(prop);
    } else {
      if (props.callee === TO_HANDLERS) {
        // #2366
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
      } else {
        props.arguments.unshift(createObjectExpression([prop]));
      }
    }

    !propsWithInjection && (propsWithInjection = props);
  } else if (props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
    var alreadyExists = false; // check existing key to avoid overriding user provided keys

    if (prop.key.type === 4
    /* SIMPLE_EXPRESSION */
    ) {
      var propKeyName = prop.key.content;
      alreadyExists = props.properties.some(function (p) {
        return p.key.type === 4
        /* SIMPLE_EXPRESSION */
        && p.key.content === propKeyName;
      });
    }

    if (!alreadyExists) {
      props.properties.unshift(prop);
    }

    propsWithInjection = props;
  } else {
    // single v-bind with expression, return a merged replacement
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]); // in the case of nested helper call, e.g. `normalizeProps(guardReactiveProps(props))`,
    // it will be rewritten as `normalizeProps(mergeProps({ key: 0 }, props))`,
    // the `guardReactiveProps` will no longer be needed

    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
      parentCall = callPath[callPath.length - 2];
    }
  }

  if (node.type === 13
  /* VNODE_CALL */
  ) {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.props = propsWithInjection;
    }
  } else {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
}

function toValidAssetId(name, type) {
  // see issue#4422, we need adding identifier on validAssetId if variable `name` has specific character
  return "_".concat(type, "_").concat(name.replace(/[^\w]/g, function (searchValue, replaceValue) {
    return searchValue === '-' ? '_' : name.charCodeAt(replaceValue).toString();
  }));
} // Check if a node contains expressions that reference current context scope ids


function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      for (var i = 0; i < node.props.length; i++) {
        var p = node.props[i];

        if (p.type === 7
        /* DIRECTIVE */
        && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
          return true;
        }
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 11
    /* FOR */
    :
      if (hasScopeRef(node.source, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 9
    /* IF */
    :
      return node.branches.some(function (b) {
        return hasScopeRef(b, ids);
      });

    case 10
    /* IF_BRANCH */
    :
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];

    case 8
    /* COMPOUND_EXPRESSION */
    :
      return node.children.some(function (c) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(c) && hasScopeRef(c, ids);
      });

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return hasScopeRef(node.content, ids);

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return false;

    default:
      if (true) ;
      return false;
  }
}

function getMemoedVNodeCall(node) {
  if (node.type === 14
  /* JS_CALL_EXPRESSION */
  && node.callee === WITH_MEMO) {
    return node.arguments[1].returns;
  } else {
    return node;
  }
}

function makeBlock(node, _ref) {
  var helper = _ref.helper,
      removeHelper = _ref.removeHelper,
      inSSR = _ref.inSSR;

  if (!node.isBlock) {
    node.isBlock = true;
    removeHelper(getVNodeHelper(inSSR, node.isComponent));
    helper(OPEN_BLOCK);
    helper(getVNodeBlockHelper(inSSR, node.isComponent));
  }
}

var deprecationData = (_deprecationData = {}, _defineProperty(_deprecationData, "COMPILER_IS_ON_ELEMENT"
/* COMPILER_IS_ON_ELEMENT */
, {
  message: "Platform-native elements with \"is\" prop will no longer be " + "treated as components in Vue 3 unless the \"is\" value is explicitly " + "prefixed with \"vue:\".",
  link: "https://v3.vuejs.org/guide/migration/custom-elements-interop.html"
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_SYNC"
/* COMPILER_V_BIND_SYNC */
, {
  message: function message(key) {
    return ".sync modifier for v-bind has been removed. Use v-model with " + "argument instead. `v-bind:".concat(key, ".sync` should be changed to ") + "`v-model:".concat(key, "`.");
  },
  link: "https://v3.vuejs.org/guide/migration/v-model.html"
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_PROP"
/* COMPILER_V_BIND_PROP */
, {
  message: ".prop modifier for v-bind has been removed and no longer necessary. " + "Vue 3 will automatically set a binding as DOM property when appropriate."
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_OBJECT_ORDER"
/* COMPILER_V_BIND_OBJECT_ORDER */
, {
  message: "v-bind=\"obj\" usage is now order sensitive and behaves like JavaScript " + "object spread: it will now overwrite an existing non-mergeable attribute " + "that appears before v-bind in the case of conflict. " + "To retain 2.x behavior, move v-bind to make it the first attribute. " + "You can also suppress this warning if the usage is intended.",
  link: "https://v3.vuejs.org/guide/migration/v-bind.html"
}), _defineProperty(_deprecationData, "COMPILER_V_ON_NATIVE"
/* COMPILER_V_ON_NATIVE */
, {
  message: ".native modifier for v-on has been removed as is no longer necessary.",
  link: "https://v3.vuejs.org/guide/migration/v-on-native-modifier-removed.html"
}), _defineProperty(_deprecationData, "COMPILER_V_IF_V_FOR_PRECEDENCE"
/* COMPILER_V_IF_V_FOR_PRECEDENCE */
, {
  message: "v-if / v-for precedence when used on the same element has changed " + "in Vue 3: v-if now takes higher precedence and will no longer have " + "access to v-for scope variables. It is best to avoid the ambiguity " + "with <template> tags or use a computed property that filters v-for " + "data source.",
  link: "https://v3.vuejs.org/guide/migration/v-if-v-for.html"
}), _defineProperty(_deprecationData, "COMPILER_NATIVE_TEMPLATE"
/* COMPILER_NATIVE_TEMPLATE */
, {
  message: "<template> with no special directives will render as a native template " + "element instead of its inner content in Vue 3."
}), _defineProperty(_deprecationData, "COMPILER_INLINE_TEMPLATE"
/* COMPILER_INLINE_TEMPLATE */
, {
  message: "\"inline-template\" has been removed in Vue 3.",
  link: "https://v3.vuejs.org/guide/migration/inline-template-attribute.html"
}), _defineProperty(_deprecationData, "COMPILER_FILTER"
/* COMPILER_FILTERS */
, {
  message: "filters have been removed in Vue 3. " + "The \"|\" symbol will be treated as native JavaScript bitwise OR operator. " + "Use method calls or computed properties instead.",
  link: "https://v3.vuejs.org/guide/migration/filters.html"
}), _deprecationData);

function getCompatValue(key, context) {
  var config = context.options ? context.options.compatConfig : context.compatConfig;
  var value = config && config[key];

  if (key === 'MODE') {
    return value || 3; // compiler defaults to v3 behavior
  } else {
    return value;
  }
}

function isCompatEnabled(key, context) {
  var mode = getCompatValue('MODE', context);
  var value = getCompatValue(key, context); // in v3 mode, only enable if explicitly set to true
  // otherwise enable for any non-false value

  return mode === 3 ? value === true : value !== false;
}

function checkCompatEnabled(key, context, loc) {
  var enabled = isCompatEnabled(key, context);

  if ( true && enabled) {
    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    warnDeprecation.apply(void 0, [key, context, loc].concat(args));
  }

  return enabled;
}

function warnDeprecation(key, context, loc) {
  var val = getCompatValue(key, context);

  if (val === 'suppress-warning') {
    return;
  }

  var _deprecationData$key = deprecationData[key],
      message = _deprecationData$key.message,
      link = _deprecationData$key.link;

  for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var msg = "(deprecation ".concat(key, ") ").concat(typeof message === 'function' ? message.apply(void 0, args) : message).concat(link ? "\n  Details: ".concat(link) : "");
  var err = new SyntaxError(msg);
  err.code = key;
  if (loc) err.loc = loc;
  context.onWarn(err);
} // The default decoder only provides escapes for characters reserved as part of
// the template syntax, and is only used if the custom renderer did not provide
// a platform-specific decoder.


var decodeRE = /&(gt|lt|amp|apos|quot);/g;
var decodeMap = {
  gt: '>',
  lt: '<',
  amp: '&',
  apos: "'",
  quot: '"'
};
var defaultParserOptions = {
  delimiters: ["{{", "}}"],
  getNamespace: function getNamespace() {
    return 0;
  }
  /* HTML */
  ,
  getTextMode: function getTextMode() {
    return 0;
  }
  /* DATA */
  ,
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  isPreTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  decodeEntities: function decodeEntities(rawText) {
    return rawText.replace(decodeRE, function (_, p1) {
      return decodeMap[p1];
    });
  },
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: "development" !== 'production'
};

function baseParse(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createParserContext(content, options);
  var start = getCursor(context);
  return createRoot(parseChildren(context, 0
  /* DATA */
  , []), getSelection(context, start));
}

function createParserContext(content, rawOptions) {
  var options = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, defaultParserOptions);
  var key;

  for (key in rawOptions) {
    // @ts-ignore
    options[key] = rawOptions[key] === undefined ? defaultParserOptions[key] : rawOptions[key];
  }

  return {
    options: options,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: content,
    source: content,
    inPre: false,
    inVPre: false,
    onWarn: options.onWarn
  };
}

function parseChildren(context, mode, ancestors) {
  var parent = last(ancestors);
  var ns = parent ? parent.ns : 0
  /* HTML */
  ;
  var nodes = [];

  while (!isEnd(context, mode, ancestors)) {
    var s = context.source;
    var node = undefined;

    if (mode === 0
    /* DATA */
    || mode === 1
    /* RCDATA */
    ) {
      if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
        // '{{'
        node = parseInterpolation(context, mode);
      } else if (mode === 0
      /* DATA */
      && s[0] === '<') {
        // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
        if (s.length === 1) {
          emitError(context, 5
          /* EOF_BEFORE_TAG_NAME */
          , 1);
        } else if (s[1] === '!') {
          // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
          if (startsWith(s, '<!--')) {
            node = parseComment(context);
          } else if (startsWith(s, '<!DOCTYPE')) {
            // Ignore DOCTYPE by a limitation.
            node = parseBogusComment(context);
          } else if (startsWith(s, '<![CDATA[')) {
            if (ns !== 0
            /* HTML */
            ) {
              node = parseCDATA(context, ancestors);
            } else {
              emitError(context, 1
              /* CDATA_IN_HTML_CONTENT */
              );
              node = parseBogusComment(context);
            }
          } else {
            emitError(context, 11
            /* INCORRECTLY_OPENED_COMMENT */
            );
            node = parseBogusComment(context);
          }
        } else if (s[1] === '/') {
          // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
          if (s.length === 2) {
            emitError(context, 5
            /* EOF_BEFORE_TAG_NAME */
            , 2);
          } else if (s[2] === '>') {
            emitError(context, 14
            /* MISSING_END_TAG_NAME */
            , 2);
            advanceBy(context, 3);
            continue;
          } else if (/[a-z]/i.test(s[2])) {
            emitError(context, 23
            /* X_INVALID_END_TAG */
            );
            parseTag(context, 1
            /* End */
            , parent);
            continue;
          } else {
            emitError(context, 12
            /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
            , 2);
            node = parseBogusComment(context);
          }
        } else if (/[a-z]/i.test(s[1])) {
          node = parseElement(context, ancestors); // 2.x <template> with no directive compat

          if (isCompatEnabled("COMPILER_NATIVE_TEMPLATE"
          /* COMPILER_NATIVE_TEMPLATE */
          , context) && node && node.tag === 'template' && !node.props.some(function (p) {
            return p.type === 7
            /* DIRECTIVE */
            && isSpecialTemplateDirective(p.name);
          })) {
             true && warnDeprecation("COMPILER_NATIVE_TEMPLATE"
            /* COMPILER_NATIVE_TEMPLATE */
            , context, node.loc);
            node = node.children;
          }
        } else if (s[1] === '?') {
          emitError(context, 21
          /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
          , 1);
          node = parseBogusComment(context);
        } else {
          emitError(context, 12
          /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
          , 1);
        }
      }
    }

    if (!node) {
      node = parseText(context, mode);
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
      for (var i = 0; i < node.length; i++) {
        pushNode(nodes, node[i]);
      }
    } else {
      pushNode(nodes, node);
    }
  } // Whitespace handling strategy like v2


  var removedWhitespace = false;

  if (mode !== 2
  /* RAWTEXT */
  && mode !== 1
  /* RCDATA */
  ) {
    var shouldCondense = context.options.whitespace !== 'preserve';

    for (var _i = 0; _i < nodes.length; _i++) {
      var _node2 = nodes[_i];

      if (!context.inPre && _node2.type === 2
      /* TEXT */
      ) {
        if (!/[^\t\r\n\f ]/.test(_node2.content)) {
          var prev = nodes[_i - 1];
          var next = nodes[_i + 1]; // Remove if:
          // - the whitespace is the first or last node, or:
          // - (condense mode) the whitespace is adjacent to a comment, or:
          // - (condense mode) the whitespace is between two elements AND contains newline

          if (!prev || !next || shouldCondense && (prev.type === 3
          /* COMMENT */
          || next.type === 3
          /* COMMENT */
          || prev.type === 1
          /* ELEMENT */
          && next.type === 1
          /* ELEMENT */
          && /[\r\n]/.test(_node2.content))) {
            removedWhitespace = true;
            nodes[_i] = null;
          } else {
            // Otherwise, the whitespace is condensed into a single space
            _node2.content = ' ';
          }
        } else if (shouldCondense) {
          // in condense mode, consecutive whitespaces in text are condensed
          // down to a single space.
          _node2.content = _node2.content.replace(/[\t\r\n\f ]+/g, ' ');
        }
      } // Remove comment nodes if desired by configuration.
      else if (_node2.type === 3
      /* COMMENT */
      && !context.options.comments) {
        removedWhitespace = true;
        nodes[_i] = null;
      }
    }

    if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
      // remove leading newline per html spec
      // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
      var first = nodes[0];

      if (first && first.type === 2
      /* TEXT */
      ) {
        first.content = first.content.replace(/^\r?\n/, '');
      }
    }
  }

  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}

function pushNode(nodes, node) {
  if (node.type === 2
  /* TEXT */
  ) {
    var prev = last(nodes); // Merge if both this and the previous node are text and those are
    // consecutive. This happens for cases like "a < b".

    if (prev && prev.type === 2
    /* TEXT */
    && prev.loc.end.offset === node.loc.start.offset) {
      prev.content += node.content;
      prev.loc.end = node.loc.end;
      prev.loc.source += node.loc.source;
      return;
    }
  }

  nodes.push(node);
}

function parseCDATA(context, ancestors) {
  advanceBy(context, 9);
  var nodes = parseChildren(context, 3
  /* CDATA */
  , ancestors);

  if (context.source.length === 0) {
    emitError(context, 6
    /* EOF_IN_CDATA */
    );
  } else {
    advanceBy(context, 3);
  }

  return nodes;
}

function parseComment(context) {
  var start = getCursor(context);
  var content; // Regular comment.

  var match = /--(\!)?>/.exec(context.source);

  if (!match) {
    content = context.source.slice(4);
    advanceBy(context, context.source.length);
    emitError(context, 7
    /* EOF_IN_COMMENT */
    );
  } else {
    if (match.index <= 3) {
      emitError(context, 0
      /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
      );
    }

    if (match[1]) {
      emitError(context, 10
      /* INCORRECTLY_CLOSED_COMMENT */
      );
    }

    content = context.source.slice(4, match.index); // Advancing with reporting nested comments.

    var s = context.source.slice(0, match.index);
    var prevIndex = 1,
        nestedIndex = 0;

    while ((nestedIndex = s.indexOf('<!--', prevIndex)) !== -1) {
      advanceBy(context, nestedIndex - prevIndex + 1);

      if (nestedIndex + 4 < s.length) {
        emitError(context, 16
        /* NESTED_COMMENT */
        );
      }

      prevIndex = nestedIndex + 1;
    }

    advanceBy(context, match.index + match[0].length - prevIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseBogusComment(context) {
  var start = getCursor(context);
  var contentStart = context.source[1] === '?' ? 1 : 2;
  var content;
  var closeIndex = context.source.indexOf('>');

  if (closeIndex === -1) {
    content = context.source.slice(contentStart);
    advanceBy(context, context.source.length);
  } else {
    content = context.source.slice(contentStart, closeIndex);
    advanceBy(context, closeIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseElement(context, ancestors) {
  // Start tag.
  var wasInPre = context.inPre;
  var wasInVPre = context.inVPre;
  var parent = last(ancestors);
  var element = parseTag(context, 0
  /* Start */
  , parent);
  var isPreBoundary = context.inPre && !wasInPre;
  var isVPreBoundary = context.inVPre && !wasInVPre;

  if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
    // #4030 self-closing <pre> tag
    if (isPreBoundary) {
      context.inPre = false;
    }

    if (isVPreBoundary) {
      context.inVPre = false;
    }

    return element;
  } // Children.


  ancestors.push(element);
  var mode = context.options.getTextMode(element, parent);
  var children = parseChildren(context, mode, ancestors);
  ancestors.pop(); // 2.x inline-template compat

  {
    var inlineTemplateProp = element.props.find(function (p) {
      return p.type === 6
      /* ATTRIBUTE */
      && p.name === 'inline-template';
    });

    if (inlineTemplateProp && checkCompatEnabled("COMPILER_INLINE_TEMPLATE"
    /* COMPILER_INLINE_TEMPLATE */
    , context, inlineTemplateProp.loc)) {
      var loc = getSelection(context, element.loc.end);
      inlineTemplateProp.value = {
        type: 2
        /* TEXT */
        ,
        content: loc.source,
        loc: loc
      };
    }
  }
  element.children = children; // End tag.

  if (startsWithEndTagOpen(context.source, element.tag)) {
    parseTag(context, 1
    /* End */
    , parent);
  } else {
    emitError(context, 24
    /* X_MISSING_END_TAG */
    , 0, element.loc.start);

    if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
      var first = children[0];

      if (first && startsWith(first.loc.source, '<!--')) {
        emitError(context, 8
        /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
        );
      }
    }
  }

  element.loc = getSelection(context, element.loc.start);

  if (isPreBoundary) {
    context.inPre = false;
  }

  if (isVPreBoundary) {
    context.inVPre = false;
  }

  return element;
}

var isSpecialTemplateDirective = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)("if,else,else-if,for,slot");

function parseTag(context, type, parent) {
  // Tag open.
  var start = getCursor(context);
  var match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
  var tag = match[1];
  var ns = context.options.getNamespace(tag, parent);
  advanceBy(context, match[0].length);
  advanceSpaces(context); // save current state in case we need to re-parse attributes with v-pre

  var cursor = getCursor(context);
  var currentSource = context.source; // check <pre> tag

  if (context.options.isPreTag(tag)) {
    context.inPre = true;
  } // Attributes.


  var props = parseAttributes(context, type); // check v-pre

  if (type === 0
  /* Start */
  && !context.inVPre && props.some(function (p) {
    return p.type === 7
    /* DIRECTIVE */
    && p.name === 'pre';
  })) {
    context.inVPre = true; // reset context

    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(context, cursor);
    context.source = currentSource; // re-parse attrs and filter out v-pre itself

    props = parseAttributes(context, type).filter(function (p) {
      return p.name !== 'v-pre';
    });
  } // Tag close.


  var isSelfClosing = false;

  if (context.source.length === 0) {
    emitError(context, 9
    /* EOF_IN_TAG */
    );
  } else {
    isSelfClosing = startsWith(context.source, '/>');

    if (type === 1
    /* End */
    && isSelfClosing) {
      emitError(context, 4
      /* END_TAG_WITH_TRAILING_SOLIDUS */
      );
    }

    advanceBy(context, isSelfClosing ? 2 : 1);
  }

  if (type === 1
  /* End */
  ) {
    return;
  } // 2.x deprecation checks


  if ( true && isCompatEnabled("COMPILER_V_IF_V_FOR_PRECEDENCE"
  /* COMPILER_V_IF_V_FOR_PRECEDENCE */
  , context)) {
    var hasIf = false;
    var hasFor = false;

    for (var i = 0; i < props.length; i++) {
      var p = props[i];

      if (p.type === 7
      /* DIRECTIVE */
      ) {
        if (p.name === 'if') {
          hasIf = true;
        } else if (p.name === 'for') {
          hasFor = true;
        }
      }

      if (hasIf && hasFor) {
        warnDeprecation("COMPILER_V_IF_V_FOR_PRECEDENCE"
        /* COMPILER_V_IF_V_FOR_PRECEDENCE */
        , context, getSelection(context, start));
        break;
      }
    }
  }

  var tagType = 0
  /* ELEMENT */
  ;

  if (!context.inVPre) {
    if (tag === 'slot') {
      tagType = 2
      /* SLOT */
      ;
    } else if (tag === 'template') {
      if (props.some(function (p) {
        return p.type === 7
        /* DIRECTIVE */
        && isSpecialTemplateDirective(p.name);
      })) {
        tagType = 3
        /* TEMPLATE */
        ;
      }
    } else if (isComponent(tag, props, context)) {
      tagType = 1
      /* COMPONENT */
      ;
    }
  }

  return {
    type: 1
    /* ELEMENT */
    ,
    ns: ns,
    tag: tag,
    tagType: tagType,
    props: props,
    isSelfClosing: isSelfClosing,
    children: [],
    loc: getSelection(context, start),
    codegenNode: undefined // to be created during transform phase

  };
}

function isComponent(tag, props, context) {
  var options = context.options;

  if (options.isCustomElement(tag)) {
    return false;
  }

  if (tag === 'component' || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) {
    return true;
  } // at this point the tag should be a native tag, but check for potential "is"
  // casting


  for (var i = 0; i < props.length; i++) {
    var p = props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
      if (p.name === 'is' && p.value) {
        if (p.value.content.startsWith('vue:')) {
          return true;
        } else if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT"
        /* COMPILER_IS_ON_ELEMENT */
        , context, p.loc)) {
          return true;
        }
      }
    } else {
      // directive
      // v-is (TODO Deprecate)
      if (p.name === 'is') {
        return true;
      } else if ( // :is on plain element - only treat as component in compat mode
      p.name === 'bind' && isStaticArgOf(p.arg, 'is') && true && checkCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* COMPILER_IS_ON_ELEMENT */
      , context, p.loc)) {
        return true;
      }
    }
  }
}

function parseAttributes(context, type) {
  var props = [];
  var attributeNames = new Set();

  while (context.source.length > 0 && !startsWith(context.source, '>') && !startsWith(context.source, '/>')) {
    if (startsWith(context.source, '/')) {
      emitError(context, 22
      /* UNEXPECTED_SOLIDUS_IN_TAG */
      );
      advanceBy(context, 1);
      advanceSpaces(context);
      continue;
    }

    if (type === 1
    /* End */
    ) {
      emitError(context, 3
      /* END_TAG_WITH_ATTRIBUTES */
      );
    }

    var attr = parseAttribute(context, attributeNames); // Trim whitespace between class
    // https://github.com/vuejs/core/issues/4251

    if (attr.type === 6
    /* ATTRIBUTE */
    && attr.value && attr.name === 'class') {
      attr.value.content = attr.value.content.replace(/\s+/g, ' ').trim();
    }

    if (type === 0
    /* Start */
    ) {
      props.push(attr);
    }

    if (/^[^\t\r\n\f />]/.test(context.source)) {
      emitError(context, 15
      /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
      );
    }

    advanceSpaces(context);
  }

  return props;
}

function parseAttribute(context, nameSet) {
  // Name.
  var start = getCursor(context);
  var match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
  var name = match[0];

  if (nameSet.has(name)) {
    emitError(context, 2
    /* DUPLICATE_ATTRIBUTE */
    );
  }

  nameSet.add(name);

  if (name[0] === '=') {
    emitError(context, 19
    /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
    );
  }

  {
    var pattern = /["'<]/g;
    var m;

    while (m = pattern.exec(name)) {
      emitError(context, 17
      /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
      , m.index);
    }
  }
  advanceBy(context, name.length); // Value

  var value = undefined;

  if (/^[\t\r\n\f ]*=/.test(context.source)) {
    advanceSpaces(context);
    advanceBy(context, 1);
    advanceSpaces(context);
    value = parseAttributeValue(context);

    if (!value) {
      emitError(context, 13
      /* MISSING_ATTRIBUTE_VALUE */
      );
    }
  }

  var loc = getSelection(context, start);

  if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
    var _match = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);

    var isPropShorthand = startsWith(name, '.');
    var dirName = _match[1] || (isPropShorthand || startsWith(name, ':') ? 'bind' : startsWith(name, '@') ? 'on' : 'slot');
    var arg;

    if (_match[2]) {
      var isSlot = dirName === 'slot';
      var startOffset = name.lastIndexOf(_match[2]);

      var _loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + _match[2].length + (isSlot && _match[3] || '').length));

      var content = _match[2];
      var isStatic = true;

      if (content.startsWith('[')) {
        isStatic = false;

        if (!content.endsWith(']')) {
          emitError(context, 27
          /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
          );
          content = content.slice(1);
        } else {
          content = content.slice(1, content.length - 1);
        }
      } else if (isSlot) {
        // #1241 special case for v-slot: vuetify relies extensively on slot
        // names containing dots. v-slot doesn't have any modifiers and Vue 2.x
        // supports such usage so we are keeping it consistent with 2.x.
        content += _match[3] || '';
      }

      arg = {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: content,
        isStatic: isStatic,
        constType: isStatic ? 3
        /* CAN_STRINGIFY */
        : 0
        /* NOT_CONSTANT */
        ,
        loc: _loc
      };
    }

    if (value && value.isQuoted) {
      var valueLoc = value.loc;
      valueLoc.start.offset++;
      valueLoc.start.column++;
      valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
      valueLoc.source = valueLoc.source.slice(1, -1);
    }

    var modifiers = _match[3] ? _match[3].slice(1).split('.') : [];
    if (isPropShorthand) modifiers.push('prop'); // 2.x compat v-bind:foo.sync -> v-model:foo

    if (dirName === 'bind' && arg) {
      if (modifiers.includes('sync') && checkCompatEnabled("COMPILER_V_BIND_SYNC"
      /* COMPILER_V_BIND_SYNC */
      , context, loc, arg.loc.source)) {
        dirName = 'model';
        modifiers.splice(modifiers.indexOf('sync'), 1);
      }

      if ( true && modifiers.includes('prop')) {
        checkCompatEnabled("COMPILER_V_BIND_PROP"
        /* COMPILER_V_BIND_PROP */
        , context, loc);
      }
    }

    return {
      type: 7
      /* DIRECTIVE */
      ,
      name: dirName,
      exp: value && {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: value.content,
        isStatic: false,
        // Treat as non-constant by default. This can be potentially set to
        // other values by `transformExpression` to make it eligible for hoisting.
        constType: 0
        /* NOT_CONSTANT */
        ,
        loc: value.loc
      },
      arg: arg,
      modifiers: modifiers,
      loc: loc
    };
  } // missing directive name or illegal directive name


  if (!context.inVPre && startsWith(name, 'v-')) {
    emitError(context, 26
    /* X_MISSING_DIRECTIVE_NAME */
    );
  }

  return {
    type: 6
    /* ATTRIBUTE */
    ,
    name: name,
    value: value && {
      type: 2
      /* TEXT */
      ,
      content: value.content,
      loc: value.loc
    },
    loc: loc
  };
}

function parseAttributeValue(context) {
  var start = getCursor(context);
  var content;
  var quote = context.source[0];
  var isQuoted = quote === "\"" || quote === "'";

  if (isQuoted) {
    // Quoted value.
    advanceBy(context, 1);
    var endIndex = context.source.indexOf(quote);

    if (endIndex === -1) {
      content = parseTextData(context, context.source.length, 4
      /* ATTRIBUTE_VALUE */
      );
    } else {
      content = parseTextData(context, endIndex, 4
      /* ATTRIBUTE_VALUE */
      );
      advanceBy(context, 1);
    }
  } else {
    // Unquoted
    var match = /^[^\t\r\n\f >]+/.exec(context.source);

    if (!match) {
      return undefined;
    }

    var unexpectedChars = /["'<=`]/g;
    var m;

    while (m = unexpectedChars.exec(match[0])) {
      emitError(context, 18
      /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
      , m.index);
    }

    content = parseTextData(context, match[0].length, 4
    /* ATTRIBUTE_VALUE */
    );
  }

  return {
    content: content,
    isQuoted: isQuoted,
    loc: getSelection(context, start)
  };
}

function parseInterpolation(context, mode) {
  var _context$options$deli = _slicedToArray(context.options.delimiters, 2),
      open = _context$options$deli[0],
      close = _context$options$deli[1];

  var closeIndex = context.source.indexOf(close, open.length);

  if (closeIndex === -1) {
    emitError(context, 25
    /* X_MISSING_INTERPOLATION_END */
    );
    return undefined;
  }

  var start = getCursor(context);
  advanceBy(context, open.length);
  var innerStart = getCursor(context);
  var innerEnd = getCursor(context);
  var rawContentLength = closeIndex - open.length;
  var rawContent = context.source.slice(0, rawContentLength);
  var preTrimContent = parseTextData(context, rawContentLength, mode);
  var content = preTrimContent.trim();
  var startOffset = preTrimContent.indexOf(content);

  if (startOffset > 0) {
    advancePositionWithMutation(innerStart, rawContent, startOffset);
  }

  var endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
  advancePositionWithMutation(innerEnd, rawContent, endOffset);
  advanceBy(context, close.length);
  return {
    type: 5
    /* INTERPOLATION */
    ,
    content: {
      type: 4
      /* SIMPLE_EXPRESSION */
      ,
      isStatic: false,
      // Set `isConstant` to false by default and will decide in transformExpression
      constType: 0
      /* NOT_CONSTANT */
      ,
      content: content,
      loc: getSelection(context, innerStart, innerEnd)
    },
    loc: getSelection(context, start)
  };
}

function parseText(context, mode) {
  var endTokens = mode === 3
  /* CDATA */
  ? [']]>'] : ['<', context.options.delimiters[0]];
  var endIndex = context.source.length;

  for (var i = 0; i < endTokens.length; i++) {
    var index = context.source.indexOf(endTokens[i], 1);

    if (index !== -1 && endIndex > index) {
      endIndex = index;
    }
  }

  var start = getCursor(context);
  var content = parseTextData(context, endIndex, mode);
  return {
    type: 2
    /* TEXT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}
/**
 * Get text data with a given length from the current location.
 * This translates HTML entities in the text data.
 */


function parseTextData(context, length, mode) {
  var rawText = context.source.slice(0, length);
  advanceBy(context, length);

  if (mode === 2
  /* RAWTEXT */
  || mode === 3
  /* CDATA */
  || !rawText.includes('&')) {
    return rawText;
  } else {
    // DATA or RCDATA containing "&"". Entity decoding required.
    return context.options.decodeEntities(rawText, mode === 4
    /* ATTRIBUTE_VALUE */
    );
  }
}

function getCursor(context) {
  var column = context.column,
      line = context.line,
      offset = context.offset;
  return {
    column: column,
    line: line,
    offset: offset
  };
}

function getSelection(context, start, end) {
  end = end || getCursor(context);
  return {
    start: start,
    end: end,
    source: context.originalSource.slice(start.offset, end.offset)
  };
}

function last(xs) {
  return xs[xs.length - 1];
}

function startsWith(source, searchString) {
  return source.startsWith(searchString);
}

function advanceBy(context, numberOfCharacters) {
  var source = context.source;
  advancePositionWithMutation(context, source, numberOfCharacters);
  context.source = source.slice(numberOfCharacters);
}

function advanceSpaces(context) {
  var match = /^[\t\r\n\f ]+/.exec(context.source);

  if (match) {
    advanceBy(context, match[0].length);
  }
}

function getNewPosition(context, start, numberOfCharacters) {
  return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
}

function emitError(context, code, offset) {
  var loc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getCursor(context);

  if (offset) {
    loc.offset += offset;
    loc.column += offset;
  }

  context.options.onError(createCompilerError(code, {
    start: loc,
    end: loc,
    source: ''
  }));
}

function isEnd(context, mode, ancestors) {
  var s = context.source;

  switch (mode) {
    case 0
    /* DATA */
    :
      if (startsWith(s, '</')) {
        // TODO: probably bad performance
        for (var i = ancestors.length - 1; i >= 0; --i) {
          if (startsWithEndTagOpen(s, ancestors[i].tag)) {
            return true;
          }
        }
      }

      break;

    case 1
    /* RCDATA */
    :
    case 2
    /* RAWTEXT */
    :
      {
        var parent = last(ancestors);

        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }

        break;
      }

    case 3
    /* CDATA */
    :
      if (startsWith(s, ']]>')) {
        return true;
      }

      break;
  }

  return !s;
}

function startsWithEndTagOpen(source, tag) {
  return startsWith(source, '</') && source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || '>');
}

function hoistStatic(root, context) {
  walk(root, context, // Root node is unfortunately non-hoistable due to potential parent
  // fallthrough attributes.
  isSingleElementRoot(root, root.children[0]));
}

function isSingleElementRoot(root, child) {
  var children = root.children;
  return children.length === 1 && child.type === 1
  /* ELEMENT */
  && !isSlotOutlet(child);
}

function walk(node, context) {
  var doNotHoistNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var children = node.children;
  var originalCount = children.length;
  var hoistedCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // only plain elements & text calls are eligible for hoisting.

    if (child.type === 1
    /* ELEMENT */
    && child.tagType === 0
    /* ELEMENT */
    ) {
      var constantType = doNotHoistNode ? 0
      /* NOT_CONSTANT */
      : getConstantType(child, context);

      if (constantType > 0
      /* NOT_CONSTANT */
      ) {
        if (constantType >= 2
        /* CAN_HOIST */
        ) {
          child.codegenNode.patchFlag = -1
          /* HOISTED */
          + ( true ? " /* HOISTED */" : 0);
          child.codegenNode = context.hoist(child.codegenNode);
          hoistedCount++;
          continue;
        }
      } else {
        // node may contain dynamic children, but its props may be eligible for
        // hoisting.
        var codegenNode = child.codegenNode;

        if (codegenNode.type === 13
        /* VNODE_CALL */
        ) {
          var flag = getPatchFlag(codegenNode);

          if ((!flag || flag === 512
          /* NEED_PATCH */
          || flag === 1
          /* TEXT */
          ) && getGeneratedPropsConstantType(child, context) >= 2
          /* CAN_HOIST */
          ) {
            var props = getNodeProps(child);

            if (props) {
              codegenNode.props = context.hoist(props);
            }
          }

          if (codegenNode.dynamicProps) {
            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
          }
        }
      }
    } else if (child.type === 12
    /* TEXT_CALL */
    && getConstantType(child.content, context) >= 2
    /* CAN_HOIST */
    ) {
      child.codegenNode = context.hoist(child.codegenNode);
      hoistedCount++;
    } // walk further


    if (child.type === 1
    /* ELEMENT */
    ) {
      var _isComponent = child.tagType === 1
      /* COMPONENT */
      ;

      if (_isComponent) {
        context.scopes.vSlot++;
      }

      walk(child, context);

      if (_isComponent) {
        context.scopes.vSlot--;
      }
    } else if (child.type === 11
    /* FOR */
    ) {
      // Do not hoist v-for single child because it has to be a block
      walk(child, context, child.children.length === 1);
    } else if (child.type === 9
    /* IF */
    ) {
      for (var _i2 = 0; _i2 < child.branches.length; _i2++) {
        // Do not hoist v-if single child because it has to be a block
        walk(child.branches[_i2], context, child.branches[_i2].children.length === 1);
      }
    }
  }

  if (hoistedCount && context.transformHoist) {
    context.transformHoist(children, context, node);
  } // all children were hoisted - the entire children array is hoistable.


  if (hoistedCount && hoistedCount === originalCount && node.type === 1
  /* ELEMENT */
  && node.tagType === 0
  /* ELEMENT */
  && node.codegenNode && node.codegenNode.type === 13
  /* VNODE_CALL */
  && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node.codegenNode.children)) {
    node.codegenNode.children = context.hoist(createArrayExpression(node.codegenNode.children));
  }
}

function getConstantType(node, context) {
  var constantCache = context.constantCache;

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      if (node.tagType !== 0
      /* ELEMENT */
      ) {
        return 0
        /* NOT_CONSTANT */
        ;
      }

      var cached = constantCache.get(node);

      if (cached !== undefined) {
        return cached;
      }

      var codegenNode = node.codegenNode;

      if (codegenNode.type !== 13
      /* VNODE_CALL */
      ) {
        return 0
        /* NOT_CONSTANT */
        ;
      }

      if (codegenNode.isBlock && node.tag !== 'svg' && node.tag !== 'foreignObject') {
        return 0
        /* NOT_CONSTANT */
        ;
      }

      var flag = getPatchFlag(codegenNode);

      if (!flag) {
        var _returnType = 3
        /* CAN_STRINGIFY */
        ; // Element itself has no patch flag. However we still need to check:
        // 1. Even for a node with no patch flag, it is possible for it to contain
        // non-hoistable expressions that refers to scope variables, e.g. compiler
        // injected keys or cached event handlers. Therefore we need to always
        // check the codegenNode's props to be sure.

        var generatedPropsType = getGeneratedPropsConstantType(node, context);

        if (generatedPropsType === 0
        /* NOT_CONSTANT */
        ) {
          constantCache.set(node, 0
          /* NOT_CONSTANT */
          );
          return 0
          /* NOT_CONSTANT */
          ;
        }

        if (generatedPropsType < _returnType) {
          _returnType = generatedPropsType;
        } // 2. its children.


        for (var i = 0; i < node.children.length; i++) {
          var childType = getConstantType(node.children[i], context);

          if (childType === 0
          /* NOT_CONSTANT */
          ) {
            constantCache.set(node, 0
            /* NOT_CONSTANT */
            );
            return 0
            /* NOT_CONSTANT */
            ;
          }

          if (childType < _returnType) {
            _returnType = childType;
          }
        } // 3. if the type is not already CAN_SKIP_PATCH which is the lowest non-0
        // type, check if any of the props can cause the type to be lowered
        // we can skip can_patch because it's guaranteed by the absence of a
        // patchFlag.


        if (_returnType > 1
        /* CAN_SKIP_PATCH */
        ) {
          for (var _i3 = 0; _i3 < node.props.length; _i3++) {
            var p = node.props[_i3];

            if (p.type === 7
            /* DIRECTIVE */
            && p.name === 'bind' && p.exp) {
              var expType = getConstantType(p.exp, context);

              if (expType === 0
              /* NOT_CONSTANT */
              ) {
                constantCache.set(node, 0
                /* NOT_CONSTANT */
                );
                return 0
                /* NOT_CONSTANT */
                ;
              }

              if (expType < _returnType) {
                _returnType = expType;
              }
            }
          }
        } // only svg/foreignObject could be block here, however if they are
        // static then they don't need to be blocks since there will be no
        // nested updates.


        if (codegenNode.isBlock) {
          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
          codegenNode.isBlock = false;
          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
        }

        constantCache.set(node, _returnType);
        return _returnType;
      } else {
        constantCache.set(node, 0
        /* NOT_CONSTANT */
        );
        return 0
        /* NOT_CONSTANT */
        ;
      }

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return 3
      /* CAN_STRINGIFY */
      ;

    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
    case 10
    /* IF_BRANCH */
    :
      return 0
      /* NOT_CONSTANT */
      ;

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return getConstantType(node.content, context);

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return node.constType;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      var returnType = 3
      /* CAN_STRINGIFY */
      ;

      for (var _i4 = 0; _i4 < node.children.length; _i4++) {
        var child = node.children[_i4];

        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(child)) {
          continue;
        }

        var _childType = getConstantType(child, context);

        if (_childType === 0
        /* NOT_CONSTANT */
        ) {
          return 0
          /* NOT_CONSTANT */
          ;
        } else if (_childType < returnType) {
          returnType = _childType;
        }
      }

      return returnType;

    default:
      if (true) ;
      return 0
      /* NOT_CONSTANT */
      ;
  }
}

var allowHoistedHelperSet = new Set([NORMALIZE_CLASS, NORMALIZE_STYLE, NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);

function getConstantTypeOfHelperCall(value, context) {
  if (value.type === 14
  /* JS_CALL_EXPRESSION */
  && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value.callee) && allowHoistedHelperSet.has(value.callee)) {
    var arg = value.arguments[0];

    if (arg.type === 4
    /* SIMPLE_EXPRESSION */
    ) {
      return getConstantType(arg, context);
    } else if (arg.type === 14
    /* JS_CALL_EXPRESSION */
    ) {
      // in the case of nested helper call, e.g. `normalizeProps(guardReactiveProps(exp))`
      return getConstantTypeOfHelperCall(arg, context);
    }
  }

  return 0
  /* NOT_CONSTANT */
  ;
}

function getGeneratedPropsConstantType(node, context) {
  var returnType = 3
  /* CAN_STRINGIFY */
  ;
  var props = getNodeProps(node);

  if (props && props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
    var properties = props.properties;

    for (var i = 0; i < properties.length; i++) {
      var _properties$i = properties[i],
          key = _properties$i.key,
          value = _properties$i.value;
      var keyType = getConstantType(key, context);

      if (keyType === 0
      /* NOT_CONSTANT */
      ) {
        return keyType;
      }

      if (keyType < returnType) {
        returnType = keyType;
      }

      var valueType = void 0;

      if (value.type === 4
      /* SIMPLE_EXPRESSION */
      ) {
        valueType = getConstantType(value, context);
      } else if (value.type === 14
      /* JS_CALL_EXPRESSION */
      ) {
        // some helper calls can be hoisted,
        // such as the `normalizeProps` generated by the compiler for pre-normalize class,
        // in this case we need to respect the ConstantType of the helper's arguments
        valueType = getConstantTypeOfHelperCall(value, context);
      } else {
        valueType = 0
        /* NOT_CONSTANT */
        ;
      }

      if (valueType === 0
      /* NOT_CONSTANT */
      ) {
        return valueType;
      }

      if (valueType < returnType) {
        returnType = valueType;
      }
    }
  }

  return returnType;
}

function getNodeProps(node) {
  var codegenNode = node.codegenNode;

  if (codegenNode.type === 13
  /* VNODE_CALL */
  ) {
    return codegenNode.props;
  }
}

function getPatchFlag(node) {
  var flag = node.patchFlag;
  return flag ? parseInt(flag, 10) : undefined;
}

function createTransformContext(root, _ref2) {
  var _ref2$filename = _ref2.filename,
      filename = _ref2$filename === void 0 ? '' : _ref2$filename,
      _ref2$prefixIdentifie = _ref2.prefixIdentifiers,
      prefixIdentifiers = _ref2$prefixIdentifie === void 0 ? false : _ref2$prefixIdentifie,
      _ref2$hoistStatic = _ref2.hoistStatic,
      hoistStatic = _ref2$hoistStatic === void 0 ? false : _ref2$hoistStatic,
      _ref2$cacheHandlers = _ref2.cacheHandlers,
      cacheHandlers = _ref2$cacheHandlers === void 0 ? false : _ref2$cacheHandlers,
      _ref2$nodeTransforms = _ref2.nodeTransforms,
      nodeTransforms = _ref2$nodeTransforms === void 0 ? [] : _ref2$nodeTransforms,
      _ref2$directiveTransf = _ref2.directiveTransforms,
      directiveTransforms = _ref2$directiveTransf === void 0 ? {} : _ref2$directiveTransf,
      _ref2$transformHoist = _ref2.transformHoist,
      transformHoist = _ref2$transformHoist === void 0 ? null : _ref2$transformHoist,
      _ref2$isBuiltInCompon = _ref2.isBuiltInComponent,
      isBuiltInComponent = _ref2$isBuiltInCompon === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP : _ref2$isBuiltInCompon,
      _ref2$isCustomElement = _ref2.isCustomElement,
      isCustomElement = _ref2$isCustomElement === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP : _ref2$isCustomElement,
      _ref2$expressionPlugi = _ref2.expressionPlugins,
      expressionPlugins = _ref2$expressionPlugi === void 0 ? [] : _ref2$expressionPlugi,
      _ref2$scopeId = _ref2.scopeId,
      scopeId = _ref2$scopeId === void 0 ? null : _ref2$scopeId,
      _ref2$slotted = _ref2.slotted,
      slotted = _ref2$slotted === void 0 ? true : _ref2$slotted,
      _ref2$ssr = _ref2.ssr,
      ssr = _ref2$ssr === void 0 ? false : _ref2$ssr,
      _ref2$inSSR = _ref2.inSSR,
      inSSR = _ref2$inSSR === void 0 ? false : _ref2$inSSR,
      _ref2$ssrCssVars = _ref2.ssrCssVars,
      ssrCssVars = _ref2$ssrCssVars === void 0 ? "" : _ref2$ssrCssVars,
      _ref2$bindingMetadata = _ref2.bindingMetadata,
      bindingMetadata = _ref2$bindingMetadata === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ : _ref2$bindingMetadata,
      _ref2$inline = _ref2.inline,
      inline = _ref2$inline === void 0 ? false : _ref2$inline,
      _ref2$isTS = _ref2.isTS,
      isTS = _ref2$isTS === void 0 ? false : _ref2$isTS,
      _ref2$onError = _ref2.onError,
      onError = _ref2$onError === void 0 ? defaultOnError : _ref2$onError,
      _ref2$onWarn = _ref2.onWarn,
      onWarn = _ref2$onWarn === void 0 ? defaultOnWarn : _ref2$onWarn,
      compatConfig = _ref2.compatConfig;
  var nameMatch = filename.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/);
  var context = {
    // options
    selfName: nameMatch && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(nameMatch[1])),
    prefixIdentifiers: prefixIdentifiers,
    hoistStatic: hoistStatic,
    cacheHandlers: cacheHandlers,
    nodeTransforms: nodeTransforms,
    directiveTransforms: directiveTransforms,
    transformHoist: transformHoist,
    isBuiltInComponent: isBuiltInComponent,
    isCustomElement: isCustomElement,
    expressionPlugins: expressionPlugins,
    scopeId: scopeId,
    slotted: slotted,
    ssr: ssr,
    inSSR: inSSR,
    ssrCssVars: ssrCssVars,
    bindingMetadata: bindingMetadata,
    inline: inline,
    isTS: isTS,
    onError: onError,
    onWarn: onWarn,
    compatConfig: compatConfig,
    // state
    root: root,
    helpers: new Map(),
    components: new Set(),
    directives: new Set(),
    hoists: [],
    imports: [],
    constantCache: new Map(),
    temps: 0,
    cached: 0,
    identifiers: Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: root,
    childIndex: 0,
    inVOnce: false,
    // methods
    helper: function helper(name) {
      var count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper: function removeHelper(name) {
      var count = context.helpers.get(name);

      if (count) {
        var currentCount = count - 1;

        if (!currentCount) {
          context.helpers["delete"](name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString: function helperString(name) {
      return "_".concat(helperNameMap[context.helper(name)]);
    },
    replaceNode: function replaceNode(node) {
      /* istanbul ignore if */
      if (true) {
        if (!context.currentNode) {
          throw new Error("Node being replaced is already removed.");
        }

        if (!context.parent) {
          throw new Error("Cannot replace root node.");
        }
      }

      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode: function removeNode(node) {
      if ( true && !context.parent) {
        throw new Error("Cannot remove root node.");
      }

      var list = context.parent.children;
      var removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      /* istanbul ignore if */

      if ( true && removalIndex < 0) {
        throw new Error("node being removed is not a child of current parent");
      }

      if (!node || node === context.currentNode) {
        // current node removed
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        // sibling node removed
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }

      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: function onNodeRemoved() {},
    addIdentifiers: function addIdentifiers(exp) {},
    removeIdentifiers: function removeIdentifiers(exp) {},
    hoist: function hoist(exp) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(exp)) exp = createSimpleExpression(exp);
      context.hoists.push(exp);
      var identifier = createSimpleExpression("_hoisted_".concat(context.hoists.length), false, exp.loc, 2
      /* CAN_HOIST */
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache: function cache(exp) {
      var isVNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return createCacheExpression(context.cached++, exp, isVNode);
    }
  };
  {
    context.filters = new Set();
  }
  return context;
}

function transform(root, options) {
  var context = createTransformContext(root, options);
  traverseNode(root, context);

  if (options.hoistStatic) {
    hoistStatic(root, context);
  }

  if (!options.ssr) {
    createRootCodegen(root, context);
  } // finalize meta information


  root.helpers = _toConsumableArray(context.helpers.keys());
  root.components = _toConsumableArray(context.components);
  root.directives = _toConsumableArray(context.directives);
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  {
    root.filters = _toConsumableArray(context.filters);
  }
}

function createRootCodegen(root, context) {
  var helper = context.helper;
  var children = root.children;

  if (children.length === 1) {
    var child = children[0]; // if the single child is an element, turn it into a block.

    if (isSingleElementRoot(root, child) && child.codegenNode) {
      // single element root is never hoisted so codegenNode will never be
      // SimpleExpressionNode
      var codegenNode = child.codegenNode;

      if (codegenNode.type === 13
      /* VNODE_CALL */
      ) {
        makeBlock(codegenNode, context);
      }

      root.codegenNode = codegenNode;
    } else {
      // - single <slot/>, IfNode, ForNode: already blocks.
      // - single text node: always patched.
      // root codegen falls through via genNode()
      root.codegenNode = child;
    }
  } else if (children.length > 1) {
    // root has multiple nodes - return a fragment block.
    var patchFlag = 64
    /* STABLE_FRAGMENT */
    ;
    var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]; // check if the fragment actually contains a single valid child with
    // the rest being comments

    if ( true && children.filter(function (c) {
      return c.type !== 3;
    }
    /* COMMENT */
    ).length === 1) {
      patchFlag |= 2048
      /* DEV_ROOT_FRAGMENT */
      ;
      patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]);
    }

    root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : 0), undefined, undefined, true, undefined, false
    /* isComponent */
    );
  } else ;
}

function traverseChildren(parent, context) {
  var i = 0;

  var nodeRemoved = function nodeRemoved() {
    i--;
  };

  for (; i < parent.children.length; i++) {
    var child = parent.children[i];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child)) continue;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}

function traverseNode(node, context) {
  context.currentNode = node; // apply transform plugins

  var nodeTransforms = context.nodeTransforms;
  var exitFns = [];

  for (var _i5 = 0; _i5 < nodeTransforms.length; _i5++) {
    var onExit = nodeTransforms[_i5](node, context);

    if (onExit) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(onExit)) {
        exitFns.push.apply(exitFns, _toConsumableArray(onExit));
      } else {
        exitFns.push(onExit);
      }
    }

    if (!context.currentNode) {
      // node was removed
      return;
    } else {
      // node may have been replaced
      node = context.currentNode;
    }
  }

  switch (node.type) {
    case 3
    /* COMMENT */
    :
      if (!context.ssr) {
        // inject import for the Comment symbol, which is needed for creating
        // comment nodes with `createVNode`
        context.helper(CREATE_COMMENT);
      }

      break;

    case 5
    /* INTERPOLATION */
    :
      // no need to traverse, but we need to inject toString helper
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }

      break;
    // for container types, further traverse downwards

    case 9
    /* IF */
    :
      for (var _i6 = 0; _i6 < node.branches.length; _i6++) {
        traverseNode(node.branches[_i6], context);
      }

      break;

    case 10
    /* IF_BRANCH */
    :
    case 11
    /* FOR */
    :
    case 1
    /* ELEMENT */
    :
    case 0
    /* ROOT */
    :
      traverseChildren(node, context);
      break;
  } // exit transforms


  context.currentNode = node;
  var i = exitFns.length;

  while (i--) {
    exitFns[i]();
  }
}

function createStructuralDirectiveTransform(name, fn) {
  var matches = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? function (n) {
    return n === name;
  } : function (n) {
    return name.test(n);
  };
  return function (node, context) {
    if (node.type === 1
    /* ELEMENT */
    ) {
      var props = node.props; // structural directive transforms are not concerned with slots
      // as they are handled separately in vSlot.ts

      if (node.tagType === 3
      /* TEMPLATE */
      && props.some(isVSlot)) {
        return;
      }

      var exitFns = [];

      for (var i = 0; i < props.length; i++) {
        var prop = props[i];

        if (prop.type === 7
        /* DIRECTIVE */
        && matches(prop.name)) {
          // structural directives are removed to avoid infinite recursion
          // also we remove them *before* applying so that it can further
          // traverse itself in case it moves the node around
          props.splice(i, 1);
          i--;
          var onExit = fn(node, prop, context);
          if (onExit) exitFns.push(onExit);
        }
      }

      return exitFns;
    }
  };
}

var PURE_ANNOTATION = "/*#__PURE__*/";

function createCodegenContext(ast, _ref3) {
  var _ref3$mode = _ref3.mode,
      mode = _ref3$mode === void 0 ? 'function' : _ref3$mode,
      _ref3$prefixIdentifie = _ref3.prefixIdentifiers,
      prefixIdentifiers = _ref3$prefixIdentifie === void 0 ? mode === 'module' : _ref3$prefixIdentifie,
      _ref3$sourceMap = _ref3.sourceMap,
      sourceMap = _ref3$sourceMap === void 0 ? false : _ref3$sourceMap,
      _ref3$filename = _ref3.filename,
      filename = _ref3$filename === void 0 ? "template.vue.html" : _ref3$filename,
      _ref3$scopeId = _ref3.scopeId,
      scopeId = _ref3$scopeId === void 0 ? null : _ref3$scopeId,
      _ref3$optimizeImports = _ref3.optimizeImports,
      optimizeImports = _ref3$optimizeImports === void 0 ? false : _ref3$optimizeImports,
      _ref3$runtimeGlobalNa = _ref3.runtimeGlobalName,
      runtimeGlobalName = _ref3$runtimeGlobalNa === void 0 ? "Vue" : _ref3$runtimeGlobalNa,
      _ref3$runtimeModuleNa = _ref3.runtimeModuleName,
      runtimeModuleName = _ref3$runtimeModuleNa === void 0 ? "vue" : _ref3$runtimeModuleNa,
      _ref3$ssrRuntimeModul = _ref3.ssrRuntimeModuleName,
      ssrRuntimeModuleName = _ref3$ssrRuntimeModul === void 0 ? 'vue/server-renderer' : _ref3$ssrRuntimeModul,
      _ref3$ssr = _ref3.ssr,
      ssr = _ref3$ssr === void 0 ? false : _ref3$ssr,
      _ref3$isTS = _ref3.isTS,
      isTS = _ref3$isTS === void 0 ? false : _ref3$isTS,
      _ref3$inSSR = _ref3.inSSR,
      inSSR = _ref3$inSSR === void 0 ? false : _ref3$inSSR;
  var context = {
    mode: mode,
    prefixIdentifiers: prefixIdentifiers,
    sourceMap: sourceMap,
    filename: filename,
    scopeId: scopeId,
    optimizeImports: optimizeImports,
    runtimeGlobalName: runtimeGlobalName,
    runtimeModuleName: runtimeModuleName,
    ssrRuntimeModuleName: ssrRuntimeModuleName,
    ssr: ssr,
    isTS: isTS,
    inSSR: inSSR,
    source: ast.loc.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: undefined,
    helper: function helper(key) {
      return "_".concat(helperNameMap[key]);
    },
    push: function push(code, node) {
      context.code += code;
    },
    indent: function indent() {
      _newline(++context.indentLevel);
    },
    deindent: function deindent() {
      var withoutNewLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        _newline(--context.indentLevel);
      }
    },
    newline: function newline() {
      _newline(context.indentLevel);
    }
  };

  function _newline(n) {
    context.push('\n' + "  ".repeat(n));
  }

  return context;
}

function generate(ast) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  var mode = context.mode,
      push = context.push,
      prefixIdentifiers = context.prefixIdentifiers,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline,
      scopeId = context.scopeId,
      ssr = context.ssr;
  var hasHelpers = ast.helpers.length > 0;
  var useWithBlock = !prefixIdentifiers && mode !== 'module'; // preambles
  // in setup() inline mode, the preamble is generated in a sub context
  // and returned separately.

  var preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  } // enter render function

  var functionName = ssr ? "ssrRender" : "render";
  var args = ssr ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache'];
  var signature = args.join(', ');
  {
    push("function ".concat(functionName, "(").concat(signature, ") {"));
  }
  indent();

  if (useWithBlock) {
    push("with (_ctx) {");
    indent(); // function mode const declarations should be inside with block
    // also they should be renamed to avoid collision with user properties

    if (hasHelpers) {
      push("const { ".concat(ast.helpers.map(function (s) {
        return "".concat(helperNameMap[s], ": _").concat(helperNameMap[s]);
      }).join(', '), " } = _Vue"));
      push("\n");
      newline();
    }
  } // generate asset resolution statements


  if (ast.components.length) {
    genAssets(ast.components, 'component', context);

    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }

  if (ast.directives.length) {
    genAssets(ast.directives, 'directive', context);

    if (ast.temps > 0) {
      newline();
    }
  }

  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, 'filter', context);
    newline();
  }

  if (ast.temps > 0) {
    push("let ");

    for (var i = 0; i < ast.temps; i++) {
      push("".concat(i > 0 ? ", " : "", "_temp").concat(i));
    }
  }

  if (ast.components.length || ast.directives.length || ast.temps) {
    push("\n");
    newline();
  } // generate the VNode tree expression


  if (!ssr) {
    push("return ");
  }

  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push("null");
  }

  if (useWithBlock) {
    deindent();
    push("}");
  }

  deindent();
  push("}");
  return {
    ast: ast,
    code: context.code,
    preamble: "",
    // SourceMapGenerator does have toJSON() method but it's not in the types
    map: context.map ? context.map.toJSON() : undefined
  };
}

function genFunctionPreamble(ast, context) {
  var ssr = context.ssr,
      prefixIdentifiers = context.prefixIdentifiers,
      push = context.push,
      newline = context.newline,
      runtimeModuleName = context.runtimeModuleName,
      runtimeGlobalName = context.runtimeGlobalName,
      ssrRuntimeModuleName = context.ssrRuntimeModuleName;
  var VueBinding = runtimeGlobalName;

  var aliasHelper = function aliasHelper(s) {
    return "".concat(helperNameMap[s], ": _").concat(helperNameMap[s]);
  }; // Generate const declaration for helpers
  // In prefix mode, we place the const declaration at top so it's done
  // only once; But if we not prefixing, we place the declaration inside the
  // with block so it doesn't incur the `in` check cost for every helper access.


  if (ast.helpers.length > 0) {
    {
      // "with" mode.
      // save Vue in a separate variable to avoid collision
      push("const _Vue = ".concat(VueBinding, "\n")); // in "with" mode, helpers are declared inside the with block to avoid
      // has check cost, but hoists are lifted out of the function - we need
      // to provide the helper here.

      if (ast.hoists.length) {
        var staticHelpers = [CREATE_VNODE, CREATE_ELEMENT_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC].filter(function (helper) {
          return ast.helpers.includes(helper);
        }).map(aliasHelper).join(', ');
        push("const { ".concat(staticHelpers, " } = _Vue\n"));
      }
    }
  }

  genHoists(ast.hoists, context);
  newline();
  push("return ");
}

function genAssets(assets, type, _ref4) {
  var helper = _ref4.helper,
      push = _ref4.push,
      newline = _ref4.newline,
      isTS = _ref4.isTS;
  var resolver = helper(type === 'filter' ? RESOLVE_FILTER : type === 'component' ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);

  for (var i = 0; i < assets.length; i++) {
    var id = assets[i]; // potential component implicit self-reference inferred from SFC filename

    var maybeSelfReference = id.endsWith('__self');

    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }

    push("const ".concat(toValidAssetId(id, type), " = ").concat(resolver, "(").concat(JSON.stringify(id)).concat(maybeSelfReference ? ", true" : "", ")").concat(isTS ? "!" : ""));

    if (i < assets.length - 1) {
      newline();
    }
  }
}

function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }

  context.pure = true;
  var push = context.push,
      newline = context.newline,
      helper = context.helper,
      scopeId = context.scopeId,
      mode = context.mode;
  newline();

  for (var i = 0; i < hoists.length; i++) {
    var exp = hoists[i];

    if (exp) {
      push("const _hoisted_".concat(i + 1, " = ", ""));
      genNode(exp, context);
      newline();
    }
  }

  context.pure = false;
}

function isText$1(n) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(n) || n.type === 4
  /* SIMPLE_EXPRESSION */
  || n.type === 2
  /* TEXT */
  || n.type === 5
  /* INTERPOLATION */
  || n.type === 8
  /* COMPOUND_EXPRESSION */
  ;
}

function genNodeListAsArray(nodes, context) {
  var multilines = nodes.length > 3 ||  true && nodes.some(function (n) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(n) || !isText$1(n);
  });
  context.push("[");
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push("]");
}

function genNodeList(nodes, context) {
  var multilines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var comma = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var push = context.push,
      newline = context.newline;

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
      push(node);
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }

    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(',');
        newline();
      } else {
        comma && push(', ');
      }
    }
  }
}

function genNode(node, context) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
    context.push(node);
    return;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(node)) {
    context.push(context.helper(node));
    return;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
       true && assert(node.codegenNode != null, "Codegen node is missing for element/if/for node. " + "Apply appropriate transforms first.");
      genNode(node.codegenNode, context);
      break;

    case 2
    /* TEXT */
    :
      genText(node, context);
      break;

    case 4
    /* SIMPLE_EXPRESSION */
    :
      genExpression(node, context);
      break;

    case 5
    /* INTERPOLATION */
    :
      genInterpolation(node, context);
      break;

    case 12
    /* TEXT_CALL */
    :
      genNode(node.codegenNode, context);
      break;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      genCompoundExpression(node, context);
      break;

    case 3
    /* COMMENT */
    :
      genComment(node, context);
      break;

    case 13
    /* VNODE_CALL */
    :
      genVNodeCall(node, context);
      break;

    case 14
    /* JS_CALL_EXPRESSION */
    :
      genCallExpression(node, context);
      break;

    case 15
    /* JS_OBJECT_EXPRESSION */
    :
      genObjectExpression(node, context);
      break;

    case 17
    /* JS_ARRAY_EXPRESSION */
    :
      genArrayExpression(node, context);
      break;

    case 18
    /* JS_FUNCTION_EXPRESSION */
    :
      genFunctionExpression(node, context);
      break;

    case 19
    /* JS_CONDITIONAL_EXPRESSION */
    :
      genConditionalExpression(node, context);
      break;

    case 20
    /* JS_CACHE_EXPRESSION */
    :
      genCacheExpression(node, context);
      break;

    case 21
    /* JS_BLOCK_STATEMENT */
    :
      genNodeList(node.body, context, true, false);
      break;
    // SSR only types

    case 22
    /* JS_TEMPLATE_LITERAL */
    :
      break;

    case 23
    /* JS_IF_STATEMENT */
    :
      break;

    case 24
    /* JS_ASSIGNMENT_EXPRESSION */
    :
      break;

    case 25
    /* JS_SEQUENCE_EXPRESSION */
    :
      break;

    case 26
    /* JS_RETURN_STATEMENT */
    :
      break;

    /* istanbul ignore next */

    case 10
    /* IF_BRANCH */
    :
      // noop
      break;

    default:
      if (true) {
        assert(false, "unhandled codegen node type: ".concat(node.type)); // make sure we exhaust all possible types

        var exhaustiveCheck = node;
        return exhaustiveCheck;
      }

  }
}

function genText(node, context) {
  context.push(JSON.stringify(node.content), node);
}

function genExpression(node, context) {
  var content = node.content,
      isStatic = node.isStatic;
  context.push(isStatic ? JSON.stringify(content) : content, node);
}

function genInterpolation(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  if (pure) push(PURE_ANNOTATION);
  push("".concat(helper(TO_DISPLAY_STRING), "("));
  genNode(node.content, context);
  push(")");
}

function genCompoundExpression(node, context) {
  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child)) {
      context.push(child);
    } else {
      genNode(child, context);
    }
  }
}

function genExpressionAsPropertyKey(node, context) {
  var push = context.push;

  if (node.type === 8
  /* COMPOUND_EXPRESSION */
  ) {
    push("[");
    genCompoundExpression(node, context);
    push("]");
  } else if (node.isStatic) {
    // only quote keys if necessary
    var text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, node);
  } else {
    push("[".concat(node.content, "]"), node);
  }
}

function genComment(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push("".concat(helper(CREATE_COMMENT), "(").concat(JSON.stringify(node.content), ")"), node);
}

function genVNodeCall(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var tag = node.tag,
      props = node.props,
      children = node.children,
      patchFlag = node.patchFlag,
      dynamicProps = node.dynamicProps,
      directives = node.directives,
      isBlock = node.isBlock,
      disableTracking = node.disableTracking,
      isComponent = node.isComponent;

  if (directives) {
    push(helper(WITH_DIRECTIVES) + "(");
  }

  if (isBlock) {
    push("(".concat(helper(OPEN_BLOCK), "(").concat(disableTracking ? "true" : "", "), "));
  }

  if (pure) {
    push(PURE_ANNOTATION);
  }

  var callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent) : getVNodeHelper(context.inSSR, isComponent);
  push(helper(callHelper) + "(", node);
  genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
  push(")");

  if (isBlock) {
    push(")");
  }

  if (directives) {
    push(", ");
    genNode(directives, context);
    push(")");
  }
}

function genNullableArgs(args) {
  var i = args.length;

  while (i--) {
    if (args[i] != null) break;
  }

  return args.slice(0, i + 1).map(function (arg) {
    return arg || "null";
  });
} // JavaScript


function genCallExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var callee = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node.callee) ? node.callee : helper(node.callee);

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(callee + "(", node);
  genNodeList(node.arguments, context);
  push(")");
}

function genObjectExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  var properties = node.properties;

  if (!properties.length) {
    push("{}", node);
    return;
  }

  var multilines = properties.length > 1 ||  true && properties.some(function (p) {
    return p.value.type !== 4;
  }
  /* SIMPLE_EXPRESSION */
  );
  push(multilines ? "{" : "{ ");
  multilines && indent();

  for (var i = 0; i < properties.length; i++) {
    var _properties$i2 = properties[i],
        key = _properties$i2.key,
        value = _properties$i2.value; // key

    genExpressionAsPropertyKey(key, context);
    push(": "); // value

    genNode(value, context);

    if (i < properties.length - 1) {
      // will only reach this if it's multilines
      push(",");
      newline();
    }
  }

  multilines && deindent();
  push(multilines ? "}" : " }");
}

function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}

function genFunctionExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent;
  var params = node.params,
      returns = node.returns,
      body = node.body,
      newline = node.newline,
      isSlot = node.isSlot;

  if (isSlot) {
    // wrap slot functions with owner context
    push("_".concat(helperNameMap[WITH_CTX], "("));
  }

  push("(", node);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }

  push(") => ");

  if (newline || body) {
    push("{");
    indent();
  }

  if (returns) {
    if (newline) {
      push("return ");
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }

  if (newline || body) {
    deindent();
    push("}");
  }

  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(", undefined, true");
    }

    push(")");
  }
}

function genConditionalExpression(node, context) {
  var test = node.test,
      consequent = node.consequent,
      alternate = node.alternate,
      needNewline = node.newline;
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;

  if (test.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
    var needsParens = !isSimpleIdentifier(test.content);
    needsParens && push("(");
    genExpression(test, context);
    needsParens && push(")");
  } else {
    push("(");
    genNode(test, context);
    push(")");
  }

  needNewline && indent();
  context.indentLevel++;
  needNewline || push(" ");
  push("? ");
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(" ");
  push(": ");
  var isNested = alternate.type === 19
  /* JS_CONDITIONAL_EXPRESSION */
  ;

  if (!isNested) {
    context.indentLevel++;
  }

  genNode(alternate, context);

  if (!isNested) {
    context.indentLevel--;
  }

  needNewline && deindent(true
  /* without newline */
  );
}

function genCacheExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  push("_cache[".concat(node.index, "] || ("));

  if (node.isVNode) {
    indent();
    push("".concat(helper(SET_BLOCK_TRACKING), "(-1),"));
    newline();
  }

  push("_cache[".concat(node.index, "] = "));
  genNode(node.value, context);

  if (node.isVNode) {
    push(",");
    newline();
    push("".concat(helper(SET_BLOCK_TRACKING), "(1),"));
    newline();
    push("_cache[".concat(node.index, "]"));
    deindent();
  }

  push(")");
}

function walkIdentifiers(root, onIdentifier) {
  var includeAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var parentStack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var knownIds = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Object.create(null);
  {
    return;
  }
}

function isReferencedIdentifier(id, parent, parentStack) {
  {
    return false;
  }
}

function isInDestructureAssignment(parent, parentStack) {
  if (parent && (parent.type === 'ObjectProperty' || parent.type === 'ArrayPattern')) {
    var i = parentStack.length;

    while (i--) {
      var p = parentStack[i];

      if (p.type === 'AssignmentExpression') {
        return true;
      } else if (p.type !== 'ObjectProperty' && !p.type.endsWith('Pattern')) {
        break;
      }
    }
  }

  return false;
}

function walkFunctionParams(node, onIdent) {
  var _iterator = _createForOfIteratorHelper(node.params),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;

      var _iterator2 = _createForOfIteratorHelper(extractIdentifiers(p)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var id = _step2.value;
          onIdent(id);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function walkBlockDeclarations(block, onIdent) {
  var _iterator3 = _createForOfIteratorHelper(block.body),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var stmt = _step3.value;

      if (stmt.type === 'VariableDeclaration') {
        if (stmt.declare) continue;

        var _iterator4 = _createForOfIteratorHelper(stmt.declarations),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var decl = _step4.value;

            var _iterator5 = _createForOfIteratorHelper(extractIdentifiers(decl.id)),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var id = _step5.value;
                onIdent(id);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else if (stmt.type === 'FunctionDeclaration' || stmt.type === 'ClassDeclaration') {
        if (stmt.declare || !stmt.id) continue;
        onIdent(stmt.id);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function extractIdentifiers(param) {
  var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  switch (param.type) {
    case 'Identifier':
      nodes.push(param);
      break;

    case 'MemberExpression':
      var object = param;

      while (object.type === 'MemberExpression') {
        object = object.object;
      }

      nodes.push(object);
      break;

    case 'ObjectPattern':
      var _iterator6 = _createForOfIteratorHelper(param.properties),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var prop = _step6.value;

          if (prop.type === 'RestElement') {
            extractIdentifiers(prop.argument, nodes);
          } else {
            extractIdentifiers(prop.value, nodes);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      break;

    case 'ArrayPattern':
      param.elements.forEach(function (element) {
        if (element) extractIdentifiers(element, nodes);
      });
      break;

    case 'RestElement':
      extractIdentifiers(param.argument, nodes);
      break;

    case 'AssignmentPattern':
      extractIdentifiers(param.left, nodes);
      break;
  }

  return nodes;
}

var isFunctionType = function isFunctionType(node) {
  return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
};

var isStaticProperty = function isStaticProperty(node) {
  return node && (node.type === 'ObjectProperty' || node.type === 'ObjectMethod') && !node.computed;
};

var isStaticPropertyKey = function isStaticPropertyKey(node, parent) {
  return isStaticProperty(parent) && parent.key === node;
}; // these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed


var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments,typeof,void').split(',').join('\\b|\\b') + '\\b'); // strip strings in expressions

var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
/**
 * Validate a non-prefixed expression.
 * This is only called when using the in-browser runtime compiler since it
 * doesn't prefix expressions.
 */

function validateBrowserExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var exp = node.content; // empty expressions are validated per-directive since some directives
  // do allow empty expressions.

  if (!exp.trim()) {
    return;
  }

  try {
    new Function(asRawStatements ? " ".concat(exp, " ") : "return ".concat(asParams ? "(".concat(exp, ") => {}") : "(".concat(exp, ")")));
  } catch (e) {
    var message = e.message;
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

    if (keywordMatch) {
      message = "avoid using JavaScript keyword as property name: \"".concat(keywordMatch[0], "\"");
    }

    context.onError(createCompilerError(44
    /* X_INVALID_EXPRESSION */
    , node.loc, undefined, message));
  }
}

var transformExpression = function transformExpression(node, context) {
  if (node.type === 5
  /* INTERPOLATION */
  ) {
    node.content = processExpression(node.content, context);
  } else if (node.type === 1
  /* ELEMENT */
  ) {
    // handle directives on element
    for (var i = 0; i < node.props.length; i++) {
      var dir = node.props[i]; // do not process for v-on & v-for since they are special handled

      if (dir.type === 7
      /* DIRECTIVE */
      && dir.name !== 'for') {
        var exp = dir.exp;
        var arg = dir.arg; // do not process exp if this is v-on:arg - we need special handling
        // for wrapping inline statements.

        if (exp && exp.type === 4
        /* SIMPLE_EXPRESSION */
        && !(dir.name === 'on' && arg)) {
          dir.exp = processExpression(exp, context, // slot args must be processed as function params
          dir.name === 'slot');
        }

        if (arg && arg.type === 4
        /* SIMPLE_EXPRESSION */
        && !arg.isStatic) {
          dir.arg = processExpression(arg, context);
        }
      }
    }
  }
}; // Important: since this function uses Node.js only dependencies, it should
// always be used with a leading !true check so that it can be
// tree-shaken from the browser build.


function processExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var localVars = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Object.create(context.identifiers);
  {
    if (true) {
      // simple in-browser validation (same logic in 2.x)
      validateBrowserExpression(node, context, asParams, asRawStatements);
    }

    return node;
  }
}

var transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, function (node, dir, context) {
  return processIf(node, dir, context, function (ifNode, branch, isRoot) {
    // #1587: We need to dynamically increment the key based on the current
    // node's sibling nodes, since chained v-if/else branches are
    // rendered at the same depth
    var siblings = context.parent.children;
    var i = siblings.indexOf(ifNode);
    var key = 0;

    while (i-- >= 0) {
      var sibling = siblings[i];

      if (sibling && sibling.type === 9
      /* IF */
      ) {
        key += sibling.branches.length;
      }
    } // Exit callback. Complete the codegenNode when all children have been
    // transformed.


    return function () {
      if (isRoot) {
        ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
      } else {
        // attach this branch's codegen node to the v-if root.
        var parentCondition = getParentCondition(ifNode.codegenNode);
        parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
      }
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processIf(node, dir, context, processCodegen) {
  if (dir.name !== 'else' && (!dir.exp || !dir.exp.content.trim())) {
    var loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(createCompilerError(28
    /* X_V_IF_NO_EXPRESSION */
    , dir.loc));
    dir.exp = createSimpleExpression("true", false, loc);
  }

  if ( true && dir.exp) {
    validateBrowserExpression(dir.exp, context);
  }

  if (dir.name === 'if') {
    var branch = createIfBranch(node, dir);
    var ifNode = {
      type: 9
      /* IF */
      ,
      loc: node.loc,
      branches: [branch]
    };
    context.replaceNode(ifNode);

    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    // locate the adjacent v-if
    var siblings = context.parent.children;
    var comments = [];
    var i = siblings.indexOf(node);

    while (i-- >= -1) {
      var sibling = siblings[i];

      if ( true && sibling && sibling.type === 3
      /* COMMENT */
      ) {
        context.removeNode(sibling);
        comments.unshift(sibling);
        continue;
      }

      if (sibling && sibling.type === 2
      /* TEXT */
      && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }

      if (sibling && sibling.type === 9
      /* IF */
      ) {
        (function () {
          // Check if v-else was followed by v-else-if
          if (dir.name === 'else-if' && sibling.branches[sibling.branches.length - 1].condition === undefined) {
            context.onError(createCompilerError(30
            /* X_V_ELSE_NO_ADJACENT_IF */
            , node.loc));
          } // move the node to the if node's branches


          context.removeNode();
          var branch = createIfBranch(node, dir);

          if ( true && comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
          !(context.parent && context.parent.type === 1
          /* ELEMENT */
          && isBuiltInType(context.parent.tag, 'transition'))) {
            branch.children = [].concat(comments, _toConsumableArray(branch.children));
          } // check if user is forcing same key on different branches


          if (true) {
            var key = branch.userKey;

            if (key) {
              sibling.branches.forEach(function (_ref5) {
                var userKey = _ref5.userKey;

                if (isSameKey(userKey, key)) {
                  context.onError(createCompilerError(29
                  /* X_V_IF_SAME_KEY */
                  , branch.userKey.loc));
                }
              });
            }
          }

          sibling.branches.push(branch);
          var onExit = processCodegen && processCodegen(sibling, branch, false); // since the branch was removed, it will not be traversed.
          // make sure to traverse here.

          traverseNode(branch, context); // call on exit

          if (onExit) onExit(); // make sure to reset currentNode after traversal to indicate this
          // node has been removed.

          context.currentNode = null;
        })();
      } else {
        context.onError(createCompilerError(30
        /* X_V_ELSE_NO_ADJACENT_IF */
        , node.loc));
      }

      break;
    }
  }
}

function createIfBranch(node, dir) {
  return {
    type: 10
    /* IF_BRANCH */
    ,
    loc: node.loc,
    condition: dir.name === 'else' ? undefined : dir.exp,
    children: node.tagType === 3
    /* TEMPLATE */
    && !findDir(node, 'for') ? node.children : [node],
    userKey: findProp(node, "key")
  };
}

function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    createCallExpression(context.helper(CREATE_COMMENT), [ true ? '"v-if"' : 0, 'true']));
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}

function createChildrenCodegenNode(branch, keyIndex, context) {
  var helper = context.helper;
  var keyProperty = createObjectProperty("key", createSimpleExpression("".concat(keyIndex), false, locStub, 2
  /* CAN_HOIST */
  ));
  var children = branch.children;
  var firstChild = children[0];
  var needFragmentWrapper = children.length !== 1 || firstChild.type !== 1
  /* ELEMENT */
  ;

  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11
    /* FOR */
    ) {
      // optimize away nested fragments when child is a ForNode
      var vnodeCall = firstChild.codegenNode;
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    } else {
      var patchFlag = 64
      /* STABLE_FRAGMENT */
      ;
      var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]; // check if the fragment actually contains a single valid child with
      // the rest being comments

      if ( true && children.filter(function (c) {
        return c.type !== 3;
      }
      /* COMMENT */
      ).length === 1) {
        patchFlag |= 2048
        /* DEV_ROOT_FRAGMENT */
        ;
        patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]);
      }

      return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : 0), undefined, undefined, true, false, false
      /* isComponent */
      , branch.loc);
    }
  } else {
    var ret = firstChild.codegenNode;

    var _vnodeCall = getMemoedVNodeCall(ret); // Change createVNode to createBlock.


    if (_vnodeCall.type === 13
    /* VNODE_CALL */
    ) {
      makeBlock(_vnodeCall, context);
    } // inject branch key


    injectProp(_vnodeCall, keyProperty, context);
    return ret;
  }
}

function isSameKey(a, b) {
  if (!a || a.type !== b.type) {
    return false;
  }

  if (a.type === 6
  /* ATTRIBUTE */
  ) {
    if (a.value.content !== b.value.content) {
      return false;
    }
  } else {
    // directive
    var exp = a.exp;
    var branchExp = b.exp;

    if (exp.type !== branchExp.type) {
      return false;
    }

    if (exp.type !== 4
    /* SIMPLE_EXPRESSION */
    || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
      return false;
    }
  }

  return true;
}

function getParentCondition(node) {
  while (true) {
    if (node.type === 19
    /* JS_CONDITIONAL_EXPRESSION */
    ) {
      if (node.alternate.type === 19
      /* JS_CONDITIONAL_EXPRESSION */
      ) {
        node = node.alternate;
      } else {
        return node;
      }
    } else if (node.type === 20
    /* JS_CACHE_EXPRESSION */
    ) {
      node = node.value;
    }
  }
}

var transformFor = createStructuralDirectiveTransform('for', function (node, dir, context) {
  var helper = context.helper,
      removeHelper = context.removeHelper;
  return processFor(node, dir, context, function (forNode) {
    // create the loop render function expression now, and add the
    // iterator on exit after all children have been traversed
    var renderExp = createCallExpression(helper(RENDER_LIST), [forNode.source]);
    var isTemplate = isTemplateNode(node);
    var memo = findDir(node, 'memo');
    var keyProp = findProp(node, "key");
    var keyExp = keyProp && (keyProp.type === 6
    /* ATTRIBUTE */
    ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
    var keyProperty = keyProp ? createObjectProperty("key", keyExp) : null;
    var isStableFragment = forNode.source.type === 4
    /* SIMPLE_EXPRESSION */
    && forNode.source.constType > 0
    /* NOT_CONSTANT */
    ;
    var fragmentFlag = isStableFragment ? 64
    /* STABLE_FRAGMENT */
    : keyProp ? 128
    /* KEYED_FRAGMENT */
    : 256
    /* UNKEYED_FRAGMENT */
    ;
    forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, renderExp, fragmentFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[fragmentFlag], " */") : 0), undefined, undefined, true
    /* isBlock */
    , !isStableFragment
    /* disableTracking */
    , false
    /* isComponent */
    , node.loc);
    return function () {
      // finish the codegen now that all children have been traversed
      var childBlock;
      var children = forNode.children; // check <template v-for> key placement

      if (( true) && isTemplate) {
        node.children.some(function (c) {
          if (c.type === 1
          /* ELEMENT */
          ) {
            var key = findProp(c, 'key');

            if (key) {
              context.onError(createCompilerError(33
              /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
              , key.loc));
              return true;
            }
          }
        });
      }

      var needFragmentWrapper = children.length !== 1 || children[0].type !== 1
      /* ELEMENT */
      ;
      var slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] // api-extractor somehow fails to infer this
      : null;

      if (slotOutlet) {
        // <slot v-for="..."> or <template v-for="..."><slot/></template>
        childBlock = slotOutlet.codegenNode;

        if (isTemplate && keyProperty) {
          // <template v-for="..." :key="..."><slot/></template>
          // we need to inject the key to the renderSlot() call.
          // the props for renderSlot is passed as the 3rd argument.
          injectProp(childBlock, keyProperty, context);
        }
      } else if (needFragmentWrapper) {
        // <template v-for="..."> with text or multi-elements
        // should generate a fragment block for each loop
        childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : undefined, node.children, 64
        /* STABLE_FRAGMENT */
        + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64], " */") : 0), undefined, undefined, true, undefined, false
        /* isComponent */
        );
      } else {
        // Normal element v-for. Directly use the child's codegenNode
        // but mark it as a block.
        childBlock = children[0].codegenNode;

        if (isTemplate && keyProperty) {
          injectProp(childBlock, keyProperty, context);
        }

        if (childBlock.isBlock !== !isStableFragment) {
          if (childBlock.isBlock) {
            // switch from block to vnode
            removeHelper(OPEN_BLOCK);
            removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
          } else {
            // switch from vnode to block
            removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
          }
        }

        childBlock.isBlock = !isStableFragment;

        if (childBlock.isBlock) {
          helper(OPEN_BLOCK);
          helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
        } else {
          helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
        }
      }

      if (memo) {
        var loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [createSimpleExpression("_cached")]));
        loop.body = createBlockStatement([createCompoundExpression(["const _memo = (", memo.exp, ")"]), createCompoundExpression(["if (_cached"].concat(_toConsumableArray(keyExp ? [" && _cached.key === ", keyExp] : []), [" && ".concat(context.helperString(IS_MEMO_SAME), "(_cached, _memo)) return _cached")])), createCompoundExpression(["const _item = ", childBlock]), createSimpleExpression("_item.memo = _memo"), createSimpleExpression("return _item")]);
        renderExp.arguments.push(loop, createSimpleExpression("_cache"), createSimpleExpression(String(context.cached++)));
      } else {
        renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true
        /* force newline */
        ));
      }
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(createCompilerError(31
    /* X_V_FOR_NO_EXPRESSION */
    , dir.loc));
    return;
  }

  var parseResult = parseForExpression( // can only be simple expression because vFor transform is applied
  // before expression transform.
  dir.exp, context);

  if (!parseResult) {
    context.onError(createCompilerError(32
    /* X_V_FOR_MALFORMED_EXPRESSION */
    , dir.loc));
    return;
  }

  var addIdentifiers = context.addIdentifiers,
      removeIdentifiers = context.removeIdentifiers,
      scopes = context.scopes;
  var source = parseResult.source,
      value = parseResult.value,
      key = parseResult.key,
      index = parseResult.index;
  var forNode = {
    type: 11
    /* FOR */
    ,
    loc: dir.loc,
    source: source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult: parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode); // bookkeeping

  scopes.vFor++;
  var onExit = processCodegen && processCodegen(forNode);
  return function () {
    scopes.vFor--;
    if (onExit) onExit();
  };
}

var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/; // This regex doesn't cover the case if key or index aliases have destructuring,
// but those do not make sense in the first place, so this works in practice.

var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

function parseForExpression(input, context) {
  var loc = input.loc;
  var exp = input.content;
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) return;

  var _inMatch = _slicedToArray(inMatch, 3),
      LHS = _inMatch[1],
      RHS = _inMatch[2];

  var result = {
    source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: undefined,
    key: undefined,
    index: undefined
  };

  if (true) {
    validateBrowserExpression(result.source, context);
  }

  var valueContent = LHS.trim().replace(stripParensRE, '').trim();
  var trimmedOffset = LHS.indexOf(valueContent);
  var iteratorMatch = valueContent.match(forIteratorRE);

  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, '').trim();
    var keyContent = iteratorMatch[1].trim();
    var keyOffset;

    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(loc, keyContent, keyOffset);

      if (true) {
        validateBrowserExpression(result.key, context, true);
      }
    }

    if (iteratorMatch[2]) {
      var indexContent = iteratorMatch[2].trim();

      if (indexContent) {
        result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));

        if (true) {
          validateBrowserExpression(result.index, context, true);
        }
      }
    }
  }

  if (valueContent) {
    result.value = createAliasExpression(loc, valueContent, trimmedOffset);

    if (true) {
      validateBrowserExpression(result.value, context, true);
    }
  }

  return result;
}

function createAliasExpression(range, content, offset) {
  return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
}

function createForLoopParams(_ref6) {
  var value = _ref6.value,
      key = _ref6.key,
      index = _ref6.index;
  var memoArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return createParamsList([value, key, index].concat(_toConsumableArray(memoArgs)));
}

function createParamsList(args) {
  var i = args.length;

  while (i--) {
    if (args[i]) break;
  }

  return args.slice(0, i + 1).map(function (arg, i) {
    return arg || createSimpleExpression("_".repeat(i + 1), false);
  });
}

var defaultFallback = createSimpleExpression("undefined", false); // A NodeTransform that:
// 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
//    by transformExpression. This is only applied in non-browser builds with
//    { prefixIdentifiers: true }.
// 2. Track v-slot depths so that we know a slot is inside another slot.
//    Note the exit callback is executed before buildSlots() on the same node,
//    so only nested slots see positive numbers.

var trackSlotScopes = function trackSlotScopes(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && (node.tagType === 1
  /* COMPONENT */
  || node.tagType === 3
  /* TEMPLATE */
  )) {
    // We are only checking non-empty v-slot here
    // since we only care about slots that introduce scope variables.
    var vSlot = findDir(node, 'slot');

    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return function () {
        context.scopes.vSlot--;
      };
    }
  }
}; // A NodeTransform that tracks scope identifiers for scoped slots with v-for.
// This transform is only applied in non-browser builds with { prefixIdentifiers: true }


var trackVForSlotScopes = function trackVForSlotScopes(node, context) {
  var vFor;

  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, 'for'))) {
    var result = vFor.parseResult = parseForExpression(vFor.exp, context);

    if (result) {
      var value = result.value,
          key = result.key,
          index = result.index;
      var addIdentifiers = context.addIdentifiers,
          removeIdentifiers = context.removeIdentifiers;
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
      return function () {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      };
    }
  }
};

var buildClientSlotFn = function buildClientSlotFn(props, children, loc) {
  return createFunctionExpression(props, children, false
  /* newline */
  , true
  /* isSlot */
  , children.length ? children[0].loc : loc);
}; // Instead of being a DirectiveTransform, v-slot processing is called during
// transformElement to build the slots object for a component.


function buildSlots(node, context) {
  var buildSlotFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buildClientSlotFn;
  context.helper(WITH_CTX);
  var children = node.children,
      loc = node.loc;
  var slotsProperties = [];
  var dynamicSlots = []; // If the slot is inside a v-for or another v-slot, force it to be dynamic
  // since it likely uses a scope variable.

  var hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0; // 1. Check for slot with slotProps on component itself.
  //    <Comp v-slot="{ prop }"/>

  var onComponentSlot = findDir(node, 'slot', true);

  if (onComponentSlot) {
    var arg = onComponentSlot.arg,
        exp = onComponentSlot.exp;

    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }

    slotsProperties.push(createObjectProperty(arg || createSimpleExpression('default', true), buildSlotFn(exp, children, loc)));
  } // 2. Iterate through children and check for template slots
  //    <template v-slot:foo="{ prop }">


  var hasTemplateSlots = false;
  var hasNamedDefaultSlot = false;
  var implicitDefaultChildren = [];
  var seenSlotNames = new Set();

  for (var i = 0; i < children.length; i++) {
    var slotElement = children[i];
    var slotDir = void 0;

    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, 'slot', true))) {
      // not a <template v-slot>, skip.
      if (slotElement.type !== 3
      /* COMMENT */
      ) {
        implicitDefaultChildren.push(slotElement);
      }

      continue;
    }

    if (onComponentSlot) {
      // already has on-component slot - this is incorrect usage.
      context.onError(createCompilerError(37
      /* X_V_SLOT_MIXED_SLOT_USAGE */
      , slotDir.loc));
      break;
    }

    hasTemplateSlots = true;
    var slotChildren = slotElement.children,
        slotLoc = slotElement.loc;
    var _slotDir = slotDir,
        _slotDir$arg = _slotDir.arg,
        slotName = _slotDir$arg === void 0 ? createSimpleExpression("default", true) : _slotDir$arg,
        slotProps = _slotDir.exp,
        dirLoc = _slotDir.loc; // check if name is dynamic.

    var staticSlotName = void 0;

    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : "default";
    } else {
      hasDynamicSlots = true;
    }

    var slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc); // check if this slot is conditional (v-if/v-for)

    var vIf = void 0;
    var vElse = void 0;
    var vFor = void 0;

    if (vIf = findDir(slotElement, 'if')) {
      hasDynamicSlots = true;
      dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
    } else if (vElse = findDir(slotElement, /^else(-if)?$/, true
    /* allowEmpty */
    )) {
      // find adjacent v-if
      var j = i;
      var prev = void 0;

      while (j--) {
        prev = children[j];

        if (prev.type !== 3
        /* COMMENT */
        ) {
          break;
        }
      }

      if (prev && isTemplateNode(prev) && findDir(prev, 'if')) {
        // remove node
        children.splice(i, 1);
        i--; // attach this slot to previous conditional

        var conditional = dynamicSlots[dynamicSlots.length - 1];

        while (conditional.alternate.type === 19
        /* JS_CONDITIONAL_EXPRESSION */
        ) {
          conditional = conditional.alternate;
        }

        conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback) : buildDynamicSlot(slotName, slotFunction);
      } else {
        context.onError(createCompilerError(30
        /* X_V_ELSE_NO_ADJACENT_IF */
        , vElse.loc));
      }
    } else if (vFor = findDir(slotElement, 'for')) {
      hasDynamicSlots = true;
      var parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);

      if (parseResult) {
        // Render the dynamic slots as an array and add it to the createSlot()
        // args. The runtime knows how to handle it appropriately.
        dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [parseResult.source, createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true
        /* force newline */
        )]));
      } else {
        context.onError(createCompilerError(32
        /* X_V_FOR_MALFORMED_EXPRESSION */
        , vFor.loc));
      }
    } else {
      // check duplicate static names
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(createCompilerError(38
          /* X_V_SLOT_DUPLICATE_SLOT_NAMES */
          , dirLoc));
          continue;
        }

        seenSlotNames.add(staticSlotName);

        if (staticSlotName === 'default') {
          hasNamedDefaultSlot = true;
        }
      }

      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }

  if (!onComponentSlot) {
    var buildDefaultSlotProperty = function buildDefaultSlotProperty(props, children) {
      var fn = buildSlotFn(props, children, loc);

      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }

      return createObjectProperty("default", fn);
    };

    if (!hasTemplateSlots) {
      // implicit default slot (on component)
      slotsProperties.push(buildDefaultSlotProperty(undefined, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    implicitDefaultChildren.some(function (node) {
      return isNonWhitespaceContent(node);
    })) {
      // implicit default slot (mixed with named slots)
      if (hasNamedDefaultSlot) {
        context.onError(createCompilerError(39
        /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
        , implicitDefaultChildren[0].loc));
      } else {
        slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
      }
    }
  }

  var slotFlag = hasDynamicSlots ? 2
  /* DYNAMIC */
  : hasForwardedSlots(node.children) ? 3
  /* FORWARDED */
  : 1
  /* STABLE */
  ;
  var slots = createObjectExpression(slotsProperties.concat(createObjectProperty("_", // 2 = compiled but dynamic = can skip normalization, but must run diff
  // 1 = compiled and static = can skip normalization AND diff as optimized
  createSimpleExpression(slotFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.slotFlagsText[slotFlag], " */") : 0), false))), loc);

  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [slots, createArrayExpression(dynamicSlots)]);
  }

  return {
    slots: slots,
    hasDynamicSlots: hasDynamicSlots
  };
}

function buildDynamicSlot(name, fn) {
  return createObjectExpression([createObjectProperty("name", name), createObjectProperty("fn", fn)]);
}

function hasForwardedSlots(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    switch (child.type) {
      case 1
      /* ELEMENT */
      :
        if (child.tagType === 2
        /* SLOT */
        || hasForwardedSlots(child.children)) {
          return true;
        }

        break;

      case 9
      /* IF */
      :
        if (hasForwardedSlots(child.branches)) return true;
        break;

      case 10
      /* IF_BRANCH */
      :
      case 11
      /* FOR */
      :
        if (hasForwardedSlots(child.children)) return true;
        break;
    }
  }

  return false;
}

function isNonWhitespaceContent(node) {
  if (node.type !== 2
  /* TEXT */
  && node.type !== 12
  /* TEXT_CALL */
  ) return true;
  return node.type === 2
  /* TEXT */
  ? !!node.content.trim() : isNonWhitespaceContent(node.content);
} // some directive transforms (e.g. v-model) may return a symbol for runtime
// import, which should be used instead of a resolveDirective call.


var directiveImportMap = new WeakMap(); // generate a JavaScript AST for this element's codegen

var transformElement = function transformElement(node, context) {
  // perform the work on exit, after all child expressions have been
  // processed and merged.
  return function postTransformElement() {
    node = context.currentNode;

    if (!(node.type === 1
    /* ELEMENT */
    && (node.tagType === 0
    /* ELEMENT */
    || node.tagType === 1
    /* COMPONENT */
    ))) {
      return;
    }

    var _node3 = node,
        tag = _node3.tag,
        props = _node3.props;
    var isComponent = node.tagType === 1
    /* COMPONENT */
    ; // The goal of the transform is to create a codegenNode implementing the
    // VNodeCall interface.

    var vnodeTag = isComponent ? resolveComponentType(node, context) : "\"".concat(tag, "\"");
    var isDynamicComponent = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    var vnodeProps;
    var vnodeChildren;
    var vnodePatchFlag;
    var patchFlag = 0;
    var vnodeDynamicProps;
    var dynamicPropNames;
    var vnodeDirectives;
    var shouldUseBlock = // dynamic component may resolve to plain elements
    isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && ( // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    tag === 'svg' || tag === 'foreignObject'); // props

    if (props.length > 0) {
      var propsBuildResult = buildProps(node, context);
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      var directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map(function (dir) {
        return buildDirectiveArgs(dir, context);
      })) : undefined;

      if (propsBuildResult.shouldUseBlock) {
        shouldUseBlock = true;
      }
    } // children


    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        // Although a built-in component, we compile KeepAlive with raw children
        // instead of slot functions so that it can be used inside Transition
        // or other Transition-wrapping HOCs.
        // To ensure correct updates with block optimizations, we need to:
        // 1. Force keep-alive into a block. This avoids its children being
        //    collected by a parent block.
        shouldUseBlock = true; // 2. Force keep-alive to always be updated, since it uses raw children.

        patchFlag |= 1024
        /* DYNAMIC_SLOTS */
        ;

        if ( true && node.children.length > 1) {
          context.onError(createCompilerError(45
          /* X_KEEP_ALIVE_INVALID_CHILDREN */
          , {
            start: node.children[0].loc.start,
            end: node.children[node.children.length - 1].loc.end,
            source: ''
          }));
        }
      }

      var shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;

      if (shouldBuildAsSlots) {
        var _buildSlots = buildSlots(node, context),
            slots = _buildSlots.slots,
            hasDynamicSlots = _buildSlots.hasDynamicSlots;

        vnodeChildren = slots;

        if (hasDynamicSlots) {
          patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        var child = node.children[0];
        var type = child.type; // check for dynamic text children

        var hasDynamicTextChild = type === 5
        /* INTERPOLATION */
        || type === 8
        /* COMPOUND_EXPRESSION */
        ;

        if (hasDynamicTextChild && getConstantType(child, context) === 0
        /* NOT_CONSTANT */
        ) {
          patchFlag |= 1
          /* TEXT */
          ;
        } // pass directly if the only child is a text node
        // (plain / interpolation / expression)


        if (hasDynamicTextChild || type === 2
        /* TEXT */
        ) {
          vnodeChildren = child;
        } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    } // patchFlag & dynamicPropNames


    if (patchFlag !== 0) {
      if (true) {
        if (patchFlag < 0) {
          // special flags (negative and mutually exclusive)
          vnodePatchFlag = patchFlag + " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[patchFlag], " */");
        } else {
          // bitwise flags
          var flagNames = Object.keys(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames).map(Number).filter(function (n) {
            return n > 0 && patchFlag & n;
          }).map(function (n) {
            return _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[n];
          }).join(", ");
          vnodePatchFlag = patchFlag + " /* ".concat(flagNames, " */");
        }
      } else {}

      if (dynamicPropNames && dynamicPropNames.length) {
        vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
      }
    }

    node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false
    /* disableTracking */
    , isComponent, node.loc);
  };
};

function resolveComponentType(node, context) {
  var ssr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var tag = node.tag; // 1. dynamic component

  var isExplicitDynamic = isComponentTag(tag);
  var isProp = findProp(node, 'is');

  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
    /* COMPILER_IS_ON_ELEMENT */
    , context)) {
      var exp = isProp.type === 6
      /* ATTRIBUTE */
      ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;

      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [exp]);
      }
    } else if (isProp.type === 6
    /* ATTRIBUTE */
    && isProp.value.content.startsWith('vue:')) {
      // <button is="vue:xxx">
      // if not <component>, only is value that starts with "vue:" will be
      // treated as component by the parse phase and reach here, unless it's
      // compat mode where all is values are considered components
      tag = isProp.value.content.slice(4);
    }
  } // 1.5 v-is (TODO: Deprecate)


  var isDir = !isExplicitDynamic && findDir(node, 'is');

  if (isDir && isDir.exp) {
    return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [isDir.exp]);
  } // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)


  var builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);

  if (builtIn) {
    // built-ins are simply fallthroughs / have special handling during ssr
    // so we don't need to import their runtime equivalents
    if (!ssr) context.helper(builtIn);
    return builtIn;
  } // 5. user component (resolve)


  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, "component");
}

function buildProps(node, context) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : node.props;
  var ssr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var tag = node.tag,
      elementLoc = node.loc,
      children = node.children;
  var isComponent = node.tagType === 1
  /* COMPONENT */
  ;
  var properties = [];
  var mergeArgs = [];
  var runtimeDirectives = [];
  var hasChildren = children.length > 0;
  var shouldUseBlock = false; // patchFlag analysis

  var patchFlag = 0;
  var hasRef = false;
  var hasClassBinding = false;
  var hasStyleBinding = false;
  var hasHydrationEventBinding = false;
  var hasDynamicKeys = false;
  var hasVnodeHook = false;
  var dynamicPropNames = [];

  var analyzePatchFlag = function analyzePatchFlag(_ref7) {
    var key = _ref7.key,
        value = _ref7.value;

    if (isStaticExp(key)) {
      var name = key.content;
      var isEventHandler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(name);

      if (!isComponent && isEventHandler && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== 'onclick' && // omit v-model handlers
      name !== 'onUpdate:modelValue' && // omit onVnodeXXX hooks
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
        hasHydrationEventBinding = true;
      }

      if (isEventHandler && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
        hasVnodeHook = true;
      }

      if (value.type === 20
      /* JS_CACHE_EXPRESSION */
      || (value.type === 4
      /* SIMPLE_EXPRESSION */
      || value.type === 8
      /* COMPOUND_EXPRESSION */
      ) && getConstantType(value, context) > 0) {
        // skip if the prop is a cached handler or has constant value
        return;
      }

      if (name === 'ref') {
        hasRef = true;
      } else if (name === 'class') {
        hasClassBinding = true;
      } else if (name === 'style') {
        hasStyleBinding = true;
      } else if (name !== 'key' && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      } // treat the dynamic class and style binding of the component as dynamic props


      if (isComponent && (name === 'class' || name === 'style') && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };

  for (var i = 0; i < props.length; i++) {
    // static attribute
    var prop = props[i];

    if (prop.type === 6
    /* ATTRIBUTE */
    ) {
      var loc = prop.loc,
          name = prop.name,
          value = prop.value;
      var isStatic = true;

      if (name === 'ref') {
        hasRef = true;

        if (context.scopes.vFor > 0) {
          properties.push(createObjectProperty(createSimpleExpression('ref_for', true), createSimpleExpression('true')));
        }
      } // skip is on <component>, or is="vue:xxx"


      if (name === 'is' && (isComponentTag(tag) || value && value.content.startsWith('vue:') || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* COMPILER_IS_ON_ELEMENT */
      , context))) {
        continue;
      }

      properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : '', isStatic, value ? value.loc : loc)));
    } else {
      // directives
      var _name = prop.name,
          arg = prop.arg,
          exp = prop.exp,
          _loc2 = prop.loc;
      var isVBind = _name === 'bind';
      var isVOn = _name === 'on'; // skip v-slot - it is handled by its dedicated transform.

      if (_name === 'slot') {
        if (!isComponent) {
          context.onError(createCompilerError(40
          /* X_V_SLOT_MISPLACED */
          , _loc2));
        }

        continue;
      } // skip v-once/v-memo - they are handled by dedicated transforms.


      if (_name === 'once' || _name === 'memo') {
        continue;
      } // skip v-is and :is on <component>


      if (_name === 'is' || isVBind && isStaticArgOf(arg, 'is') && (isComponentTag(tag) || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* COMPILER_IS_ON_ELEMENT */
      , context))) {
        continue;
      } // skip v-on in SSR compilation


      if (isVOn && ssr) {
        continue;
      }

      if ( // #938: elements with dynamic keys should be forced into blocks
      isVBind && isStaticArgOf(arg, 'key') || // inline before-update hooks need to force block so that it is invoked
      // before children
      isVOn && hasChildren && isStaticArgOf(arg, 'vue:before-update')) {
        shouldUseBlock = true;
      }

      if (isVBind && isStaticArgOf(arg, 'ref') && context.scopes.vFor > 0) {
        properties.push(createObjectProperty(createSimpleExpression('ref_for', true), createSimpleExpression('true')));
      } // special case for v-bind and v-on with no argument


      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;

        if (exp) {
          if (properties.length) {
            mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
            properties = [];
          }

          if (isVBind) {
            {
              // 2.x v-bind object order compat
              if (true) {
                var hasOverridableKeys = mergeArgs.some(function (arg) {
                  if (arg.type === 15
                  /* JS_OBJECT_EXPRESSION */
                  ) {
                    return arg.properties.some(function (_ref8) {
                      var key = _ref8.key;

                      if (key.type !== 4
                      /* SIMPLE_EXPRESSION */
                      || !key.isStatic) {
                        return true;
                      }

                      return key.content !== 'class' && key.content !== 'style' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(key.content);
                    });
                  } else {
                    // dynamic expression
                    return true;
                  }
                });

                if (hasOverridableKeys) {
                  checkCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER"
                  /* COMPILER_V_BIND_OBJECT_ORDER */
                  , context, _loc2);
                }
              }

              if (isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER"
              /* COMPILER_V_BIND_OBJECT_ORDER */
              , context)) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            mergeArgs.push(exp);
          } else {
            // v-on="obj" -> toHandlers(obj)
            mergeArgs.push({
              type: 14
              /* JS_CALL_EXPRESSION */
              ,
              loc: _loc2,
              callee: context.helper(TO_HANDLERS),
              arguments: [exp]
            });
          }
        } else {
          context.onError(createCompilerError(isVBind ? 34
          /* X_V_BIND_NO_EXPRESSION */
          : 35
          /* X_V_ON_NO_EXPRESSION */
          , _loc2));
        }

        continue;
      }

      var directiveTransform = context.directiveTransforms[_name];

      if (directiveTransform) {
        var _properties;

        // has built-in directive transform.
        var _directiveTransform = directiveTransform(prop, node, context),
            _props = _directiveTransform.props,
            needRuntime = _directiveTransform.needRuntime;

        !ssr && _props.forEach(analyzePatchFlag);

        (_properties = properties).push.apply(_properties, _toConsumableArray(_props));

        if (needRuntime) {
          runtimeDirectives.push(prop);

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else {
        // no built-in transform, this is a user custom directive.
        runtimeDirectives.push(prop); // custom dirs may use beforeUpdate so they need to force blocks
        // to ensure before-update gets called before children update

        if (hasChildren) {
          shouldUseBlock = true;
        }
      }
    }
  }

  var propsExpression = undefined; // has v-bind="object" or v-on="object", wrap with mergeProps

  if (mergeArgs.length) {
    if (properties.length) {
      mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
    }

    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
    } else {
      // single v-bind with nothing else - no need for a mergeProps call
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
  } // patchFlag analysis


  if (hasDynamicKeys) {
    patchFlag |= 16
    /* FULL_PROPS */
    ;
  } else {
    if (hasClassBinding && !isComponent) {
      patchFlag |= 2
      /* CLASS */
      ;
    }

    if (hasStyleBinding && !isComponent) {
      patchFlag |= 4
      /* STYLE */
      ;
    }

    if (dynamicPropNames.length) {
      patchFlag |= 8
      /* PROPS */
      ;
    }

    if (hasHydrationEventBinding) {
      patchFlag |= 32
      /* HYDRATE_EVENTS */
      ;
    }
  }

  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32
  /* HYDRATE_EVENTS */
  ) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512
    /* NEED_PATCH */
    ;
  } // pre-normalize props, SSR is skipped for now


  if (!context.inSSR && propsExpression) {
    switch (propsExpression.type) {
      case 15
      /* JS_OBJECT_EXPRESSION */
      :
        // means that there is no v-bind,
        // but still need to deal with dynamic key binding
        var classKeyIndex = -1;
        var styleKeyIndex = -1;
        var hasDynamicKey = false;

        for (var _i7 = 0; _i7 < propsExpression.properties.length; _i7++) {
          var key = propsExpression.properties[_i7].key;

          if (isStaticExp(key)) {
            if (key.content === 'class') {
              classKeyIndex = _i7;
            } else if (key.content === 'style') {
              styleKeyIndex = _i7;
            }
          } else if (!key.isHandlerKey) {
            hasDynamicKey = true;
          }
        }

        var classProp = propsExpression.properties[classKeyIndex];
        var styleProp = propsExpression.properties[styleKeyIndex]; // no dynamic key

        if (!hasDynamicKey) {
          if (classProp && !isStaticExp(classProp.value)) {
            classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [classProp.value]);
          }

          if (styleProp && !isStaticExp(styleProp.value) && ( // the static style is compiled into an object,
          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
          hasStyleBinding || // v-bind:style and style both exist,
          // v-bind:style with static literal object
          styleProp.value.type === 17
          /* JS_ARRAY_EXPRESSION */
          )) {
            styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [styleProp.value]);
          }
        } else {
          // dynamic key binding, wrap with `normalizeProps`
          propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [propsExpression]);
        }

        break;

      case 14
      /* JS_CALL_EXPRESSION */
      :
        // mergeProps call, do nothing
        break;

      default:
        // single v-bind
        propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [propsExpression])]);
        break;
    }
  }

  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag: patchFlag,
    dynamicPropNames: dynamicPropNames,
    shouldUseBlock: shouldUseBlock
  };
} // Dedupe props in an object literal.
// Literal duplicated attributes would have been warned during the parse phase,
// however, it's possible to encounter duplicated `onXXX` handlers with different
// modifiers. We also need to merge static and dynamic class / style attributes.
// - onXXX handlers / style: merge into array
// - class: merge into single expression with concatenation


function dedupeProperties(properties) {
  var knownProps = new Map();
  var deduped = [];

  for (var i = 0; i < properties.length; i++) {
    var prop = properties[i]; // dynamic keys are always allowed

    if (prop.key.type === 8
    /* COMPOUND_EXPRESSION */
    || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }

    var name = prop.key.content;
    var existing = knownProps.get(name);

    if (existing) {
      if (name === 'style' || name === 'class' || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(name)) {
        mergeAsArray(existing, prop);
      } // unexpected duplicate, should have emitted error during parse

    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }

  return deduped;
}

function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17
  /* JS_ARRAY_EXPRESSION */
  ) {
    existing.value.elements.push(incoming.value);
  } else {
    existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
  }
}

function buildDirectiveArgs(dir, context) {
  var dirArgs = [];
  var runtime = directiveImportMap.get(dir);

  if (runtime) {
    // built-in directive with runtime
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      // inject statement for resolving directive
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, "directive"));
    }
  }

  var loc = dir.loc;
  if (dir.exp) dirArgs.push(dir.exp);

  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push("void 0");
    }

    dirArgs.push(dir.arg);
  }

  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push("void 0");
      }

      dirArgs.push("void 0");
    }

    var trueExpression = createSimpleExpression("true", false, loc);
    dirArgs.push(createObjectExpression(dir.modifiers.map(function (modifier) {
      return createObjectProperty(modifier, trueExpression);
    }), loc));
  }

  return createArrayExpression(dirArgs, dir.loc);
}

function stringifyDynamicPropNames(props) {
  var propsNamesString = "[";

  for (var i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ', ';
  }

  return propsNamesString + "]";
}

function isComponentTag(tag) {
  return tag === 'component' || tag === 'Component';
}

 true ? Object.freeze({}) : 0;
 true ? Object.freeze([]) : 0;

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

var transformSlotOutlet = function transformSlotOutlet(node, context) {
  if (isSlotOutlet(node)) {
    var children = node.children,
        loc = node.loc;

    var _processSlotOutlet = processSlotOutlet(node, context),
        slotName = _processSlotOutlet.slotName,
        slotProps = _processSlotOutlet.slotProps;

    var slotArgs = [context.prefixIdentifiers ? "_ctx.$slots" : "$slots", slotName, '{}', 'undefined', 'true'];
    var expectedLen = 2;

    if (slotProps) {
      slotArgs[2] = slotProps;
      expectedLen = 3;
    }

    if (children.length) {
      slotArgs[3] = createFunctionExpression([], children, false, false, loc);
      expectedLen = 4;
    }

    if (context.scopeId && !context.slotted) {
      expectedLen = 5;
    }

    slotArgs.splice(expectedLen); // remove unused arguments

    node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
  }
};

function processSlotOutlet(node, context) {
  var slotName = "\"default\"";
  var slotProps = undefined;
  var nonNameProps = [];

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
      if (p.value) {
        if (p.name === 'name') {
          slotName = JSON.stringify(p.value.content);
        } else {
          p.name = camelize(p.name);
          nonNameProps.push(p);
        }
      }
    } else {
      if (p.name === 'bind' && isStaticArgOf(p.arg, 'name')) {
        if (p.exp) slotName = p.exp;
      } else {
        if (p.name === 'bind' && p.arg && isStaticExp(p.arg)) {
          p.arg.content = camelize(p.arg.content);
        }

        nonNameProps.push(p);
      }
    }
  }

  if (nonNameProps.length > 0) {
    var _buildProps = buildProps(node, context, nonNameProps),
        props = _buildProps.props,
        directives = _buildProps.directives;

    slotProps = props;

    if (directives.length) {
      context.onError(createCompilerError(36
      /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
      , directives[0].loc));
    }
  }

  return {
    slotName: slotName,
    slotProps: slotProps
  };
}

var fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;

var transformOn = function transformOn(dir, node, context, augmentor) {
  var loc = dir.loc,
      modifiers = dir.modifiers,
      arg = dir.arg;

  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(35
    /* X_V_ON_NO_EXPRESSION */
    , loc));
  }

  var eventName;

  if (arg.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
    if (arg.isStatic) {
      var rawName = arg.content; // TODO deprecate @vnodeXXX usage

      if (rawName.startsWith('vue:')) {
        rawName = "vnode-".concat(rawName.slice(4));
      } // for all event listeners, auto convert it to camelCase. See issue #2249


      eventName = createSimpleExpression((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(rawName)), true, arg.loc);
    } else {
      // #2388
      eventName = createCompoundExpression(["".concat(context.helperString(TO_HANDLER_KEY), "("), arg, ")"]);
    }
  } else {
    // already a compound expression.
    eventName = arg;
    eventName.children.unshift("".concat(context.helperString(TO_HANDLER_KEY), "("));
    eventName.children.push(")");
  } // handler processing


  var exp = dir.exp;

  if (exp && !exp.content.trim()) {
    exp = undefined;
  }

  var shouldCache = context.cacheHandlers && !exp && !context.inVOnce;

  if (exp) {
    var isMemberExp = isMemberExpression(exp.content);
    var isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
    var hasMultipleStatements = exp.content.includes(";");

    if (true) {
      validateBrowserExpression(exp, context, false, hasMultipleStatements);
    }

    if (isInlineStatement || shouldCache && isMemberExp) {
      // wrap inline statement in a function expression
      exp = createCompoundExpression(["".concat(isInlineStatement ? "$event" : "".concat("", "(...args)"), " => ").concat(hasMultipleStatements ? "{" : "("), exp, hasMultipleStatements ? "}" : ")"]);
    }
  }

  var ret = {
    props: [createObjectProperty(eventName, exp || createSimpleExpression("() => {}", false, loc))]
  }; // apply extended compiler augmentor

  if (augmentor) {
    ret = augmentor(ret);
  }

  if (shouldCache) {
    // cache handlers so that it's always the same handler being passed down.
    // this avoids unnecessary re-renders when users use inline handlers on
    // components.
    ret.props[0].value = context.cache(ret.props[0].value);
  } // mark the key as handler for props normalization check


  ret.props.forEach(function (p) {
    return p.key.isHandlerKey = true;
  });
  return ret;
}; // v-bind without arg is handled directly in ./transformElements.ts due to it affecting
// codegen for the entire props object. This transform here is only for v-bind
// *with* args.


var transformBind = function transformBind(dir, _node, context) {
  var exp = dir.exp,
      modifiers = dir.modifiers,
      loc = dir.loc;
  var arg = dir.arg;

  if (arg.type !== 4
  /* SIMPLE_EXPRESSION */
  ) {
    arg.children.unshift("(");
    arg.children.push(") || \"\"");
  } else if (!arg.isStatic) {
    arg.content = "".concat(arg.content, " || \"\"");
  } // .sync is replaced by v-model:arg


  if (modifiers.includes('camel')) {
    if (arg.type === 4
    /* SIMPLE_EXPRESSION */
    ) {
      if (arg.isStatic) {
        arg.content = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(arg.content);
      } else {
        arg.content = "".concat(context.helperString(CAMELIZE), "(").concat(arg.content, ")");
      }
    } else {
      arg.children.unshift("".concat(context.helperString(CAMELIZE), "("));
      arg.children.push(")");
    }
  }

  if (!context.inSSR) {
    if (modifiers.includes('prop')) {
      injectPrefix(arg, '.');
    }

    if (modifiers.includes('attr')) {
      injectPrefix(arg, '^');
    }
  }

  if (!exp || exp.type === 4
  /* SIMPLE_EXPRESSION */
  && !exp.content.trim()) {
    context.onError(createCompilerError(34
    /* X_V_BIND_NO_EXPRESSION */
    , loc));
    return {
      props: [createObjectProperty(arg, createSimpleExpression('', true, loc))]
    };
  }

  return {
    props: [createObjectProperty(arg, exp)]
  };
};

var injectPrefix = function injectPrefix(arg, prefix) {
  if (arg.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
    if (arg.isStatic) {
      arg.content = prefix + arg.content;
    } else {
      arg.content = "`".concat(prefix, "${").concat(arg.content, "}`");
    }
  } else {
    arg.children.unshift("'".concat(prefix, "' + ("));
    arg.children.push(")");
  }
}; // Merge adjacent text nodes and expressions into a single expression
// e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.


var transformText = function transformText(node, context) {
  if (node.type === 0
  /* ROOT */
  || node.type === 1
  /* ELEMENT */
  || node.type === 11
  /* FOR */
  || node.type === 10
  /* IF_BRANCH */
  ) {
    // perform the transform on node exit so that all expressions have already
    // been processed.
    return function () {
      var children = node.children;
      var currentContainer = undefined;
      var hasText = false;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (isText(child)) {
          hasText = true;

          for (var j = i + 1; j < children.length; j++) {
            var next = children[j];

            if (isText(next)) {
              if (!currentContainer) {
                currentContainer = children[i] = {
                  type: 8
                  /* COMPOUND_EXPRESSION */
                  ,
                  loc: child.loc,
                  children: [child]
                };
              } // merge adjacent text node into current


              currentContainer.children.push(" + ", next);
              children.splice(j, 1);
              j--;
            } else {
              currentContainer = undefined;
              break;
            }
          }
        }
      }

      if (!hasText || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      children.length === 1 && (node.type === 0
      /* ROOT */
      || node.type === 1
      /* ELEMENT */
      && node.tagType === 0
      /* ELEMENT */
      && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !node.props.find(function (p) {
        return p.type === 7
        /* DIRECTIVE */
        && !context.directiveTransforms[p.name];
      }) && // in compat mode, <template> tags with no special directives
      // will be rendered as a fragment so its children must be
      // converted into vnodes.
      !(node.tag === 'template'))) {
        return;
      } // pre-convert text nodes into createTextVNode(text) calls to avoid
      // runtime normalization.


      for (var _i8 = 0; _i8 < children.length; _i8++) {
        var _child = children[_i8];

        if (isText(_child) || _child.type === 8
        /* COMPOUND_EXPRESSION */
        ) {
          var callArgs = []; // createTextVNode defaults to single whitespace, so if it is a
          // single space the code could be an empty call to save bytes.

          if (_child.type !== 2
          /* TEXT */
          || _child.content !== ' ') {
            callArgs.push(_child);
          } // mark dynamic text with flag so it gets patched inside a block


          if (!context.ssr && getConstantType(_child, context) === 0
          /* NOT_CONSTANT */
          ) {
            callArgs.push(1
            /* TEXT */
            + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[1], " */") : 0));
          }

          children[_i8] = {
            type: 12
            /* TEXT_CALL */
            ,
            content: _child,
            loc: _child.loc,
            codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
          };
        }
      }
    };
  }
};

var seen = new WeakSet();

var transformOnce = function transformOnce(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && findDir(node, 'once', true)) {
    if (seen.has(node) || context.inVOnce) {
      return;
    }

    seen.add(node);
    context.inVOnce = true;
    context.helper(SET_BLOCK_TRACKING);
    return function () {
      context.inVOnce = false;
      var cur = context.currentNode;

      if (cur.codegenNode) {
        cur.codegenNode = context.cache(cur.codegenNode, true
        /* isVNode */
        );
      }
    };
  }
};

var transformModel = function transformModel(dir, node, context) {
  var exp = dir.exp,
      arg = dir.arg;

  if (!exp) {
    context.onError(createCompilerError(41
    /* X_V_MODEL_NO_EXPRESSION */
    , dir.loc));
    return createTransformProps();
  }

  var rawExp = exp.loc.source;
  var expString = exp.type === 4
  /* SIMPLE_EXPRESSION */
  ? exp.content : rawExp; // im SFC <script setup> inline mode, the exp may have been transformed into
  // _unref(exp)

  context.bindingMetadata[rawExp];
  var maybeRef = !true
  /* SETUP_CONST */
  ;

  if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
    context.onError(createCompilerError(42
    /* X_V_MODEL_MALFORMED_EXPRESSION */
    , exp.loc));
    return createTransformProps();
  }

  var propName = arg ? arg : createSimpleExpression('modelValue', true);
  var eventName = arg ? isStaticExp(arg) ? "onUpdate:".concat(arg.content) : createCompoundExpression(['"onUpdate:" + ', arg]) : "onUpdate:modelValue";
  var assignmentExp;
  var eventArg = context.isTS ? "($event: any)" : "$event";
  {
    assignmentExp = createCompoundExpression(["".concat(eventArg, " => (("), exp, ") = $event)"]);
  }
  var props = [// modelValue: foo
  createObjectProperty(propName, dir.exp), // "onUpdate:modelValue": $event => (foo = $event)
  createObjectProperty(eventName, assignmentExp)]; // modelModifiers: { foo: true, "bar-baz": true }

  if (dir.modifiers.length && node.tagType === 1
  /* COMPONENT */
  ) {
    var modifiers = dir.modifiers.map(function (m) {
      return (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + ": true";
    }).join(", ");
    var modifiersKey = arg ? isStaticExp(arg) ? "".concat(arg.content, "Modifiers") : createCompoundExpression([arg, ' + "Modifiers"']) : "modelModifiers";
    props.push(createObjectProperty(modifiersKey, createSimpleExpression("{ ".concat(modifiers, " }"), false, dir.loc, 2
    /* CAN_HOIST */
    )));
  }

  return createTransformProps(props);
};

function createTransformProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    props: props
  };
}

var validDivisionCharRE = /[\w).+\-_$\]]/;

var transformFilter = function transformFilter(node, context) {
  if (!isCompatEnabled("COMPILER_FILTER"
  /* COMPILER_FILTERS */
  , context)) {
    return;
  }

  if (node.type === 5
  /* INTERPOLATION */
  ) {
    // filter rewrite is applied before expression transform so only
    // simple expressions are possible at this stage
    rewriteFilter(node.content, context);
  }

  if (node.type === 1
  /* ELEMENT */
  ) {
    node.props.forEach(function (prop) {
      if (prop.type === 7
      /* DIRECTIVE */
      && prop.name !== 'for' && prop.exp) {
        rewriteFilter(prop.exp, context);
      }
    });
  }
};

function rewriteFilter(node, context) {
  if (node.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
    parseFilter(node, context);
  } else {
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (_typeof(child) !== 'object') continue;

      if (child.type === 4
      /* SIMPLE_EXPRESSION */
      ) {
        parseFilter(child, context);
      } else if (child.type === 8
      /* COMPOUND_EXPRESSION */
      ) {
        rewriteFilter(node, context);
      } else if (child.type === 5
      /* INTERPOLATION */
      ) {
        rewriteFilter(child.content, context);
      }
    }
  }
}

function parseFilter(node, context) {
  var exp = node.content;
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c,
      prev,
      i,
      expression,
      filters = [];

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);

    if (inSingle) {
      if (c === 0x27 && prev !== 0x5c) inSingle = false;
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5c) inDouble = false;
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5c) inTemplateString = false;
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5c) inRegex = false;
    } else if (c === 0x7c && // pipe
    exp.charCodeAt(i + 1) !== 0x7c && exp.charCodeAt(i - 1) !== 0x7c && !curly && !square && !paren) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;
          break;
        // "

        case 0x27:
          inSingle = true;
          break;
        // '

        case 0x60:
          inTemplateString = true;
          break;
        // `

        case 0x28:
          paren++;
          break;
        // (

        case 0x29:
          paren--;
          break;
        // )

        case 0x5b:
          square++;
          break;
        // [

        case 0x5d:
          square--;
          break;
        // ]

        case 0x7b:
          curly++;
          break;
        // {

        case 0x7d:
          curly--;
          break;
        // }
      }

      if (c === 0x2f) {
        // /
        var j = i - 1;
        var p = void 0; // find first non-whitespace prev char

        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') break;
        }

        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters.length) {
     true && warnDeprecation("COMPILER_FILTER"
    /* COMPILER_FILTERS */
    , context, node.loc);

    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }

    node.content = expression;
  }
}

function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  var i = filter.indexOf('(');

  if (i < 0) {
    context.filters.add(filter);
    return "".concat(toValidAssetId(filter, 'filter'), "(").concat(exp, ")");
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    context.filters.add(name);
    return "".concat(toValidAssetId(name, 'filter'), "(").concat(exp).concat(args !== ')' ? ',' + args : args);
  }
}

var seen$1 = new WeakSet();

var transformMemo = function transformMemo(node, context) {
  if (node.type === 1
  /* ELEMENT */
  ) {
    var dir = findDir(node, 'memo');

    if (!dir || seen$1.has(node)) {
      return;
    }

    seen$1.add(node);
    return function () {
      var codegenNode = node.codegenNode || context.currentNode.codegenNode;

      if (codegenNode && codegenNode.type === 13
      /* VNODE_CALL */
      ) {
        // non-component sub tree should be turned into a block
        if (node.tagType !== 1
        /* COMPONENT */
        ) {
          makeBlock(codegenNode, context);
        }

        node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [dir.exp, createFunctionExpression(undefined, codegenNode), "_cache", String(context.cached++)]);
      }
    };
  }
};

function getBaseTransformPreset(prefixIdentifiers) {
  return [[transformOnce, transformIf, transformMemo, transformFor].concat([transformFilter], _toConsumableArray( true ? [transformExpression] : 0), [transformSlotOutlet, transformElement, trackSlotScopes, transformText]), {
    on: transformOn,
    bind: transformBind,
    model: transformModel
  }];
} // we name it `baseCompile` so that higher order compilers like
// @vue/compiler-dom can export `compile` while re-exporting everything else.


function baseCompile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var onError = options.onError || defaultOnError;
  var isModuleMode = options.mode === 'module';
  /* istanbul ignore if */

  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(46
      /* X_PREFIX_ID_NOT_SUPPORTED */
      ));
    } else if (isModuleMode) {
      onError(createCompilerError(47
      /* X_MODULE_MODE_NOT_SUPPORTED */
      ));
    }
  }
  var prefixIdentifiers = !true;

  if (options.cacheHandlers) {
    onError(createCompilerError(48
    /* X_CACHE_HANDLER_NOT_SUPPORTED */
    ));
  }

  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(49
    /* X_SCOPE_ID_NOT_SUPPORTED */
    ));
  }

  var ast = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(template) ? baseParse(template, options) : template;

  var _getBaseTransformPres = getBaseTransformPreset(),
      _getBaseTransformPres2 = _slicedToArray(_getBaseTransformPres, 2),
      nodeTransforms = _getBaseTransformPres2[0],
      directiveTransforms = _getBaseTransformPres2[1];

  transform(ast, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
    prefixIdentifiers: prefixIdentifiers,
    nodeTransforms: [].concat(_toConsumableArray(nodeTransforms), _toConsumableArray(options.nodeTransforms || [])),
    directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, directiveTransforms, options.directiveTransforms || {} // user transforms
    )
  }));
  return generate(ast, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
    prefixIdentifiers: prefixIdentifiers
  }));
}

var noopDirectiveTransform = function noopDirectiveTransform() {
  return {
    props: []
  };
};



/***/ }),

/***/ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_TRANSITION": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.BASE_TRANSITION),
/* harmony export */   "CAMELIZE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAMELIZE),
/* harmony export */   "CAPITALIZE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAPITALIZE),
/* harmony export */   "CREATE_BLOCK": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_BLOCK),
/* harmony export */   "CREATE_COMMENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_COMMENT),
/* harmony export */   "CREATE_ELEMENT_BLOCK": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_ELEMENT_BLOCK),
/* harmony export */   "CREATE_ELEMENT_VNODE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_ELEMENT_VNODE),
/* harmony export */   "CREATE_SLOTS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_SLOTS),
/* harmony export */   "CREATE_STATIC": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_STATIC),
/* harmony export */   "CREATE_TEXT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_TEXT),
/* harmony export */   "CREATE_VNODE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_VNODE),
/* harmony export */   "FRAGMENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.FRAGMENT),
/* harmony export */   "GUARD_REACTIVE_PROPS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.GUARD_REACTIVE_PROPS),
/* harmony export */   "IS_MEMO_SAME": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.IS_MEMO_SAME),
/* harmony export */   "IS_REF": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.IS_REF),
/* harmony export */   "KEEP_ALIVE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.KEEP_ALIVE),
/* harmony export */   "MERGE_PROPS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.MERGE_PROPS),
/* harmony export */   "NORMALIZE_CLASS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.NORMALIZE_CLASS),
/* harmony export */   "NORMALIZE_PROPS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.NORMALIZE_PROPS),
/* harmony export */   "NORMALIZE_STYLE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.NORMALIZE_STYLE),
/* harmony export */   "OPEN_BLOCK": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.OPEN_BLOCK),
/* harmony export */   "POP_SCOPE_ID": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.POP_SCOPE_ID),
/* harmony export */   "PUSH_SCOPE_ID": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.PUSH_SCOPE_ID),
/* harmony export */   "RENDER_LIST": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_LIST),
/* harmony export */   "RENDER_SLOT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_SLOT),
/* harmony export */   "RESOLVE_COMPONENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_COMPONENT),
/* harmony export */   "RESOLVE_DIRECTIVE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DIRECTIVE),
/* harmony export */   "RESOLVE_DYNAMIC_COMPONENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DYNAMIC_COMPONENT),
/* harmony export */   "RESOLVE_FILTER": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_FILTER),
/* harmony export */   "SET_BLOCK_TRACKING": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SET_BLOCK_TRACKING),
/* harmony export */   "SUSPENSE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SUSPENSE),
/* harmony export */   "TELEPORT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TELEPORT),
/* harmony export */   "TO_DISPLAY_STRING": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING),
/* harmony export */   "TO_HANDLERS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLERS),
/* harmony export */   "TO_HANDLER_KEY": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLER_KEY),
/* harmony export */   "UNREF": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.UNREF),
/* harmony export */   "WITH_CTX": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_CTX),
/* harmony export */   "WITH_DIRECTIVES": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_DIRECTIVES),
/* harmony export */   "WITH_MEMO": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_MEMO),
/* harmony export */   "advancePositionWithClone": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithClone),
/* harmony export */   "advancePositionWithMutation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithMutation),
/* harmony export */   "assert": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.assert),
/* harmony export */   "baseCompile": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile),
/* harmony export */   "baseParse": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse),
/* harmony export */   "buildProps": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildProps),
/* harmony export */   "buildSlots": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildSlots),
/* harmony export */   "checkCompatEnabled": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.checkCompatEnabled),
/* harmony export */   "createArrayExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createArrayExpression),
/* harmony export */   "createAssignmentExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createAssignmentExpression),
/* harmony export */   "createBlockStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createBlockStatement),
/* harmony export */   "createCacheExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCacheExpression),
/* harmony export */   "createCallExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression),
/* harmony export */   "createCompilerError": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError),
/* harmony export */   "createCompoundExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression),
/* harmony export */   "createConditionalExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createConditionalExpression),
/* harmony export */   "createForLoopParams": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createForLoopParams),
/* harmony export */   "createFunctionExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createFunctionExpression),
/* harmony export */   "createIfStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createIfStatement),
/* harmony export */   "createInterpolation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createInterpolation),
/* harmony export */   "createObjectExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectExpression),
/* harmony export */   "createObjectProperty": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty),
/* harmony export */   "createReturnStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createReturnStatement),
/* harmony export */   "createRoot": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createRoot),
/* harmony export */   "createSequenceExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSequenceExpression),
/* harmony export */   "createSimpleExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression),
/* harmony export */   "createStructuralDirectiveTransform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createStructuralDirectiveTransform),
/* harmony export */   "createTemplateLiteral": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTemplateLiteral),
/* harmony export */   "createTransformContext": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTransformContext),
/* harmony export */   "createVNodeCall": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createVNodeCall),
/* harmony export */   "extractIdentifiers": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.extractIdentifiers),
/* harmony export */   "findDir": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findDir),
/* harmony export */   "findProp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp),
/* harmony export */   "generate": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generate),
/* harmony export */   "generateCodeFrame": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame),
/* harmony export */   "getBaseTransformPreset": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getBaseTransformPreset),
/* harmony export */   "getInnerRange": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getInnerRange),
/* harmony export */   "getMemoedVNodeCall": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getMemoedVNodeCall),
/* harmony export */   "getVNodeBlockHelper": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getVNodeBlockHelper),
/* harmony export */   "getVNodeHelper": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getVNodeHelper),
/* harmony export */   "hasDynamicKeyVBind": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind),
/* harmony export */   "hasScopeRef": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasScopeRef),
/* harmony export */   "helperNameMap": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.helperNameMap),
/* harmony export */   "injectProp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.injectProp),
/* harmony export */   "isBuiltInType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType),
/* harmony export */   "isCoreComponent": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isCoreComponent),
/* harmony export */   "isFunctionType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isFunctionType),
/* harmony export */   "isInDestructureAssignment": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isInDestructureAssignment),
/* harmony export */   "isMemberExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpression),
/* harmony export */   "isMemberExpressionBrowser": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpressionBrowser),
/* harmony export */   "isMemberExpressionNode": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpressionNode),
/* harmony export */   "isReferencedIdentifier": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isReferencedIdentifier),
/* harmony export */   "isSimpleIdentifier": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSimpleIdentifier),
/* harmony export */   "isSlotOutlet": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSlotOutlet),
/* harmony export */   "isStaticArgOf": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticArgOf),
/* harmony export */   "isStaticExp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp),
/* harmony export */   "isStaticProperty": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticProperty),
/* harmony export */   "isStaticPropertyKey": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticPropertyKey),
/* harmony export */   "isTemplateNode": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isTemplateNode),
/* harmony export */   "isText": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isText),
/* harmony export */   "isVSlot": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isVSlot),
/* harmony export */   "locStub": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.locStub),
/* harmony export */   "makeBlock": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.makeBlock),
/* harmony export */   "noopDirectiveTransform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform),
/* harmony export */   "processExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processExpression),
/* harmony export */   "processFor": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processFor),
/* harmony export */   "processIf": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processIf),
/* harmony export */   "processSlotOutlet": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processSlotOutlet),
/* harmony export */   "registerRuntimeHelpers": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers),
/* harmony export */   "resolveComponentType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponentType),
/* harmony export */   "toValidAssetId": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.toValidAssetId),
/* harmony export */   "trackSlotScopes": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackSlotScopes),
/* harmony export */   "trackVForSlotScopes": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackVForSlotScopes),
/* harmony export */   "transform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transform),
/* harmony export */   "transformBind": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformBind),
/* harmony export */   "transformElement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformElement),
/* harmony export */   "transformExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformExpression),
/* harmony export */   "transformModel": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel),
/* harmony export */   "transformOn": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn),
/* harmony export */   "traverseNode": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.traverseNode),
/* harmony export */   "walkBlockDeclarations": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.walkBlockDeclarations),
/* harmony export */   "walkFunctionParams": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.walkFunctionParams),
/* harmony export */   "walkIdentifiers": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.walkIdentifiers),
/* harmony export */   "warnDeprecation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.warnDeprecation),
/* harmony export */   "DOMDirectiveTransforms": () => (/* binding */ DOMDirectiveTransforms),
/* harmony export */   "DOMNodeTransforms": () => (/* binding */ DOMNodeTransforms),
/* harmony export */   "TRANSITION": () => (/* binding */ TRANSITION),
/* harmony export */   "TRANSITION_GROUP": () => (/* binding */ TRANSITION_GROUP),
/* harmony export */   "V_MODEL_CHECKBOX": () => (/* binding */ V_MODEL_CHECKBOX),
/* harmony export */   "V_MODEL_DYNAMIC": () => (/* binding */ V_MODEL_DYNAMIC),
/* harmony export */   "V_MODEL_RADIO": () => (/* binding */ V_MODEL_RADIO),
/* harmony export */   "V_MODEL_SELECT": () => (/* binding */ V_MODEL_SELECT),
/* harmony export */   "V_MODEL_TEXT": () => (/* binding */ V_MODEL_TEXT),
/* harmony export */   "V_ON_WITH_KEYS": () => (/* binding */ V_ON_WITH_KEYS),
/* harmony export */   "V_ON_WITH_MODIFIERS": () => (/* binding */ V_ON_WITH_MODIFIERS),
/* harmony export */   "V_SHOW": () => (/* binding */ V_SHOW),
/* harmony export */   "compile": () => (/* binding */ compile),
/* harmony export */   "createDOMCompilerError": () => (/* binding */ createDOMCompilerError),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parserOptions": () => (/* binding */ parserOptions),
/* harmony export */   "transformStyle": () => (/* binding */ transformStyle)
/* harmony export */ });
/* harmony import */ var _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/compiler-core */ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _registerRuntimeHelpe, _DOMErrorMessages;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var V_MODEL_RADIO = Symbol( true ? "vModelRadio" : 0);
var V_MODEL_CHECKBOX = Symbol( true ? "vModelCheckbox" : 0);
var V_MODEL_TEXT = Symbol( true ? "vModelText" : 0);
var V_MODEL_SELECT = Symbol( true ? "vModelSelect" : 0);
var V_MODEL_DYNAMIC = Symbol( true ? "vModelDynamic" : 0);
var V_ON_WITH_MODIFIERS = Symbol( true ? "vOnModifiersGuard" : 0);
var V_ON_WITH_KEYS = Symbol( true ? "vOnKeysGuard" : 0);
var V_SHOW = Symbol( true ? "vShow" : 0);
var TRANSITION = Symbol( true ? "Transition" : 0);
var TRANSITION_GROUP = Symbol( true ? "TransitionGroup" : 0);
(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers)((_registerRuntimeHelpe = {}, _defineProperty(_registerRuntimeHelpe, V_MODEL_RADIO, "vModelRadio"), _defineProperty(_registerRuntimeHelpe, V_MODEL_CHECKBOX, "vModelCheckbox"), _defineProperty(_registerRuntimeHelpe, V_MODEL_TEXT, "vModelText"), _defineProperty(_registerRuntimeHelpe, V_MODEL_SELECT, "vModelSelect"), _defineProperty(_registerRuntimeHelpe, V_MODEL_DYNAMIC, "vModelDynamic"), _defineProperty(_registerRuntimeHelpe, V_ON_WITH_MODIFIERS, "withModifiers"), _defineProperty(_registerRuntimeHelpe, V_ON_WITH_KEYS, "withKeys"), _defineProperty(_registerRuntimeHelpe, V_SHOW, "vShow"), _defineProperty(_registerRuntimeHelpe, TRANSITION, "Transition"), _defineProperty(_registerRuntimeHelpe, TRANSITION_GROUP, "TransitionGroup"), _registerRuntimeHelpe));
/* eslint-disable no-restricted-globals */

var decoder;

function decodeHtmlBrowser(raw) {
  var asAttr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!decoder) {
    decoder = document.createElement('div');
  }

  if (asAttr) {
    decoder.innerHTML = "<div foo=\"".concat(raw.replace(/"/g, '&quot;'), "\">");
    return decoder.children[0].getAttribute('foo');
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}

var isRawTextContainer = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('style,iframe,script,noscript', true);
var parserOptions = {
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.isVoidTag,
  isNativeTag: function isNativeTag(tag) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag);
  },
  isPreTag: function isPreTag(tag) {
    return tag === 'pre';
  },
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: function isBuiltInComponent(tag) {
    if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, "Transition")) {
      return TRANSITION;
    } else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, "TransitionGroup")) {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace: function getNamespace(tag, parent) {
    var ns = parent ? parent.ns : 0
    /* HTML */
    ;

    if (parent && ns === 2
    /* MATH_ML */
    ) {
      if (parent.tag === 'annotation-xml') {
        if (tag === 'svg') {
          return 1
          /* SVG */
          ;
        }

        if (parent.props.some(function (a) {
          return a.type === 6
          /* ATTRIBUTE */
          && a.name === 'encoding' && a.value != null && (a.value.content === 'text/html' || a.value.content === 'application/xhtml+xml');
        })) {
          ns = 0
          /* HTML */
          ;
        }
      } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== 'mglyph' && tag !== 'malignmark') {
        ns = 0
        /* HTML */
        ;
      }
    } else if (parent && ns === 1
    /* SVG */
    ) {
      if (parent.tag === 'foreignObject' || parent.tag === 'desc' || parent.tag === 'title') {
        ns = 0
        /* HTML */
        ;
      }
    }

    if (ns === 0
    /* HTML */
    ) {
      if (tag === 'svg') {
        return 1
        /* SVG */
        ;
      }

      if (tag === 'math') {
        return 2
        /* MATH_ML */
        ;
      }
    }

    return ns;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode: function getTextMode(_ref) {
    var tag = _ref.tag,
        ns = _ref.ns;

    if (ns === 0
    /* HTML */
    ) {
      if (tag === 'textarea' || tag === 'title') {
        return 1
        /* RCDATA */
        ;
      }

      if (isRawTextContainer(tag)) {
        return 2
        /* RAWTEXT */
        ;
      }
    }

    return 0
    /* DATA */
    ;
  }
}; // Parse inline CSS strings for static style attributes into an object.
// This is a NodeTransform since it works on the static `style` attribute and
// converts it into a dynamic equivalent:
// style="color: red" -> :style='{ "color": "red" }'
// It is then processed by `transformElement` and included in the generated
// props.

var transformStyle = function transformStyle(node) {
  if (node.type === 1
  /* ELEMENT */
  ) {
    node.props.forEach(function (p, i) {
      if (p.type === 6
      /* ATTRIBUTE */
      && p.name === 'style' && p.value) {
        // replace p with an expression node
        node.props[i] = {
          type: 7
          /* DIRECTIVE */
          ,
          name: "bind",
          arg: (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("style", true, p.loc),
          exp: parseInlineCSS(p.value.content, p.loc),
          modifiers: [],
          loc: p.loc
        };
      }
    });
  }
};

var parseInlineCSS = function parseInlineCSS(cssText, loc) {
  var normalized = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.parseStringStyle)(cssText);
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(JSON.stringify(normalized), false, loc, 3
  /* CAN_STRINGIFY */
  );
};

function createDOMCompilerError(code, loc) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError)(code, loc,  true ? DOMErrorMessages : 0);
}

var DOMErrorMessages = (_DOMErrorMessages = {}, _defineProperty(_DOMErrorMessages, 50
/* X_V_HTML_NO_EXPRESSION */
, "v-html is missing expression."), _defineProperty(_DOMErrorMessages, 51
/* X_V_HTML_WITH_CHILDREN */
, "v-html will override element children."), _defineProperty(_DOMErrorMessages, 52
/* X_V_TEXT_NO_EXPRESSION */
, "v-text is missing expression."), _defineProperty(_DOMErrorMessages, 53
/* X_V_TEXT_WITH_CHILDREN */
, "v-text will override element children."), _defineProperty(_DOMErrorMessages, 54
/* X_V_MODEL_ON_INVALID_ELEMENT */
, "v-model can only be used on <input>, <textarea> and <select> elements."), _defineProperty(_DOMErrorMessages, 55
/* X_V_MODEL_ARG_ON_ELEMENT */
, "v-model argument is not supported on plain elements."), _defineProperty(_DOMErrorMessages, 56
/* X_V_MODEL_ON_FILE_INPUT_ELEMENT */
, "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead."), _defineProperty(_DOMErrorMessages, 57
/* X_V_MODEL_UNNECESSARY_VALUE */
, "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior."), _defineProperty(_DOMErrorMessages, 58
/* X_V_SHOW_NO_EXPRESSION */
, "v-show is missing expression."), _defineProperty(_DOMErrorMessages, 59
/* X_TRANSITION_INVALID_CHILDREN */
, "<Transition> expects exactly one child element or component."), _defineProperty(_DOMErrorMessages, 60
/* X_IGNORED_SIDE_EFFECT_TAG */
, "Tags with side effect (<script> and <style>) are ignored in client component templates."), _DOMErrorMessages);

var transformVHtml = function transformVHtml(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(50
    /* X_V_HTML_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(51
    /* X_V_HTML_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("innerHTML", true, loc), exp || (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)('', true))]
  };
};

var transformVText = function transformVText(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(52
    /* X_V_TEXT_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(53
    /* X_V_TEXT_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("textContent", true), exp ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helperString(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING), [exp], loc) : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)('', true))]
  };
};

var transformModel = function transformModel(dir, node, context) {
  var baseResult = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel)(dir, node, context); // base transform has errors OR component v-model (only need props)

  if (!baseResult.props.length || node.tagType === 1
  /* COMPONENT */
  ) {
    return baseResult;
  }

  if (dir.arg) {
    context.onError(createDOMCompilerError(55
    /* X_V_MODEL_ARG_ON_ELEMENT */
    , dir.arg.loc));
  }

  function checkDuplicatedValue() {
    var value = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, 'value');

    if (value) {
      context.onError(createDOMCompilerError(57
      /* X_V_MODEL_UNNECESSARY_VALUE */
      , value.loc));
    }
  }

  var tag = node.tag;
  var isCustomElement = context.isCustomElement(tag);

  if (tag === 'input' || tag === 'textarea' || tag === 'select' || isCustomElement) {
    var directiveToUse = V_MODEL_TEXT;
    var isInvalidType = false;

    if (tag === 'input' || isCustomElement) {
      var type = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, "type");

      if (type) {
        if (type.type === 7
        /* DIRECTIVE */
        ) {
          // :type="foo"
          directiveToUse = V_MODEL_DYNAMIC;
        } else if (type.value) {
          switch (type.value.content) {
            case 'radio':
              directiveToUse = V_MODEL_RADIO;
              break;

            case 'checkbox':
              directiveToUse = V_MODEL_CHECKBOX;
              break;

            case 'file':
              isInvalidType = true;
              context.onError(createDOMCompilerError(56
              /* X_V_MODEL_ON_FILE_INPUT_ELEMENT */
              , dir.loc));
              break;

            default:
              // text type
               true && checkDuplicatedValue();
              break;
          }
        }
      } else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind)(node)) {
        // element has bindings with dynamic keys, which can possibly contain
        // "type".
        directiveToUse = V_MODEL_DYNAMIC;
      } else {
        // text type
         true && checkDuplicatedValue();
      }
    } else if (tag === 'select') {
      directiveToUse = V_MODEL_SELECT;
    } else {
      // textarea
       true && checkDuplicatedValue();
    } // inject runtime directive
    // by returning the helper symbol via needRuntime
    // the import will replaced a resolveDirective call.


    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(createDOMCompilerError(54
    /* X_V_MODEL_ON_INVALID_ELEMENT */
    , dir.loc));
  } // native vmodel doesn't need the `modelValue` props since they are also
  // passed to the runtime as `binding.value`. removing it reduces code size.


  baseResult.props = baseResult.props.filter(function (p) {
    return !(p.key.type === 4
    /* SIMPLE_EXPRESSION */
    && p.key.content === 'modelValue');
  });
  return baseResult;
};

var isEventOptionModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("passive,once,capture");
var isNonKeyModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)( // event propagation management
"stop,prevent,self," + // system modifiers + exact
"ctrl,shift,alt,meta,exact," + // mouse
"middle"); // left & right could be mouse or key modifiers based on event type

var maybeKeyModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('left,right');
var isKeyboardEvent = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("onkeyup,onkeydown,onkeypress", true);

var resolveModifiers = function resolveModifiers(key, modifiers, context, loc) {
  var keyModifiers = [];
  var nonKeyModifiers = [];
  var eventOptionModifiers = [];

  for (var i = 0; i < modifiers.length; i++) {
    var modifier = modifiers[i];

    if (modifier === 'native' && (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.checkCompatEnabled)("COMPILER_V_ON_NATIVE"
    /* COMPILER_V_ON_NATIVE */
    , context, loc)) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      // eventOptionModifiers: modifiers for addEventListener() options,
      // e.g. .passive & .capture
      eventOptionModifiers.push(modifier);
    } else {
      // runtimeModifiers: modifiers that needs runtime guards
      if (maybeKeyModifier(modifier)) {
        if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key)) {
          if (isKeyboardEvent(key.content)) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }

  return {
    keyModifiers: keyModifiers,
    nonKeyModifiers: nonKeyModifiers,
    eventOptionModifiers: eventOptionModifiers
  };
};

var transformClick = function transformClick(key, event) {
  var isStaticClick = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) && key.content.toLowerCase() === 'onclick';
  return isStaticClick ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(event, true) : key.type !== 4
  /* SIMPLE_EXPRESSION */
  ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)(["(", key, ") === \"onClick\" ? \"".concat(event, "\" : ("), key, ")"]) : key;
};

var transformOn = function transformOn(dir, node, context) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn)(dir, node, context, function (baseResult) {
    var modifiers = dir.modifiers;
    if (!modifiers.length) return baseResult;
    var _baseResult$props$ = baseResult.props[0],
        key = _baseResult$props$.key,
        handlerExp = _baseResult$props$.value;

    var _resolveModifiers = resolveModifiers(key, modifiers, context, dir.loc),
        keyModifiers = _resolveModifiers.keyModifiers,
        nonKeyModifiers = _resolveModifiers.nonKeyModifiers,
        eventOptionModifiers = _resolveModifiers.eventOptionModifiers; // normalize click.right and click.middle since they don't actually fire


    if (nonKeyModifiers.includes('right')) {
      key = transformClick(key, "onContextmenu");
    }

    if (nonKeyModifiers.includes('middle')) {
      key = transformClick(key, "onMouseup");
    }

    if (nonKeyModifiers.length) {
      handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_MODIFIERS), [handlerExp, JSON.stringify(nonKeyModifiers)]);
    }

    if (keyModifiers.length && ( // if event name is dynamic, always wrap with keys guard
    !(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) || isKeyboardEvent(key.content))) {
      handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_KEYS), [handlerExp, JSON.stringify(keyModifiers)]);
    }

    if (eventOptionModifiers.length) {
      var modifierPostfix = eventOptionModifiers.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join('');
      key = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("".concat(key.content).concat(modifierPostfix), true) : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)(["(", key, ") + \"".concat(modifierPostfix, "\"")]);
    }

    return {
      props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)(key, handlerExp)]
    };
  });
};

var transformShow = function transformShow(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(58
    /* X_V_SHOW_NO_EXPRESSION */
    , loc));
  }

  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};

var warnTransitionChildren = function warnTransitionChildren(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && node.tagType === 1
  /* COMPONENT */
  ) {
    var component = context.isBuiltInComponent(node.tag);

    if (component === TRANSITION) {
      return function () {
        if (node.children.length && hasMultipleChildren(node)) {
          context.onError(createDOMCompilerError(59
          /* X_TRANSITION_INVALID_CHILDREN */
          , {
            start: node.children[0].loc.start,
            end: node.children[node.children.length - 1].loc.end,
            source: ''
          }));
        }
      };
    }
  }
};

function hasMultipleChildren(node) {
  // #1352 filter out potential comment nodes.
  var children = node.children = node.children.filter(function (c) {
    return c.type !== 3
    /* COMMENT */
    && !(c.type === 2
    /* TEXT */
    && !c.content.trim());
  });
  var child = children[0];
  return children.length !== 1 || child.type === 11
  /* FOR */
  || child.type === 9
  /* IF */
  && child.branches.some(hasMultipleChildren);
}

var ignoreSideEffectTags = function ignoreSideEffectTags(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && node.tagType === 0
  /* ELEMENT */
  && (node.tag === 'script' || node.tag === 'style')) {
    context.onError(createDOMCompilerError(60
    /* X_IGNORED_SIDE_EFFECT_TAG */
    , node.loc));
    context.removeNode();
  }
};

var DOMNodeTransforms = [transformStyle].concat(_toConsumableArray( true ? [warnTransitionChildren] : 0));
var DOMDirectiveTransforms = {
  cloak: _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  on: transformOn,
  show: transformShow
};

function compile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options, {
    nodeTransforms: [// ignore <script> and <tag>
    // this is not put inside DOMNodeTransforms because that list is used
    // by compiler-ssr to generate vnode fallback branches
    ignoreSideEffectTags].concat(_toConsumableArray(DOMNodeTransforms), _toConsumableArray(options.nodeTransforms || [])),
    directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
    transformHoist: null
  }));
}

function parse(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options));
}



/***/ }),

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectScope": () => (/* binding */ EffectScope),
/* harmony export */   "ITERATE_KEY": () => (/* binding */ ITERATE_KEY),
/* harmony export */   "ReactiveEffect": () => (/* binding */ ReactiveEffect),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "customRef": () => (/* binding */ customRef),
/* harmony export */   "deferredComputed": () => (/* binding */ deferredComputed),
/* harmony export */   "effect": () => (/* binding */ effect),
/* harmony export */   "effectScope": () => (/* binding */ effectScope),
/* harmony export */   "enableTracking": () => (/* binding */ enableTracking),
/* harmony export */   "getCurrentScope": () => (/* binding */ getCurrentScope),
/* harmony export */   "isProxy": () => (/* binding */ isProxy),
/* harmony export */   "isReactive": () => (/* binding */ isReactive),
/* harmony export */   "isReadonly": () => (/* binding */ isReadonly),
/* harmony export */   "isRef": () => (/* binding */ isRef),
/* harmony export */   "isShallow": () => (/* binding */ isShallow),
/* harmony export */   "markRaw": () => (/* binding */ markRaw),
/* harmony export */   "onScopeDispose": () => (/* binding */ onScopeDispose),
/* harmony export */   "pauseTracking": () => (/* binding */ pauseTracking),
/* harmony export */   "proxyRefs": () => (/* binding */ proxyRefs),
/* harmony export */   "reactive": () => (/* binding */ reactive),
/* harmony export */   "readonly": () => (/* binding */ readonly),
/* harmony export */   "ref": () => (/* binding */ ref),
/* harmony export */   "resetTracking": () => (/* binding */ resetTracking),
/* harmony export */   "shallowReactive": () => (/* binding */ shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* binding */ shallowReadonly),
/* harmony export */   "shallowRef": () => (/* binding */ shallowRef),
/* harmony export */   "stop": () => (/* binding */ stop),
/* harmony export */   "toRaw": () => (/* binding */ toRaw),
/* harmony export */   "toRef": () => (/* binding */ toRef),
/* harmony export */   "toRefs": () => (/* binding */ toRefs),
/* harmony export */   "track": () => (/* binding */ track),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "triggerRef": () => (/* binding */ triggerRef),
/* harmony export */   "unref": () => (/* binding */ unref)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



function warn(msg) {
  var _console;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  (_console = console).warn.apply(_console, ["[Vue warn] ".concat(msg)].concat(args));
}

var activeEffectScope;
var effectScopeStack = [];

var EffectScope = /*#__PURE__*/function () {
  function EffectScope() {
    var detached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, EffectScope);

    this.active = true;
    this.effects = [];
    this.cleanups = [];

    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }

  _createClass(EffectScope, [{
    key: "run",
    value: function run(fn) {
      if (this.active) {
        try {
          this.on();
          return fn();
        } finally {
          this.off();
        }
      } else if (true) {
        warn("cannot run an inactive effect scope.");
      }
    }
  }, {
    key: "on",
    value: function on() {
      if (this.active) {
        effectScopeStack.push(this);
        activeEffectScope = this;
      }
    }
  }, {
    key: "off",
    value: function off() {
      if (this.active) {
        effectScopeStack.pop();
        activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
      }
    }
  }, {
    key: "stop",
    value: function stop(fromParent) {
      if (this.active) {
        this.effects.forEach(function (e) {
          return e.stop();
        });
        this.cleanups.forEach(function (cleanup) {
          return cleanup();
        });

        if (this.scopes) {
          this.scopes.forEach(function (e) {
            return e.stop(true);
          });
        } // nested scope, dereference from parent to avoid memory leaks


        if (this.parent && !fromParent) {
          // optimized O(1) removal
          var last = this.parent.scopes.pop();

          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }

        this.active = false;
      }
    }
  }]);

  return EffectScope;
}();

function effectScope(detached) {
  return new EffectScope(detached);
}

function recordEffectScope(effect, scope) {
  scope = scope || activeEffectScope;

  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}

function getCurrentScope() {
  return activeEffectScope;
}

function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else if (true) {
    warn("onScopeDispose() is called when there is no active effect scope" + " to be associated with.");
  }
}

var createDep = function createDep(effects) {
  var dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};

var wasTracked = function wasTracked(dep) {
  return (dep.w & trackOpBit) > 0;
};

var newTracked = function newTracked(dep) {
  return (dep.n & trackOpBit) > 0;
};

var initDepMarkers = function initDepMarkers(_ref) {
  var deps = _ref.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit; // set was tracked
    }
  }
};

var finalizeDepMarkers = function finalizeDepMarkers(effect) {
  var deps = effect.deps;

  if (deps.length) {
    var ptr = 0;

    for (var i = 0; i < deps.length; i++) {
      var dep = deps[i];

      if (wasTracked(dep) && !newTracked(dep)) {
        dep["delete"](effect);
      } else {
        deps[ptr++] = dep;
      } // clear bits


      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }

    deps.length = ptr;
  }
};

var targetMap = new WeakMap(); // The number of effects currently being tracked recursively.

var effectTrackDepth = 0;
var trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */

var maxMarkerBits = 30;
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol( true ? 'iterate' : 0);
var MAP_KEY_ITERATE_KEY = Symbol( true ? 'Map key iterate' : 0);

var ReactiveEffect = /*#__PURE__*/function () {
  function ReactiveEffect(fn) {
    var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var scope = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, ReactiveEffect);

    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    recordEffectScope(this, scope);
  }

  _createClass(ReactiveEffect, [{
    key: "run",
    value: function run() {
      if (!this.active) {
        return this.fn();
      }

      if (!effectStack.length || !effectStack.includes(this)) {
        try {
          effectStack.push(activeEffect = this);
          enableTracking();
          trackOpBit = 1 << ++effectTrackDepth;

          if (effectTrackDepth <= maxMarkerBits) {
            initDepMarkers(this);
          } else {
            cleanupEffect(this);
          }

          return this.fn();
        } finally {
          if (effectTrackDepth <= maxMarkerBits) {
            finalizeDepMarkers(this);
          }

          trackOpBit = 1 << --effectTrackDepth;
          resetTracking();
          effectStack.pop();
          var n = effectStack.length;
          activeEffect = n > 0 ? effectStack[n - 1] : undefined;
        }
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.active) {
        cleanupEffect(this);

        if (this.onStop) {
          this.onStop();
        }

        this.active = false;
      }
    }
  }]);

  return ReactiveEffect;
}();

function cleanupEffect(effect) {
  var deps = effect.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i]["delete"](effect);
    }

    deps.length = 0;
  }
}

function effect(fn, options) {
  if (fn.effect) {
    fn = fn.effect.fn;
  }

  var _effect = new ReactiveEffect(fn);

  if (options) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(_effect, options);
    if (options.scope) recordEffectScope(_effect, options.scope);
  }

  if (!options || !options.lazy) {
    _effect.run();
  }

  var runner = _effect.run.bind(_effect);

  runner.effect = _effect;
  return runner;
}

function stop(runner) {
  runner.effect.stop();
}

var shouldTrack = true;
var trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}

function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (!isTracking()) {
    return;
  }

  var depsMap = targetMap.get(target);

  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }

  var dep = depsMap.get(key);

  if (!dep) {
    depsMap.set(key, dep = createDep());
  }

  var eventInfo =  true ? {
    effect: activeEffect,
    target: target,
    type: type,
    key: key
  } : 0;
  trackEffects(dep, eventInfo);
}

function isTracking() {
  return shouldTrack && activeEffect !== undefined;
}

function trackEffects(dep, debuggerEventExtraInfo) {
  var shouldTrack = false;

  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit; // set newly tracked

      shouldTrack = !wasTracked(dep);
    }
  } else {
    // Full cleanup mode.
    shouldTrack = !dep.has(activeEffect);
  }

  if (shouldTrack) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if ( true && activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({
        effect: activeEffect
      }, debuggerEventExtraInfo));
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  var deps = [];

  if (type === "clear"
  /* CLEAR */
  ) {
    // collection being cleared
    // trigger all effects for target
    deps = _toConsumableArray(depsMap.values());
  } else if (key === 'length' && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    depsMap.forEach(function (dep, key) {
      if (key === 'length' || key >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* ADD */
      :
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)) {
          // new index added to array -> length changes
          deps.push(depsMap.get('length'));
        }

        break;

      case "delete"
      /* DELETE */
      :
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* SET */
      :
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  var eventInfo =  true ? {
    target: target,
    type: type,
    key: key,
    newValue: newValue,
    oldValue: oldValue,
    oldTarget: oldTarget
  } : 0;

  if (deps.length === 1) {
    if (deps[0]) {
      if (true) {
        triggerEffects(deps[0], eventInfo);
      } else {}
    }
  } else {
    var effects = [];

    var _iterator = _createForOfIteratorHelper(deps),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dep = _step.value;

        if (dep) {
          effects.push.apply(effects, _toConsumableArray(dep));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (true) {
      triggerEffects(createDep(effects), eventInfo);
    } else {}
  }
}

function triggerEffects(dep, debuggerEventExtraInfo) {
  // spread into array for stabilization
  var _iterator2 = _createForOfIteratorHelper((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(dep) ? dep : _toConsumableArray(dep)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _effect2 = _step2.value;

      if (_effect2 !== activeEffect || _effect2.allowRecurse) {
        if ( true && _effect2.onTrigger) {
          _effect2.onTrigger((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({
            effect: _effect2
          }, debuggerEventExtraInfo));
        }

        if (_effect2.scheduler) {
          _effect2.scheduler();
        } else {
          _effect2.run();
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

var isNonTrackableKeys = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)("__proto__,__v_isRef,__isVue");
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) {
  return Symbol[key];
}).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol));
var get = /*#__PURE__*/createGetter();
var shallowGet = /*#__PURE__*/createGetter(false, true);
var readonlyGet = /*#__PURE__*/createGetter(true);
var shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
var arrayInstrumentations = /*#__PURE__*/createArrayInstrumentations();

function createArrayInstrumentations() {
  var instrumentations = {};
  ['includes', 'indexOf', 'lastIndexOf'].forEach(function (key) {
    instrumentations[key] = function () {
      var arr = toRaw(this);

      for (var i = 0, l = this.length; i < l; i++) {
        track(arr, "get"
        /* GET */
        , i + '');
      } // we run the method using the original args first (which may be reactive)


      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var res = arr[key].apply(arr, args);

      if (res === -1 || res === false) {
        // if that didn't work, run it again using raw values.
        return arr[key].apply(arr, _toConsumableArray(args.map(toRaw)));
      } else {
        return res;
      }
    };
  });
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (key) {
    instrumentations[key] = function () {
      pauseTracking();

      for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}

function createGetter() {
  var isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_isShallow"
    /* IS_SHALLOW */
    ) {
      return shallow;
    } else if (key === "__v_raw"
    /* RAW */
    && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }

    var targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);

    if (!isReadonly && targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    var res = Reflect.get(target, key, receiver);

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - does not apply for Array + integer key.
      var shouldUnwrap = !targetIsArray || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key);
      return shouldUnwrap ? res.value : res;
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

var set = /*#__PURE__*/createSetter();
var shallowSet = /*#__PURE__*/createSetter(true);

function createSetter() {
  var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }

    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }

      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    var hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? Number(key) < target.length : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    var result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* ADD */
        , key, value);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set"
        /* SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  var hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
  var oldValue = target[key];
  var result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  var result = Reflect.has(target, key);

  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* ITERATE */
  , (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

var mutableHandlers = {
  get: get,
  set: set,
  deleteProperty: deleteProperty,
  has: has,
  ownKeys: ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set: function set(target, key) {
    if (true) {
      console.warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    if (true) {
      console.warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  }
};
var shallowReactiveHandlers = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}); // Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.

var shallowReadonlyHandlers = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, readonlyHandlers, {
  get: shallowReadonlyGet
});

var toShallow = function toShallow(value) {
  return value;
};

var getProto = function getProto(v) {
  return Reflect.getPrototypeOf(v);
};

function get$1(target, key) {
  var isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get"
    /* GET */
    , key);
  }

  !isReadonly && track(rawTarget, "get"
  /* GET */
  , rawKey);

  var _getProto = getProto(rawTarget),
      has = _getProto.has;

  var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
  }
}

function has$1(key) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var target = this["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has"
    /* HAS */
    , key);
  }

  !isReadonly && track(rawTarget, "has"
  /* HAS */
  , rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw"
  /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);

  if (!hadKey) {
    target.add(value);
    trigger(target, "add"
    /* ADD */
    , value, value);
  }

  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  var target = toRaw(this);

  var _getProto2 = getProto(target),
      has = _getProto2.has,
      get = _getProto2.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , key, value);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
    trigger(target, "set"
    /* SET */
    , key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  var target = toRaw(this);

  var _getProto3 = getProto(target),
      has = _getProto3.has,
      get = _getProto3.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  var result = target["delete"](key);

  if (hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget =  true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target) ? new Map(target) : new Set(target) : 0; // forward the operation before queueing reactions

  var result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , ITERATE_KEY);
    return target.forEach(function (value, key) {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    var target = this["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
    var isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === 'keys' && targetIsMap;
    var innerIterator = target[method].apply(target, arguments);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return _defineProperty({
      // iterator protocol
      next: function next() {
        var _innerIterator$next = innerIterator.next(),
            value = _innerIterator$next.value,
            done = _innerIterator$next.done;

        return done ? {
          value: value,
          done: done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}

function createReadonlyMethod(type) {
  return function () {
    if (true) {
      var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
      console.warn("".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }

    return type === "delete"
    /* DELETE */
    ? false : this;
  };
}

function createInstrumentations() {
  var mutableInstrumentations = {
    get: function get(key) {
      return get$1(this, key);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    "delete": deleteEntry,
    clear: clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get: function get(key) {
      return get$1(this, key, false, true);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    "delete": deleteEntry,
    clear: clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    "delete": createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    "delete": createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
  iteratorMethods.forEach(function (method) {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations];
}

var _createInstrumentatio = /* #__PURE__*/createInstrumentations(),
    _createInstrumentatio2 = _slicedToArray(_createInstrumentatio, 4),
    mutableInstrumentations = _createInstrumentatio2[0],
    readonlyInstrumentations = _createInstrumentatio2[1],
    shallowInstrumentations = _createInstrumentatio2[2],
    shallowReadonlyInstrumentations = _createInstrumentatio2[3];

function createInstrumentationGetter(isReadonly, shallow) {
  var instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return function (target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_raw"
    /* RAW */
    ) {
      return target;
    }

    return Reflect.get((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

var mutableCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, true)
};

function checkIdentityKeys(target, has, key) {
  var rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    var type = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(target);
    console.warn("Reactive ".concat(type, " contains both the raw and reactive ") + "versions of the same object".concat(type === "Map" ? " as keys" : "", ", ") + "which can lead to inconsistencies. " + "Avoid differentiating between the raw and reactive versions " + "of an object and only use the reactive version if possible.");
  }
}

var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* COLLECTION */
      ;

    default:
      return 0
      /* INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* INVALID */
  : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (isReadonly(target)) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */


function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */


function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    if (true) {
      console.warn("value cannot be made reactive: ".concat(String(target)));
    }

    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  var existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only a whitelist of value types can be observed.


  var targetType = getTargetType(target);

  if (targetType === 0
  /* INVALID */
  ) {
    return target;
  }

  var proxy = new Proxy(target, targetType === 2
  /* COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"
    /* RAW */
    ]);
  }

  return !!(value && value["__v_isReactive"
  /* IS_REACTIVE */
  ]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* IS_READONLY */
  ]);
}

function isShallow(value) {
  return !!(value && value["__v_isShallow"
  /* IS_SHALLOW */
  ]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  var raw = observed && observed["__v_raw"
  /* RAW */
  ];
  return raw ? toRaw(raw) : observed;
}

function markRaw(value) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip"
  /* SKIP */
  , true);
  return value;
}

var toReactive = function toReactive(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
};

var toReadonly = function toReadonly(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;
};

function trackRefValue(ref) {
  if (isTracking()) {
    ref = toRaw(ref);

    if (!ref.dep) {
      ref.dep = createDep();
    }

    if (true) {
      trackEffects(ref.dep, {
        target: ref,
        type: "get"
        /* GET */
        ,
        key: 'value'
      });
    } else {}
  }
}

function triggerRefValue(ref, newVal) {
  ref = toRaw(ref);

  if (ref.dep) {
    if (true) {
      triggerEffects(ref.dep, {
        target: ref,
        type: "set"
        /* SET */
        ,
        key: 'value',
        newValue: newVal
      });
    } else {}
  }
}

function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value, false);
}

function shallowRef(value) {
  return createRef(value, true);
}

function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }

  return new RefImpl(rawValue, shallow);
}

var RefImpl = /*#__PURE__*/function () {
  function RefImpl(value, __v_isShallow) {
    _classCallCheck(this, RefImpl);

    this.__v_isShallow = __v_isShallow;
    this.dep = undefined;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }

  _createClass(RefImpl, [{
    key: "value",
    get: function get() {
      trackRefValue(this);
      return this._value;
    },
    set: function set(newVal) {
      newVal = this.__v_isShallow ? newVal : toRaw(newVal);

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(newVal, this._rawValue)) {
        this._rawValue = newVal;
        this._value = this.__v_isShallow ? newVal : toReactive(newVal);
        triggerRefValue(this, newVal);
      }
    }
  }]);

  return RefImpl;
}();

function triggerRef(ref) {
  triggerRefValue(ref,  true ? ref.value : 0);
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

var shallowUnwrapHandlers = {
  get: function get(target, key, receiver) {
    return unref(Reflect.get(target, key, receiver));
  },
  set: function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

var CustomRefImpl = /*#__PURE__*/function () {
  function CustomRefImpl(factory) {
    var _this = this;

    _classCallCheck(this, CustomRefImpl);

    this.dep = undefined;
    this.__v_isRef = true;

    var _factory = factory(function () {
      return trackRefValue(_this);
    }, function () {
      return triggerRefValue(_this);
    }),
        get = _factory.get,
        set = _factory.set;

    this._get = get;
    this._set = set;
  }

  _createClass(CustomRefImpl, [{
    key: "value",
    get: function get() {
      return this._get();
    },
    set: function set(newVal) {
      this._set(newVal);
    }
  }]);

  return CustomRefImpl;
}();

function customRef(factory) {
  return new CustomRefImpl(factory);
}

function toRefs(object) {
  if ( true && !isProxy(object)) {
    console.warn("toRefs() expects a reactive object but received a plain one.");
  }

  var ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};

  for (var key in object) {
    ret[key] = toRef(object, key);
  }

  return ret;
}

var ObjectRefImpl = /*#__PURE__*/function () {
  function ObjectRefImpl(_object, _key, _defaultValue) {
    _classCallCheck(this, ObjectRefImpl);

    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }

  _createClass(ObjectRefImpl, [{
    key: "value",
    get: function get() {
      var val = this._object[this._key];
      return val === undefined ? this._defaultValue : val;
    },
    set: function set(newVal) {
      this._object[this._key] = newVal;
    }
  }]);

  return ObjectRefImpl;
}();

function toRef(object, key, defaultValue) {
  var val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}

var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter, _setter, isReadonly, isSSR) {
    var _this2 = this;

    _classCallCheck(this, ComputedRefImpl);

    this._setter = _setter;
    this.dep = undefined;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, function () {
      if (!_this2._dirty) {
        _this2._dirty = true;
        triggerRefValue(_this2);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"
    /* IS_READONLY */
    ] = isReadonly;
  }

  _createClass(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      // the computed ref may get wrapped by other proxies e.g. readonly() #3376
      var self = toRaw(this);
      trackRefValue(self);

      if (self._dirty || !self._cacheable) {
        self._dirty = false;
        self._value = self.effect.run();
      }

      return self._value;
    },
    set: function set(newValue) {
      this._setter(newValue);
    }
  }]);

  return ComputedRefImpl;
}();

function computed(getterOrOptions, debugOptions) {
  var isSSR = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var getter;
  var setter;
  var onlyGetter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions);

  if (onlyGetter) {
    getter = getterOrOptions;
    setter =  true ? function () {
      console.warn('Write operation failed: computed value is readonly');
    } : 0;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  var cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);

  if ( true && debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }

  return cRef;
}

var _a;

var tick = Promise.resolve();
var queue = [];
var queued = false;

var scheduler = function scheduler(fn) {
  queue.push(fn);

  if (!queued) {
    queued = true;
    tick.then(flush);
  }
};

var flush = function flush() {
  for (var i = 0; i < queue.length; i++) {
    queue[i]();
  }

  queue.length = 0;
  queued = false;
};

var DeferredComputedRefImpl = /*#__PURE__*/function () {
  function DeferredComputedRefImpl(getter) {
    var _this3 = this;

    _classCallCheck(this, DeferredComputedRefImpl);

    this.dep = undefined;
    this._dirty = true;
    this.__v_isRef = true;
    this[_a] = true;
    var compareTarget;
    var hasCompareTarget = false;
    var scheduled = false;
    this.effect = new ReactiveEffect(getter, function (computedTrigger) {
      if (_this3.dep) {
        if (computedTrigger) {
          compareTarget = _this3._value;
          hasCompareTarget = true;
        } else if (!scheduled) {
          var valueToCompare = hasCompareTarget ? compareTarget : _this3._value;
          scheduled = true;
          hasCompareTarget = false;
          scheduler(function () {
            if (_this3.effect.active && _this3._get() !== valueToCompare) {
              triggerRefValue(_this3);
            }

            scheduled = false;
          });
        } // chained upstream computeds are notified synchronously to ensure
        // value invalidation in case of sync access; normal effects are
        // deferred to be triggered in scheduler.


        var _iterator3 = _createForOfIteratorHelper(_this3.dep),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var e = _step3.value;

            if (e.computed instanceof DeferredComputedRefImpl) {
              e.scheduler(true
              /* computedTrigger */
              );
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      _this3._dirty = true;
    });
    this.effect.computed = this;
  }

  _createClass(DeferredComputedRefImpl, [{
    key: "_get",
    value: function _get() {
      if (this._dirty) {
        this._dirty = false;
        return this._value = this.effect.run();
      }

      return this._value;
    }
  }, {
    key: "value",
    get: function get() {
      trackRefValue(this); // the computed ref may get wrapped by other proxies e.g. readonly() #3376

      return toRaw(this)._get();
    }
  }]);

  return DeferredComputedRefImpl;
}();

_a = "__v_isReadonly"
/* IS_READONLY */
;

function deferredComputed(getter) {
  return new DeferredComputedRefImpl(getter);
}



/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectScope": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   "ReactiveEffect": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "effect": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   "effectScope": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isShallow": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "stop": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize),
/* harmony export */   "normalizeClass": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass),
/* harmony export */   "normalizeProps": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey),
/* harmony export */   "BaseTransition": () => (/* binding */ BaseTransition),
/* harmony export */   "Comment": () => (/* binding */ Comment),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "KeepAlive": () => (/* binding */ KeepAlive),
/* harmony export */   "Static": () => (/* binding */ Static),
/* harmony export */   "Suspense": () => (/* binding */ Suspense),
/* harmony export */   "Teleport": () => (/* binding */ Teleport),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* binding */ callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* binding */ callWithErrorHandling),
/* harmony export */   "cloneVNode": () => (/* binding */ cloneVNode),
/* harmony export */   "compatUtils": () => (/* binding */ compatUtils),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "createBlock": () => (/* binding */ createBlock),
/* harmony export */   "createCommentVNode": () => (/* binding */ createCommentVNode),
/* harmony export */   "createElementBlock": () => (/* binding */ createElementBlock),
/* harmony export */   "createElementVNode": () => (/* binding */ createBaseVNode),
/* harmony export */   "createHydrationRenderer": () => (/* binding */ createHydrationRenderer),
/* harmony export */   "createPropsRestProxy": () => (/* binding */ createPropsRestProxy),
/* harmony export */   "createRenderer": () => (/* binding */ createRenderer),
/* harmony export */   "createSlots": () => (/* binding */ createSlots),
/* harmony export */   "createStaticVNode": () => (/* binding */ createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* binding */ createTextVNode),
/* harmony export */   "createVNode": () => (/* binding */ createVNode),
/* harmony export */   "defineAsyncComponent": () => (/* binding */ defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* binding */ defineComponent),
/* harmony export */   "defineEmits": () => (/* binding */ defineEmits),
/* harmony export */   "defineExpose": () => (/* binding */ defineExpose),
/* harmony export */   "defineProps": () => (/* binding */ defineProps),
/* harmony export */   "devtools": () => (/* binding */ devtools),
/* harmony export */   "getCurrentInstance": () => (/* binding */ getCurrentInstance),
/* harmony export */   "getTransitionRawChildren": () => (/* binding */ getTransitionRawChildren),
/* harmony export */   "guardReactiveProps": () => (/* binding */ guardReactiveProps),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "initCustomFormatter": () => (/* binding */ initCustomFormatter),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "isMemoSame": () => (/* binding */ isMemoSame),
/* harmony export */   "isRuntimeOnly": () => (/* binding */ isRuntimeOnly),
/* harmony export */   "isVNode": () => (/* binding */ isVNode),
/* harmony export */   "mergeDefaults": () => (/* binding */ mergeDefaults),
/* harmony export */   "mergeProps": () => (/* binding */ mergeProps),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "onActivated": () => (/* binding */ onActivated),
/* harmony export */   "onBeforeMount": () => (/* binding */ onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* binding */ onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* binding */ onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* binding */ onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* binding */ onErrorCaptured),
/* harmony export */   "onMounted": () => (/* binding */ onMounted),
/* harmony export */   "onRenderTracked": () => (/* binding */ onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* binding */ onRenderTriggered),
/* harmony export */   "onServerPrefetch": () => (/* binding */ onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* binding */ onUnmounted),
/* harmony export */   "onUpdated": () => (/* binding */ onUpdated),
/* harmony export */   "openBlock": () => (/* binding */ openBlock),
/* harmony export */   "popScopeId": () => (/* binding */ popScopeId),
/* harmony export */   "provide": () => (/* binding */ provide),
/* harmony export */   "pushScopeId": () => (/* binding */ pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* binding */ queuePostFlushCb),
/* harmony export */   "registerRuntimeCompiler": () => (/* binding */ registerRuntimeCompiler),
/* harmony export */   "renderList": () => (/* binding */ renderList),
/* harmony export */   "renderSlot": () => (/* binding */ renderSlot),
/* harmony export */   "resolveComponent": () => (/* binding */ resolveComponent),
/* harmony export */   "resolveDirective": () => (/* binding */ resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* binding */ resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* binding */ resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* binding */ resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* binding */ setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* binding */ setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* binding */ setTransitionHooks),
/* harmony export */   "ssrContextKey": () => (/* binding */ ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* binding */ ssrUtils),
/* harmony export */   "toHandlers": () => (/* binding */ toHandlers),
/* harmony export */   "transformVNodeArgs": () => (/* binding */ transformVNodeArgs),
/* harmony export */   "useAttrs": () => (/* binding */ useAttrs),
/* harmony export */   "useSSRContext": () => (/* binding */ useSSRContext),
/* harmony export */   "useSlots": () => (/* binding */ useSlots),
/* harmony export */   "useTransitionState": () => (/* binding */ useTransitionState),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "watchEffect": () => (/* binding */ watchEffect),
/* harmony export */   "watchPostEffect": () => (/* binding */ watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* binding */ watchSyncEffect),
/* harmony export */   "withAsyncContext": () => (/* binding */ withAsyncContext),
/* harmony export */   "withCtx": () => (/* binding */ withCtx),
/* harmony export */   "withDefaults": () => (/* binding */ withDefaults),
/* harmony export */   "withDirectives": () => (/* binding */ withDirectives),
/* harmony export */   "withMemo": () => (/* binding */ withMemo),
/* harmony export */   "withScopeId": () => (/* binding */ withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _ErrorTypeStrings;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn(msg) {
  // avoid props formatting or warn handler tracking deps that might be mutated
  // during patch, leading to infinite recursion.
  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
  var instance = stack.length ? stack[stack.length - 1].component : null;
  var appWarnHandler = instance && instance.appContext.config.warnHandler;
  var trace = getComponentTrace();

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11
    /* APP_WARN_HANDLER */
    , [msg + args.join(''), instance && instance.proxy, trace.map(function (_ref) {
      var vnode = _ref.vnode;
      return "at <".concat(formatComponentName(instance, vnode.type), ">");
    }).join('\n'), trace]);
  } else {
    var _console;

    var warnArgs = ["[Vue warn]: ".concat(msg)].concat(args);
    /* istanbul ignore if */

    if (trace.length && // avoid spamming console during tests
    !false) {
      warnArgs.push.apply(warnArgs, ["\n"].concat(_toConsumableArray(formatTrace(trace))));
    }

    (_console = console).warn.apply(_console, _toConsumableArray(warnArgs));
  }

  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
}

function getComponentTrace() {
  var currentVNode = stack[stack.length - 1];

  if (!currentVNode) {
    return [];
  } // we can't just use the stack because it will be incomplete during updates
  // that did not start from the root. Re-construct the parent chain using
  // instance parent pointers.


  var normalizedStack = [];

  while (currentVNode) {
    var last = normalizedStack[0];

    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }

    var parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }

  return normalizedStack;
}
/* istanbul ignore next */


function formatTrace(trace) {
  var logs = [];
  trace.forEach(function (entry, i) {
    logs.push.apply(logs, _toConsumableArray(i === 0 ? [] : ["\n"]).concat(_toConsumableArray(formatTraceEntry(entry))));
  });
  return logs;
}

function formatTraceEntry(_ref2) {
  var vnode = _ref2.vnode,
      recurseCount = _ref2.recurseCount;
  var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
  var isRoot = vnode.component ? vnode.component.parent == null : false;
  var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
  var close = ">" + postfix;
  return vnode.props ? [open].concat(_toConsumableArray(formatProps(vnode.props)), [close]) : [open + close];
}
/* istanbul ignore next */


function formatProps(props) {
  var res = [];
  var keys = Object.keys(props);
  keys.slice(0, 3).forEach(function (key) {
    res.push.apply(res, _toConsumableArray(formatProp(key, props[key])));
  });

  if (keys.length > 3) {
    res.push(" ...");
  }

  return res;
}
/* istanbul ignore next */


function formatProp(key, value, raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    value = JSON.stringify(value);
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) {
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    value = formatProp(key, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value.value), true);
    return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
  } else {
    value = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value);
    return raw ? value : ["".concat(key, "="), value];
  }
}

var ErrorTypeStrings = (_ErrorTypeStrings = {}, _defineProperty(_ErrorTypeStrings, "sp"
/* SERVER_PREFETCH */
, 'serverPrefetch hook'), _defineProperty(_ErrorTypeStrings, "bc"
/* BEFORE_CREATE */
, 'beforeCreate hook'), _defineProperty(_ErrorTypeStrings, "c"
/* CREATED */
, 'created hook'), _defineProperty(_ErrorTypeStrings, "bm"
/* BEFORE_MOUNT */
, 'beforeMount hook'), _defineProperty(_ErrorTypeStrings, "m"
/* MOUNTED */
, 'mounted hook'), _defineProperty(_ErrorTypeStrings, "bu"
/* BEFORE_UPDATE */
, 'beforeUpdate hook'), _defineProperty(_ErrorTypeStrings, "u"
/* UPDATED */
, 'updated'), _defineProperty(_ErrorTypeStrings, "bum"
/* BEFORE_UNMOUNT */
, 'beforeUnmount hook'), _defineProperty(_ErrorTypeStrings, "um"
/* UNMOUNTED */
, 'unmounted hook'), _defineProperty(_ErrorTypeStrings, "a"
/* ACTIVATED */
, 'activated hook'), _defineProperty(_ErrorTypeStrings, "da"
/* DEACTIVATED */
, 'deactivated hook'), _defineProperty(_ErrorTypeStrings, "ec"
/* ERROR_CAPTURED */
, 'errorCaptured hook'), _defineProperty(_ErrorTypeStrings, "rtc"
/* RENDER_TRACKED */
, 'renderTracked hook'), _defineProperty(_ErrorTypeStrings, "rtg"
/* RENDER_TRIGGERED */
, 'renderTriggered hook'), _defineProperty(_ErrorTypeStrings, 0
/* SETUP_FUNCTION */
, 'setup function'), _defineProperty(_ErrorTypeStrings, 1
/* RENDER_FUNCTION */
, 'render function'), _defineProperty(_ErrorTypeStrings, 2
/* WATCH_GETTER */
, 'watcher getter'), _defineProperty(_ErrorTypeStrings, 3
/* WATCH_CALLBACK */
, 'watcher callback'), _defineProperty(_ErrorTypeStrings, 4
/* WATCH_CLEANUP */
, 'watcher cleanup function'), _defineProperty(_ErrorTypeStrings, 5
/* NATIVE_EVENT_HANDLER */
, 'native event handler'), _defineProperty(_ErrorTypeStrings, 6
/* COMPONENT_EVENT_HANDLER */
, 'component event handler'), _defineProperty(_ErrorTypeStrings, 7
/* VNODE_HOOK */
, 'vnode hook'), _defineProperty(_ErrorTypeStrings, 8
/* DIRECTIVE_HOOK */
, 'directive hook'), _defineProperty(_ErrorTypeStrings, 9
/* TRANSITION_HOOK */
, 'transition hook'), _defineProperty(_ErrorTypeStrings, 10
/* APP_ERROR_HANDLER */
, 'app errorHandler'), _defineProperty(_ErrorTypeStrings, 11
/* APP_WARN_HANDLER */
, 'app warnHandler'), _defineProperty(_ErrorTypeStrings, 12
/* FUNCTION_REF */
, 'ref function'), _defineProperty(_ErrorTypeStrings, 13
/* ASYNC_COMPONENT_LOADER */
, 'async component loader'), _defineProperty(_ErrorTypeStrings, 14
/* SCHEDULER */
, 'scheduler flush. This is likely a Vue internals bug. ' + 'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core'), _ErrorTypeStrings);

function callWithErrorHandling(fn, instance, type, args) {
  var res;

  try {
    res = args ? fn.apply(void 0, _toConsumableArray(args)) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }

  return res;
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
    var res = callWithErrorHandling(fn, instance, type, args);

    if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(res)) {
      res["catch"](function (err) {
        handleError(err, instance, type);
      });
    }

    return res;
  }

  var values = [];

  for (var i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }

  return values;
}

function handleError(err, instance, type) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var contextVNode = instance ? instance.vnode : null;

  if (instance) {
    var cur = instance.parent; // the exposed instance is the render proxy to keep it consistent with 2.x

    var exposedInstance = instance.proxy; // in production the hook receives only the error code

    var errorInfo =  true ? ErrorTypeStrings[type] : 0;

    while (cur) {
      var errorCapturedHooks = cur.ec;

      if (errorCapturedHooks) {
        for (var i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }

      cur = cur.parent;
    } // app-level handling


    var appErrorHandler = instance.appContext.config.errorHandler;

    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10
      /* APP_ERROR_HANDLER */
      , [err, exposedInstance, errorInfo]);
      return;
    }
  }

  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (true) {
    var info = ErrorTypeStrings[type];

    if (contextVNode) {
      pushWarningContext(contextVNode);
    }

    warn("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));

    if (contextVNode) {
      popWarningContext();
    } // crash in dev by default so it's more noticeable


    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {}
}

var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPreFlushCbs = [];
var activePreFlushCbs = null;
var preFlushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = Promise.resolve();
var currentFlushPromise = null;
var currentPreFlushParentJob = null;
var RECURSION_LIMIT = 100;

function nextTick(fn) {
  var p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
} // #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.


function findInsertionIndex(id) {
  // the start index should be `flushIndex + 1`
  var start = flushIndex + 1;
  var end = queue.length;

  while (start < end) {
    var middle = start + end >>> 1;
    var middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }

  return start;
}

function queueJob(job) {
  // the dedupe search uses the startIndex argument of Array.includes()
  // by default the search index includes the current job that is being run
  // so it cannot recursively trigger itself again.
  // if the job is a watch() callback, the search will start with a +1 index to
  // allow it recursively trigger itself - it is the user's responsibility to
  // ensure it doesn't end up in an infinite loop.
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }

    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}

function invalidateJob(job) {
  var i = queue.indexOf(job);

  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}

function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push.apply(pendingQueue, _toConsumableArray(cb));
  }

  queueFlush();
}

function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}

function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}

function flushPreFlushCbs(seen) {
  var parentJob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = _toConsumableArray(new Set(pendingPreFlushCbs));
    pendingPreFlushCbs.length = 0;

    if (true) {
      seen = seen || new Map();
    }

    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) {
        continue;
      }

      activePreFlushCbs[preFlushIndex]();
    }

    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null; // recursively flush until it drains

    flushPreFlushCbs(seen, parentJob);
  }
}

function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    var deduped = _toConsumableArray(new Set(pendingPostFlushCbs));

    pendingPostFlushCbs.length = 0; // #1947 already has active queue, nested flushPostFlushCbs call

    if (activePostFlushCbs) {
      var _activePostFlushCbs;

      (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, _toConsumableArray(deduped));

      return;
    }

    activePostFlushCbs = deduped;

    if (true) {
      seen = seen || new Map();
    }

    activePostFlushCbs.sort(function (a, b) {
      return getId(a) - getId(b);
    });

    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }

      activePostFlushCbs[postFlushIndex]();
    }

    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}

var getId = function getId(job) {
  return job.id == null ? Infinity : job.id;
};

function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;

  if (true) {
    seen = seen || new Map();
  }

  flushPreFlushCbs(seen); // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child so its render effect will have smaller
  //    priority number)
  // 2. If a component is unmounted during a parent component's update,
  //    its update can be skipped.

  queue.sort(function (a, b) {
    return getId(a) - getId(b);
  }); // conditional usage of checkRecursiveUpdate must be determined out of
  // try ... catch block since Rollup by default de-optimizes treeshaking
  // inside try-catch. This can leave all warning code unshaked. Although
  // they would get eventually shaken by a minifier like terser, some minifiers
  // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)

  var check =  true ? function (job) {
    return checkRecursiveUpdates(seen, job);
  } : 0;

  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      var job = queue[flushIndex];

      if (job && job.active !== false) {
        if ( true && check(job)) {
          continue;
        } // console.log(`running:`, job.id)


        callWithErrorHandling(job, null, 14
        /* SCHEDULER */
        );
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null; // some postFlushCb queued jobs!
    // keep flushing until it drains.

    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}

function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    var count = seen.get(fn);

    if (count > RECURSION_LIMIT) {
      var instance = fn.ownerInstance;
      var componentName = instance && getComponentName(instance.type);
      warn("Maximum recursive updates exceeded".concat(componentName ? " in component <".concat(componentName, ">") : "", ". ") + "This means you have a reactive effect that is mutating its own " + "dependencies and thus recursively triggering itself. Possible sources " + "include component template, render function, updated hook or " + "watcher source function.");
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
/* eslint-disable no-restricted-globals */


var isHmrUpdating = false;
var hmrDirtyComponents = new Set(); // Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.

if (true) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}

var map = new Map();

function registerHMR(instance) {
  var id = instance.type.__hmrId;
  var record = map.get(id);

  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }

  record.instances.add(instance);
}

function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances["delete"](instance);
}

function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }

  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: new Set()
  });
  return true;
}

function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}

function rerender(id, newRender) {
  var record = map.get(id);

  if (!record) {
    return;
  } // update initial record (for not-yet-rendered component)


  record.initialDef.render = newRender;

  _toConsumableArray(record.instances).forEach(function (instance) {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }

    instance.renderCache = []; // this flag forces child components with slot content to update

    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}

function reload(id, newComp) {
  var record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp); // update initial def (for not-yet-rendered components)

  updateComponentDef(record.initialDef, newComp); // create a snapshot which avoids the set being mutated during updates

  var instances = _toConsumableArray(record.instances);

  var _iterator = _createForOfIteratorHelper(instances),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var instance = _step.value;
      var oldComp = normalizeClassComponent(instance.type);

      if (!hmrDirtyComponents.has(oldComp)) {
        // 1. Update existing comp definition to match new one
        if (oldComp !== record.initialDef) {
          updateComponentDef(oldComp, newComp);
        } // 2. mark definition dirty. This forces the renderer to replace the
        // component on patch.


        hmrDirtyComponents.add(oldComp);
      } // 3. invalidate options resolution cache


      instance.appContext.optionsCache["delete"](instance.type); // 4. actually update

      if (instance.ceReload) {
        // custom element
        hmrDirtyComponents.add(oldComp);
        instance.ceReload(newComp.styles);
        hmrDirtyComponents["delete"](oldComp);
      } else if (instance.parent) {
        // 4. Force the parent instance to re-render. This will cause all updated
        // components to be unmounted and re-mounted. Queue the update so that we
        // don't end up forcing the same parent to re-render multiple times.
        queueJob(instance.parent.update); // instance is the inner component of an async custom element
        // invoke to reset styles

        if (instance.parent.type.__asyncLoader && instance.parent.ceReload) {
          instance.parent.ceReload(newComp.styles);
        }
      } else if (instance.appContext.reload) {
        // root instance mounted via createApp() has a reload method
        instance.appContext.reload();
      } else if (typeof window !== 'undefined') {
        // root instance inside tree created via raw render(). Force reload.
        window.location.reload();
      } else {
        console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
      }
    } // 5. make sure to cleanup dirty hmr components after update

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  queuePostFlushCb(function () {
    var _iterator2 = _createForOfIteratorHelper(instances),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var instance = _step2.value;
        hmrDirtyComponents["delete"](normalizeClassComponent(instance.type));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
}

function updateComponentDef(oldComp, newComp) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(oldComp, newComp);

  for (var key in oldComp) {
    if (key !== '__file' && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn("[HMR] Something went wrong during Vue component hot-reload. " + "Full reload required.");
    }
  };
}

var devtools;
var buffer = [];
var devtoolsNotInstalled = false;

function emit(event) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  if (devtools) {
    var _devtools;

    (_devtools = devtools).emit.apply(_devtools, [event].concat(args));
  } else if (!devtoolsNotInstalled) {
    buffer.push({
      event: event,
      args: args
    });
  }
}

function setDevtoolsHook(hook, target) {
  var _a, _b;

  devtools = hook;

  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(function (_ref3) {
      var _devtools2;

      var event = _ref3.event,
          args = _ref3.args;
      return (_devtools2 = devtools).emit.apply(_devtools2, [event].concat(_toConsumableArray(args)));
    });
    buffer = [];
  } else if ( // handle late devtools injection - only do this if we are in an actual
  // browser environment to avoid the timer handle stalling test runner exit
  // (#4815)
  // eslint-disable-next-line no-restricted-globals
  typeof window !== 'undefined' && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
    var replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push(function (newHook) {
      setDevtoolsHook(newHook, target);
    }); // clear buffer after 3s - the user probably doesn't have devtools installed
    // at all, and keeping the buffer will cause memory leaks (#4738)

    setTimeout(function () {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3000);
  } else {
    // non-browser env, assume not installed
    devtoolsNotInstalled = true;
    buffer = [];
  }
}

function devtoolsInitApp(app, version) {
  emit("app:init"
  /* APP_INIT */
  , app, version, {
    Fragment: Fragment,
    Text: Text,
    Comment: Comment,
    Static: Static
  });
}

function devtoolsUnmountApp(app) {
  emit("app:unmount"
  /* APP_UNMOUNT */
  , app);
}

var devtoolsComponentAdded = /*#__PURE__*/createDevtoolsComponentHook("component:added"
/* COMPONENT_ADDED */
);
var devtoolsComponentUpdated = /*#__PURE__*/createDevtoolsComponentHook("component:updated"
/* COMPONENT_UPDATED */
);
var devtoolsComponentRemoved = /*#__PURE__*/createDevtoolsComponentHook("component:removed"
/* COMPONENT_REMOVED */
);

function createDevtoolsComponentHook(hook) {
  return function (component) {
    emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
  };
}

var devtoolsPerfStart = /*#__PURE__*/createDevtoolsPerformanceHook("perf:start"
/* PERFORMANCE_START */
);
var devtoolsPerfEnd = /*#__PURE__*/createDevtoolsPerformanceHook("perf:end"
/* PERFORMANCE_END */
);

function createDevtoolsPerformanceHook(hook) {
  return function (component, type, time) {
    emit(hook, component.appContext.app, component.uid, component, type, time);
  };
}

function devtoolsComponentEmit(component, event, params) {
  emit("component:emit"
  /* COMPONENT_EMIT */
  , component.appContext.app, component, event, params);
}

function emit$1(instance, event) {
  var props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

  for (var _len3 = arguments.length, rawArgs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    rawArgs[_key3 - 2] = arguments[_key3];
  }

  if (true) {
    var emitsOptions = instance.emitsOptions,
        _instance$propsOption = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption[0];

    if (emitsOptions) {
      if (!(event in emitsOptions) && !false) {
        if (!propsOptions || !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event) in propsOptions)) {
          warn("Component emitted event \"".concat(event, "\" but it is neither declared in ") + "the emits option nor as an \"".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event), "\" prop."));
        }
      } else {
        var validator = emitsOptions[event];

        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(validator)) {
          var isValid = validator.apply(void 0, rawArgs);

          if (!isValid) {
            warn("Invalid event arguments: event validation failed for event \"".concat(event, "\"."));
          }
        }
      }
    }
  }

  var args = rawArgs;
  var isModelListener = event.startsWith('update:'); // for v-model update:xxx events, apply modifiers on args

  var modelArg = isModelListener && event.slice(7);

  if (modelArg && modelArg in props) {
    var modifiersKey = "".concat(modelArg === 'modelValue' ? 'model' : modelArg, "Modifiers");

    var _ref4 = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        number = _ref4.number,
        trim = _ref4.trim;

    if (trim) {
      args = rawArgs.map(function (a) {
        return a.trim();
      });
    } else if (number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber);
    }
  }

  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }

  if (true) {
    var lowerCaseEvent = event.toLowerCase();

    if (lowerCaseEvent !== event && props[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(lowerCaseEvent)]) {
      warn("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") + "".concat(formatComponentName(instance, instance.type), " but the handler is registered for \"").concat(event, "\". ") + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event), "\" instead of \"").concat(event, "\"."));
    }
  }

  var handlerName;
  var handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
  props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event))]; // for v-model update:xxx events, also trigger kebab-case equivalent
  // for props passed via kebab-case

  if (!handler && isModelListener) {
    handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event))];
  }

  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }

  var onceHandler = props[handlerName + "Once"];

  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }

    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }
}

function normalizeEmitsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.emitsCache;
  var cached = cache.get(comp);

  if (cached !== undefined) {
    return cached;
  }

  var raw = comp.emits;
  var normalized = {}; // apply mixin/extends props

  var hasExtends = false;

  if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    var extendEmits = function extendEmits(raw) {
      var normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);

      if (normalizedFromExtend) {
        hasExtends = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, normalizedFromExtend);
      }
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }

    if (comp["extends"]) {
      extendEmits(comp["extends"]);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }

  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    raw.forEach(function (key) {
      return normalized[key] = null;
    });
  } else {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, raw);
  }

  cache.set(comp, normalized);
  return normalized;
} // Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.


function isEmitListener(options, key) {
  if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    return false;
  }

  key = key.slice(2).replace(/Once$/, '');
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */


var currentRenderingInstance = null;
var currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */

function setCurrentRenderingInstance(instance) {
  var prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */


function pushScopeId(id) {
  currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */


function popScopeId() {
  currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */


var withScopeId = function withScopeId(_id) {
  return withCtx;
};
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */


function withCtx(fn) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentRenderingInstance;
  var isNonScopedSlot // false only
  = arguments.length > 2 ? arguments[2] : undefined;
  if (!ctx) return fn; // already normalized

  if (fn._n) {
    return fn;
  }

  var renderFnWithContext = function renderFnWithContext() {
    // If a user calls a compiled slot inside a template expression (#1745), it
    // can mess up block tracking, so by default we disable block tracking and
    // force bail out when invoking a compiled slot (indicated by the ._d flag).
    // This isn't necessary if rendering a compiled `<slot>`, so we flip the
    // ._d flag off when invoking the wrapped fn inside `renderSlot`.
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }

    var prevInstance = setCurrentRenderingInstance(ctx);
    var res = fn.apply(void 0, arguments);
    setCurrentRenderingInstance(prevInstance);

    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }

    if (true) {
      devtoolsComponentUpdated(ctx);
    }

    return res;
  }; // mark normalized to avoid duplicated wrapping


  renderFnWithContext._n = true; // mark this as compiled by default
  // this is used in vnode.ts -> normalizeChildren() to set the slot
  // rendering flag.

  renderFnWithContext._c = true; // disable block tracking by default

  renderFnWithContext._d = true;
  return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */


var accessedAttrs = false;

function markAttrsAccessed() {
  accessedAttrs = true;
}

function renderComponentRoot(instance) {
  var Component = instance.type,
      vnode = instance.vnode,
      proxy = instance.proxy,
      withProxy = instance.withProxy,
      props = instance.props,
      _instance$propsOption2 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption2[0],
      slots = instance.slots,
      attrs = instance.attrs,
      emit = instance.emit,
      render = instance.render,
      renderCache = instance.renderCache,
      data = instance.data,
      setupState = instance.setupState,
      ctx = instance.ctx,
      inheritAttrs = instance.inheritAttrs;

  var result;
  var fallthroughAttrs;
  var prev = setCurrentRenderingInstance(instance);

  if (true) {
    accessedAttrs = false;
  }

  try {
    if (vnode.shapeFlag & 4
    /* STATEFUL_COMPONENT */
    ) {
      // withProxy is a proxy with a different `has` trap only for
      // runtime-compiled render functions using `with` block.
      var proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      // functional
      var _render = Component; // in dev, mark attrs accessed if optional props (attrs === props)

      if ( true && attrs === props) {
        markAttrsAccessed();
      }

      result = normalizeVNode(_render.length > 1 ? _render(props,  true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },

        slots: slots,
        emit: emit
      } : 0) : _render(props, null
      /* we know it doesn't need it */
      ));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1
    /* RENDER_FUNCTION */
    );
    result = createVNode(Comment);
  } // attr merging
  // in dev mode, comments are preserved, and it's possible for a template
  // to have comments along side the root element which makes it a fragment


  var root = result;
  var setRoot = undefined;

  if ( true && result.patchFlag > 0 && result.patchFlag & 2048
  /* DEV_ROOT_FRAGMENT */
  ) {
    var _getChildRoot = getChildRoot(result);

    var _getChildRoot2 = _slicedToArray(_getChildRoot, 2);

    root = _getChildRoot2[0];
    setRoot = _getChildRoot2[1];
  }

  if (fallthroughAttrs && inheritAttrs !== false) {
    var keys = Object.keys(fallthroughAttrs);
    var _root = root,
        shapeFlag = _root.shapeFlag;

    if (keys.length) {
      if (shapeFlag & (1
      /* ELEMENT */
      | 6
      /* COMPONENT */
      )) {
        if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)) {
          // If a v-model listener (onUpdate:xxx) has a corresponding declared
          // prop, it indicates this component expects to handle v-model and
          // it should not fallthrough.
          // related: #1543, #1643, #1989
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }

        root = cloneVNode(root, fallthroughAttrs);
      } else if ( true && !accessedAttrs && root.type !== Comment) {
        var allAttrs = Object.keys(attrs);
        var eventAttrs = [];
        var extraAttrs = [];

        for (var i = 0, l = allAttrs.length; i < l; i++) {
          var key = allAttrs[i];

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
            // ignore v-model handlers when they fail to fallthrough
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
              // remove `on`, lowercase first letter to reflect event casing
              // accurately
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }

        if (extraAttrs.length) {
          warn("Extraneous non-props attributes (" + "".concat(extraAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes.");
        }

        if (eventAttrs.length) {
          warn("Extraneous non-emits event listeners (" + "".concat(eventAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes. " + "If the listener is intended to be a component custom event listener only, " + "declare it using the \"emits\" option.");
        }
      }
    }
  } // inherit directives


  if (vnode.dirs) {
    if ( true && !isElementRoot(root)) {
      warn("Runtime directive used on component with non-element root node. " + "The directives will not function as intended.");
    }

    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  } // inherit transition data


  if (vnode.transition) {
    if ( true && !isElementRoot(root)) {
      warn("Component inside <Transition> renders non-element root node " + "that cannot be animated.");
    }

    root.transition = vnode.transition;
  }

  if ( true && setRoot) {
    setRoot(root);
  } else {
    result = root;
  }

  setCurrentRenderingInstance(prev);
  return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */


var getChildRoot = function getChildRoot(vnode) {
  var rawChildren = vnode.children;
  var dynamicChildren = vnode.dynamicChildren;
  var childRoot = filterSingleRoot(rawChildren);

  if (!childRoot) {
    return [vnode, undefined];
  }

  var index = rawChildren.indexOf(childRoot);
  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;

  var setRoot = function setRoot(updatedRoot) {
    rawChildren[index] = updatedRoot;

    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [].concat(_toConsumableArray(dynamicChildren), [updatedRoot]);
      }
    }
  };

  return [normalizeVNode(childRoot), setRoot];
};

function filterSingleRoot(children) {
  var singleRoot;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (isVNode(child)) {
      // ignore user comment
      if (child.type !== Comment || child.children === 'v-if') {
        if (singleRoot) {
          // has more than 1 non-comment child, return now
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }

  return singleRoot;
}

var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
  var res;

  for (var key in attrs) {
    if (key === 'class' || key === 'style' || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }

  return res;
};

var filterModelListeners = function filterModelListeners(attrs, props) {
  var res = {};

  for (var key in attrs) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }

  return res;
};

var isElementRoot = function isElementRoot(vnode) {
  return vnode.shapeFlag & (6
  /* COMPONENT */
  | 1
  /* ELEMENT */
  ) || vnode.type === Comment // potential v-if branch switch
  ;
};

function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  var prevProps = prevVNode.props,
      prevChildren = prevVNode.children,
      component = prevVNode.component;
  var nextProps = nextVNode.props,
      nextChildren = nextVNode.children,
      patchFlag = nextVNode.patchFlag;
  var emits = component.emitsOptions; // Parent component's render function was hot-updated. Since this may have
  // caused the child component's slots content to have changed, we need to
  // force the child to update as well.

  if ( true && (prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  } // force child update for runtime directive or transition on component vnode.


  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }

  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024
    /* DYNAMIC_SLOTS */
    ) {
      // slot content that references values that might have changed,
      // e.g. in a v-for
      return true;
    }

    if (patchFlag & 16
    /* FULL_PROPS */
    ) {
      if (!prevProps) {
        return !!nextProps;
      } // presence of this flag indicates props are always non-null


      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8
    /* PROPS */
    ) {
      var dynamicProps = nextVNode.dynamicProps;

      for (var i = 0; i < dynamicProps.length; i++) {
        var key = dynamicProps[i];

        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    // this path is only taken by manually written render functions
    // so presence of any children leads to a forced update
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }

    if (prevProps === nextProps) {
      return false;
    }

    if (!prevProps) {
      return !!nextProps;
    }

    if (!nextProps) {
      return true;
    }

    return hasPropsChanged(prevProps, nextProps, emits);
  }

  return false;
}

function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  var nextKeys = Object.keys(nextProps);

  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }

  for (var i = 0; i < nextKeys.length; i++) {
    var key = nextKeys[i];

    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }

  return false;
}

function updateHOCHostEl(_ref5, el // HostNode
) {
  var vnode = _ref5.vnode,
      parent = _ref5.parent;

  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}

var isSuspense = function isSuspense(type) {
  return type.__isSuspense;
}; // Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.


var SuspenseImpl = {
  name: 'Suspense',
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process: function process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
  rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
    } else {
      patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary,
  normalize: normalizeSuspenseChildren
}; // Force-casted public typing for h and TSX props inference

var Suspense = SuspenseImpl;

function triggerEvent(vnode, name) {
  var eventListener = vnode.props && vnode.props[name];

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(eventListener)) {
    eventListener();
  }
}

function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
  var patch = rendererInternals.p,
      createElement = rendererInternals.o.createElement;
  var hiddenContainer = createElement('div');
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals); // start mounting the content subtree in an off-dom container

  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds); // now check if we have encountered any async deps

  if (suspense.deps > 0) {
    // has async
    // invoke @fallback event
    triggerEvent(vnode, 'onPending');
    triggerEvent(vnode, 'onFallback'); // mount the fallback tree

    patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
    isSVG, slotScopeIds);
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    // Suspense has no async deps. Just resolve.
    suspense.resolve();
  }
}

function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, _ref6) {
  var patch = _ref6.p,
      unmount = _ref6.um,
      createElement = _ref6.o.createElement;
  var suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  var newBranch = n2.ssContent;
  var newFallback = n2.ssFallback;
  var activeBranch = suspense.activeBranch,
      pendingBranch = suspense.pendingBranch,
      isInFallback = suspense.isInFallback,
      isHydrating = suspense.isHydrating;

  if (pendingBranch) {
    suspense.pendingBranch = newBranch;

    if (isSameVNodeType(newBranch, pendingBranch)) {
      // same root type but content may have changed.
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newFallback);
      }
    } else {
      // toggled before pending tree is resolved
      suspense.pendingId++;

      if (isHydrating) {
        // if toggled before hydration is finished, the current DOM tree is
        // no longer valid. set it as the active branch so it will be unmounted
        // when resolved
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      } // increment pending ID. this is used to invalidate async callbacks
      // reset suspense state


      suspense.deps = 0; // discard effects from pending branch

      suspense.effects.length = 0; // discard previous container

      suspense.hiddenContainer = createElement('div');

      if (isInFallback) {
        // already in fallback state
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
          isSVG, slotScopeIds, optimized);
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // toggled "back" to current active branch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized); // force resolve

        suspense.resolve(true);
      } else {
        // switched to a 3rd branch
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      // root did not change, just normal patch
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
      setActiveBranch(suspense, newBranch);
    } else {
      // root node toggled
      // invoke @pending event
      triggerEvent(n2, 'onPending'); // mount pending branch in off-dom container

      suspense.pendingBranch = newBranch;
      suspense.pendingId++;
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        // incoming branch has no async deps, resolve now.
        suspense.resolve();
      } else {
        var timeout = suspense.timeout,
            pendingId = suspense.pendingId;

        if (timeout > 0) {
          setTimeout(function () {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}

var hasWarned = false;

function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals) {
  var isHydrating = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;

  /* istanbul ignore if */
  if ( true && !hasWarned) {
    hasWarned = true; // @ts-ignore `console.info` cannot be null error

    console[console.info ? 'info' : 'log']("<Suspense> is an experimental feature and its API will likely change.");
  }

  var patch = rendererInternals.p,
      _move = rendererInternals.m,
      _unmount2 = rendererInternals.um,
      _next = rendererInternals.n,
      _rendererInternals$o = rendererInternals.o,
      parentNode = _rendererInternals$o.parentNode,
      remove = _rendererInternals$o.remove;
  var timeout = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(vnode.props && vnode.props.timeout);
  var suspense = {
    vnode: vnode,
    parent: parent,
    parentComponent: parentComponent,
    isSVG: isSVG,
    container: container,
    hiddenContainer: hiddenContainer,
    anchor: anchor,
    deps: 0,
    pendingId: 0,
    timeout: typeof timeout === 'number' ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating: isHydrating,
    isUnmounted: false,
    effects: [],
    resolve: function resolve() {
      var resume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (true) {
        if (!resume && !suspense.pendingBranch) {
          throw new Error("suspense.resolve() is called without a pending branch.");
        }

        if (suspense.isUnmounted) {
          throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.");
        }
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          pendingBranch = suspense.pendingBranch,
          pendingId = suspense.pendingId,
          effects = suspense.effects,
          parentComponent = suspense.parentComponent,
          container = suspense.container;

      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        var delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';

        if (delayEnter) {
          activeBranch.transition.afterLeave = function () {
            if (pendingId === suspense.pendingId) {
              _move(pendingBranch, container, _anchor, 0
              /* ENTER */
              );
            }
          };
        } // this is initial anchor on mount


        var _anchor = suspense.anchor; // unmount current active tree

        if (activeBranch) {
          // if the fallback tree was mounted, it may have been moved
          // as part of a parent suspense. get the latest anchor for insertion
          _anchor = _next(activeBranch);

          _unmount2(activeBranch, parentComponent, suspense, true);
        }

        if (!delayEnter) {
          // move content from off-dom container to actual container
          _move(pendingBranch, container, _anchor, 0
          /* ENTER */
          );
        }
      }

      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false; // flush buffered effects
      // check if there is a pending parent suspense

      var parent = suspense.parent;
      var hasUnresolvedAncestor = false;

      while (parent) {
        if (parent.pendingBranch) {
          var _parent$effects;

          // found a pending parent suspense, merge buffered post jobs
          // into that parent
          (_parent$effects = parent.effects).push.apply(_parent$effects, _toConsumableArray(effects));

          hasUnresolvedAncestor = true;
          break;
        }

        parent = parent.parent;
      } // no pending parent suspense, flush all jobs


      if (!hasUnresolvedAncestor) {
        queuePostFlushCb(effects);
      }

      suspense.effects = []; // invoke @resolve event

      triggerEvent(vnode, 'onResolve');
    },
    fallback: function fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          parentComponent = suspense.parentComponent,
          container = suspense.container,
          isSVG = suspense.isSVG; // invoke @fallback event

      triggerEvent(vnode, 'onFallback');

      var anchor = _next(activeBranch);

      var mountFallback = function mountFallback() {
        if (!suspense.isInFallback) {
          return;
        } // mount the fallback tree


        patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, fallbackVNode);
      };

      var delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';

      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }

      suspense.isInFallback = true; // unmount current active branch

      _unmount2(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
      true // shouldRemove
      );

      if (!delayEnter) {
        mountFallback();
      }
    },
    move: function move(container, anchor, type) {
      suspense.activeBranch && _move(suspense.activeBranch, container, anchor, type);
      suspense.container = container;
    },
    next: function next() {
      return suspense.activeBranch && _next(suspense.activeBranch);
    },
    registerDep: function registerDep(instance, setupRenderEffect) {
      var isInPendingSuspense = !!suspense.pendingBranch;

      if (isInPendingSuspense) {
        suspense.deps++;
      }

      var hydratedEl = instance.vnode.el;
      instance.asyncDep["catch"](function (err) {
        handleError(err, instance, 0
        /* SETUP_FUNCTION */
        );
      }).then(function (asyncSetupResult) {
        // retry when the setup() promise resolves.
        // component may have been unmounted before resolve.
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        } // retry from this component


        instance.asyncResolved = true;
        var vnode = instance.vnode;

        if (true) {
          pushWarningContext(vnode);
        }

        handleSetupResult(instance, asyncSetupResult, false);

        if (hydratedEl) {
          // vnode may have been replaced if an update happened before the
          // async dep is resolved.
          vnode.el = hydratedEl;
        }

        var placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(instance, vnode, // component may have been moved before resolve.
        // if this is not a hydration, instance.subTree will be the comment
        // placeholder.
        parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
        // consider the comment placeholder case.
        hydratedEl ? null : _next(instance.subTree), suspense, isSVG, optimized);

        if (placeholder) {
          remove(placeholder);
        }

        updateHOCHostEl(instance, vnode.el);

        if (true) {
          popWarningContext();
        } // only decrease deps count if suspense is not already resolved


        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount: function unmount(parentSuspense, doRemove) {
      suspense.isUnmounted = true;

      if (suspense.activeBranch) {
        _unmount2(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
      }

      if (suspense.pendingBranch) {
        _unmount2(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
      }
    }
  };
  return suspense;
}

function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  /* eslint-disable no-restricted-globals */
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true
  /* hydrating */
  ); // there are two possible scenarios for server-rendered suspense:
  // - success: ssr content should be fully resolved
  // - failure: ssr content should be the fallback branch.
  // however, on the client we don't really know if it has failed or not
  // attempt to hydrate the DOM assuming it has succeeded, but we still
  // need to construct a suspense boundary first

  var result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);

  if (suspense.deps === 0) {
    suspense.resolve();
  }

  return result;
  /* eslint-enable no-restricted-globals */
}

function normalizeSuspenseChildren(vnode) {
  var shapeFlag = vnode.shapeFlag,
      children = vnode.children;
  var isSlotChildren = shapeFlag & 32
  /* SLOTS_CHILDREN */
  ;
  vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children["default"] : children);
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}

function normalizeSuspenseSlot(s) {
  var block;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
    var trackBlock = isBlockTreeEnabled && s._c;

    if (trackBlock) {
      // disableTracking: false
      // allow block tracking for compiled slots
      // (see ./componentRenderContext.ts)
      s._d = false;
      openBlock();
    }

    s = s();

    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(s)) {
    var singleChild = filterSingleRoot(s);

    if ( true && !singleChild) {
      warn("<Suspense> slots expect a single root node.");
    }

    s = singleChild;
  }

  s = normalizeVNode(s);

  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter(function (c) {
      return c !== s;
    });
  }

  return s;
}

function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
      var _suspense$effects;

      (_suspense$effects = suspense.effects).push.apply(_suspense$effects, _toConsumableArray(fn));
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  var vnode = suspense.vnode,
      parentComponent = suspense.parentComponent;
  var el = vnode.el = branch.el; // in case suspense is the root node of a component,
  // recursively update the HOC el

  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}

function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn("provide() can only be used inside setup().");
    }
  } else {
    var provides = currentInstance.provides; // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.

    var parentProvides = currentInstance.parent && currentInstance.parent.provides;

    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    } // TS doesn't allow symbol as index type


    provides[key] = value;
  }
}

function inject(key, defaultValue) {
  var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // fallback to `currentRenderingInstance` so that this can be called in
  // a functional component
  var instance = currentInstance || currentRenderingInstance;

  if (instance) {
    // #2400
    // to support `app.use` plugins,
    // fallback to appContext's `provides` if the instance is at root
    var provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;

    if (provides && key in provides) {
      // TS doesn't allow symbol as index type
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else if (true) {
      warn("injection \"".concat(String(key), "\" not found."));
    }
  } else if (true) {
    warn("inject() can only be used inside setup() or functional components.");
  }
} // Simple effect.


function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}

function watchPostEffect(effect, options) {
  return doWatch(effect, null,  true ? Object.assign(options || {}, {
    flush: 'post'
  }) : 0);
}

function watchSyncEffect(effect, options) {
  return doWatch(effect, null,  true ? Object.assign(options || {}, {
    flush: 'sync'
  }) : 0);
} // initial value for watchers to trigger on undefined initial values


var INITIAL_WATCHER_VALUE = {}; // implementation

function watch(source, cb, options) {
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(cb)) {
    warn("`watch(fn, options?)` signature has been moved to a separate API. " + "Use `watchEffect(fn, options?)` instead. `watch` now only " + "supports `watch(source, cb, options?) signature.");
  }

  return doWatch(source, cb, options);
}

function doWatch(source, cb) {
  var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
      immediate = _ref7.immediate,
      deep = _ref7.deep,
      flush = _ref7.flush,
      onTrack = _ref7.onTrack,
      onTrigger = _ref7.onTrigger;

  if ( true && !cb) {
    if (immediate !== undefined) {
      warn("watch() \"immediate\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }

    if (deep !== undefined) {
      warn("watch() \"deep\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }
  }

  var warnInvalidSource = function warnInvalidSource(s) {
    warn("Invalid watch source: ", s, "A watch source can only be a getter/effect function, a ref, " + "a reactive object, or an array of these types.");
  };

  var instance = currentInstance;
  var getter;
  var forceTrigger = false;
  var isMultiSource = false;

  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(source)) {
    getter = function getter() {
      return source.value;
    };

    forceTrigger = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(source);
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(source)) {
    getter = function getter() {
      return source;
    };

    deep = true;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source)) {
    isMultiSource = true;
    forceTrigger = source.some(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive);

    getter = function getter() {
      return source.map(function (s) {
        if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(s)) {
          return s.value;
        } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s)) {
          return traverse(s);
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
          return callWithErrorHandling(s, instance, 2
          /* WATCH_GETTER */
          );
        } else {
           true && warnInvalidSource(s);
        }
      });
    };
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    if (cb) {
      // getter with cb
      getter = function getter() {
        return callWithErrorHandling(source, instance, 2
        /* WATCH_GETTER */
        );
      };
    } else {
      // no cb -> simple effect
      getter = function getter() {
        if (instance && instance.isUnmounted) {
          return;
        }

        if (cleanup) {
          cleanup();
        }

        return callWithAsyncErrorHandling(source, instance, 3
        /* WATCH_CALLBACK */
        , [onCleanup]);
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
     true && warnInvalidSource(source);
  }

  if (cb && deep) {
    var baseGetter = getter;

    getter = function getter() {
      return traverse(baseGetter());
    };
  }

  var cleanup;

  var onCleanup = function onCleanup(fn) {
    cleanup = effect.onStop = function () {
      callWithErrorHandling(fn, instance, 4
      /* WATCH_CLEANUP */
      );
    };
  }; // in SSR there is no need to setup an actual effect, and it should be noop
  // unless it's eager


  if (isInSSRComponentSetup) {
    // we will also not call the invalidate callback (+ runner is not set up)
    onCleanup = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;

    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3
      /* WATCH_CALLBACK */
      , [getter(), isMultiSource ? [] : undefined, onCleanup]);
    }

    return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
  }

  var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;

  var job = function job() {
    if (!effect.active) {
      return;
    }

    if (cb) {
      // watch(source, cb)
      var newValue = effect.run();

      if (deep || forceTrigger || (isMultiSource ? newValue.some(function (v, i) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(v, oldValue[i]);
      }) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(newValue, oldValue)) || false) {
        // cleanup before running cb again
        if (cleanup) {
          cleanup();
        }

        callWithAsyncErrorHandling(cb, instance, 3
        /* WATCH_CALLBACK */
        , [newValue, // pass undefined as the old value when it's changed for the first time
        oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue, onCleanup]);
        oldValue = newValue;
      }
    } else {
      // watchEffect
      effect.run();
    }
  }; // important: mark the job as a watcher callback so that scheduler knows
  // it is allowed to self-trigger (#1727)


  job.allowRecurse = !!cb;
  var scheduler;

  if (flush === 'sync') {
    scheduler = job; // the scheduler function gets called directly
  } else if (flush === 'post') {
    scheduler = function scheduler() {
      return queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else {
    // default: 'pre'
    scheduler = function scheduler() {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        // with 'pre' option, the first call must happen before
        // the component is mounted so it is called synchronously.
        job();
      }
    };
  }

  var effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect(getter, scheduler);

  if (true) {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  } // initial run


  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }

  return function () {
    effect.stop();

    if (instance && instance.scope) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(instance.scope.effects, effect);
    }
  };
} // this.$watch


function instanceWatch(source, value, options) {
  var publicThis = this.proxy;
  var getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source) ? source.includes('.') ? createPathGetter(publicThis, source) : function () {
    return publicThis[source];
  } : source.bind(publicThis, publicThis);
  var cb;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }

  var cur = currentInstance;
  setCurrentInstance(this);
  var res = doWatch(getter, cb.bind(publicThis), options);

  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }

  return res;
}

function createPathGetter(ctx, path) {
  var segments = path.split('.');
  return function () {
    var cur = ctx;

    for (var i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }

    return cur;
  };
}

function traverse(value, seen) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value) || value["__v_skip"
  /* SKIP */
  ]) {
    return value;
  }

  seen = seen || new Set();

  if (seen.has(value)) {
    return value;
  }

  seen.add(value);

  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    traverse(value.value, seen);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isMap)(value)) {
    value.forEach(function (v) {
      traverse(v, seen);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(value)) {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }

  return value;
}

function useTransitionState() {
  var state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(function () {
    state.isMounted = true;
  });
  onBeforeUnmount(function () {
    state.isUnmounting = true;
  });
  return state;
}

var TransitionHookValidator = [Function, Array];
var BaseTransitionImpl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup: function setup(props, _ref8) {
    var slots = _ref8.slots;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    var prevTransitionKey;
    return function () {
      var children = slots["default"] && getTransitionRawChildren(slots["default"](), true);

      if (!children || !children.length) {
        return;
      } // warn multiple elements


      if ( true && children.length > 1) {
        warn('<transition> can only be used on a single element or component. Use ' + '<transition-group> for lists.');
      } // there's no need to track reactivity for these props so use the raw
      // props for a bit better perf


      var rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
      var mode = rawProps.mode; // check mode

      if ( true && mode && mode !== 'in-out' && mode !== 'out-in' && mode !== 'default') {
        warn("invalid <transition> mode: ".concat(mode));
      } // at this point children has a guaranteed length of 1.


      var child = children[0];

      if (state.isLeaving) {
        return emptyPlaceholder(child);
      } // in the case of <transition><keep-alive/></transition>, we need to
      // compare the type of the kept-alive children.


      var innerChild = getKeepAliveChild(child);

      if (!innerChild) {
        return emptyPlaceholder(child);
      }

      var enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      var oldChild = instance.subTree;
      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      var transitionKeyChanged = false;
      var getTransitionKey = innerChild.type.getTransitionKey;

      if (getTransitionKey) {
        var key = getTransitionKey();

        if (prevTransitionKey === undefined) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      } // handle mode


      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        var leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance); // update old tree's hooks in case of dynamic transition

        setTransitionHooks(oldInnerChild, leavingHooks); // switching between different views

        if (mode === 'out-in') {
          state.isLeaving = true; // return placeholder node and queue update when leave finishes

          leavingHooks.afterLeave = function () {
            state.isLeaving = false;
            instance.update();
          };

          return emptyPlaceholder(child);
        } else if (mode === 'in-out' && innerChild.type !== Comment) {
          leavingHooks.delayLeave = function (el, earlyRemove, delayedLeave) {
            var leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild; // early removal callback

            el._leaveCb = function () {
              earlyRemove();
              el._leaveCb = undefined;
              delete enterHooks.delayedLeave;
            };

            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }

      return child;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var BaseTransition = BaseTransitionImpl;

function getLeavingNodesForType(state, vnode) {
  var leavingVNodes = state.leavingVNodes;
  var leavingVNodesCache = leavingVNodes.get(vnode.type);

  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }

  return leavingVNodesCache;
} // The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.


function resolveTransitionHooks(vnode, props, state, instance) {
  var appear = props.appear,
      mode = props.mode,
      _props$persisted = props.persisted,
      persisted = _props$persisted === void 0 ? false : _props$persisted,
      onBeforeEnter = props.onBeforeEnter,
      onEnter = props.onEnter,
      onAfterEnter = props.onAfterEnter,
      onEnterCancelled = props.onEnterCancelled,
      onBeforeLeave = props.onBeforeLeave,
      onLeave = props.onLeave,
      onAfterLeave = props.onAfterLeave,
      onLeaveCancelled = props.onLeaveCancelled,
      onBeforeAppear = props.onBeforeAppear,
      onAppear = props.onAppear,
      onAfterAppear = props.onAfterAppear,
      onAppearCancelled = props.onAppearCancelled;
  var key = String(vnode.key);
  var leavingVNodesCache = getLeavingNodesForType(state, vnode);

  var callHook = function callHook(hook, args) {
    hook && callWithAsyncErrorHandling(hook, instance, 9
    /* TRANSITION_HOOK */
    , args);
  };

  var hooks = {
    mode: mode,
    persisted: persisted,
    beforeEnter: function beforeEnter(el) {
      var hook = onBeforeEnter;

      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      } // for same element (v-show)


      if (el._leaveCb) {
        el._leaveCb(true
        /* cancelled */
        );
      } // for toggled element with same key (v-if)


      var leavingVNode = leavingVNodesCache[key];

      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        // force early removal (not cancelled)
        leavingVNode.el._leaveCb();
      }

      callHook(hook, [el]);
    },
    enter: function enter(el) {
      var hook = onEnter;
      var afterHook = onAfterEnter;
      var cancelHook = onEnterCancelled;

      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }

      var called = false;

      var done = el._enterCb = function (cancelled) {
        if (called) return;
        called = true;

        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }

        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }

        el._enterCb = undefined;
      };

      if (hook) {
        hook(el, done);

        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave: function leave(el, remove) {
      var key = String(vnode.key);

      if (el._enterCb) {
        el._enterCb(true
        /* cancelled */
        );
      }

      if (state.isUnmounting) {
        return remove();
      }

      callHook(onBeforeLeave, [el]);
      var called = false;

      var done = el._leaveCb = function (cancelled) {
        if (called) return;
        called = true;
        remove();

        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }

        el._leaveCb = undefined;

        if (leavingVNodesCache[key] === vnode) {
          delete leavingVNodesCache[key];
        }
      };

      leavingVNodesCache[key] = vnode;

      if (onLeave) {
        onLeave(el, done);

        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone: function clone(vnode) {
      return resolveTransitionHooks(vnode, props, state, instance);
    }
  };
  return hooks;
} // the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.


function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}

function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}

function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6
  /* COMPONENT */
  && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}

function getTransitionRawChildren(children) {
  var keepComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var ret = [];
  var keyedFragmentCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // handle fragment children case, e.g. v-for

    if (child.type === Fragment) {
      if (child.patchFlag & 128
      /* KEYED_FRAGMENT */
      ) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } // comment placeholders should be skipped, e.g. v-if
    else if (keepComment || child.type !== Comment) {
      ret.push(child);
    }
  } // #1126 if a transition children list contains multiple sub fragments, these
  // fragments will be merged into a flat children array. Since each v-for
  // fragment may contain different static bindings inside, we need to de-op
  // these children to force full diffs to ensure correct behavior.


  if (keyedFragmentCount > 1) {
    for (var _i2 = 0; _i2 < ret.length; _i2++) {
      ret[_i2].patchFlag = -2
      /* BAIL */
      ;
    }
  }

  return ret;
} // implementation, close to no-op


function defineComponent(options) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options) ? {
    setup: options,
    name: options.name
  } : options;
}

var isAsyncWrapper = function isAsyncWrapper(i) {
  return !!i.type.__asyncLoader;
};

function defineAsyncComponent(source) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    source = {
      loader: source
    };
  }

  var _source = source,
      loader = _source.loader,
      loadingComponent = _source.loadingComponent,
      errorComponent = _source.errorComponent,
      _source$delay = _source.delay,
      delay = _source$delay === void 0 ? 200 : _source$delay,
      timeout = _source.timeout,
      _source$suspensible = _source.suspensible,
      suspensible = _source$suspensible === void 0 ? true : _source$suspensible,
      userOnError = _source.onError;
  var pendingRequest = null;
  var resolvedComp;
  var retries = 0;

  var retry = function retry() {
    retries++;
    pendingRequest = null;
    return load();
  };

  var load = function load() {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader()["catch"](function (err) {
      err = err instanceof Error ? err : new Error(String(err));

      if (userOnError) {
        return new Promise(function (resolve, reject) {
          var userRetry = function userRetry() {
            return resolve(retry());
          };

          var userFail = function userFail() {
            return reject(err);
          };

          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(function (comp) {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }

      if ( true && !comp) {
        warn("Async component loader resolved to undefined. " + "If you are using retry(), make sure to return its return value.");
      } // interop module default


      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
        comp = comp["default"];
      }

      if ( true && comp && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        throw new Error("Invalid async component load result: ".concat(comp));
      }

      resolvedComp = comp;
      return comp;
    }));
  };

  return defineComponent({
    name: 'AsyncComponentWrapper',
    __asyncLoader: load,

    get __asyncResolved() {
      return resolvedComp;
    },

    setup: function setup() {
      var instance = currentInstance; // already resolved

      if (resolvedComp) {
        return function () {
          return createInnerComp(resolvedComp, instance);
        };
      }

      var onError = function onError(err) {
        pendingRequest = null;
        handleError(err, instance, 13
        /* ASYNC_COMPONENT_LOADER */
        , !errorComponent
        /* do not throw in dev if user provided error component */
        );
      }; // suspense-controlled or SSR.


      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then(function (comp) {
          return function () {
            return createInnerComp(comp, instance);
          };
        })["catch"](function (err) {
          onError(err);
          return function () {
            return errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          };
        });
      }

      var loaded = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
      var error = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
      var delayed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(!!delay);

      if (delay) {
        setTimeout(function () {
          delayed.value = false;
        }, delay);
      }

      if (timeout != null) {
        setTimeout(function () {
          if (!loaded.value && !error.value) {
            var err = new Error("Async component timed out after ".concat(timeout, "ms."));
            onError(err);
            error.value = err;
          }
        }, timeout);
      }

      load().then(function () {
        loaded.value = true;

        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          // parent is keep-alive, force update so the loaded component's
          // name is taken into account
          queueJob(instance.parent.update);
        }
      })["catch"](function (err) {
        onError(err);
        error.value = err;
      });
      return function () {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}

function createInnerComp(comp, _ref9) {
  var _ref9$vnode = _ref9.vnode,
      ref = _ref9$vnode.ref,
      props = _ref9$vnode.props,
      children = _ref9$vnode.children;
  var vnode = createVNode(comp, props, children); // ensure inner component inherits the async wrapper's ref owner

  vnode.ref = ref;
  return vnode;
}

var isKeepAlive = function isKeepAlive(vnode) {
  return vnode.type.__isKeepAlive;
};

var KeepAliveImpl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup: function setup(props, _ref10) {
    var slots = _ref10.slots;
    var instance = getCurrentInstance(); // KeepAlive communicates with the instantiated renderer via the
    // ctx where the renderer passes in its internals,
    // and the KeepAlive instance exposes activate/deactivate implementations.
    // The whole point of this is to avoid importing KeepAlive directly in the
    // renderer to facilitate tree-shaking.

    var sharedContext = instance.ctx; // if the internal renderer is not registered, it indicates that this is server-side rendering,
    // for KeepAlive, we just need to render its children

    if (!sharedContext.renderer) {
      return slots["default"];
    }

    var cache = new Map();
    var keys = new Set();
    var current = null;

    if (true) {
      instance.__v_cache = cache;
    }

    var parentSuspense = instance.suspense;
    var _sharedContext$render = sharedContext.renderer,
        patch = _sharedContext$render.p,
        move = _sharedContext$render.m,
        _unmount = _sharedContext$render.um,
        createElement = _sharedContext$render.o.createElement;
    var storageContainer = createElement('div');

    sharedContext.activate = function (vnode, container, anchor, isSVG, optimized) {
      var instance = vnode.component;
      move(vnode, container, anchor, 0
      /* ENTER */
      , parentSuspense); // in case props have changed

      patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
      queuePostRenderEffect(function () {
        instance.isDeactivated = false;

        if (instance.a) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.a);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeMounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    sharedContext.deactivate = function (vnode) {
      var instance = vnode.component;
      move(vnode, storageContainer, null, 1
      /* LEAVE */
      , parentSuspense);
      queuePostRenderEffect(function () {
        if (instance.da) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.da);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }

        instance.isDeactivated = true;
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    function unmount(vnode) {
      // reset the shapeFlag so it can be properly unmounted
      resetShapeFlag(vnode);

      _unmount(vnode, instance, parentSuspense, true);
    }

    function pruneCache(filter) {
      cache.forEach(function (vnode, key) {
        var name = getComponentName(vnode.type);

        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }

    function pruneCacheEntry(key) {
      var cached = cache.get(key);

      if (!current || cached.type !== current.type) {
        unmount(cached);
      } else if (current) {
        // current active instance should no longer be kept-alive.
        // we can't unmount it now but it might be later, so reset its flag now.
        resetShapeFlag(current);
      }

      cache["delete"](key);
      keys["delete"](key);
    } // prune cache on include/exclude prop change


    watch(function () {
      return [props.include, props.exclude];
    }, function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 2),
          include = _ref12[0],
          exclude = _ref12[1];

      include && pruneCache(function (name) {
        return matches(include, name);
      });
      exclude && pruneCache(function (name) {
        return !matches(exclude, name);
      });
    }, // prune post-render after `current` has been updated
    {
      flush: 'post',
      deep: true
    }); // cache sub tree after render

    var pendingCacheKey = null;

    var cacheSubtree = function cacheSubtree() {
      // fix #1621, the pendingCacheKey could be 0
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };

    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(function () {
      cache.forEach(function (cached) {
        var subTree = instance.subTree,
            suspense = instance.suspense;
        var vnode = getInnerChild(subTree);

        if (cached.type === vnode.type) {
          // current instance will be unmounted as part of keep-alive's unmount
          resetShapeFlag(vnode); // but invoke its deactivated hook here

          var da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }

        unmount(cached);
      });
    });
    return function () {
      pendingCacheKey = null;

      if (!slots["default"]) {
        return null;
      }

      var children = slots["default"]();
      var rawVNode = children[0];

      if (children.length > 1) {
        if (true) {
          warn("KeepAlive should contain exactly one component child.");
        }

        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4
      /* STATEFUL_COMPONENT */
      ) && !(rawVNode.shapeFlag & 128
      /* SUSPENSE */
      )) {
        current = null;
        return rawVNode;
      }

      var vnode = getInnerChild(rawVNode);
      var comp = vnode.type; // for async components, name check should be based in its loaded
      // inner component if available

      var name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
      var include = props.include,
          exclude = props.exclude,
          max = props.max;

      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }

      var key = vnode.key == null ? comp : vnode.key;
      var cachedVNode = cache.get(key); // clone vnode if it's reused because we are going to mutate it

      if (vnode.el) {
        vnode = cloneVNode(vnode);

        if (rawVNode.shapeFlag & 128
        /* SUSPENSE */
        ) {
          rawVNode.ssContent = vnode;
        }
      } // #1513 it's possible for the returned vnode to be cloned due to attr
      // fallthrough or scopeId, so the vnode here may not be the final vnode
      // that is mounted. Instead of caching it directly, we store the pending
      // key and cache `instance.subTree` (the normalized vnode) in
      // beforeMount/beforeUpdate hooks.


      pendingCacheKey = key;

      if (cachedVNode) {
        // copy over mounted state
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;

        if (vnode.transition) {
          // recursively update transition hooks on subTree
          setTransitionHooks(vnode, vnode.transition);
        } // avoid vnode being mounted as fresh


        vnode.shapeFlag |= 512
        /* COMPONENT_KEPT_ALIVE */
        ; // make this key the freshest

        keys["delete"](key);
        keys.add(key);
      } else {
        keys.add(key); // prune oldest entry

        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      } // avoid vnode being unmounted


      vnode.shapeFlag |= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
      current = vnode;
      return rawVNode;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var KeepAlive = KeepAliveImpl;

function matches(pattern, name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(pattern)) {
    return pattern.some(function (p) {
      return matches(p, name);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(pattern)) {
    return pattern.split(',').includes(name);
  } else if (pattern.test) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a"
  /* ACTIVATED */
  , target);
}

function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da"
  /* DEACTIVATED */
  , target);
}

function registerKeepAliveHook(hook, type) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;

  // cache the deactivate branch check wrapper for injected hooks so the same
  // hook can be properly deduped by the scheduler. "__wdc" stands for "with
  // deactivation check".
  var wrappedHook = hook.__wdc || (hook.__wdc = function () {
    // only fire the hook if the target instance is NOT in a deactivated branch.
    var current = target;

    while (current) {
      if (current.isDeactivated) {
        return;
      }

      current = current.parent;
    }

    return hook();
  });

  injectHook(type, wrappedHook, target); // In addition to registering it on the target instance, we walk up the parent
  // chain and register it on all ancestor instances that are keep-alive roots.
  // This avoids the need to walk the entire component tree when invoking these
  // hooks, and more importantly, avoids the need to track child components in
  // arrays.

  if (target) {
    var current = target.parent;

    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }

      current = current.parent;
    }
  }
}

function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  // injectHook wraps the original for error handling, so make sure to remove
  // the wrapped version.
  var injected = injectHook(type, hook, keepAliveRoot, true
  /* prepend */
  );
  onUnmounted(function () {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(keepAliveRoot[type], injected);
  }, target);
}

function resetShapeFlag(vnode) {
  var shapeFlag = vnode.shapeFlag;

  if (shapeFlag & 256
  /* COMPONENT_SHOULD_KEEP_ALIVE */
  ) {
    shapeFlag -= 256
    /* COMPONENT_SHOULD_KEEP_ALIVE */
    ;
  }

  if (shapeFlag & 512
  /* COMPONENT_KEPT_ALIVE */
  ) {
    shapeFlag -= 512
    /* COMPONENT_KEPT_ALIVE */
    ;
  }

  vnode.shapeFlag = shapeFlag;
}

function getInnerChild(vnode) {
  return vnode.shapeFlag & 128
  /* SUSPENSE */
  ? vnode.ssContent : vnode;
}

function injectHook(type, hook) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
  var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target) {
    var hooks = target[type] || (target[type] = []); // cache the error handling wrapper for injected hooks so the same hook
    // can be properly deduped by the scheduler. "__weh" stands for "with error
    // handling".

    var wrappedHook = hook.__weh || (hook.__weh = function () {
      if (target.isUnmounted) {
        return;
      } // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.


      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)(); // Set currentInstance during hook invocation.
      // This assumes the hook does not synchronously trigger other hooks, which
      // can only be false when the user does something really funky.

      setCurrentInstance(target);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      return res;
    });

    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }

    return wrappedHook;
  } else if (true) {
    var apiName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(ErrorTypeStrings[type].replace(/ hook$/, ''));
    warn("".concat(apiName, " is called when there is no active component instance to be ") + "associated with. " + "Lifecycle injection APIs can only be used during execution of setup()." + (" If you are using async setup(), make sure to register lifecycle " + "hooks before the first await statement."));
  }
}

var createHook = function createHook(lifecycle) {
  return function (hook) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
    return (// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
      (!isInSSRComponentSetup || lifecycle === "sp"
      /* SERVER_PREFETCH */
      ) && injectHook(lifecycle, hook, target)
    );
  };
};

var onBeforeMount = createHook("bm"
/* BEFORE_MOUNT */
);
var onMounted = createHook("m"
/* MOUNTED */
);
var onBeforeUpdate = createHook("bu"
/* BEFORE_UPDATE */
);
var onUpdated = createHook("u"
/* UPDATED */
);
var onBeforeUnmount = createHook("bum"
/* BEFORE_UNMOUNT */
);
var onUnmounted = createHook("um"
/* UNMOUNTED */
);
var onServerPrefetch = createHook("sp"
/* SERVER_PREFETCH */
);
var onRenderTriggered = createHook("rtg"
/* RENDER_TRIGGERED */
);
var onRenderTracked = createHook("rtc"
/* RENDER_TRACKED */
);

function onErrorCaptured(hook) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
  injectHook("ec"
  /* ERROR_CAPTURED */
  , hook, target);
}

function createDuplicateChecker() {
  var cache = Object.create(null);
  return function (type, key) {
    if (cache[key]) {
      warn("".concat(type, " property \"").concat(key, "\" is already defined in ").concat(cache[key], "."));
    } else {
      cache[key] = type;
    }
  };
}

var shouldCacheAccess = true;

function applyOptions(instance) {
  var options = resolveMergedOptions(instance);
  var publicThis = instance.proxy;
  var ctx = instance.ctx; // do not cache property access on public proxy during state initialization

  shouldCacheAccess = false; // call beforeCreate first before accessing other options since
  // the hook may mutate resolved options (#2791)

  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc"
    /* BEFORE_CREATE */
    );
  }

  var dataOptions = options.data,
      computedOptions = options.computed,
      methods = options.methods,
      watchOptions = options.watch,
      provideOptions = options.provide,
      injectOptions = options.inject,
      created = options.created,
      beforeMount = options.beforeMount,
      mounted = options.mounted,
      beforeUpdate = options.beforeUpdate,
      updated = options.updated,
      activated = options.activated,
      deactivated = options.deactivated,
      beforeDestroy = options.beforeDestroy,
      beforeUnmount = options.beforeUnmount,
      destroyed = options.destroyed,
      unmounted = options.unmounted,
      render = options.render,
      renderTracked = options.renderTracked,
      renderTriggered = options.renderTriggered,
      errorCaptured = options.errorCaptured,
      serverPrefetch = options.serverPrefetch,
      expose = options.expose,
      inheritAttrs = options.inheritAttrs,
      components = options.components,
      directives = options.directives,
      filters = options.filters;
  var checkDuplicateProperties =  true ? createDuplicateChecker() : 0;

  if (true) {
    var _instance$propsOption3 = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption3[0];

    if (propsOptions) {
      for (var key in propsOptions) {
        checkDuplicateProperties("Props"
        /* PROPS */
        , key);
      }
    }
  } // options initialization order (to be consistent with Vue 2):
  // - props (already done outside of this function)
  // - inject
  // - methods
  // - data (deferred since it relies on `this` access)
  // - computed
  // - watch (deferred since it relies on `this` access)


  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }

  if (methods) {
    for (var _key5 in methods) {
      var methodHandler = methods[_key5];

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(methodHandler)) {
        // In dev mode, we use the `createRenderContext` function to define
        // methods to the proxy target, and those are read-only but
        // reconfigurable, so it needs to be redefined here
        if (true) {
          Object.defineProperty(ctx, _key5, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {}

        if (true) {
          checkDuplicateProperties("Methods"
          /* METHODS */
          , _key5);
        }
      } else if (true) {
        warn("Method \"".concat(_key5, "\" has type \"").concat(_typeof(methodHandler), "\" in the component definition. ") + "Did you reference the function correctly?");
      }
    }
  }

  if (dataOptions) {
    (function () {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dataOptions)) {
        warn("The data option must be a function. " + "Plain object usage is no longer supported.");
      }

      var data = dataOptions.call(publicThis, publicThis);

      if ( true && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(data)) {
        warn("data() returned a Promise - note data() cannot be async; If you " + "intend to perform data fetching before component renders, use " + "async setup() + <Suspense>.");
      }

      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(data)) {
         true && warn("data() should return an object.");
      } else {
        instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);

        if (true) {
          var _loop = function _loop(_key6) {
            checkDuplicateProperties("Data"
            /* DATA */
            , _key6); // expose data on ctx during dev

            if (_key6[0] !== '$' && _key6[0] !== '_') {
              Object.defineProperty(ctx, _key6, {
                configurable: true,
                enumerable: true,
                get: function get() {
                  return data[_key6];
                },
                set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
              });
            }
          };

          for (var _key6 in data) {
            _loop(_key6);
          }
        }
      }
    })();
  } // state initialization complete at this point - start caching access


  shouldCacheAccess = true;

  if (computedOptions) {
    var _loop2 = function _loop2(_key7) {
      var opt = computedOptions[_key7];
      var get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;

      if ( true && get === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        warn("Computed property \"".concat(_key7, "\" has no getter."));
      }

      var set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.set) ? opt.set.bind(publicThis) :  true ? function () {
        warn("Write operation failed: computed property \"".concat(_key7, "\" is readonly."));
      } : 0;
      var c = computed({
        get: get,
        set: set
      });
      Object.defineProperty(ctx, _key7, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return c.value;
        },
        set: function set(v) {
          return c.value = v;
        }
      });

      if (true) {
        checkDuplicateProperties("Computed"
        /* COMPUTED */
        , _key7);
      }
    };

    for (var _key7 in computedOptions) {
      _loop2(_key7);
    }
  }

  if (watchOptions) {
    for (var _key8 in watchOptions) {
      createWatcher(watchOptions[_key8], ctx, publicThis, _key8);
    }
  }

  if (provideOptions) {
    var provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach(function (key) {
      provide(key, provides[key]);
    });
  }

  if (created) {
    callHook(created, instance, "c"
    /* CREATED */
    );
  }

  function registerLifecycleHook(register, hook) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      hook.forEach(function (_hook) {
        return register(_hook.bind(publicThis));
      });
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }

  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expose)) {
    if (expose.length) {
      var exposed = instance.exposed || (instance.exposed = {});
      expose.forEach(function (key) {
        Object.defineProperty(exposed, key, {
          get: function get() {
            return publicThis[key];
          },
          set: function set(val) {
            return publicThis[key] = val;
          }
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  } // options that are handled when creating the instance but also need to be
  // applied from mixins


  if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
    instance.render = render;
  }

  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  } // asset options.


  if (components) instance.components = components;
  if (directives) instance.directives = directives;
}

function resolveInjections(injectOptions, ctx) {
  var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
  var unwrapRef = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }

  var _loop3 = function _loop3(key) {
    var opt = injectOptions[key];
    var injected = void 0;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opt)) {
      if ('default' in opt) {
        injected = inject(opt.from || key, opt["default"], true
        /* treat default function as factory */
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }

    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(injected)) {
      // TODO remove the check in 3.3
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return injected.value;
          },
          set: function set(v) {
            return injected.value = v;
          }
        });
      } else {
        if (true) {
          warn("injected property \"".concat(key, "\" is a ref and will be auto-unwrapped ") + "and no longer needs `.value` in the next minor release. " + "To opt-in to the new behavior now, " + "set `app.config.unwrapInjectedRef = true` (this config is " + "temporary and will not be needed in the future.)");
        }

        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }

    if (true) {
      checkDuplicateProperties("Inject"
      /* INJECT */
      , key);
    }
  };

  for (var key in injectOptions) {
    _loop3(key);
  }
}

function callHook(hook, instance, type) {
  callWithAsyncErrorHandling((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.map(function (h) {
    return h.bind(instance.proxy);
  }) : hook.bind(instance.proxy), instance, type);
}

function createWatcher(raw, ctx, publicThis, key) {
  var getter = key.includes('.') ? createPathGetter(publicThis, key) : function () {
    return publicThis[key];
  };

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw)) {
    var handler = ctx[raw];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
      watch(getter, handler);
    } else if (true) {
      warn("Invalid watch handler specified by key \"".concat(raw, "\""), handler);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
      raw.forEach(function (r) {
        return createWatcher(r, ctx, publicThis, key);
      });
    } else {
      var _handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(_handler)) {
        watch(getter, _handler, raw);
      } else if (true) {
        warn("Invalid watch handler specified by key \"".concat(raw.handler, "\""), _handler);
      }
    }
  } else if (true) {
    warn("Invalid watch option: \"".concat(key, "\""), raw);
  }
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */


function resolveMergedOptions(instance) {
  var base = instance.type;
  var mixins = base.mixins,
      extendsOptions = base["extends"];
  var _instance$appContext = instance.appContext,
      globalMixins = _instance$appContext.mixins,
      cache = _instance$appContext.optionsCache,
      optionMergeStrategies = _instance$appContext.config.optionMergeStrategies;
  var cached = cache.get(base);
  var resolved;

  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};

    if (globalMixins.length) {
      globalMixins.forEach(function (m) {
        return mergeOptions(resolved, m, optionMergeStrategies, true);
      });
    }

    mergeOptions(resolved, base, optionMergeStrategies);
  }

  cache.set(base, resolved);
  return resolved;
}

function mergeOptions(to, from, strats) {
  var asMixin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var mixins = from.mixins,
      extendsOptions = from["extends"];

  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }

  if (mixins) {
    mixins.forEach(function (m) {
      return mergeOptions(to, m, strats, true);
    });
  }

  for (var key in from) {
    if (asMixin && key === 'expose') {
       true && warn("\"expose\" option is ignored when declared in mixins or extends. " + "It should only be declared in the base component itself.");
    } else {
      var strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }

  return to;
}

var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};

function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }

  if (!to) {
    return from;
  }

  return function mergedDataFn() {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(to) ? to.call(this, this) : to, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(from) ? from.call(this, this) : from);
  };
}

function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}

function normalizeInject(raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    var res = {};

    for (var i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }

    return res;
  }

  return raw;
}

function mergeAsArray(to, from) {
  return to ? _toConsumableArray(new Set([].concat(to, from))) : from;
}

function mergeObjectOptions(to, from) {
  return to ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), to), from) : from;
}

function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  var merged = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), to);

  for (var key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }

  return merged;
}

function initProps(instance, rawProps, isStateful) {
  var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var props = {};
  var attrs = {};
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(attrs, InternalObjectKey, 1);
  instance.propsDefaults = Object.create(null);
  setFullProps(instance, rawProps, props, attrs); // ensure all declared prop keys are present

  for (var key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = undefined;
    }
  } // validation


  if (true) {
    validateProps(rawProps || {}, props, instance);
  }

  if (isStateful) {
    // stateful
    instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive)(props);
  } else {
    if (!instance.type.props) {
      // functional w/ optional props, props === attrs
      instance.props = attrs;
    } else {
      // functional w/ declared props
      instance.props = props;
    }
  }

  instance.attrs = attrs;
}

function updateProps(instance, rawProps, rawPrevProps, optimized) {
  var props = instance.props,
      attrs = instance.attrs,
      patchFlag = instance.vnode.patchFlag;
  var rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);

  var _instance$propsOption4 = _slicedToArray(instance.propsOptions, 1),
      options = _instance$propsOption4[0];

  var hasAttrsChanged = false;

  if ( // always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !( true && (instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId)) && (optimized || patchFlag > 0) && !(patchFlag & 16
  /* FULL_PROPS */
  )) {
    if (patchFlag & 8
    /* PROPS */
    ) {
      // Compiler-generated props & no keys change, just set the updated
      // the props.
      var propsToUpdate = instance.vnode.dynamicProps;

      for (var i = 0; i < propsToUpdate.length; i++) {
        var key = propsToUpdate[i]; // PROPS flag guarantees rawProps to be non-null

        var value = rawProps[key];

        if (options) {
          // attr / props separation was done on init and will be consistent
          // in this code path, so just check if attrs have it.
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            var camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false
            /* isAbsent */
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    // full props update.
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    } // in case of dynamic props, check if we need to delete keys from
    // the props object


    var kebabKey;

    for (var _key9 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, _key9) && ( // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      (kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(_key9)) === _key9 || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && ( // for camelCase
          rawPrevProps[_key9] !== undefined || // for kebab-case
          rawPrevProps[kebabKey] !== undefined)) {
            props[_key9] = resolvePropValue(options, rawCurrentProps, _key9, undefined, instance, true
            /* isAbsent */
            );
          }
        } else {
          delete props[_key9];
        }
      }
    } // in the case of functional component w/o props declaration, props and
    // attrs point to the same object so it should already have been updated.


    if (attrs !== rawCurrentProps) {
      for (var _key10 in attrs) {
        if (!rawProps || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, _key10) && !false) {
          delete attrs[_key10];
          hasAttrsChanged = true;
        }
      }
    }
  } // trigger updates for $attrs in case it's used in component slots


  if (hasAttrsChanged) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance, "set"
    /* SET */
    , '$attrs');
  }

  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}

function setFullProps(instance, rawProps, props, attrs) {
  var _instance$propsOption5 = _slicedToArray(instance.propsOptions, 2),
      options = _instance$propsOption5[0],
      needCastKeys = _instance$propsOption5[1];

  var hasAttrsChanged = false;
  var rawCastValues;

  if (rawProps) {
    for (var key in rawProps) {
      // key, ref are reserved and never passed down
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
        continue;
      }

      var value = rawProps[key]; // prop option names are camelized during normalization, so to support
      // kebab -> camel conversion here we need to camelize the key.

      var camelKey = void 0;

      if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }

  if (needCastKeys) {
    var rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    var castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

    for (var i = 0; i < needCastKeys.length; i++) {
      var _key11 = needCastKeys[i];
      props[_key11] = resolvePropValue(options, rawCurrentProps, _key11, castValues[_key11], instance, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(castValues, _key11));
    }
  }

  return hasAttrsChanged;
}

function resolvePropValue(options, props, key, value, instance, isAbsent) {
  var opt = options[key];

  if (opt != null) {
    var hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(opt, 'default'); // default values

    if (hasDefault && value === undefined) {
      var defaultValue = opt["default"];

      if (opt.type !== Function && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)) {
        var propsDefaults = instance.propsDefaults;

        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    } // boolean casting


    if (opt[0
    /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1
      /* shouldCastTrue */
      ] && (value === '' || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))) {
        value = true;
      }
    }
  }

  return value;
}

function normalizePropsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.propsCache;
  var cached = cache.get(comp);

  if (cached) {
    return cached;
  }

  var raw = comp.props;
  var normalized = {};
  var needCastKeys = []; // apply mixin/extends props

  var hasExtends = false;

  if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    var extendProps = function extendProps(raw) {
      hasExtends = true;

      var _normalizePropsOption = normalizePropsOptions(raw, appContext, true),
          _normalizePropsOption2 = _slicedToArray(_normalizePropsOption, 2),
          props = _normalizePropsOption2[0],
          keys = _normalizePropsOption2[1];

      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, props);
      if (keys) needCastKeys.push.apply(needCastKeys, _toConsumableArray(keys));
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }

    if (comp["extends"]) {
      extendProps(comp["extends"]);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }

  if (!raw && !hasExtends) {
    cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR);
    return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    for (var i = 0; i < raw.length; i++) {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw[i])) {
        warn("props must be strings when using array syntax.", raw[i]);
      }

      var normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(raw[i]);

      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
      warn("invalid props options", raw);
    }

    for (var key in raw) {
      var _normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);

      if (validatePropName(_normalizedKey)) {
        var opt = raw[key];
        var prop = normalized[_normalizedKey] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? {
          type: opt
        } : opt;

        if (prop) {
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          var stringIndex = getTypeIndex(String, prop.type);
          prop[0
          /* shouldCast */
          ] = booleanIndex > -1;
          prop[1
          /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex; // if the prop needs boolean casting or default value

          if (booleanIndex > -1 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(prop, 'default')) {
            needCastKeys.push(_normalizedKey);
          }
        }
      }
    }
  }

  var res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}

function validatePropName(key) {
  if (key[0] !== '$') {
    return true;
  } else if (true) {
    warn("Invalid prop name: \"".concat(key, "\" is a reserved property."));
  }

  return false;
} // use function string name to check type constructors
// so that it works across vms / iframes.


function getType(ctor) {
  var match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? 'null' : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expectedTypes)) {
    return expectedTypes.findIndex(function (t) {
      return isSameType(t, type);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  return -1;
}
/**
 * dev only
 */


function validateProps(rawProps, props, instance) {
  var resolvedValues = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
  var options = instance.propsOptions[0];

  for (var key in options) {
    var opt = options[key];
    if (opt == null) continue;
    validateProp(key, resolvedValues[key], opt, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)));
  }
}
/**
 * dev only
 */


function validateProp(name, value, prop, isAbsent) {
  var type = prop.type,
      required = prop.required,
      validator = prop.validator; // required!

  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  } // missing but optional


  if (value == null && !prop.required) {
    return;
  } // type check


  if (type != null && type !== true) {
    var isValid = false;
    var types = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(type) ? type : [type];
    var expectedTypes = []; // value is valid as long as one of the specified types match

    for (var i = 0; i < types.length && !isValid; i++) {
      var _assertType = assertType(value, types[i]),
          valid = _assertType.valid,
          expectedType = _assertType.expectedType;

      expectedTypes.push(expectedType || '');
      isValid = valid;
    }

    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  } // custom validator


  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}

var isSimpleType = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (isSimpleType(expectedType)) {
    var t = _typeof(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value);
  } else if (expectedType === 'Array') {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
  } else if (expectedType === 'null') {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * dev only
 */


function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") + " Expected ".concat(expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join(' | '));
  var expectedType = expectedTypes[0];
  var receivedType = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toRawType)(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(expectedValue);
  }

  message += ", got ".concat(receivedType, " "); // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value ".concat(receivedValue, ".");
  }

  return message;
}
/**
 * dev only
 */


function styleValue(value, type) {
  if (type === 'String') {
    return "\"".concat(value, "\"");
  } else if (type === 'Number') {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}
/**
 * dev only
 */


function isExplicable(type) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return type.toLowerCase() === elem;
  });
}
/**
 * dev only
 */


function isBoolean() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key12 = 0; _key12 < _len5; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}

var isInternalKey = function isInternalKey(key) {
  return key[0] === '_' || key === '$stable';
};

var normalizeSlotValue = function normalizeSlotValue(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
};

var normalizeSlot = function normalizeSlot(key, rawSlot, ctx) {
  var normalized = withCtx(function () {
    if ( true && currentInstance) {
      warn("Slot \"".concat(key, "\" invoked outside of the render function: ") + "this will not track dependencies used in the slot. " + "Invoke the slot function inside the render function instead.");
    }

    return normalizeSlotValue(rawSlot.apply(void 0, arguments));
  }, ctx);
  normalized._c = false;
  return normalized;
};

var normalizeObjectSlots = function normalizeObjectSlots(rawSlots, slots, instance) {
  var ctx = rawSlots._ctx;

  for (var key in rawSlots) {
    if (isInternalKey(key)) continue;
    var value = rawSlots[key];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      (function () {
        if (true) {
          warn("Non-function value encountered for slot \"".concat(key, "\". ") + "Prefer function slots for better performance.");
        }

        var normalized = normalizeSlotValue(value);

        slots[key] = function () {
          return normalized;
        };
      })();
    }
  }
};

var normalizeVNodeSlots = function normalizeVNodeSlots(instance, children) {
  if ( true && !isKeepAlive(instance.vnode) && !false) {
    warn("Non-function value encountered for default slot. " + "Prefer function slots for better performance.");
  }

  var normalized = normalizeSlotValue(children);

  instance.slots["default"] = function () {
    return normalized;
  };
};

var initSlots = function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
    var type = children._;

    if (type) {
      // users can get the shallow readonly version of the slots object through `this.$slots`,
      // we should avoid the proxy object polluting the slots of the internal instance
      instance.slots = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(children); // make compiler marker non-enumerable

      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(children, '_', type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};

    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }

  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(instance.slots, InternalObjectKey, 1);
};

var updateSlots = function updateSlots(instance, children, optimized) {
  var vnode = instance.vnode,
      slots = instance.slots;
  var needDeletionCheck = true;
  var deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

  if (vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
    var type = children._;

    if (type) {
      // compiled slots.
      if ( true && isHmrUpdating) {
        // Parent was HMR updated so slot content may have changed.
        // force update slots and mark instance for hmr as well
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
      } else if (optimized && type === 1
      /* STABLE */
      ) {
        // compiled AND stable.
        // no need to update, and skip stale slots removal.
        needDeletionCheck = false;
      } else {
        // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
        // normalization.
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children); // #2893
        // when rendering the optimized slots by manually written render function,
        // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
        // i.e. let the `renderSlot` create the bailed Fragment

        if (!optimized && type === 1
        /* STABLE */
        ) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }

    deletionComparisonTarget = children;
  } else if (children) {
    // non slot object children (direct value) passed to a component
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      "default": 1
    };
  } // delete stale slots


  if (needDeletionCheck) {
    for (var key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/


var isBuiltInDirective = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');

function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn('Do not use built-in directive ids as custom directive id: ' + name);
  }
}
/**
 * Adds directives to a VNode.
 */


function withDirectives(vnode, directives) {
  var internalInstance = currentRenderingInstance;

  if (internalInstance === null) {
     true && warn("withDirectives can only be used inside render functions.");
    return vnode;
  }

  var instance = internalInstance.proxy;
  var bindings = vnode.dirs || (vnode.dirs = []);

  for (var i = 0; i < directives.length; i++) {
    var _directives$i = _slicedToArray(directives[i], 4),
        dir = _directives$i[0],
        value = _directives$i[1],
        arg = _directives$i[2],
        _directives$i$ = _directives$i[3],
        modifiers = _directives$i$ === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ : _directives$i$;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }

    if (dir.deep) {
      traverse(value);
    }

    bindings.push({
      dir: dir,
      instance: instance,
      value: value,
      oldValue: void 0,
      arg: arg,
      modifiers: modifiers
    });
  }

  return vnode;
}

function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  var bindings = vnode.dirs;
  var oldBindings = prevVNode && prevVNode.dirs;

  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i];

    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }

    var hook = binding.dir[name];

    if (hook) {
      // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      callWithAsyncErrorHandling(hook, instance, 8
      /* DIRECTIVE_HOOK */
      , [vnode.el, binding, vnode, prevVNode]);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    }
  }
}

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: undefined,
      warnHandler: undefined,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}

var uid = 0;

function createAppAPI(render, hydrate) {
  return function createApp(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(rootProps)) {
       true && warn("root props passed to app.mount() must be an object.");
      rootProps = null;
    }

    var context = createAppContext();
    var installedPlugins = new Set();
    var isMounted = false;
    var app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version: version,

      get config() {
        return context.config;
      },

      set config(v) {
        if (true) {
          warn("app.config cannot be replaced. Modify individual options instead.");
        }
      },

      use: function use(plugin) {
        for (var _len6 = arguments.length, options = new Array(_len6 > 1 ? _len6 - 1 : 0), _key13 = 1; _key13 < _len6; _key13++) {
          options[_key13 - 1] = arguments[_key13];
        }

        if (installedPlugins.has(plugin)) {
           true && warn("Plugin has already been applied to target app.");
        } else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install.apply(plugin, [app].concat(options));
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin)) {
          installedPlugins.add(plugin);
          plugin.apply(void 0, [app].concat(options));
        } else if (true) {
          warn("A plugin must either be a function or an object with an \"install\" " + "function.");
        }

        return app;
      },
      mixin: function mixin(_mixin) {
        if (__VUE_OPTIONS_API__) {
          if (!context.mixins.includes(_mixin)) {
            context.mixins.push(_mixin);
          } else if (true) {
            warn('Mixin has already been applied to target app' + (_mixin.name ? ": ".concat(_mixin.name) : ''));
          }
        } else if (true) {
          warn('Mixins are only available in builds supporting Options API');
        }

        return app;
      },
      component: function component(name, _component) {
        if (true) {
          validateComponentName(name, context.config);
        }

        if (!_component) {
          return context.components[name];
        }

        if ( true && context.components[name]) {
          warn("Component \"".concat(name, "\" has already been registered in target app."));
        }

        context.components[name] = _component;
        return app;
      },
      directive: function directive(name, _directive) {
        if (true) {
          validateDirectiveName(name);
        }

        if (!_directive) {
          return context.directives[name];
        }

        if ( true && context.directives[name]) {
          warn("Directive \"".concat(name, "\" has already been registered in target app."));
        }

        context.directives[name] = _directive;
        return app;
      },
      mount: function mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          var vnode = createVNode(rootComponent, rootProps); // store app context on the root VNode.
          // this will be set on the root instance on initial mount.

          vnode.appContext = context; // HMR root reload

          if (true) {
            context.reload = function () {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }

          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }

          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;

          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }

          return getExposeProxy(vnode.component) || vnode.component.proxy;
        } else if (true) {
          warn("App has already been mounted.\n" + "If you want to remount the same app, move your app creation logic " + "into a factory function and create fresh app instances for each " + "mount - e.g. `const createMyApp = () => createApp(App)`");
        }
      },
      unmount: function unmount() {
        if (isMounted) {
          render(null, app._container);

          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }

          delete app._container.__vue_app__;
        } else if (true) {
          warn("Cannot unmount an app that is not mounted.");
        }
      },
      provide: function provide(key, value) {
        if ( true && key in context.provides) {
          warn("App already provides property with key \"".concat(String(key), "\". ") + "It will be overwritten with the new value.");
        } // TypeScript doesn't allow symbols as index type
        // https://github.com/Microsoft/TypeScript/issues/24587


        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
/**
 * Function for handling a template ref
 */


function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
  var isUnmount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rawRef)) {
    rawRef.forEach(function (r, i) {
      return setRef(r, oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount);
    });
    return;
  }

  if (isAsyncWrapper(vnode) && !isUnmount) {
    // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
  }

  var refValue = vnode.shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  var value = isUnmount ? null : refValue;
  var owner = rawRef.i,
      ref = rawRef.r;

  if ( true && !owner) {
    warn("Missing ref owner context. ref cannot be used on hoisted vnodes. " + "A vnode with ref must be created inside the render function.");
    return;
  }

  var oldRef = oldRawRef && oldRawRef.r;
  var refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? owner.refs = {} : owner.refs;
  var setupState = owner.setupState; // dynamic ref changed. unset old ref

  if (oldRef != null && oldRef !== ref) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldRef)) {
      refs[oldRef] = null;

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(oldRef)) {
      oldRef.value = null;
    }
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
    callWithErrorHandling(ref, owner, 12
    /* FUNCTION_REF */
    , [value, refs]);
  } else {
    var _isString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref);

    var _isRef = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref);

    if (_isString || _isRef) {
      var doSet = function doSet() {
        if (rawRef.f) {
          var existing = _isString ? refs[ref] : ref.value;

          if (isUnmount) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(existing, refValue);
          } else {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing)) {
              if (_isString) {
                refs[ref] = [refValue];
              } else {
                ref.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref] = value;

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
            setupState[ref] = value;
          }
        } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref)) {
          ref.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else if (true) {
          warn('Invalid template ref type:', ref, "(".concat(_typeof(ref), ")"));
        }
      };

      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (true) {
      warn('Invalid template ref type:', ref, "(".concat(_typeof(ref), ")"));
    }
  }
}

var hasMismatch = false;

var isSVGContainer = function isSVGContainer(container) {
  return /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
};

var isComment = function isComment(node) {
  return node.nodeType === 8;
}
/* COMMENT */
; // Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.


function createHydrationFunctions(rendererInternals) {
  var mountComponent = rendererInternals.mt,
      patch = rendererInternals.p,
      _rendererInternals$o2 = rendererInternals.o,
      patchProp = _rendererInternals$o2.patchProp,
      nextSibling = _rendererInternals$o2.nextSibling,
      parentNode = _rendererInternals$o2.parentNode,
      remove = _rendererInternals$o2.remove,
      insert = _rendererInternals$o2.insert,
      createComment = _rendererInternals$o2.createComment;

  var hydrate = function hydrate(vnode, container) {
    if (!container.hasChildNodes()) {
       true && warn("Attempting to hydrate existing markup but container is empty. " + "Performing full mount instead.");
      patch(null, vnode, container);
      flushPostFlushCbs();
      return;
    }

    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();

    if (hasMismatch && !false) {
      // this error should show up in production
      console.error("Hydration completed but contains mismatches.");
    }
  };

  var hydrateNode = function hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds) {
    var optimized = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var isFragmentStart = isComment(node) && node.data === '[';

    var onMismatch = function onMismatch() {
      return handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    };

    var type = vnode.type,
        ref = vnode.ref,
        shapeFlag = vnode.shapeFlag;
    var domType = node.nodeType;
    vnode.el = node;
    var nextNode = null;

    switch (type) {
      case Text:
        if (domType !== 3
        /* TEXT */
        ) {
          nextNode = onMismatch();
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
             true && warn("Hydration text mismatch:" + "\n- Client: ".concat(JSON.stringify(node.data)) + "\n- Server: ".concat(JSON.stringify(vnode.children)));
            node.data = vnode.children;
          }

          nextNode = nextSibling(node);
        }

        break;

      case Comment:
        if (domType !== 8
        /* COMMENT */
        || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }

        break;

      case Static:
        if (domType !== 1
        /* ELEMENT */
        ) {
          nextNode = onMismatch();
        } else {
          // determine anchor, adopt content
          nextNode = node; // if the static vnode has its content stripped during build,
          // adopt it from the server-rendered HTML.

          var needToAdoptContent = !vnode.children.length;

          for (var i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent) vnode.children += nextNode.outerHTML;

            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }

            nextNode = nextSibling(nextNode);
          }

          return nextNode;
        }

        break;

      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }

        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
          if (domType !== 1
          /* ELEMENT */
          || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
          // when setting up the render effect, if the initial vnode already
          // has .el set, the component will perform hydration instead of mount
          // on its sub-tree.
          vnode.slotScopeIds = slotScopeIds;
          var container = parentNode(node);
          mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized); // component may be async, so in the case of fragments we cannot rely
          // on component's rendered output to determine the end of the fragment
          // instead, we do a lookahead to find the end anchor node.

          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node); // #3787
          // if component is async, it may get moved / unmounted before its
          // inner component is loaded, so we need to give it a placeholder
          // vnode that matches its adopted DOM.

          if (isAsyncWrapper(vnode)) {
            var subTree;

            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode('') : createVNode('div');
            }

            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
          if (domType !== 8
          /* COMMENT */
          ) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else if (true) {
          warn('Invalid HostVNode type:', type, "(".concat(_typeof(type), ")"));
        }

    }

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }

    return nextNode;
  };

  var hydrateElement = function hydrateElement(el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!vnode.dynamicChildren;
    var type = vnode.type,
        props = vnode.props,
        patchFlag = vnode.patchFlag,
        shapeFlag = vnode.shapeFlag,
        dirs = vnode.dirs; // #4006 for form elements with non-string v-model value bindings
    // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">

    var forcePatchValue = type === 'input' && dirs || type === 'option'; // skip props & children if this is hoisted static nodes

    if (forcePatchValue || patchFlag !== -1
    /* HOISTED */
    ) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        if (forcePatchValue || !optimized || patchFlag & (16
        /* FULL_PROPS */
        | 32
        /* HYDRATE_EVENTS */
        )) {
          for (var key in props) {
            if (forcePatchValue && key.endsWith('value') || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
              patchProp(el, key, null, props[key], false, undefined, parentComponent);
            }
          }
        } else if (props.onClick) {
          // Fast path for click listeners (which is most often) to avoid
          // iterating through props.
          patchProp(el, 'onClick', null, props.onClick, false, undefined, parentComponent);
        }
      } // vnode / directive hooks


      var vnodeHooks;

      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
      }

      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(function () {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
        }, parentSuspense);
      } // children


      if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        var next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        var _hasWarned = false;

        while (next) {
          hasMismatch = true;

          if ( true && !_hasWarned) {
            warn("Hydration children mismatch in <".concat(vnode.type, ">: ") + "server rendered element contains more child nodes than client vdom.");
            _hasWarned = true;
          } // The SSRed DOM contains more nodes than it should. Remove them.


          var cur = next;
          next = next.nextSibling;
          remove(cur);
        }
      } else if (shapeFlag & 8
      /* TEXT_CHILDREN */
      ) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
           true && warn("Hydration text content mismatch in <".concat(vnode.type, ">:\n") + "- Client: ".concat(el.textContent, "\n") + "- Server: ".concat(vnode.children));
          el.textContent = vnode.children;
        }
      }
    }

    return el.nextSibling;
  };

  var hydrateChildren = function hydrateChildren(node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!parentVNode.dynamicChildren;
    var children = parentVNode.children;
    var l = children.length;
    var hasWarned = false;

    for (var i = 0; i < l; i++) {
      var vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);

      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;

        if ( true && !hasWarned) {
          warn("Hydration children mismatch in <".concat(container.tagName.toLowerCase(), ">: ") + "server rendered element contains fewer child nodes than client vdom.");
          hasWarned = true;
        } // the SSRed DOM didn't contain enough nodes. Mount the missing ones.


        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }

    return node;
  };

  var hydrateFragment = function hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    var fragmentSlotScopeIds = vnode.slotScopeIds;

    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    var container = parentNode(node);
    var next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);

    if (next && isComment(next) && next.data === ']') {
      return nextSibling(vnode.anchor = next);
    } else {
      // fragment didn't hydrate successfully, since we didn't get a end anchor
      // back. This should have led to node/children mismatch warnings.
      hasMismatch = true; // since the anchor is missing, we need to create one and insert it

      insert(vnode.anchor = createComment("]"), container, next);
      return next;
    }
  };

  var handleMismatch = function handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) {
    hasMismatch = true;
     true && warn("Hydration node mismatch:\n- Client vnode:", vnode.type, "\n- Server rendered DOM:", node, node.nodeType === 3
    /* TEXT */
    ? "(text)" : isComment(node) && node.data === '[' ? "(start of fragment)" : "");
    vnode.el = null;

    if (isFragment) {
      // remove excessive fragment nodes
      var end = locateClosingAsyncAnchor(node);

      while (true) {
        var _next2 = nextSibling(node);

        if (_next2 && _next2 !== end) {
          remove(_next2);
        } else {
          break;
        }
      }
    }

    var next = nextSibling(node);
    var container = parentNode(node);
    remove(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };

  var locateClosingAsyncAnchor = function locateClosingAsyncAnchor(node) {
    var match = 0;

    while (node) {
      node = nextSibling(node);

      if (node && isComment(node)) {
        if (node.data === '[') match++;

        if (node.data === ']') {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }

    return node;
  };

  return [hydrate, hydrateNode];
}
/* eslint-disable no-restricted-globals */


var supported;
var perf;

function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark("vue-".concat(type, "-").concat(instance.uid));
  }

  if (true) {
    devtoolsPerfStart(instance, type, supported ? perf.now() : Date.now());
  }
}

function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    var startTag = "vue-".concat(type, "-").concat(instance.uid);
    var endTag = startTag + ":end";
    perf.mark(endTag);
    perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }

  if (true) {
    devtoolsPerfEnd(instance, type, supported ? perf.now() : Date.now());
  }
}

function isSupported() {
  if (supported !== undefined) {
    return supported;
  }

  if (typeof window !== 'undefined' && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }

  return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */


function initFeatureFlags() {
  var needWarn = [];

  if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
     true && needWarn.push("__VUE_OPTIONS_API__");
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_OPTIONS_API__ = true;
  }

  if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
     true && needWarn.push("__VUE_PROD_DEVTOOLS__");
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
  }

  if ( true && needWarn.length) {
    var multi = needWarn.length > 1;
    console.warn("Feature flag".concat(multi ? "s" : "", " ").concat(needWarn.join(', '), " ").concat(multi ? "are" : "is", " not explicitly defined. You are running the esm-bundler build of Vue, ") + "which expects these compile-time feature flags to be globally injected " + "via the bundler config in order to get better tree-shaking in the " + "production bundle.\n\n" + "For more details, see https://link.vuejs.org/feature-flags.");
  }
}

var queuePostRenderEffect = queueEffectWithSuspense;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */

function createRenderer(options) {
  return baseCreateRenderer(options);
} // Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.


function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
} // implementation


function baseCreateRenderer(options, createHydrationFns) {
  // compile-time feature flags check
  {
    initFeatureFlags();
  }
  var target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
  target.__VUE__ = true;

  if (true) {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }

  var hostInsert = options.insert,
      hostRemove = options.remove,
      hostPatchProp = options.patchProp,
      hostCreateElement = options.createElement,
      hostCreateText = options.createText,
      hostCreateComment = options.createComment,
      hostSetText = options.setText,
      hostSetElementText = options.setElementText,
      hostParentNode = options.parentNode,
      hostNextSibling = options.nextSibling,
      _options$setScopeId = options.setScopeId,
      hostSetScopeId = _options$setScopeId === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP : _options$setScopeId,
      hostCloneNode = options.cloneNode,
      hostInsertStaticContent = options.insertStaticContent; // Note: functions inside this closure should use `const xxx = () => {}`
  // style in order to prevent being inlined by minifiers.

  var patch = function patch(n1, n2, container) {
    var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var parentComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var parentSuspense = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var isSVG = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var slotScopeIds = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] :  true && isHmrUpdating ? false : !!n2.dynamicChildren;

    if (n1 === n2) {
      return;
    } // patching & not same type, unmount old tree


    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }

    if (n2.patchFlag === -2
    /* BAIL */
    ) {
      optimized = false;
      n2.dynamicChildren = null;
    }

    var type = n2.type,
        ref = n2.ref,
        shapeFlag = n2.shapeFlag;

    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;

      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;

      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else if (true) {
          patchStaticNode(n1, n2, container, isSVG);
        }

        break;

      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (true) {
          warn('Invalid VNode type:', type, "(".concat(_typeof(type), ")"));
        }

    } // set ref


    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };

  var processText = function processText(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      var el = n2.el = n1.el;

      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };

  var processCommentNode = function processCommentNode(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
    } else {
      // there's no support for dynamic comments
      n2.el = n1.el;
    }
  };

  var mountStaticNode = function mountStaticNode(n2, container, anchor, isSVG) {
    var _hostInsertStaticCont = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);

    var _hostInsertStaticCont2 = _slicedToArray(_hostInsertStaticCont, 2);

    n2.el = _hostInsertStaticCont2[0];
    n2.anchor = _hostInsertStaticCont2[1];
  };
  /**
   * Dev / HMR only
   */


  var patchStaticNode = function patchStaticNode(n1, n2, container, isSVG) {
    // static nodes are only patched during dev for HMR
    if (n2.children !== n1.children) {
      var anchor = hostNextSibling(n1.anchor); // remove existing

      removeStaticNode(n1);

      var _hostInsertStaticCont3 = hostInsertStaticContent(n2.children, container, anchor, isSVG);

      var _hostInsertStaticCont4 = _slicedToArray(_hostInsertStaticCont3, 2);

      n2.el = _hostInsertStaticCont4[0];
      n2.anchor = _hostInsertStaticCont4[1];
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };

  var moveStaticNode = function moveStaticNode(_ref13, container, nextSibling) {
    var el = _ref13.el,
        anchor = _ref13.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }

    hostInsert(anchor, container, nextSibling);
  };

  var removeStaticNode = function removeStaticNode(_ref14) {
    var el = _ref14.el,
        anchor = _ref14.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }

    hostRemove(anchor);
  };

  var processElement = function processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    isSVG = isSVG || n2.type === 'svg';

    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var mountElement = function mountElement(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el;
    var vnodeHook;
    var type = vnode.type,
        props = vnode.props,
        shapeFlag = vnode.shapeFlag,
        transition = vnode.transition,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs;

    if (false
    /* HOISTED */
    ) {} else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props); // mount children first, since some props may rely on child content
      // being already rendered, e.g. `<select value>`

      if (shapeFlag & 8
      /* TEXT_CHILDREN */
      ) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
      }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        for (var key in props) {
          if (key !== 'value' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        /**
         * Special case for setting value on DOM elements:
         * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
         * - it needs to be forced (#1471)
         * #2353 proposes adding another renderer option to configure this, but
         * the properties affects are so finite it is worth special casing it
         * here to reduce the complexity. (Special casing it also should not
         * affect non-DOM renderers)
         */


        if ('value' in props) {
          hostPatchProp(el, 'value', null, props.value);
        }

        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      } // scopeId


      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }

    if (true) {
      Object.defineProperty(el, '__vnode', {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, '__vueParentComponent', {
        value: parentComponent,
        enumerable: false
      });
    }

    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
    } // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it


    var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;

    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }

    hostInsert(el, container, anchor);

    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
      }, parentSuspense);
    }
  };

  var setScopeId = function setScopeId(el, vnode, scopeId, slotScopeIds, parentComponent) {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }

    if (slotScopeIds) {
      for (var i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }

    if (parentComponent) {
      var subTree = parentComponent.subTree;

      if ( true && subTree.patchFlag > 0 && subTree.patchFlag & 2048
      /* DEV_ROOT_FRAGMENT */
      ) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }

      if (vnode === subTree) {
        var parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };

  var mountChildren = function mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var start = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

    for (var i = start; i < children.length; i++) {
      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var patchElement = function patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el = n2.el = n1.el;
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        dirs = n2.dirs; // #1426 take the old vnode's patch flag into account since user may clone a
    // compiler-generated vnode, which de-opts to FULL_PROPS

    patchFlag |= n1.patchFlag & 16
    /* FULL_PROPS */
    ;
    var oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    var newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    var vnodeHook; // disable recurse in beforeUpdate hooks

    parentComponent && toggleRecurse(parentComponent, false);

    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }

    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
    }

    parentComponent && toggleRecurse(parentComponent, true);

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    var areChildrenSVG = isSVG && n2.type !== 'foreignObject';

    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);

      if ( true && parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      // full diff
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }

    if (patchFlag > 0) {
      // the presence of a patchFlag means this element's render code was
      // generated by the compiler and can take the fast path.
      // in this path old node and new node are guaranteed to have the same shape
      // (i.e. at the exact same position in the source template)
      if (patchFlag & 16
      /* FULL_PROPS */
      ) {
        // element props contain dynamic keys, full diff needed
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        // class
        // this flag is matched when the element has dynamic class bindings.
        if (patchFlag & 2
        /* CLASS */
        ) {
          if (oldProps["class"] !== newProps["class"]) {
            hostPatchProp(el, 'class', null, newProps["class"], isSVG);
          }
        } // style
        // this flag is matched when the element has dynamic style bindings


        if (patchFlag & 4
        /* STYLE */
        ) {
          hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
        } // props
        // This flag is matched when the element has dynamic prop/attr bindings
        // other than class and style. The keys of dynamic prop/attrs are saved for
        // faster iteration.
        // Note dynamic keys like :[foo]="bar" will cause this optimization to
        // bail out and go through a full diff because we need to unset the old key


        if (patchFlag & 8
        /* PROPS */
        ) {
          // if the flag is present then dynamicProps must be non-null
          var propsToUpdate = n2.dynamicProps;

          for (var i = 0; i < propsToUpdate.length; i++) {
            var key = propsToUpdate[i];
            var prev = oldProps[key];
            var next = newProps[key]; // #1471 force patch value

            if (next !== prev || key === 'value') {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      } // text
      // This flag is matched when the element has only dynamic text children.


      if (patchFlag & 1
      /* TEXT */
      ) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      // unoptimized, full diff
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }

    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
      }, parentSuspense);
    }
  }; // The fast path for blocks.


  var patchBlockChildren = function patchBlockChildren(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    for (var i = 0; i < newChildren.length; i++) {
      var oldVNode = oldChildren[i];
      var newVNode = newChildren[i]; // Determine the container (parent element) for the patch.

      var container = // oldVNode may be an errored async setup() component inside Suspense
      // which will not have a mounted element
      oldVNode.el && ( // - In the case of a Fragment, we need to provide the actual parent
      // of the Fragment itself so it can move its children.
      oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
      // which also requires the correct parent container
      !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
      oldVNode.shapeFlag & (6
      /* COMPONENT */
      | 64
      /* TELEPORT */
      )) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };

  var patchProps = function patchProps(el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
    if (oldProps !== newProps) {
      for (var key in newProps) {
        // empty string is not valid prop
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) continue;
        var next = newProps[key];
        var prev = oldProps[key]; // defer patching value

        if (next !== prev && key !== 'value') {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }

      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
        for (var _key14 in oldProps) {
          if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(_key14) && !(_key14 in newProps)) {
            hostPatchProp(el, _key14, oldProps[_key14], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }

      if ('value' in newProps) {
        hostPatchProp(el, 'value', oldProps.value, newProps.value);
      }
    }
  };

  var processFragment = function processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        fragmentSlotScopeIds = n2.slotScopeIds;

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    } // check if this is a slot fragment with :slotted scope ids


    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor); // a fragment can only have array children
      // since they are either generated by the compiler, or implicitly created
      // from arrays.

      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        // a stable fragment (template root or <template v-for>) doesn't need to
        // patch children order, but it may contain dynamicChildren.
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);

        if ( true && parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if ( // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true
          /* shallow */
          );
        }
      } else {
        // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };

  var processComponent = function processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    n2.slotScopeIds = slotScopeIds;

    if (n1 == null) {
      if (n2.shapeFlag & 512
      /* COMPONENT_KEPT_ALIVE */
      ) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };

  var mountComponent = function mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);

    if ( true && instance.type.__hmrId) {
      registerHMR(instance);
    }

    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, "mount");
    } // inject renderer internals for keepAlive


    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    } // resolve props and slots for setup context


    {
      if (true) {
        startMeasure(instance, "init");
      }

      setupComponent(instance);

      if (true) {
        endMeasure(instance, "init");
      }
    } // setup() is async. This component relies on async logic to be resolved
    // before proceeding

    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect); // Give it a placeholder if this is not hydration
      // TODO handle self-defined fallback

      if (!initialVNode.el) {
        var placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }

      return;
    }

    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);

    if (true) {
      popWarningContext();
      endMeasure(instance, "mount");
    }
  };

  var updateComponent = function updateComponent(n1, n2, optimized) {
    var instance = n2.component = n1.component;

    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        // async & still pending - just update props and slots
        // since the component's reactive effect for render isn't set-up yet
        if (true) {
          pushWarningContext(n2);
        }

        updateComponentPreRender(instance, n2, optimized);

        if (true) {
          popWarningContext();
        }

        return;
      } else {
        // normal update
        instance.next = n2; // in case the child component is also queued, remove it to avoid
        // double updating the same child component in the same flush.

        invalidateJob(instance.update); // instance.update is the reactive effect.

        instance.update();
      }
    } else {
      // no update needed. just copy over properties
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };

  var setupRenderEffect = function setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
    var componentUpdateFn = function componentUpdateFn() {
      if (!instance.isMounted) {
        var vnodeHook;
        var _initialVNode = initialVNode,
            el = _initialVNode.el,
            props = _initialVNode.props;
        var bm = instance.bm,
            m = instance.m,
            parent = instance.parent;
        var isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false); // beforeMount hook

        if (bm) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bm);
        } // onVnodeBeforeMount


        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }

        toggleRecurse(instance, true);

        if (el && hydrateNode) {
          // vnode has adopted host node - perform hydration instead of mount.
          var hydrateSubTree = function hydrateSubTree() {
            if (true) {
              startMeasure(instance, "render");
            }

            instance.subTree = renderComponentRoot(instance);

            if (true) {
              endMeasure(instance, "render");
            }

            if (true) {
              startMeasure(instance, "hydrate");
            }

            hydrateNode(el, instance.subTree, instance, parentSuspense, null);

            if (true) {
              endMeasure(instance, "hydrate");
            }
          };

          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then( // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            function () {
              return !instance.isUnmounted && hydrateSubTree();
            });
          } else {
            hydrateSubTree();
          }
        } else {
          if (true) {
            startMeasure(instance, "render");
          }

          var subTree = instance.subTree = renderComponentRoot(instance);

          if (true) {
            endMeasure(instance, "render");
          }

          if (true) {
            startMeasure(instance, "patch");
          }

          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);

          if (true) {
            endMeasure(instance, "patch");
          }

          initialVNode.el = subTree.el;
        } // mounted hook


        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        } // onVnodeMounted


        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          var scopedInitialVNode = initialVNode;
          queuePostRenderEffect(function () {
            return invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
          }, parentSuspense);
        } // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive


        if (initialVNode.shapeFlag & 256
        /* COMPONENT_SHOULD_KEEP_ALIVE */
        ) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }

        instance.isMounted = true;

        if (true) {
          devtoolsComponentAdded(instance);
        } // #2458: deference mount-only object parameters to prevent memleaks


        initialVNode = container = anchor = null;
      } else {
        // updateComponent
        // This is triggered by mutation of component's own state (next: null)
        // OR parent calling processComponent (next: VNode)
        var next = instance.next,
            bu = instance.bu,
            u = instance.u,
            _parent = instance.parent,
            vnode = instance.vnode;
        var originNext = next;

        var _vnodeHook;

        if (true) {
          pushWarningContext(next || instance.vnode);
        } // Disallow component effect recursion during pre-lifecycle hooks.


        toggleRecurse(instance, false);

        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        } // beforeUpdate hook


        if (bu) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bu);
        } // onVnodeBeforeUpdate


        if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(_vnodeHook, _parent, next, vnode);
        }

        toggleRecurse(instance, true); // render

        if (true) {
          startMeasure(instance, "render");
        }

        var nextTree = renderComponentRoot(instance);

        if (true) {
          endMeasure(instance, "render");
        }

        var prevTree = instance.subTree;
        instance.subTree = nextTree;

        if (true) {
          startMeasure(instance, "patch");
        }

        patch(prevTree, nextTree, // parent may have changed if it's in a teleport
        hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
        getNextHostNode(prevTree), instance, parentSuspense, isSVG);

        if (true) {
          endMeasure(instance, "patch");
        }

        next.el = nextTree.el;

        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance's subTree pointing
          // to child component's vnode
          updateHOCHostEl(instance, nextTree.el);
        } // updated hook


        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        } // onVnodeUpdated


        if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(function () {
            return invokeVNodeHook(_vnodeHook, _parent, next, vnode);
          }, parentSuspense);
        }

        if (true) {
          devtoolsComponentUpdated(instance);
        }

        if (true) {
          popWarningContext();
        }
      }
    }; // create reactive effect for rendering


    var effect = instance.effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect(componentUpdateFn, function () {
      return queueJob(instance.update);
    }, instance.scope // track it in component's effect scope
    );
    var update = instance.update = effect.run.bind(effect);
    update.id = instance.uid; // allowRecurse
    // #1801, #2043 component render effects should allow recursive updates

    toggleRecurse(instance, true);

    if (true) {
      effect.onTrack = instance.rtc ? function (e) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtc, e);
      } : void 0;
      effect.onTrigger = instance.rtg ? function (e) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtg, e);
      } : void 0; // @ts-ignore (for scheduler)

      update.ownerInstance = instance;
    }

    update();
  };

  var updateComponentPreRender = function updateComponentPreRender(instance, nextVNode, optimized) {
    nextVNode.component = instance;
    var prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)(); // props update may have triggered pre-flush watchers.
    // flush them before the render update.

    flushPreFlushCbs(undefined, instance.update);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
  };

  var patchChildren = function patchChildren(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
    var c1 = n1 && n1.children;
    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
    var c2 = n2.children;
    var patchFlag = n2.patchFlag,
        shapeFlag = n2.shapeFlag; // fast path

    if (patchFlag > 0) {
      if (patchFlag & 128
      /* KEYED_FRAGMENT */
      ) {
        // this could be either fully-keyed or mixed (some keyed some not)
        // presence of patchFlag means children are guaranteed to be arrays
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) {
        // unkeyed
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    } // children has 3 possibilities: text, array or no children.


    if (shapeFlag & 8
    /* TEXT_CHILDREN */
    ) {
      // text children fast path
      if (prevShapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }

      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        // prev children was array
        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
          // two arrays, cannot assume anything, do full diff
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          // no new children, just unmount old
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        // prev children was text OR null
        // new children is array OR null
        if (prevShapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
          hostSetElementText(container, '');
        } // mount new if array


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };

  var patchUnkeyedChildren = function patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    var oldLength = c1.length;
    var newLength = c2.length;
    var commonLength = Math.min(oldLength, newLength);
    var i;

    for (i = 0; i < commonLength; i++) {
      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }

    if (oldLength > newLength) {
      // remove old
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      // mount new
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  }; // can be all-keyed or mixed


  var patchKeyedChildren = function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var i = 0;
    var l2 = c2.length;
    var e1 = c1.length - 1; // prev ending index

    var e2 = l2 - 1; // next ending index
    // 1. sync from start
    // (a b) c
    // (a b) d e

    while (i <= e1 && i <= e2) {
      var n1 = c1[i];
      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      i++;
    } // 2. sync from end
    // a (b c)
    // d e (b c)


    while (i <= e1 && i <= e2) {
      var _n2 = c1[e1];

      var _n3 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);

      if (isSameVNodeType(_n2, _n3)) {
        patch(_n2, _n3, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      e1--;
      e2--;
    } // 3. common sequence + mount
    // (a b)
    // (a b) c
    // i = 2, e1 = 1, e2 = 2
    // (a b)
    // c (a b)
    // i = 0, e1 = -1, e2 = 0


    if (i > e1) {
      if (i <= e2) {
        var nextPos = e2 + 1;
        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;

        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } // 4. common sequence + unmount
    // (a b) c
    // (a b)
    // i = 2, e1 = 2, e2 = 1
    // a (b c)
    // (b c)
    // i = 0, e1 = 0, e2 = -1
    else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } // 5. unknown sequence
    // [i ... e1 + 1]: a b [c d e] f g
    // [i ... e2 + 1]: a b [e d c h] f g
    // i = 2, e1 = 4, e2 = 5
    else {
      var s1 = i; // prev starting index

      var s2 = i; // next starting index
      // 5.1 build key:index map for newChildren

      var keyToNewIndexMap = new Map();

      for (i = s2; i <= e2; i++) {
        var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

        if (nextChild.key != null) {
          if ( true && keyToNewIndexMap.has(nextChild.key)) {
            warn("Duplicate keys found during update:", JSON.stringify(nextChild.key), "Make sure keys are unique.");
          }

          keyToNewIndexMap.set(nextChild.key, i);
        }
      } // 5.2 loop through old children left to be patched and try to patch
      // matching nodes & remove nodes that are no longer present


      var j;
      var patched = 0;
      var toBePatched = e2 - s2 + 1;
      var moved = false; // used to track whether any node has moved

      var maxNewIndexSoFar = 0; // works as Map<newIndex, oldIndex>
      // Note that oldIndex is offset by +1
      // and oldIndex = 0 is a special value indicating the new node has
      // no corresponding old node.
      // used for determining longest stable subsequence

      var newIndexToOldIndexMap = new Array(toBePatched);

      for (i = 0; i < toBePatched; i++) {
        newIndexToOldIndexMap[i] = 0;
      }

      for (i = s1; i <= e1; i++) {
        var prevChild = c1[i];

        if (patched >= toBePatched) {
          // all new children have been patched so this can only be a removal
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }

        var newIndex = void 0;

        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          // key-less node, try to locate a key-less node of the same type
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }

        if (newIndex === undefined) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;

          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }

          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      } // 5.3 move and mount
      // generate longest stable subsequence only when nodes have moved


      var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1; // looping backwards so that we can use last patched node as anchor

      for (i = toBePatched - 1; i >= 0; i--) {
        var nextIndex = s2 + i;
        var _nextChild = c2[nextIndex];

        var _anchor2 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;

        if (newIndexToOldIndexMap[i] === 0) {
          // mount new
          patch(null, _nextChild, container, _anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          // move if:
          // There is no stable subsequence (e.g. a reverse)
          // OR current node is not among the stable sequence
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(_nextChild, container, _anchor2, 2
            /* REORDER */
            );
          } else {
            j--;
          }
        }
      }
    }
  };

  var move = function move(vnode, container, anchor, moveType) {
    var parentSuspense = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var el = vnode.el,
        type = vnode.type,
        transition = vnode.transition,
        children = vnode.children,
        shapeFlag = vnode.shapeFlag;

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }

    if (shapeFlag & 128
    /* SUSPENSE */
    ) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
      type.move(vnode, container, anchor, internals);
      return;
    }

    if (type === Fragment) {
      hostInsert(el, container, anchor);

      for (var i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }

      hostInsert(vnode.anchor, container, anchor);
      return;
    }

    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    } // single nodes


    var needTransition = moveType !== 2
    /* REORDER */
    && shapeFlag & 1
    /* ELEMENT */
    && transition;

    if (needTransition) {
      if (moveType === 0
      /* ENTER */
      ) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(function () {
          return transition.enter(el);
        }, parentSuspense);
      } else {
        var leave = transition.leave,
            delayLeave = transition.delayLeave,
            afterLeave = transition.afterLeave;

        var _remove = function _remove() {
          return hostInsert(el, container, anchor);
        };

        var performLeave = function performLeave() {
          leave(el, function () {
            _remove();

            afterLeave && afterLeave();
          });
        };

        if (delayLeave) {
          delayLeave(el, _remove, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };

  var unmount = function unmount(vnode, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var type = vnode.type,
        props = vnode.props,
        ref = vnode.ref,
        children = vnode.children,
        dynamicChildren = vnode.dynamicChildren,
        shapeFlag = vnode.shapeFlag,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs; // unset ref

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode, true);
    }

    if (shapeFlag & 256
    /* COMPONENT_SHOULD_KEEP_ALIVE */
    ) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }

    var shouldInvokeDirs = shapeFlag & 1
    /* ELEMENT */
    && dirs;
    var shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    var vnodeHook;

    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128
      /* SUSPENSE */
      ) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }

      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
      }

      if (shapeFlag & 64
      /* TELEPORT */
      ) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && ( // #1153: fast path should not be taken for non-stable (v-for) fragments
      type !== Fragment || patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      )) {
        // fast path for block nodes: only need to unmount dynamic children.
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128
      /* KEYED_FRAGMENT */
      | 256
      /* UNKEYED_FRAGMENT */
      ) || !optimized && shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        unmountChildren(children, parentComponent, parentSuspense);
      }

      if (doRemove) {
        remove(vnode);
      }
    }

    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
      }, parentSuspense);
    }
  };

  var remove = function remove(vnode) {
    var type = vnode.type,
        el = vnode.el,
        anchor = vnode.anchor,
        transition = vnode.transition;

    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }

    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }

    var performRemove = function performRemove() {
      hostRemove(el);

      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };

    if (vnode.shapeFlag & 1
    /* ELEMENT */
    && transition && !transition.persisted) {
      var leave = transition.leave,
          delayLeave = transition.delayLeave;

      var performLeave = function performLeave() {
        return leave(el, performRemove);
      };

      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };

  var removeFragment = function removeFragment(cur, end) {
    // For fragments, directly remove all contained DOM nodes.
    // (fragment child nodes cannot have transition)
    var next;

    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }

    hostRemove(end);
  };

  var unmountComponent = function unmountComponent(instance, parentSuspense, doRemove) {
    if ( true && instance.type.__hmrId) {
      unregisterHMR(instance);
    }

    var bum = instance.bum,
        scope = instance.scope,
        update = instance.update,
        subTree = instance.subTree,
        um = instance.um; // beforeUnmount hook

    if (bum) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bum);
    } // stop effects in component scope


    scope.stop(); // update may be null if a component is unmounted before its async
    // setup has resolved.

    if (update) {
      // so that scheduler will no longer invoke it
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    } // unmounted hook


    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }

    queuePostRenderEffect(function () {
      instance.isUnmounted = true;
    }, parentSuspense); // A component with async dep inside a pending suspense is unmounted before
    // its async dep resolves. This should remove the dep from the suspense, and
    // cause the suspense to resolve immediately if that was the last dep.

    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;

      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }

    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };

  var unmountChildren = function unmountChildren(children, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var start = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    for (var i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };

  var getNextHostNode = function getNextHostNode(vnode) {
    if (vnode.shapeFlag & 6
    /* COMPONENT */
    ) {
      return getNextHostNode(vnode.component.subTree);
    }

    if (vnode.shapeFlag & 128
    /* SUSPENSE */
    ) {
      return vnode.suspense.next();
    }

    return hostNextSibling(vnode.anchor || vnode.el);
  };

  var render = function render(vnode, container, isSVG) {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }

    flushPostFlushCbs();
    container._vnode = vnode;
  };

  var internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  var hydrate;
  var hydrateNode;

  if (createHydrationFns) {
    var _createHydrationFns = createHydrationFns(internals);

    var _createHydrationFns2 = _slicedToArray(_createHydrationFns, 2);

    hydrate = _createHydrationFns2[0];
    hydrateNode = _createHydrationFns2[1];
  }

  return {
    render: render,
    hydrate: hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}

function toggleRecurse(_ref15, allowed) {
  var effect = _ref15.effect,
      update = _ref15.update;
  effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */


function traverseStaticChildren(n1, n2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ch1 = n1.children;
  var ch2 = n2.children;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch2)) {
    for (var i = 0; i < ch1.length; i++) {
      // this is only called in the optimized path so array children are
      // guaranteed to be vnodes
      var c1 = ch1[i];
      var c2 = ch2[i];

      if (c2.shapeFlag & 1
      /* ELEMENT */
      && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32
        /* HYDRATE_EVENTS */
        ) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }

        if (!shallow) traverseStaticChildren(c1, c2);
      } // also inherit for comment nodes, but not placeholders (e.g. v-if which
      // would have received .el during block patch)


      if ( true && c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
} // https://en.wikipedia.org/wiki/Longest_increasing_subsequence


function getSequence(arr) {
  var p = arr.slice();
  var result = [0];
  var i, j, u, v, c;
  var len = arr.length;

  for (i = 0; i < len; i++) {
    var arrI = arr[i];

    if (arrI !== 0) {
      j = result[result.length - 1];

      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }

      u = 0;
      v = result.length - 1;

      while (u < v) {
        c = u + v >> 1;

        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }

      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }

        result[u] = i;
      }
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

var isTeleport = function isTeleport(type) {
  return type.__isTeleport;
};

var isTeleportDisabled = function isTeleportDisabled(props) {
  return props && (props.disabled || props.disabled === '');
};

var isTargetSVG = function isTargetSVG(target) {
  return typeof SVGElement !== 'undefined' && target instanceof SVGElement;
};

var resolveTarget = function resolveTarget(props, select) {
  var targetSelector = props && props.to;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(targetSelector)) {
    if (!select) {
       true && warn("Current renderer does not support string target for Teleports. " + "(missing querySelector renderer option)");
      return null;
    } else {
      var target = select(targetSelector);

      if (!target) {
         true && warn("Failed to locate Teleport target with selector \"".concat(targetSelector, "\". ") + "Note the target element must exist before the component is mounted - " + "i.e. the target cannot be rendered by the component itself, and " + "ideally should be outside of the entire Vue component tree.");
      }

      return target;
    }
  } else {
    if ( true && !targetSelector && !isTeleportDisabled(props)) {
      warn("Invalid Teleport target: ".concat(targetSelector));
    }

    return targetSelector;
  }
};

var TeleportImpl = {
  __isTeleport: true,
  process: function (_process) {
    function process(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10) {
      return _process.apply(this, arguments);
    }

    process.toString = function () {
      return _process.toString();
    };

    return process;
  }(function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    var mountChildren = internals.mc,
        patchChildren = internals.pc,
        patchBlockChildren = internals.pbc,
        _internals$o = internals.o,
        insert = _internals$o.insert,
        querySelector = _internals$o.querySelector,
        createText = _internals$o.createText,
        createComment = _internals$o.createComment;
    var disabled = isTeleportDisabled(n2.props);
    var shapeFlag = n2.shapeFlag,
        children = n2.children,
        dynamicChildren = n2.dynamicChildren; // #3302
    // HMR updated, force full diff

    if ( true && isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      // insert anchors in the main view
      var placeholder = n2.el =  true ? createComment('teleport start') : 0;
      var mainAnchor = n2.anchor =  true ? createComment('teleport end') : 0;
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      var target = n2.target = resolveTarget(n2.props, querySelector);
      var targetAnchor = n2.targetAnchor = createText('');

      if (target) {
        insert(targetAnchor, target); // #2652 we could be teleporting from a non-SVG tree into an SVG tree

        isSVG = isSVG || isTargetSVG(target);
      } else if ( true && !disabled) {
        warn('Invalid Teleport target on mount:', target, "(".concat(_typeof(target), ")"));
      }

      var mount = function mount(container, anchor) {
        // Teleport *always* has Array children. This is enforced in both the
        // compiler and vnode children normalization.
        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
          mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      };

      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      // update content
      n2.el = n1.el;

      var _mainAnchor = n2.anchor = n1.anchor;

      var _target = n2.target = n1.target;

      var _targetAnchor = n2.targetAnchor = n1.targetAnchor;

      var wasDisabled = isTeleportDisabled(n1.props);
      var currentContainer = wasDisabled ? container : _target;
      var currentAnchor = wasDisabled ? _mainAnchor : _targetAnchor;
      isSVG = isSVG || isTargetSVG(_target);

      if (dynamicChildren) {
        // fast path when the teleport happens to be a block root
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds); // even in block tree mode we need to make sure all root-level nodes
        // in the teleport inherit previous DOM references so that they can
        // be moved in future patches.

        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
      }

      if (disabled) {
        if (!wasDisabled) {
          // enabled -> disabled
          // move into main container
          moveTeleport(n2, container, _mainAnchor, internals, 1
          /* TOGGLE */
          );
        }
      } else {
        // target changed
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          var nextTarget = n2.target = resolveTarget(n2.props, querySelector);

          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0
            /* TARGET_CHANGE */
            );
          } else if (true) {
            warn('Invalid Teleport target on update:', _target, "(".concat(_typeof(_target), ")"));
          }
        } else if (wasDisabled) {
          // disabled -> enabled
          // move into teleport target
          moveTeleport(n2, _target, _targetAnchor, internals, 1
          /* TOGGLE */
          );
        }
      }
    }
  }),
  remove: function remove(vnode, parentComponent, parentSuspense, optimized, _ref16, doRemove) {
    var unmount = _ref16.um,
        hostRemove = _ref16.o.remove;
    var shapeFlag = vnode.shapeFlag,
        children = vnode.children,
        anchor = vnode.anchor,
        targetAnchor = vnode.targetAnchor,
        target = vnode.target,
        props = vnode.props;

    if (target) {
      hostRemove(targetAnchor);
    } // an unmounted teleport should always remove its children if not disabled


    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);

      if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};

function moveTeleport(vnode, container, parentAnchor, _ref17) {
  var insert = _ref17.o.insert,
      move = _ref17.m;
  var moveType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;

  // move target anchor if this is a target change.
  if (moveType === 0
  /* TARGET_CHANGE */
  ) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }

  var el = vnode.el,
      anchor = vnode.anchor,
      shapeFlag = vnode.shapeFlag,
      children = vnode.children,
      props = vnode.props;
  var isReorder = moveType === 2
  /* REORDER */
  ; // move main view anchor if this is a re-order.

  if (isReorder) {
    insert(el, container, parentAnchor);
  } // if this is a re-order and teleport is enabled (content is in target)
  // do not move children. So the opposite is: only move children if this
  // is not a reorder, or the teleport is disabled


  if (!isReorder || isTeleportDisabled(props)) {
    // Teleport has either Array children or no children.
    if (shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
      for (var i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2
        /* REORDER */
        );
      }
    }
  } // move main view anchor if this is a re-order.


  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}

function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, _ref18, hydrateChildren) {
  var _ref18$o = _ref18.o,
      nextSibling = _ref18$o.nextSibling,
      parentNode = _ref18$o.parentNode,
      querySelector = _ref18$o.querySelector;
  var target = vnode.target = resolveTarget(vnode.props, querySelector);

  if (target) {
    // if multiple teleports rendered to the same target element, we need to
    // pick up from where the last teleport finished instead of the first node
    var targetNode = target._lpa || target.firstChild;

    if (vnode.shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }

      target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
    }
  }

  return vnode.anchor && nextSibling(vnode.anchor);
} // Force-casted public typing for h and TSX props inference


var Teleport = TeleportImpl;
var COMPONENTS = 'components';
var DIRECTIVES = 'directives';
/**
 * @private
 */

function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}

var NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */

function resolveDynamicComponent(component) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
/**
 * @private
 */


function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
} // implementation


function resolveAsset(type, name) {
  var warnMissing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var maybeSelfReference = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var instance = currentRenderingInstance || currentInstance;

  if (instance) {
    var Component = instance.type; // explicit self name has highest priority

    if (type === COMPONENTS) {
      var selfName = getComponentName(Component);

      if (selfName && (selfName === name || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name) || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)))) {
        return Component;
      }
    }

    var res = // local registration
    // check instance[type] first which is resolved for options API
    resolve(instance[type] || Component[type], name) || // global registration
    resolve(instance.appContext[type], name);

    if (!res && maybeSelfReference) {
      // fallback to implicit self-reference
      return Component;
    }

    if ( true && warnMissing && !res) {
      var extra = type === COMPONENTS ? "\nIf this is a native custom element, make sure to exclude it from " + "component resolution via compilerOptions.isCustomElement." : "";
      warn("Failed to resolve ".concat(type.slice(0, -1), ": ").concat(name).concat(extra));
    }

    return res;
  } else if (true) {
    warn("resolve".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type.slice(0, -1)), " ") + "can only be used in render() or setup().");
  }
}

function resolve(registry, name) {
  return registry && (registry[name] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name))]);
}

var Fragment = Symbol( true ? 'Fragment' : 0);
var Text = Symbol( true ? 'Text' : 0);
var Comment = Symbol( true ? 'Comment' : 0);
var Static = Symbol( true ? 'Static' : 0); // Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).

var blockStack = [];
var currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */

function openBlock() {
  var disableTracking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  blockStack.push(currentBlock = disableTracking ? null : []);
}

function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
} // Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)


var isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */

function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}

function setupBlock(vnode) {
  // save current block children on the block vnode
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR : null; // close block

  closeBlock(); // a block is always going to be patched, so track it as a child of its
  // parent block

  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }

  return vnode;
}
/**
 * @private
 */


function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true
  /* isBlock */
  ));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */


function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true
  /* isBlock: prevent a block from tracking itself */
  ));
}

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

function isSameVNodeType(n1, n2) {
  if ( true && n2.shapeFlag & 6
  /* COMPONENT */
  && hmrDirtyComponents.has(n2.type)) {
    // HMR only: if the component has been hot-updated, force a reload.
    return false;
  }

  return n1.type === n2.type && n1.key === n2.key;
}

var vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */

function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}

var createVNodeWithArgsTransform = function createVNodeWithArgsTransform() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key15 = 0; _key15 < _len7; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return _createVNode.apply(void 0, _toConsumableArray(vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args));
};

var InternalObjectKey = "__vInternal";

var normalizeKey = function normalizeKey(_ref19) {
  var key = _ref19.key;
  return key != null ? key : null;
};

var normalizeRef = function normalizeRef(_ref20) {
  var ref = _ref20.ref,
      ref_key = _ref20.ref_key,
      ref_for = _ref20.ref_for;
  return ref != null ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref) ? {
    i: currentRenderingInstance,
    r: ref,
    k: ref_key,
    f: !!ref_for
  } : ref : null;
};

function createBaseVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var shapeFlag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : type === Fragment ? 0 : 1;
  var isBlockNode = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var needFullChildrenNormalization = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type,
    props: props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children: children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: shapeFlag,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    dynamicChildren: null,
    appContext: null
  };

  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children); // normalize suspense children

    if (shapeFlag & 128
    /* SUSPENSE */
    ) {
      type.normalize(vnode);
    }
  } else if (children) {
    // compiled element vnode - if children is passed, only possible types are
    // string or Array.
    vnode.shapeFlag |= (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(children) ? 8
    /* TEXT_CHILDREN */
    : 16
    /* ARRAY_CHILDREN */
    ;
  } // validate key


  if ( true && vnode.key !== vnode.key) {
    warn("VNode created with invalid key (NaN). VNode type:", vnode.type);
  } // track vnode for block tree


  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && ( // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  vnode.patchFlag > 0 || shapeFlag & 6
  /* COMPONENT */
  ) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32
  /* HYDRATE_EVENTS */
  ) {
    currentBlock.push(vnode);
  }

  return vnode;
}

var createVNode =  true ? createVNodeWithArgsTransform : 0;

function _createVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if ( true && !type) {
      warn("Invalid vnode type when creating vnode: ".concat(type, "."));
    }

    type = Comment;
  }

  if (isVNode(type)) {
    // createVNode receiving an existing vnode. This happens in cases like
    // <component :is="vnode"/>
    // #2078 make sure to merge refs during the clone instead of overwriting it
    var cloned = cloneVNode(type, props, true
    /* mergeRef: true */
    );

    if (children) {
      normalizeChildren(cloned, children);
    }

    return cloned;
  } // class component normalization.


  if (isClassComponent(type)) {
    type = type.__vccOpts;
  } // class & style normalization.


  if (props) {
    // for reactive or proxy objects, we need to clone it to enable mutation.
    props = guardReactiveProps(props);
    var _props = props,
        klass = _props["class"],
        style = _props.style;

    if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(klass)) {
      props["class"] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(klass);
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(style)) {
      // reactive state objects need to be cloned since they are likely to be
      // mutated
      if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(style)) {
        style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, style);
      }

      props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(style);
    }
  } // encode the vnode type information into a bitmap


  var shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(type) ? 1
  /* ELEMENT */
  : isSuspense(type) ? 128
  /* SUSPENSE */
  : isTeleport(type) ? 64
  /* TELEPORT */
  : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(type) ? 4
  /* STATEFUL_COMPONENT */
  : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type) ? 2
  /* FUNCTIONAL_COMPONENT */
  : 0;

  if ( true && shapeFlag & 4
  /* STATEFUL_COMPONENT */
  && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(type)) {
    type = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(type);
    warn("Vue received a Component which was made a reactive object. This can " + "lead to unnecessary performance overhead, and should be avoided by " + "marking the component with `markRaw` or using `shallowRef` " + "instead of `ref`.", "\nComponent that was made reactive: ", type);
  }

  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}

function guardReactiveProps(props) {
  if (!props) return null;
  return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(props) || InternalObjectKey in props ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, props) : props;
}

function cloneVNode(vnode, extraProps) {
  var mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // This is intentionally NOT using spread or extend to avoid the runtime
  // key enumeration cost.
  var props = vnode.props,
      ref = vnode.ref,
      patchFlag = vnode.patchFlag,
      children = vnode.children;
  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  var cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
    // if the vnode itself already has a ref, cloneVNode will need to merge
    // the refs so the single vnode can be set on multiple refs
    mergeRef && ref ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:  true && patchFlag === -1
    /* HOISTED */
    && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
    ? 16
    /* FULL_PROPS */
    : patchFlag | 16
    /* FULL_PROPS */
    : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */


function deepCloneVNode(vnode) {
  var cloned = cloneVNode(vnode);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }

  return cloned;
}
/**
 * @private
 */


function createTextVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}
/**
 * @private
 */


function createStaticVNode(content, numberOfNodes) {
  // A static vnode can contain multiple stringified elements, and the number
  // of elements is necessary for hydration.
  var vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
/**
 * @private
 */


function createCommentVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var asBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}

function normalizeVNode(child) {
  if (child == null || typeof child === 'boolean') {
    // empty placeholder
    return createVNode(Comment);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(child)) {
    // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
  } else if (_typeof(child) === 'object') {
    // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
  } else {
    // strings and numbers
    return createVNode(Text, null, String(child));
  }
} // optimized normalization for template-compiled render fns


function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}

function normalizeChildren(vnode, children) {
  var type = 0;
  var shapeFlag = vnode.shapeFlag;

  if (children == null) {
    children = null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children)) {
    type = 16
    /* ARRAY_CHILDREN */
    ;
  } else if (_typeof(children) === 'object') {
    if (shapeFlag & (1
    /* ELEMENT */
    | 64
    /* TELEPORT */
    )) {
      // Normalize slot to plain children for plain element and Teleport
      var slot = children["default"];

      if (slot) {
        // _c marker is added by withCtx() indicating this is a compiled slot
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }

      return;
    } else {
      type = 32
      /* SLOTS_CHILDREN */
      ;
      var slotFlag = children._;

      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3
      /* FORWARDED */
      && currentRenderingInstance) {
        // a child component receives forwarded slots from the parent.
        // its slot type is determined by its parent's slot type.
        if (currentRenderingInstance.slots._ === 1
        /* STABLE */
        ) {
          children._ = 1
          /* STABLE */
          ;
        } else {
          children._ = 2
          /* DYNAMIC */
          ;
          vnode.patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      }
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children)) {
    children = {
      "default": children,
      _ctx: currentRenderingInstance
    };
    type = 32
    /* SLOTS_CHILDREN */
    ;
  } else {
    children = String(children); // force teleport children to array so it can be moved around

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
      type = 16
      /* ARRAY_CHILDREN */
      ;
      children = [createTextVNode(children)];
    } else {
      type = 8
      /* TEXT_CHILDREN */
      ;
    }
  }

  vnode.children = children;
  vnode.shapeFlag |= type;
}

function mergeProps() {
  var ret = {};

  for (var i = 0; i < arguments.length; i++) {
    var toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (var key in toMerge) {
      if (key === 'class') {
        if (ret["class"] !== toMerge["class"]) {
          ret["class"] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([ret["class"], toMerge["class"]]);
        }
      } else if (key === 'style') {
        ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)([ret.style, toMerge.style]);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        var existing = ret[key];
        var incoming = toMerge[key];

        if (incoming && existing !== incoming && !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== '') {
        ret[key] = toMerge[key];
      }
    }
  }

  return ret;
}

function invokeVNodeHook(hook, instance, vnode) {
  var prevVNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  callWithAsyncErrorHandling(hook, instance, 7
  /* VNODE_HOOK */
  , [vnode, prevVNode]);
}
/**
 * Actual implementation
 */


function renderList(source, renderItem, cache, index) {
  var ret;
  var cached = cache && cache[index];

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)) {
    ret = new Array(source.length);

    for (var i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
    }
  } else if (typeof source === 'number') {
    if ( true && !Number.isInteger(source)) {
      warn("The v-for range expect an integer value but got ".concat(source, "."));
      return [];
    }

    ret = new Array(source);

    for (var _i3 = 0; _i3 < source; _i3++) {
      ret[_i3] = renderItem(_i3 + 1, _i3, undefined, cached && cached[_i3]);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, function (item, i) {
        return renderItem(item, i, undefined, cached && cached[i]);
      });
    } else {
      var keys = Object.keys(source);
      ret = new Array(keys.length);

      for (var _i4 = 0, _l = keys.length; _i4 < _l; _i4++) {
        var key = keys[_i4];
        ret[_i4] = renderItem(source[key], key, _i4, cached && cached[_i4]);
      }
    }
  } else {
    ret = [];
  }

  if (cache) {
    cache[index] = ret;
  }

  return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */


function createSlots(slots, dynamicSlots) {
  for (var i = 0; i < dynamicSlots.length; i++) {
    var slot = dynamicSlots[i]; // array of dynamic slot generated by <template v-for="..." #[...]>

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(slot)) {
      for (var j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      // conditional single slot generated by <template v-if="..." #foo>
      slots[slot.name] = slot.fn;
    }
  }

  return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */


function renderSlot(slots, name) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var // this is not a user-facing function, so the fallback is always generated by
  // the compiler and guaranteed to be a function returning an array
  fallback = arguments.length > 3 ? arguments[3] : undefined;
  var noSlotted = arguments.length > 4 ? arguments[4] : undefined;

  if (currentRenderingInstance.isCE) {
    return createVNode('slot', name === 'default' ? null : {
      name: name
    }, fallback && fallback());
  }

  var slot = slots[name];

  if ( true && slot && slot.length > 1) {
    warn("SSR-optimized slot function detected in a non-SSR-optimized render " + "function. You need to mark this component with $dynamic-slots in the " + "parent template.");

    slot = function slot() {
      return [];
    };
  } // a compiled slot disables block tracking by default to avoid manual
  // invocation interfering with template-based block tracking, but in
  // `renderSlot` we can be sure that it's template-based so we can force
  // enable it.


  if (slot && slot._c) {
    slot._d = false;
  }

  openBlock();
  var validSlotContent = slot && ensureValidVNode(slot(props));
  var rendered = createBlock(Fragment, {
    key: props.key || "_".concat(name)
  }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1
  /* STABLE */
  ? 64
  /* STABLE_FRAGMENT */
  : -2
  /* BAIL */
  );

  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + '-s'];
  }

  if (slot && slot._c) {
    slot._d = true;
  }

  return rendered;
}

function ensureValidVNode(vnodes) {
  return vnodes.some(function (child) {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */


function toHandlers(obj) {
  var ret = {};

  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
    warn("v-on with no argument expects an object value.");
    return ret;
  }

  for (var key in obj) {
    ret[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(key)] = obj[key];
  }

  return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */


var getPublicInstance = function getPublicInstance(i) {
  if (!i) return null;
  if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};

var publicPropertiesMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), {
  $: function $(i) {
    return i;
  },
  $el: function $el(i) {
    return i.vnode.el;
  },
  $data: function $data(i) {
    return i.data;
  },
  $props: function $props(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.props) : 0;
  },
  $attrs: function $attrs(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.attrs) : 0;
  },
  $slots: function $slots(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.slots) : 0;
  },
  $refs: function $refs(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.refs) : 0;
  },
  $parent: function $parent(i) {
    return getPublicInstance(i.parent);
  },
  $root: function $root(i) {
    return getPublicInstance(i.root);
  },
  $emit: function $emit(i) {
    return i.emit;
  },
  $options: function $options(i) {
    return __VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type;
  },
  $forceUpdate: function $forceUpdate(i) {
    return function () {
      return queueJob(i.update);
    };
  },
  $nextTick: function $nextTick(i) {
    return nextTick.bind(i.proxy);
  },
  $watch: function $watch(i) {
    return __VUE_OPTIONS_API__ ? instanceWatch.bind(i) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
  }
});
var PublicInstanceProxyHandlers = {
  get: function get(_ref21, key) {
    var instance = _ref21._;
    var ctx = instance.ctx,
        setupState = instance.setupState,
        data = instance.data,
        props = instance.props,
        accessCache = instance.accessCache,
        type = instance.type,
        appContext = instance.appContext; // for internal formatters to know that this is a Vue instance

    if ( true && key === '__isVue') {
      return true;
    } // prioritize <script setup> bindings during dev.
    // this allows even properties that start with _ or $ to be used - so that
    // it aligns with the production behavior where the render fn is inlined and
    // indeed has access to all declared variables.


    if ( true && setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && setupState.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
      return setupState[key];
    } // data / props / ctx
    // This getter gets called for every property access on the render context
    // during render and is a major hotspot. The most expensive part of this
    // is the multiple hasOwn() calls. It's much faster to do a simple property
    // access on a plain object, so we use an accessCache object (with null
    // prototype) to memoize what access type a key corresponds to.


    var normalizedProps;

    if (key[0] !== '$') {
      var n = accessCache[key];

      if (n !== undefined) {
        switch (n) {
          case 1
          /* SETUP */
          :
            return setupState[key];

          case 2
          /* DATA */
          :
            return data[key];

          case 4
          /* CONTEXT */
          :
            return ctx[key];

          case 3
          /* PROPS */
          :
            return props[key];
          // default: just fallthrough
        }
      } else if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
        accessCache[key] = 1
        /* SETUP */
        ;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        accessCache[key] = 2
        /* DATA */
        ;
        return data[key];
      } else if ( // only cache other properties when instance has declared (thus stable)
      // props
      (normalizedProps = instance.propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)) {
        accessCache[key] = 3
        /* PROPS */
        ;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
        accessCache[key] = 4
        /* CONTEXT */
        ;
        return ctx[key];
      } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
        accessCache[key] = 0
        /* OTHER */
        ;
      }
    }

    var publicGetter = publicPropertiesMap[key];
    var cssModule, globalProperties; // public $xxx properties

    if (publicGetter) {
      if (key === '$attrs') {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get"
        /* GET */
        , key);
         true && markAttrsAccessed();
      }

      return publicGetter(instance);
    } else if ( // css module (injected by vue-loader)
    (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
      // user may set custom properties to `this` that start with `$`
      accessCache[key] = 4
      /* CONTEXT */
      ;
      return ctx[key];
    } else if ( // global properties
    globalProperties = appContext.config.globalProperties, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if ( true && currentRenderingInstance && (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf('__v') !== 0)) {
      if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (key[0] === '$' || key[0] === '_') && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        warn("Property ".concat(JSON.stringify(key), " must be accessed via $data because it starts with a reserved ") + "character (\"$\" or \"_\") and is not proxied on the render context.");
      } else if (instance === currentRenderingInstance) {
        warn("Property ".concat(JSON.stringify(key), " was accessed during render ") + "but is not defined on instance.");
      }
    }
  },
  set: function set(_ref22, key, value) {
    var instance = _ref22._;
    var data = instance.data,
        setupState = instance.setupState,
        ctx = instance.ctx;

    if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
      setupState[key] = value;
    } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
      data[key] = value;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(instance.props, key)) {
       true && warn("Attempting to mutate prop \"".concat(key, "\". Props are readonly."), instance);
      return false;
    }

    if (key[0] === '$' && key.slice(1) in instance) {
       true && warn("Attempting to mutate public property \"".concat(key, "\". ") + "Properties starting with $ are reserved and readonly.", instance);
      return false;
    } else {
      if ( true && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value: value
        });
      } else {
        ctx[key] = value;
      }
    }

    return true;
  },
  has: function has(_ref23, key) {
    var _ref23$_ = _ref23._,
        data = _ref23$_.data,
        setupState = _ref23$_.setupState,
        accessCache = _ref23$_.accessCache,
        ctx = _ref23$_.ctx,
        appContext = _ref23$_.appContext,
        propsOptions = _ref23$_.propsOptions;
    var normalizedProps;
    return !!accessCache[key] || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key) || setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key) || (normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(publicPropertiesMap, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(appContext.config.globalProperties, key);
  }
};

if (true) {
  PublicInstanceProxyHandlers.ownKeys = function (target) {
    warn("Avoid app logic that relies on enumerating keys on a component instance. " + "The keys will be empty in production mode to avoid performance overhead.");
    return Reflect.ownKeys(target);
  };
}

var RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, PublicInstanceProxyHandlers, {
  get: function get(target, key) {
    // fast path for unscopables when using `with` block
    if (key === Symbol.unscopables) {
      return;
    }

    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has: function has(_, key) {
    var has = key[0] !== '_' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isGloballyWhitelisted)(key);

    if ( true && !has && PublicInstanceProxyHandlers.has(_, key)) {
      warn("Property ".concat(JSON.stringify(key), " should not start with _ which is a reserved prefix for Vue internals."));
    }

    return has;
  }
}); // dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.

function createDevRenderContext(instance) {
  var target = {}; // expose internal instance for proxy handlers

  Object.defineProperty(target, "_", {
    configurable: true,
    enumerable: false,
    get: function get() {
      return instance;
    }
  }); // expose public properties

  Object.keys(publicPropertiesMap).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return publicPropertiesMap[key](instance);
      },
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
    });
  });
  return target;
} // dev only


function exposePropsOnRenderContext(instance) {
  var ctx = instance.ctx,
      _instance$propsOption6 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption6[0];

  if (propsOptions) {
    Object.keys(propsOptions).forEach(function (key) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return instance.props[key];
        },
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    });
  }
} // dev only


function exposeSetupStateOnRenderContext(instance) {
  var ctx = instance.ctx,
      setupState = instance.setupState;
  Object.keys((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(setupState)).forEach(function (key) {
    if (!setupState.__isScriptSetup) {
      if (key[0] === '$' || key[0] === '_') {
        warn("setup() return property ".concat(JSON.stringify(key), " should not start with \"$\" or \"_\" ") + "which are reserved prefixes for Vue internals.");
        return;
      }

      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return setupState[key];
        },
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    }
  });
}

var emptyAppContext = createAppContext();
var uid$1 = 0;

function createComponentInstance(vnode, parent, suspense) {
  var type = vnode.type; // inherit parent app context - or - if root, adopt from root vnode

  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  var instance = {
    uid: uid$1++,
    vnode: vnode,
    type: type,
    parent: parent,
    appContext: appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EffectScope(true
    /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resovled assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense: suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };

  if (true) {
    instance.ctx = createDevRenderContext(instance);
  } else {}

  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance); // apply custom element special handling

  if (vnode.ce) {
    vnode.ce(instance);
  }

  return instance;
}

var currentInstance = null;

var getCurrentInstance = function getCurrentInstance() {
  return currentInstance || currentRenderingInstance;
};

var setCurrentInstance = function setCurrentInstance(instance) {
  currentInstance = instance;
  instance.scope.on();
};

var unsetCurrentInstance = function unsetCurrentInstance() {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};

var isBuiltInTag = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('slot,component');

function validateComponentName(name, config) {
  var appIsNativeTag = config.isNativeTag || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO;

  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component id: ' + name);
  }
}

function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ;
}

var isInSSRComponentSetup = false;

function setupComponent(instance) {
  var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  isInSSRComponentSetup = isSSR;
  var _instance$vnode = instance.vnode,
      props = _instance$vnode.props,
      children = _instance$vnode.children;
  var isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
  isInSSRComponentSetup = false;
  return setupResult;
}

function setupStatefulComponent(instance, isSSR) {
  var Component = instance.type;

  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }

    if (Component.components) {
      var names = Object.keys(Component.components);

      for (var i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }

    if (Component.directives) {
      var _names = Object.keys(Component.directives);

      for (var _i5 = 0; _i5 < _names.length; _i5++) {
        validateDirectiveName(_names[_i5]);
      }
    }

    if (Component.compilerOptions && isRuntimeOnly()) {
      warn("\"compilerOptions\" is only supported when using a build of Vue that " + "includes the runtime compiler. Since you are using a runtime-only " + "build, the options should be passed via your build tool config instead.");
    }
  } // 0. create render proxy property access cache


  instance.accessCache = Object.create(null); // 1. create public instance / render proxy
  // also mark it raw so it's never observed

  instance.proxy = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(new Proxy(instance.ctx, PublicInstanceProxyHandlers));

  if (true) {
    exposePropsOnRenderContext(instance);
  } // 2. call setup()


  var setup = Component.setup;

  if (setup) {
    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    var setupResult = callWithErrorHandling(setup, instance, 0
    /* SETUP_FUNCTION */
    , [ true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.props) : 0, setupContext]);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    unsetCurrentInstance();

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);

      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult.then(function (resolvedResult) {
          handleSetupResult(instance, resolvedResult, isSSR);
        })["catch"](function (e) {
          handleError(e, instance, 0
          /* SETUP_FUNCTION */
          );
        });
      } else {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}

function handleSetupResult(instance, setupResult, isSSR) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(setupResult)) {
    // setup returned an inline render function
    if (instance.type.__ssrInlineRender) {
      // when the function's name is `ssrRender` (compiled by SFC inline mode),
      // set it as ssrRender instead.
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(setupResult)) {
    if ( true && isVNode(setupResult)) {
      warn("setup() should not return VNodes directly - " + "return a render function instead.");
    } // setup returned bindings.
    // assuming a render function compiled from template is present.


    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }

    instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(setupResult);

    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if ( true && setupResult !== undefined) {
    warn("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : _typeof(setupResult)));
  }

  finishComponentSetup(instance, isSSR);
}

var compile;
var installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */

function registerRuntimeCompiler(_compile) {
  compile = _compile;

  installWithProxy = function installWithProxy(i) {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
} // dev only


var isRuntimeOnly = function isRuntimeOnly() {
  return !compile;
};

function finishComponentSetup(instance, isSSR, skipOptions) {
  var Component = instance.type; // template / render function normalization
  // could be already set when returned from setup()

  if (!instance.render) {
    // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
    // is done by server-renderer
    if (!isSSR && compile && !Component.render) {
      var template = Component.template;

      if (template) {
        if (true) {
          startMeasure(instance, "compile");
        }

        var _instance$appContext$ = instance.appContext.config,
            isCustomElement = _instance$appContext$.isCustomElement,
            compilerOptions = _instance$appContext$.compilerOptions;
        var delimiters = Component.delimiters,
            componentCompilerOptions = Component.compilerOptions;
        var finalCompilerOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
          isCustomElement: isCustomElement,
          delimiters: delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);

        if (true) {
          endMeasure(instance, "compile");
        }
      }
    }

    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP; // for runtime-compiled render functions using `with` blocks, the render
    // proxy used needs a different `has` handler which is more performant and
    // also only allows a whitelist of globals to fallthrough.

    if (installWithProxy) {
      installWithProxy(instance);
    }
  } // support for 2.x options


  if (__VUE_OPTIONS_API__ && !false) {
    setCurrentInstance(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    applyOptions(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    unsetCurrentInstance();
  } // warn missing template/render
  // the runtime compilation of template in SSR is done by server-render


  if ( true && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP && !isSSR) {
    /* istanbul ignore if */
    if (!compile && Component.template) {
      warn("Component provided template option but " + "runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"."
      /* should not happen */
      );
    } else {
      warn("Component is missing template or render function.");
    }
  }
}

function createAttrsProxy(instance) {
  return new Proxy(instance.attrs,  true ? {
    get: function get(target, key) {
      markAttrsAccessed();
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get"
      /* GET */
      , '$attrs');
      return target[key];
    },
    set: function set() {
      warn("setupContext.attrs is readonly.");
      return false;
    },
    deleteProperty: function deleteProperty() {
      warn("setupContext.attrs is readonly.");
      return false;
    }
  } : 0);
}

function createSetupContext(instance) {
  var expose = function expose(exposed) {
    if ( true && instance.exposed) {
      warn("expose() should be called only once per setup().");
    }

    instance.exposed = exposed || {};
  };

  var attrs;

  if (true) {
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },

      get slots() {
        return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.slots);
      },

      get emit() {
        return function (event) {
          for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key16 = 1; _key16 < _len8; _key16++) {
            args[_key16 - 1] = arguments[_key16];
          }

          return instance.emit.apply(instance, [event].concat(args));
        };
      },

      expose: expose
    });
  } else {}
}

function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(instance.exposed)), {
      get: function get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};

function getComponentName(Component) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Component) ? Component.displayName || Component.name : Component.name;
}
/* istanbul ignore next */


function formatComponentName(instance, Component) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = getComponentName(Component);

  if (!name && Component.__file) {
    var match = Component.__file.match(/([^/\\]+)\.\w+$/);

    if (match) {
      name = match[1];
    }
  }

  if (!name && instance && instance.parent) {
    // try to infer the name based on reverse resolution
    var inferFromRegistry = function inferFromRegistry(registry) {
      for (var key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };

    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }

  return name ? classify(name) : isRoot ? "App" : "Anonymous";
}

function isClassComponent(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && '__vccOpts' in value;
}

var computed = function computed(getterOrOptions, debugOptions) {
  // @ts-ignore
  return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.computed)(getterOrOptions, debugOptions, isInSSRComponentSetup);
}; // dev only


var warnRuntimeUsage = function warnRuntimeUsage(method) {
  return warn("".concat(method, "() is a compiler-hint helper that is only usable inside ") + "<script setup> of a single file component. Its arguments should be " + "compiled away and passing it at runtime has no effect.");
}; // implementation


function defineProps() {
  if (true) {
    warnRuntimeUsage("defineProps");
  }

  return null;
} // implementation


function defineEmits() {
  if (true) {
    warnRuntimeUsage("defineEmits");
  }

  return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */


function defineExpose(exposed) {
  if (true) {
    warnRuntimeUsage("defineExpose");
  }
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */


function withDefaults(props, defaults) {
  if (true) {
    warnRuntimeUsage("withDefaults");
  }

  return null;
}

function useSlots() {
  return getContext().slots;
}

function useAttrs() {
  return getContext().attrs;
}

function getContext() {
  var i = getCurrentInstance();

  if ( true && !i) {
    warn("useContext() called without active instance.");
  }

  return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */


function mergeDefaults(raw, defaults) {
  var props = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw) ? raw.reduce(function (normalized, p) {
    return normalized[p] = {}, normalized;
  }, {}) : raw;

  for (var key in defaults) {
    var opt = props[key];

    if (opt) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt)) {
        props[key] = {
          type: opt,
          "default": defaults[key]
        };
      } else {
        opt["default"] = defaults[key];
      }
    } else if (opt === null) {
      props[key] = {
        "default": defaults[key]
      };
    } else if (true) {
      warn("props default key \"".concat(key, "\" has no corresponding declaration."));
    }
  }

  return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */


function createPropsRestProxy(props, excludedKeys) {
  var ret = {};

  var _loop4 = function _loop4(key) {
    if (!excludedKeys.includes(key)) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        get: function get() {
          return props[key];
        }
      });
    }
  };

  for (var key in props) {
    _loop4(key);
  }

  return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */


function withAsyncContext(getAwaitable) {
  var ctx = getCurrentInstance();

  if ( true && !ctx) {
    warn("withAsyncContext called without active current instance. " + "This is likely a bug.");
  }

  var awaitable = getAwaitable();
  unsetCurrentInstance();

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(awaitable)) {
    awaitable = awaitable["catch"](function (e) {
      setCurrentInstance(ctx);
      throw e;
    });
  }

  return [awaitable, function () {
    return setCurrentInstance(ctx);
  }];
} // Actual implementation


function h(type, propsOrChildren, children) {
  var l = arguments.length;

  if (l === 2) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propsOrChildren)) {
      // single vnode without props
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      } // props without children


      return createVNode(type, propsOrChildren);
    } else {
      // omit props
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }

    return createVNode(type, propsOrChildren, children);
  }
}

var ssrContextKey = Symbol( true ? "ssrContext" : 0);

var useSSRContext = function useSSRContext() {
  {
    var ctx = inject(ssrContextKey);

    if (!ctx) {
      warn("Server rendering context not provided. Make sure to only call " + "useSSRContext() conditionally in the server build.");
    }

    return ctx;
  }
};

function isShallow(value) {
  return !!(value && value["__v_isShallow"
  /* IS_SHALLOW */
  ]);
}

function initCustomFormatter() {
  /* eslint-disable no-restricted-globals */
  if ( false || typeof window === 'undefined') {
    return;
  }

  var vueStyle = {
    style: 'color:#3ba776'
  };
  var numberStyle = {
    style: 'color:#0b1bc9'
  };
  var stringStyle = {
    style: 'color:#b62e24'
  };
  var keywordStyle = {
    style: 'color:#9d288c'
  }; // custom formatter for Chrome
  // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html

  var formatter = {
    header: function header(obj) {
      // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        return null;
      }

      if (obj.__isVue) {
        return ['div', vueStyle, "VueInstance"];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(obj)) {
        return ['div', {}, ['span', vueStyle, genRefFlag(obj)], '<', formatValue(obj.value), ">"];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(obj)) {
        return ['div', {}, ['span', vueStyle, isShallow(obj) ? 'ShallowReactive' : 'Reactive'], '<', formatValue(obj), ">".concat((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj) ? " (readonly)" : "")];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj)) {
        return ['div', {}, ['span', vueStyle, isShallow(obj) ? 'ShallowReadonly' : 'Readonly'], '<', formatValue(obj), '>'];
      }

      return null;
    },
    hasBody: function hasBody(obj) {
      return obj && obj.__isVue;
    },
    body: function body(obj) {
      if (obj && obj.__isVue) {
        return ['div', {}].concat(_toConsumableArray(formatInstance(obj.$)));
      }
    }
  };

  function formatInstance(instance) {
    var blocks = [];

    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock('props', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.props)));
    }

    if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock('setup', instance.setupState));
    }

    if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock('data', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data)));
    }

    var computed = extractKeys(instance, 'computed');

    if (computed) {
      blocks.push(createInstanceBlock('computed', computed));
    }

    var injected = extractKeys(instance, 'inject');

    if (injected) {
      blocks.push(createInstanceBlock('injected', injected));
    }

    blocks.push(['div', {}, ['span', {
      style: keywordStyle.style + ';opacity:0.66'
    }, '$ (internal): '], ['object', {
      object: instance
    }]]);
    return blocks;
  }

  function createInstanceBlock(type, target) {
    target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, target);

    if (!Object.keys(target).length) {
      return ['span', {}];
    }

    return ['div', {
      style: 'line-height:1.25em;margin-bottom:0.6em'
    }, ['div', {
      style: 'color:#476582'
    }, type], ['div', {
      style: 'padding-left:1.25em'
    }].concat(_toConsumableArray(Object.keys(target).map(function (key) {
      return ['div', {}, ['span', keywordStyle, key + ': '], formatValue(target[key], false)];
    })))];
  }

  function formatValue(v) {
    var asRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof v === 'number') {
      return ['span', numberStyle, v];
    } else if (typeof v === 'string') {
      return ['span', stringStyle, JSON.stringify(v)];
    } else if (typeof v === 'boolean') {
      return ['span', keywordStyle, v];
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(v)) {
      return ['object', {
        object: asRaw ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(v) : v
      }];
    } else {
      return ['span', stringStyle, String(v)];
    }
  }

  function extractKeys(instance, type) {
    var Comp = instance.type;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Comp)) {
      return;
    }

    var extracted = {};

    for (var key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }

    return extracted;
  }

  function isKeyOfType(Comp, key, type) {
    var opts = Comp[type];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opts) && opts.includes(key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opts) && key in opts) {
      return true;
    }

    if (Comp["extends"] && isKeyOfType(Comp["extends"], key, type)) {
      return true;
    }

    if (Comp.mixins && Comp.mixins.some(function (m) {
      return isKeyOfType(m, key, type);
    })) {
      return true;
    }
  }

  function genRefFlag(v) {
    if (isShallow(v)) {
      return "ShallowRef";
    }

    if (v.effect) {
      return "ComputedRef";
    }

    return "Ref";
  }

  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}

function withMemo(memo, render, cache, index) {
  var cached = cache[index];

  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }

  var ret = render(); // shallow clone

  ret.memo = memo.slice();
  return cache[index] = ret;
}

function isMemoSame(cached, memo) {
  var prev = cached.memo;

  if (prev.length != memo.length) {
    return false;
  }

  for (var i = 0; i < prev.length; i++) {
    if (prev[i] !== memo[i]) {
      return false;
    }
  } // make sure to let parent block track it when returning cached


  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }

  return true;
} // Core API ------------------------------------------------------------------


var version = "3.2.29";
var _ssrUtils = {
  createComponentInstance: createComponentInstance,
  setupComponent: setupComponent,
  renderComponentRoot: renderComponentRoot,
  setCurrentRenderingInstance: setCurrentRenderingInstance,
  isVNode: isVNode,
  normalizeVNode: normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */

var ssrUtils = _ssrUtils;
/**
 * @internal only exposed in compat builds
 */

var resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */

var compatUtils = null;


/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "EffectScope": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "ReactiveEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createElementBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   "createElementVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createPropsRestProxy": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineEmits": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   "defineExpose": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "effect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   "effectScope": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "guardReactiveProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isMemoSame": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isShallow": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "normalizeClass": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   "normalizeProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "stop": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDefaults": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withMemo": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "TransitionGroup": () => (/* binding */ TransitionGroup),
/* harmony export */   "VueElement": () => (/* binding */ VueElement),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "createSSRApp": () => (/* binding */ createSSRApp),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement),
/* harmony export */   "defineSSRCustomElement": () => (/* binding */ defineSSRCustomElement),
/* harmony export */   "hydrate": () => (/* binding */ hydrate),
/* harmony export */   "initDirectivesForSSR": () => (/* binding */ initDirectivesForSSR),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "useCssModule": () => (/* binding */ useCssModule),
/* harmony export */   "useCssVars": () => (/* binding */ useCssVars),
/* harmony export */   "vModelCheckbox": () => (/* binding */ vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* binding */ vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* binding */ vModelRadio),
/* harmony export */   "vModelSelect": () => (/* binding */ vModelSelect),
/* harmony export */   "vModelText": () => (/* binding */ vModelText),
/* harmony export */   "vShow": () => (/* binding */ vShow),
/* harmony export */   "withKeys": () => (/* binding */ withKeys),
/* harmony export */   "withModifiers": () => (/* binding */ withModifiers)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var templateContainer = doc && doc.createElement('template');
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is, props) {
    var el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);

    if (tag === 'select' && props && props.multiple != null) {
      el.setAttribute('multiple', props.multiple);
    }

    return el;
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  cloneNode: function cloneNode(el) {
    var cloned = el.cloneNode(true); // #3072
    // - in `patchDOMProp`, we store the actual value in the `el._value` property.
    // - normally, elements using `:value` bindings will not be hoisted, but if
    //   the bound value is a constant, e.g. `:value="true"` - they do get
    //   hoisted.
    // - in production, hoisted nodes are cloned when subsequent inserts, but
    //   cloneNode() does not copy the custom property we attached.
    // - This may need to account for other custom DOM properties we attach to
    //   elements in addition to `_value` in the future.

    if ("_value" in el) {
      cloned._value = el._value;
    }

    return cloned;
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG, start, end) {
    // <parent> before | first ... last | anchor </parent>
    var before = anchor ? anchor.previousSibling : parent.lastChild; // #5308 can only take cached path if:
    // - has a single root node
    // - nextSibling info is still available

    if (start && (start === end || start.nextSibling)) {
      // cached
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      // fresh insert
      templateContainer.innerHTML = isSVG ? "<svg>".concat(content, "</svg>") : content;
      var template = templateContainer.content;

      if (isSVG) {
        // remove outer svg wrapper
        var wrapper = template.firstChild;

        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }

        template.removeChild(wrapper);
      }

      parent.insertBefore(template, anchor);
    }

    return [// first
    before ? before.nextSibling : parent.firstChild, // last
    anchor ? anchor.previousSibling : parent.lastChild];
  }
}; // compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]

function patchClass(el, value, isSVG) {
  // directly setting className should be faster than setAttribute in theory
  // if this is an element during a transition, take the temporary transition
  // classes into account.
  var transitionClasses = el._vtc;

  if (transitionClasses) {
    value = (value ? [value].concat(_toConsumableArray(transitionClasses)) : _toConsumableArray(transitionClasses)).join(' ');
  }

  if (value == null) {
    el.removeAttribute('class');
  } else if (isSVG) {
    el.setAttribute('class', value);
  } else {
    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  var style = el.style;
  var isCssString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(next);

  if (next && !isCssString) {
    for (var key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
      for (var _key in prev) {
        if (next[_key] == null) {
          setStyle(style, _key, '');
        }
      }
    }
  } else {
    var currentDisplay = style.display;

    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute('style');
    } // indicates that the `display` of the element is controlled by `v-show`,
    // so we always keep the current `display` value regardless of the `style`
    // value, thus handing over control to `v-show`.


    if ('_vod' in el) {
      style.display = currentDisplay;
    }
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        // !important
        style.setProperty((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};

function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  var name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);

  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }

  name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);

  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';

function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key);

    if (value == null || isBoolean && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? '' : value);
    }
  }
} // __UNSAFE__
// functions. The user is responsible for using them with only trusted content.


function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? '' : value;
    return;
  }

  if (key === 'value' && el.tagName !== 'PROGRESS' && // custom elements may use _value internally
  !el.tagName.includes('-')) {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;

    if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    el.tagName === 'OPTION') {
      el.value = newValue;
    }

    if (value == null) {
      el.removeAttribute(key);
    }

    return;
  }

  if (value === '' || value == null) {
    var type = _typeof(el[key]);

    if (type === 'boolean') {
      // e.g. <select multiple> compiles to { multiple: '' }
      el[key] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value);
      return;
    } else if (value == null && type === 'string') {
      // e.g. <div :id="null">
      el[key] = '';
      el.removeAttribute(key);
      return;
    } else if (type === 'number') {
      // e.g. <img :width="null">
      // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
      try {
        el[key] = 0;
      } catch (_a) {}

      el.removeAttribute(key);
      return;
    }
  } // some properties perform value validation and throw


  try {
    el[key] = value;
  } catch (e) {
    if (true) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
    }
  }
} // Async edge case fix requires storing an event listener's attach timestamp.


var _getNow = Date.now;
var skipTimestampCheck = false;

if (typeof window !== 'undefined') {
  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  if (_getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = function _getNow() {
      return performance.now();
    };
  } // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
  // and does not fire microtasks in between event propagation, so safe to exclude.


  var ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
  skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
} // To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.


var cachedNow = 0;
var p = Promise.resolve();

var reset = function reset() {
  cachedNow = 0;
};

var getNow = function getNow() {
  return cachedNow || (p.then(reset), cachedNow = _getNow());
};

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
        _parseName2 = _slicedToArray(_parseName, 2),
        name = _parseName2[0],
        options = _parseName2[1];

    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  var options;

  if (optionsModifierRE.test(name)) {
    options = {};
    var m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  return [(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name.slice(2)), options];
}

function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    var timeStamp = e.timeStamp || _getNow();

    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5
      /* NATIVE_EVENT_HANDLER */
      , [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    var originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn && fn(e);
      };
    });
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;

  if (key === 'class') {
    patchClass(el, nextValue, isSVG);
  } else if (key === 'style') {
    patchStyle(el, prevValue, nextValue);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    // ignore v-model listeners
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === '.' ? (key = key.slice(1), true) : key[0] === '^' ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    // special case for <input v-model type="checkbox"> with
    // :true-value & :false-value
    // store value as dom properties since non-string values will be
    // stringified.
    if (key === 'true-value') {
      el._trueValue = nextValue;
    } else if (key === 'false-value') {
      el._falseValue = nextValue;
    }

    patchAttr(el, key, nextValue, isSVG);
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML & textContent
    if (key === 'innerHTML' || key === 'textContent') {
      return true;
    } // or native onclick with function values


    if (key in el && nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      return true;
    }

    return false;
  } // spellcheck and draggable are numerated attrs, however their
  // corresponding DOM properties are actually booleans - this leads to
  // setting it with a string "false" value leading it to be coerced to
  // `true`, so we need to always treat them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.


  if (key === 'spellcheck' || key === 'draggable') {
    return false;
  } // #1787, #2840 form property on form elements is readonly and must be set as
  // attribute.


  if (key === 'form') {
    return false;
  } // #1526 <input list> must be set as attribute


  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  } // #2766 <textarea type> must be set as attribute


  if (key === 'type' && el.tagName === 'TEXTAREA') {
    return false;
  } // native onclick with string value, must be set as attribute


  if (nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    return false;
  }

  return key in el;
}

function defineCustomElement(options, hydate) {
  var Comp = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(options);

  var VueCustomElement = /*#__PURE__*/function (_VueElement) {
    _inherits(VueCustomElement, _VueElement);

    var _super = _createSuper(VueCustomElement);

    function VueCustomElement(initialProps) {
      _classCallCheck(this, VueCustomElement);

      return _super.call(this, Comp, initialProps, hydate);
    }

    return VueCustomElement;
  }(VueElement);

  VueCustomElement.def = Comp;
  return VueCustomElement;
}

var defineSSRCustomElement = function defineSSRCustomElement(options) {
  // @ts-ignore
  return defineCustomElement(options, hydrate);
};

var BaseClass = typeof HTMLElement !== 'undefined' ? HTMLElement : /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  return _class;
}();

var VueElement = /*#__PURE__*/function (_BaseClass) {
  _inherits(VueElement, _BaseClass);

  var _super2 = _createSuper(VueElement);

  function VueElement(_def) {
    var _this;

    var _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var hydrate = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, VueElement);

    _this = _super2.call(this);
    _this._def = _def;
    _this._props = _props;
    /**
     * @internal
     */

    _this._instance = null;
    _this._connected = false;
    _this._resolved = false;
    _this._numberProps = null;

    if (_this.shadowRoot && hydrate) {
      hydrate(_this._createVNode(), _this.shadowRoot);
    } else {
      if ( true && _this.shadowRoot) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Custom element has pre-rendered declarative shadow root but is not " + "defined as hydratable. Use `defineSSRCustomElement`.");
      }

      _this.attachShadow({
        mode: 'open'
      });
    }

    return _this;
  }

  _createClass(VueElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this._connected = true;

      if (!this._instance) {
        this._resolveDef();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      this._connected = false;
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        if (!_this2._connected) {
          render(null, _this2.shadowRoot);
          _this2._instance = null;
        }
      });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */

  }, {
    key: "_resolveDef",
    value: function _resolveDef() {
      var _this3 = this;

      if (this._resolved) {
        return;
      }

      this._resolved = true; // set initial attrs

      for (var i = 0; i < this.attributes.length; i++) {
        this._setAttr(this.attributes[i].name);
      } // watch future attr changes


      new MutationObserver(function (mutations) {
        var _iterator = _createForOfIteratorHelper(mutations),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var m = _step.value;

            _this3._setAttr(m.attributeName);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }).observe(this, {
        attributes: true
      });

      var resolve = function resolve(def) {
        var props = def.props,
            styles = def.styles;
        var hasOptions = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props);
        var rawKeys = props ? hasOptions ? Object.keys(props) : props : []; // cast Number-type props set before resolve

        var numberProps;

        if (hasOptions) {
          for (var key in _this3._props) {
            var opt = props[key];

            if (opt === Number || opt && opt.type === Number) {
              _this3._props[key] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(_this3._props[key]);
              (numberProps || (numberProps = Object.create(null)))[key] = true;
            }
          }
        }

        _this3._numberProps = numberProps; // check if there are props set pre-upgrade or connect

        for (var _i2 = 0, _Object$keys = Object.keys(_this3); _i2 < _Object$keys.length; _i2++) {
          var _key2 = _Object$keys[_i2];

          if (_key2[0] !== '_') {
            _this3._setProp(_key2, _this3[_key2], true, false);
          }
        } // defining getter/setters on prototype


        var _iterator2 = _createForOfIteratorHelper(rawKeys.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)),
            _step2;

        try {
          var _loop = function _loop() {
            var key = _step2.value;
            Object.defineProperty(_this3, key, {
              get: function get() {
                return this._getProp(key);
              },
              set: function set(val) {
                this._setProp(key, val);
              }
            });
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          } // apply CSS

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        _this3._applyStyles(styles); // initial render


        _this3._update();
      };

      var asyncDef = this._def.__asyncLoader;

      if (asyncDef) {
        asyncDef().then(resolve);
      } else {
        resolve(this._def);
      }
    }
  }, {
    key: "_setAttr",
    value: function _setAttr(key) {
      var value = this.getAttribute(key);

      if (this._numberProps && this._numberProps[key]) {
        value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(value);
      }

      this._setProp((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key), value, false);
    }
    /**
     * @internal
     */

  }, {
    key: "_getProp",
    value: function _getProp(key) {
      return this._props[key];
    }
    /**
     * @internal
     */

  }, {
    key: "_setProp",
    value: function _setProp(key, val) {
      var shouldReflect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var shouldUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (val !== this._props[key]) {
        this._props[key] = val;

        if (shouldUpdate && this._instance) {
          this._update();
        } // reflect


        if (shouldReflect) {
          if (val === true) {
            this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), '');
          } else if (typeof val === 'string' || typeof val === 'number') {
            this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), val + '');
          } else if (!val) {
            this.removeAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key));
          }
        }
      }
    }
  }, {
    key: "_update",
    value: function _update() {
      render(this._createVNode(), this.shadowRoot);
    }
  }, {
    key: "_createVNode",
    value: function _createVNode() {
      var _this4 = this;

      var vnode = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(this._def, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, this._props));

      if (!this._instance) {
        vnode.ce = function (instance) {
          _this4._instance = instance;
          instance.isCE = true; // HMR

          if (true) {
            instance.ceReload = function (newStyles) {
              // always reset styles
              if (_this4._styles) {
                _this4._styles.forEach(function (s) {
                  return _this4.shadowRoot.removeChild(s);
                });

                _this4._styles.length = 0;
              }

              _this4._applyStyles(newStyles); // if this is an async component, ceReload is called from the inner
              // component so no need to reload the async wrapper


              if (!_this4._def.__asyncLoader) {
                // reload
                _this4._instance = null;

                _this4._update();
              }
            };
          } // intercept emit


          instance.emit = function (event) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key3 = 1; _key3 < _len; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            _this4.dispatchEvent(new CustomEvent(event, {
              detail: args
            }));
          }; // locate nearest Vue custom element parent for provide/inject


          var parent = _this4;

          while (parent = parent && (parent.parentNode || parent.host)) {
            if (parent instanceof VueElement) {
              instance.parent = parent._instance;
              break;
            }
          }
        };
      }

      return vnode;
    }
  }, {
    key: "_applyStyles",
    value: function _applyStyles(styles) {
      var _this5 = this;

      if (styles) {
        styles.forEach(function (css) {
          var s = document.createElement('style');
          s.textContent = css;

          _this5.shadowRoot.appendChild(s); // record for HMR


          if (true) {
            (_this5._styles || (_this5._styles = [])).push(s);
          }
        });
      }
    }
  }]);

  return VueElement;
}(BaseClass);

function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$style';

  /* istanbul ignore else */
  {
    var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();

    if (!instance) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("useCssModule must be called inside setup()");
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    var modules = instance.type.__cssModules;

    if (!modules) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Current instance does not have CSS modules injected.");
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    var mod = modules[name];

    if (!mod) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Current instance does not have CSS module named \"".concat(name, "\"."));
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    return mod;
  }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */


function useCssVars(getter) {
  var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  /* istanbul ignore next */

  if (!instance) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("useCssVars is called without current active component instance.");
    return;
  }

  var setVars = function setVars() {
    return setVarsOnVNode(instance.subTree, getter(instance.proxy));
  };

  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect)(setVars);
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
    var ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, {
      childList: true
    });
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      return ob.disconnect();
    });
  });
}

function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
    var suspense = vnode.suspense;
    vnode = suspense.activeBranch;

    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(function () {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  } // drill down HOCs until it's a non-component vnode


  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1
  /* ELEMENT */
  && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    vnode.children.forEach(function (c) {
      return setVarsOnVNode(c, vars);
    });
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static) {
    var _vnode = vnode,
        el = _vnode.el,
        anchor = _vnode.anchor;

    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}

function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    var style = el.style;

    for (var key in vars) {
      style.setProperty("--".concat(key), vars[key]);
    }
  }
}

var TRANSITION = 'transition';
var ANIMATION = 'animation'; // DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.

var Transition = function Transition(props, _ref) {
  var slots = _ref.slots;
  return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition, resolveTransitionProps(props), slots);
};

Transition.displayName = 'Transition';
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    "default": true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */

var callHook = function callHook(hook) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
    hook.forEach(function (h) {
      return h.apply(void 0, _toConsumableArray(args));
    });
  } else if (hook) {
    hook.apply(void 0, _toConsumableArray(args));
  }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */


var hasExplicitCallback = function hasExplicitCallback(hook) {
  return hook ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.some(function (h) {
    return h.length > 1;
  }) : hook.length > 1 : false;
};

function resolveTransitionProps(rawProps) {
  var baseProps = {};

  for (var key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (rawProps.css === false) {
    return baseProps;
  }

  var _rawProps$name = rawProps.name,
      name = _rawProps$name === void 0 ? 'v' : _rawProps$name,
      type = rawProps.type,
      duration = rawProps.duration,
      _rawProps$enterFromCl = rawProps.enterFromClass,
      enterFromClass = _rawProps$enterFromCl === void 0 ? "".concat(name, "-enter-from") : _rawProps$enterFromCl,
      _rawProps$enterActive = rawProps.enterActiveClass,
      enterActiveClass = _rawProps$enterActive === void 0 ? "".concat(name, "-enter-active") : _rawProps$enterActive,
      _rawProps$enterToClas = rawProps.enterToClass,
      enterToClass = _rawProps$enterToClas === void 0 ? "".concat(name, "-enter-to") : _rawProps$enterToClas,
      _rawProps$appearFromC = rawProps.appearFromClass,
      appearFromClass = _rawProps$appearFromC === void 0 ? enterFromClass : _rawProps$appearFromC,
      _rawProps$appearActiv = rawProps.appearActiveClass,
      appearActiveClass = _rawProps$appearActiv === void 0 ? enterActiveClass : _rawProps$appearActiv,
      _rawProps$appearToCla = rawProps.appearToClass,
      appearToClass = _rawProps$appearToCla === void 0 ? enterToClass : _rawProps$appearToCla,
      _rawProps$leaveFromCl = rawProps.leaveFromClass,
      leaveFromClass = _rawProps$leaveFromCl === void 0 ? "".concat(name, "-leave-from") : _rawProps$leaveFromCl,
      _rawProps$leaveActive = rawProps.leaveActiveClass,
      leaveActiveClass = _rawProps$leaveActive === void 0 ? "".concat(name, "-leave-active") : _rawProps$leaveActive,
      _rawProps$leaveToClas = rawProps.leaveToClass,
      leaveToClass = _rawProps$leaveToClas === void 0 ? "".concat(name, "-leave-to") : _rawProps$leaveToClas;
  var durations = normalizeDuration(duration);
  var enterDuration = durations && durations[0];
  var leaveDuration = durations && durations[1];

  var _onBeforeEnter = baseProps.onBeforeEnter,
      onEnter = baseProps.onEnter,
      _onEnterCancelled = baseProps.onEnterCancelled,
      _onLeave = baseProps.onLeave,
      _onLeaveCancelled = baseProps.onLeaveCancelled,
      _baseProps$onBeforeAp = baseProps.onBeforeAppear,
      _onBeforeAppear = _baseProps$onBeforeAp === void 0 ? _onBeforeEnter : _baseProps$onBeforeAp,
      _baseProps$onAppear = baseProps.onAppear,
      onAppear = _baseProps$onAppear === void 0 ? onEnter : _baseProps$onAppear,
      _baseProps$onAppearCa = baseProps.onAppearCancelled,
      _onAppearCancelled = _baseProps$onAppearCa === void 0 ? _onEnterCancelled : _baseProps$onAppearCa;

  var finishEnter = function finishEnter(el, isAppear, done) {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  var finishLeave = function finishLeave(el, done) {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  var makeEnterHook = function makeEnterHook(isAppear) {
    return function (el, done) {
      var hook = isAppear ? onAppear : onEnter;

      var resolve = function resolve() {
        return finishEnter(el, isAppear, done);
      };

      callHook(hook, [el, resolve]);
      nextFrame(function () {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };

  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
    onBeforeEnter: function onBeforeEnter(el) {
      callHook(_onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear: function onBeforeAppear(el) {
      callHook(_onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave: function onLeave(el, done) {
      var resolve = function resolve() {
        return finishLeave(el, done);
      };

      addTransitionClass(el, leaveFromClass); // force reflow so *-leave-from classes immediately take effect (#2593)

      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!hasExplicitCallback(_onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(_onLeave, [el, resolve]);
    },
    onEnterCancelled: function onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(_onEnterCancelled, [el]);
    },
    onAppearCancelled: function onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(_onAppearCancelled, [el]);
    },
    onLeaveCancelled: function onLeaveCancelled(el) {
      finishLeave(el);
      callHook(_onLeaveCancelled, [el]);
    }
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    var n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  var res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
  if (true) validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== 'number') {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<transition> explicit duration is not a valid number - " + "got ".concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<transition> explicit duration is NaN - " + 'the duration expression might be incorrect.');
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.add(c);
  });
  (el._vtc || (el._vtc = new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.remove(c);
  });
  var _vtc = el._vtc;

  if (_vtc) {
    _vtc["delete"](cls);

    if (!_vtc.size) {
      el._vtc = undefined;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

var endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  var id = el._endId = ++endId;

  var resolveIfNotStale = function resolveIfNotStale() {
    if (id === el._endId) {
      resolve();
    }
  };

  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }

  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return resolve();
  }

  var endEvent = type + 'end';
  var ended = 0;

  var end = function end() {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var getStyleProperties = function getStyleProperties(key) {
    return (styles[key] || '').split(', ');
  };

  var transitionDelays = getStyleProperties(TRANSITION + 'Delay');
  var transitionDurations = getStyleProperties(TRANSITION + 'Duration');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = getStyleProperties(ANIMATION + 'Delay');
  var animationDurations = getStyleProperties(ANIMATION + 'Duration');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type = null;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(Math, _toConsumableArray(durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  })));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
} // synchronously force layout to put elements into a certain state


function forceReflow() {
  return document.body.offsetHeight;
}

var positionMap = new WeakMap();
var newPositionMap = new WeakMap();
var TransitionGroupImpl = {
  name: 'TransitionGroup',
  props: /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;
    var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    var state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState)();
    var prevChildren;
    var children;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(function () {
      // children is guaranteed to exist after initial render
      if (!prevChildren.length) {
        return;
      }

      var moveClass = props.moveClass || "".concat(props.name || 'v', "-move");

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      var movedChildren = prevChildren.filter(applyTranslation); // force reflow to put everything in position

      forceReflow();
      movedChildren.forEach(function (c) {
        var el = c.el;
        var style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = '';

        var cb = el._moveCb = function (e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener('transitionend', cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener('transitionend', cb);
      });
    });
    return function () {
      var rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.toRaw)(props);
      var cssTransitionProps = resolveTransitionProps(rawProps);
      var tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment;
      prevChildren = children;
      children = slots["default"] ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren)(slots["default"]()) : [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.key != null) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
        } else if (true) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<TransitionGroup> children must be keyed.");
        }
      }

      if (prevChildren) {
        for (var _i3 = 0; _i3 < prevChildren.length; _i3++) {
          var _child = prevChildren[_i3];
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(_child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(_child, cssTransitionProps, state, instance));
          positionMap.set(_child, _child.el.getBoundingClientRect());
        }
      }

      return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(tag, null, children);
    };
  }
};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  var el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  var oldPos = positionMap.get(c);
  var newPos = newPositionMap.get(c);
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    var s = c.el.style;
    s.transform = s.webkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = '0s';
    return c;
  }
}

function hasCSSTransform(el, root, moveClass) {
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  var clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(function (cls) {
      cls.split(/\s+/).forEach(function (c) {
        return c && clone.classList.remove(c);
      });
    });
  }

  moveClass.split(/\s+/).forEach(function (c) {
    return c && clone.classList.add(c);
  });
  clone.style.display = 'none';
  var container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);

  var _getTransitionInfo2 = getTransitionInfo(clone),
      hasTransform = _getTransitionInfo2.hasTransform;

  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = function getModelAssigner(vnode) {
  var fn = vnode.props['onUpdate:modelValue'];
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? function (value) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value);
  } : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  var target = e.target;

  if (target.composing) {
    target.composing = false;
    trigger(target, 'input');
  }
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
} // We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.


var vModelText = {
  created: function created(el, _ref3, vnode) {
    var _ref3$modifiers = _ref3.modifiers,
        lazy = _ref3$modifiers.lazy,
        trim = _ref3$modifiers.trim,
        number = _ref3$modifiers.number;
    el._assign = getModelAssigner(vnode);
    var castToNumber = number || vnode.props && vnode.props.type === 'number';
    addEventListener(el, lazy ? 'change' : 'input', function (e) {
      if (e.target.composing) return;
      var domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      } else if (castToNumber) {
        domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, 'change', function () {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart);
      addEventListener(el, 'compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.

      addEventListener(el, 'change', onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted: function mounted(el, _ref4) {
    var value = _ref4.value;
    el.value = value == null ? '' : value;
  },
  beforeUpdate: function beforeUpdate(el, _ref5, vnode) {
    var value = _ref5.value,
        _ref5$modifiers = _ref5.modifiers,
        lazy = _ref5$modifiers.lazy,
        trim = _ref5$modifiers.trim,
        number = _ref5$modifiers.number;
    el._assign = getModelAssigner(vnode); // avoid clearing unresolved text. #2302

    if (el.composing) return;

    if (document.activeElement === el) {
      if (lazy) {
        return;
      }

      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === 'number') && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(el.value) === value) {
        return;
      }
    }

    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
var vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created: function created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      var modelValue = el._modelValue;
      var elementValue = getValue(el);
      var checked = el.checked;
      var assign = el._assign;

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        var index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
        var found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          var filtered = _toConsumableArray(modelValue);

          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
        var cloned = new Set(modelValue);

        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned["delete"](elementValue);
        }

        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate: function beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};

function setChecked(el, _ref6, vnode) {
  var value = _ref6.value,
      oldValue = _ref6.oldValue;
  el._modelValue = value;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created: function created(el, _ref7, vnode) {
    var value = _ref7.value;
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      el._assign(getValue(el));
    });
  },
  beforeUpdate: function beforeUpdate(el, _ref8, vnode) {
    var value = _ref8.value,
        oldValue = _ref8.oldValue;
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created: function created(el, _ref9, vnode) {
    var value = _ref9.value,
        number = _ref9.modifiers.number;
    var isSetModel = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value);
    addEventListener(el, 'change', function () {
      var selectedVal = Array.prototype.filter.call(el.options, function (o) {
        return o.selected;
      }).map(function (o) {
        return number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(getValue(o)) : getValue(o);
      });

      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted: function mounted(el, _ref10) {
    var value = _ref10.value;
    setSelected(el, value);
  },
  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated: function updated(el, _ref11) {
    var value = _ref11.value;
    setSelected(el, value);
  }
};

function setSelected(el, value) {
  var isMultiple = el.multiple;

  if (isMultiple && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<select multiple v-model> expects an Array or Set value for its binding, " + "but got ".concat(Object.prototype.toString.call(value).slice(8, -1), "."));
    return;
  }

  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    var optionValue = getValue(option);

    if (isMultiple) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
        if (el.selectedIndex !== i) el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
} // retrieve raw value set via :value bindings


function getValue(el) {
  return '_value' in el ? el._value : el.value;
} // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings


function getCheckboxValue(el, checked) {
  var key = checked ? '_trueValue' : '_falseValue';
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created: function created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'created');
  },
  mounted: function mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'mounted');
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
  },
  updated: function updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'updated');
  }
};

function callModelHook(el, binding, vnode, prevVNode, hook) {
  var modelToUse;

  switch (el.tagName) {
    case 'SELECT':
      modelToUse = vModelSelect;
      break;

    case 'TEXTAREA':
      modelToUse = vModelText;
      break;

    default:
      switch (vnode.props && vnode.props.type) {
        case 'checkbox':
          modelToUse = vModelCheckbox;
          break;

        case 'radio':
          modelToUse = vModelRadio;
          break;

        default:
          modelToUse = vModelText;
      }

  }

  var fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
} // SSR vnode transforms, only used when user includes client-oriented render
// function in SSR


function initVModelForSSR() {
  vModelText.getSSRProps = function (_ref12) {
    var value = _ref12.value;
    return {
      value: value
    };
  };

  vModelRadio.getSSRProps = function (_ref13, vnode) {
    var value = _ref13.value;

    if (vnode.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(vnode.props.value, value)) {
      return {
        checked: true
      };
    }
  };

  vModelCheckbox.getSSRProps = function (_ref14, vnode) {
    var value = _ref14.value;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
      if (vnode.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1) {
        return {
          checked: true
        };
      }
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return {
          checked: true
        };
      }
    } else if (value) {
      return {
        checked: true
      };
    }
  };
}

var systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
var modifierGuards = {
  stop: function stop(e) {
    return e.stopPropagation();
  },
  prevent: function prevent(e) {
    return e.preventDefault();
  },
  self: function self(e) {
    return e.target !== e.currentTarget;
  },
  ctrl: function ctrl(e) {
    return !e.ctrlKey;
  },
  shift: function shift(e) {
    return !e.shiftKey;
  },
  alt: function alt(e) {
    return !e.altKey;
  },
  meta: function meta(e) {
    return !e.metaKey;
  },
  left: function left(e) {
    return 'button' in e && e.button !== 0;
  },
  middle: function middle(e) {
    return 'button' in e && e.button !== 1;
  },
  right: function right(e) {
    return 'button' in e && e.button !== 2;
  },
  exact: function exact(e, modifiers) {
    return systemModifiers.some(function (m) {
      return e["".concat(m, "Key")] && !modifiers.includes(m);
    });
  }
};
/**
 * @private
 */

var withModifiers = function withModifiers(fn, modifiers) {
  return function (event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key4 = 1; _key4 < _len2; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    return fn.apply(void 0, [event].concat(args));
  };
}; // Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.


var keyNames = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  "delete": 'backspace'
};
/**
 * @private
 */

var withKeys = function withKeys(fn, modifiers) {
  return function (event) {
    if (!('key' in event)) {
      return;
    }

    var eventKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);

    if (modifiers.some(function (k) {
      return k === eventKey || keyNames[k] === eventKey;
    })) {
      return fn(event);
    }
  };
};

var vShow = {
  beforeMount: function beforeMount(el, _ref15, _ref16) {
    var value = _ref15.value;
    var transition = _ref16.transition;
    el._vod = el.style.display === 'none' ? '' : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted: function mounted(el, _ref17, _ref18) {
    var value = _ref17.value;
    var transition = _ref18.transition;

    if (transition && value) {
      transition.enter(el);
    }
  },
  updated: function updated(el, _ref19, _ref20) {
    var value = _ref19.value,
        oldValue = _ref19.oldValue;
    var transition = _ref20.transition;
    if (!value === !oldValue) return;

    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, function () {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount: function beforeUnmount(el, _ref21) {
    var value = _ref21.value;
    setDisplay(el, value);
  }
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : 'none';
} // SSR vnode transforms, only used when user includes client-oriented render
// function in SSR


function initVShowForSSR() {
  vShow.getSSRProps = function (_ref22) {
    var value = _ref22.value;

    if (!value) {
      return {
        style: {
          display: 'none'
        }
      };
    }
  };
}

var rendererOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
  patchProp: patchProp
}, nodeOps); // lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.

var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer)(rendererOptions);
  enabledHydration = true;
  return renderer;
} // use explicit type casts here to avoid import() calls in rolled-up d.ts


var render = function render() {
  var _ensureRenderer;

  (_ensureRenderer = ensureRenderer()).render.apply(_ensureRenderer, arguments);
};

var hydrate = function hydrate() {
  var _ensureHydrationRende;

  (_ensureHydrationRende = ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende, arguments);
};

var createApp = function createApp() {
  var _ensureRenderer2;

  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;

    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML;
    } // clear content before mounting


    container.innerHTML = '';
    var proxy = mount(container, false, container instanceof SVGElement);

    if (container instanceof Element) {
      container.removeAttribute('v-cloak');
      container.setAttribute('data-v-app', '');
    }

    return proxy;
  };

  return app;
};

var createSSRApp = function createSSRApp() {
  var _ensureHydrationRende2;

  var app = (_ensureHydrationRende2 = ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag);
    },
    writable: false
  });
} // dev only


function injectCompilerOptionsCheck(app) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly)()) {
    var isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, 'isCustomElement', {
      get: function get() {
        return isCustomElement;
      },
      set: function set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("The `isCustomElement` config option is deprecated. Use " + "`compilerOptions.isCustomElement` instead.");
      }
    });
    var compilerOptions = app.config.compilerOptions;
    var msg = "The `compilerOptions` config option is only respected when using " + "a build of Vue.js that includes the runtime compiler (aka \"full build\"). " + "Since you are using the runtime-only build, `compilerOptions` " + "must be passed to `@vue/compiler-dom` in the build setup instead.\n" + "- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n" + "- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n" + "- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom";
    Object.defineProperty(app.config, 'compilerOptions', {
      get: function get() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
        return compilerOptions;
      },
      set: function set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
      }
    });
  }
}

function normalizeContainer(container) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
    var res = document.querySelector(container);

    if ( true && !res) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Failed to mount app: mount target selector \"".concat(container, "\" returned null."));
    }

    return res;
  }

  if ( true && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === 'closed') {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs");
  }

  return container;
}

var ssrDirectiveInitialized = false;
/**
 * @internal
 */

var initDirectivesForSSR = function initDirectivesForSSR() {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
};



/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_ARR": () => (/* binding */ EMPTY_ARR),
/* harmony export */   "EMPTY_OBJ": () => (/* binding */ EMPTY_OBJ),
/* harmony export */   "NO": () => (/* binding */ NO),
/* harmony export */   "NOOP": () => (/* binding */ NOOP),
/* harmony export */   "PatchFlagNames": () => (/* binding */ PatchFlagNames),
/* harmony export */   "camelize": () => (/* binding */ camelize),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "def": () => (/* binding */ def),
/* harmony export */   "escapeHtml": () => (/* binding */ escapeHtml),
/* harmony export */   "escapeHtmlComment": () => (/* binding */ escapeHtmlComment),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "generateCodeFrame": () => (/* binding */ generateCodeFrame),
/* harmony export */   "getGlobalThis": () => (/* binding */ getGlobalThis),
/* harmony export */   "hasChanged": () => (/* binding */ hasChanged),
/* harmony export */   "hasOwn": () => (/* binding */ hasOwn),
/* harmony export */   "hyphenate": () => (/* binding */ hyphenate),
/* harmony export */   "includeBooleanAttr": () => (/* binding */ includeBooleanAttr),
/* harmony export */   "invokeArrayFns": () => (/* binding */ invokeArrayFns),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBooleanAttr": () => (/* binding */ isBooleanAttr),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isGloballyWhitelisted": () => (/* binding */ isGloballyWhitelisted),
/* harmony export */   "isHTMLTag": () => (/* binding */ isHTMLTag),
/* harmony export */   "isIntegerKey": () => (/* binding */ isIntegerKey),
/* harmony export */   "isKnownHtmlAttr": () => (/* binding */ isKnownHtmlAttr),
/* harmony export */   "isKnownSvgAttr": () => (/* binding */ isKnownSvgAttr),
/* harmony export */   "isMap": () => (/* binding */ isMap),
/* harmony export */   "isModelListener": () => (/* binding */ isModelListener),
/* harmony export */   "isNoUnitNumericStyleProp": () => (/* binding */ isNoUnitNumericStyleProp),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isOn": () => (/* binding */ isOn),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isReservedProp": () => (/* binding */ isReservedProp),
/* harmony export */   "isSSRSafeAttrName": () => (/* binding */ isSSRSafeAttrName),
/* harmony export */   "isSVGTag": () => (/* binding */ isSVGTag),
/* harmony export */   "isSet": () => (/* binding */ isSet),
/* harmony export */   "isSpecialBooleanAttr": () => (/* binding */ isSpecialBooleanAttr),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isSymbol": () => (/* binding */ isSymbol),
/* harmony export */   "isVoidTag": () => (/* binding */ isVoidTag),
/* harmony export */   "looseEqual": () => (/* binding */ looseEqual),
/* harmony export */   "looseIndexOf": () => (/* binding */ looseIndexOf),
/* harmony export */   "makeMap": () => (/* binding */ makeMap),
/* harmony export */   "normalizeClass": () => (/* binding */ normalizeClass),
/* harmony export */   "normalizeProps": () => (/* binding */ normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* binding */ normalizeStyle),
/* harmony export */   "objectToString": () => (/* binding */ objectToString),
/* harmony export */   "parseStringStyle": () => (/* binding */ parseStringStyle),
/* harmony export */   "propsToAttrMap": () => (/* binding */ propsToAttrMap),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "slotFlagsText": () => (/* binding */ slotFlagsText),
/* harmony export */   "stringifyStyle": () => (/* binding */ stringifyStyle),
/* harmony export */   "toDisplayString": () => (/* binding */ toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* binding */ toHandlerKey),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toRawType": () => (/* binding */ toRawType),
/* harmony export */   "toTypeString": () => (/* binding */ toTypeString)
/* harmony export */ });
var _PatchFlagNames, _slotFlagsText;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}
/**
 * dev only flag -> name mapping
 */


var PatchFlagNames = (_PatchFlagNames = {}, _defineProperty(_PatchFlagNames, 1
/* TEXT */
, "TEXT"), _defineProperty(_PatchFlagNames, 2
/* CLASS */
, "CLASS"), _defineProperty(_PatchFlagNames, 4
/* STYLE */
, "STYLE"), _defineProperty(_PatchFlagNames, 8
/* PROPS */
, "PROPS"), _defineProperty(_PatchFlagNames, 16
/* FULL_PROPS */
, "FULL_PROPS"), _defineProperty(_PatchFlagNames, 32
/* HYDRATE_EVENTS */
, "HYDRATE_EVENTS"), _defineProperty(_PatchFlagNames, 64
/* STABLE_FRAGMENT */
, "STABLE_FRAGMENT"), _defineProperty(_PatchFlagNames, 128
/* KEYED_FRAGMENT */
, "KEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 256
/* UNKEYED_FRAGMENT */
, "UNKEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 512
/* NEED_PATCH */
, "NEED_PATCH"), _defineProperty(_PatchFlagNames, 1024
/* DYNAMIC_SLOTS */
, "DYNAMIC_SLOTS"), _defineProperty(_PatchFlagNames, 2048
/* DEV_ROOT_FRAGMENT */
, "DEV_ROOT_FRAGMENT"), _defineProperty(_PatchFlagNames, -1
/* HOISTED */
, "HOISTED"), _defineProperty(_PatchFlagNames, -2
/* BAIL */
, "BAIL"), _PatchFlagNames);
/**
 * Dev only
 */

var slotFlagsText = (_slotFlagsText = {}, _defineProperty(_slotFlagsText, 1
/* STABLE */
, 'STABLE'), _defineProperty(_slotFlagsText, 2
/* DYNAMIC */
, 'DYNAMIC'), _defineProperty(_slotFlagsText, 3
/* FORWARDED */
, 'FORWARDED'), _slotFlagsText);
var GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
var isGloballyWhitelisted = /*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);
var range = 2;

function generateCodeFrame(source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  // Split the content into individual lines but capture the newline sequence
  // that separated each line. This is important because the actual sequence is
  // needed to properly take into account the full line length for offset
  // comparison
  var lines = source.split(/(\r?\n)/); // Separate the lines and newline sequences into separate arrays for easier referencing

  var newlineSequences = lines.filter(function (_, idx) {
    return idx % 2 === 1;
  });
  lines = lines.filter(function (_, idx) {
    return idx % 2 === 0;
  });
  var count = 0;
  var res = [];

  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);

    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        var line = j + 1;
        res.push("".concat(line).concat(' '.repeat(Math.max(3 - String(line).length, 0)), "|  ").concat(lines[j]));
        var lineLength = lines[j].length;
        var newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;

        if (j === i) {
          // push underline
          var pad = start - (count - (lineLength + newLineSeqLength));
          var length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push("   |  " + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            var _length = Math.max(Math.min(end - count, lineLength), 1);

            res.push("   |  " + '^'.repeat(_length));
          }

          count += lineLength + newLineSeqLength;
        }
      }

      break;
    }
  }

  return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */


var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */

var isBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden," + "loop,open,required,reversed,scoped,seamless," + "checked,muted,multiple,selected");
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */

function includeBooleanAttr(value) {
  return !!value || value === '';
}

var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
var attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  var isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error("unsafe attribute name: ".concat(name));
  }

  return attrValidationCache[name] = !isUnsafe;
}

var propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */

var isNoUnitNumericStyleProp = /*#__PURE__*/makeMap("animation-iteration-count,border-image-outset,border-image-slice," + "border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count," + "columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order," + "grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column," + "grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp," + "line-height,opacity,order,orphans,tab-size,widows,z-index,zoom," + // SVG
"fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset," + "stroke-miterlimit,stroke-opacity,stroke-width");
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

var isKnownHtmlAttr = /*#__PURE__*/makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async," + "autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor," + "border,buffered,capture,challenge,charset,checked,cite,class,code," + "codebase,color,cols,colspan,content,contenteditable,contextmenu,controls," + "coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname," + "disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form," + "formaction,formenctype,formmethod,formnovalidate,formtarget,headers," + "height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity," + "ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low," + "manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate," + "open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly," + "referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped," + "selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset," + "start,step,style,summary,tabindex,target,title,translate,type,usemap," + "value,width,wrap");
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */

var isKnownSvgAttr = /*#__PURE__*/makeMap("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude," + "arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency," + "baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class," + "clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation," + "color-interpolation-filters,color-profile,color-rendering," + "contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate," + "descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx," + "dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity," + "fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity," + "font-family,font-size,font-size-adjust,font-stretch,font-style," + "font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name," + "glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef," + "gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x," + "horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3," + "k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes," + "lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local," + "marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth," + "mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode," + "name,numOctaves,offset,opacity,operator,order,orient,orientation,origin," + "overflow,overline-position,overline-thickness,panose-1,paint-order,path," + "pathLength,patternContentUnits,patternTransform,patternUnits,ping," + "pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha," + "preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel," + "rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures," + "restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing," + "specularConstant,specularExponent,speed,spreadMethod,startOffset," + "stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity," + "strikethrough-position,strikethrough-thickness,string,stroke," + "stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin," + "stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale," + "systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor," + "text-decoration,text-rendering,textLength,to,transform,transform-origin," + "type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi," + "unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic," + "v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x," + "vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing," + "writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole," + "xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang," + "xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");

function normalizeStyle(value) {
  if (isArray(value)) {
    var res = {};

    for (var i = 0; i < value.length; i++) {
      var item = value[i];
      var normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);

      if (normalized) {
        for (var key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}

var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  var ret = {};
  cssText.split(listDelimiterRE).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  var ret = '';

  if (!styles || isString(styles)) {
    return ret;
  }

  for (var key in styles) {
    var value = styles[key];
    var normalizedKey = key.startsWith("--") ? key : hyphenate(key);

    if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
      // only render valid values
      ret += "".concat(normalizedKey, ":").concat(value, ";");
    }
  }

  return ret;
}

function normalizeClass(value) {
  var res = '';

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      var normalized = normalizeClass(value[i]);

      if (normalized) {
        res += normalized + ' ';
      }
    }
  } else if (isObject(value)) {
    for (var name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
}

function normalizeProps(props) {
  if (!props) return null;
  var klass = props["class"],
      style = props.style;

  if (klass && !isString(klass)) {
    props["class"] = normalizeClass(klass);
  }

  if (style) {
    props.style = normalizeStyle(style);
  }

  return props;
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


var HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot'; // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

var SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
var VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

var isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

var isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

var isVoidTag = /*#__PURE__*/makeMap(VOID_TAGS);
var escapeRE = /["'&<>]/;

function escapeHtml(string) {
  var str = '' + string;
  var match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  var html = '';
  var escaped;
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escaped = '&quot;';
        break;

      case 38:
        // &
        escaped = '&amp;';
        break;

      case 39:
        // '
        escaped = '&#39;';
        break;

      case 60:
        // <
        escaped = '&lt;';
        break;

      case 62:
        // >
        escaped = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
} // https://www.w3.org/TR/html52/syntax.html#comments


var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object.keys(a).length;
    var bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = a.hasOwnProperty(key);
      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(function (item) {
    return looseEqual(item, val);
  });
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


var toDisplayString = function toDisplayString(val) {
  return val == null ? '' : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};

var replacer = function replacer(_key, val) {
  // can't use isRef here since @vue/shared has no deps
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return _defineProperty({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function (entries, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      entries["".concat(key, " =>")] = val;
      return entries;
    }, {}));
  } else if (isSet(val)) {
    return _defineProperty({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values()));
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};

var EMPTY_OBJ =  true ? Object.freeze({}) : 0;
var EMPTY_ARR =  true ? Object.freeze([]) : 0;

var NOOP = function NOOP() {};
/**
 * Always return false.
 */


var NO = function NO() {
  return false;
};

var onRE = /^on[^a-z]/;

var isOn = function isOn(key) {
  return onRE.test(key);
};

var isModelListener = function isModelListener(key) {
  return key.startsWith('onUpdate:');
};

var extend = Object.assign;

var remove = function remove(arr, el) {
  var i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var isArray = Array.isArray;

var isMap = function isMap(val) {
  return toTypeString(val) === '[object Map]';
};

var isSet = function isSet(val) {
  return toTypeString(val) === '[object Set]';
};

var isDate = function isDate(val) {
  return val instanceof Date;
};

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isString = function isString(val) {
  return typeof val === 'string';
};

var isSymbol = function isSymbol(val) {
  return _typeof(val) === 'symbol';
};

var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};

var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val["catch"]);
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};

var toRawType = function toRawType(value) {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

var isPlainObject = function isPlainObject(val) {
  return toTypeString(val) === '[object Object]';
};

var isIntegerKey = function isIntegerKey(key) {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};

var isReservedProp = /*#__PURE__*/makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * @private
 */

var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * @private
 */

var toHandlerKey = cacheStringFunction(function (str) {
  return str ? "on".concat(capitalize(str)) : "";
}); // compare whether a value has changed, accounting for NaN.

var hasChanged = function hasChanged(value, oldValue) {
  return !Object.is(value, oldValue);
};

var invokeArrayFns = function invokeArrayFns(fns, arg) {
  for (var i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

var def = function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value
  });
};

var toNumber = function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
};

var _globalThis;

var getGlobalThis = function getGlobalThis() {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {});
};



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url["default"] : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", ({
  value: true
})); // runtime helper for setting properties on components
// in a tree-shakable way

exports.default = function (sfc, props) {
  var target = sfc.__vccOpts || sfc;

  var _iterator = _createForOfIteratorHelper(props),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          val = _step$value[1];

      target[key] = val;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/HelloWorld.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/HelloWorld.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      title: "Hello World"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/app.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/app.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HelloWorld_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld.vue */ "./src/vue/HelloWorld.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    HelloWorld: _HelloWorld_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      title: "App"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1
  /* TEXT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/app.vue?vue&type=template&id=0a6dfb62":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/app.vue?vue&type=template&id=0a6dfb62 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "我是Vue渲染出来的", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hello_world = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hello-world");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hello_world)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/vue/dist/vue.esm-bundler.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.esm-bundler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "EffectScope": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "ReactiveEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Transition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   "TransitionGroup": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   "VueElement": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.VueElement),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createElementBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   "createElementVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createPropsRestProxy": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSSRApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineCustomElement": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineCustomElement),
/* harmony export */   "defineEmits": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   "defineExpose": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "defineSSRCustomElement": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineSSRCustomElement),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "effect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   "effectScope": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "guardReactiveProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "hydrate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "initDirectivesForSSR": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initDirectivesForSSR),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isMemoSame": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isShallow": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "normalizeClass": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   "normalizeProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "render": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "stop": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useCssModule": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   "useCssVars": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   "vModelSelect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   "vModelText": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   "vShow": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDefaults": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withKeys": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   "withMemo": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   "withModifiers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "compile": () => (/* binding */ compileToFunction)
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/compiler-dom */ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");






function initDev() {
  {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.initCustomFormatter)();
  }
} // This entry is the "full-build" that includes both the runtime


if (true) {
  initDev();
}

var compileCache = Object.create(null);

function compileToFunction(template, options) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
       true && (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)("invalid template option: ", template);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    }
  }

  var key = template;
  var cached = compileCache[key];

  if (cached) {
    return cached;
  }

  if (template[0] === '#') {
    var el = document.querySelector(template);

    if ( true && !el) {
      (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)("Template element not found or is empty: ".concat(template));
    } // __UNSAFE__
    // Reason: potential execution of JS expressions in in-DOM template.
    // The user must make sure the in-DOM template is trusted. If it's rendered
    // by the server, the template should not contain any user data.


    template = el ? el.innerHTML : "";
  }

  var _compile = (0,_vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__.compile)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
    hoistStatic: true,
    onError:  true ? onError : 0,
    onWarn:  true ? function (e) {
      return onError(e, true);
    } : 0
  }, options)),
      code = _compile.code;

  function onError(err) {
    var asWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var message = asWarning ? err.message : "Template compilation error: ".concat(err.message);
    var codeFrame = err.loc && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.generateCodeFrame)(template, err.loc.start.offset, err.loc.end.offset);
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)(codeFrame ? "".concat(message, "\n").concat(codeFrame) : message);
  } // The wildcard import results in a huge object with every export
  // with keys that cannot be mangled, and can be quite heavy size-wise.
  // In the global build we know `Vue` is available globally so we can avoid
  // the wildcard object.


  var render = new Function('Vue', code)(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__);
  render._rc = true;
  return compileCache[key] = render;
}

(0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.registerRuntimeCompiler)(compileToFunction);


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm-bundler.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm-bundler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "EffectScope": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "ReactiveEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Transition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   "TransitionGroup": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   "VueElement": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.VueElement),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createElementBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   "createElementVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createPropsRestProxy": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSSRApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineCustomElement": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineCustomElement),
/* harmony export */   "defineEmits": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   "defineExpose": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "defineSSRCustomElement": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineSSRCustomElement),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "effect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   "effectScope": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "guardReactiveProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "hydrate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "initDirectivesForSSR": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initDirectivesForSSR),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isMemoSame": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isShallow": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "normalizeClass": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   "normalizeProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "render": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "stop": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useCssModule": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   "useCssVars": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   "vModelSelect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   "vModelText": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   "vShow": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDefaults": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withKeys": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   "withMemo": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   "withModifiers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "compile": () => (/* binding */ compile)
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");



function initDev() {
  {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.initCustomFormatter)();
  }
} // This entry exports the runtime only, and is built as


if (true) {
  initDev();
}

var compile = function compile() {
  if (true) {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)("Runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"."
    /* should not happen */
    );
  }
};



/***/ }),

/***/ "./src/js/element.js":
/*!***************************!*\
  !*** ./src/js/element.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_title_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/title.less */ "./src/css/title.less");
/* harmony import */ var _css_image_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/image.css */ "./src/css/image.css");
/* harmony import */ var _img_bigSur2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/bigSur2.png */ "./src/img/bigSur2.png");
/* harmony import */ var _font_iconfont_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../font/iconfont.css */ "./src/font/iconfont.css");





var divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊，李银河"; // 设置背景图片

var bgDivEl = document.createElement("div");
bgDivEl.className = "image-bg"; // 设置img元素的src

var imgEl = document.createElement("img");
imgEl.src = _img_bigSur2_png__WEBPACK_IMPORTED_MODULE_3__; // 打包字体

var iEl = document.createElement("i");
iEl.className = "iconfont icon-ashbin";
document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);
console.log(111);

/***/ }),

/***/ "./src/js/format.js":
/*!**************************!*\
  !*** ./src/js/format.js ***!
  \**************************/
/***/ ((module) => {

var priceFormat = function priceFormat() {
  return "$99.88";
}; // commonJs 的导出


module.exports = {
  priceFormat: priceFormat
};

/***/ }),

/***/ "./src/js/math.js":
/*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": () => (/* binding */ sum)
/* harmony export */ });
// ES Module
function sum(num1, num2) {
  return num1 + num2;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/title.less":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/title.less ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\n  background-color: blue;\n  text-decoration: underline;\n}\n", "",{"version":3,"sources":["webpack://./src/css/title.less"],"names":[],"mappings":"AAGA;EACI,sBAAA;EACA,0BAAA;AAFJ","sourcesContent":["@bgColor: blue;\n@textDecoration: underline;\n\n.title {\n    background-color: @bgColor;\n    text-decoration: @textDecoration;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/image.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/image.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bigSur.jpg */ "./src/img/bigSur.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".image-bg {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: contain;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/image.css"],"names":[],"mappings":"AAAA;EACE,yDAA0C;EAC1C,wBAAwB;EACxB,YAAY;EACZ,aAAa;AACf","sourcesContent":[".image-bg {\r\n  background-image: url(\"../img/bigSur.jpg\");\r\n  background-size: contain;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\r\n  color: red;\r\n  font-size: 100px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none; /* 需要后缀 */\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,gBAAgB;EAChB,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB,EAAE,SAAS;AAC9B","sourcesContent":[".title {\r\n  color: red;\r\n  font-size: 100px;\r\n  user-select: none; /* 需要后缀 */\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/font/iconfont.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/font/iconfont.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! iconfont.eot?t=1611048831079 */ "./src/font/iconfont.eot?t=1611048831079"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! iconfont.woff2?t=1611048831079 */ "./src/font/iconfont.woff2?t=1611048831079"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! iconfont.woff?t=1611048831079 */ "./src/font/iconfont.woff?t=1611048831079"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! iconfont.ttf?t=1611048831079 */ "./src/font/iconfont.ttf?t=1611048831079"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {font-family: \"iconfont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 */\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype')\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-ashbin:before {\n  font-size: 30px;\n  content: \"\\e665\";\n}\n\n.icon-caps-lock:before {\n  content: \"\\e667\";\n}\n\n", "",{"version":3,"sources":["webpack://./src/font/iconfont.css"],"names":[],"mappings":"AAAA,YAAY,uBAAuB;EACjC,4CAAwC,EAAE,QAAQ;EAClD;;;;AAIF;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,kBAAkB;EAClB,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["@font-face {font-family: \"iconfont\";\n  src: url('iconfont.eot?t=1611048831079'); /* IE9 */\n  src: url('iconfont.eot?t=1611048831079#iefix') format('embedded-opentype'), /* IE6-IE8 */\n  url('iconfont.woff2?t=1611048831079') format('woff2'),\n  url('iconfont.woff?t=1611048831079') format('woff'),\n  url('iconfont.ttf?t=1611048831079') format('truetype')\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-ashbin:before {\n  font-size: 30px;\n  content: \"\\e665\";\n}\n\n.icon-caps-lock:before {\n  content: \"\\e667\";\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/title.less":
/*!****************************!*\
  !*** ./src/css/title.less ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./title.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/title.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/css/image.css":
/*!***************************!*\
  !*** ./src/css/image.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./image.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/image.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/font/iconfont.css":
/*!*******************************!*\
  !*** ./src/font/iconfont.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./iconfont.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/font/iconfont.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/vue/HelloWorld.vue":
/*!********************************!*\
  !*** ./src/vue/HelloWorld.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HelloWorld_vue_vue_type_template_id_7d22bc7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=template&id=7d22bc7c */ "./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c");
/* harmony import */ var _HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=script&lang=js */ "./src/vue/HelloWorld.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Lenovo_Desktop_vue3Stu_11_webpack_06_webpack_Vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Lenovo_Desktop_vue3Stu_11_webpack_06_webpack_Vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__.default)(_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default, [['render',_HelloWorld_vue_vue_type_template_id_7d22bc7c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/HelloWorld.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/app.vue":
/*!*************************!*\
  !*** ./src/vue/app.vue ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_vue_vue_type_template_id_0a6dfb62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=0a6dfb62 */ "./src/vue/app.vue?vue&type=template&id=0a6dfb62");
/* harmony import */ var _app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js */ "./src/vue/app.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Lenovo_Desktop_vue3Stu_11_webpack_06_webpack_Vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Lenovo_Desktop_vue3Stu_11_webpack_06_webpack_Vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__.default)(_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default, [['render',_app_vue_vue_type_template_id_0a6dfb62__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/app.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/HelloWorld.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/vue/HelloWorld.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_13_use_0_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_13_use_0_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./HelloWorld.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/HelloWorld.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/app.vue?vue&type=script&lang=js":
/*!*************************************************!*\
  !*** ./src/vue/app.vue?vue&type=script&lang=js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_13_use_0_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_13_use_0_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./app.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/app.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c":
/*!**************************************************************!*\
  !*** ./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_13_use_0_HelloWorld_vue_vue_type_template_id_7d22bc7c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_13_use_0_HelloWorld_vue_vue_type_template_id_7d22bc7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./HelloWorld.vue?vue&type=template&id=7d22bc7c */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c");


/***/ }),

/***/ "./src/vue/app.vue?vue&type=template&id=0a6dfb62":
/*!*******************************************************!*\
  !*** ./src/vue/app.vue?vue&type=template&id=0a6dfb62 ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_13_use_0_app_vue_vue_type_template_id_0a6dfb62__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_13_use_0_app_vue_vue_type_template_id_0a6dfb62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./app.vue?vue&type=template&id=0a6dfb62 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[13].use[0]!./src/vue/app.vue?vue&type=template&id=0a6dfb62");


/***/ }),

/***/ "./src/font/iconfont.eot?t=1611048831079":
/*!***********************************************!*\
  !*** ./src/font/iconfont.eot?t=1611048831079 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont_54752c..eot";

/***/ }),

/***/ "./src/font/iconfont.ttf?t=1611048831079":
/*!***********************************************!*\
  !*** ./src/font/iconfont.ttf?t=1611048831079 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont_c1191d..ttf";

/***/ }),

/***/ "./src/font/iconfont.woff2?t=1611048831079":
/*!*************************************************!*\
  !*** ./src/font/iconfont.woff2?t=1611048831079 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont_c79391..woff2";

/***/ }),

/***/ "./src/font/iconfont.woff?t=1611048831079":
/*!************************************************!*\
  !*** ./src/font/iconfont.woff?t=1611048831079 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont_9a10d9..woff";

/***/ }),

/***/ "./src/img/bigSur.jpg":
/*!****************************!*\
  !*** ./src/img/bigSur.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bigSur_0a7b12.jpg";

/***/ }),

/***/ "./src/img/bigSur2.png":
/*!*****************************!*\
  !*** ./src/img/bigSur2.png ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/math.js */ "./src/js/math.js");
/* harmony import */ var vue_dist_vue_esm_bundler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/dist/vue.esm-bundler */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _vue_app_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue/app.vue */ "./src/vue/app.vue");
/* harmony import */ var _js_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/element.js */ "./src/js/element.js");



var _require = __webpack_require__(/*! ./js/format */ "./src/js/format.js"),
    priceFormat = _require.priceFormat;



console.log((0,_js_math_js__WEBPACK_IMPORTED_MODULE_0__.sum)(20, 30));
console.log(priceFormat()); // Vue代码
// const app = createApp({
//   template: `<h2>我是Vue渲染出来的</h2>`,
//   data() {
//     return {
//       title: "Hello World",
//     };
//   },
// });

var app = (0,vue_dist_vue_esm_bundler__WEBPACK_IMPORTED_MODULE_1__.createApp)(_vue_app_vue__WEBPACK_IMPORTED_MODULE_2__.default);
app.mount("#app");
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map