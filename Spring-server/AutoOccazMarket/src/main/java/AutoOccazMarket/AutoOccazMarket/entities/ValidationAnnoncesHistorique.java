package AutoOccazMarket.AutoOccazMarket.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ValidationAnnoncesHistorique 
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "validationAnnoncesHistoriqueId")
    private Integer validationAnnoncesHistoriqueId ; 

    @Column(name = "annonces")
    private Annonces annonces ;

    @Column(name = "date_validation")
    private Date dateValidation ;

    private String description ;


    private Utilisateur validateur ;

    @Column(name = "etat_validation")
    private Integer etatValidation ;

    public Integer getValidationAnnoncesHistoriqueId() {
        return validationAnnoncesHistoriqueId;
    }

    public void setValidationAnnoncesHistoriqueId(Integer validationAnnoncesHistoriqueId) {
        this.validationAnnoncesHistoriqueId = validationAnnoncesHistoriqueId;
    }

    public Annonces getAnnonces() {
        return annonces;
    }

    public void setAnnonces(Annonces annonces) {
        this.annonces = annonces;
    }

    public Date getDateValidation() {
        return dateValidation;
    }

    public void setDateValidation(Date dateValidation) {
        this.dateValidation = dateValidation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Utilisateur getValidateur() {
        return validateur;
    }

    public void setValidateur(Utilisateur validateur) {
        this.validateur = validateur;
    }

    public Integer getEtatValidation() {
        return etatValidation;
    }

    public void setEtatValidation(Integer etatValidation) {
        this.etatValidation = etatValidation;
    }

}
