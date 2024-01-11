package AutoOccazMarket.AutoOccazMarket.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import AutoOccazMarket.AutoOccazMarket.entities.Annonces;
import java.util.List;


public interface AnnoncesRepository extends JpaRepository<Annonces, Integer>{

    List<Annonces> findByEtatValidation(Integer etatValidation);
}
