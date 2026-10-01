import { i as __toESM$1 } from "../_runtime.mjs";
import { d as require_react_dom, q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ChartColumn, S as ChevronLeft, T as BookOpen, _ as Hourglass, a as Star, b as Gift, c as RotateCcw, d as Music4, f as Map$1, g as Images, h as KeyRound, i as Ticket, l as PenLine, m as ListTodo, n as Trophy, o as Sparkles, p as Mail, s as Shuffle, t as X, u as Music2, v as Heart, w as Cake, x as CloudSun, y as GitCommitHorizontal } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as styleSingleton } from "../_libs/react-style-singleton.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BrOYiDXt.js
var import_react = /* @__PURE__ */ __toESM$1(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM$1(require_react_dom());
var __create = Object.create;
var __defProp$15 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp$15(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp$15(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __defProp$14 = Object.defineProperty;
var __name$14 = (target, value) => __defProp$14(target, "name", {
	value,
	configurable: true
});
function setRef$1(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$14(setRef$1, "setRef");
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$1(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$1(refs[i], null);
			}
		};
	};
}
__name$14(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
	return import_react.useCallback(composeRefs(...refs), refs);
}
__name$14(useComposedRefs, "useComposedRefs");
var __defProp$13 = Object.defineProperty;
var __name$13 = (target, value) => __defProp$13(target, "name", {
	value,
	configurable: true
});
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent(child) && typeof use === "function") child = use(child._payload);
				slottableElement = getSlottableElementFromSlottable(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
		const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
			return children;
		}
		const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$13(createSlot, "createSlot");
