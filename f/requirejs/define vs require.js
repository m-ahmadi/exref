/*
	The define() function accepts two optional parameters (a string that represent a module ID and an array of required modules) and one required parameter (a factory method).
	
	The return of the factory method MUST return the implementation for your module (in the same way that the Module Pattern does).
	
	The require() function doesn't have to return the implementation of a new module.

	Using define() you are asking something like "run the function that I am passing as a parameter and assign whatever returns to the ID that I am passing but, before, check that these dependencies are loaded".

	Using require() you are saying something like "the function that I pass has the following dependencies, check that these dependencies are loaded before running it".

	The require() function is where you use your defined modules, in order to be sure that the modules are defined, but you are not defining new modules there.
*/