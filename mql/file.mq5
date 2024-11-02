/* only 2 paths allowed (look in ".\env - paths.txt" first)

%TER_COMMON%\Files
%MQL_ROOT%\Files

*/

int file_handle = FileOpen("hello.txt", FILE_WRITE);
FileWriteString(file_handle, "hello kitty"); // writes to %MQL_ROOT%\Files
FileClose(file_handle);
