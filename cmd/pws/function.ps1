function Add-Numbers {
	$args[0] + $args[1]
	Write-Host 'I did something!'
}
Add-Numbers 5 10

# named params
function Add-Numbers {
 param( [int]$Price, [int]$Tax )
 $Price + $Tax
}
Add-Numbers 5 10

# advanced
function Do-Something {
	[CmdletBinding()]
	param($String)

	Write-Error -Message 'Danger, Will Robinson!'
}
Do-Something

# another form
function New-WorkDay {
	[CmdletBinding()]
	Param ($a)
	
	begin {
		
	}
	process {
		foreach($i in $arr){
			switch ($i) {
				meeting { Start-Meeting $i }
			}
		}
	}
	end {
		Invoke-Driving -From Work -To Home
	}
}