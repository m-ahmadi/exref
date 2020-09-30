(3500).toLocaleString() // '3,500'

num.toLocaleString(?locales='', ?options={
	minimumIntegerDigits:     1, // 1-21
	
	minimumFractionDigits:    0, // 0-20
	maximumFractionDigits:    Math.max(minimumFractionDigits, 3), // 0-20
	
	minimumSignificantDigits: 1,
	maximumSignificantDigits: 21,
	
	...
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
})