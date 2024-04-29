create table if not exists teste(
id int,
nome varchar(10),
idade int
);

insert into teste value
('1', 'João', '22'),
('2', 'Maria', '12'),
('3', 'Pedro', '44');

select * from teste;

drop table if exists teste;