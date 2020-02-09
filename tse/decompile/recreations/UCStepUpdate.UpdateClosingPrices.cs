using System;
using System.Collections.Generic;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            string insCode = Program.UpdateClosingPrices();
            Console.WriteLine(insCode);
            Console.ReadLine();
        }
        public static string UpdateClosingPrices()
        {
            string result = "start";

            string str1 = "20190811;20190811";
            // string str1 = ServerMethods.LastPossibleDeven();
            string[] strArray1 = str1.Split(';');
            int int32_1 = Convert.ToInt32(strArray1[0]);
            int int32_2 = Convert.ToInt32(strArray1[1]);
            // long[][] numArray1 = new long[StaticData.SelectedInstruments.Count][];
            long[][] numArray1 = new long[2][];
            int index1 = 0;

            List<string> stringList = new List<string> { "44891482026867833" }; // stringList.Add();
            // using (List<string>.Enumerator enumerator = StaticData.SelectedInstruments.GetEnumerator())
            using (List<string>.Enumerator enumerator = stringList.GetEnumerator())
            {
                while (enumerator.MoveNext())
                {
                    string item = enumerator.Current;
                    int num = 20190810; // FileService.LastDeven(item);



                    // InstrumentInfo instrumentInfo = StaticData.Instruments.Find((Predicate<InstrumentInfo>)(p => p.InsCode == Convert.ToInt64(item)));
                    // List<InstrumentInfo> instrumentInfoList = new List<InstrumentInfo>();

                    // 44891482026867833,IRO1SIPA0001,SIPA1,Saipa,SIPA,خساپا,سايپا,IRO1SIPA0001,20190810,1,سايپا,A,N1,NO,3,34 ,3410,300
                    InstrumentInfo instrumentInfo = new InstrumentInfo()
                    {
                        InsCode = Convert.ToInt64("44891482026867833"),
                        InstrumentID = "IRO1SIPA0001",
                        LatinSymbol = "SIPA1",
                        LatinName = "Saipa",
                        CompanyCode = "SIPA",
                        Symbol = "خساپا",
                        Name = "سايپا",
                        CIsin = "IRO1SIPA0001",
                        DEven = Convert.ToInt32( "20190810" ),
                        Flow = Convert.ToByte("1"),
                        LSoc30 = "سايپا",
                        CGdSVal = "A",
                        CGrValCot = "N1",
                        YMarNSC = "NO",
                        CComVal = "3",
                        CSecVal = "34",
                        CSoSecVal = "3410",
                        YVal = "300"
                    };


                    if ( (instrumentInfo.YMarNSC != "NO" || num != int32_1) &&
                        (instrumentInfo.YMarNSC != "ID" || num != int32_2) )
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
                    str2 = str2 + (object)numArray3[0] + "," + (object)numArray3[1] + "," + (object)numArray3[2] + ";";

                /*
                long[] numArr = { 22645269567765904, 20190807, 1 };
                string str2 = "";
                str2 += (object)numArr[0];
                Console.WriteLine(str);
                */
                result = str2.Substring(0, str2.Length - 1);
                return result;
                // string insturmentClosingPrice = ServerMethods.GetInsturmentClosingPrice(str2.Substring(0, str2.Length - 1));
            }
            return result;
        }
    }

    public class InstrumentInfo
    {
        public long InsCode { get; set; }

        public string InstrumentID { get; set; }

        public string LatinSymbol { get; set; }

        public string LatinName { get; set; }

        public string CompanyCode { get; set; }

        public string Symbol { get; set; }

        public string Name { get; set; }

        public string CIsin { get; set; }

        public int DEven { get; set; }

        public byte Flow { get; set; }

        public string LSoc30 { get; set; }

        public string CGdSVal { get; set; }

        public string CGrValCot { get; set; }

        public string YMarNSC { get; set; }

        public string CComVal { get; set; }

        public string CSecVal { get; set; }

        public string CSoSecVal { get; set; }

        public string YVal { get; set; }
    }
}
