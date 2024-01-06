package AutoOccazMarket.AutoOccazMarket.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class PhotoAnnonce {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPhotoAnnonce;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    private Annonces annonces;

    public Integer getIdPhotoAnnonce() {
        return idPhotoAnnonce;
    }

    public void setIdPhotoAnnonce(Integer idPhotoAnnonce) {
        this.idPhotoAnnonce = idPhotoAnnonce;
    }

    public Annonces getAnnonces() {
        return annonces;
    }

    public void setAnnonces(Annonces annonces) {
        this.annonces = annonces;
    }
}
