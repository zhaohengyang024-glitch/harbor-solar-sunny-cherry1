import { MOMENTS } from "@/lib/gift-content";

export type AppId =
  | "letter"
  | "timeline"
  | "photos"
  | "map"
  | "secrets"
  | "reasons"
  | "replay"
  | "stats"
  | "weather"
  | "dictionary"
  | "coupons"
  | "scratch"
  | "fortune"
  | "achievements"
  | "plans"
  | "capsules"
  | "wishes"
  | "birthday"
  | "random"
  | "hidden";

export type Commit = {
  id: string;
  date: string;
  hash: string;
  title: string;
  adds: string[];
  branch: string;
  photoId?: string;
};

export type Photo = {
  id: string;
  date: string;
  title: string;
  place: string;
  mood: string;
  whisper: string;
  image: string;
  tags: string[];
};

export type Place = {
  id: string;
  name: string;
  visited: boolean;
  date?: string;
  event?: string;
  weather?: string;
  steps?: string;
  food?: string;
  note?: string;
  image?: string;
  x: number;
  y: number;
};

export type Secret = {
  id: string;
  title: string;
  body: string;
};

export type Coupon = {
  id: string;
  title: string;
  body: string;
};

export type Word = {
  id: string;
  word: string;
  pos: string;
  meaning: string;
  usage: string;
  related: string;
};

export type Plan = {
  id: string;
  title: string;
  body: string;
};

export type Capsule = {
  id: string;
  title: string;
  unlock: "now" | "days" | "birthday";
  days?: number;
  preview: string;
  body: string;
};

export type Achievement = {
  id: string;
  title: string;
  body: string;
  hidden?: boolean;
};

export const APPS: { id: AppId; label: string; kicker: string }[] = [
  { id: "timeline", label: "提交记录", kicker: "git" },
  { id: "photos", label: "相册", kicker: "album" },
  { id: "secrets", label: "秘密", kicker: "secret" },
  { id: "reasons", label: "因为", kicker: "why" },
  { id: "map", label: "地图", kicker: "map" },
  { id: "stats", label: "数据", kicker: "data" },
  { id: "dictionary", label: "词典", kicker: "lexicon" },
  { id: "coupons", label: "兑换券", kicker: "ticket" },
  { id: "plans", label: "未来", kicker: "todo" },
  { id: "capsules", label: "胶囊", kicker: "time" },
  { id: "replay", label: "重来一次", kicker: "rerun" },
  { id: "weather", label: "天气", kicker: "sky" },
  { id: "achievements", label: "成就", kicker: "badge" },
  { id: "wishes", label: "星图", kicker: "stars" },
  { id: "scratch", label: "刮刮卡", kicker: "scratch" },
  { id: "fortune", label: "今日签", kicker: "oracle" },
];

export const DOCK: { id: AppId; label: string }[] = [
  { id: "letter", label: "情书" },
  { id: "photos", label: "相册" },
  { id: "random", label: "随机" },
  { id: "birthday", label: "生日" },
];

export const COMMITS: Commit[] = [
  {
    id: "c1",
    date: "2024-09-28",
    hash: "a1e0",
    title: "第一次见面",
    adds: ["认识了一个特别的人", "世界忽然安静了一点"],
    branch: "相识",
    photoId: "meet",
  },
  {
    id: "c2",
    date: "2024-10-12",
    hash: "b3c2",
    title: "第一次约会",
    adds: ["一起吃了火锅", "她说了太多次“好撑”"],
    branch: "相识",
    photoId: "cook",
  },
  {
    id: "c3",
    date: "2024-11-03",
    hash: "c7d9",
    title: "那场不算浪漫的雨",
    adds: ["伞不够大", "谁都没有抱怨"],
    branch: "热恋",
    photoId: "rain",
  },
  {
    id: "c4",
    date: "2025-01-18",
    hash: "d4e1",
    title: "并排走的那段路",
    adds: ["谁走得快半步", "谁又会回头等"],
    branch: "热恋",
    photoId: "walk",
  },
  {
    id: "c5",
    date: "2025-04-02",
    hash: "e8f0",
    title: "窗口外面一直在动",
    adds: ["车票还在口袋里皱着", "重要的不是去了哪里"],
    branch: "一起旅行",
    photoId: "trip",
  },
  {
    id: "c6",
    date: "2025-08-14",
    hash: "f2a6",
    title: "窗台那支花",
    adds: ["城市在玻璃外面自己亮着", "愿意把夜晚分给对方"],
    branch: "热恋",
    photoId: "night",
  },
  {
    id: "c7",
    date: "2026-09-28",
    hash: "ff01",
    title: "到今天",
    adds: ["把这一天郑重地交给你", "main 仍在开发中"],
    branch: "未来",
    photoId: "today",
  },
];

