--    left                           right
	table_name    join_keywords    table_name

-- USING() or ON column is usually placed at first
--------------------------------------------------------------------------------
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

-- inner join:
-- return rows from both tables when there's a match between the columns in both tables
-- no NULL since only returning when matched
select first_name, last_name, name, location
from employee inner join department		-- employee  join  department
	using(department_id)				-- on employee.employee_id = department.department_id

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- data
CREATE TABLE department (
  department_id INT NOT NULL AUTO_INCREMENT,
  name        VARCHAR(45) NULL,
  location    VARCHAR(45) NULL,
  budget_code VARCHAR(45) NULL,
  PRIMARY KEY (department_id)
) ENGINE = InnoDB;

CREATE TABLE employee (
  employee_id INT NOT NULL AUTO_INCREMENT,
  first_name    VARCHAR(45) NULL,
  last_name     VARCHAR(45) NULL,
  hire_date     DATE NULL,
  department_id INT NULL,
  PRIMARY KEY (employee_id),
  INDEX department_id_idx (department_id ASC) VISIBLE,
  CONSTRAINT department_id
    FOREIGN KEY (department_id)
    REFERENCES department (department_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;


INSERT INTO department (department_id,name,location,budget_code) VALUES (1,'Production','CA','A4');
INSERT INTO department (department_id,name,location,budget_code) VALUES (2,'R&D','AZ','B17');
INSERT INTO department (department_id,name,location,budget_code) VALUES (3,'Marketing','CA','A7');
INSERT INTO department (department_id,name,location,budget_code) VALUES (4,'Sales','CA','A7');
INSERT INTO department (department_id,name,location,budget_code) VALUES (5,'PR','UK','C9');

INSERT INTO employee (employee_id,first_name,last_name,hire_date,department_id) VALUES (734,'Aaron','Cooper','2009-04-17',2);
INSERT INTO employee (employee_id,first_name,last_name,hire_date,department_id) VALUES (735,'Lou','Donoghue','2005-05-22',4);
INSERT INTO employee (employee_id,first_name,last_name,hire_date,department_id) VALUES (736,'Alice','Bailey','1999-09-01',NULL);
INSERT INTO employee (employee_id,first_name,last_name,hire_date,department_id) VALUES (737,'Oswald','Hall','2011-03-19',5);
INSERT INTO employee (employee_id,first_name,last_name,hire_date,department_id) VALUES (738,'John','Velasquez','2010-04-05',4);
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@