var Slot$1 = /* @__PURE__ */ createSlot("Slot");
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$13((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
	return Slottable2;
}
__name$13(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name$13((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$13(mergeProps, "mergeProps");
function getElementRef$1(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$13(getElementRef$1, "getElementRef");
function isSlottable(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name$13(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name$13(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$13(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name$13((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name$13((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = import_react[" use ".trim().toString()];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:opacity-90",
			paper: "bg-paper text-ink hover:opacity-90",
			ghost: "bg-transparent text-fg hover:bg-surface",
			outline: "border border-border bg-transparent text-fg hover:bg-surface",
			ink: "bg-ink text-paper hover:opacity-90"
		},
		size: {
			default: "h-11 px-5 rounded-md text-sm",
			sm: "h-9 px-3 rounded-sm text-sm",
			lg: "h-12 px-6 rounded-lg text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot$1 : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-bg-elevated px-3 text-sm text-fg", "placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-lg border border-border bg-bg-elevated px-3 py-3 text-sm text-fg", "placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", className),
		...props
	});
}
var __defProp$12 = Object.defineProperty;
var __name$12 = (target, value) => __defProp$12(target, "name", {
	value,
	configurable: true
});
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
	return /* @__PURE__ */ __name$12(function handleEvent(event) {
		originalEventHandler?.(event);
		if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) return ourEventHandler?.(event);
	}, "handleEvent");
}
__name$12(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
	if (!canUseDOM) throw new Error("Cannot access window outside of the DOM");
	return element?.ownerDocument?.defaultView ?? window;
}
__name$12(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
	if (!canUseDOM) throw new Error("Cannot access document outside of the DOM");
	return element?.ownerDocument ?? document;
}
__name$12(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
	const { activeElement } = getOwnerDocument(node);
	if (!activeElement?.nodeName) return null;
	if (isFrame(activeElement) && activeElement.contentDocument) return getActiveElement(activeElement.contentDocument.body, activeDescendant);
	if (activeDescendant) {
		const id = activeElement.getAttribute("aria-activedescendant");
		if (id) {
			const element = getOwnerDocument(activeElement).getElementById(id);
			if (element) return element;
		}
	}
	return activeElement;
}
__name$12(getActiveElement, "getActiveElement");
function isFrame(element) {
	return element.tagName === "IFRAME";
}
__name$12(isFrame, "isFrame");
var __defProp$11 = Object.defineProperty;
var __name$11 = (target, value) => __defProp$11(target, "name", {
	value,
	configurable: true
});
// @__NO_SIDE_EFFECTS__
function createContext2(rootComponentName, defaultContext) {
	const Context = import_react.createContext(defaultContext);
	Context.displayName = rootComponentName + "Context";
	const Provider = /* @__PURE__ */ __name$11((props) => {
		const { children, ...context } = props;
		const value = import_react.useMemo(() => context, Object.values(context));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
			value,
			children
		});
	}, "Provider");
	Provider.displayName = rootComponentName + "Provider";
	function useContext2(consumerName, options = {}) {
		const { optional = false } = options;
		const context = import_react.useContext(Context);
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
		if (optional) return void 0;
		throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
	}
	__name$11(useContext2, "useContext");
	return [Provider, useContext2];
}
__name$11(createContext2, "createContext");
// @__NO_SIDE_EFFECTS__
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react.createContext(defaultContext);
		BaseContext.displayName = rootComponentName + "Context";
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = /* @__PURE__ */ __name$11((props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
				value,
				children
			});
		}, "Provider");
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope, options = {}) {
			const { optional = false } = options;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			if (optional) return void 0;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		__name$11(useContext2, "useContext");
		return [Provider, useContext2];
	}
	__name$11(createContext3, "createContext");
	const createScope = /* @__PURE__ */ __name$11(() => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react.createContext(defaultContext);
		});
		return /* @__PURE__ */ __name$11(function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		}, "useScope");
	}, "createScope");
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name$11(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = /* @__PURE__ */ __name$11(() => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return /* @__PURE__ */ __name$11(function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		}, "useComposedScopes");
	}, "createScope");
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
__name$11(composeContextScopes, "composeContextScopes");
var useLayoutEffect2 = globalThis?.document ? import_react.useLayoutEffect : () => {};
var __defProp$10 = Object.defineProperty;
var __name$10 = (target, value) => __defProp$10(target, "name", {
	value,
	configurable: true
});
var useReactId = import_react[" useId ".trim().toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
	const [id, setId] = import_react.useState(useReactId());
	useLayoutEffect2(() => {
		if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
	}, [deterministicId]);
	return deterministicId || (id ? `radix-${id}` : "");
}
__name$10(useId, "useId");
var __defProp$9 = Object.defineProperty;
var __name$9 = (target, value) => __defProp$9(target, "name", {
	value,
	configurable: true
});
var useReactEffectEvent = import_react[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = import_react[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
	if (typeof useReactEffectEvent === "function") return useReactEffectEvent(callback);
	const ref = import_react.useRef(() => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	if (typeof useReactInsertionEffect === "function") useReactInsertionEffect(() => {
		ref.current = callback;
	});
	else useLayoutEffect2(() => {
		ref.current = callback;
	});
	return import_react.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name$9(useEffectEvent, "useEffectEvent");
var __defProp$8 = Object.defineProperty;
var __name$8 = (target, value) => __defProp$8(target, "name", {
	value,
	configurable: true
});
var useInsertionEffect = import_react[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({ prop, defaultProp, onChange = /* @__PURE__ */ __name$8(() => {}, "onChange"), caller }) {
	const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	return [isControlled ? prop : uncontrolledProp, import_react.useCallback((nextValue) => {
		if (isControlled) {
			const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
			if (value2 !== prop) onChangeRef.current?.(value2);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		onChangeRef
	])];
}
__name$8(useControllableState, "useControllableState");
function useUncontrolledState({ defaultProp, onChange }) {
	const [value, setValue] = import_react.useState(defaultProp);
	const prevValueRef = import_react.useRef(value);
	const onChangeRef = import_react.useRef(onChange);
	useInsertionEffect(() => {
		onChangeRef.current = onChange;
	}, [onChange]);
	import_react.useEffect(() => {
		if (prevValueRef.current !== value) {
			onChangeRef.current?.(value);
			prevValueRef.current = value;
		}
	}, [value, prevValueRef]);
	return [
		value,
		setValue,
		onChangeRef
	];
}
__name$8(useUncontrolledState, "useUncontrolledState");
function isFunction(value) {
	return typeof value === "function";
}
__name$8(isFunction, "isFunction");
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
	const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
	const isControlled = controlledState !== void 0;
	const onChange = useEffectEvent(onChangeProp);
	const args = [{
		...initialArg,
		state: defaultProp
	}];
	if (init) args.push(init);
	const [internalState, dispatch] = import_react.useReducer((state2, action) => {
		if (action.type === SYNC_STATE) return {
			...state2,
			state: action.state
		};
		const next = reducer(state2, action);
		if (isControlled && !Object.is(next.state, state2.state)) onChange(next.state);
		return next;
	}, ...args);
	const uncontrolledState = internalState.state;
	const prevValueRef = import_react.useRef(uncontrolledState);
	import_react.useEffect(() => {
		if (prevValueRef.current !== uncontrolledState) {
			prevValueRef.current = uncontrolledState;
			if (!isControlled) onChange(uncontrolledState);
		}
	}, [
		uncontrolledState,
		prevValueRef,
		isControlled
	]);
	const state = import_react.useMemo(() => {
		if (controlledState !== void 0) return {
			...internalState,
			state: controlledState
		};
		return internalState;
	}, [internalState, controlledState]);
	import_react.useEffect(() => {
		if (isControlled && !Object.is(controlledState, internalState.state)) dispatch({
			type: SYNC_STATE,
			state: controlledState
		});
	}, [
		controlledState,
		internalState.state,
		isControlled
	]);
	return [state, dispatch];
}
__name$8(useControllableStateReducer, "useControllableStateReducer");
var __defProp$7 = Object.defineProperty;
var __name$7 = (target, value) => __defProp$7(target, "name", {
	value,
	configurable: true
});
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((primitive, node) => {
	const Slot = /* @__PURE__ */ createSlot(`Primitive.${node}`);
	const Node = import_react.forwardRef((props, forwardedRef) => {
		const { asChild, ...primitiveProps } = props;
		const Comp = asChild ? Slot : node;
		if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
			...primitiveProps,
			ref: forwardedRef
		});
	});
	Node.displayName = `Primitive.${node}`;
	return {
		...primitive,
		[node]: Node
	};
}, {});
function dispatchDiscreteCustomEvent(target, event) {
	if (target) import_react_dom.flushSync(() => target.dispatchEvent(event));
}
__name$7(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
var __defProp$6 = Object.defineProperty;
var __name$6 = (target, value) => __defProp$6(target, "name", {
	value,
	configurable: true
});
function useCallbackRef$1(callback) {
	const callbackRef = import_react.useRef(callback);
	import_react.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name$6(useCallbackRef$1, "useCallbackRef");
var __defProp$5 = Object.defineProperty;
var __name$5 = (target, value) => __defProp$5(target, "name", {
	value,
	configurable: true
});
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = import_react.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function DismissableLayer2(props, forwardedRef) {
	const { disableOutsidePointerEvents = false, deferPointerDownOutside = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	const ownerDocument = node?.ownerDocument ?? globalThis?.document;
	const [, force] = import_react.useState({});
	const composedRefs = useComposedRefs(forwardedRef, setNode);
	const layers = Array.from(context.layers);
	const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
	const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
	const index = node ? layers.indexOf(node) : -1;
	const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
	const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
	const isDeferredPointerDownOutsideRef = import_react.useRef(false);
	const pointerDownOutside = usePointerDownOutside((event) => {
		onPointerDownOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, {
		ownerDocument,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces: context.dismissableSurfaces,
		shouldHandlePointerDownOutside: import_react.useCallback((target) => {
			if (!(target instanceof Node)) return false;
			const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
			return isPointerEventsEnabled && !isPointerDownOnBranch;
		}, [context.branches, isPointerEventsEnabled])
	});
	const focusOutside = useFocusOutside((event) => {
		if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) return;
		const target = event.target;
		if ([...context.branches].some((branch) => branch.contains(target))) return;
		onFocusOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, ownerDocument);
	const isHighestLayer = node ? index === layers.length - 1 : false;
	const handleKeyDown = useCallbackRef$1((event) => {
		if (event.key !== "Escape") return;
		onEscapeKeyDown?.(event);
		if (!event.defaultPrevented && onDismiss) {
			event.preventDefault();
			onDismiss();
		}
	});
	import_react.useEffect(() => {
		if (!isHighestLayer) return;
		ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
	}, [
		ownerDocument,
		isHighestLayer,
		handleKeyDown
	]);
	import_react.useEffect(() => {
		if (!node) return;
		if (disableOutsidePointerEvents) {
			if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
				originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
				ownerDocument.body.style.pointerEvents = "none";
			}
			context.layersWithOutsidePointerEventsDisabled.add(node);
		}
		context.layers.add(node);
		dispatchUpdate();
		return () => {
			if (disableOutsidePointerEvents) {
				context.layersWithOutsidePointerEventsDisabled.delete(node);
				if (context.layersWithOutsidePointerEventsDisabled.size === 0) ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
			}
		};
	}, [
		node,
		ownerDocument,
		disableOutsidePointerEvents,
		context
	]);
	import_react.useEffect(() => {
		return () => {
			if (!node) return;
			context.layers.delete(node);
			context.layersWithOutsidePointerEventsDisabled.delete(node);
			dispatchUpdate();
		};
	}, [node, context]);
	import_react.useEffect(() => {
		const handleUpdate = /* @__PURE__ */ __name$5(() => force({}), "handleUpdate");
		document.addEventListener(CONTEXT_UPDATE, handleUpdate);
		return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...layerProps,
		ref: composedRefs,
		style: {
			pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
			...props.style
		},
		onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
		onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
	});
}, "DismissableLayer"));
function useDismissableLayerSurface() {
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	import_react.useEffect(() => {
		if (!node) return;
		context.dismissableSurfaces.add(node);
		return () => {
			context.dismissableSurfaces.delete(node);
		};
	}, [node, context.dismissableSurfaces]);
	return setNode;
}
__name$5(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name$5(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
	const { ownerDocument = globalThis?.document, deferPointerDownOutside = false, isDeferredPointerDownOutsideRef, dismissableSurfaces, shouldHandlePointerDownOutside = IS_TRUE } = args;
	const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
	const isPointerInsideReactTreeRef = import_react.useRef(false);
	const isPointerDownOutsideRef = import_react.useRef(false);
	const interceptedOutsideInteractionEventsRef = import_react.useRef(/* @__PURE__ */ new Map());
	const handleClickRef = import_react.useRef(() => {});
	import_react.useEffect(() => {
		function resetOutsideInteraction() {
			isPointerDownOutsideRef.current = false;
			isDeferredPointerDownOutsideRef.current = false;
			interceptedOutsideInteractionEventsRef.current.clear();
		}
		__name$5(resetOutsideInteraction, "resetOutsideInteraction");
		function isOutsideInteractionIntercepted() {
			return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
		}
		__name$5(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
		function handleInteractionCapture(event) {
			if (!isPointerDownOutsideRef.current) return;
			const target = event.target;
			if (!(target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target)))) interceptedOutsideInteractionEventsRef.current.set(event.type, true);
			if (event.type === "click") window.setTimeout(() => {
				if (isPointerDownOutsideRef.current) handleClickRef.current();
			}, 0);
		}
		__name$5(handleInteractionCapture, "handleInteractionCapture");
		function handleInteractionBubble(event) {
			if (isPointerDownOutsideRef.current) interceptedOutsideInteractionEventsRef.current.set(event.type, false);
		}
		__name$5(handleInteractionBubble, "handleInteractionBubble");
		const handlePointerDown = /* @__PURE__ */ __name$5((event) => {
			if (event.target && !isPointerInsideReactTreeRef.current) {
				let handleAndDispatchPointerDownOutsideEvent2 = function() {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
					resetOutsideInteraction();
					if (!wasOutsideInteractionIntercepted) handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
				};
				__name$5(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
				if (!shouldHandlePointerDownOutside(event.target)) {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					resetOutsideInteraction();
					isPointerInsideReactTreeRef.current = false;
					return;
				}
				const eventDetail = { originalEvent: event };
				isPointerDownOutsideRef.current = true;
				isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
				interceptedOutsideInteractionEventsRef.current.clear();
				if (!deferPointerDownOutside || event.button !== 0) handleAndDispatchPointerDownOutsideEvent2();
				else {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
					ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
				}
			} else {
				ownerDocument.removeEventListener("click", handleClickRef.current);
				resetOutsideInteraction();
			}
			isPointerInsideReactTreeRef.current = false;
		}, "handlePointerDown");
		const outsideInteractionEvents = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (const eventName of outsideInteractionEvents) {
			ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
			ownerDocument.addEventListener(eventName, handleInteractionBubble);
		}
		const timerId = window.setTimeout(() => {
			ownerDocument.addEventListener("pointerdown", handlePointerDown);
		}, 0);
		return () => {
			window.clearTimeout(timerId);
			ownerDocument.removeEventListener("pointerdown", handlePointerDown);
			ownerDocument.removeEventListener("click", handleClickRef.current);
			for (const eventName of outsideInteractionEvents) {
				ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
				ownerDocument.removeEventListener(eventName, handleInteractionBubble);
			}
		};
	}, [
		ownerDocument,
		handlePointerDownOutside,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces,
		shouldHandlePointerDownOutside
	]);
	return { onPointerDownCapture: /* @__PURE__ */ __name$5(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture") };
}
__name$5(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
	const handleFocusOutside = useCallbackRef$1(onFocusOutside);
	const isFocusInsideReactTreeRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const handleFocus = /* @__PURE__ */ __name$5((event) => {
			if (event.target && !isFocusInsideReactTreeRef.current) handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, { originalEvent: event }, { discrete: false });
		}, "handleFocus");
		ownerDocument.addEventListener("focusin", handleFocus);
		return () => ownerDocument.removeEventListener("focusin", handleFocus);
	}, [ownerDocument, handleFocusOutside]);
	return {
		onFocusCapture: /* @__PURE__ */ __name$5(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ __name$5(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
	};
}
__name$5(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
	const event = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(event);
}
__name$5(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) target.addEventListener(name, handler, { once: true });
	if (discrete) dispatchDiscreteCustomEvent(target, event);
	else target.dispatchEvent(event);
}
__name$5(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
var __defProp$4 = Object.defineProperty;
var __name$4 = (target, value) => __defProp$4(target, "name", {
	value,
	configurable: true
});
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var FocusScope = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function FocusScope2(props, forwardedRef) {
	const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
	const [container, setContainer] = import_react.useState(null);
	const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
	const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
	const lastFocusedElementRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, setContainer);
	const focusScope = import_react.useRef({
		paused: false,
		pause() {
			this.paused = true;
		},
		resume() {
			this.paused = false;
		}
	}).current;
	import_react.useEffect(() => {
		if (trapped) {
			let handleFocusIn2 = function(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.current = target;
				else focus(lastFocusedElementRef.current, { select: true });
			}, handleFocusOut2 = function(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
			}, handleMutations2 = function(mutations) {
				if (document.activeElement !== document.body) return;
				for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
			};
			__name$4(handleFocusIn2, "handleFocusIn");
			__name$4(handleFocusOut2, "handleFocusOut");
			__name$4(handleMutations2, "handleMutations");
			document.addEventListener("focusin", handleFocusIn2);
			document.addEventListener("focusout", handleFocusOut2);
			const mutationObserver = new MutationObserver(handleMutations2);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			return () => {
				document.removeEventListener("focusin", handleFocusIn2);
				document.removeEventListener("focusout", handleFocusOut2);
				mutationObserver.disconnect();
			};
		}
	}, [
		trapped,
		container,
		focusScope.paused
	]);
	import_react.useEffect(() => {
		if (container) {
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = document.activeElement;
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
					if (document.activeElement === previouslyFocusedElement) focus(container);
				}
			}
			return () => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				setTimeout(() => {
					const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					container.dispatchEvent(unmountEvent);
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					focusScopesStack.remove(focusScope);
				}, 0);
			};
		}
	}, [
		container,
		onMountAutoFocus,
		onUnmountAutoFocus,
		focusScope
	]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (!loop && !trapped) return;
		if (focusScope.paused) return;
		const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
		const focusedElement = document.activeElement;
		if (isTabKey && focusedElement) {
			const container2 = event.currentTarget;
			const [first, last] = getTabbableEdges(container2);
			if (!(first && last)) {
				if (focusedElement === container2) event.preventDefault();
			} else if (!event.shiftKey && focusedElement === last) {
				event.preventDefault();
				if (loop) focus(first, { select: true });
			} else if (event.shiftKey && focusedElement === first) {
				event.preventDefault();
				if (loop) focus(last, { select: true });
			}
		}
	}, [
		loop,
		trapped,
		focusScope.paused
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		tabIndex: -1,
		...scopeProps,
		ref: composedRefs,
		onKeyDown: handleKeyDown
	});
}, "FocusScope"));
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
}
__name$4(focusFirst, "focusFirst");
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
__name$4(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name$4((node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
__name$4(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
	const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
	for (const element of elements) if (!(canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container }))) return element;
}
__name$4(findVisible, "findVisible");
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
__name$4(isHidden, "isHidden");
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
__name$4(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
__name$4(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
}
__name$4(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
__name$4(arrayRemove, "arrayRemove");
function removeLinks(items) {
	return items.filter((item) => item.tagName !== "A");
}
__name$4(removeLinks, "removeLinks");
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", {
	value,
	configurable: true
});
var Portal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function Portal2(props, forwardedRef) {
	const { container: containerProp, ...portalProps } = props;
	const [mounted, setMounted] = import_react.useState(false);
	useLayoutEffect2(() => setMounted(true), []);
	const container = containerProp || mounted && globalThis?.document?.body;
	return container ? import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...portalProps,
		ref: forwardedRef
	}), container) : null;
}, "Portal"));
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
__name$2(useStateMachine, "useStateMachine");
var Presence = /* @__PURE__ */ __name$2((props) => {
	const { present, children } = props;
	const presence = usePresence(present);
	const child = typeof children === "function" ? children({ present: presence.isPresent }) : import_react.Children.only(children);
	const ref = useStableComposedRefs(presence.ref, getElementRef(child));
	return typeof children === "function" || presence.isPresent ? import_react.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
	const [node, setNode] = import_react.useState();
	const stylesRef = import_react.useRef(null);
	const prevPresentRef = import_react.useRef(present);
	const prevAnimationNameRef = import_react.useRef("none");
	const mountAnimationNameRef = import_react.useRef(void 0);
	const [state, send] = useStateMachine(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	import_react.useEffect(() => {
		if (state === "mounted") {
			prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
			mountAnimationNameRef.current = void 0;
		} else prevAnimationNameRef.current = "none";
	}, [state]);
	useLayoutEffect2(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName(styles);
			if (present) {
				mountAnimationNameRef.current = currentAnimationName;
				send("MOUNT");
			} else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2(() => {
		if (node) {
			let timeoutId;
			const ownerWindow = node.ownerDocument.defaultView ?? window;
			const handleAnimationEnd = /* @__PURE__ */ __name$2((event) => {
				const isCurrentAnimation = getAnimationName(stylesRef.current).includes(CSS.escape(event.animationName));
				if (event.target === node && isCurrentAnimation) {
					send("ANIMATION_END");
					if (!prevPresentRef.current) {
						const currentFillMode = node.style.animationFillMode;
						node.style.animationFillMode = "forwards";
						timeoutId = ownerWindow.setTimeout(() => {
							if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
						});
					}
				}
			}, "handleAnimationEnd");
			const handleAnimationStart = /* @__PURE__ */ __name$2((event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
			}, "handleAnimationStart");
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				ownerWindow.clearTimeout(timeoutId);
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: import_react.useCallback((node2) => {
			if (node2) {
				const styles = getComputedStyle(node2);
				stylesRef.current = styles;
				mountAnimationNameRef.current = getAnimationName(styles);
			} else stylesRef.current = null;
			setNode(node2);
		}, [])
	};
}
__name$2(usePresence, "usePresence");
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$2(setRef, "setRef");
function useStableComposedRefs(...refs) {
	const refsRef = import_react.useRef(refs);
	refsRef.current = refs;
	return import_react.useCallback((node) => {
		const currentRefs = refsRef.current;
		let hasCleanup = false;
		const cleanups = currentRefs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef(currentRefs[i], null);
			}
		};
	}, []);
}
__name$2(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
	return styles?.animationName || "none";
}
__name$2(getAnimationName, "getAnimationName");
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$2(getElementRef, "getElementRef");
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var count = 0;
var guards = null;
function FocusGuards(props) {
	useFocusGuards();
	return props.children;
}
__name$1(FocusGuards, "FocusGuards");
function useFocusGuards() {
	import_react.useEffect(() => {
		if (!guards) guards = {
			start: createFocusGuard(),
			end: createFocusGuard()
		};
		const { start, end } = guards;
		if (document.body.firstElementChild !== start) document.body.insertAdjacentElement("afterbegin", start);
		if (document.body.lastElementChild !== end) document.body.insertAdjacentElement("beforeend", end);
		count++;
		return () => {
			if (count === 1) {
				guards?.start.remove();
				guards?.end.remove();
				guards = null;
			}
			count = Math.max(0, count - 1);
		};
	}, []);
}
__name$1(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
	const element = document.createElement("span");
	element.setAttribute("data-radix-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
__name$1(createFocusGuard, "createFocusGuard");
var { __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension } = (/* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	/******************************************************************************
	Copyright (c) Microsoft Corporation.
	
	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.
	
	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __esDecorate;
	var __runInitializers;
	var __propKey;
	var __setFunctionName;
	var __metadata;
	var __awaiter;
	var __generator;
	var __exportStar;
	var __values;
	var __read;
	var __spread;
	var __spreadArrays;
	var __spreadArray;
	var __await;
	var __asyncGenerator;
	var __asyncDelegator;
	var __asyncValues;
	var __makeTemplateObject;
	var __importStar;
	var __importDefault;
	var __classPrivateFieldGet;
	var __classPrivateFieldSet;
	var __classPrivateFieldIn;
	var __createBinding;
	var __addDisposableResource;
	var __disposeResources;
	var __rewriteRelativeImportExtension;
	(function(factory) {
		var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
		if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(exports$1) {
			factory(createExporter(root, createExporter(exports$1)));
		});
		else if (typeof module === "object" && typeof module.exports === "object") factory(createExporter(root, createExporter(module.exports)));
		else factory(createExporter(root));
		function createExporter(exports$2, previous) {
			if (exports$2 !== root) {
				if (typeof Object.create === "function") Object.defineProperty(exports$2, "__esModule", { value: true });
				else exports$2.__esModule = true;
			}
			return function(id, v) {
				return exports$2[id] = previous ? previous(id, v) : v;
			};
		}
	})(function(exporter) {
		var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
			d.__proto__ = b;
		} || function(d, b) {
			for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
		};
		__extends = function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		__assign = Object.assign || function(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		__rest = function(s, e) {
			var t = {};
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
			if (s != null && typeof Object.getOwnPropertySymbols === "function") {
				for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
			}
			return t;
		};
		__decorate = function(decorators, target, key, desc) {
			var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
			if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
			else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
			return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		__param = function(paramIndex, decorator) {
			return function(target, key) {
				decorator(target, key, paramIndex);
			};
		};
		__esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
			function accept(f) {
				if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
				return f;
			}
			var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
			var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
			var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
			var _, done = false;
			for (var i = decorators.length - 1; i >= 0; i--) {
				var context = {};
				for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
				for (var p in contextIn.access) context.access[p] = contextIn.access[p];
				context.addInitializer = function(f) {
					if (done) throw new TypeError("Cannot add initializers after decoration has completed");
					extraInitializers.push(accept(f || null));
				};
				var result = (0, decorators[i])(kind === "accessor" ? {
					get: descriptor.get,
					set: descriptor.set
				} : descriptor[key], context);
				if (kind === "accessor") {
					if (result === void 0) continue;
					if (result === null || typeof result !== "object") throw new TypeError("Object expected");
					if (_ = accept(result.get)) descriptor.get = _;
					if (_ = accept(result.set)) descriptor.set = _;
					if (_ = accept(result.init)) initializers.unshift(_);
				} else if (_ = accept(result)) {
					if (kind === "field") initializers.unshift(_);
					else descriptor[key] = _;
				}
			}
			if (target) Object.defineProperty(target, contextIn.name, descriptor);
			done = true;
		};
		__runInitializers = function(thisArg, initializers, value) {
			var useValue = arguments.length > 2;
			for (var i = 0; i < initializers.length; i++) value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
			return useValue ? value : void 0;
		};
		__propKey = function(x) {
			return typeof x === "symbol" ? x : "".concat(x);
		};
		__setFunctionName = function(f, name, prefix) {
			if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
			return Object.defineProperty(f, "name", {
				configurable: true,
				value: prefix ? "".concat(prefix, " ", name) : name
			});
		};
		__metadata = function(metadataKey, metadataValue) {
			if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
		};
		__awaiter = function(thisArg, _arguments, P, generator) {
			function adopt(value) {
				return value instanceof P ? value : new P(function(resolve) {
					resolve(value);
				});
			}
			return new (P || (P = Promise))(function(resolve, reject) {
				function fulfilled(value) {
					try {
						step(generator.next(value));
					} catch (e) {
						reject(e);
					}
				}
				function rejected(value) {
					try {
						step(generator["throw"](value));
					} catch (e) {
						reject(e);
					}
				}
				function step(result) {
					result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
				}
				step((generator = generator.apply(thisArg, _arguments || [])).next());
			});
		};
		__generator = function(thisArg, body) {
			var _ = {
				label: 0,
				sent: function() {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: []
			}, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
			return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
				return this;
			}), g;
			function verb(n) {
				return function(v) {
					return step([n, v]);
				};
			}
			function step(op) {
				if (f) throw new TypeError("Generator is already executing.");
				while (g && (g = 0, op[0] && (_ = 0)), _) try {
					if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
					if (y = 0, t) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return {
								value: op[1],
								done: false
							};
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
				if (op[0] & 5) throw op[1];
				return {
					value: op[0] ? op[1] : void 0,
					done: true
				};
			}
		};
		__exportStar = function(m, o) {
			for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
		};
		__createBinding = Object.create ? (function(o, m, k, k2) {
			if (k2 === void 0) k2 = k;
			var desc = Object.getOwnPropertyDescriptor(m, k);
			if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
				enumerable: true,
				get: function() {
					return m[k];
				}
			};
			Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
			if (k2 === void 0) k2 = k;
			o[k2] = m[k];
		});
		__values = function(o) {
			var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
			if (m) return m.call(o);
			if (o && typeof o.length === "number") return { next: function() {
				if (o && i >= o.length) o = void 0;
				return {
					value: o && o[i++],
					done: !o
				};
			} };
			throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
		};
		__read = function(o, n) {
			var m = typeof Symbol === "function" && o[Symbol.iterator];
			if (!m) return o;
			var i = m.call(o), r, ar = [], e;
			try {
				while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
			} catch (error) {
				e = { error };
			} finally {
				try {
					if (r && !r.done && (m = i["return"])) m.call(i);
				} finally {
					if (e) throw e.error;
				}
			}
			return ar;
		};
		/** @deprecated */
		__spread = function() {
			for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
			return ar;
		};
		/** @deprecated */
		__spreadArrays = function() {
			for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
			for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
			return r;
		};
		__spreadArray = function(to, from, pack) {
			if (pack || arguments.length === 2) {
				for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
					if (!ar) ar = Array.prototype.slice.call(from, 0, i);
					ar[i] = from[i];
				}
			}
			return to.concat(ar || Array.prototype.slice.call(from));
		};
		__await = function(v) {
			return this instanceof __await ? (this.v = v, this) : new __await(v);
		};
		__asyncGenerator = function(thisArg, _arguments, generator) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var g = generator.apply(thisArg, _arguments || []), i, q = [];
			return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
				return this;
			}, i;
			function awaitReturn(f) {
				return function(v) {
					return Promise.resolve(v).then(f, reject);
				};
			}
			function verb(n, f) {
				if (g[n]) {
					i[n] = function(v) {
						return new Promise(function(a, b) {
							q.push([
								n,
								v,
								a,
								b
							]) > 1 || resume(n, v);
						});
					};
					if (f) i[n] = f(i[n]);
				}
			}
			function resume(n, v) {
				try {
					step(g[n](v));
				} catch (e) {
					settle(q[0][3], e);
				}
			}
			function step(r) {
				r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
			}
			function fulfill(value) {
				resume("next", value);
			}
			function reject(value) {
				resume("throw", value);
			}
			function settle(f, v) {
				if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
			}
		};
		__asyncDelegator = function(o) {
			var i = {}, p;
			return verb("next"), verb("throw", function(e) {
				throw e;
			}), verb("return"), i[Symbol.iterator] = function() {
				return this;
			}, i;
			function verb(n, f) {
				i[n] = o[n] ? function(v) {
					return (p = !p) ? {
						value: __await(o[n](v)),
						done: false
					} : f ? f(v) : v;
				} : f;
			}
		};
		__asyncValues = function(o) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var m = o[Symbol.asyncIterator], i;
			return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
				return this;
			}, i);
			function verb(n) {
				i[n] = o[n] && function(v) {
					return new Promise(function(resolve, reject) {
						v = o[n](v), settle(resolve, reject, v.done, v.value);
					});
				};
			}
			function settle(resolve, reject, d, v) {
				Promise.resolve(v).then(function(v) {
					resolve({
						value: v,
						done: d
					});
				}, reject);
			}
		};
		__makeTemplateObject = function(cooked, raw) {
			if (Object.defineProperty) Object.defineProperty(cooked, "raw", { value: raw });
			else cooked.raw = raw;
			return cooked;
		};
		var __setModuleDefault = Object.create ? (function(o, v) {
			Object.defineProperty(o, "default", {
				enumerable: true,
				value: v
			});
		}) : function(o, v) {
			o["default"] = v;
		};
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		__importStar = function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
		__importDefault = function(mod) {
			return mod && mod.__esModule ? mod : { "default": mod };
		};
		__classPrivateFieldGet = function(receiver, state, kind, f) {
			if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
			if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
			return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
		};
		__classPrivateFieldSet = function(receiver, state, value, kind, f) {
			if (kind === "m") throw new TypeError("Private method is not writable");
			if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
			if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
			return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
		};
		__classPrivateFieldIn = function(state, receiver) {
			if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
			return typeof state === "function" ? receiver === state : state.has(receiver);
		};
		__addDisposableResource = function(env, value, async) {
			if (value !== null && value !== void 0) {
				if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
				var dispose, inner;
				if (async) {
					if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
					dispose = value[Symbol.asyncDispose];
				}
				if (dispose === void 0) {
					if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
					dispose = value[Symbol.dispose];
					if (async) inner = dispose;
				}
				if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
				if (inner) dispose = function() {
					try {
						inner.call(this);
					} catch (e) {
						return Promise.reject(e);
					}
				};
				env.stack.push({
					value,
					dispose,
					async
				});
			} else if (async) env.stack.push({ async: true });
			return value;
		};
		var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
			var e = new Error(message);
			return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
		};
		__disposeResources = function(env) {
			function fail(e) {
				env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
				env.hasError = true;
			}
			var r, s = 0;
			function next() {
				while (r = env.stack.pop()) try {
					if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
					if (r.dispose) {
						var result = r.dispose.call(r.value);
						if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
							fail(e);
							return next();
						});
					} else s |= 1;
				} catch (e) {
					fail(e);
				}
				if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
				if (env.hasError) throw env.error;
			}
			return next();
		};
		__rewriteRelativeImportExtension = function(path, preserveJsx) {
			if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
				return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
			});
			return path;
		};
		exporter("__extends", __extends);
		exporter("__assign", __assign);
		exporter("__rest", __rest);
		exporter("__decorate", __decorate);
		exporter("__param", __param);
		exporter("__esDecorate", __esDecorate);
		exporter("__runInitializers", __runInitializers);
		exporter("__propKey", __propKey);
		exporter("__setFunctionName", __setFunctionName);
		exporter("__metadata", __metadata);
		exporter("__awaiter", __awaiter);
		exporter("__generator", __generator);
		exporter("__exportStar", __exportStar);
		exporter("__createBinding", __createBinding);
		exporter("__values", __values);
		exporter("__read", __read);
		exporter("__spread", __spread);
		exporter("__spreadArrays", __spreadArrays);
		exporter("__spreadArray", __spreadArray);
		exporter("__await", __await);
		exporter("__asyncGenerator", __asyncGenerator);
		exporter("__asyncDelegator", __asyncDelegator);
		exporter("__asyncValues", __asyncValues);
		exporter("__makeTemplateObject", __makeTemplateObject);
		exporter("__importStar", __importStar);
		exporter("__importDefault", __importDefault);
		exporter("__classPrivateFieldGet", __classPrivateFieldGet);
		exporter("__classPrivateFieldSet", __classPrivateFieldSet);
		exporter("__classPrivateFieldIn", __classPrivateFieldIn);
		exporter("__addDisposableResource", __addDisposableResource);
		exporter("__disposeResources", __disposeResources);
		exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
	});
	0 && (module.exports = {
		__extends,
		__assign,
		__rest,
		__decorate,
		__param,
		__esDecorate,
		__runInitializers,
		__propKey,
		__setFunctionName,
		__metadata,
		__awaiter,
		__generator,
		__exportStar,
		__createBinding,
		__values,
		__read,
		__spread,
		__spreadArrays,
		__spreadArray,
		__await,
		__asyncGenerator,
		__asyncDelegator,
		__asyncValues,
		__makeTemplateObject,
		__importStar,
		__importDefault,
		__classPrivateFieldGet,
		__classPrivateFieldSet,
		__classPrivateFieldIn,
		__addDisposableResource,
		__disposeResources,
		__rewriteRelativeImportExtension
	});
})))())).default;
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
/**
* Name of a CSS variable containing the amount of "hidden" scrollbar
* ! might be undefined ! use will fallback!
*/
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
/**
* Assigns a value for a given ref, no matter of the ref format
* @param {RefObject} ref - a callback function or ref object
* @param value - a new value
*
* @see https://github.com/theKashey/use-callback-ref#assignref
* @example
* const refObject = useRef();
* const refFn = (ref) => {....}
*
* assignRef(refObject, "refValue");
* assignRef(refFn, "refValue");
*/
function assignRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
	return ref;
}
/**
* creates a MutableRef with ref change callback
* @param initialValue - initial ref value
* @param {Function} callback - a callback to run when value changes
*
* @example
* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
* ref.current = 1;
* // prints 0 -> 1
*
* @see https://reactjs.org/docs/hooks-reference.html#useref
* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
* @returns {MutableRefObject}
*/
function useCallbackRef(initialValue, callback) {
	var ref = (0, import_react.useState)(function() {
		return {
			value: initialValue,
			callback,
			facade: {
				get current() {
					return ref.value;
				},
				set current(value) {
					var last = ref.value;
					if (last !== value) {
						ref.value = value;
						ref.callback(value, last);
					}
				}
			}
		};
	})[0];
	ref.callback = callback;
	return ref.facade;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
/**
* Merges two or more refs together providing a single interface to set their value
* @param {RefObject|Ref} refs
* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
*
* @see {@link mergeRefs} a version without buit-in memoization
* @see https://github.com/theKashey/use-callback-ref#usemergerefs
* @example
* const Component = React.forwardRef((props, ref) => {
*   const ownRef = useRef();
*   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
*   return <div ref={domRef}>...</div>
* }
*/
function useMergeRefs(refs, defaultValue) {
	var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
		return refs.forEach(function(ref) {
			return assignRef(ref, newValue);
		});
	});
	useIsomorphicLayoutEffect(function() {
		var oldValue = currentValues.get(callbackRef);
		if (oldValue) {
			var prevRefs_1 = new Set(oldValue);
			var nextRefs_1 = new Set(refs);
			var current_1 = callbackRef.current;
			prevRefs_1.forEach(function(ref) {
				if (!nextRefs_1.has(ref)) assignRef(ref, null);
			});
			nextRefs_1.forEach(function(ref) {
				if (!prevRefs_1.has(ref)) assignRef(ref, current_1);
			});
		}
		currentValues.set(callbackRef, refs);
	}, [refs]);
	return callbackRef;
}
function ItoI(a) {
	return a;
}
function innerCreateMedium(defaults, middleware) {
	if (middleware === void 0) middleware = ItoI;
	var buffer = [];
	var assigned = false;
	return {
		read: function() {
			if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			if (buffer.length) return buffer[buffer.length - 1];
			return defaults;
		},
		useMedium: function(data) {
			var item = middleware(data, assigned);
			buffer.push(item);
			return function() {
				buffer = buffer.filter(function(x) {
					return x !== item;
				});
			};
		},
		assignSyncMedium: function(cb) {
			assigned = true;
			while (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
			}
			buffer = {
				push: function(x) {
					return cb(x);
				},
				filter: function() {
					return buffer;
				}
			};
		},
		assignMedium: function(cb) {
			assigned = true;
			var pendingQueue = [];
			if (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
				pendingQueue = buffer;
			}
			var executeQueue = function() {
				var cbs = pendingQueue;
				pendingQueue = [];
				cbs.forEach(cb);
			};
			var cycle = function() {
				return Promise.resolve().then(executeQueue);
			};
			cycle();
			buffer = {
				push: function(x) {
					pendingQueue.push(x);
					cycle();
				},
				filter: function(filter) {
					pendingQueue = pendingQueue.filter(filter);
					return buffer;
				}
			};
		}
	};
}
function createSidecarMedium(options) {
	if (options === void 0) options = {};
	var medium = innerCreateMedium(null);
	medium.options = __assign({
		async: true,
		ssr: false
	}, options);
	return medium;
}
var SideCar = function(_a) {
	var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
	if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
	var Target = sideCar.read();
	if (!Target) throw new Error("Sidecar medium not found");
	return import_react.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
	medium.useMedium(exported);
	return SideCar;
}
var effectCar = createSidecarMedium();
var nothing = function() {};
/**
* Removes scrollbar from the page and contain the scroll within the Lock
*/
var RemoveScroll = import_react.forwardRef(function(props, parentRef) {
	var ref = import_react.useRef(null);
	var _a = import_react.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), callbacks = _a[0], setCallbacks = _a[1];
	var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]);
	var SideCar = sideCar;
	var containerRef = useMergeRefs([ref, parentRef]);
	var containerProps = __assign(__assign({}, rest), callbacks);
	return import_react.createElement(import_react.Fragment, null, enabled && import_react.createElement(SideCar, {
		sideCar: effectCar,
		removeScrollBar,
		shards,
		noRelative,
		noIsolation,
		inert,
		setCallbacks,
		allowPinchZoom: !!allowPinchZoom,
		lockRef: ref,
		gapMode
	}), forwardProps ? import_react.cloneElement(import_react.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : import_react.createElement(Container, __assign({}, containerProps, {
		className,
		ref: containerRef
	}), children));
});
RemoveScroll.defaultProps = {
	enabled: true,
	removeScrollBar: true,
	inert: false
};
RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
var zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
};
var parse = function(x) {
	return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
	var cs = window.getComputedStyle(document.body);
	var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
	var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
	var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(left),
		parse(top),
		parse(right)
	];
};
var getGapWidth = function(gapMode) {
	if (gapMode === void 0) gapMode = "margin";
	if (typeof window === "undefined") return zeroGap;
	var offsets = getOffset(gapMode);
	var documentWidth = document.documentElement.clientWidth;
	var windowWidth = window.innerWidth;
	return {
		left: offsets[0],
		top: offsets[1],
		right: offsets[2],
		gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
	};
};
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
	var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
	if (gapMode === void 0) gapMode = "margin";
	return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
		allowRelative && "position: relative ".concat(important, ";"),
		gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
		gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
	].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
	var counter = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
	import_react.useEffect(function() {
		document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
		return function() {
			var newCounter = getCurrentUseCounter() - 1;
			if (newCounter <= 0) document.body.removeAttribute(lockAttribute);
			else document.body.setAttribute(lockAttribute, newCounter.toString());
		};
	}, []);
};
/**
* Removes page scrollbar and blocks page scroll when mounted
*/
var RemoveScrollBar = function(_a) {
	var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
	useLockAttribute();
	var gap = import_react.useMemo(function() {
		return getGapWidth(gapMode);
	}, [gapMode]);
	return import_react.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
var passiveSupported = false;
if (typeof window !== "undefined") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		passiveSupported = true;
		return true;
	} });
	window.addEventListener("test", options, options);
	window.removeEventListener("test", options, options);
} catch (err) {
	passiveSupported = false;
}
var nonPassive = passiveSupported ? { passive: false } : false;
var alwaysContainsScroll = function(node) {
	return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
	if (!(node instanceof Element)) return false;
	var styles = window.getComputedStyle(node);
	return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
};
var elementCouldBeVScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
	var ownerDocument = node.ownerDocument;
	var current = node;
	do {
		if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
		if (elementCouldBeScrolled(axis, current)) {
			var _a = getScrollVariables(axis, current);
			if (_a[1] > _a[2]) return true;
		}
		current = current.parentNode;
	} while (current && current !== ownerDocument.body);
	return false;
};
var getVScrollVariables = function(_a) {
	return [
		_a.scrollTop,
		_a.scrollHeight,
		_a.clientHeight
	];
};
var getHScrollVariables = function(_a) {
	return [
		_a.scrollLeft,
		_a.scrollWidth,
		_a.clientWidth
	];
};
var elementCouldBeScrolled = function(axis, node) {
	return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
	return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
	/**
	* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
	* and then increasingly negative as you scroll towards the end of the content.
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
	*/
	return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
	var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
	var delta = directionFactor * sourceDelta;
	var target = event.target;
	var targetInLock = endTarget.contains(target);
	var shouldCancelScroll = false;
	var isDeltaPositive = delta > 0;
	var availableScroll = 0;
	var availableScrollTop = 0;
	do {
		if (!target) break;
		var _a = getScrollVariables(axis, target), position = _a[0];
		var elementScroll = _a[1] - _a[2] - directionFactor * position;
		if (position || elementScroll) {
			if (elementCouldBeScrolled(axis, target)) {
				availableScroll += elementScroll;
				availableScrollTop += position;
			}
		}
		var parent_1 = target.parentNode;
		target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
	} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
	if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
	else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
	return shouldCancelScroll;
};
var getTouchXY = function(event) {
	return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
	return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
	return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
	return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
	return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
	var shouldPreventQueue = import_react.useRef([]);
	var touchStartRef = import_react.useRef([0, 0]);
	var activeAxis = import_react.useRef();
	var id = import_react.useState(idCounter++)[0];
	var Style = import_react.useState(styleSingleton)[0];
	var lastProps = import_react.useRef(props);
	import_react.useEffect(function() {
		lastProps.current = props;
	}, [props]);
	import_react.useEffect(function() {
		if (props.inert) {
			document.body.classList.add("block-interactivity-".concat(id));
			var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
			allow_1.forEach(function(el) {
				return el.classList.add("allow-interactivity-".concat(id));
			});
			return function() {
				document.body.classList.remove("block-interactivity-".concat(id));
				allow_1.forEach(function(el) {
					return el.classList.remove("allow-interactivity-".concat(id));
				});
			};
		}
	}, [
		props.inert,
		props.lockRef.current,
		props.shards
	]);
	var shouldCancelEvent = import_react.useCallback(function(event, parent) {
		if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
		var touch = getTouchXY(event);
		var touchStart = touchStartRef.current;
		var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
		var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
		var currentAxis;
		var target = event.target;
		var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
		if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
		var selection = window.getSelection();
		var anchorNode = selection && selection.anchorNode;
		if (anchorNode ? anchorNode === target || anchorNode.contains(target) : false) return false;
		var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		if (!canBeScrolledInMainDirection) return true;
		if (canBeScrolledInMainDirection) currentAxis = moveDirection;
		else {
			currentAxis = moveDirection === "v" ? "h" : "v";
			canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		}
		if (!canBeScrolledInMainDirection) return false;
		if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
		if (!currentAxis) return true;
		var cancelingAxis = activeAxis.current || currentAxis;
		return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
	}, []);
	var shouldPrevent = import_react.useCallback(function(_event) {
		var event = _event;
		if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) return;
		var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
		var sourceEvent = shouldPreventQueue.current.filter(function(e) {
			return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
		})[0];
		if (sourceEvent && sourceEvent.should) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!sourceEvent) {
			var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
				return node.contains(event.target);
			});
			if (shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation) {
				if (event.cancelable) event.preventDefault();
			}
		}
	}, []);
	var shouldCancel = import_react.useCallback(function(name, delta, target, should) {
		var event = {
			name,
			delta,
			target,
			should,
			shadowParent: getOutermostShadowParent(target)
		};
		shouldPreventQueue.current.push(event);
		setTimeout(function() {
			shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
				return e !== event;
			});
		}, 1);
	}, []);
	var scrollTouchStart = import_react.useCallback(function(event) {
		touchStartRef.current = getTouchXY(event);
		activeAxis.current = void 0;
	}, []);
	var scrollWheel = import_react.useCallback(function(event) {
		shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	var scrollTouchMove = import_react.useCallback(function(event) {
		shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	import_react.useEffect(function() {
		lockStack.push(Style);
		props.setCallbacks({
			onScrollCapture: scrollWheel,
			onWheelCapture: scrollWheel,
			onTouchMoveCapture: scrollTouchMove
		});
		document.addEventListener("wheel", shouldPrevent, nonPassive);
		document.addEventListener("touchmove", shouldPrevent, nonPassive);
		document.addEventListener("touchstart", scrollTouchStart, nonPassive);
		return function() {
			lockStack = lockStack.filter(function(inst) {
				return inst !== Style;
			});
			document.removeEventListener("wheel", shouldPrevent, nonPassive);
			document.removeEventListener("touchmove", shouldPrevent, nonPassive);
			document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
		};
	}, []);
	var removeScrollBar = props.removeScrollBar, inert = props.inert;
	return import_react.createElement(import_react.Fragment, null, inert ? import_react.createElement(Style, { styles: generateStyle(id) }) : null, removeScrollBar ? import_react.createElement(RemoveScrollBar, {
		noRelative: props.noRelative,
		gapMode: props.gapMode
	}) : null);
}
function getOutermostShadowParent(node) {
	var shadowParent = null;
	while (node !== null) {
		if (node instanceof ShadowRoot) {
			shadowParent = node.host;
			node = node.host;
		}
		node = node.parentNode;
	}
	return shadowParent;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);
var ReactRemoveScroll = import_react.forwardRef(function(props, ref) {
	return import_react.createElement(RemoveScroll, __assign({}, props, {
		ref,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var getDefaultParent = function(originalTarget) {
	if (typeof document === "undefined") return null;
	return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
	return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
	return targets.map(function(target) {
		if (parent.contains(target)) return target;
		var correctedTarget = unwrapHost(target);
		if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
		console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
		return null;
	}).filter(function(x) {
		return Boolean(x);
	});
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @param {String} [controlAttribute] - html Attribute to control
* @return {Undo} undo command
*/
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
	var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
	var markerCounter = markerMap[markerName];
	var hiddenNodes = [];
	var elementsToKeep = /* @__PURE__ */ new Set();
	var elementsToStop = new Set(targets);
	var keep = function(el) {
		if (!el || elementsToKeep.has(el)) return;
		elementsToKeep.add(el);
		keep(el.parentNode);
	};
	targets.forEach(keep);
	var deep = function(parent) {
		if (!parent || elementsToStop.has(parent)) return;
		Array.prototype.forEach.call(parent.children, function(node) {
			if (elementsToKeep.has(node)) deep(node);
			else try {
				var attr = node.getAttribute(controlAttribute);
				var alreadyHidden = attr !== null && attr !== "false";
				var counterValue = (counterMap.get(node) || 0) + 1;
				var markerValue = (markerCounter.get(node) || 0) + 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				hiddenNodes.push(node);
				if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
				if (markerValue === 1) node.setAttribute(markerName, "true");
				if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
			} catch (e) {
				console.error("aria-hidden: cannot operate on ", node, e);
			}
		});
	};
	deep(parentNode);
	elementsToKeep.clear();
	lockCount++;
	return function() {
		hiddenNodes.forEach(function(node) {
			var counterValue = counterMap.get(node) - 1;
			var markerValue = markerCounter.get(node) - 1;
			counterMap.set(node, counterValue);
			markerCounter.set(node, markerValue);
			if (!counterValue) {
				if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
				uncontrolledNodes.delete(node);
			}
			if (!markerValue) node.removeAttribute(markerName);
		});
		lockCount--;
		if (!lockCount) {
			counterMap = /* @__PURE__ */ new WeakMap();
			counterMap = /* @__PURE__ */ new WeakMap();
			uncontrolledNodes = /* @__PURE__ */ new WeakMap();
			markerMap = {};
		}
	};
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @return {Undo} undo command
*/
var hideOthers = function(originalTarget, parentNode, markerName) {
	if (markerName === void 0) markerName = "data-aria-hidden";
	var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	var activeParentNode = parentNode || getDefaultParent(originalTarget);
	if (!activeParentNode) return function() {
		return null;
	};
	targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
	return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = /* @__PURE__ */ createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog$1 = /* @__PURE__ */ __name((props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	const [titleCount, setTitleCount] = import_react.useState(0);
	const [descriptionCount, setDescriptionCount] = import_react.useState(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		titlePresent: titleCount > 0,
		descriptionPresent: descriptionCount > 0,
		setTitleCount,
		setDescriptionCount,
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children
	});
}, "Dialog");
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogTrigger2(props, forwardedRef) {
	const { __scopeDialog, ...triggerProps } = props;
	const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
	const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": context.open,
		"aria-controls": context.open ? context.contentId : void 0,
		"data-state": getState(context.open),
		...triggerProps,
		ref: composedTriggerRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
}, "DialogTrigger"));
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 });
var DialogPortal$1 = /* @__PURE__ */ __name((props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeDialog,
		forceMount,
		children: import_react.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogOverlay2(props, forwardedRef) {
	const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
}, "DialogOverlay"));
var Slot = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogOverlayImpl2(props, forwardedRef) {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
	const composedRefs = useComposedRefs(forwardedRef, useDismissableLayerSurface());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot,
		allowPinchZoom: true,
		shards: [context.contentRef],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(context.open),
			...overlayProps,
			ref: composedRefs,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
}, "DialogOverlayImpl"));
var CONTENT_NAME = "DialogContent";
var DialogContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogContent2(props, forwardedRef) {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
}, "DialogContent"));
var DialogContentModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogContentModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: context.open,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
}, "DialogContentModal"));
var DialogContentNonModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogContentNonModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
}, "DialogContentNonModal"));
var DialogContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogContentImpl2(props, forwardedRef) {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, __scopeDialog);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: context.contentId,
			"aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
			"aria-labelledby": context.titlePresent ? context.titleId : void 0,
			"data-state": getState(context.open),
			...contentProps,
			ref: forwardedRef,
			deferPointerDownOutside: true,
			onDismiss: () => context.onOpenChange(false)
		})
	}) });
}, "DialogContentImpl"));
var TITLE_NAME = "DialogTitle";
var DialogTitle$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogTitle2(props, forwardedRef) {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext(TITLE_NAME, __scopeDialog);
	const { setTitleCount } = context;
	useLayoutEffect2(() => {
		setTitleCount((count) => count + 1);
		return () => setTitleCount((count) => count - 1);
	}, [setTitleCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
}, "DialogTitle"));
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogDescription2(props, forwardedRef) {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
	const { setDescriptionCount } = context;
	useLayoutEffect2(() => {
		setDescriptionCount((count) => count + 1);
		return () => setDescriptionCount((count) => count - 1);
	}, [setDescriptionCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
}, "DialogDescription"));
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogClose2(props, forwardedRef) {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
}, "DialogClose"));
function getState(open) {
	return open ? "open" : "closed";
}
__name(getState, "getState");
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-bg/80", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(92vw,34rem)] max-h-[86dvh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-border bg-bg-elevated p-6 shadow-lift", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-4 right-4 flex size-11 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-fg",
			"aria-label": "关闭",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-5 pr-10", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-medium text-fg", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("mt-1 text-sm text-muted", className),
		...props
	});
}
var DEFAULT_CONFIG = {
	herName: "璐璐宝贝",
	hisName: "我",
	birthdayLabel: "10月1日",
	birthdayISO: "2003-10-01",
	togetherSince: "2025-08-31",
	secretQuestion: "我们在一起的日子（6 位数字）",
	secretAnswer: "250831",
	hiddenKeyword: "yuni",
	letter: `{{her}}：

我没有办法把一整年的喜欢，装进一个盒子里。
所以我做了这个小小的地方——
像一封可以走进去的信，也像一份可以长期保存的档案。

有些话当面说会不好意思，写下来，又觉得刚好。
谢谢你还在。谢谢你让普通的日子变得值得被记住。

我不想写得太满。满了就假。
我只想让你知道：在我这里，你从来都不是一段插曲。

生日快乐。
愿你被世界温柔以待，
也愿我能一直站在那份温柔里。

—— {{him}}`,
	promise: `我不敢许下漂亮的空话。

我只答应你一件很小的事：
当你回头的时候，我都在。

剩下的日子，我们慢慢走。`
};
var MOMENTS = [
	{
		id: "meet",
		kicker: "01",
		title: "一场没有预告的遇见",
		when: "起初",
		body: "后来我想，真正的遇见都很轻。没有配乐，没有刚好飘落的花瓣，只是某一天，世界的噪声忽然小了一点。",
		image: "/images/moments/moment-meet.jpg"
	},
	{
		id: "walk",
		kicker: "02",
		title: "并排走的那段路",
		when: "后来",
		body: "谁走得快半步，谁又会回头等。这件事比任何誓言都更像喜欢。",
		image: "/images/moments/moment-walk.jpg"
	},
	{
		id: "rain",
		kicker: "03",
		title: "雨天，留在屋里",
		when: "某日",
		body: "雨在窗外落着，屋里只开着暖灯。谁也没提要出门，日子慢得刚刚好。",
		image: "/images/moments/moment-rain.jpg"
	},
	{
		id: "cook",
		kicker: "04",
		title: "一束说不上名字的花",
		when: "平常",
		body: "花的颜色很轻，抱在怀里却有一点分量。像你说喜欢的时候，声音不大，我却记了很久。",
		image: "/images/moments/moment-flowers.jpg"
	},
	{
		id: "trip",
		kicker: "05",
		title: "去看一场演唱会",
		when: "2026.09.26 · 上海",
		body: "场馆很大，灯很亮，我们坐在人海里的一小块地方。歌词一句句响起来的时候，我悄悄看了一眼你。",
		image: "/images/moments/moment-concert.jpg"
	},
	{
		id: "night",
		kicker: "06",
		title: "散场之后的夜",
		when: "夜里",
		body: "应援棒还攥在手里，照片还热着。夜风把城市吹得很亮，我们慢慢走回去。",
		image: "/images/moments/moment-night.jpg"
	},
	{
		id: "today",
		kicker: "07",
		title: "到今天",
		when: "此刻",
		body: "海会退下去，天会暗下来。我仍想把这一天郑重地交给你。",
		image: "/images/moments/moment-today.jpg"
	}
];
var REASONS = [
	{
		id: "r1",
		title: "你说话时会轻轻皱眉",
		body: "那是认真，不是脾气。我喜欢你把一件事当真的样子。"
	},
	{
		id: "r2",
		title: "你把日子过得很仔细",
		body: "一杯水、一封邮件、出门前的那三十秒。你让普通的事情也有了秩序。"
	},
	{
		id: "r3",
		title: "你记得我随口说过的话",
		body: "连我自己都忘了。你却像收藏邮票一样，把它们留着。"
	},
	{
		id: "r4",
		title: "你让沉默变得安全",
		body: "不是冷场。是可以一起什么都不说，也不用找话题来填。"
	},
	{
		id: "r5",
		title: "你会回头等",
		body: "哪怕只慢半步。被等待，是一种被选择。"
	},
	{
		id: "r6",
		title: "你对小东西更温柔",
		body: "流浪猫、旧杯子、用完的票根。心细的人，喜欢起来也可靠。"
	},
	{
		id: "r7",
		title: "你生气也仍然讲道理",
		body: "这比从不生气更难得。我不必害怕诚实。"
	},
	{
		id: "r8",
		title: "你愿意把脆弱给我看",
		body: "不是为了被修理，只是允许我在场。这是很深的信任。"
	},
	{
		id: "r9",
		title: "你点的那份总是更好吃",
		body: "我可以承认。也可以再要一口。"
	},
	{
		id: "r10",
		title: "你唱歌跑调也不在意",
		body: "房间因此变得不像舞台，更像我们住的地方。"
	},
	{
		id: "r11",
		title: "你让我想把明天过好",
		body: "不是鸡汤。是真的想早一点起来，把事情做完，好见面。"
	},
	{
		id: "r12",
		title: "你在，就够了",
		body: "其他的形容词都会过期。这一句，我想留得久一点。"
	}
];
var WISHES = [
	{
		id: "w1",
		x: 18,
		y: 16,
		title: "睡到自然醒",
		body: "至少有几个早晨，不被闹钟打断。"
	},
	{
		id: "w2",
		x: 38,
		y: 10,
		title: "少一点内耗",
		body: "想清楚就好。不必把每一件事都反复预演。"
	},
	{
		id: "w3",
		x: 58,
		y: 18,
		title: "被好运撞到",
		body: "小的那种也行。绿灯、空座位、刚好够用的钱。"
	},
	{
		id: "w4",
		x: 78,
		y: 12,
		title: "去想去的地方",
		body: "地图上那些被圈过的点，今年可以兑现其中一个。"
	},
	{
		id: "w5",
		x: 22,
		y: 36,
		title: "身体轻快",
		body: "走得动，睡得着，天气变化时少一点抱怨。"
	},
	{
		id: "w6",
		x: 46,
		y: 30,
		title: "有人懂你的沉默",
		body: "不必解释也可以被领会。我申请在列。"
	},
	{
		id: "w7",
		x: 70,
		y: 38,
		title: "一件新的爱好",
		body: "跟我无关也很好。只属于你的、可以发呆的那种。"
	},
	{
		id: "w8",
		x: 86,
		y: 32,
		title: "不被随便比较",
		body: "你不是谁的版本。你是你。"
	},
	{
		id: "w9",
		x: 14,
		y: 58,
		title: "口袋里总有甜的",
		body: "字面意思。糖、水果、或者一句刚好的话。"
	},
	{
		id: "w10",
		x: 40,
		y: 62,
		title: "冬天有暖手",
		body: "手套、热饮，以及可以握住的那只手。"
	},
	{
		id: "w11",
		x: 64,
		y: 56,
		title: "夏天有晚风",
		body: "下班之后也不必立刻回家的那种风。"
	},
	{
		id: "w12",
		x: 84,
		y: 66,
		title: "每天有一点喜欢的事",
		body: "很小就行。足够让这一天被记住。"
	}
];
var WISH_EDGES = [
	["w1", "w2"],
	["w2", "w3"],
	["w3", "w4"],
	["w1", "w5"],
	["w2", "w6"],
	["w3", "w7"],
	["w5", "w6"],
	["w6", "w7"],
	["w7", "w8"],
	["w5", "w9"],
	["w6", "w10"],
	["w7", "w11"],
	["w9", "w10"],
	["w10", "w11"],
	["w11", "w12"]
];
function fillTemplate(text, config) {
	return text.replaceAll("{{her}}", config.herName).replaceAll("{{him}}", config.hisName);
}
function parseISO(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	if (!y || !m || !d) return null;
	return new Date(y, m - 1, d);
}
function startOfDay(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function isSameDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function formatDot(iso) {
	return iso.replaceAll("-", ".");
}
function addDays(iso, days) {
	const date = parseISO(iso);
	if (!date) return iso;
	date.setDate(date.getDate() + days);
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function elapsedSince(iso, now = /* @__PURE__ */ new Date()) {
	const from = parseISO(iso);
	if (!from) return {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};
	const ms = Math.max(0, now.getTime() - from.getTime());
	return {
		days: Math.floor(ms / 864e5),
		hours: Math.floor(ms % 864e5 / 36e5),
		minutes: Math.floor(ms % 36e5 / 6e4),
		seconds: Math.floor(ms % 6e4 / 1e3)
	};
}
function remainingUntil(date, now = /* @__PURE__ */ new Date()) {
	const ms = Math.max(0, date.getTime() - now.getTime());
	return {
		days: Math.floor(ms / 864e5),
		hours: Math.floor(ms % 864e5 / 36e5),
		minutes: Math.floor(ms % 36e5 / 6e4),
		seconds: Math.floor(ms % 6e4 / 1e3)
	};
}
function nextBirthdayDate(iso, now = /* @__PURE__ */ new Date()) {
	const born = parseISO(iso);
	if (!born) return null;
	const today = startOfDay(now);
	const next = new Date(today.getFullYear(), born.getMonth(), born.getDate());
	if (next.getTime() < today.getTime()) next.setFullYear(next.getFullYear() + 1);
	return next;
}
function isBirthdayToday(iso, now = /* @__PURE__ */ new Date()) {
	const born = parseISO(iso);
	if (!born) return false;
	return now.getMonth() === born.getMonth() && now.getDate() === born.getDate();
}
function dayIndex(now = /* @__PURE__ */ new Date()) {
	const start = new Date(now.getFullYear(), 0, 0);
	return Math.floor((now.getTime() - start.getTime()) / 864e5);
}
function todayISO() {
	const n = /* @__PURE__ */ new Date();
	const m = String(n.getMonth() + 1).padStart(2, "0");
	const d = String(n.getDate()).padStart(2, "0");
	return `${n.getFullYear()}-${m}-${d}`;
}
function streakFrom(days) {
	if (days.length === 0) return 0;
	const sorted = [...days].sort();
	let streak = 1;
	for (let i = sorted.length - 1; i > 0; i--) {
		const a = new Date(sorted[i]);
		const b = new Date(sorted[i - 1]);
		if (Math.round((a.getTime() - b.getTime()) / 864e5) === 1) streak += 1;
		else break;
	}
	const last = new Date(sorted[sorted.length - 1]);
	const now = /* @__PURE__ */ new Date();
	if (!isSameDay(last, now)) {
		const y = new Date(now);
		y.setDate(y.getDate() - 1);
		if (!isSameDay(last, y)) return 0;
	}
	return streak;
}
var useGift = create()(persist((set, get) => ({
	opened: false,
	chapter: 0,
	flipped: {},
	revealed: {},
	unwrapped: {},
	reply: "",
	replySaved: false,
	secretPassed: false,
	musicOn: true,
	config: DEFAULT_CONFIG,
	app: "desktop",
	visits: 0,
	lastVisit: "",
	visitDays: [],
	usedCoupons: {},
	donePlans: {},
	openedCapsules: {},
	openedSecrets: {},
	scratched: false,
	fortuneSeen: "",
	foundHidden: false,
	candleOut: false,
	birthdayPlayed: false,
	open: () => set({
		opened: true,
		app: "desktop"
	}),
	setChapter: (n) => set({ chapter: n }),
	toggleFlip: (id) => set((s) => ({ flipped: {
		...s.flipped,
		[id]: !s.flipped[id]
	} })),
	revealWish: (id) => set((s) => ({ revealed: {
		...s.revealed,
		[id]: true
	} })),
	unwrap: (id) => set((s) => ({ unwrapped: {
		...s.unwrapped,
		[id]: true
	} })),
	setReply: (value) => set({
		reply: value,
		replySaved: false
	}),
	saveReply: () => set({ replySaved: true }),
	patchConfig: (patch) => set((s) => ({ config: {
		...s.config,
		...patch
	} })),
	setMusicOn: (on) => set({ musicOn: on }),
	setApp: (app) => set({ app }),
	touchVisit: () => {
		const day = todayISO();
		const s = get();
		if (s.lastVisit === day) return;
		const days = s.visitDays.includes(day) ? s.visitDays : [...s.visitDays, day].slice(-120);
		set({
			visits: s.visits + 1,
			lastVisit: day,
			visitDays: days
		});
	},
	useCoupon: (id) => set((s) => ({ usedCoupons: {
		...s.usedCoupons,
		[id]: true
	} })),
	togglePlan: (id) => set((s) => {
		const next = { ...s.donePlans };
		if (next[id]) delete next[id];
		else next[id] = todayISO();
		return { donePlans: next };
	}),
	openCapsule: (id) => set((s) => ({ openedCapsules: {
		...s.openedCapsules,
		[id]: true
	} })),
	openSecret: (id) => set((s) => ({ openedSecrets: {
		...s.openedSecrets,
		[id]: true
	} })),
	setScratched: () => set({ scratched: true }),
	markFortune: (day) => set({ fortuneSeen: day }),
	markHidden: () => set({ foundHidden: true }),
	blowCandle: () => set({ candleOut: true }),
	markBirthdayPlayed: () => set({ birthdayPlayed: true }),
	reseal: () => set({
		opened: false,
		chapter: 0,
		secretPassed: false,
		app: "desktop"
	}),
	resetProgress: () => set({
		opened: false,
		chapter: 0,
		flipped: {},
		revealed: {},
		unwrapped: {},
		reply: "",
		replySaved: false,
		secretPassed: false,
		app: "desktop",
		visits: 0,
		lastVisit: "",
		visitDays: [],
		usedCoupons: {},
		donePlans: {},
		openedCapsules: {},
		openedSecrets: {},
		scratched: false,
		fortuneSeen: "",
		foundHidden: false,
		candleOut: false,
		birthdayPlayed: false
	})
}), {
	name: "yuni-os-v1",
	version: 2,
	migrate: (persisted) => {
		const { config: _oldConfig, ...rest } = persisted ?? {};
		return {
			...rest,
			config: DEFAULT_CONFIG
		};
	},
	merge: (persisted, current) => {
		const p = persisted ?? {};
		return {
			...current,
			...p,
			config: {
				...DEFAULT_CONFIG,
				...current.config,
				...p.config
			}
		};
	}
}));
function CustomizeDialog() {
	const config = useGift((s) => s.config);
	const patchConfig = useGift((s) => s.patchConfig);
	const reseal = useGift((s) => s.reseal);
	const resetProgress = useGift((s) => s.resetProgress);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(config);
	function onOpenChange(next) {
		if (next) setDraft(useGift.getState().config);
		setOpen(next);
	}
	function save() {
		patchConfig(draft);
		setOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon",
				className: "fixed top-4 left-4 z-40 text-subtle opacity-50 hover:opacity-100",
				"aria-label": "编辑这份档案",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "编辑这份档案" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "改成你们的名字、在一起的日子和真心话。保存后会留在这台设备上。" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "她的称呼",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.herName,
						onChange: (e) => setDraft({
							...draft,
							herName: e.target.value
						}),
						maxLength: 20
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "你的署名",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.hisName,
						onChange: (e) => setDraft({
							...draft,
							hisName: e.target.value
						}),
						maxLength: 20
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "在一起的那天",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: draft.togetherSince,
						onChange: (e) => setDraft({
							...draft,
							togetherSince: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "生日",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: draft.birthdayISO,
						onChange: (e) => setDraft({
							...draft,
							birthdayISO: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "生日文案",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.birthdayLabel,
						onChange: (e) => setDraft({
							...draft,
							birthdayLabel: e.target.value
						}),
						placeholder: "今天 / 十月一日"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "开场提问（可选）",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.secretQuestion,
						onChange: (e) => setDraft({
							...draft,
							secretQuestion: e.target.value
						}),
						placeholder: "只有她知道的问题"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "答案",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.secretAnswer,
						onChange: (e) => setDraft({
							...draft,
							secretAnswer: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
					label: "隐藏页口令",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.hiddenKeyword,
						onChange: (e) => setDraft({
							...draft,
							hiddenKeyword: e.target.value
						}),
						placeholder: "键盘输入后进入隐藏页"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-subtle",
						children: "在桌面连点「YUNI OS」五次，也可以打开。"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
					label: "信",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: draft.letter,
						onChange: (e) => setDraft({
							...draft,
							letter: e.target.value
						}),
						className: "min-h-44 font-display leading-relaxed"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-subtle",
						children: [
							"可用 ",
							"{{her}}",
							" 和 ",
							"{{him}}",
							" 自动代入称呼。"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "约定",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: draft.promise,
						onChange: (e) => setDraft({
							...draft,
							promise: e.target.value
						}),
						className: "font-display leading-relaxed"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: save,
							className: "flex-1",
							children: "保存"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => {
								reseal();
								setOpen(false);
							},
							children: "重看拆封"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => {
								setDraft(DEFAULT_CONFIG);
								patchConfig(DEFAULT_CONFIG);
								resetProgress();
								setOpen(false);
							},
							children: "恢复默认"
						})
					]
				})
			]
		})] })]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
