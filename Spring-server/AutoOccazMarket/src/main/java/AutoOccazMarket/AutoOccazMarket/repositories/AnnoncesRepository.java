package AutoOccazMarket.AutoOccazMarket.repositories;

import AutoOccazMarket.AutoOccazMarket.entities.Annonces;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnnoncesRepository extends JpaRepository<Annonces, Integer> {

    List<Annonces> findByEtatValidation(Integer etatValidation);
    @Query("SELECT DISTINCT a FROM Annonces a " +
    "WHERE (COALESCE(:modeles) IS NULL OR LOWER(a.modeles.nomModele) IN :modeles) " +
    "AND (COALESCE(:categories) IS NULL OR LOWER(a.modeles.categorie.categorie) IN :categories) " +
    "AND (COALESCE(:marques) IS NULL OR LOWER(a.modeles.marque.marque) IN :marques) " +
    "AND (COALESCE(:carburants) IS NULL OR LOWER(a.modeles.carburant.carburant) IN :carburants) " +
    "AND a.etatValidation = 20")
List<Annonces> searchAnnoncesByFilters(
 @Param("modeles") List<String> modeles,
 @Param("categories") List<String> categories,
 @Param("marques") List<String> marques,
 @Param("carburants") List<String> carburants
);

}
