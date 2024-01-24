package AutoOccazMarket.AutoOccazMarket.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import AutoOccazMarket.AutoOccazMarket.entities.Annonces;
import java.util.List;


public interface AnnoncesRepository extends JpaRepository<Annonces, Integer>{

    List<Annonces> findByEtatValidation(Integer etatValidation);

    @Query("SELECT a FROM Annonces a " +
    "WHERE (:categorie IS NULL OR a.modeles.categorie.categorie = :categorie) " )

    List<Annonces> searchAnnoncesByCategorie(
    @Param("categorie") String categorie
    );
    @Query("SELECT a FROM Annonces a " +
    "WHERE (:marque IS NULL OR a.modeles.marque.marque = :marque) " )

    List<Annonces> searchAnnoncesByMarque(
    @Param("marque") String marque
    );

    @Query("SELECT a FROM Annonces a " +
    "WHERE (:carburant IS NULL OR a.modeles.carburant.carburant = :carburant)")

    List<Annonces> searchAnnoncesByCarburant(
    @Param("carburant") String carburant
    );

    @Query("SELECT a FROM Annonces a " +
    "WHERE (:modele IS NULL OR a.modeles.nomModele = :modele)")
    List<Annonces> searchAnnoncesByModeles(@Param("modele") String modele);

}
