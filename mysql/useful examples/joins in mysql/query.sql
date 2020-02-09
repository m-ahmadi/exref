--    left                           right
	table_name    join_keywords    table_name

-- USING() or ON column is usually placed at first
-------------------------------------------------------------------------------------------------------
-- right join:
-- return all rows from right table with the matching rows in left table
-- NULL in left side when no match

select *
from employee right join department
	using(department_id)

/*	result:
	using() column at first
	then department cols
	then employee cols
*/
-------------------------------------------------------------------------------------------------------
-- left join
-- return all rows from left table with matching rows in right table
-- NULL in right side when no match

select *
from employee left join department
	using(department_id)

/*	result:
	using() column at first
	then employee cols
	then department cols
*/
-------------------------------------------------------------------------------------------------------
-- inner join:
-- return rows from both tables when there's a match between the columns in both tables
-- no NULL since only returning when matched

select first_name, last_name, name, location
from employee inner join department		-- employee  join  department
	using(department_id)				-- on employee.employee_id = department.department_id

-------------------------------------------------------------------------------------------------------