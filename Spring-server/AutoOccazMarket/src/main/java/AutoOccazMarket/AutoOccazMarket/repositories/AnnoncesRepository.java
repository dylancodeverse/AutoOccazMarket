package AutoOccazMarket.AutoOccazMarket.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import AutoOccazMarket.AutoOccazMarket.entities.Annonces;

public interface AnnoncesRepository extends JpaRepository<Annonces, Integer>{
    
}
