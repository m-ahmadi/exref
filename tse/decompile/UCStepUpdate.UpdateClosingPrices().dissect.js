UCStepUpdate.UpdateClosingPrices()
// probably executes on last step of the app (when updating the data) 

strArray1 = ServerMethods.LastPossibleDeven().Split(';') // 20190807;20190807
int lastPossibleDeven_1 = strArray1[0] // 20190807
int lastPossibleDeven_2 = strArray1[1] // 20190807

SelectedInstruments = StaticData.SelectedInstruments // return List<string>
long[][] numArray1 = new long[SelectedInstruments.Count][]; // two dimensional array, length == selected instruments count
int index1 = 0;
foreach (Instrument in SelectedInstruments) { // got through string list of selected instruments
	string insCode = Instrument.InsCode
	int insLastDeven = FileService.LastDeven(insCode)
	instrumentInfo = StaticData.Instruments.Find(insCode)
	// instrumentInfo.YMarNSC کد بازار
	// NO    Normal Market
	// ID    Index Market
	if (
		(
			instrumentInfo.YMarNSC != "NO" ||     // if instrument does not belong to normal market
			insLastDeven != lastPossibleDeven_1   // if instrument's last deven is not equal to last possible deven
		)
		&&
		(
			instrumentInfo.YMarNSC != "ID" ||     // if instrument does not belong to index market
			insLastDeven != lastPossibleDeven_2   // ...
		)
	) {
		numArray1[index1] = new long[3];
		numArray1[index1][0] = Convert.ToInt64(insCode)
		numArray1[index1][1] = Convert.ToInt64(insLastDeven)
		numArray1[index1][2] = instrumentInfo.YMarNSC == "NO" ? 0L : 1L; // 1L = a long with value 1
			//     normal market instrument: 0
			// not normal market instrument: 1
		index1++
	}
}
// numArray1:
[
//  insCode              lastDeven notNormalMarket
	[ 22645269567765904, 20190807, 1 ], // each item represent one selected instrument
	[ 29527985620948695, 20190807, 0 ],
	[ 44891482026867833, 20190807, 1 ],
	...
]
index1 // number of selected instruments - 1 (its length)
int num1; // used for progress bar
if index1 % 20 == 0      // index1 is multiple (mezrab) of 20
	num1 = index1 / 20
else if index1 % 20 != 0 // index1 is not multiple of 20
	num1 = (index1 / 20) + 1
