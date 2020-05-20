// proj/webpack.partial.js
const webpack = require('webpack');
 
module.exports = {
	plugins: [
		new webpack.DefinePlugin({'VERSION': 4711})
	]
};

// app.component.ts
declare const VERSION: string;
@Component({selector: 'app-root',...}) class AppComponent { title = 'Version: ' + VERSION }

// ng serve --extra-webpack-config webpack.partial.js -o