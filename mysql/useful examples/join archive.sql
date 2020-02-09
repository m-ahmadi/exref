--------------------------------------------------------------------------------------------------
SELECT       `type`,price,title,         name,address,city,       royaltyshare,isbn

FROM book 
  JOIN publisher USING (pub_id)
  JOIN bookauthor USING (isbn);
--------------------------------------------------------------------------------------------------
SELECT       type,price,title,        royaltyshare,author_order,        firstname,lastname

FROM book 
  JOIN bookauthor USING (isbn)
  JOIN author USING (ssn);
--------------------------------------------------------------------------------------------------




#====================
#=  JOIN PRACTICE  ==
#====================

SELECT       comment_text,comment_date,        p_cat,model,price,      firstname,lastname
FROM comments 
  JOIN motherboard USING (product_id)
  JOIN users USING (user_id);
--------------------------------------------------------------------------------------------------
SELECT p_cat, model, comment_text
FROM comments 
  JOIN motherboard USING (product_id) 
  JOIN users USING (user_id);
--------------------------------------------------------------------------------------------------





#==============
#=  bookpub  ==
#==============

SELECT       type,price,title,         name,address,city,       royaltyshare,isbn

FROM book 
  JOIN publisher USING (pub_id)
  JOIN bookauthor USING (isbn);
--------------------------------------------------------------------------------------------------
SELECT       type,price,title,        royaltyshare,author_order,        firstname,lastname

FROM book 
  JOIN bookauthor USING (isbn)
  JOIN author USING (ssn);
--------------------------------------------------------------------------------------------------