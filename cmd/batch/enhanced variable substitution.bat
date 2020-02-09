@echo off
:: only possible on %0 ... %9 and FOR %I variables

echo original:            %0
echo remove quotes:       %~0
echo full path:           %~f0
echo only drive letter:   %~d0
echo only path:           %~p0
echo only file name       %~n0
echo only file extension: %~x0
echo short path names:    %~s0
echo file attributes:     %~a0
echo file date/time:      %~t0
echo file size:           %~z0
echo search paths in %%path%% and return first match. modifier is applied to result of search:
echo   %~f$PATH:1 (call script with 1 arg)
echo.
echo.
echo combinations:
echo drive letter and path:      %~dp0
echo file name and extension:    %~nx0
echo full path with short names: %~fs0
echo on path search:             %~dp$PATH:0
echo like dir output:            %~ftza0

pause