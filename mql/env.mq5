// https://www.mql5.com/en/docs/constants/environment_state

// client terminal
// https://www.mql5.com/en/docs/constants/environment_state/terminalstatus
TerminalInfoString(TERMINAL_PATH);            // %COMPILER_PATH%
TerminalInfoString(TERMINAL_DATA_PATH);       // %MT_DATA% 
TerminalInfoString(TERMINAL_COMMONDATA_PATH); // %TER_COMMON%
TerminalInfoInteger(TERMINAL_CONNECTED);      // whether connected to server


// account
// https://www.mql5.com/en/docs/constants/environment_state/accountinformation
AccountInfoInteger(ACCOUNT_LOGIN);   // account number
AccountInfoString(ACCOUNT_NAME);     // "PROVIDED_NAME_WHEN_CREATED_ACCOUNT"
AccountInfoString(ACCOUNT_SERVER);   // "MetaQuotes-Demo"
AccountInfoString(ACCOUNT_CURRENCY); // "USD"
AccountInfoString(ACCOUNT_COMPANY);  // "MetaQuotes Ltd."


// program
// https://www.mql5.com/en/docs/constants/environment_state/mql5_programm_info
MQLInfoString(MQL_PROGRAM_NAME); // basename of .ex5 file
MQLInfoString(MQL_PROGRAM_PATH); // abs path to .ex5 file

ENUM_PROGRAM_TYPE mql_program = (ENUM_PROGRAM_TYPE)MQLInfoInteger(MQL_PROGRAM_TYPE);
switch (mql_program) {
	case PROGRAM_SCRIPT:
		MessageBox(__FILE__ + " is script"); break;
	case PROGRAM_EXPERT:
		MessageBox(__FILE__ + " is expert advisor"); break;
	case PROGRAM_INDICATOR:
		MessageBox(__FILE__ + " is custom indicator"); break;
}


// predefined variable
_Symbol // symbol of current chart
_Period // period of current chart in minutes
_Point  // point value            of current symbol
_Digits // point's decimal digits of current symbol
