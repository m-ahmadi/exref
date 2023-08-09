// https://cdn.jsdelivr.net/npm/lightweight-charts/dist/typings.d.ts
enum CrosshairMode {
	Normal = 0,
	Magnet = 1
}
enum LineStyle {
	Solid = 0,
	Dotted = 1,
	Dashed = 2,
	LargeDashed = 3,
	SparseDotted = 4
}
enum LineType {
	Simple = 0,
	WithSteps = 1
}
enum PriceLineSource {
	LastBar = 0,
	LastVisible = 1
}
enum PriceScaleMode {
	Normal = 0,
	Logarithmic = 1,
	Percentage = 2,
	IndexedTo100 = 3
}
enum TickMarkType {
	Year = 0,
	Month = 1,
	DayOfMonth = 2,
	Time = 3,
	TimeWithSeconds = 4
}
function createChart(container: string | HTMLElement, options?: DeepPartial<ChartOptions>): IChartApi;
function isBusinessDay(time: Time): time is BusinessDay;
function isUTCTimestamp(time: Time): time is UTCTimestamp;
function version(): string;
type AreaSeriesOptions = SeriesOptions<AreaStyleOptions>;
type AreaSeriesPartialOptions = SeriesPartialOptions<AreaStyleOptions>;
type AutoscaleInfoProvider = (baseImplementation: () => AutoscaleInfo | null) => AutoscaleInfo | null;
type BarPrice = Nominal<number, 'BarPrice'>;
type BarSeriesOptions = SeriesOptions<BarStyleOptions>;
type BarSeriesPartialOptions = SeriesPartialOptions<BarStyleOptions>;
type BarsInfo = Partial<Range<Time>> & {
	barsBefore: number;
	barsAfter: number;
};
type CandlestickSeriesOptions = SeriesOptions<CandlestickStyleOptions>;
type CandlestickSeriesPartialOptions = SeriesPartialOptions<CandlestickStyleOptions>;
type Coordinate = Nominal<number, 'Coordinate'>;
type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends (infer U)[] ? DeepPartial<U>[] : T[P] extends readonly (infer X)[] ? readonly DeepPartial<X>[] : DeepPartial<T[P]>;
};
type HistogramSeriesOptions = SeriesOptions<HistogramStyleOptions>;
type HistogramSeriesPartialOptions = SeriesPartialOptions<HistogramStyleOptions>;
type HorzAlign = 'left' | 'center' | 'right';
type LineSeriesOptions = SeriesOptions<LineStyleOptions>;
type LineSeriesPartialOptions = SeriesPartialOptions<LineStyleOptions>;
type LineWidth = 1 | 2 | 3 | 4;
type Logical = Nominal<number, 'Logical'>;
type LogicalRange = Range<Logical>;
type LogicalRangeChangeEventHandler = (logicalRange: LogicalRange | null) => void;
type MouseEventHandler = (param: MouseEventParams) => void;
type Nominal<T, Name extends string> = T & {
	[Symbol.species]: Name;
};
type OverlayPriceScaleOptions = Omit<PriceScaleOptions, 'visible' | 'autoScale'>;
type PriceFormat = PriceFormatBuiltIn | PriceFormatCustom;
type PriceFormatterFn = (priceValue: BarPrice) => string;
type SeriesMarkerPosition = 'aboveBar' | 'belowBar' | 'inBar';
type SeriesMarkerShape = 'circle' | 'square' | 'arrowUp' | 'arrowDown';
type SeriesOptions<T> = T & SeriesOptionsCommon;
type SeriesPartialOptions<T> = DeepPartial<T & SeriesOptionsCommon>;
type SeriesType = keyof SeriesOptionsMap;
type TickMarkFormatter = (time: UTCTimestamp | BusinessDay, tickMarkType: TickMarkType, locale: string) => string;
type Time = UTCTimestamp | BusinessDay | string;
type TimeFormatterFn = (time: BusinessDay | UTCTimestamp) => string;
type TimeRange = Range<Time>;
type TimeRangeChangeEventHandler = (timeRange: TimeRange | null) => void;
type UTCTimestamp = Nominal<number, 'UTCTimestamp'>;
type VertAlign = 'top' | 'center' | 'bottom';
type VisiblePriceScaleOptions = PriceScaleOptions;
interface AreaStyleOptions {
	topColor: string;
	bottomColor: string;
	lineColor: string;
	lineStyle: LineStyle;
	lineWidth: LineWidth;
	lineType: LineType;
	crosshairMarkerVisible: boolean;
	crosshairMarkerRadius: number;
	crosshairMarkerBorderColor: string;
	crosshairMarkerBackgroundColor: string;
}
interface AutoScaleMargins {
	below: number;
	above: number;
}
interface AutoscaleInfo {
	priceRange: PriceRange;
	margins?: AutoScaleMargins;
}
interface AxisPressedMouseMoveOptions {
	time: boolean;
	price: boolean;
}
interface BarData {
	time: Time;
	open: number;
	high: number;
	low: number;
	close: number;
}
interface BarPrices {
	open: BarPrice;
	high: BarPrice;
	low: BarPrice;
	close: BarPrice;
}
interface BarStyleOptions {
	upColor: string;
	downColor: string;
	openVisible: boolean;
	thinBars: boolean;
}
interface BusinessDay {
	year: number;
	month: number;
	day: number;
}
interface CandlestickStyleOptions {
	upColor: string;
	downColor: string;
	wickVisible: boolean;
	borderVisible: boolean;
	borderColor: string;
	borderUpColor: string;
	borderDownColor: string;
	wickColor: string;
	wickUpColor: string;
	wickDownColor: string;
}
interface ChartOptions {
	width: number;
	height: number;
	watermark: WatermarkOptions;
	layout: LayoutOptions;
	leftPriceScale: VisiblePriceScaleOptions;
	rightPriceScale: VisiblePriceScaleOptions;
	overlayPriceScales: OverlayPriceScaleOptions;
	timeScale: TimeScaleOptions;
	crosshair: CrosshairOptions;
	grid: GridOptions;
	localization: LocalizationOptions;
	handleScroll: HandleScrollOptions | boolean;
	handleScale: HandleScaleOptions | boolean;
}
interface CrosshairLineOptions {
	color: string;
	width: LineWidth;
	style: LineStyle;
	visible: boolean;
	labelVisible: boolean;
	labelBackgroundColor: string;
}
interface CrosshairOptions {
	mode: CrosshairMode;
	vertLine: CrosshairLineOptions;
	horzLine: CrosshairLineOptions;
}
interface GridLineOptions {
	color: string;
	style: LineStyle;
	visible: boolean;
}
interface GridOptions {
	vertLines: GridLineOptions;
	horzLines: GridLineOptions;
}
interface HandleScaleOptions {
	mouseWheel: boolean;
	pinch: boolean;
	axisPressedMouseMove: AxisPressedMouseMoveOptions | boolean;
	axisDoubleClickReset: boolean;
}
interface HandleScrollOptions {
	mouseWheel: boolean;
	pressedMouseMove: boolean;
	horzTouchDrag: boolean;
	vertTouchDrag: boolean;
}
interface HistogramData extends LineData {
	color?: string;
}
interface HistogramStyleOptions {
	color: string;
	base: number;
}
interface IChartApi {
	remove(): void;
	resize(width: number, height: number, forceRepaint?: boolean): void;
	addAreaSeries(areaOptions?: AreaSeriesPartialOptions): ISeriesApi<'Area'>;
	addBarSeries(barOptions?: BarSeriesPartialOptions): ISeriesApi<'Bar'>;
	addCandlestickSeries(candlestickOptions?: CandlestickSeriesPartialOptions): ISeriesApi<'Candlestick'>;
	addHistogramSeries(histogramOptions?: HistogramSeriesPartialOptions): ISeriesApi<'Histogram'>;
	addLineSeries(lineOptions?: LineSeriesPartialOptions): ISeriesApi<'Line'>;
	removeSeries(seriesApi: ISeriesApi<SeriesType>): void;
	subscribeClick(handler: MouseEventHandler): void;
	unsubscribeClick(handler: MouseEventHandler): void;
	subscribeCrosshairMove(handler: MouseEventHandler): void;
	unsubscribeCrosshairMove(handler: MouseEventHandler): void;
	priceScale(priceScaleId?: string): IPriceScaleApi;
	timeScale(): ITimeScaleApi;
	applyOptions(options: DeepPartial<ChartOptions>): void;
	options(): Readonly<ChartOptions>;
	takeScreenshot(): HTMLCanvasElement;
}
interface IPriceFormatter {
	format(price: number): string;
}
interface IPriceLine {
	applyOptions(options: Partial<PriceLineOptions>): void;
	options(): Readonly<PriceLineOptions>;
}
interface IPriceScaleApi {
	applyOptions(options: DeepPartial<PriceScaleOptions>): void;
	options(): Readonly<PriceScaleOptions>;
	width(): number;
}
interface ISeriesApi<TSeriesType extends SeriesType> {
	priceFormatter(): IPriceFormatter;
	priceToCoordinate(price: number): Coordinate | null;
	coordinateToPrice(coordinate: number): BarPrice | null;
	barsInLogicalRange(range: Range<number>): BarsInfo | null;
	applyOptions(options: SeriesPartialOptionsMap[TSeriesType]): void;
	options(): Readonly<SeriesOptionsMap[TSeriesType]>;
	priceScale(): IPriceScaleApi;
	setData(data: SeriesDataItemTypeMap[TSeriesType][]): void;
	update(bar: SeriesDataItemTypeMap[TSeriesType]): void;
	setMarkers(data: SeriesMarker<Time>[]): void;
	createPriceLine(options: PriceLineOptions): IPriceLine;
	removePriceLine(line: IPriceLine): void;
	seriesType(): TSeriesType;
}
interface ITimeScaleApi {
	scrollPosition(): number;
	scrollToPosition(position: number, animated: boolean): void;
	scrollToRealTime(): void;
	getVisibleRange(): TimeRange | null;
	setVisibleRange(range: TimeRange): void;
	getVisibleLogicalRange(): LogicalRange | null;
	setVisibleLogicalRange(range: Range<number>): void;
	resetTimeScale(): void;
	fitContent(): void;
	logicalToCoordinate(logical: Logical): Coordinate | null;
	coordinateToLogical(x: number): Logical | null;
	timeToCoordinate(time: Time): Coordinate | null;
	coordinateToTime(x: number): Time | null;
	subscribeVisibleTimeRangeChange(handler: TimeRangeChangeEventHandler): void;
	unsubscribeVisibleTimeRangeChange(handler: TimeRangeChangeEventHandler): void;
	subscribeVisibleLogicalRangeChange(handler: LogicalRangeChangeEventHandler): void;
	unsubscribeVisibleLogicalRangeChange(handler: LogicalRangeChangeEventHandler): void;
	applyOptions(options: DeepPartial<TimeScaleOptions>): void;
	options(): Readonly<TimeScaleOptions>;
}
interface LayoutOptions {
	backgroundColor: string;
	textColor: string;
	fontSize: number;
	fontFamily: string;
}
interface LineData {
	time: Time;
	value: number;
}
interface LineStyleOptions {
	color: string;
	lineStyle: LineStyle;
	lineWidth: LineWidth;
	lineType: LineType;
	crosshairMarkerVisible: boolean;
	crosshairMarkerRadius: number;
	crosshairMarkerBorderColor: string;
	crosshairMarkerBackgroundColor: string;
}
interface LocalizationOptions {
	locale: string;
	priceFormatter?: PriceFormatterFn;
	timeFormatter?: TimeFormatterFn;
	dateFormat: string;
}
interface MouseEventParams {
	time?: UTCTimestamp | BusinessDay;
	point?: Point;
	seriesPrices: Map<ISeriesApi<SeriesType>, BarPrice | BarPrices>;
	hoveredSeries?: ISeriesApi<SeriesType>;
	hoveredMarkerId?: SeriesMarker<Time>['id'];
}
interface Point {
	readonly x: Coordinate;
	readonly y: Coordinate;
}
interface PriceFormatBuiltIn {
	type: 'price' | 'volume' | 'percent';
	precision: number;
	minMove: number;
}
interface PriceFormatCustom {
	type: 'custom';
	formatter: PriceFormatterFn;
	minMove: number;
}
interface PriceLineOptions {
	price: number;
	color: string;
	lineWidth: LineWidth;
	lineStyle: LineStyle;
	axisLabelVisible: boolean;
	title: string;
}
interface PriceRange {
	minValue: number;
	maxValue: number;
}
interface PriceScaleMargins {
	top: number;
	bottom: number;
}
interface PriceScaleOptions {
	autoScale: boolean;
	mode: PriceScaleMode;
	invertScale: boolean;
	alignLabels: boolean;
	scaleMargins: PriceScaleMargins;
	borderVisible: boolean;
	borderColor: string;
	entireTextOnly: boolean;
	visible: boolean;
	drawTicks: boolean;
}
interface Range<T> {
	from: T;
	to: T;
}
interface SeriesDataItemTypeMap {
	Bar: BarData | WhitespaceData;
	Candlestick: BarData | WhitespaceData;
	Area: LineData | WhitespaceData;
	Line: LineData | WhitespaceData;
	Histogram: HistogramData | WhitespaceData;
}
interface SeriesMarker<TimeType> {
	time: TimeType;
	position: SeriesMarkerPosition;
	shape: SeriesMarkerShape;
	color: string;
	id?: string;
	text?: string;
	size?: number;
}

