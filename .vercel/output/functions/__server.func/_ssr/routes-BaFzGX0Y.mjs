import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as ChartColumn, S as ChevronLeft, T as BookOpen, _ as Hourglass, a as Star, b as Gift, c as RotateCcw, d as Music4, f as Map, g as Images, h as KeyRound, i as Ticket, l as PenLine, m as ListTodo, n as Trophy, o as Sparkles, p as Mail, s as Shuffle, t as X, u as Music2, v as Heart, w as Cake, x as CloudSun, y as GitCommitHorizontal } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BaFzGX0Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
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
	herName: "亲爱的",
	hisName: "我",
	birthdayLabel: "今天",
	birthdayISO: "",
	togetherSince: "2024-09-28",
	secretQuestion: "",
	secretAnswer: "",
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
		image: "/images/flowers.jpg"
	},
	{
		id: "walk",
		kicker: "02",
		title: "并排走的那段路",
		when: "后来",
		body: "谁走得快半步，谁又会回头等。这件事比任何誓言都更像喜欢。",
		image: "/images/morning.jpg"
	},
	{
		id: "rain",
		kicker: "03",
		title: "那场不算浪漫的雨",
		when: "某日",
		body: "伞不够大，裤脚湿了，谁都没有抱怨。雨停的时候，路边的灯还亮着。",
		image: "/images/rain.jpg"
	},
	{
		id: "cook",
		kicker: "04",
		title: "一锅说不上名字的晚饭",
		when: "平常",
		body: "盐放多了也没有关系。厨房里的声音，比外面的世界更像家。",
		image: "/images/kitchen.jpg"
	},
	{
		id: "trip",
		kicker: "05",
		title: "窗口外面一直在动",
		when: "一次出发",
		body: "车票还在口袋里皱着。重要的不是去了哪里，是你可以在移动的风景旁边，安心地发呆。",
		image: "/images/train.jpg"
	},
	{
		id: "night",
		kicker: "06",
		title: "窗台那支花",
		when: "夜里",
		body: "城市在玻璃外面自己亮着。房间里只剩下水和花茎，还有一种愿意把夜晚分给对方的安静。",
		image: "/images/window.jpg"
	},
	{
		id: "today",
		kicker: "07",
		title: "到今天",
		when: "此刻",
		body: "海会退下去，天会暗下来。我仍想把这一天郑重地交给你。",
		image: "/images/dusk.jpg"
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
		const { width, height } = canvas;
		ctx.fillStyle = "#6b5e54";
		ctx.fillRect(0, 0, width, height);
		ctx.fillStyle = "#f3ebe1";
		ctx.font = "20px serif";
		ctx.fillText("刮开", width / 2 - 22, height / 2 + 6);
		let drawing = false;
		function pos(e) {
			const r = canvas.getBoundingClientRect();
			return {
				x: (e.clientX - r.left) / r.width * width,
				y: (e.clientY - r.top) / r.height * height
			};
		}
		function scratchAt(e) {
			if (!ctx) return;
			const { x, y } = pos(e);
			ctx.globalCompositeOperation = "destination-out";
			ctx.beginPath();
			ctx.arc(x, y, 18, 0, Math.PI * 2);
			ctx.fill();
		}
		function down(e) {
			drawing = true;
			canvas.setPointerCapture(e.pointerId);
			scratchAt(e);
		}
		function move(e) {
			if (drawing) scratchAt(e);
		}
		function up() {
			drawing = false;
			const data = ctx.getImageData(0, 0, width, height).data;
			let clear = 0;
			for (let i = 3; i < data.length; i += 4) if (data[i] === 0) clear += 1;
			if (clear / (width * height) > .45) setScratched();
		}
		canvas.addEventListener("pointerdown", down);
		canvas.addEventListener("pointermove", move);
		canvas.addEventListener("pointerup", up);
		return () => {
			canvas.removeEventListener("pointerdown", down);
			canvas.removeEventListener("pointermove", move);
			canvas.removeEventListener("pointerup", up);
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
	map: Map,
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
