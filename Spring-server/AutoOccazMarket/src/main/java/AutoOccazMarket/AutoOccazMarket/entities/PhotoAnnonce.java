package AutoOccazMarket.AutoOccazMarket.entities;

import jakarta.annotation.Generated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class PhotoAnnonce {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPhotoAnnonce;
    
    private Annonces annonces;
}
