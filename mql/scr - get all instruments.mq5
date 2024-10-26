void OnStart() {
	// all symbols 
	IterAndWrite(0, "symbols-all.txt");
	
	// only market watch symbols
	IterAndWrite(1, "symbols-marketwatch.txt");
}

void IterAndWrite(int selected, string file_name) {
	string s = "";
	int tot = SymbolsTotal(selected);
	for (int i=0; i<tot; i++) s += SymbolName(i, selected) + "\n";
	FileWriteString(FileOpen(file_name, FILE_WRITE), s);
}
