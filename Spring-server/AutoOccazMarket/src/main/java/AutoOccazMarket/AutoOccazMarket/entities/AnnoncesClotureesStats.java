package AutoOccazMarket.AutoOccazMarket.entities;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

public class AnnoncesClotureesStats {

    private String nomModele ;

    private Integer nbrePosteClotures ;

    private Double prixvendu;

    public static AnnoncesClotureesStats[] select(Connection connection ) throws Exception{
        Statement statement = connection.createStatement();
        ResultSet re = statement.executeQuery("with V_modeles_annonces as (select id_modeles , nom_modele , id_annonce , etat_general , etat_validation , localisation , modeles_id_modeles , utilisateur_id_utilisateur , prix from modeles join annonces  on modeles_id_modeles = id_modeles ) ,  V_modelesPost as (select V_modeles_annonces.*  from V_modeles_annonces where etat_validation = 20), V_modelesPostCount as (select nom_modele , count(*) as nb_post from V_modelesPost group by nom_modele ), V_annonces_avec_commission as (select commission.pourcentages , annonces_avec_commission.* from annonces_avec_commission join commission on commission.id_commission = commission_id_commission), V_modelesCloturees as (select V_modeles_annonces.* , pourcentages  from V_modeles_annonces  join V_annonces_avec_commission on id_annonce =annonces_id_annonce where etat_validation = 30), V_modelesCloturees_stat as (select nom_modele , count(*) as nb_post, sum(prix *pourcentages) as prixVendu  from V_modelesCloturees group by nom_modele ) select * from V_modelesCloturees_stat ");
        ArrayList<AnnoncesClotureesStats> l = new ArrayList<>();
        while (re.next()) {
            AnnoncesClotureesStats v = new AnnoncesClotureesStats();
            v.setNbrePosteClotures(re.getInt(0));
            v.setNomModele(re.getString(0));
            v.setPrixvendu(re.getDouble(0));            
            l.add(v);
        }
        return l.toArray(new AnnoncesClotureesStats[l.size()]);
    }    


    public String getNomModele() {
        return nomModele;
    }

    public void setNomModele(String nomModele) {
        this.nomModele = nomModele;
    }

    public Integer getNbrePosteClotures() {
        return nbrePosteClotures;
    }

    public void setNbrePosteClotures(Integer nbrePosteClotures) {
        this.nbrePosteClotures = nbrePosteClotures;
    }

    public Double getPrixvendu() {
        return prixvendu;
    }

    public void setPrixvendu(Double prixvendu) {
        this.prixvendu = prixvendu;
    }
}
