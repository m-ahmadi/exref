
ATOM                =   WORD               =   unsigned short          =  2 bytes
UINT                =   unsigned int       =   2 or 4 bytes    
DWORD               =   unsigned long      =   4 bytes
WINUSERAPI          =   DECLSPEC_IMPORT    =   __declspec(dllimport)
LRESULT,LPARAM      =   LONG_PTR           =   __int64                 =  unsigned long    =  4 bytes
CALLBACK            =   __stdcall
WINAPI              =   __stdcall
WNDPROC             =   typedef LRESULT(CALLBACK *WNDPROC)(HWND,UINT,WPARAM,LPARAM)
HINSTANCE           =   struct HINSTANCE__{int i;} * HINSTANCE
HBRUSH              =   struct HBRUSH__{int i;} * HBRUSH
HICON               =   struct HICON__{int i;} * HICON
HDC                 =   struct HDC__{int i;} * HDC
HCURSOR             =   HICON
LPCTSTR             =   TCHAR              =   WCHAR                   =  wchar_t            = const unsigned short  = 2 bytes
BOOL                =   WINBOOL            =   int                     =  2 or 4 bytes
BYTE                =   unsigned char      =   1 byte
PSTR                =   CHAR               =   char                    =  1 byte
LPSTR               =   CHAR               =   char                    =  1 byte

HWND = 
	DECLARE_HANDLE(HWND);
	#define DECLARE_HANDLE(n) typedef struct n##__{int i;} * n
	
	typedef struct HWND__{
		int i;
	} * HWND
	
	struct HWND__{
		int i;
	} * HWND

	/**
		finally it means HWND equals to a structure which has one integer member
	**/
	
	



POINT = 
	typedef struct tagPOINT {
		LONG x;
		LONG y;
	} POINT,POINTL,*PPOINT,*LPPOINT,*PPOINTL,*LPPOINTL;

MSG = 
	typedef struct tagMSG {
		HWND hwnd;
		UINT message;
		WPARAM wParam;
		LPARAM lParam;
		DWORD time;
		POINT pt;
	} MSG,*LPMSG,*PMSG;

RECT = 
	typedef struct tagRECT {
		LONG left;
		LONG top;
		LONG right;
		LONG bottom;
	} RECT,*PRECT,*LPRECT;

PAINTSTRUCT = 
	typedef struct tagPAINTSTRUCT {
		HDC	hdc;
		BOOL fErase;
		RECT rcPaint;
		BOOL fRestore;
		BOOL fIncUpdate;
		BYTE rgbReserved[32];
	} PAINTSTRUCT,*LPPAINTSTRUCT;