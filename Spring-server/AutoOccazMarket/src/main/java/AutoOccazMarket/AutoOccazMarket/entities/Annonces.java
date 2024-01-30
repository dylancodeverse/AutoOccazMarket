package AutoOccazMarket.AutoOccazMarket.entities;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;

@Entity

public class Annonces {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAnnonce ;

    @ManyToOne(fetch = FetchType.EAGER ,optional = false)
    private Modeles modeles ;

    @ManyToOne(fetch = FetchType.EAGER ,optional = false)
    private Utilisateur utilisateur;

    @Column(name = "etat_general")
    private Integer etatGeneral;

    private String localisation ;

    @Column(name = "etat_validation",nullable = false)
    private Integer etatValidation;

    @OneToMany    
    private List<PhotoAnnonce> photoAnnonces ;

    @OneToMany( fetch = FetchType.EAGER  , mappedBy = "annonces")
    @JsonIgnore
    private List<ValidationAnnoncesHistorique> validationAnnoncesHistoriques ;

    private Double prix ;

    private String description ;

    @CreationTimestamp
    private Timestamp datePoste ;

    @Transient
    private Integer status ;




    public static ArrayList<Annonces> getAnnoncesAccueil(Connection con, Integer userID) throws Exception {
        ArrayList<Annonces> annoncesList = new ArrayList<>();

        // SQL query with CTEs
        String sql = "WITH fav AS (SELECT id_annonce, 0 AS status FROM annonces WHERE etat_validation = 20), " +
                     "userfav AS (SELECT favoris.id_annonce, status FROM favoris JOIN annonces ON etat_validation = 20 WHERE iduser = ?), " +
                     "favunion AS (SELECT * FROM fav UNION ALL SELECT * FROM userfav), " +
                     "favok AS (SELECT id_annonce, SUM(status) AS status FROM favunion GROUP BY id_annonce), " +
                     "v_annonces AS (SELECT a.id_annonce, a.etat_general, a.etat_validation, a.localisation, a.prix, a.modeles_id_modeles, " +
                                    "a.utilisateur_id_utilisateur, a.description, a.annonces_order, a.date_poste, m.nom_modele, " +
                                    "m.carburant_id_carburant, m.categorie_id_categorie, m.marque_id_marque, c.categorie, cb.carburant, " +
                                    "ma.marque, u.birthday, u.hierarchie, u.mail, u.nom, u.prenom " +
                                    "FROM annonces a " +
                                    "JOIN modeles m ON a.modeles_id_modeles = m.id_modeles " +
                                    "JOIN categorie c ON m.categorie_id_categorie = c.id_categorie " +
                                    "JOIN carburant cb ON m.carburant_id_carburant = cb.id_carburant " +
                                    "JOIN marque ma ON m.marque_id_marque = ma.id_marque " +
                                    "JOIN utilisateur u ON a.utilisateur_id_utilisateur = u.id_utilisateur), " +
                     "v_annonces2 AS (SELECT * FROM v_annonces WHERE etat_validation = 20) " +
                     "SELECT v_annonces2.*, status FROM v_annonces2 JOIN favok ON v_annonces2.id_annonce = favok.id_annonce";

        try (PreparedStatement stmt = con.prepareStatement(sql)) {
            stmt.setInt(1, userID);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                // Create Annonces object and populate it with data from ResultSet
                Annonces annonce = new Annonces();
                // Populate Annonces fields from ResultSet, e.g., rs.getInt("id_annonce"), rs.getString("etat_general"), etc.
                annonce.setIdAnnonce(rs.getInt("id_annonce"));
                annonce.setEtatGeneral(rs.getInt("etat_general"));
                annonce.setLocalisation(rs.getString("localisation"));
                annonce.setPrix(rs.getDouble("prix"));
                annonce.setDescription(rs.getString("description"));
                annonce.setDatePoste(rs.getTimestamp("date_poste"));
                annonce.setStatus(rs.getInt("status"));

                Carburant c = new Carburant();
                c.setCarburant(rs.getString("categorie"));
                Categorie cc = new Categorie() ;
                cc.setCategorie(rs.getString("categorie"));                

                Marque m = new Marque(); 
                m.setMarque(rs.getString("marque"));

                Modeles modeles = new Modeles() ;
                modeles.setCarburant(c);
                modeles.setCategorie(cc);
                modeles.setMarque(m);
                modeles.setNomModele(rs.getString("nom_modele"));

                annonce.setModeles(modeles);

                Utilisateur u = new Utilisateur() ;
                u.setNom(rs.getString("nom"));
                u.setPrenom(rs.getString("prenom"));
                // ...
                annonce.setUtilisateur(u);
                annoncesList.add(annonce);
            }
        }

