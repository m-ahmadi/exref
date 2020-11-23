create table parent (
	id int not null,
	primary key (id)
);
create table child (
	id int, 
	parent_id int,
	foreign key (parent_id) references parent(id)
		on {update|delete} {no action|restrict|cascade|set null|set default}
		on delete cascade -- when parent row deleted, delete all child rows referencing it
);

-- example
create table users (
	id int not null,
	name varchar(255) not null,
	primary key (id)
);
create table comments (
	id        int not null,
	user_id   int not null,
	text text not null,
	foreign key (user_id) references users(id)
);

-- edit
alter table comments
	add constraint comments_user_id_foreign foreign key (user_id) references users (id);
	
-- in mysql
create table foo (...) ENGINE=INNODB;