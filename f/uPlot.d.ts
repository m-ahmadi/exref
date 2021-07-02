class uPlot {
	constructor(
		opts: Options,
		data?: AlignedData,
		targ?: HTMLElement | ((self: uPlot, init: Function) => void)
	);
	readonly root: HTMLElement;
	readonly status: 0 | 1;
	readonly width: number;
	readonly height: number;
	readonly ctx: CanvasRenderingContext2D;
	readonly bbox: BBox;
	readonly select: BBox;
	readonly cursor: Cursor;
	readonly legend: Legend;
	readonly series: Series[];
	readonly scales: {
		[key: string]: Scale;
	};
	readonly axes: Axis[];
	readonly hooks: Hooks.Arrays;
	readonly data: AlignedData;
	redraw(rebuildPaths?: boolean, recalcAxes?: boolean): void;
	batch(txn: Function): void;
	destroy(): void;
	setData(data: AlignedData, resetScales?: boolean): void;
	setScale(scaleKey: string, limits: { min: number; max: number }): void;
	setCursor(opts: {left: number, top: number}, fireHook?: boolean): void;
	setLegend(opts: {idx: number}, fireHook?: boolean): void;
	setSeries(seriesIdx: number | null, opts: {show?: boolean, focus?: boolean}): void;
	addSeries(opts: Series, seriesIdx?: number): void;
	delSeries(seriesIdx: number): void;
	setSelect(opts: {left: number, top: number, width: number, height: number}, fireHook?: boolean): void;
	setSize(opts: { width: number; height: number }): void;
	posToIdx(left: number): number;
	posToVal(leftTop: number, scaleKey: string): number;
	valToPos(val: number, scaleKey: string, canvasPixels?: boolean): number;
	valToIdx(val: number): number;
	syncRect(defer?: boolean): void;
	static paths: Series.PathBuilderFactories;
	static assign(targ: object, ...srcs: object[]): object;
	static rangeNum: ((min: number, max: number, mult: number, extra: boolean) => Range.MinMax) | ((min: number, max: number, cfg: Range.Config) => Range.MinMax);
	static rangeLog(min: number, max: number, base: Scale.LogBase, fullMags: boolean): Range.MinMax;
	static rangeAsinh(min: number, max: number, base: Scale.LogBase, fullMags: boolean): Range.MinMax;
	static fmtNum(val: number): string;
	static fmtDate(tpl: string, names?: DateNames): (date: Date) => string;
	static tzDate(date: Date, tzName: string): Date;
	static join(tables: AlignedData[], nullModes?: JoinNullMode[][]): AlignedData;
	static addGap: Series.AddGap;
	static clipGaps: Series.ClipPathBuilder;
	static orient: (u: uPlot, seriesIdx: number, callback: OrientCallback) => any;
	static sync: (key: string) => SyncPubSub;
}


