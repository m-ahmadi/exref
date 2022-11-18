help Add-Type -Online

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# basic example

$source = @'
public class BasicTest {
	public static int Add(int a, int b) {
		return (a + b);
	}

	public int Multiply(int a, int b) {
		return (a * b);
	}
}
'@

Add-Type -TypeDefinition $source

[BasicTest]::Add(4, 3)

$basicTestObject = New-Object BasicTest
$basicTestObject.Multiply(5, 2)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# call win32 api


$MethodDefinition = @'

[DllImport("kernel32.dll", CharSet = CharSet.Unicode)]

public static extern bool CopyFile(string lpExistingFileName, string lpNewFileName, bool bFailIfExists);

'@


$Kernel32 = Add-Type -MemberDefinition $MethodDefinition -Name 'Kernel32' -Namespace 'Win32' -PassThru


$Kernel32::CopyFile("$($Env:SystemRoot)\System32\calc.exe", "$($Env:USERPROFILE)\Desktop\calc.exe", $False)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@