// main flow:
WebServiceTseClient // makes http soap requests
ServerMethods       // calls WebServiceTseClient
UCStepIntruments    // fetches instruments and shares
UCStepUpdate        // updates selected instruments data

UCStepIntruments.UpdateInstruments()
	ServerMethods.InstrumentAndShare()
	FileService.WriteInstruments()

UCStepUpdate.UpdateClosingPrices()
	FileService.SelectedInstruments()
	ServerMethods.GetInsturmentClosingPrice()
	FileService.WriteClosingPrices()

UCStepUpdate.GenerateFiles()
	FileService.SelectedInstruments()
	FileService.ClosingPrices()
	FileService.WriteOutputFile()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// other
// UC = User Control
// ~ = %AppData%\TseClient 2.0
// TseClient writes selected tickers to ~\Files\SelectedInstruments.csv
// when updating data, TseClient generates csv files into ~\Files\Instruments\insCode.csv

SilentExecuter  // cli update (TseClient fast)
GenerateFiles() // does the adjusting of prices
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
UCStepIntruments.UpdateInstruments()
// probably executes when app first starts
// downloads all instruments and shares and writes them to %appdata%
// flow:
ServerMethods.InstrumentAndShare(lastDEven, lastId)

foreach (intrument) {
	found = StaticData.Instruments.FindIndex()
	if !found
		StaticData.Instruments.Add( new InstrumentInfo() )
	else
		StaticData.Instruments[found].update()
}

FileService.WriteInstruments()
// does the same for shares as well:
FileService.WriteTseShares()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// FileService and StaticData
FileService.SelectedInstruments() // reads from "%\TseClient 2.0\Files\SelectedInstruments.csv" and return ['', '', ''] for each line ReadLine().Split(',')[0]
FileService.WriteSelectedInstruments() // writes to ~\Files\SelectedInstruments.csv (immediately after clicking on a ticker or selecAll etc. used in USInstruments.btnSelect_Click)

FileService.WriteColumnsInfo() // writes to ~\Files\Columns.csv (probably after changing the settings in app)
FileService.ColumnsInfo() // reads "~\Files\Columns.csv" and return:
	[
		{ Index: 1, Type: 2, Header: '<TICKER>',     Visible: 1 },
		{ Index: 2, Type: 4, Header: '<DTYYYYMMDD>', Visible: 1 },
		...
	]

FileService.WriteInstruments() // writes to ~\Files\Instruments.csv
FileService.Instruments()      // reads ~\Files\Instruments.csv and return:
	[
		{ InsCode ... YVal }, // col[0] ... col[17]
		{ InsCode ... YVal },
	]

FileService.WriteTseShares() // writes to ~\Files\TseShares.csv
FileService.TseShares()      // reads ~\Files\TseShares.csv and return [ {}, {} ]
FileService.ClosingPrices()  // reads ~\Files\Instruments\<item>.csv and return an array, each item being a row in that csv file (each item is a closingPriceInfoList)
	[
		{ // col[0] ... col[10]
			InsCode: '',
			DEven: '',
			PClosing: '',
			PDrCotVal: '',
			ZTotTran: '',
			QTotTran5J: '',
			QTotCap: '',
			PriceMin: '',
			PriceMax: '',
			PriceYesterday: '',
			PriceFirst: ''
		},
		{},
		{}
	]
FileService.WriteClosingPrices(List<ClosingPriceInfo> input) // writes to ~\Files\Instruments\<insCode>.csv
FileService.LastDeven(item):number // reads ~\Files\Instruments\item.insCode.csv and returns LastLine.Split(',')[1] (last line second's cell which is last deven)

StaticData.ColumnsInfo         = FileService.ColumnsInfo();
StaticData.Instruments         = FileService.Instruments();
StaticData.TseShares           = FileService.TseShares();
StaticData.SelectedInstruments = FileService.SelectedInstruments();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@