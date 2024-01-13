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
        ResultSet re = statement.executeQuery("with V_modeles_annonces as (select id_modeles , nom_modele , id_annonce , etat_general , etat_validation , localisation , modeles_id_modeles , utilisateur_id_utilisateur , prix , id_annonce from modeles join annonces  on modeles_id_modeles = id_modeles and etat_validation= 30  ) , V_annonces_commission as (select V_modeles_annonces.* , commission.pourcentages from V_modeles_annonces join commission on V_modeles_annonces.id_modeles = commission.annonces_id_annonce ) select nom_modele , count(*) as nbreVoitureVendu, sum (prix*pourcentages) as prixvendu from V_annonces_commission group by nom_modele");
        ArrayList<AnnoncesClotureesStats> l = new ArrayList<>();
        while (re.next()) {
            AnnoncesClotureesStats v = new AnnoncesClotureesStats();
            v.setNbrePosteClotures(re.getInt(2));
            v.setNomModele(re.getString(1));
            v.setPrixvendu(re.getDouble(3));            
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
