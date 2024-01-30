



with V_modeles_annonces as (select 
id_modeles 
, nom_modele 
, id_annonce 
, etat_general 
, etat_validation 
, localisation 
, modeles_id_modeles 
, utilisateur_id_utilisateur 
, prix
 from modeles join annonces  on modeles_id_modeles = id_modeles ) ,

v_MODELES_ANNONCES_STATM as (
select nom_modele , count(id_annonce) as nb_annonces ,avg(prix) as avg_prix from V_modeles_annonces group by nom_modele 

)
select * from v_MODELES_ANNONCES_STATM ;





WITH V_modeles_annonces AS (
    SELECT
        modeles.id_modeles,
        modeles.nom_modele,
        annonces.id_annonce,
        annonces.etat_general,
        annonces.etat_validation,
        annonces.localisation,
        annonces.modeles_id_modeles,
        annonces.utilisateur_id_utilisateur,
        annonces.prix
    FROM
        modeles
    JOIN
        annonces ON modeles.id_modeles = annonces.modeles_id_modeles
    WHERE
        annonces.etat_validation = 30
),
V_annonces_commission AS (
    SELECT
        V_modeles_annonces.*,
        commission.pourcentages
    FROM
        V_modeles_annonces
    JOIN
        commission ON V_modeles_annonces.id_annonce = commission.annonces_id_annonce
)
SELECT
    nom_modele,
    COUNT(*) AS nbreVoitureVendu,
    SUM(prix * pourcentages) AS prixvendu
FROM
    V_annonces_commission
GROUP BY
    nom_modele;






with 
v_annonces as 
(select annonces.* , 0 as pourcentages from annonces), 

v_annonces2 as
( select annonces.* , commission.pourcentages as pourcentages from annonces  
    join commission on annonces.id_annonce = commission.annonces_id_annonce ) ,
    
v_annonces3 as (select v_annonces.* from v_annonces union all  (select v_annonces2.* from v_annonces2) ) , 

v_annonces4 as (select id_annonce ,etat_general ,localisation ,prix , modeles_id_modeles, utilisateur_id_utilisateur 
            , description , sum(pourcentages) as commission from v_annonces3 
                group by  id_annonce ,etat_general ,localisation ,prix , modeles_id_modeles, utilisateur_id_utilisateur , description) , 
                
v_annonces5 as (select v_annonces4.* , modeles.* from v_annonces4 join modeles on modeles.id_modeles 
                                =v_annonces4.modeles_id_modeles) ,
                                
v_annonces6 as (select v_annonces5.* , carburant from v_annonces5 join carburant on carburant.id_carburant = v_annonces5.carburant_id_carburant),

v_annonces7 as (select v_annonces6.* ,categorie from v_annonces6 join categorie on categorie.id_categorie = v_annonces6.categorie_id_categorie) ,

v_annonces8 as (select v_annonces7.* , marque from v_annonces7 join marque on marque.id_marque = v_annonces7.marque_id_marque)

select  id_annonce ,etat_general ,localisation ,prix , utilisateur_id_utilisateur ,description,commission ,nom_modele ,carburant ,categorie     ,marque from v_annonces8
;



create table favoris (
    idfavoris serial primary key ,
    iduser integer ,
    id_annonce integer ,
    status integer default(0),
    foreign key(iduser) references utilisateur( id_utilisateur),
    foreign key(id_annonce) references annonces(id_annonce)
) ;



