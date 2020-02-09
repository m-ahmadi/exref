function c(str) {
	// replaces anything that's not a letter or a number, and makes it all lower case.
	return str.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

c("John Smith's Cool Page")
"john_smith_s_cool_page"

c("algorithms & data structures\@math characters.txt")
"algorithms___data_structures_math_characters_txt"

c("./algorithms & data structures/order-of-growth-2.png")
"__algorithms___data_structures_order_of_growth_2_png"