type OrientCallback = (
	series: Series,
	dataX: number[],
	dataY: (number | null)[],
	scaleX: Scale,
	scaleY: Scale,
	valToPosX: ValToPos,
	valToPosY: ValToPos,
	xOff: number,
	yOff: number,
	xDim: number,
	yDim: number,
	moveTo: MoveToH | MoveToV,
	lineTo: LineToH | LineToV,
	rect:   RectH   | RectV,
	arc:    ArcH    | ArcV,
	bezierCurveTo: BezierCurveToH | BezierCurveToV,
) => any;
type ValToPos = (val: number, scale: Scale, fullDim: number, offset: number) => number;
type Drawable = Path2D | CanvasRenderingContext2D;
type MoveToH        = (p: Drawable, x: number, y: number) => void;
type MoveToV        = (p: Drawable, y: number, x: number) => void;
type LineToH        = (p: Drawable, x: number, y: number) => void;
type LineToV        = (p: Drawable, y: number, x: number) => void;
type RectH          = (p: Drawable, x: number, y: number, w: number, h: number) => void;
type RectV          = (p: Drawable, y: number, x: number, h: number, w: number) => void;
type ArcH           = (p: Drawable, x: number, y: number, r: number, startAngle: number, endAngle: number) => void;
type ArcV           = (p: Drawable, y: number, x: number, r: number, startAngle: number, endAngle: number) => void;
type BezierCurveToH = (p: Drawable, bp1x: number, bp1y: number, bp2x: number, bp2y: number, p2x: number, p2y: number) => void;
type BezierCurveToV = (p: Drawable, bp1y: number, bp1x: number, bp2y: number, bp2x: number, p2y: number, p2x: number) => void;
enum JoinNullMode {
	Remove = 0,
	Retain = 1,
	Expand = 2,
}
enum Orientation {
	Horizontal = 0,
	Vertical   = 1,
}
type AlignedData = [
	xValues: number[],
	...yValues: (number | null | undefined)[][],
]
interface DateNames {
	MMMM: string[];
	MMM:  string[];
	WWWW: string[];
	WWW:  string[];
}
namespace Range {
	type MinMax = [min: number, max: number];
	type Function = (self: uPlot, initMin: number, initMax: number, scaleKey: string) => MinMax;
	type SoftMode = 0 | 1 | 2 | 3;
	interface Limit {
		pad?: number; // 0.1
		soft?: number; // 0
		mode?: SoftMode; // 3
		hard?: number;
	}
	interface Config {
		min: Range.Limit;
		max: Range.Limit;
	}
}
interface Scales {
	[key: string]: Scale;
}
type SidesWithAxes = [top: boolean, right: boolean, bottom: boolean, left: boolean];
type PaddingSide = number | null | ((self: uPlot, side: Axis.Side, sidesWithAxes: SidesWithAxes, cycleNum: number) => number);
type Padding = [top: PaddingSide, right: PaddingSide, bottom: PaddingSide, left: PaddingSide];
interface Legend {
	show?: boolean;	// true
	live?: boolean;	// true
	isolate?: boolean; // false
	width?: Legend.Width;
	stroke?: Legend.Stroke;
	dash?: Legend.Dash;
	fill?: Legend.Fill;
	idx?: number;
	values?: Legend.Values;
}
namespace Legend {
	type Width  = number | ((self: uPlot, seriesIdx: number) => number);
	type Stroke = CSSStyleDeclaration['borderColor'] | ((self: uPlot, seriesIdx: number) => CSSStyleDeclaration['borderColor']);
	type Dash   = CSSStyleDeclaration['borderStyle'] | ((self: uPlot, seriesIdx: number) => CSSStyleDeclaration['borderStyle']);
	type Fill   = CSSStyleDeclaration['background']  | ((self: uPlot, seriesIdx: number) => CSSStyleDeclaration['background']);
	type Value  = {
		[key: string]: string | number;
	};
	type Values = Value[];
}
type DateFormatterFactory = (tpl: string) => (date: Date) => string;
type LocalDateFromUnix = (ts: number) => Date;
enum DrawOrderKey {
	Axes   = 'axes',
	Series = 'series',
}
interface Options {
	title?: string;
	id?: string;
	class?: string;
	width: number;
	height: number;
	data?: AlignedData;
	tzDate?: LocalDateFromUnix;
	fmtDate?: DateFormatterFactory;
	ms?: 1e-3 | 1; // 1e-3
	drawOrder?: DrawOrderKey[];
	pxAlign?: boolean | number; // true
	series: Series[];
	bands?: Band[];
	scales?: Scales;
	axes?: Axis[];
	padding?: Padding;
	select?: Select;
	legend?: Legend;
	cursor?: Cursor;
	focus?: Focus;
	hooks?: Hooks.Arrays;
	plugins?: Plugin[];
}
interface Focus {
	alpha: number;
}
interface BBox {
	show?: boolean;
	left: number;
	top: number;
	width: number;
	height: number;
}
interface Select extends BBox {
	over?: boolean; // true
}
interface SyncPubSub {
	key:   string;
	sub:   (client: uPlot) => void;
	unsub: (client: uPlot) => void;
	pub:   (type: string, client: uPlot, x: number, y: number, w: number, h: number, i: number) => void;
	plots: uPlot[];
}
namespace Cursor {
	type LeftTop              = [left: number, top: number];
	type MouseListener        = (e: MouseEvent) => null;
	type MouseListenerFactory = (self: uPlot, targ: HTMLElement, handler: MouseListener) => MouseListener | null;
	type DataIdxRefiner       = (self: uPlot, seriesIdx: number, closestIdx: number, xValue: number) => number;
	type MousePosRefiner      = (self: uPlot, mouseLeft: number, mouseTop: number) => LeftTop;
	interface Bind {
		mousedown?:   MouseListenerFactory;
		mouseup?:     MouseListenerFactory;
		click?:       MouseListenerFactory;
		dblclick?:    MouseListenerFactory;
		mousemove?:   MouseListenerFactory;
		mouseleave?:  MouseListenerFactory;
		mouseenter?:  MouseListenerFactory;
	}
	namespace Points {
		type Show   = boolean | ((self: uPlot, seriesIdx: number) => HTMLElement);
		type Size   = number  | ((self: uPlot, seriesIdx: number) => number);
		type Width  = number  | ((self: uPlot, seriesIdx: number, size: number) => number);
		type Stroke = CanvasRenderingContext2D['strokeStyle'] | ((self: uPlot, seriesIdx: number) => CanvasRenderingContext2D['strokeStyle']);
		type Fill   = CanvasRenderingContext2D['fillStyle']   | ((self: uPlot, seriesIdx: number) => CanvasRenderingContext2D['fillStyle']);
	}
	interface Points {
		show?:   Points.Show;
		size?:   Points.Size;
		width?:  Points.Width;
		stroke?: Points.Stroke;
		fill?:   Points.Fill;
	}
	interface Drag {
		setScale?: boolean; // true
		x?: boolean;        // true
		y?: boolean;        // false
		dist?: number;      // 0
		uni?: number;       // null
	}
	namespace Sync {
		type Scales = [xScaleKey: string, yScaleKey: string];
		type Filter = (type: string, client: uPlot, x: number, y: number, w: number, h: number, i: number) => boolean;
		interface Filters {
			pub?: Filter;
			sub?: Filter;
		}
		type ScaleKeyMatcher = (subScaleKey: string | null, pubScaleKey: string | null) => boolean;
		type Match = [matchX: ScaleKeyMatcher, matchY: ScaleKeyMatcher];
		type Values = [xScaleValue: number, yScaleValue: number];
	}
	interface Sync {
		key: string;
		setSeries?: boolean; // true
		scales?: Sync.Scales; // [xScaleKey, null]
		match?: Sync.Match;
		filters?: Sync.Filters;
		values?: Sync.Values,
	}
	interface Focus {
		prox: number;
	}
}
interface Cursor {
	show?: boolean;
	x?: boolean;
	y?: boolean;
	left?: number;
	top?: number;
	idx?: number;
	dataIdx?: Cursor.DataIdxRefiner;
	move?: Cursor.MousePosRefiner;
	points?: Cursor.Points;
	bind?: Cursor.Bind;
	drag?: Cursor.Drag;
	sync?: Cursor.Sync;
	focus?: Cursor.Focus;
	lock?: boolean; // false
}
namespace Scale {
	type Auto = boolean | ((self: uPlot, resetScales: boolean) => boolean);
	type Range = Range.MinMax | Range.Function | Range.Config;
	enum Distr {
		Linear      = 1,
		Ordinal     = 2,
		Logarithmic = 3,
		ArcSinh     = 4,
	}
	type LogBase = 10 | 2;
	type Clamp = number | ((self: uPlot, val: number, scaleMin: number, scaleMax: number, scaleKey: string) => number);
}
interface Scale {
	time?: boolean;
	auto?: Scale.Auto;
	range?: Scale.Range;
	from?: string;
	distr?: Scale.Distr; // 1
	log?: Scale.LogBase; // 10;
	clamp?: Scale.Clamp;
	asinh?: number; // 1
	min?: number;
	max?: number;
	dir?: 1 | -1;
	ori?: 0 | 1;
}
namespace Series {
	interface Paths {
		stroke?: Path2D | null;
		fill?: Path2D | null;
		clip?: Path2D | null;
	}
	interface SteppedPathBuilderOpts {
		align?: -1 | 1; // 1
		ascDesc?: boolean; // false
	}
	interface BarsPathBuilderOpts {
		align?: -1 | 0 | 1; // 0
		size?: [factor?: number, max?: number];
		gap?: number;
	}
	type LinearPathBuilderFactory  = () => Series.PathBuilder;
	type SplinePathBuilderFactory  = () => Series.PathBuilder;
	type SteppedPathBuilderFactory = (opts?: SteppedPathBuilderOpts) => Series.PathBuilder;
	type BarsPathBuilderFactory    = (opts?: BarsPathBuilderOpts) => Series.PathBuilder;
	interface PathBuilderFactories {
		linear?:  LinearPathBuilderFactory;
		spline?:  SplinePathBuilderFactory;
		stepped?: SteppedPathBuilderFactory;
		bars?:    BarsPathBuilderFactory;
	}
	type Stroke = CanvasRenderingContext2D['strokeStyle'] | ((self: uPlot, seriesIdx: number) => CanvasRenderingContext2D['strokeStyle']);
	type Fill = CanvasRenderingContext2D['fillStyle'] | ((self: uPlot, seriesIdx: number) => CanvasRenderingContext2D['fillStyle']);
	type Cap = CanvasRenderingContext2D['lineCap'];
	namespace Points {
		type Show = boolean | ((self: uPlot, seriesIdx: number, idx0: number, idx1: number) => boolean | undefined);
	}
	interface Points {
		show?: Points.Show;
		size?: number;
		space?: number;
		width?: number;
		stroke?: Stroke;
		dash?: number[];
		cap?: Series.Cap;
		fill?: Fill;
	}
	type Gap = [from: number, to: number];
	type Gaps = Gap[];
	type AddGap = (gaps: Gaps, from: number, to: number) => void;
	type ClipPathBuilder = (gaps: Gaps, ori: Orientation, left: number, top: number, width: number, height: number) => Path2D | null;
	type PathBuilder = (self: uPlot, seriesIdx: number, idx0: number, idx1: number) => Paths | null;
	type MinMaxIdxs = [minIdx: number, maxIdx: number];
	type Value = string | ((self: uPlot, rawValue: number, seriesIdx: number, idx: number) => string | number);
	type Values = (self: uPlot, seriesIdx: number, idx: number) => object;
	type FillTo = number | ((self: uPlot, seriesIdx: number, dataMin: number, dataMax: number) => number);
	enum Sorted {
		Unsorted    =  0,
		Ascending   =  1,
		Descending  = -1,
	}
}
interface Series {
	show?: boolean;
	class?: string;
	scale?: string;
	auto?: boolean; // true
	sorted?: Series.Sorted;
	spanGaps?: boolean;
	pxAlign?: number | boolean; // 1
	label?: string;
	value?: Series.Value;
	values?: Series.Values;
	paths?: Series.PathBuilder;
	points?: Series.Points;
	width?: number;
	stroke?: Series.Stroke;
	fill?: Series.Fill;
	fillTo?: Series.FillTo;
	dash?: number[];
	cap?: Series.Cap;
	alpha?: number;
	idxs?: Series.MinMaxIdxs;
	min?: number;
	max?: number;
}
namespace Band {
	type Fill = CanvasRenderingContext2D['fillStyle'] | ((self: uPlot, bandIdx: number, highSeriesFill: CanvasRenderingContext2D['fillStyle']) => CanvasRenderingContext2D['fillStyle']);
	type Bounds = [highSeriesIdx: number, lowSeriesIdx: number];
}
interface Band {
//	show?: boolean;
	series: Band.Bounds;
	fill?: Band.Fill;
}
namespace Axis {
	type Filter = (self: uPlot, splits: number[], axisIdx: number, foundSpace: number, foundIncr: number) => (number | null)[];
	type Size = number | ((self: uPlot, values: string[], axisIdx: number, cycleNum: number) => number);
	type Space = number | ((self: uPlot, axisIdx: number, scaleMin: number, scaleMax: number, plotDim: number) => number);
	type Incrs = number[] | ((self: uPlot, axisIdx: number, scaleMin: number, scaleMax: number, fullDim: number, minSpace: number) => number[]);
	type Splits = number[] | ((self: uPlot, axisIdx: number, scaleMin: number, scaleMax: number, foundIncr: number, foundSpace: number) => number[]);
	type StaticValues = (string | number | null)[];
	type DynamicValues = (self: uPlot, splits: number[], axisIdx: number, foundSpace: number, foundIncr: number) => StaticValues;
	type TimeValuesConfig = (string | number | null)[][];
	type TimeValuesTpl = string;
	type Values = StaticValues | DynamicValues | TimeValuesTpl | TimeValuesConfig;
	type Stroke = CanvasRenderingContext2D['strokeStyle'] | ((self: uPlot, axisIdx: number) => CanvasRenderingContext2D['strokeStyle']);
	enum Side {
		Top    = 0,
		Right  = 1,
		Bottom = 2,
		Left   = 3,
	}
	enum Align {
		Left  = 1,
		Right = 2,
	}
	type Rotate = number | ((self: uPlot, values: (string | number)[], axisIdx: number, foundSpace: number) => number);
	interface Grid {
		show?: boolean; // true
		filter?: Filter;
		stroke?: Stroke;
		width?: number;
		dash?: number[];
		cap?: Series.Cap;
	}
	interface Ticks extends Grid {
		size?: number;
	}
}
interface Axis {
	show?: boolean;
	scale?: string;
	side?: Axis.Side;
	size?: Axis.Size;
	gap?: number;
	font?: CanvasRenderingContext2D['font'];
	stroke?: Axis.Stroke;
	label?: string;
	labelSize?: number;
	labelFont?: CanvasRenderingContext2D['font'];
	space?: Axis.Space;
	incrs?: Axis.Incrs;
	splits?: Axis.Splits;
	filter?: Axis.Filter;
	values?: Axis.Values;
	rotate?: Axis.Rotate;
	align?: Axis.Align;
	grid?: Axis.Grid;
	ticks?: Axis.Ticks;
}
namespace Hooks {
	interface Defs {
		init?:       (self: uPlot, opts: Options, data: AlignedData) => void;
		setScale?:   (self: uPlot, scaleKey: string) => void;
		setCursor?:  (self: uPlot) => void;
		setLegend?:  (self: uPlot) => void;
		setSelect?:  (self: uPlot) => void;
		setSeries?:  (self: uPlot, seriesIdx: number | null, opts: Series) => void;
		setData?:    (self: uPlot) => void;
		setSize?:    (self: uPlot) => void;
		drawClear?:  (self: uPlot) => void;
		drawAxes?:   (self: uPlot) => void;
		drawSeries?: (self: uPlot, seriesIdx: number) => void;
		draw?:       (self: uPlot) => void;
		ready?:      (self: uPlot) => void;
		destroy?:    (self: uPlot) => void;
	}
	type Arrays = {
		[P in keyof Defs]: Defs[P][]
	}
	type ArraysOrFuncs = {
		[P in keyof Defs]: Defs[P][] | Defs[P]
	}
}
interface Plugin {
	opts?: (self: uPlot, opts: Options) => void | Options;
	hooks: Hooks.ArraysOrFuncs;
}
