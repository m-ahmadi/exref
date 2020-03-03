-- The '%' and '_' are wildcard characters.
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- find authors whose last name started with 'S':
SELECT lastname, firstname
FROM author
WHERE lastname LIKE 'S%'
ORDER BY 1, 2;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- all last names that have any number of characters before the 's':
SELECT lastname, firstname
FROM author
WHERE lastname LIKE '%s'
ORDER BY 1, 2;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- any lastname that contains an 's' anywhere in the name:
SELECT lastname, firstname
FROM author
WHERE lastname LIKE '%s%'
ORDER BY 1, 2;
-- plus last names that start with a capital 'S'
SELECT lastname, firstname
FROM author
WHERE lastname LIKE '%s%'
	 OR lastname LIKE 'S%'
ORDER BY 1, 2;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- find a specific character in a specific position:
SELECT lastname, firstname, phone
FROM author
WHERE phone LIKE '%836%'
ORDER BY 1, 2, 3;
-- but that would also return a phone like: 818 567-8365, since 836 is included in the phone number.
-- to get sql to look in the exact place where a prefix is, you can use the '_' instead of the '%' wildcard character.
-- The '_' means return all characters in the exact position in the text where the '_' is placed.
-- example:
WHERE lastname LIKE 'c_t' -- cat, cot, cut
-- back to the phone number,
-- match for anything in the first four characters,
-- then the next 3 characters must be '836',
-- then find a match for anything after that:
SELECT lastname, firstname, phone
FROM author
WHERE phone LIKE '____836%'
ORDER BY 1, 2, 3;