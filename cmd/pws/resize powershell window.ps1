[console]::WindowWidth = 80
[console]::WindowHeight = 20

[console]::BufferWidth = [console]::WindowWidth

# change window position (with cmdow)
$handle = (cmdow /t | %{ $_.split()[0] })[1]
cmdow $handle /mov 800 400