interface SeriesOptionsCommon {
	lastValueVisible: boolean;
	title: string;
	priceScaleId?: string;
	visible: boolean;
	priceLineVisible: boolean;
	priceLineSource: PriceLineSource;
	priceLineWidth: LineWidth;
	priceLineColor: string;
	priceLineStyle: LineStyle;
	priceFormat: PriceFormat;
	baseLineVisible: boolean;
	baseLineColor: string;
	baseLineWidth: LineWidth;
	baseLineStyle: LineStyle;
	autoscaleInfoProvider?: AutoscaleInfoProvider;
	scaleMargins?: PriceScaleMargins;
}
interface SeriesOptionsMap {
	Bar: BarSeriesOptions;
	Candlestick: CandlestickSeriesOptions;
	Area: AreaSeriesOptions;
	Line: LineSeriesOptions;
	Histogram: HistogramSeriesOptions;
}
interface SeriesPartialOptionsMap {
	Bar: BarSeriesPartialOptions;
	Candlestick: CandlestickSeriesPartialOptions;
	Area: AreaSeriesPartialOptions;
	Line: LineSeriesPartialOptions;
	Histogram: HistogramSeriesPartialOptions;
}
interface TimeScaleOptions {
	rightOffset: number;
	barSpacing: number;
	minBarSpacing: number;
	fixLeftEdge: boolean;
	fixRightEdge: boolean;
	lockVisibleTimeRangeOnResize: boolean;
	rightBarStaysOnScroll: boolean;
	borderVisible: boolean;
	borderColor: string;
	visible: boolean;
	timeVisible: boolean;
	secondsVisible: boolean;
	shiftVisibleRangeOnNewBar: boolean;
	tickMarkFormatter?: TickMarkFormatter;
}
interface WatermarkOptions {
	color: string;
	visible: boolean;
	text: string;
	fontSize: number;
	fontFamily: string;
	fontStyle: string;
	horzAlign: HorzAlign;
	vertAlign: VertAlign;
}
interface WhitespaceData {
	time: Time;
}