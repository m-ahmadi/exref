/*
	A FOREIGN KEY in one table points to a PRIMARY KEY in another table.
	
	Foreign key relationships involve a parent table that holds the central data values,
	and a child table with identical values pointing back to its parent.
	The FOREIGN KEY clause is specified in the child table.
	
	It will reject any INSERT or UPDATE operation that attempts to create a foreign key value in a
	child table if there is not a matching candidate key value in the parent table.
*/

-- in emergencies you can turn it off for a second
SET FOREIGN_KEY_CHECKS = 0;
SET FOREIGN_KEY_CHECKS = 1;


/*
	Person
		Job				(fk to Person pk)
			Location	(fk to Job pk)
			Type		(fk to Job pk)
			Salary		(fk to Job pk)
		Eyes			(fk to Person pk)
			Color		(fk to Eyes pk)
			Vision		(fk to Eyes pk)
		Email			(fk to Person pk)
*/