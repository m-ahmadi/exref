// https://www.mql5.com/en/docs/runtime/tradepermission

if (!TerminalInfoInteger(TERMINAL_TRADE_ALLOWED)) // terminal lvl
if (!MQLInfoInteger(MQL_TRADE_ALLOWED))           // program lvl
if (!AccountInfoInteger(ACCOUNT_TRADE_EXPERT))    // account lvl, server-side
if (!AccountInfoInteger(ACCOUNT_TRADE_ALLOWED)) { // account lvl, client-side
	// no connection to server
	// account switched to read-only mode (sent to the archive)
	// trading disabled from server
	// connected to trading account in "Investor mode"
}
