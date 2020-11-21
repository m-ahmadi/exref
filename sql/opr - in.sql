-- postgres

-- logical operators (like AND and OR) in a SELECT statement:
SELECT lastname, firstname, state FROM author WHERE state='CA' or state='TX' or state='NY';

-- easier way with the IN operator:
SELECT lastname, firstname, state FROM author WHERE state IN ('CA', 'TX', 'NY');


-- mysql
-- you can use IN clause to replace many OR conditions
SELECT * FROM players WHERE score=250 OR score=220 OR score=170
SELECT * FROM players WHERE score IN (250, 220, 170)