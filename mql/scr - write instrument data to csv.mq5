void OnStart() {
	ENUM_TIMEFRAMES timeframe;
	timeframe = PERIOD_D1;
	timeframe = PERIOD_M1;
	string sym = Symbol();
	
	string timeframe_name = timeframe == PERIOD_D1 ? "Daily" : "1Minute";
	
	int digits = (int)SymbolInfoInteger(sym, SYMBOL_DIGITS);
	int bars = iBars(sym, timeframe);
	string out_filename = sym + "_" + timeframe_name + ".csv";
	
	int write_handle = FileOpen(out_filename, FILE_WRITE);
	
	// write header row
	string csv_header = "DATE,TIME,OPEN,HIGH,LOW,CLOSE,TICKVOLUME,VOLUME,SPREAD" + "\n";
	FileWriteString(write_handle, csv_header);
	
	for (int i=0; i<=bars-1; i++) {
		// get data of current bar
		datetime _time = iTime(sym, timeframe, i);
		string date = TimeToString(_time, TIME_DATE);
		string time = TimeToString(_time, TIME_MINUTES);
		double open = NormalizeDouble(iOpen(sym, timeframe, i), digits);
		double high = NormalizeDouble(iHigh(sym, timeframe, i), digits);
		double low = NormalizeDouble(iLow(sym, timeframe, i), digits);
		double close = NormalizeDouble(iClose(sym, timeframe, i), digits);
		long tick_volume = iTickVolume(sym, timeframe, i);
		long volume = iVolume(sym, timeframe, i);
		double spread = iSpread(sym, timeframe, i);
		
		// construct csv row
		string s = "";
		s += date + ",";
		s += time + ",";
		s += DoubleToString(open, digits) + ",";
		s += DoubleToString(high, digits) + ",";
		s += DoubleToString(low, digits) + ",";
		s += DoubleToString(close, digits) + ",";
		s += (string)tick_volume + ",";
		s += (string)volume + ",";
		s += DoubleToString(spread, digits);
		s += "\n";
		
		FileWriteString(write_handle, s);
	}
	
	FileClose(write_handle);
	MessageBox("Saved price data successfully.");
}
