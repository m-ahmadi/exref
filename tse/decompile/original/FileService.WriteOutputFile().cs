public static void WriteOutputFile(
      InstrumentInfo instrument,
      List<ClosingPriceInfo> cp,
      bool appendExistingFile)
{
	FileService.CheckAppFolder();
	// ISSUE: object of a compiler-generated type is created
	// ISSUE: variable of a compiler-generated type
	Settings settings = new Settings();
	string str1 = settings.StorageLocation;
	if (settings.AdjustPricesCondition == 1 || settings.AdjustPricesCondition == 2)
		str1 = settings.AdjustedStorageLocation;
	string str2 = settings.Delimeter.ToString();
	string str3;
	switch (Convert.ToInt32(settings.FileName))
	{
		case 0:
			str3 = instrument.CIsin;
			if (instrument.YMarNSC != "ID")
			{
				if (settings.AdjustPricesCondition == 1)
				{
					str3 += "-a";
					break;
				}
				if (settings.AdjustPricesCondition == 2)
				{
					str3 += "-i";
					break;
				}
				break;
			}
			break;
		case 1:
			str3 = instrument.LatinName;
			if (instrument.YMarNSC != "ID")
			{
				if (settings.AdjustPricesCondition == 1)
				{
					str3 += "-a";
					break;
				}
				if (settings.AdjustPricesCondition == 2)
				{
					str3 += "-i";
					break;
				}
				break;
			}
			break;
		case 2:
			str3 = instrument.LatinSymbol;
			if (instrument.YMarNSC != "ID")
			{
				if (settings.AdjustPricesCondition == 1)
				{
					str3 += "-a";
					break;
				}
				if (settings.AdjustPricesCondition == 2)
				{
					str3 += "-i";
					break;
				}
				break;
			}
			break;
		case 3:
			str3 = instrument.Name;
			if (instrument.YMarNSC != "ID")
			{
				if (settings.AdjustPricesCondition == 1)
				{
					str3 += "-ت";
					break;
				}
				if (settings.AdjustPricesCondition == 2)
				{
					str3 += "-ا";
					break;
				}
				break;
			}
			break;
		case 4:
			str3 = instrument.Symbol;
			if (instrument.YMarNSC != "ID")
			{
				if (settings.AdjustPricesCondition == 1)
				{
					str3 += "-ت";
					break;
				}
				if (settings.AdjustPricesCondition == 2)
				{
					str3 += "-ا";
					break;
				}
				break;
			}
			break;
		default:
			str3 = instrument.CIsin;
			if (instrument.YMarNSC != "ID")
			{
				if (settings.AdjustPricesCondition == 1)
				{
					str3 += "-a";
					break;
				}
				if (settings.AdjustPricesCondition == 2)
				{
					str3 += "-i";
					break;
				}
				break;
			}
			break;
	}
	string str4 = str3.Replace('\\', ' ').Replace('/', ' ').Replace('*', ' ').Replace(':', ' ').Replace('>', ' ').Replace('<', ' ').Replace('?', ' ').Replace('|', ' ').Replace('^', ' ').Replace('"', ' ');
	int num = 0;
	if (appendExistingFile)
	{
		if (!File.Exists(str1 + "\\" + str4 + "." + settings.FileExtension))
		{
			appendExistingFile = false;
		}
		else
		{
			int indexOfDate = 0;
			bool isShamsiDate = false;
			foreach (ColumnInfo columnInfo in StaticData.ColumnsInfo)
			{
				if (columnInfo.Type == ColumnType.Date && columnInfo.Visible)
				{
					indexOfDate = columnInfo.Index - 1;
					isShamsiDate = false;
					break;
				}
				if (columnInfo.Type == ColumnType.ShamsiDate && columnInfo.Visible)
				{
					indexOfDate = columnInfo.Index;
					isShamsiDate = true;
				}
			}
			num = FileService.OutputFileLastDeven(instrument, indexOfDate, isShamsiDate);
		}
	}
	List<ColumnInfo> columnInfoList = FileService.ColumnsInfo();
	Encoding utF8 = Encoding.UTF8;
	Encoding encoding;
	switch (Convert.ToInt32(settings.Encoding))
	{
		case 0:
			encoding = Encoding.Unicode;
			break;
		case 1:
			encoding = Encoding.UTF8;
			break;
		case 2:
			encoding = Encoding.GetEncoding(1256);
			break;
		default:
			encoding = Encoding.UTF8;
			break;
	}
	TextWriter textWriter = (TextWriter) new StreamWriter(str1 + "\\" + str4 + "." + settings.FileExtension, appendExistingFile, encoding);
	columnInfoList.Sort((Comparison<ColumnInfo>) ((s1, s2) => s1.Index.CompareTo(s2.Index)));
	string str5 = "";
	if (settings.ShowHeaders && num == 0)
	{
		foreach (ColumnInfo columnInfo in columnInfoList)
		{
			if (columnInfo.Visible)
			{
				str5 += columnInfo.Header;
				str5 += str2;
			}
		}
		string str6 = str5.Substring(0, str5.Length - 1);
		textWriter.WriteLine(str6);
	}
	foreach (ClosingPriceInfo closingPriceInfo in cp)
	{
		if ((!appendExistingFile || closingPriceInfo.DEven > num) && (settings.ExportDaysWithoutTrade || !(closingPriceInfo.ZTotTran == new Decimal(0))))
		{
			string str6 = "";
			foreach (ColumnInfo columnInfo in columnInfoList)
			{
				if (columnInfo.Visible)
				{
					switch (columnInfo.Type)
					{
						case ColumnType.CompanyCode:
							str6 += instrument.CompanyCode.ToString();
							break;
						case ColumnType.LatinName:
							str6 += instrument.LatinName.ToString();
							if (instrument.YMarNSC != "ID")
							{
								if (settings.AdjustPricesCondition == 1)
								{
									str6 += "-a";
									break;
								}
								if (settings.AdjustPricesCondition == 2)
								{
									str6 += "-i";
									break;
								}
								break;
							}
							break;
						case ColumnType.Symbol:
							str6 += instrument.Symbol.Replace(" ", "_").ToString();
							if (instrument.YMarNSC != "ID")
							{
								if (settings.AdjustPricesCondition == 1)
								{
									str6 += "-ت";
									break;
								}
								if (settings.AdjustPricesCondition == 2)
								{
									str6 += "-ا";
									break;
								}
								break;
							}
							break;
						case ColumnType.Name:
							str6 += instrument.Name.Replace(" ", "_").ToString();
							if (instrument.YMarNSC != "ID")
							{
								if (settings.AdjustPricesCondition == 1)
								{
									str6 += "-ت";
									break;
								}
								if (settings.AdjustPricesCondition == 2)
								{
									str6 += "-ا";
									break;
								}
								break;
							}
							break;
						case ColumnType.Date:
							str6 += closingPriceInfo.DEven.ToString();
							break;
						case ColumnType.ShamsiDate:
							str6 += Utility.ConvertGregorianIntToJalaliInt(closingPriceInfo.DEven).ToString();
							break;
						case ColumnType.PriceFirst:
							str6 += closingPriceInfo.PriceFirst.ToString();
							break;
						case ColumnType.PriceMax:
							str6 += closingPriceInfo.PriceMax.ToString();
							break;
						case ColumnType.PriceMin:
							str6 += closingPriceInfo.PriceMin.ToString();
							break;
						case ColumnType.LastPrice:
							str6 += closingPriceInfo.PDrCotVal.ToString();
							break;
						case ColumnType.ClosingPrice:
							str6 += closingPriceInfo.PClosing.ToString();
							break;
						case ColumnType.Price:
							str6 += closingPriceInfo.QTotCap.ToString();
							break;
						case ColumnType.Volume:
							str6 += closingPriceInfo.QTotTran5J.ToString();
							break;
						case ColumnType.Count:
							str6 += closingPriceInfo.ZTotTran.ToString();
							break;
						case ColumnType.PriceYesterday:
							str6 += closingPriceInfo.PriceYesterday.ToString();
							break;
					}
					str6 += str2;
				}
			}
			string str7 = str6.Substring(0, str6.Length - 1);
			textWriter.WriteLine(str7);
		}
	}
	textWriter.Flush();
	textWriter.Dispose();
}