import { names } from 'module-name' with {};
import { names } from 'module-name' with { key: 'data' };
import { names } from 'module-name' with { key: 'data', key2: 'data2' };
import { names } from 'module-name' with { key: 'data', key2: 'data2', /* ..., */ keyN: 'dataN' };

export { names } from 'module-name' with {};
export { names } from 'module-name' with { key: 'data' };
export { names } from 'module-name' with { key: 'data', key2: 'data2' };
export { names } from 'module-name' with { key: 'data', key2: 'data2', /* ..., */ keyN: 'dataN' };

import(moduleName, { with: { key: 'data', ... } });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic
import data from 'https://example.com/data.json';

import data from 'https://example.com/data.json' with {type: 'json'};

import styles from 'https://example.com/styles.css' with {type: 'css'};

// typescript
import type { TypeFromRequire } from 'pkg' with {'resolution-mode': 'require'};

// dynamic import
import('./data.json', {with:{type: 'json'}});
