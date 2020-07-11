Private Sub ListBox1_Change()
	
	Dim selection As String
	Dim i As Long
	
	For i = 0 To ListBox1.ListCount - 1
		If ListBox1.Selected(i) Then
			selection = selection & ListBox1.List(i)
		End If
	Next i
	
	Range("a1").Value = selection
	
End Sub
