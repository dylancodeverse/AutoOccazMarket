



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
