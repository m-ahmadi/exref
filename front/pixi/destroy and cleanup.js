/*
	To clean up WebGL memory you will have to loop through each of your textures and call the `destroy` method on each of them.
	Make sure to pass `true` as the param to ensure the actual underlying data is cleared from memory.
	As for any objects you created the best thing to do is remove them all from their respective parents,
	(so they lose their references to eachother) and then lose any references to objects you can access.
	After you lose all your references, the garbage collector can do it's job and clean up for you.
*/