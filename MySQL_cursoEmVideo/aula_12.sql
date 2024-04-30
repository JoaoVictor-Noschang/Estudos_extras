select * from cursos
where nome LIKE 'p%';

select * from cursos
where nome LIKE '%A';

select * from cursos
where nome LIKE '%A%';

select * from cursos
where nome not LIKE '%A%';

select * from cursos
where nome like 'ph%p%';

select * from cursos
where nome like 'ph%p_';

select * from cursos
where nome LIKE 'p__t%';

select * from gafanhotos
where nome LIKE '%_silva%';

select * from gafanhotos
where nome LIKE '%silva';

select distinct nacionalidade from gafanhotos
order by nacionalidade;

select distinct carga from cursos
order by carga;

select count(*) from cursos;

select count(*) from cursos where carga > '40';

select max(carga) from cursos;

select max(totaulas) from cursos where ano = '2016';

select min(totaulas) from cursos where ano = '2016';

select sum(totaulas) from cursos where ano = '2016';

select avg(totaulas) from cursos where ano = '2016';

