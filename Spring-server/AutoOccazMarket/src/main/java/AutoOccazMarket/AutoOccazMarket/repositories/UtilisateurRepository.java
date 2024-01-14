package AutoOccazMarket.AutoOccazMarket.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import AutoOccazMarket.AutoOccazMarket.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer> {
    Boolean existsByMail(@Param("mail") String mail) ;

    Optional<Utilisateur> findByMail(@Param("mail") String mail);
}   