export const BRANCHES = ["相识", "热恋", "一起旅行", "未来"] as const;

export const PHOTOS: Photo[] = MOMENTS.map((m, i) => ({
  id: m.id,
  date: COMMITS[i]?.date ?? "2024-09-28",
  title: m.title,
  place: ["起初的街口", "并排的人行道", "一场雨里", "那间厨房", "移动的窗口", "夜里的窗台", "海边"][i]!,
  mood: ["轻", "稳", "湿", "暖", "远", "静", "郑重"][i]!,
  whisper: m.body,
  image: m.image,
  tags: ["我们", m.when],
}));

export const PLACES: Place[] = [
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
    y: 62,
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
    y: 28,
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
    y: 44,
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
    y: 22,
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
    y: 72,
  },
  {
    id: "next-1",
    name: "?????",
    visited: false,
    note: "这里还没去。但迟早会一起去。",
    x: 82,
    y: 58,
  },
  {
    id: "next-2",
    name: "?????",
    visited: false,
    note: "地图上被圈过的点，留给以后。",
    x: 16,
    y: 18,
  },
];

export const SECRETS: Secret[] = [
  { id: "s1", title: "第一次见你", body: "第一次见你的时候，我其实有点紧张。后来想，真正的遇见都很轻。" },
  { id: "s2", title: "第二次晚安", body: "你第二次说晚安的时候，我已经开始期待第三次了。" },
  { id: "s3", title: "你睡着以后", body: "你睡着之后，我有时候会偷偷看很久。不是监视，是舍不得把灯关掉。" },
  { id: "s4", title: "一句很久的话", body: "有一次你说了一句话，我记了很久，但一直没告诉你。那句话很普通，所以更珍贵。" },
  { id: "s5", title: "回头等", body: "你会回头等。哪怕只慢半步。被等待，是一种被选择。" },
  { id: "s6", title: "随口说过的", body: "你记得我随口说过的话。连我自己都忘了。你却像收藏邮票一样，把它们留着。" },
  { id: "s7", title: "沉默", body: "你让沉默变得安全。不是冷场，是可以一起什么都不说。" },
  { id: "s8", title: "认真", body: "你说话时会轻轻皱眉。那是认真，不是脾气。" },
  { id: "s9", title: "明天", body: "你让我想把明天过好。不是鸡汤。是真的想早一点起来，好见面。" },
  { id: "s10", title: "够了", body: "其他的形容词都会过期。你在，就够了。这一句，我想留得久一点。" },
];

export const COUPONS: Coupon[] = [
  { id: "t1", title: "免生气一次券", body: "有效期：直到你真的不想再生气。核销后我会记得改。" },
  { id: "t2", title: "奶茶一杯券", body: "甜度你定。冰也你定。我负责去排。" },
  { id: "t3", title: "按摩三十分钟券", body: "力度可调。中途可以改口令。" },
  { id: "t4", title: "一个愿望券", body: "不过分的那种。也可以过分一点。" },
  { id: "t5", title: "陪逛街券", body: "不催、不抱怨、帮提袋子。试用期：一整天。" },
  { id: "t6", title: "立刻道歉券", body: "先道歉，再讲道理。顺序不许颠倒。" },
  { id: "t7", title: "看电影券", body: "座位你挑。如果睡着了，我会把片尾曲记下来。" },
  { id: "t8", title: "吃夜宵券", body: "十二点以后也算。热的，最好。" },
];

export const WORDS: Word[] = [
  {
    id: "d1",
    word: "随便",
    pos: "副词，不可信",
    meaning: "表面上没有偏好，实际上已经有答案。",
    usage: "“随便。”（十分钟后点了那家。）",
    related: "选择 / 心软 / 她",
  },
  {
    id: "d2",
    word: "没生气",
    pos: "形容词，待核实",
    meaning: "语气平稳，空气却变紧了一点。",
    usage: "“我没生气。”（建议使用立刻道歉券。）",
    related: "安静 / 认真",
  },
  {
    id: "d3",
    word: "我不饿",
    pos: "动词短语",
    meaning: "此刻不饿。十分钟后可能会饿。",
    usage: "“我不饿。”（随后偷走你盘子里的最后一口。）",
    related: "夜宵券 / 火锅",
  },
  {
    id: "d4",
    word: "笨蛋",
    pos: "名词，亲昵",
    meaning: "指某位经常忘记带东西的人。有时也反过来用。",
    usage: "“你怎么又忘了。”",
    related: "可爱 / 固执 / 她",
  },
  {
    id: "d5",
    word: "再睡五分钟",
    pos: "时间单位",
    meaning: "最小不可再分的赖床度量。可叠加。",
    usage: "闹钟响了三次以后仍成立。",
    related: "早晨 / 窗台",
  },
  {
    id: "d6",
    word: "在",
    pos: "动词，核心",
    meaning: "当你回头的时候，我都在。",
    usage: "剩下的日子，我们慢慢走。",
    related: "约定 / 未来",
  },
];

