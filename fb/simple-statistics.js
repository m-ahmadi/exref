/* cdn
	https://cdn.jsdelivr.net/npm/simple-statistics
	https://unpkg.com/simple-statistics
	
	<script type=module>
	https://cdn.jsdelivr.net/npm/simple-statistics@latest/index.js?module
	https://unpkg.com/simple-statistics@latest/index.js?module
*/
const ss = require('simple-statistics');

ss.min([4,7,3]) // 3
ss.max([4,7,3]) // 7
ss.sum([4,7,3]) // 14

ss.mean([5,10])      // 7.5
ss.mode([4,4,4,2,2]) // 4

ss.median([2,4,6])   // 4
ss.median([2,4,6,8]) // 5 (4+6/2)