-- postgres
-- table aliases appear in the FROM clause
-- when they appear in the FORM clause, they can appear everywhere (even in SELECT before the FORM clause)

SELECT p.name, b.title
  FROM publisher p JOIN book b
    ON (p.pub_id = b.pub_id)
  ORDER BY 1, 2;