with v_annonces as (SELECT 
    a.id_annonce,
    a.etat_general,
    a.etat_validation,
    a.localisation,
    a.prix,
    a.modeles_id_modeles,
    a.utilisateur_id_utilisateur,
    a.description,
    a.annonces_order,
    a.date_poste,
    m.nom_modele,
    m.carburant_id_carburant,
    m.categorie_id_categorie,
    m.marque_id_marque,
    c.categorie,
    cb.carburant,
    ma.marque,
    u.birthday,
    u.hierarchie,
    u.mail,
    u.nom,
    u.prenom
FROM 
    annonces a
JOIN 
    modeles m ON a.modeles_id_modeles = m.id_modeles
JOIN 
    categorie c ON m.categorie_id_categorie = c.id_categorie
JOIN 
    carburant cb ON m.carburant_id_carburant = cb.id_carburant
JOIN 
    marque ma ON m.marque_id_marque = ma.id_marque
JOIN 
    utilisateur u ON a.utilisateur_id_utilisateur = u.id_utilisateur
) , 
v_annonces2 as( select * from v_annonces where etat_validation =20) 
select v_annonces2.* from v_annonces2  ;



-- favoris

with fav AS (select id_annonce ,0 as status from annonces where etat_validation=20),
userfav as (select favoris.id_annonce ,status from favoris join annonces on etat_validation=20 where iduser =  //iduser) , 
favunion as (select * from fav union all select * from userfav ) , favok as (select id_annonce ,sum(status) as status from favunion group by id_annonce),
v_annonces as (SELECT 
    a.id_annonce,
    a.etat_general,
    a.etat_validation,
    a.localisation,
    a.prix,
    a.modeles_id_modeles,
    a.utilisateur_id_utilisateur,
    a.description,
    a.annonces_order,
    a.date_poste,
    m.nom_modele,
    m.carburant_id_carburant,
    m.categorie_id_categorie,
    m.marque_id_marque,
    c.categorie,
    cb.carburant,
    ma.marque,
    u.birthday,
    u.hierarchie,
    u.mail,
    u.nom,
    u.prenom
FROM 
    annonces a
JOIN 
    modeles m ON a.modeles_id_modeles = m.id_modeles
JOIN 
    categorie c ON m.categorie_id_categorie = c.id_categorie
JOIN 
    carburant cb ON m.carburant_id_carburant = cb.id_carburant
JOIN 
    marque ma ON m.marque_id_marque = ma.id_marque
JOIN 
    utilisateur u ON a.utilisateur_id_utilisateur = u.id_utilisateur
) , 
v_annonces2 as( select * from v_annonces where etat_validation =20) 

select v_annonces2.* , status from v_annonces2 join favok on v_annonces2.id_annonce =favok.id_annonce 
;


WITH fav AS (SELECT id_annonce, 0 AS status FROM annonces WHERE etat_validation = 20),  
                     userfav AS (SELECT favoris.id_annonce, status FROM favoris JOIN annonces ON etat_validation = 20 and favoris.id_annonce = annonces.id_annonce WHERE iduser = 1),  
                     favunion AS (SELECT * FROM fav UNION ALL SELECT * FROM userfav),  
                     favok AS (SELECT id_annonce, SUM(status) AS status FROM favunion GROUP BY id_annonce),  
                     v_annonces AS (SELECT a.id_annonce, a.etat_general, a.etat_validation, a.localisation, a.prix, a.modeles_id_modeles,  
                                    a.utilisateur_id_utilisateur, a.description, a.annonces_order, a.date_poste, m.nom_modele,  
                                    m.carburant_id_carburant, m.categorie_id_categorie, m.marque_id_marque, c.categorie, cb.carburant,  
                                    ma.marque, u.birthday, u.hierarchie, u.mail, u.nom, u.prenom  
                                    FROM annonces a  
                                    JOIN modeles m ON a.modeles_id_modeles = m.id_modeles  
                                    JOIN categorie c ON m.categorie_id_categorie = c.id_categorie  
                                    JOIN carburant cb ON m.carburant_id_carburant = cb.id_carburant  
                                    JOIN marque ma ON m.marque_id_marque = ma.id_marque  
                                    JOIN utilisateur u ON a.utilisateur_id_utilisateur = u.id_utilisateur),  
                     v_annonces2 AS (SELECT * FROM v_annonces WHERE etat_validation = 20)  
                     SELECT v_annonces2.*, status FROM v_annonces2 JOIN favok ON v_annonces2.id_annonce = favok.id_annonce where status =1;