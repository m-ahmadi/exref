// .prettierrc | .prettierrc.json/yaml/yml (extension-less takes precedence, json|yaml syntax)
{
	"useTabs": true,
}

// .prettierrc.js | prettier.config.js
module.exports = {
	"useTabs": true,
};

// package.json
{
	"prettier": {
		"useTabs": true
	}
}

// .prettierrc.toml (the .toml extension is required)