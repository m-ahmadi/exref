// default import: (person has to have a default export)
import person from './person';
import * as m from './person';

// named import: (person has to have a named export)
import { person } from './person';

// inside a module, top-level value of `this` is undefined.