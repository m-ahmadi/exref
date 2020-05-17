/*
	In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*	exporting a declaration
	
	any declaration (such as a variable, function, class, type alias, or interface),
	can be exported by adding the export keyword.
*/

// Validation.ts
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
// ZipCodeValidator.ts
export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Export statements
	use export statements when exports need to be renamed for consumers:
*/
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Import
import { ZipCodeValidator } from './ZipCodeValidator';

let myValidator = new ZipCodeValidator();

// imports can also be renamed
import { ZipCodeValidator as ZCV } from './ZipCodeValidator';
let myValidator = new ZCV();