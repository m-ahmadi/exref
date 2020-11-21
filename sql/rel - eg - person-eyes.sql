select * from eyes
select * from person

select name, age, color, vision
from person join eyes
	using(eyes_id)
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- data
CREATE TABLE eyes (
  eyes_id   INT NOT NULL AUTO_INCREMENT,
  person_id INT NULL,
  color     VARCHAR(45) NULL,
  vision    INT NULL,
  PRIMARY KEY (eyes_id)
) ENGINE = InnoDB;

CREATE TABLE person (
  person_id INT NOT NULL AUTO_INCREMENT,
  name      VARCHAR(45) NULL,
  age       INT NULL,
  eyes_id   INT NULL,
  PRIMARY KEY (person_id),
  INDEX eyes_id_idx (eyes_id ASC) VISIBLE,
  CONSTRAINT eyes_id
    FOREIGN KEY (eyes_id)
    REFERENCES eyes (eyes_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

INSERT INTO eyes (eyes_id,person_id,color,vision) VALUES (1,1,'red',12);
INSERT INTO eyes (eyes_id,person_id,color,vision) VALUES (2,2,'green',16);
INSERT INTO eyes (eyes_id,person_id,color,vision) VALUES (3,3,'blue',14);
INSERT INTO eyes (eyes_id,person_id,color,vision) VALUES (4,4,'brown',17);
INSERT INTO eyes (eyes_id,person_id,color,vision) VALUES (5,5,'black',11);

INSERT INTO person (person_id,name,age,eyes_id) VALUES (1,'mohammad',27,1);
INSERT INTO person (person_id,name,age,eyes_id) VALUES (2,'saeed',28,2);
INSERT INTO person (person_id,name,age,eyes_id) VALUES (3,'farhad',27,3);
INSERT INTO person (person_id,name,age,eyes_id) VALUES (4,'mohsen',34,4);
INSERT INTO person (person_id,name,age,eyes_id) VALUES (5,'tooraj',29,5);
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@