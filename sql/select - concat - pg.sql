SELECT 'Publisher: ' || name || ' is based in ' || city || ', ' || state
  FROM publisher;

SELECT 'Publisher: ' || name || ' is based in ' || city || ', ' || state "My Heading"
  FROM publisher;

SELECT 'Average price is: ' || AVG(price)
  FROM book;