num1 /*
6 selected instruments:    num1 = 0.25 (5 / 20)     => 0 (cuz it's int)
7 selected instruments:    num1 = 1.35 (6 / 20 + 1) => 1
index1                action       num1
0      % 20 = 0       0  / 20      0
1      % 20 = 1       1  / 20+1    1 (1.05)
2      % 20 = 2       2  / 20+1    1 (1.1)
5      % 20 = 5       5  / 20+1    1 (1.25)
6      % 20 = 6       6  / 20+1    1 (1.3)
19     % 20 = 19      19 / 20+1    1 (1.95)
20     % 20 = 0       20 / 20      1
21     % 20 = 1       21 / 20+1    2 (2.05)
39     % 20 = 19      39 / 20+1    2 (2.95)
40     % 20 = 0       40 / 20      2
41     % 20 = 1       41 / 20+1    3 (3.05)
59     % 20 = 19      59 / 20+1    3 (3.95)
60     % 20 = 0       60 / 20      3

short
index1      num1
0           0
1  - 20     1
21 - 40     2
41 - 60     3
61 - 80     4
81 - 100    5
*/
for (int index2 = 0; index2 < num1; index2++) {
/*selected_instruments      number_of_times_this_loop_iterates
	0                         0
	1 - 20                    1
	21 - 40                   2
	41 - 60                   3
	...
*/
	
	int length;
	if index2 < (num1 - 1)
		length = 20
	else
		length = index1 % 20
/* length
.                                              is less than num1-1 ? 20
(selected_instruments)      (weird index)      (this loop iteration)
index1                      num1               index2                     condition                 length
0                           0                  0                          0 < -1 = true             20
1 - 20                      1                  0                          ---------------           index1 % 20 (1 - 20)
2                           1                  0                          0 < 0  = false            index1 % 20 (2)
19                          1                  0                          0 < 0  = false            index1 % 20 (19)
21 - 40                     2                  0                          0 < 1  = true             20
21 - 40                     2                  1                          ---------------           index1 % 20 (21 - 40)
21                          2                  0                          0 < 1  = true             20
22                          2                  0                          0 < 1  = true             20
23                          2                  0                          0 < 1  = true             20
21                          2                  1                          1 < 1  = false            index1 % 20 (21)
22                          2                  1                          1 < 1  = false            index1 % 20 (22)

to simplify a bit:
length === selected_instruments (minus some cases)
*/
	long[][] numArray2 = new long[length][]; // two dimensional array
	
	for (int index3 = 0; index3 < length; index3++) {
		numArray2[index3] = new long[3];
		numArray2[index3][0] = numArray1[index2 * 20 + index3][0]; // 0 * 20 + 0
		numArray2[index3][1] = numArray1[index2 * 20 + index3][1];
		numArray2[index3][2] = numArray1[index2 * 20 + index3][2];
	}
	// numArray1:
	[
	//  insCode            lastDeven notNormalMarket
		[ 22645269567765904, 20190807, 1 ], // each item represent one selected instrument
		[ 29527985620948695, 20190807, 0 ],
		[ 44891482026867833, 20190807, 1 ],
		...
	]
	// numArray2
	// same as numArray1.
	// I guess it's for case when multiple instruments are selected, 
	// so it then divides them to groups before downloading their data.
	[
		[ 29527985620948695, 20190807, 0 ],
		[ 29527985620948695, 20190807, 1 ],
	]
	
	string str2 = "";
	foreach (long[] numArray3 in numArray2) // numArray3 == numArray2_item
		str2 = str2 + (object) numArray3[0] + "," + (object) numArray3[1] + "," + (object) numArray3[2] + ";"; // this is where inscode is generated
	
	str2 = "29527985620948695,20190807,0;29527985620948695,20190807,1;"
	string insturmentClosingPrice = ServerMethods.GetInsturmentClosingPrice( str2.slice(0, -1) ); // orig: str2.Substring(0, str2.Length - 1)
	
	//================ ServerMethods.GetInsturmentClosingPrice
	WebServiceTseClient serviceTseClient = new WebServiceTseClient()
	serviceTseClient.EnableDecompression = settings.EnableDecompression;
	string insCodes1 = Utility.Compress(insCodes);
	return serviceTseClient.DecompressAndGetInsturmentClosingPrice(insCodes1);
	//================
	
	// === FINALY ===
	//================= Utility.Compress
	public static string Compress(string text) {
		byte[] bytes = Encoding.UTF8.GetBytes(text);
		MemoryStream memoryStream1 = new MemoryStream();
		using (GZipStream gzipStream = new GZipStream((Stream) memoryStream1, CompressionMode.Compress, true))
			gzipStream.Write(bytes, 0, bytes.Length); 
		memoryStream1.Position = 0L;
		MemoryStream memoryStream2 = new MemoryStream();
		byte[] buffer = new byte[memoryStream1.Length];
		memoryStream1.Read(buffer, 0, buffer.Length);
		byte[] inArray = new byte[buffer.Length + 4];
		Buffer.BlockCopy( (Array) buffer, 0, (Array) inArray, 4, buffer.Length );
		Buffer.BlockCopy( (Array) BitConverter.GetBytes(bytes.Length), 0, (Array) inArray, 0, 4);
		return Convert.ToBase64String(inArray);
	}
	//=================
	
	
	
	if (insturmentClosingPrice == '*') {
		"بروز رسانی اطلاعات در حد فاصل ساعت هشت صبح تا یک بعد از ظهر روزهای شنبه تا چهارشنبه امکان پذیر نمی باشد."
		"جهت ساخت فایلها با اطلاعات فعلی از دکمه تعبیه شده در پایین صفحه استفاده کنید."
	}
	string str3 = insturmentClosingPrice;
	char[] chArray = new char[1]{ '@' };
	foreach (string str4 in str3.Split(chArray)) {
		if (!string.IsNullOrEmpty(str4)) {
			List<ClosingPriceInfo> cpList = new List<ClosingPriceInfo>();
			string[] strArray2 = str4.Split(';');
			for (int index3 = 0; index3 < strArray2.Length; ++index3) {
				ClosingPriceInfo closingPriceInfo = new ClosingPriceInfo();
				try {
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
				catch (Exception ex) {
					ServerMethods.LogError("UpdateClosingPrices[Row:" + strArray2[index3] + "]", ex);
					throw ex;
				}
			}
			FileService.WriteClosingPrices(cpList);
		}
	}
}
return true;






InsCodes = does stuff
res = ServerMethods.GetInsturmentClosingPrice(InsCodes)
if res != '*' or '' or null
cell = res.split('@').split(';').Split(',')
cpList = cell[0] - cell[10]

FileService.WriteClosingPrices(cpList) // writes to ~\Files\Instruments\+InsCode+.csv