        return annoncesList;
    }

    public static List<Annonces> getFavAnnonces(Connection con, Integer userID) throws Exception {
        ArrayList<Annonces> annoncesList = new ArrayList<>();

        String sql = "WITH fav AS (SELECT id_annonce, 0 AS status FROM annonces WHERE etat_validation = 20), " +
                     "userfav AS (SELECT favoris.id_annonce, status FROM favoris JOIN annonces ON etat_validation = 20 WHERE iduser = ?), " +
                     "favunion AS (SELECT * FROM fav UNION ALL SELECT * FROM userfav), " +
                     "favok AS (SELECT id_annonce, SUM(status) AS status FROM favunion GROUP BY id_annonce), " +
                     "v_annonces AS (SELECT a.id_annonce, a.etat_general, a.etat_validation, a.localisation, a.prix, a.modeles_id_modeles, " +
                                    "a.utilisateur_id_utilisateur, a.description, a.annonces_order, a.date_poste, m.nom_modele, " +
                                    "m.carburant_id_carburant, m.categorie_id_categorie, m.marque_id_marque, c.categorie, cb.carburant, " +
                                    "ma.marque, u.birthday, u.hierarchie, u.mail, u.nom, u.prenom " +
                                    "FROM annonces a " +
                                    "JOIN modeles m ON a.modeles_id_modeles = m.id_modeles " +
                                    "JOIN categorie c ON m.categorie_id_categorie = c.id_categorie " +
                                    "JOIN carburant cb ON m.carburant_id_carburant = cb.id_carburant " +
                                    "JOIN marque ma ON m.marque_id_marque = ma.id_marque " +
                                    "JOIN utilisateur u ON a.utilisateur_id_utilisateur = u.id_utilisateur), " +
                     "v_annonces2 AS (SELECT * FROM v_annonces WHERE etat_validation = 20) " +
                     "SELECT v_annonces2.*, status FROM v_annonces2 JOIN favok ON v_annonces2.id_annonce = favok.id_annonce where status =1";

        try (PreparedStatement stmt = con.prepareStatement(sql)) {
            stmt.setInt(1, userID);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                // Create Annonces object and populate it with data from ResultSet
                Annonces annonce = new Annonces();
                // Populate Annonces fields from ResultSet, e.g., rs.getInt("id_annonce"), rs.getString("etat_general"), etc.
                annonce.setIdAnnonce(rs.getInt("id_annonce"));
                annonce.setEtatGeneral(rs.getInt("etat_general"));
                annonce.setLocalisation(rs.getString("localisation"));
                annonce.setPrix(rs.getDouble("prix"));
                annonce.setDescription(rs.getString("description"));
                annonce.setDatePoste(rs.getTimestamp("date_poste"));
                annonce.setStatus(rs.getInt("status"));

                Carburant c = new Carburant();
                c.setCarburant(rs.getString("categorie"));
                Categorie cc = new Categorie() ;
                cc.setCategorie(rs.getString("categorie"));                

                Marque m = new Marque(); 
                m.setMarque(rs.getString("marque"));

                Modeles modeles = new Modeles() ;
                modeles.setCarburant(c);
                modeles.setCategorie(cc);
                modeles.setMarque(m);
                modeles.setNomModele(rs.getString("nom_modele"));

                annonce.setModeles(modeles);

                Utilisateur u = new Utilisateur() ;
                u.setNom(rs.getString("nom"));
                u.setPrenom(rs.getString("prenom"));
                // ...
                annonce.setUtilisateur(u);
                annoncesList.add(annonce);
            }
        }

        return annoncesList;

    }
    public Timestamp getDatePoste() {
        return datePoste;
    }

    public void setDatePoste(Timestamp datePoste) {
        this.datePoste = datePoste;
    }

    public List<PhotoAnnonce> getPhotoAnnonces() {
        return photoAnnonces;
    }

    public void setPhotoAnnonces(List<PhotoAnnonce> photoAnnonces) {
        this.photoAnnonces = photoAnnonces;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrix() {
        return prix;
    }

    public void setPrix(Double prix) {
        this.prix = prix;
    }

    public Integer getIdAnnonce() {
        return idAnnonce;
    }

    public void setIdAnnonce(Integer idAnnonce) {
        this.idAnnonce = idAnnonce;
    }

    public Modeles getModeles() {
        return modeles;
    }

    public void setModeles(Modeles modeles) {
        this.modeles = modeles;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public Integer getEtatGeneral() {
        return etatGeneral;
    }

    public void setEtatGeneral(Integer etatGeneral) {
        this.etatGeneral = etatGeneral;
    }

    public String getLocalisation() {
        return localisation;
    }

    public void setLocalisation(String localisation) {
        this.localisation = localisation;
    }

    public Integer getEtatValidation() {
        return etatValidation;
    }

    public void setEtatValidation(Integer etatValidation) {
        this.etatValidation = etatValidation;
    }

    public List<ValidationAnnoncesHistorique> getValidationAnnoncesHistoriques() {
        return validationAnnoncesHistoriques;
    }

    public void setValidationAnnoncesHistoriques(List<ValidationAnnoncesHistorique> validationAnnoncesHistoriques) {
        this.validationAnnoncesHistoriques = validationAnnoncesHistoriques;
    }


    public Integer getStatus() {
        return status;
    }


    public void setStatus(Integer status) {
        this.status = status;
    }
    
}
