-- logical operators (like AND and OR) in a SELECT statement:
SELECT lastname, firstname, state
FROM author
WHERE state = 'CA' or state = 'TX' or state = 'NY';

-- easier way with the IN operator:
SELECT lastname, firstname, state
FROM author
WHERE state IN ('CA', 'TX', 'NY');