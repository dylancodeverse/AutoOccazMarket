package AutoOccazMarket.AutoOccazMarket.entities;


import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

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
    private List<ValidationAnnoncesHistorique> validationAnnoncesHistoriques ;

    private Double prix ;

    private String description ;

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
    
}
