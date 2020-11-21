# mysql
SELECT first_name, last_name, address, city, country
FROM customer
	JOIN address  USING(address_id)
    JOIN city     USING(city_id)
    JOIN country  USING(country_id)
WHERE country = 'United States'
ORDER BY first_name ASC
LIMIT 5