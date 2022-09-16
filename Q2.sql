Step 1:
create table office (
id SERIAL primary KEY,
name varchar(255) not null,
location varchar(255) not null,
starting_year int not null
)
Step 2:
insert into office ("name" , "location", starting_year)
values ('Academy Finland', 'Espoo', 2017);

insert into office ("name" , "location", starting_year)
values ('Academy Sweden', 'Kista', 2015);

insert into office ("name" , "location", starting_year)
values ('Academy Germany', 'Munchen', 2018);

Step 3:
alter table tableware 
add office_id int

alter table tableware 
add foreign key (office_id) references office(id)

UPDATE tableware SET office_id  = 'Espoo'
WHERE office_id = null 

Step 4:
CRUD

