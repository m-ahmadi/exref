import defaultMember                       from './module.js';
import * as name                           from './module.js';
import { member }                          from './module.js';
import { member as alias }                 from './module.js';
import { member1 , member2 }               from './module.js';
import { member1 , member2 as alias2 }     from './module.js';
import defaultMember, { member, another }  from './module.js';
import defaultMember, * as name            from './module.js';
import './module.js';

// imported modules are in strict mode whether you declare them as such or not.
// import statement can import values exported from an another module.
// imported values can be: function/object/primitive (string/number/boolean).
import fn     from './myFn.js';
import obj    from './myObj.js';
import string from './myString.js';
import number from './myNumber.js';
import bool   from './myBoolean.js';

// in native es6 you must specify file extension of the module:
import defaultMember from './myModule.js';
import defaultMember from './myModule'; // not found

// relative references must start with either '/', './', or '../'.
import defaultMember from './module.js';
import defaultMember from '/module.js';
import defaultMember from '../module.js';

// default import
import myDefault from './module.js';                // directly imports the default
import myDefault, * as myModule from './module.js'; // myModule used as a namespace
import myDefault, { foo, bar } from './module.js';  // specific, named imports

// import an entire module's contents.
// this inserts myModule into the current scope, containing all the exported bindings from 'module.js':
import * as myModule from './module.js';

// import a single member of a module. this inserts myMember into the current scope:
import { myMember } from './module.js';

// import multiple members of a module. this inserts both foo and bar into the current scope:
import { foo, bar } from './module.js';

// import a member with a more convenient alias. this inserts shortName into the current scope:
import { reallyReallyLongModuleMemberName as shortName } from './module.js';

// import an entire module for side effects only, without importing any bindings:
import './module.js';

// import multiple members of a module with convenient aliases:
import { reallyReallyLongModuleMemberName as shortName, anotherLongModuleName as shorty} from './module.js';