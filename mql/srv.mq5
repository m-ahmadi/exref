#property service

void OnStart() {
	
	datetime now = TimeLocal();
	
	while(!IsStopped()) {
		// endless loop
		
		now = TimeLocal();
		string time_fmt = TimeToString(now, TIME_DATE|TIME_SECONDS);
		MessageBox(time_fmt);
		Sleep(2000);
	}
	
}
