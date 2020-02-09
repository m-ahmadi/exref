SELECT name, title, price, advance          -- 4
  FROM publisher JOIN book USING (pub_id)   -- 1
  WHERE price > 10 AND advance > 10000      -- 2
  ORDER BY 1, 2;                            -- 3