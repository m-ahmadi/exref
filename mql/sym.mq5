// https://www.mql5.com/en/docs/constants/environment_state/marketinfoconstants

long SymbolInfoInteger(string name, ENUM_SYMBOL_INFO_INTEGER  prop_id);
bool SymbolInfoInteger(string name, ENUM_SYMBOL_INFO_INTEGER  prop_id, long & long_var);
// https://www.mql5.com/en/docs/constants/environment_state/marketinfoconstants#enum_symbol_info_integer
SYMBOL_EXIST
SYMBOL_SELECT
SYMBOL_VOLUME

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
double SymbolInfoDouble(string name, ENUM_SYMBOL_INFO_DOUBLE prop_id);
bool   SymbolInfoDouble(string name, ENUM_SYMBOL_INFO_DOUBLE  prop_id, double & double_var);
// https://www.mql5.com/en/docs/constants/environment_state/marketinfoconstants#enum_symbol_info_double

string sym = Symbol();
double a[] = {
	SymbolInfoDouble(sym, SYMBOL_BID),
	SymbolInfoDouble(sym, SYMBOL_ASK),
	SymbolInfoDouble(sym, SYMBOL_BIDHIGH),
	SymbolInfoDouble(sym, SYMBOL_BIDLOW),
	SymbolInfoDouble(sym, SYMBOL_ASKHIGH),
	SymbolInfoDouble(sym, SYMBOL_ASKLOW),
};
string names[];
string ss = "bid,ask,bhi,blo,ahi,alo";
StringSplit(ss, ',', names);
string s = "";
for (uint i=0; i<a.Size(); i++) s += names[i] +":  "+ (string)a[i] + "\n";
MessageBox(s);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
string  SymbolInfoString(string name, ENUM_SYMBOL_INFO_STRING prop_id);
bool    SymbolInfoString(string name, ENUM_SYMBOL_INFO_STRING prop_id, string & string_var);
// https://www.mql5.com/en/docs/constants/environment_state/marketinfoconstants#enum_symbol_info_string
SYMBOL_BASIS
SYMBOL_CATEGORY
SYMBOL_COUNTRY
