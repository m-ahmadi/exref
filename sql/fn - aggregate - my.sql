SELECT COUNT(*) FROM payment -- number of rows in a table
SELECT COUNT(*) FROM payment WHERE amount > 2
SELECT COUNT(*), amount FROM payment WHERE amount > 9 GROUP BY amount

SELECT MAX(amount) FROM payment
SELECT MIN(amount) FROM payment
SELECT AVG(amount) FROM payment
SELECT SUM(amount) FROM payment
