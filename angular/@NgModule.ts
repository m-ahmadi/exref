import { NgModule }       from '@angular/core';

@NgModule({
	imports:         [],              // other NgModules declarables available in templates of this module
	declarations:    [],              // declarables that belong                            to this module
  providers:       [],              // injectable objects          available in injector  of this module
  bootstrap:       [],              // components that are bootstrapped when this module is bootstrapped (automatically added to entryComponents)
	
	entryComponents: [],              // used for adding manually-made components. (bootstrap & route components are automatically added)
	id:              undefined | '',  // register id to use in getModuleFactory()
	jit:             false,           // true: skip aot
	schemas:         NO_ERRORS_SCHEMA | CUSTOM_ELEMENTS_SCHEMA,
})

// declarable: component, directive, pipe