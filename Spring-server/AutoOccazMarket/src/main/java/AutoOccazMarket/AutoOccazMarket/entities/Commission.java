package AutoOccazMarket.AutoOccazMarket.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Commission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_commission")
    private Integer idCommission ;

    @ManyToOne(fetch = FetchType.EAGER,optional = false)
    private Annonces annonces ;

    private Double pourcentages ;

    private Integer moisvalidable;

    public Integer getIdCommission() {
        return idCommission;
    }

    public void setIdCommission(Integer idCommission) {
        this.idCommission = idCommission;
    }

    public Annonces getAnnonces() {
        return annonces;
    }

    public void setAnnonces(Annonces annonces) {
        this.annonces = annonces;
    }

    public Double getPourcentages() {
        return pourcentages;
    }

    public void setPourcentages(Double pourcentages) {
        this.pourcentages = pourcentages;
    }

    public Integer getMoisvalidable() {
        return moisvalidable;
    }

    public void setMoisvalidable(Integer moisvalidable) {
        this.moisvalidable = moisvalidable;
    } 
}