var BEAT = 60 / 70;
var LOOP_BEATS = 16;
/** Original music-box phrase in MIDI. Loops every 16 beats. */
var PHRASE = [
	[
		76,
		0,
		1
	],
	[
		74,
		1,
		1
	],
	[
		72,
		2,
		1.5
	],
	[
		69,
		3.5,
		.5
	],
	[
		72,
		4,
		1
	],
	[
		74,
		5,
		1
	],
	[
		76,
		6,
		2
	],
	[
		79,
		8,
		1
	],
	[
		76,
		9,
		1
	],
	[
		74,
		10,
		1
	],
	[
		72,
		11,
		1
	],
	[
		69,
		12,
		2
	],
	[
		67,
		14,
		2
	]
];
function midiHz(note) {
	return 440 * 2 ** ((note - 69) / 12);
}
var MusicBox = class {
	ctx = null;
	master = null;
	timer = null;
	voices = [];
	scheduled = /* @__PURE__ */ new Set();
	startedAt = 0;
	playing = false;
	async start() {
		if (this.playing) return;
		const ctx = this.ctx ?? new AudioContext();
		this.ctx = ctx;
		if (ctx.state === "suspended") await ctx.resume();
		const master = ctx.createGain();
		master.gain.value = .07;
		master.connect(ctx.destination);
		this.master = master;
		this.startedAt = ctx.currentTime + .08;
		this.scheduled.clear();
		this.playing = true;
		this.schedule();
		this.timer = window.setInterval(() => this.schedule(), 400);
	}
	stop() {
		this.playing = false;
		if (this.timer != null) {
			window.clearInterval(this.timer);
			this.timer = null;
		}
		this.scheduled.clear();
		for (const voice of this.voices) try {
			voice.osc.stop();
		} catch {}
		this.voices = [];
		if (this.master && this.ctx) {
			const now = this.ctx.currentTime;
			this.master.gain.cancelScheduledValues(now);
			this.master.gain.setValueAtTime(Math.max(this.master.gain.value, 1e-4), now);
			this.master.gain.exponentialRampToValueAtTime(1e-4, now + .35);
		}
		this.master = null;
	}
	schedule() {
		const ctx = this.ctx;
		const master = this.master;
		if (!ctx || !master || !this.playing) return;
		const beatsNow = (ctx.currentTime - this.startedAt) / BEAT;
		const from = beatsNow - .02;
		const to = beatsNow + 4;
		const loopFrom = Math.floor(from / LOOP_BEATS);
		const loopTo = Math.floor(to / LOOP_BEATS);
		for (let loop = loopFrom; loop <= loopTo; loop++) for (const [note, start, length] of PHRASE) {
			const absBeat = loop * LOOP_BEATS + start;
			if (absBeat < from || absBeat > to) continue;
			const key = `${loop}:${start}:${note}`;
			if (this.scheduled.has(key)) continue;
			const when = this.startedAt + absBeat * BEAT;
			if (when < ctx.currentTime - .02) continue;
			this.scheduled.add(key);
			this.pluck(ctx, master, midiHz(note), when, length * BEAT);
		}
	}
	pluck(ctx, master, freq, when, dur) {
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = "triangle";
		osc.frequency.setValueAtTime(freq, when);
		gain.gain.setValueAtTime(1e-4, when);
		gain.gain.exponentialRampToValueAtTime(.22, when + .02);
		gain.gain.exponentialRampToValueAtTime(1e-4, when + Math.max(dur * .92, .12));
		const filter = ctx.createBiquadFilter();
		filter.type = "lowpass";
		filter.frequency.setValueAtTime(1800, when);
		osc.connect(filter);
		filter.connect(gain);
		gain.connect(master);
		osc.start(when);
		osc.stop(when + dur + .05);
		this.voices.push({ osc });
		osc.onended = () => {
			this.voices = this.voices.filter((v) => v.osc !== osc);
		};
	}
};
var box = null;
function getMusicBox() {
	box = box ?? new MusicBox();
	return box;
}
function Soundtrack() {
	const opened = useGift((s) => s.opened);
	const musicOn = useGift((s) => s.musicOn);
	(0, import_react.useEffect)(() => {
		const box = getMusicBox();
		if (opened && musicOn) box.start();
		else box.stop();
	}, [opened, musicOn]);
	(0, import_react.useEffect)(() => {
		function onVis() {
			const box = getMusicBox();
			if (document.hidden) box.stop();
			else if (useGift.getState().opened && useGift.getState().musicOn) box.start();
		}
		document.addEventListener("visibilitychange", onVis);
		return () => {
			document.removeEventListener("visibilitychange", onVis);
			getMusicBox().stop();
		};
	}, []);
	return null;
}
function MusicToggle() {
	const opened = useGift((s) => s.opened);
	const musicOn = useGift((s) => s.musicOn);
	const setMusicOn = useGift((s) => s.setMusicOn);
	if (!opened) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "ghost",
		size: "icon",
		className: "fixed top-4 right-4 z-40 text-subtle opacity-50 hover:opacity-100",
		"aria-label": musicOn ? "关闭八音盒" : "打开八音盒",
		"aria-pressed": musicOn,
		onClick: () => setMusicOn(!musicOn),
		children: musicOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music4, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "size-4" })
	});
}
var APPS = [
	{
		id: "timeline",
		label: "提交记录",
		kicker: "git"
	},
	{
		id: "photos",
		label: "相册",
		kicker: "album"
	},
	{
		id: "secrets",
		label: "秘密",
		kicker: "secret"
	},
	{
		id: "reasons",
		label: "因为",
		kicker: "why"
	},
	{
		id: "map",
		label: "地图",
		kicker: "map"
	},
	{
		id: "stats",
		label: "数据",
		kicker: "data"
	},
	{
		id: "dictionary",
		label: "词典",
		kicker: "lexicon"
	},
	{
		id: "coupons",
		label: "兑换券",
		kicker: "ticket"
	},
	{
		id: "plans",
		label: "未来",
		kicker: "todo"
	},
	{
		id: "capsules",
		label: "胶囊",
		kicker: "time"
	},
	{
		id: "replay",
		label: "重来一次",
		kicker: "rerun"
	},
	{
		id: "weather",
		label: "天气",
		kicker: "sky"
	},
	{
		id: "achievements",
		label: "成就",
		kicker: "badge"
	},
	{
		id: "wishes",
		label: "星图",
		kicker: "stars"
	},
	{
		id: "scratch",
		label: "刮刮卡",
		kicker: "scratch"
	},
	{
		id: "fortune",
		label: "今日签",
		kicker: "oracle"
	}
];
var DOCK = [
	{
		id: "letter",
		label: "情书"
	},
	{
		id: "photos",
		label: "相册"
	},
	{
		id: "random",
		label: "随机"
	},
	{
		id: "birthday",
		label: "生日"
	}
];
var COMMITS = [
	{
		id: "c1",
		date: "2024-09-28",
		hash: "a1e0",
		title: "第一次见面",
		adds: ["认识了一个特别的人", "世界忽然安静了一点"],
		branch: "相识",
		photoId: "meet"
	},
	{
		id: "c2",
		date: "2024-10-12",
		hash: "b3c2",
		title: "第一次约会",
		adds: ["一起吃了火锅", "她说了太多次“好撑”"],
		branch: "相识",
		photoId: "cook"
	},
	{
		id: "c3",
		date: "2024-11-03",
		hash: "c7d9",
		title: "那场不算浪漫的雨",
		adds: ["伞不够大", "谁都没有抱怨"],
		branch: "热恋",
		photoId: "rain"
	},
	{
		id: "c4",
		date: "2025-01-18",
		hash: "d4e1",
		title: "并排走的那段路",
		adds: ["谁走得快半步", "谁又会回头等"],
		branch: "热恋",
		photoId: "walk"
	},
	{
		id: "c5",
		date: "2025-04-02",
		hash: "e8f0",
		title: "窗口外面一直在动",
		adds: ["车票还在口袋里皱着", "重要的不是去了哪里"],
		branch: "一起旅行",
		photoId: "trip"
	},
	{
		id: "c6",
		date: "2025-08-14",
		hash: "f2a6",
		title: "窗台那支花",
		adds: ["城市在玻璃外面自己亮着", "愿意把夜晚分给对方"],
		branch: "热恋",
		photoId: "night"
	},
	{
		id: "c7",
		date: "2026-09-28",
		hash: "ff01",
		title: "到今天",
		adds: ["把这一天郑重地交给你", "main 仍在开发中"],
		branch: "未来",
		photoId: "today"
	}
];
var BRANCHES = [
	"相识",
	"热恋",
	"一起旅行",
	"未来"
];
var PHOTOS = MOMENTS.map((m, i) => ({
	id: m.id,
	date: COMMITS[i]?.date ?? "2024-09-28",
	title: m.title,
	place: [
		"起初的街口",
		"并排的人行道",
		"一场雨里",
		"那间厨房",
		"移动的窗口",
		"夜里的窗台",
		"海边"
	][i],
	mood: [
		"轻",
		"稳",
		"湿",
		"暖",
		"远",
		"静",
		"郑重"
	][i],
	whisper: m.body,
	image: m.image,
	tags: ["我们", m.when]
}));
var PLACES = [
	{
		id: "sea",
		name: "海边",
		visited: true,
		date: "2026-09-28",
		event: "把这一天交给你",
		weather: "黄昏",
		steps: "走了很久，没有数",
		food: "咸的风",
		note: "海会退下去，天会暗下来。",
		image: "/images/dusk.jpg",
		x: 22,
		y: 62
	},
	{
		id: "rain",
		name: "雨巷",
		visited: true,
		date: "2024-11-03",
		event: "那场不算浪漫的雨",
		weather: "小雨",
		steps: "裤脚湿了",
		food: "热饮",
		note: "雨停的时候，路边的灯还亮着。",
		image: "/images/rain.jpg",
		x: 38,
		y: 28
	},
	{
		id: "kitchen",
		name: "厨房",
		visited: true,
		date: "2024-10-12",
		event: "一锅说不上名字的晚饭",
		weather: "室内",
		steps: "来回十几趟",
		food: "盐放多了也没有关系",
		note: "厨房里的声音，比外面的世界更像家。",
		image: "/images/kitchen.jpg",
		x: 58,
		y: 44
	},
	{
		id: "train",
		name: "列车",
		visited: true,
		date: "2025-04-02",
		event: "一次出发",
		weather: "阴",
		steps: "车厢里坐下就好",
		food: "窗口外面的风景",
		note: "你可以在移动的风景旁边，安心地发呆。",
		image: "/images/train.jpg",
		x: 74,
		y: 22
	},
	{
		id: "window",
		name: "窗台",
		visited: true,
		date: "2025-08-14",
		event: "夜里",
		weather: "城市自己亮着",
		note: "房间里只剩下水和花茎。",
		image: "/images/window.jpg",
		x: 48,
		y: 72
	},
	{
		id: "next-1",
		name: "?????",
		visited: false,
		note: "这里还没去。但迟早会一起去。",
		x: 82,
		y: 58
	},
	{
		id: "next-2",
		name: "?????",
		visited: false,
		note: "地图上被圈过的点，留给以后。",
		x: 16,
		y: 18
	}
];
var SECRETS = [
	{
		id: "s1",
		title: "第一次见你",
		body: "第一次见你的时候，我其实有点紧张。后来想，真正的遇见都很轻。"
	},
	{
		id: "s2",
		title: "第二次晚安",
		body: "你第二次说晚安的时候，我已经开始期待第三次了。"
	},
	{
		id: "s3",
		title: "你睡着以后",
		body: "你睡着之后，我有时候会偷偷看很久。不是监视，是舍不得把灯关掉。"
	},
	{
		id: "s4",
		title: "一句很久的话",
		body: "有一次你说了一句话，我记了很久，但一直没告诉你。那句话很普通，所以更珍贵。"
	},
	{
		id: "s5",
		title: "回头等",
		body: "你会回头等。哪怕只慢半步。被等待，是一种被选择。"
	},
	{
		id: "s6",
		title: "随口说过的",
		body: "你记得我随口说过的话。连我自己都忘了。你却像收藏邮票一样，把它们留着。"
	},
	{
		id: "s7",
		title: "沉默",
		body: "你让沉默变得安全。不是冷场，是可以一起什么都不说。"
	},
	{
		id: "s8",
		title: "认真",
		body: "你说话时会轻轻皱眉。那是认真，不是脾气。"
	},
	{
		id: "s9",
		title: "明天",
		body: "你让我想把明天过好。不是鸡汤。是真的想早一点起来，好见面。"
	},
	{
		id: "s10",
		title: "够了",
		body: "其他的形容词都会过期。你在，就够了。这一句，我想留得久一点。"
	}
];
var COUPONS = [
	{
		id: "t1",
		title: "免生气一次券",
		body: "有效期：直到你真的不想再生气。核销后我会记得改。"
	},
	{
		id: "t2",
		title: "奶茶一杯券",
		body: "甜度你定。冰也你定。我负责去排。"
	},
	{
		id: "t3",
		title: "按摩三十分钟券",
		body: "力度可调。中途可以改口令。"
	},
	{
		id: "t4",
		title: "一个愿望券",
		body: "不过分的那种。也可以过分一点。"
	},
	{
		id: "t5",
		title: "陪逛街券",
		body: "不催、不抱怨、帮提袋子。试用期：一整天。"
	},
	{
		id: "t6",
		title: "立刻道歉券",
		body: "先道歉，再讲道理。顺序不许颠倒。"
	},
	{
		id: "t7",
		title: "看电影券",
		body: "座位你挑。如果睡着了，我会把片尾曲记下来。"
	},
	{
		id: "t8",
		title: "吃夜宵券",
		body: "十二点以后也算。热的，最好。"
	}
];
var WORDS = [
	{
		id: "d1",
		word: "随便",
		pos: "副词，不可信",
		meaning: "表面上没有偏好，实际上已经有答案。",
		usage: "“随便。”（十分钟后点了那家。）",
		related: "选择 / 心软 / 她"
	},
	{
		id: "d2",
		word: "没生气",
		pos: "形容词，待核实",
		meaning: "语气平稳，空气却变紧了一点。",
		usage: "“我没生气。”（建议使用立刻道歉券。）",
		related: "安静 / 认真"
	},
	{
		id: "d3",
		word: "我不饿",
		pos: "动词短语",
		meaning: "此刻不饿。十分钟后可能会饿。",
		usage: "“我不饿。”（随后偷走你盘子里的最后一口。）",
		related: "夜宵券 / 火锅"
	},
	{
		id: "d4",
		word: "笨蛋",
		pos: "名词，亲昵",
		meaning: "指某位经常忘记带东西的人。有时也反过来用。",
		usage: "“你怎么又忘了。”",
		related: "可爱 / 固执 / 她"
	},
	{
		id: "d5",
		word: "再睡五分钟",
		pos: "时间单位",
		meaning: "最小不可再分的赖床度量。可叠加。",
		usage: "闹钟响了三次以后仍成立。",
		related: "早晨 / 窗台"
	},
	{
		id: "d6",
		word: "在",
		pos: "动词，核心",
		meaning: "当你回头的时候，我都在。",
		usage: "剩下的日子，我们慢慢走。",
		related: "约定 / 未来"
	}
];
var PLANS = [
	{
		id: "f1",
		title: "一起去看海",
		body: "不一定要很远。有风就行。"
	},
	{
		id: "f2",
		title: "一起跨年",
		body: "倒计时结束的那一秒，站在一起。"
	},
	{
		id: "f3",
		title: "去一个没去过的城市",
		body: "地图上那些问号，兑现其中一个。"
	},
	{
		id: "f4",
		title: "拍一组普通的照片",
		body: "不必正式。把当天的脸留下来就好。"
	},
	{
		id: "f5",
		title: "一起看日出",
		body: "起得来就看。起不来，看晚霞也算。"
	},
	{
		id: "f6",
		title: "再一起过一个生日",
		body: "这一份档案，明年还想打开。"
	},
	{
		id: "f7",
		title: "养一盆不容易死的植物",
		body: "先从窗台那支花开始。"
	},
	{
		id: "f8",
		title: "把晚安说得更久一点",
		body: "没有统计意义。只有习惯。"
	}
];
var CAPSULES = [
	{
		id: "k1",
		title: "写给此刻的她",
		unlock: "now",
		preview: "现在就可以打开。",
		body: "不知道你是哪一天点开的。我只知道，我想让你看见：在我这里，你从来都不是一段插曲。"
	},
	{
		id: "k2",
		title: "第一千天",
		unlock: "days",
		days: 1e3,
		preview: "该内容将在恋爱第 1000 天解锁。",
		body: "如果这封信被打开了，说明我们把一件很慢的事做成了。谢谢你还在。"
	},
	{
		id: "k3",
		title: "下一个生日",
		unlock: "birthday",
		preview: "只有到了你的生日，才能打开。",
		body: "生日快乐。希望你打开这里的时候，我们还是在一起。也希望以后很多年的今天，我都在。"
	}
];
var ACHIEVEMENTS = [
	{
		id: "a1",
		title: "第一次见面",
		body: "init commit."
	},
	{
		id: "a2",
		title: "第一次约会",
		body: "feature: 一起吃饭."
	},
	{
		id: "a3",
		title: "第一场雨",
		body: "谁都没有抱怨."
	},
	{
		id: "a4",
		title: "一次出发",
		body: "车票还在口袋里皱着."
	},
	{
		id: "a5",
		title: "打开档案",
		body: "第一次进入系统."
	},
	{
		id: "a6",
		title: "读完一封信",
		body: "字是一个一个出来的."
	},
	{
		id: "a7",
		title: "点亮一颗星",
		body: "愿望被认真对待."
	},
	{
		id: "a8",
		title: "核销一张券",
		body: "从网页走到现实."
	},
	{
		id: "a9",
		title: "连续想来",
		body: "不是打卡，是愿意回来.",
		hidden: true
	},
	{
		id: "a10",
		title: "找到隐藏页",
		body: "你真的很喜欢研究这个网站.",
		hidden: true
	}
];
var FORTUNES = [
	"今天也很想你。",
	"你知道吗，我还是觉得遇见你很幸运。",
	"绿灯、空座位、刚好够用的话，都分你一点。",
	"如果累了，就把难的事先放下。我在。",
	"今天适合被好好对待。包括被你自己。",
	"口袋里总有甜的。字面意思也可以。",
	"已连续想你很多天。系统尚未发现上限。",
	"少一点内耗。想清楚就好。",
	"推荐活动：抱一下。",
	"今日天气：适合想你。",
	"你不是谁的版本。你是你。",
	"晚安可以晚一点说。我会等。"
];
var SYSTEM_MESSAGES = [
	"检测到你今天也来看我了。",
	"Warning: someone is currently being loved very much.",
	"Error 404: 找不到不爱你的理由。",
	"Relationship: ONLINE",
	"main branch is still under development.",
	"Next release: 未来的我们"
];
var BIRTHDAY_LINES = [
	"今天是你的生日。",
	"但对我来说，最幸运的一天是遇见你。",
	"希望你今天开心。",
	"也希望以后很多年的今天，我都在。"
];
var STAT_FACTS = [
	{
		label: "她说「随便」后的真实决策概率",
		value: "3.7%"
	},
	{
		label: "「没生气」的可信度",
		value: "12%"
	},
	{
		label: "「我不饿」之后偷吃的概率",
		value: "94.2%"
	},
	{
		label: "你主动认错次数",
		value: "237"
	},
	{
		label: "她实际上永远没错的次数",
		value: "∞"
	}
];
var HIDDEN_LETTER = `这里没有照片，没有数据，也没有倒计时。
只有一句话：
遇见你之后，我很少羡慕别人。`;
var BOOT_LINES = [
	"Loading memories...",
	"Loading photographs...",
	"Loading us...",
	"System ready."
];
function AppFrame({ kicker, title, children }) {
	const setApp = useGift((s) => s.setApp);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 pb-24 pt-16 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon",
				onClick: () => setApp("desktop"),
				"aria-label": "返回桌面",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.3em] text-subtle",
				children: kicker
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-medium text-fg sm:text-3xl",
				children: title
			})] })]
		}), children]
	});
}
function TimelineApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "git log",
		title: "提交记录",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "把恋爱写成还在开发的仓库。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 flex flex-col gap-6",
				children: COMMITS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-l border-border pl-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-latin text-xs text-subtle",
							children: [
								formatDot(c.date),
								" · ",
								c.hash,
								" · ",
								c.branch
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-display text-lg text-fg",
							children: ["commit: ", c.title]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 text-sm text-muted",
							children: c.adds.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["+ ", line] }, line))
						})
					]
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-lg border border-border bg-surface p-4 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Branches" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 font-latin text-xs text-subtle",
						children: BRANCHES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["├── ", b] }, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs",
						children: [
							"main branch is still under development.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Next release: 未来的我们"
						]
					})
				]
			})
		]
	});
}
function PhotosApp() {
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const photo = PHOTOS.find((p) => p.id === openId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "album",
		title: "回忆相册",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "表面只有日期。点开才有没说的话。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid grid-cols-2 gap-3",
				children: PHOTOS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpenId(p.id),
					className: "w-full overflow-hidden rounded-lg bg-surface text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: "",
						className: "aspect-photo w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block px-3 py-2 text-xs tracking-[0.2em] text-subtle",
						children: formatDot(p.date)
					})]
				}) }, p.id))
			}),
			photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 paper-sheet rounded-xl px-5 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-[0.2em] text-ink-muted",
						children: [
							formatDot(photo.date),
							" · ",
							photo.place
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl text-ink",
						children: photo.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-ink-muted",
						children: ["心情 · ", photo.mood]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-ink",
						children: photo.whisper
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						className: "mt-4 text-ink-muted",
						onClick: () => setOpenId(null),
						children: "收起"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-subtle",
				children: "点一张照片，看背面。"
			})
		]
	});
}
function SecretsApp() {
	const opened = useGift((s) => s.openedSecrets);
	const openSecret = useGift((s) => s.openSecret);
	const count = SECRETS.filter((s) => opened[s.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "secret",
		title: "你不知道的我",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted",
			children: [
				"已解锁 ",
				count,
				" / ",
				SECRETS.length,
				" 个秘密"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2",
			children: SECRETS.map((secret, i) => {
				const on = Boolean(opened[secret.id]);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "h-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => openSecret(secret.id),
						className: cn("flip-card h-full w-full", on && "is-flipped"),
						"aria-pressed": on,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flip-inner block h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flip-face flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-4 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm text-primary",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base text-fg",
									children: on ? secret.title : "未翻开"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flip-back flip-face flex h-full items-center rounded-lg bg-paper p-4 text-left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm leading-relaxed text-ink",
									children: secret.body
								})
							})]
						})
					})
				}, secret.id);
			})
		})]
	});
}
function ReasonsApp() {
	const flipped = useGift((s) => s.flipped);
	const toggleFlip = useGift((s) => s.toggleFlip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "why",
		title: "因为",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "十二件很小的事。点开看背面。"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid grid-cols-2 gap-3",
			children: REASONS.map((reason, i) => {
				const on = Boolean(flipped[reason.id]);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "h-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toggleFlip(reason.id),
						className: cn("flip-card h-full w-full", on && "is-flipped"),
						"aria-pressed": on,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flip-inner block h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flip-face flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-4 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm text-primary",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base leading-snug text-fg",
									children: reason.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flip-back flip-face flex h-full flex-col justify-center rounded-lg bg-paper p-4 text-left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm leading-relaxed text-ink",
									children: reason.body
								})
							})]
						})
					})
				}, reason.id);
			})
		})]
	});
}
function MapApp() {
	const [id, setId] = (0, import_react.useState)(PLACES[0].id);
	const place = PLACES.find((p) => p.id === id) ?? PLACES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "map",
		title: "恋爱地图",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "去过的地方会亮着。问号留给以后。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-6 aspect-photo overflow-hidden rounded-xl bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/morning.jpg",
					alt: "",
					className: "size-full object-cover opacity-40"
				}), PLACES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setId(p.id),
					className: "absolute size-8 -translate-x-1/2 -translate-y-1/2 rounded-full",
					style: {
						left: `${p.x}%`,
						top: `${p.y}%`
					},
					"aria-label": p.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-3 rounded-full", p.visited ? "bg-primary" : "bg-subtle", id === p.id && "size-4") })
				}, p.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-5 rounded-xl border border-border bg-bg-elevated p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-subtle",
						children: place.visited ? formatDot(place.date ?? "") : "未点亮"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl",
						children: place.name
					}),
					place.visited ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-3 space-y-1 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: place.event }),
							place.weather ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["天气 · ", place.weather] }) : null,
							place.steps ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["步数 · ", place.steps] }) : null,
							place.food ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["吃了 · ", place.food] }) : null
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: place.note
					})
				]
			})
		]
	});
}
function ReplayApp() {
	const [step, setStep] = (0, import_react.useState)(0);
	const lines = (0, import_react.useMemo)(() => [
		...COMMITS.map((c) => c.title),
		"现在",
		"我还是会走向你。"
	], []);
	const done = step >= lines.length - 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "rerun",
		title: "如果重新认识你一次",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "如果人生可以重新运行一次程序……"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 flex flex-col gap-3",
				children: lines.slice(0, step + 1).map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rise-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("font-display text-xl", i === lines.length - 1 ? "text-primary" : "text-fg"),
						children: line
					}), i < step && i < lines.length - 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-subtle",
						children: "↓"
					}) : null]
				}, `${line}-${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "paper",
				className: "mt-8",
				onClick: () => setStep((s) => Math.min(lines.length - 1, s + 1)),
				disabled: done,
				children: step === 0 ? "重新运行" : done ? "已走向你" : "下一步"
			})
		]
	});
}
function LetterApp() {
	const config = useGift((s) => s.config);
	const reply = useGift((s) => s.reply);
	const replySaved = useGift((s) => s.replySaved);
	const setReply = useGift((s) => s.setReply);
	const saveReply = useGift((s) => s.saveReply);
	const typed = useTyped(fillTemplate(config.letter, config));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "mail",
		title: "写给你",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "paper-sheet cursor-pointer rounded-xl px-6 py-8 sm:px-10",
			onClick: typed.skip,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-lg leading-8 whitespace-pre-line text-ink",
				children: [typed.text, typed.done ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "caret",
					"aria-hidden": "true"
				})]
			}), typed.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 font-display text-base leading-8 whitespace-pre-line text-ink",
				children: fillTemplate(config.promise, config)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-ink-muted",
				children: "点一下信纸，可以一次看完。"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-xl border border-border bg-bg-elevated p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "如果你愿意，可以把想说的话留在这里。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					className: "mt-3 border-transparent bg-paper font-display text-ink",
					value: reply,
					onChange: (e) => setReply(e.target.value),
					placeholder: "写给未来的我们。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "paper",
						onClick: saveReply,
						disabled: !reply.trim(),
						children: "留下"
					}), replySaved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-primary",
						children: "我收到了。"
					}) : null]
				})
			]
		})]
	});
}
function useTyped(source) {
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setCount(source.length);
			return;
		}
		setCount(0);
		let i = 0;
		const id = window.setInterval(() => {
			i += 1;
			setCount(i);
			if (i >= source.length) window.clearInterval(id);
		}, 24);
		return () => window.clearInterval(id);
	}, [source]);
	return {
		text: source.slice(0, count),
		done: count >= source.length,
		skip: () => setCount(source.length)
	};
}
function StatsApp() {
	const config = useGift((s) => s.config);
	const visits = useGift((s) => s.visits);
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	const t = elapsedSince(config.togetherSince, now);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "data",
		title: "恋爱数据面板",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "相爱时间",
						value: `${t.days} 天`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "此刻",
						value: `${t.hours} 时 ${t.minutes} 分`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "访问次数",
						value: `${Math.max(visits, 1)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "说过晚安",
						value: "无法统计"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-3",
				children: STAT_FACTS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-end justify-between gap-4 border-b border-hairline pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg text-fg",
						children: row.value
					})]
				}, row.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted",
				children: "系统结论：她仍然是这个项目唯一的管理员。权限：100%。"
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-surface px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-display text-xl",
			children: value
		})]
	});
}
function DictionaryApp() {
	const [id, setId] = (0, import_react.useState)(WORDS[0].id);
	const word = WORDS.find((w) => w.id === id) ?? WORDS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "lexicon",
		title: "专属词典",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "只有你们懂的词。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: WORDS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setId(w.id),
					className: cn("rounded-full px-3 py-2 text-sm", w.id === id ? "bg-paper text-ink" : "bg-surface text-muted"),
					children: w.word
				}, w.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "paper-sheet mt-6 rounded-xl px-5 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-ink",
						children: word.word
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs tracking-[0.2em] text-ink-muted",
						children: word.pos
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-ink",
						children: word.meaning
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-ink-muted",
						children: "典型用法"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink",
						children: word.usage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs text-ink-muted",
						children: ["关联词 · ", word.related]
					})
				]
			})
		]
	});
}
function CouponsApp() {
	const used = useGift((s) => s.usedCoupons);
	const useCoupon = useGift((s) => s.useCoupon);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "ticket",
		title: "兑换券",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "可以兑现到现实里。点一下核销。"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid gap-3",
			children: COUPONS.map((c) => {
				const spent = Boolean(used[c.id]);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						if (!spent) useCoupon(c.id);
					},
					className: cn("flex w-full flex-col rounded-xl border px-4 py-4 text-left", spent ? "border-border bg-bg-elevated opacity-60" : "border-primary/30 bg-surface"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-[0.2em] text-subtle",
							children: spent ? "已核销" : "领取"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 text-sm text-muted",
						children: c.body
					})]
				}) }, c.id);
			})
		})]
	});
}
function FortuneApp() {
	const fortuneSeen = useGift((s) => s.fortuneSeen);
	const markFortune = useGift((s) => s.markFortune);
	const today = /* @__PURE__ */ new Date();
	const key = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
	const line = FORTUNES[dayIndex(today) % FORTUNES.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "oracle",
		title: "今日一签",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "每天一句。不是打卡，只是遇见。"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "paper-sheet mt-8 rounded-xl px-6 py-10 text-center",
			children: fortuneSeen === key ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl leading-relaxed text-ink",
				children: line
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ink",
				onClick: () => markFortune(key),
				children: "抽签"
			})
		})]
	});
}
function ScratchApp() {
	const scratched = useGift((s) => s.scratched);
	const setScratched = useGift((s) => s.setScratched);
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas || scratched) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const surface = canvas;
		const brush = ctx;
		const { width, height } = surface;
		brush.fillStyle = "#6b5e54";
		brush.fillRect(0, 0, width, height);
		brush.fillStyle = "#f3ebe1";
		brush.font = "20px serif";
		brush.fillText("刮开", width / 2 - 22, height / 2 + 6);
		let drawing = false;
		function pos(e) {
			const r = surface.getBoundingClientRect();
			return {
				x: (e.clientX - r.left) / r.width * width,
				y: (e.clientY - r.top) / r.height * height
			};
		}
		function scratchAt(e) {
			const { x, y } = pos(e);
			brush.globalCompositeOperation = "destination-out";
			brush.beginPath();
			brush.arc(x, y, 18, 0, Math.PI * 2);
			brush.fill();
		}
		function down(e) {
			drawing = true;
			surface.setPointerCapture(e.pointerId);
			scratchAt(e);
		}
		function move(e) {
			if (drawing) scratchAt(e);
		}
		function up() {
			drawing = false;
			const data = brush.getImageData(0, 0, width, height).data;
			let clear = 0;
			for (let i = 3; i < data.length; i += 4) if (data[i] === 0) clear += 1;
			if (clear / (width * height) > .45) setScratched();
		}
		surface.addEventListener("pointerdown", down);
		surface.addEventListener("pointermove", move);
		surface.addEventListener("pointerup", up);
		return () => {
			surface.removeEventListener("pointerdown", down);
			surface.removeEventListener("pointermove", move);
			surface.removeEventListener("pointerup", up);
		};
	}, [scratched, setScratched]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "scratch",
		title: "刮刮卡",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "涂层下面有一张今天的券外的话。"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-6 overflow-hidden rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "paper-sheet flex min-h-48 items-center justify-center px-6 py-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl leading-relaxed text-ink",
					children: "你抽到了：一个不用解释的拥抱。"
				})
			}), scratched ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				width: 640,
				height: 280,
				className: "absolute inset-0 size-full touch-none"
			})]
		})]
	});
}
function WeatherApp() {
	const hour = (/* @__PURE__ */ new Date()).getHours();
	const sky = hour < 6 ? "夜里" : hour < 12 ? "晴" : hour < 18 ? "微风" : "适合想你";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "sky",
		title: "恋爱天气",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-4xl",
				children: sky
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 space-y-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
						label: "幸福指数",
						value: 98
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
						label: "想念指数",
						value: 86
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
						label: "拥抱需求",
						value: 100
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
						label: "闹脾气概率",
						value: 4
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-muted",
				children: [
					"当前天气：",
					sky,
					"。推荐活动：抱一下。"
				]
			})
		]
	});
}
function Meter({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1 flex justify-between text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "tabular-nums",
			children: [value, "%"]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-1.5 overflow-hidden rounded-full bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-primary",
			style: { width: `${value}%` }
		})
	})] });
}
function Dust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": "true",
		children: Array.from({ length: 10 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dust-speck" }, i))
	});
}
function PlansApp() {
	const done = useGift((s) => s.donePlans);
	const toggle = useGift((s) => s.togglePlan);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "todo",
		title: "未来计划",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "完成后可以勾选。会留下日期。"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 space-y-3",
			children: PLANS.map((plan) => {
				const when = done[plan.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggle(plan.id),
					className: "flex w-full items-start gap-3 rounded-lg border border-border bg-surface px-4 py-4 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-1 size-4 shrink-0 rounded-sm border", when ? "border-primary bg-primary" : "border-subtle") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-lg",
							children: plan.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted",
							children: plan.body
						}),
						when ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-2 block text-xs text-primary",
							children: ["完成于 ", when]
						}) : null
					] })]
				}) }, plan.id);
			})
		})]
	});
}
function CapsulesApp() {
	const config = useGift((s) => s.config);
	const opened = useGift((s) => s.openedCapsules);
	const openCapsule = useGift((s) => s.openCapsule);
	const days = elapsedSince(config.togetherSince).days;
	const birthday = isBirthdayToday(config.birthdayISO);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "time",
		title: "给未来的她",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "有的信要等到那一天。"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 space-y-4",
			children: CAPSULES.map((c) => {
				const unlocked = c.unlock === "now" || c.unlock === "days" && days >= (c.days ?? 0) || c.unlock === "birthday" && birthday;
				const seen = Boolean(opened[c.id]);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: c.preview
						}),
						unlocked ? seen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-base leading-relaxed whitespace-pre-line",
							children: fillTemplate(c.body, config)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "paper",
							className: "mt-4",
							onClick: () => openCapsule(c.id),
							children: "打开"
						}) : c.unlock === "days" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-subtle",
							children: [
								"还差 ",
								Math.max(0, (c.days ?? 0) - days),
								" 天 · 解锁日",
								" ",
								addDays(config.togetherSince, c.days ?? 0)
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-subtle",
							children: "生日当天自动解锁。"
						})
					]
				}, c.id);
			})
		})]
	});
}
function WishesApp() {
	const revealed = useGift((s) => s.revealed);
	const revealWish = useGift((s) => s.revealWish);
	const [active, setActive] = (0, import_react.useState)(null);
	const current = WISHES.find((w) => w.id === active);
	const count = WISHES.filter((w) => revealed[w.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "stars",
		title: "她的星图",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"点亮一颗星。已点亮 ",
					count,
					" / ",
					WISHES.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-6 aspect-constellation w-full sm:aspect-photo",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 100 80",
					className: "absolute inset-0 size-full",
					"aria-hidden": "true",
					children: WISH_EDGES.map(([a, b]) => {
						const pa = WISHES.find((w) => w.id === a);
						const pb = WISHES.find((w) => w.id === b);
						if (!pa || !pb) return null;
						const lit = revealed[a] && revealed[b];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: pa.x,
							y1: pa.y,
							x2: pb.x,
							y2: pb.y,
							stroke: lit ? "var(--color-primary)" : "var(--color-subtle)",
							strokeOpacity: lit ? .85 : .28,
							strokeWidth: "0.28"
						}, `${a}-${b}`);
					})
				}), WISHES.map((wish) => {
					const lit = Boolean(revealed[wish.id]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							revealWish(wish.id);
							setActive(wish.id);
						},
						className: cn("absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full", !lit && "star-idle"),
						style: {
							left: `${wish.x}%`,
							top: `${wish.y}%`
						},
						"aria-label": wish.title,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block rounded-full", lit ? "size-3 bg-primary" : "size-2 bg-fg/80") })
					}, wish.id);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 min-h-24 rounded-lg border border-border bg-bg-elevated/80 px-5 py-4",
				children: current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg",
					children: current.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: current.body
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "从任意一颗星开始。"
				})
			})
		]
	});
}
function AchievementsApp() {
	const opened = useGift((s) => s.opened);
	const revealed = useGift((s) => s.revealed);
	const usedCoupons = useGift((s) => s.usedCoupons);
	const foundHidden = useGift((s) => s.foundHidden);
	const visitDays = useGift((s) => s.visitDays);
	const flags = {
		a1: true,
		a2: true,
		a3: true,
		a4: true,
		a5: opened,
		a6: opened,
		a7: Object.keys(revealed).length > 0,
		a8: Object.keys(usedCoupons).length > 0,
		a9: visitDays.length >= 3,
		a10: foundHidden
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppFrame, {
		kicker: "badge",
		title: "成就",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 space-y-3",
			children: ACHIEVEMENTS.map((a) => {
				const on = Boolean(flags[a.id]);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border bg-surface px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg",
						children: a.hidden && !on ? "????" : a.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: on ? a.body : a.hidden ? "条件未知" : "尚未解锁"
					})]
				}, a.id);
			})
		})
	});
}
function BirthdayApp() {
	const config = useGift((s) => s.config);
	const candleOut = useGift((s) => s.candleOut);
	const blowCandle = useGift((s) => s.blowCandle);
	const played = useGift((s) => s.birthdayPlayed);
	const mark = useGift((s) => s.markBirthdayPlayed);
	const today = isBirthdayToday(config.birthdayISO);
	const next = nextBirthdayDate(config.birthdayISO);
	const [phase, setPhase] = (0, import_react.useState)(played || !today ? 3 : 0);
	const [line, setLine] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (phase === 0) {
			const t = window.setTimeout(() => setPhase(1), 900);
			return () => window.clearTimeout(t);
		}
		if (phase === 1) {
			const t = window.setTimeout(() => setPhase(2), 1600);
			return () => window.clearTimeout(t);
		}
		if (phase === 2) {
			const t = window.setTimeout(() => {
				setPhase(3);
				mark();
			}, 2200);
			return () => window.clearTimeout(t);
		}
	}, [phase, mark]);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setLine((n) => (n + 1) % BIRTHDAY_LINES.length), 3200);
		return () => window.clearInterval(id);
	}, []);
	if (!config.birthdayISO) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppFrame, {
		kicker: "birthday",
		title: "生日模式",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "还没有写下生日。左下角铅笔里补上日期，到那天会自动切换。"
		})
	});
	if (phase < 3 && today) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex min-h-dvh cursor-pointer flex-col justify-center bg-bg px-6 text-fg",
		onClick: () => {
			setPhase(3);
			mark();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-md font-latin text-sm leading-7 text-muted",
			children: [
				phase === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-fg",
					children: "A new version is available."
				}) : null,
				phase >= 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Updating..." }) : null,
				phase === 2 ? BOOT_LINES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					l,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "100%"
					})
				] }, l)) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-xs text-subtle",
					children: "点任意处继续"
				})
			]
		})
	});
	const remain = next ? remainingUntil(next) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-dvh overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/dusk.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fw-layer",
				"aria-hidden": "true",
				children: Array.from({ length: 12 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `fw fw-${i % 4 + 1}` }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col px-5 pb-24 pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						className: "self-start",
						onClick: () => useGift.getState().setApp("desktop"),
						children: "返回桌面"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs tracking-[0.3em] text-subtle",
						children: "BIRTHDAY BUILD"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-display text-4xl font-medium",
						children: [config.herName, "，生日快乐"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-xl text-primary",
						children: BIRTHDAY_LINES[line]
					}),
					!today && remain ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-muted",
						children: [
							"距离生日还有 ",
							remain.days,
							" 天 ",
							remain.hours,
							" 时 ",
							remain.minutes,
							" 分"
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: blowCandle,
						className: "mt-10 flex flex-col items-center gap-3 self-center",
						"aria-label": "吹蜡烛",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("candle", candleOut && "is-out") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: candleOut ? "愿望收到了。" : "点蜡烛，许一个愿。"
						})]
					})
				]
			})
		]
	});
}
function HiddenApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppFrame, {
		kicker: "/secret",
		title: "隐藏档案",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "paper-sheet rounded-xl px-6 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg leading-8 whitespace-pre-line text-ink",
				children: HIDDEN_LETTER
			})
		})
	});
}
function RandomApp() {
	const setApp = useGift((s) => s.setApp);
	const pool = [
		...COMMITS.map((c) => ({
			app: "timeline",
			title: c.title,
			body: c.adds.join(" · ")
		})),
		...PHOTOS.map((p) => ({
			app: "photos",
			title: p.title,
			body: p.whisper
		})),
		...SECRETS.map((s) => ({
			app: "secrets",
			title: s.title,
			body: s.body
		})),
		...REASONS.map((r) => ({
			app: "reasons",
			title: r.title,
			body: r.body
		})),
		...PLANS.map((p) => ({
			app: "plans",
			title: p.title,
			body: p.body
		}))
	];
	const [item, setItem] = (0, import_react.useState)(() => pool[Math.floor(Math.random() * pool.length)]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		kicker: "shuffle",
		title: "随机回忆",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "你抽到了："
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "paper-sheet mt-6 rounded-xl px-6 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-ink",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-ink",
					children: item.body
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "paper",
					onClick: () => setItem(pool[Math.floor(Math.random() * pool.length)]),
					children: "再抽一次"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					onClick: () => setApp(item.app),
					children: "去看完整的"
				})]
			})
		]
	});
}
function AppScreen({ id }) {
	switch (id) {
		case "letter": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterApp, {});
		case "timeline": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineApp, {});
		case "photos": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotosApp, {});
		case "map": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapApp, {});
		case "secrets": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecretsApp, {});
		case "reasons": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReasonsApp, {});
		case "replay": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReplayApp, {});
		case "stats": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsApp, {});
		case "weather": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherApp, {});
		case "dictionary": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DictionaryApp, {});
		case "coupons": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CouponsApp, {});
		case "scratch": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScratchApp, {});
		case "fortune": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FortuneApp, {});
		case "achievements": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AchievementsApp, {});
		case "plans": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlansApp, {});
		case "capsules": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsulesApp, {});
		case "wishes": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishesApp, {});
		case "birthday": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BirthdayApp, {});
		case "random": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RandomApp, {});
		case "hidden": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiddenApp, {});
		default: return null;
	}
}
function BootScreen({ onDone }) {
	const [step, setStep] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			onDone();
			return;
		}
		if (step >= BOOT_LINES.length) {
			const t = window.setTimeout(onDone, 420);
			return () => window.clearTimeout(t);
		}
		const t = window.setTimeout(() => setStep((s) => s + 1), 520);
		return () => window.clearTimeout(t);
	}, [step, onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex min-h-dvh cursor-pointer flex-col justify-center bg-bg px-6 text-fg",
		onClick: onDone,
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " ") onDone();
		},
		role: "button",
		tabIndex: 0,
		"aria-label": "跳过启动",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-md font-latin text-sm leading-7 text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6 text-xs tracking-[0.3em] text-subtle",
					children: "YUNI OS"
				}),
				BOOT_LINES.slice(0, step + 1).map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rise-in",
					children: [line, i < BOOT_LINES.length - 1 && i === step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-3 text-primary",
						children: "ok"
					}) : i < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-3 text-primary",
						children: "100%"
					}) : null]
				}, line)),
				step >= BOOT_LINES.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-display text-lg text-fg",
					children: "System ready."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-xs text-subtle",
					children: "点任意处继续"
				})
			]
		})
	});
}
var ICONS = {
	timeline: GitCommitHorizontal,
	photos: Images,
	secrets: KeyRound,
	reasons: Heart,
	map: Map$1,
	stats: ChartColumn,
	dictionary: BookOpen,
	coupons: Ticket,
	plans: ListTodo,
	capsules: Hourglass,
	replay: RotateCcw,
	weather: CloudSun,
	achievements: Trophy,
	letter: Mail,
	random: Shuffle,
	birthday: Cake,
	wishes: Star,
	scratch: Gift,
	fortune: Sparkles,
	hidden: KeyRound
};
function Desktop() {
	const config = useGift((s) => s.config);
	const visits = useGift((s) => s.visits);
	const visitDays = useGift((s) => s.visitDays);
	const setApp = useGift((s) => s.setApp);
	const markHidden = useGift((s) => s.markHidden);
	const [taps, setTaps] = (0, import_react.useState)(0);
	const now = useNow();
	const elapsed = elapsedSince(config.togetherSince, now);
	const birthday = isBirthdayToday(config.birthdayISO, now);
	const streak = streakFrom(visitDays);
	const message = SYSTEM_MESSAGES[now.getMinutes() % SYSTEM_MESSAGES.length];
	const clock = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
	function pingOs() {
		const n = taps + 1;
		setTaps(n);
		if (n >= 5) {
			markHidden();
			setApp("hidden");
			setTaps(0);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-dvh overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/stars.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/80 to-bg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col px-5 pb-28 pt-16 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-center justify-between text-xs tracking-[0.2em] text-subtle",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: pingOs,
							className: "text-subtle",
							"aria-label": "系统",
							children: "YUNI OS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-latin tabular-nums tracking-normal",
							children: clock
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "我们已经相爱"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-display text-4xl font-medium leading-tight sm:text-5xl",
								children: [elapsed.days, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-xl text-muted",
									children: "天"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-latin text-sm tabular-nums text-subtle",
								children: [
									String(elapsed.hours).padStart(2, "0"),
									" 时",
									" ",
									String(elapsed.minutes).padStart(2, "0"),
									" 分",
									" ",
									String(elapsed.seconds).padStart(2, "0"),
									" 秒"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted",
								children: [
									"这是你第 ",
									Math.max(visits, 1),
									" 次打开这里。",
									streak > 1 ? ` 连续 ${streak} 天。` : " 我一直记得你每一次来。"
								]
							}),
							birthday ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setApp("birthday"),
								className: "mt-4 rounded-lg border border-primary/40 bg-primary/15 px-4 py-3 text-left text-sm text-fg",
								children: "A new version is available. 今天是你的生日。"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-subtle",
								children: message
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid grid-cols-4 gap-3",
						children: APPS.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OsIcon, {
							id: app.id,
							label: app.label,
							onOpen: () => setApp(app.id)
						}) }, app.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-30 flex justify-center px-4",
				style: { paddingBottom: "max(1rem, env(safe-area-inset-bottom))" },
				"aria-label": "快捷方式",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex w-full max-w-lg items-center justify-around rounded-2xl border border-border bg-bg-elevated/90 px-2 py-2",
					children: DOCK.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setApp(item.id),
						className: "flex min-h-11 min-w-16 flex-col items-center justify-center gap-1 px-2 py-1 text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DockGlyph, { id: item.id }), item.label]
					}) }, item.id))
				})
			})
		]
	});
}
function OsIcon({ id, label, onOpen }) {
	const Icon = ICONS[id] ?? BookOpen;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onOpen,
		className: "flex w-full flex-col items-center gap-2 py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-12 items-center justify-center rounded-xl bg-surface text-primary sm:size-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-center text-xs leading-tight text-muted",
			children: label
		})]
	});
}
function DockGlyph({ id }) {
	const Icon = ICONS[id] ?? BookOpen;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-fg" });
}
function useNow() {
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	return now;
}
function EasterEggs() {
	const keyword = useGift((s) => s.config.hiddenKeyword);
	const setApp = useGift((s) => s.setApp);
	const markHidden = useGift((s) => s.markHidden);
	(0, import_react.useEffect)(() => {
		console.info("%c如果你看到了这里，\n说明你真的很喜欢研究这个网站。\n那我也告诉你一件事：\n我比你想象中更喜欢你。", "color:#c48b7a;font-family:serif;font-size:14px;line-height:1.7");
	}, []);
	(0, import_react.useEffect)(() => {
		const target = (keyword.trim() || "yuni").toLowerCase();
		let buf = "";
		function onKey(e) {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.key.length !== 1) return;
			buf = (buf + e.key.toLowerCase()).slice(-Math.max(target.length, 8));
			if (buf.endsWith(target)) {
				markHidden();
				setApp("hidden");
				buf = "";
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		keyword,
		markHidden,
		setApp
	]);
	return null;
}
function LockScreen() {
	const config = useGift((s) => s.config);
	const musicOn = useGift((s) => s.musicOn);
	const pass = () => useGift.setState({
		secretPassed: true,
		opened: true
	});
	const [value, setValue] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	const needsAnswer = Boolean(config.secretQuestion.trim());
	function enter() {
		if (leaving) return;
		if (musicOn) getMusicBox().start();
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			pass();
			return;
		}
		setLeaving(true);
		window.setTimeout(() => pass(), 560);
	}
	function submit(e) {
		e.preventDefault();
		if (!(value.trim().toLowerCase() === config.secretAnswer.trim().toLowerCase() && value.trim().length > 0)) {
			setError(true);
			return;
		}
		enter();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-dvh overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/envelope.jpg",
				alt: "",
				className: cn("absolute inset-0 size-full object-cover transition-[transform,filter,opacity] duration-500 ease-out", leaving ? "scale-105 opacity-40 blur-sm" : "scale-100 opacity-100")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-end px-6 pb-24 pt-20 text-center sm:justify-center sm:pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in text-xs tracking-[0.35em] text-muted uppercase",
						children: "Archive OS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in mt-6 font-display text-sm text-muted",
						children: "致"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "rise-in mt-2 font-display text-4xl font-medium tracking-wide sm:text-5xl",
						children: config.herName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rise-in mt-8 h-px w-16 bg-primary/70" }),
					needsAnswer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "rise-in mt-8 w-full text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-sm leading-relaxed text-muted",
								children: config.secretQuestion
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "mt-4 bg-bg/50",
								value,
								onChange: (e) => {
									setValue(e.target.value);
									setError(false);
								},
								placeholder: "写在这里",
								autoComplete: "off",
								"aria-invalid": error
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-center text-sm text-primary",
								children: "再想想，这一天对我很重要。"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "paper",
								className: "mt-4 w-full",
								children: "进入"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in mt-8 max-w-xs text-sm leading-relaxed text-muted",
						children: "一份只属于你们的数字档案。轻轻揭开火漆就好。"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: enter,
							className: "group flex flex-col items-center gap-4",
							"aria-label": "进入档案",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("wax-seal", leaving && "is-pressing"),
								"aria-hidden": "true",
								children: "予"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm tracking-wide text-fg/90",
								children: "进入系统"
							})]
						})
					})] })
				]
			})
		]
	});
}
function GiftApp() {
	const opened = useGift((s) => s.opened);
	const secretPassed = useGift((s) => s.secretPassed);
	const question = useGift((s) => s.config.secretQuestion);
	const birthdayISO = useGift((s) => s.config.birthdayISO);
	const birthdayPlayed = useGift((s) => s.birthdayPlayed);
	const app = useGift((s) => s.app);
	const touchVisit = useGift((s) => s.touchVisit);
	const setApp = useGift((s) => s.setApp);
	const needsSecret = Boolean(question.trim()) && !secretPassed;
	const locked = !opened || needsSecret;
	const [booted, setBooted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!locked) touchVisit();
	}, [locked, touchVisit]);
	(0, import_react.useEffect)(() => {
		if (locked || !opened) return;
		if (isBirthdayToday(birthdayISO) && !birthdayPlayed) setApp("birthday");
	}, [
		locked,
		opened,
		birthdayISO,
		birthdayPlayed,
		setApp
	]);
	const finishBoot = (0, import_react.useCallback)(() => setBooted(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Soundtrack, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EasterEggs, {}),
			locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockScreen, {}) : !booted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, { onDone: finishBoot }) : app === "desktop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Desktop, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppScreen, { id: app }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomizeDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicToggle, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftApp, {});
}
//#endregion
export { Home as component };
