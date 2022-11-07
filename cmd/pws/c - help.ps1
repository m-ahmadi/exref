<#

cmdlets
	consist of Verb-Noun
	have 1 or more option signatures
	first option of signature can be passed hyphenless (without providing `-Option` itself)

signature
	cmd [-OptionWithValue <ValueType>]  [-OptionWithoutValue]
	cmd [-Option1 <Type>] [-Option2]

	option with value
		cmd [-Name <String>]
		cmd [-Age <Number>]
		cmd [-ChildrenNames <String[]>]

	option without value (boolean option)
		cmd [-OptionWithoutValue]

#>

# help
Get-Help             # show help
help                 # shortcut for above (not an alias, a shell feature I guess)
Get-Help Get-Service # help for a cmdlet
help Get-Service     # same as above
Update-Help          # install latest help files

help dir -Examples # only examples
help dir -Detailed # more info
help dir -Full     # technical info 
help dir -Online   # online help

gcm                # list all commands
gcm -Noun s*       # ...noun starts with s
gcm -Verb stop*    # ...verb starts with stop


# shortcuts
# tab:           autocomplete
# ctrl+space:    show all possibles