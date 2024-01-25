package AutoOccazMarket.AutoOccazMarket.repositories;

import AutoOccazMarket.AutoOccazMarket.entities.Annonces;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnnoncesRepository extends JpaRepository<Annonces, Integer> {

    List<Annonces> findByEtatValidation(Integer etatValidation);
    
    @Query("SELECT a FROM Annonces a " +
    "WHERE (:categorie IS NULL OR LOWER(a.modeles.categorie.categorie) LIKE LOWER(CONCAT('%', :categorie, '%'))) and a.etatValidation = 20")
    List<Annonces> searchAnnoncesByCategorie(@Param("categorie") String categorie);

    @Query("SELECT a FROM Annonces a " +
           "WHERE (:marque IS NULL OR LOWER(a.modeles.marque.marque) LIKE LOWER(CONCAT('%', :marque, '%'))) and a.etatValidation = 20")
    List<Annonces> searchAnnoncesByMarque(@Param("marque") String marque);

    @Query("SELECT a FROM Annonces a " +
           "WHERE (:carburant IS NULL OR LOWER(a.modeles.carburant.carburant) LIKE LOWER(CONCAT('%', :carburant, '%'))) and a.etatValidation = 20")
List<Annonces> searchAnnoncesByCarburant(@Param("carburant") String carburant);

    @Query("SELECT a FROM Annonces a " +
           "WHERE (:modele IS NULL OR LOWER(a.modeles.nomModele) LIKE LOWER(CONCAT('%', :modele, '%'))) and a.etatValidation = 20")
    List<Annonces> searchAnnoncesByModeles(@Param("modele") String modele);
}
