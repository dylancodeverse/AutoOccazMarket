create or replace view V_modeles_annonces as 
select 
id_modeles 
, nom_modele 
, id_annonce 
, etat_general 
, etat_validation 
, localisation 
, modeles_id_modeles 
, utilisateur_id_utilisateur 
, prix
 from modeles join annonces  on modeles_id_modeles = id_modeles ;


create OR replace VIEW v_MODELES_ANNONCES_STATM as select 

nom_modele , count(id_annonce) as nb_annonces ,avg(prix) as avg_prix from V_modeles_annonces group by nom_modele; 


create or replace view V_modelesPost as select
V_modeles_annonces.*  from V_modeles_annonces where etat_validation = 20 ;

create or replace view V_modelesPostCount as select nom_modele , count(*) as nb_post from V_modelesPost group by nom_modele ;

create or replace view V_modelesCloturees as select
V_modeles_annonces.*  from V_modeles_annonces where etat_validation = 30 ;

create or replace view V_modelesCloturees as select nom_modele , count(*) as nb_post, sum(prix) as prixVendu  from V_modelesPost group by nom_modele ;
