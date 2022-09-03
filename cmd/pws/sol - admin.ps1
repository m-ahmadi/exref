Get-Process                              # show all processes
Get-Process system                       # show the process named system
Get-Process system | Get-Member          # list all members of a process
Get-Service "ap*"                        # list services with filter
