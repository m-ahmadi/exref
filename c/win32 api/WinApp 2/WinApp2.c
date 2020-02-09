#include <windows.h>

LRESULT CALLBACK WndProc (HWND, UINT, WPARAM, LPARAM) ;

int WINAPI WinMain (HINSTANCE hInstance, HINSTANCE hPrevInstance, PSTR szCmdLine, int iCmdShow) {
	static TCHAR szAppName[] = TEXT ("HelloWin");
	HWND         hwnd;
	MSG          msg;
	WNDCLASS     wndclass;
	wndclass.style         = CS_HREDRAW | CS_VREDRAW;
	wndclass.lpfnWndProc   = WndProc;
	wndclass.cbClsExtra    = 0;
	wndclass.cbWndExtra    = 0;
	wndclass.hInstance     = hInstance;
	wndclass.hIcon         = LoadIcon (NULL, IDI_INFORMATION);
	wndclass.hCursor       = LoadCursor (NULL, IDC_CROSS);
	wndclass.hbrBackground = (HBRUSH) /*GetStockObject*/ (GRAY_BRUSH);
	wndclass.lpszMenuName  = NULL;
	wndclass.lpszClassName = szAppName;
	if ( !RegisterClass (&wndclass) ) {
		MessageBox (NULL, TEXT ("This program requires Windows NT!"), szAppName, MB_ICONERROR);
		return 0 ;
	}
	hwnd = CreateWindow (
		szAppName,
		TEXT ("The Hello Program"),
		WS_OVERLAPPEDWINDOW,
		CW_USEDEFAULT,
		CW_USEDEFAULT,
		CW_USEDEFAULT,
		CW_USEDEFAULT,
		NULL,
		NULL,
		hInstance,
		NULL
	);
	
	ShowWindow (hwnd, iCmdShow);
	UpdateWindow (hwnd);
	while ( GetMessage (&msg, NULL, 0, 0) ) {
		TranslateMessage (&msg);
		DispatchMessage (&msg);
	};
	return msg.wParam;
}
LRESULT CALLBACK WndProc (HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam) {
	HDC         hdc;
	PAINTSTRUCT ps;
	RECT        rect;
	
	HWND        hwndButton;
	static TCHAR button[] = TEXT ("BUTTON");
	
	switch (message) {
		case WM_CREATE:
			hwndButton = CreateWindow(
				button,  // Predefined class; Unicode assumed 
				TEXT ("What's your name?"),      // Button text 
				WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,  // Styles 
				10,         // x position 
				10,         // y position 
				200,        // Button width
				100,        // Button height
				hwnd,       // Parent window
				NULL,       // No menu.
				(HINSTANCE)GetWindowLong(hwnd, GWL_HINSTANCE), 
				NULL
			);
			return 0;
		case WM_PAINT:
			hdc = BeginPaint (hwnd, &ps);
			GetClientRect (hwnd, &rect);
			DrawText (hdc, TEXT ("Hello, I am Mohammad!"), -1, &rect, DT_SINGLELINE | DT_CENTER | DT_VCENTER);
			EndPaint (hwnd, &ps);
			return 0;
		case WM_DESTROY:
			PostQuitMessage (0);
			return 0;
	}
	return DefWindowProc (hwnd, message, wParam, lParam);
}
