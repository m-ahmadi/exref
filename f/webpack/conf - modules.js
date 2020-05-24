// considered modules: import, require, define, css/scss @import, css url(), img tag

// absolute paths
import '/home/me/file';
import 'C:\\Users\\me\\file';

// relative paths
import '../src/file1';
import './file2';

// module paths (searched for in dirs specified in resolve.modules)
import 'module';
import 'module/lib/file';

module.exports = {
	module: {
		resolve: {
			modules: ['./js/src'] // what directories should be searched when resolving modules.
			alias: {
				math: 'src/math/',
				Templates: 'src/templates/'
				/*
					import utility from '../../utilities/utility';
					import utility from 'Utilities/utility';
				*/
			}
		}
	}
};