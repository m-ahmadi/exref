Verb-Noun            # cmdlet format
Get-Help             # show help
help                 # shortcut for above (not an alias, a shell feature I guess)
Get-Help Get-Service # help for a cmdlet
help Get-Service     # same as above
Update-Help          # install latest help files

# shortcuts
# tab:           autocomplete
# ctrl+space:    show all possibles

help dir -Examples # only examples
help dir -Detailed # more info
help dir -Full     # technical info 
help dir -Online   # online help

gcm                # list all commands
gcm -Noun s*       # ...noun starts with s
gcm -Verb stop*    # ...verb starts with stop