export const PLANS: Plan[] = [
  { id: "f1", title: "一起去看海", body: "不一定要很远。有风就行。" },
  { id: "f2", title: "一起跨年", body: "倒计时结束的那一秒，站在一起。" },
  { id: "f3", title: "去一个没去过的城市", body: "地图上那些问号，兑现其中一个。" },
  { id: "f4", title: "拍一组普通的照片", body: "不必正式。把当天的脸留下来就好。" },
  { id: "f5", title: "一起看日出", body: "起得来就看。起不来，看晚霞也算。" },
  { id: "f6", title: "再一起过一个生日", body: "这一份档案，明年还想打开。" },
  { id: "f7", title: "养一盆不容易死的植物", body: "先从窗台那支花开始。" },
  { id: "f8", title: "把晚安说得更久一点", body: "没有统计意义。只有习惯。" },
];

export const CAPSULES: Capsule[] = [
  {
    id: "k1",
    title: "写给此刻的她",
    unlock: "now",
    preview: "现在就可以打开。",
    body: "不知道你是哪一天点开的。我只知道，我想让你看见：在我这里，你从来都不是一段插曲。",
  },
  {
    id: "k2",
    title: "第一千天",
    unlock: "days",
    days: 1000,
    preview: "该内容将在恋爱第 1000 天解锁。",
    body: "如果这封信被打开了，说明我们把一件很慢的事做成了。谢谢你还在。",
  },
  {
    id: "k3",
    title: "下一个生日",
    unlock: "birthday",
    preview: "只有到了你的生日，才能打开。",
    body: "生日快乐。希望你打开这里的时候，我们还是在一起。也希望以后很多年的今天，我都在。",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: "a1", title: "第一次见面", body: "init commit." },
  { id: "a2", title: "第一次约会", body: "feature: 一起吃饭." },
  { id: "a3", title: "第一场雨", body: "谁都没有抱怨." },
  { id: "a4", title: "一次出发", body: "车票还在口袋里皱着." },
  { id: "a5", title: "打开档案", body: "第一次进入系统." },
  { id: "a6", title: "读完一封信", body: "字是一个一个出来的." },
  { id: "a7", title: "点亮一颗星", body: "愿望被认真对待." },
  { id: "a8", title: "核销一张券", body: "从网页走到现实." },
  { id: "a9", title: "连续想来", body: "不是打卡，是愿意回来.", hidden: true },
  { id: "a10", title: "找到隐藏页", body: "你真的很喜欢研究这个网站.", hidden: true },
];

export const FORTUNES = [
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
  "晚安可以晚一点说。我会等。",
];

export const SYSTEM_MESSAGES = [
  "检测到你今天也来看我了。",
  "Warning: someone is currently being loved very much.",
  "Error 404: 找不到不爱你的理由。",
  "Relationship: ONLINE",
  "main branch is still under development.",
  "Next release: 未来的我们",
];

export const BIRTHDAY_LINES = [
  "今天是你的生日。",
  "但对我来说，最幸运的一天是遇见你。",
  "希望你今天开心。",
  "也希望以后很多年的今天，我都在。",
];

export const STAT_FACTS = [
  { label: "她说「随便」后的真实决策概率", value: "3.7%" },
  { label: "「没生气」的可信度", value: "12%" },
  { label: "「我不饿」之后偷吃的概率", value: "94.2%" },
  { label: "你主动认错次数", value: "237" },
  { label: "她实际上永远没错的次数", value: "∞" },
];

export const HIDDEN_LETTER = `这里没有照片，没有数据，也没有倒计时。
只有一句话：
遇见你之后，我很少羡慕别人。`;

export const BOOT_LINES = [
  "Loading memories...",
  "Loading photographs...",
  "Loading us...",
  "System ready.",
];
