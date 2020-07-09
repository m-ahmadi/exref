Worksheets("Sheet1").Activate 
Range("A1:H8").Formula = "=Rand()"

MsgBox "Hey there."

Range("e3").Value = Range("e3").Value + 1 ' higher
Range("e3").Value = Range("e3").Value - 1 ' lower

Selection.Offset(-1, 0).Select ' move up
Selection.Offset(1, 0).Select  ' move down
Selection.Offset(0, 1).Select  ' move right
Selection.Offset(0, -1).Select ' move left

Debug.Print "hi"

' create list
Dim counter As Integer
For counter = 0 To 10
	Selection.Value = counter
	Selection.Offset(1, 0).Select
Next



If condition Then
	statements
ElseIf elseifcondition Then
	elseifstatements
Else
	elsestatements
End If

If condition Then statements Else elsestatements ' single-line