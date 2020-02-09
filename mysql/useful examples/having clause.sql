/*
	The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions.
*/
SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
HAVING aggregate_function(column_name) operator value;

SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM Orders INNER JOIN Employees
	ON Orders.EmployeeID = Employees.EmployeeID
GROUP BY LastName
HAVING COUNT(Orders.OrderID) > 10;