private bool UpdateClosingPrices()
{
	// ISSUE: object of a compiler-generated type is created
	// ISSUE: variable of a compiler-generated type
	Settings settings = new Settings();
	try
	{
		string str1 = "";
		try
		{
			str1 = ServerMethods.LastPossibleDeven();
		}
		catch (Exception ex)
		{
			ServerMethods.LogError("lastPossibleDEvens", ex);
		}
		string[] strArray1 = str1.Split(';');
		int int32_1 = Convert.ToInt32(strArray1[0]);
		int int32_2 = Convert.ToInt32(strArray1[1]);
		long[][] numArray1 = new long[StaticData.SelectedInstruments.Count][];
		int index1 = 0;
		using (List<string>.Enumerator enumerator = StaticData.SelectedInstruments.GetEnumerator())
		{
			while (enumerator.MoveNext())
			{
				string item = enumerator.Current;
				int num = FileService.LastDeven(item);
				InstrumentInfo instrumentInfo = StaticData.Instruments.Find((Predicate<InstrumentInfo>) (p => p.InsCode == Convert.ToInt64(item)));
				if ((!(instrumentInfo.YMarNSC == "NO") || num != int32_1) && (!(instrumentInfo.YMarNSC == "ID") || num != int32_2))
				{
					numArray1[index1] = new long[3];
					numArray1[index1][0] = Convert.ToInt64(item);
					numArray1[index1][1] = Convert.ToInt64(num);
					numArray1[index1][2] = instrumentInfo.YMarNSC == "NO" ? 0L : 1L;
					++index1;
				}
			}
		}
		int num1 = index1 % 20 != 0 ? index1 / 20 + 1 : index1 / 20;
		for (int index2 = 0; index2 < num1; ++index2)
		{
			int length = index2 < num1 - 1 ? 20 : index1 % 20;
			long[][] numArray2 = new long[length][];
			for (int index3 = 0; index3 < length; ++index3)
			{
				numArray2[index3] = new long[3];
				numArray2[index3][0] = numArray1[index2 * 20 + index3][0];
				numArray2[index3][1] = numArray1[index2 * 20 + index3][1];
				numArray2[index3][2] = numArray1[index2 * 20 + index3][2];
			}
			string str2 = "";
			foreach (long[] numArray3 in numArray2)
				str2 = str2 + (object) numArray3[0] + "," + (object) numArray3[1] + "," + (object) numArray3[2] + ";";
			string insturmentClosingPrice = ServerMethods.GetInsturmentClosingPrice(str2.Substring(0, str2.Length - 1));
			char[] chArray = new char[1]{ '@' };
			foreach (string str3 in insturmentClosingPrice.Split(chArray))
			{
				if (!string.IsNullOrEmpty(str3))
				{
					List<ClosingPriceInfo> input = new List<ClosingPriceInfo>();
					string[] strArray2 = str3.Split(';');
					for (int index3 = 0; index3 < strArray2.Length; ++index3)
					{
						ClosingPriceInfo closingPriceInfo = new ClosingPriceInfo();
						try
						{
							string[] strArray3 = strArray2[index3].Split(',');
							closingPriceInfo.InsCode = Convert.ToInt64(strArray3[0].ToString());
							closingPriceInfo.DEven = Convert.ToInt32(strArray3[1].ToString());
							closingPriceInfo.PClosing = Convert.ToDecimal(strArray3[2].ToString());
							closingPriceInfo.PDrCotVal = Convert.ToDecimal(strArray3[3].ToString());
							closingPriceInfo.ZTotTran = Convert.ToDecimal(strArray3[4].ToString());
							closingPriceInfo.QTotTran5J = Convert.ToDecimal(strArray3[5].ToString());
							closingPriceInfo.QTotCap = Convert.ToDecimal(strArray3[6].ToString());
							closingPriceInfo.PriceMin = Convert.ToDecimal(strArray3[7].ToString());
							closingPriceInfo.PriceMax = Convert.ToDecimal(strArray3[8].ToString());
							closingPriceInfo.PriceYesterday = Convert.ToDecimal(strArray3[9].ToString());
							closingPriceInfo.PriceFirst = Convert.ToDecimal(strArray3[10].ToString());
							input.Add(closingPriceInfo);
						}
						catch (Exception ex)
						{
							ServerMethods.LogError("UpdateClosingPrices[Row:" + strArray2[index3] + "]", ex);
							throw ex;
						}
					}
					FileService.WriteClosingPrices(input);
				}
			}
		}
		return true;
	}
	catch (Exception ex)
	{
		if (ex.Message.Contains("The magic number in GZip header is not correct"))
		{
			if (settings.EnableDecompression)
			{
				settings.EnableDecompression = false;
				settings.Save();
				return false;
			}
		}
		try
		{
			if (FileService.LogErrorFile("[ UpdateClosingPrices (" + StaticData.Version + ") ] " + ex.Message + "(" + (ex.InnerException != null ? ex.InnerException.Message ?? "" : "") + ")") == -1)
			{
				int num = (int) MessageBox.Show("مقدار فیلد محل ذخیره فایل ها صحیح نمی باشد ");
			}
		}
		catch
		{
		}
		return false;
	}
}