import { NgModule }       from '@angular/core';

@NgModule({
	imports:         [],
		// other @NgModules to import
		// declarables exported from these @NgModules are available in templates of this module
		
	declarations:    [],
		// declarables that belong to this module
		// a declarable must belong to only one module
		// error if declarable exists but not declared
	
  providers:       [],
		// injectables available in injector of this module
		// declared dependencies to provide for a class when it's instantiated
	
  exports:         [],
		// declarables of this module, available in templates of other modules (that import this module)
	
	bootstrap:       [],
		// components that are bootstrapped when this module is bootstrapped (automatically added to entryComponents)
	
	
	entryComponents: [],    // used for adding manually-made components. (bootstrap & route components are automatically added)
	id:              '',    // register id to use in getModuleFactory()
	jit:             false, // true: skip aot
	schemas:         NO_ERRORS_SCHEMA | CUSTOM_ELEMENTS_SCHEMA,
})

// declarable: component, directive, pipe