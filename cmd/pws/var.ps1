# automatic variables (read-only, don't write, though you can)
# https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_automatic_variables

$$ # last line's last  token
$?
$^ # last line's first token
$_ # current obj in pipeline
$args
$ConsoleFileName
$Error
$Event
$EventArgs
$EventSubscriber
$ExecutionContext
$false
$foreach
$HOME
$Host
$input
$IsCoreCLR
$IsLinux
$IsMacOS
$IsWindows
$LastExitCode
$Matches
$MyInvocation
$NestedPromptLevel
$null
$PID
$PROFILE
$PSBoundParameters
$PSCmdlet
$PSCommandPath
$PSCulture
$PSDebugContext
$PSHOME
$PSItem
$PSScriptRoot
$PSSenderInfo
$PSUICulture
$PSVersionTable
$PWD
$Sender
$ShellId
$StackTrace
$switch
$this
$true

$Env

# $_
1,2,3 | %{ write-host $_ }
1,2,3 | %{ write-host $PSItem }
1,2,3 | %{ Write-Host $_ }
1,2,3 | ?{ $_ -gt 1 }
