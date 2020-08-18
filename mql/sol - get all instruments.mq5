// all symbols
int total = SymbolsTotal(0);
for (int i=0; i < total; i++) {
	Print("SYMBOL: ", SymbolName(i, 0));
}

// only market watch symbols
int total = SymbolsTotal(1); 
for (int i=0; i < total; i++) {
	Print("SYMBOL: ", SymbolName(i, 1));
}