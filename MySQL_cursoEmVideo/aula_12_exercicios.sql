/* 01 - Uma lista com o nome de todos os gafanhotos */

select * from gafanhotos;


/* 02 - Uma lista com os dados de todos aqueles que nasceram entre 01/Jan/2000 e 31/Dez/2016 */

select * from gafanhotos 
where nascimento between '2000-01-01' and '2016-12-31';


/* 03 - Uma lista com todos os homens que trabalham com programação */

select * from gafanhotos 
where profissao = 'programador' 
and sexo = 'M';


/* 04 - Uma lista com todas a mulheres que nasceram no Brasil e tem o nome começado em J */

select * from gafanhotos 
where sexo = 'F' 
and nome like 'j%' 
and nacionalidade = 'Brasil';


/* 05 - Uma lista com nome e nacionalidade de todos os homensque tês Silva no nome, não naceram no Brasil e pesam menos de 100 Kg */ 

select nome, nacionalidade from gafanhotos
where sexo = 'M'
and nome like '%silva%'
and not nacionalidade = 'Brasil'
and peso < '100';


/* 06 - Qual é a maior altura entre os gafanhotos homens que moram no brasil */

select max(altura) from gafanhotos 
where sexo = 'M'
and nacionalidade = 'Brasil';


/* 07 - Qual é a média de peso entre os gafanhotos cadastrados */

select avg(peso) from gafanhotos;


/* 08 - Qual é o menor peso entre as gafanhotos mulheres que nasceram fora do Brasil e entre 01/Jan/1990 e 31/Dez/2000 ? */

select min(peso) from gafanhotos
where sexo = 'F'
and not nacionalidade = 'Brasil'
and nascimento between '1990-01-01' and '2000-12-31';


/* 09 - Quantos gafanhotos mulheres tem mais de 1.90 de altura */

select count(*) from gafanhotos 
where sexo = 'F'
and altura > '1.90';

