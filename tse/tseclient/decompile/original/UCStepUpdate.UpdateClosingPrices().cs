public bool UpdateClosingPrices()
{
	// ISSUE: object of a compiler-generated type is created
	// ISSUE: variable of a compiler-generated type
	Settings settings = new Settings();
	try
	{
		if (this.isVisual)
		{
			this.rtbOperationLog.AppendText("\n\tدریافت اطلاعات ... ");
			this.rtbOperationLog.SelectionStart = this.rtbOperationLog.Text.Length;
			this.rtbOperationLog.ScrollToCaret();
			this.progressBar.Value = 0;
			this.lblProgress.Text = "0%";
			Application.DoEvents();
		}
		string str1 = "";
		try
		{
			str1 = ServerMethods.LastPossibleDeven();
		}
		catch (Exception ex)
		{
			ServerMethods.LogError("lastPossibleDEvens", ex);
		}
		if (str1.Equals("*"))
		{
			if (this.isVisual)
			{
				this.rtbOperationLog.AppendText("\n\tبروز رسانی اطلاعات در حد فاصل ساعت هشت صبح تا یک بعد از ظهر روزهای شنبه تا چهارشنبه امکان پذیر نمی باشد.");
				this.rtbOperationLog.AppendText("\n\tجهت ساخت فایلها با اطلاعات فعلی از دکمه تعبیه شده در پایین صفحه استفاده کنید.");
				this.rtbOperationLog.SelectionStart = this.rtbOperationLog.Text.Length;
				this.rtbOperationLog.ScrollToCaret();
			}
			return false;
		}
		string[] strArray1 = str1.Split(';'); // 20190807;20190807
		int int32_1 = Convert.ToInt32(strArray1[0]); // 20190807
		int int32_2 = Convert.ToInt32(strArray1[1]); // 20190807
		long[][] numArray1 = new long[StaticData.SelectedInstruments.Count][]; // number of selected instruments
		int index1 = 0;
		using (List<string>.Enumerator enumerator = StaticData.SelectedInstruments.GetEnumerator()) // got through string list of selected instruments
		{
			while (enumerator.MoveNext())
			{
				string item = enumerator.Current;
				int num = FileService.LastDeven(item);
				InstrumentInfo instrumentInfo = StaticData.Instruments.Find((Predicate<InstrumentInfo>) (p => p.InsCode == Convert.ToInt64(item)));
				if ( (!(instrumentInfo.YMarNSC == "NO") || num != int32_1) &&
						(!(instrumentInfo.YMarNSC == "ID") || num != int32_2))
				{
					numArray1[index1] = new long[3];
					numArray1[index1][0] = Convert.ToInt64(item);
					numArray1[index1][1] = Convert.ToInt64(num);
					numArray1[index1][2] = instrumentInfo.YMarNSC == "NO" ? 0L : 1L;
					++index1;
				}
			}
		}
		int num1 = index1 % 20 != 0 ? index1 / 20 + 1 : index1 / 20; // num1 is used for progress bar
		for (int index2 = 0; index2 < num1; ++index2)
		{
			int length = index2 < num1 - 1 ? 20 : index1 % 20;
			if (this.isVisual)
			{
				this.rtbOperationLog.AppendText("\n\tدریافت بخش " + (index2 + 1).ToString() + " از " + (object) num1 + " اطلاعات ... ");
				this.rtbOperationLog.SelectionStart = this.rtbOperationLog.Text.Length;
				this.rtbOperationLog.ScrollToCaret();
				Application.DoEvents();
				if (length == 0)
				{
					this.progressBar.Value = 100;
					this.lblProgress.Text = "100%";
					Application.DoEvents();
					continue;
				}
			}
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
				str2 = str2 + (object) numArray3[0] + "," + (object) numArray3[1] + "," + (object) numArray3[2] + ";"; // this is where inscode is generated
			string insturmentClosingPrice = ServerMethods.GetInsturmentClosingPrice(str2.Substring(0, str2.Length - 1));
			if (insturmentClosingPrice.Equals("*"))
			{
				if (this.isVisual)
				{
					this.rtbOperationLog.AppendText("\n\tبروز رسانی اطلاعات در حد فاصل ساعت هشت صبح تا یک بعد از ظهر روزهای شنبه تا چهارشنبه امکان پذیر نمی باشد.");
					this.rtbOperationLog.AppendText("\n\tجهت ساخت فایلها با اطلاعات فعلی از دکمه تعبیه شده در پایین صفحه استفاده کنید.");
					this.rtbOperationLog.SelectionStart = this.rtbOperationLog.Text.Length;
					this.rtbOperationLog.ScrollToCaret();
				}
				return false;
			}
			string str3 = insturmentClosingPrice;
			char[] chArray = new char[1]{ '@' };
			foreach (string str4 in str3.Split(chArray))
			{
				if (!string.IsNullOrEmpty(str4))
				{
					List<ClosingPriceInfo> cpList = new List<ClosingPriceInfo>();
					string[] strArray2 = str4.Split(';');
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
							cpList.Add(closingPriceInfo);
						}
						catch (Exception ex)
						{
							ServerMethods.LogError("UpdateClosingPrices[Row:" + strArray2[index3] + "]", ex);
							throw ex;
						}
					}
					FileService.WriteClosingPrices(cpList);
					if (this.isVisual && cpList.Count > 0)
					{
						InstrumentInfo instrumentInfo = StaticData.Instruments.Find((Predicate<InstrumentInfo>) (p => p.InsCode == cpList[0].InsCode));
						this.rtbOperationLog.AppendText("\n\t\tبروز رسانی اطلاعات " + instrumentInfo.Symbol + " (" + instrumentInfo.Name + ")");
						this.rtbOperationLog.SelectionStart = this.rtbOperationLog.Text.Length;
						this.rtbOperationLog.ScrollToCaret();
					}
				}
			}
			if (this.isVisual)
			{
				this.progressBar.Value = Convert.ToInt32((double) (index2 + 1) / (double) num1 * 100.0);
				this.lblProgress.Text = Convert.ToInt32((double) (index2 + 1) / (double) num1 * 100.0).ToString() + "%";
				Application.DoEvents();
			}
		}
		if (this.isVisual)
		{
			if (num1 == 0)
			{
				this.progressBar.Value = 100;
				this.lblProgress.Text = "100%";
				Application.DoEvents();
			}
			this.rtbOperationLog.AppendText("\n\tبروز رسانی اطلاعات نمادها با موفقیت انجام گردید\t ");
			this.rtbOperationLog.AppendText("\n\tجهت ایجاد خروجی جدید بر اساس اطلاعات بروز شده از دکمه تولید خروجی استفاده کنید ");
			this.rtbOperationLog.SelectionStart = this.rtbOperationLog.Text.Length;
			this.rtbOperationLog.ScrollToCaret();
		}
		return true;
	}
	catch (Exception ex)
	{
		if (ex.Message.Contains("The magic number in GZip header is not correct") && settings.EnableDecompression)
		{
			settings.EnableDecompression = false;
			settings.Save();
			this.owner.TabSwitcher(Tabs.Update);
			return false;
		}
		if (this.isVisual)
		{
			this.rtbOperationLog.AppendText("\n\tبروز رسانی اطلاعات نمادها ناموفق بود. ");
			this.rtbOperationLog.SelectionStart = this.rtbOperationLog.Text.Length;
			this.rtbOperationLog.ScrollToCaret();
			this.rtbOperationLog.AppendText(ServerMethods.LogError(nameof (UpdateClosingPrices), ex));
		}
		try
		{
			if (FileService.LogErrorFile("[ UpdateClosingPrices (" + StaticData.Version + ") ] " + ex.Message + "(" + (ex.InnerException != null ? ex.InnerException.Message ?? "" : "") + ")") == -1)
			{
				if (this.isVisual)
				{
					int num = (int) MessageBox.Show("مقدار فیلد محل ذخیره فایل ها صحیح نمی باشد ");
				}
			}
		}
		catch
		{
			this.rtbOperationLog.AppendText("\n\tثبت خطا در فایل ناموفق بود");
		}
		return false;
	}
}