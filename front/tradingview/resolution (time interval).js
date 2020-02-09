var widget = new TradingView.widget({
	interval: 'D'
});

/*
resolution (time interval) is a time period of one bar.
charting library api has many methods that accept and return resolutions.
	

seconds  1S
minutes  1
hours    1h 1H 60 (hours xh/xH are ui-only and they are always set using minutes in the api.)
days     1D
weeks    1W
months   1M
years    12M  (years are set using months)
*/